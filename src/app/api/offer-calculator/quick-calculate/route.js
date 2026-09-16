import { NextResponse } from "next/server";
import { createOrUpdateCalculation } from "@/lib/offerCalculator/store";
import { validateCalculatorProject } from "@/lib/offerCalculator/validation";

// Average surface estimations per room based on size preset:
// Small: ~12m² floor/ceiling, ~28m² walls (3x4m, 2.5m ceiling minus doors/windows)
// Medium: ~18m² floor/ceiling, ~38m² walls (4x4.5m, 2.5m ceiling)
// Large: ~26m² floor/ceiling, ~50m² walls (5x5.2m, 2.5m ceiling)
const ROOM_SIZE_SURFACES = {
  small: { wallArea: 28, ceilingArea: 12 },
  medium: { wallArea: 38, ceilingArea: 18 },
  large: { wallArea: 50, ceilingArea: 26 }
};

const WALL_SIZE_AREAS = {
  small: 10,
  medium: 15,
  large: 25,
  very_large: 45
};

const LIVING_AREA_ROOM_FACTORS = {
  up_to_50: 3,
  "51_70": 4,
  "71_90": 5,
  "91_120": 6,
  "120_plus": 8
};

export async function POST(request) {
  try {
    const payload = await request.json().catch(() => ({}));
    let rawPropertyType = payload.propertyType || "apartment";
    // Normalize quick property types (e.g., "2_5_apartment" -> "apartment")
    let propertyType = rawPropertyType;
    if (rawPropertyType.includes("apartment")) {
      propertyType = "apartment";
    } else if (!["apartment", "house", "commercial", "facade", "room", "other"].includes(rawPropertyType)) {
      propertyType = "apartment";
    }
    const livingArea = String(payload.livingArea || "");
    const roomCountFromArea = LIVING_AREA_ROOM_FACTORS[livingArea];
    const roomCount = Math.max(1, Math.min(20, roomCountFromArea || Number(payload.roomCount) || 1));
    const roomSize = ["small", "medium", "large"].includes(payload.roomSize) ? payload.roomSize : "medium";
    const selectedServices = Array.isArray(payload.services) ? payload.services : ["paint_walls"];
    const projectNotes = String(payload.projectNotes || "").trim();

    const surfaces = ROOM_SIZE_SURFACES[roomSize] || ROOM_SIZE_SURFACES.medium;
    const totalWallArea = Math.round(surfaces.wallArea * roomCount);
    const totalCeilingArea = Math.round(surfaces.ceilingArea * roomCount);

    const components = [];
    const services = [];
    const quantities = {};

    const workScope = payload.workScope || "walls_ceilings";
    const condition = payload.condition || "good";
    const specialWork = Array.isArray(payload.specialWork) ? payload.specialWork : [];
    const postalCode = payload.postalCode || "";
    const locationCity = payload.locationCity || "";

    if (propertyType === "facade") {
      components.push("facade");
      quantities.facadeArea = Math.max(50, roomCount * 45);
      services.push("wall_paint_2_coats");
    } else {
      const wantsCeiling = workScope === "ceilings" || workScope === "walls_ceilings" || workScope === "individual_rooms" || selectedServices.includes("paint_ceilings");
      const wantsWalls = workScope === "walls" || workScope === "walls_ceilings" || workScope === "individual_walls" || workScope === "individual_rooms" || selectedServices.includes("paint_walls");

      if (wantsWalls) {
        components.push("walls");
        if (workScope === "individual_walls") {
          const wallCount = payload.individualWallCount === "4_plus" ? 4 : Number(payload.individualWallCount) || 1;
          quantities.wallArea = wallCount * (WALL_SIZE_AREAS[payload.individualWallSize] || WALL_SIZE_AREAS.medium);
        } else {
          quantities.wallArea = totalWallArea;
        }
        services.push("wall_paint_2_coats");
      }

      if (wantsCeiling) {
        components.push("ceilings");
        quantities.ceilingArea = totalCeilingArea;
        services.push("ceiling_paint_2_coats");
      }

      if (workScope === "floor") {
        components.push("other");
        quantities.otherUnits = Math.max(1, Number(payload.floorArea) || 1);
        services.push("paint_other");
      }

      if (workScope === "other") {
        components.push("other");
        quantities.otherUnits = 1;
        services.push("paint_other");
      }

      if (condition === "minor_repairs" || selectedServices.includes("filling_spackling")) {
        services.push("filling_spackling");
      }
      if (condition === "renovation") {
        if (!services.includes("filling_spackling")) services.push("filling_spackling");
        services.push("priming_sealing");
      }
      if (selectedServices.includes("priming_sealing") && !services.includes("priming_sealing")) {
        services.push("priming_sealing");
      }
      services.push("covering_protection");
    }

    if (components.length === 0) {
      components.push("walls");
      quantities.wallArea = totalWallArea;
      services.push("wall_paint_2_coats");
    }
    if (services.length === 0) {
      services.push("wall_paint_2_coats");
    }

    const projectPayload = {
      mode: "CALCULATE",
      propertyType,
      roomType: payload.roomType || "",
      components,
      services,
      quantities,
      projectNotes: [
        `Quick Estimate: ${roomCount} room(s), size: ${roomSize}, scope: ${workScope}, condition: ${condition}`,
        postalCode ? `Location: ${postalCode} ${locationCity}` : "",
        projectNotes
      ].filter(Boolean).join(" | ")
    };

    const validation = validateCalculatorProject(projectPayload);
    if (!validation.valid) {
      return NextResponse.json({ errors: validation.errors }, { status: 400 });
    }

    // The estimated surfaces above describe the scope for the CRM record and the PDF, but
    // the price itself comes from the admin-editable reference values keyed on the raw
    // property type (2½-room, 3½-room, house, …) rather than from derived square metres.
    const result = await createOrUpdateCalculation(validation.values, {
      condition,
      postalCode,
      locationCity,
      source: "QUICK_QUOTE",
      quickQuote: { propertyType: rawPropertyType, workScope, condition, postalCode, livingArea, specialWork }
    });

    return NextResponse.json({
      sessionId: result.sessionId,
      status: result.status,
      currency: result.currency,
      estimatedSurfaces: {
        wallArea: totalWallArea,
        ceilingArea: totalCeilingArea,
        roomCount
      }
    });
  } catch (error) {
    console.error("quick-calculate error:", error);
    return NextResponse.json({ error: "Failed to calculate estimate." }, { status: 500 });
  }
}
