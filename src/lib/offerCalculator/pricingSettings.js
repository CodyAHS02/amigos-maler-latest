import { sql } from "@/lib/db";

export const DEFAULT_PRICING_SETTINGS = {
  "2_5_room_apartment_base_price": 2400,
  "3_5_room_apartment_base_price": 3200,
  "4_5_room_apartment_base_price": 4100,
  "5_5_room_apartment_base_price": 5200,
  "house_base_price": 6500,
  "commercial_base_price": 4800,
  "other_base_price": 3200,
  "walls_modifier": 0.70,
  "ceilings_modifier": 0.50,
  "walls_and_ceilings_modifier": 1.00,
  "individual_walls_modifier": 0.28,
  "individual_rooms_modifier": 0.42,
  "floor_modifier": 0.35,
  "other_modifier": 0.25,
  "good_condition_modifier": 1.00,
  "minor_repairs_modifier": 1.15,
  "renovation_modifier": 1.35,
  "special_work_mould_modifier": 1.25,
  "special_work_nicotine_modifier": 1.20,
  "special_work_water_damage_modifier": 1.30,
  "special_work_cracks_modifier": 1.12,
  "special_work_wallpaper_removal_modifier": 1.18,
  "special_work_substrate_preparation_modifier": 1.16,
  "special_work_other_modifier": 1.08,
  "travel_cost_per_km": 2.50,
  "base_travel_flat_fee": 45.00,

  // Detailed calculator factors (§13) — previously hard-coded in pricing.js.
  "component_min_walls": 42000,
  "component_min_ceilings": 26000,
  "component_min_doors": 18000,
  "component_min_windows": 16000,
  "component_min_radiators": 14000,
  "component_min_baseboards": 12000,
  "component_min_facade": 90000,
  "component_min_railings": 18000,
  "component_min_stairs": 22000,
  "component_min_garage_doors": 22000,
  "component_min_shutters": 18000,
  "component_min_plaster_render": 35000,
  "component_min_pressure_cleaning": 20000,
  "component_min_spray_painting": 24000,
  "component_min_other": 18000,
  "property_multiplier_apartment": 1,
  "property_multiplier_house": 1.08,
  "property_multiplier_commercial": 1.16,
  "property_multiplier_facade": 1.2,
  "property_multiplier_room": 0.92,
  "property_multiplier_other": 1.05,
  "service_factor_ceiling_paint_2_coats": 1,
  "service_factor_wall_paint_2_coats": 1,
  "service_factor_remove_wallpaper": 0.46,
  "service_factor_apply_wallpaper": 1.18,
  "service_factor_filling_spackling": 0.52,
  "service_factor_mold_treatment": 0.7,
  "service_factor_nicotine_treatment": 0.62,
  "service_factor_water_damage_repair": 0.86,
  "service_factor_priming_sealing": 0.38,
  "service_factor_covering_protection": 0.22,
  "service_factor_paint_railings": 0.85,
  "service_factor_paint_stairs": 0.95,
  "service_factor_paint_doors": 0.9,
  "service_factor_paint_windows": 0.85,
  "service_factor_paint_radiators": 0.8,
  "service_factor_paint_baseboards": 0.6,
  "service_factor_paint_garage_doors": 0.95,
  "service_factor_paint_shutters": 0.9,
  "service_factor_plaster_render_work": 1.25,
  "service_factor_pressure_clean": 0.65,
  "service_factor_spray_paint_items": 0.9,
  "service_factor_paint_other": 0.8,
  "quantity_weight_walls": 1850,
  "quantity_min_walls": 12,
  "quantity_weight_ceilings": 1600,
  "quantity_min_ceilings": 8,
  "quantity_weight_doors": 14500,
  "quantity_min_doors": 1,
  "quantity_weight_windows": 11000,
  "quantity_min_windows": 1,
  "quantity_weight_radiators": 12500,
  "quantity_min_radiators": 1,
  "quantity_weight_baseboards": 1650,
  "quantity_min_baseboards": 8,
  "quantity_weight_facade": 2850,
  "quantity_min_facade": 25,
  "quantity_weight_railings": 6500,
  "quantity_min_railings": 2,
  "quantity_weight_stairs": 4500,
  "quantity_min_stairs": 5,
  "quantity_weight_garage_doors": 19000,
  "quantity_min_garage_doors": 1,
  "quantity_weight_shutters": 8500,
  "quantity_min_shutters": 2,
  "quantity_weight_plaster_render": 3200,
  "quantity_min_plaster_render": 10,
  "quantity_weight_pressure_cleaning": 1500,
  "quantity_min_pressure_cleaning": 15,
  "quantity_weight_spray_painting": 12000,
  "quantity_min_spray_painting": 1,
  "quantity_weight_other": 18000,
  "quantity_min_other": 1,
  "service_factor_default": 0.35,
  "preparation_surcharge": 1.18,
  "large_project_discount": 0.94,
  "small_project_surcharge": 1.12,
  "detailed_minimum_cents": 65000,

  // Component option multipliers (spec §4/§6 and Phase 2)
  "wall_coats_1_coat_multiplier": 0.75,
  "wall_coats_2_coats_multiplier": 1.0,
  "wall_coats_3_coats_multiplier": 1.3,
  "wall_condition_good_multiplier": 1.0,
  "wall_condition_minor_multiplier": 1.15,
  "wall_condition_renovation_multiplier": 1.35,
  "wall_issue_none_multiplier": 1.0,
  "wall_issue_mould_multiplier": 1.25,
  "wall_issue_nicotine_multiplier": 1.2,
  "wall_issue_water_damage_multiplier": 1.3,

  "ceiling_coats_1_coat_multiplier": 0.75,
  "ceiling_coats_2_coats_multiplier": 1.0,
  "ceiling_coats_3_coats_multiplier": 1.3,
  "ceiling_condition_good_multiplier": 1.0,
  "ceiling_condition_minor_multiplier": 1.15,
  "ceiling_condition_renovation_multiplier": 1.35,

  "door_type_standard_multiplier": 1,
  "door_type_double_multiplier": 1.6,
  "door_type_entrance_multiplier": 1.4,
  "door_type_other_multiplier": 1.1,
  "door_material_wood_multiplier": 1,
  "door_material_metal_multiplier": 1.15,
  "door_material_unsure_multiplier": 1.05,
  "door_sides_one_side_multiplier": 0.6,
  "door_sides_both_sides_multiplier": 1,
  "door_frame_multiplier": 1.2,
  "door_condition_good_multiplier": 1,
  "door_condition_minor_multiplier": 1.15,
  "door_condition_renovation_multiplier": 1.35,

  "window_type_standard_multiplier": 1.0,
  "window_type_large_multiplier": 1.4,
  "window_type_skylight_multiplier": 1.25,
  "window_material_wood_multiplier": 1.05,
  "window_material_metal_multiplier": 1.0,
  "window_material_plastic_multiplier": 0.95,
  "window_sides_inside_multiplier": 0.65,
  "window_sides_outside_multiplier": 0.65,
  "window_sides_both_multiplier": 1.0,
  "window_condition_good_multiplier": 1.0,
  "window_condition_minor_multiplier": 1.15,
  "window_condition_renovation_multiplier": 1.35,

  "radiator_type_panel_multiplier": 1.0,
  "radiator_type_column_multiplier": 1.35,
  "radiator_condition_good_multiplier": 1.0,
  "radiator_condition_minor_multiplier": 1.15,
  "radiator_condition_renovation_multiplier": 1.35,

  "baseboard_material_wood_multiplier": 1.0,
  "baseboard_material_mdf_multiplier": 0.9,
  "baseboard_material_other_multiplier": 0.95,
  "baseboard_condition_good_multiplier": 1.0,
  "baseboard_condition_minor_multiplier": 1.15,
  "baseboard_condition_renovation_multiplier": 1.3,

  "railing_type_balcony_multiplier": 1,
  "railing_type_stair_multiplier": 1.1,
  "railing_material_metal_multiplier": 1,
  "railing_material_wood_multiplier": 0.95,
  "railing_condition_good_multiplier": 1,
  "railing_condition_minor_multiplier": 1.15,
  "railing_condition_renovation_multiplier": 1.35,
  "service_factor_railing_cleaning": 0.3,
  "service_factor_railing_sanding": 0.45,
  "service_factor_railing_priming": 0.38,

  "stair_material_wood_multiplier": 1.05,
  "stair_material_metal_multiplier": 1.0,
  "stair_material_concrete_multiplier": 0.95,
  "stair_scope_steps_only_multiplier": 0.75,
  "stair_scope_steps_railing_multiplier": 1.0,
  "stair_condition_good_multiplier": 1.0,
  "stair_condition_minor_multiplier": 1.15,
  "stair_condition_renovation_multiplier": 1.35,

  "facade_surface_render_multiplier": 1.0,
  "facade_surface_wood_multiplier": 1.15,
  "facade_surface_concrete_multiplier": 0.95,
  "facade_surface_mixed_multiplier": 1.1,
  "facade_condition_good_multiplier": 1.0,
  "facade_condition_minor_multiplier": 1.15,
  "facade_condition_renovation_multiplier": 1.35,
  "scaffolding_not_sure_multiplier": 1.0,
  "scaffolding_yes_multiplier": 1.3,
  "scaffolding_no_multiplier": 0.9,

  "garage_door_material_metal_multiplier": 1.0,
  "garage_door_material_wood_multiplier": 1.15,
  "garage_door_sides_outside_multiplier": 0.75,
  "garage_door_sides_both_multiplier": 1.0,
  "garage_door_condition_good_multiplier": 1.0,
  "garage_door_condition_minor_multiplier": 1.15,
  "garage_door_condition_renovation_multiplier": 1.35,

  "shutter_material_wood_multiplier": 1.1,
  "shutter_material_metal_multiplier": 1.0,
  "shutter_sides_both_sides_multiplier": 1.0,
  "shutter_sides_one_side_multiplier": 0.65,
  "shutter_condition_good_multiplier": 1.0,
  "shutter_condition_minor_multiplier": 1.15,
  "shutter_condition_renovation_multiplier": 1.35,

  "plaster_type_interior_multiplier": 1.0,
  "plaster_type_exterior_multiplier": 1.25,
  "plaster_type_repair_multiplier": 0.9,
  "plaster_condition_good_multiplier": 0.95,
  "plaster_condition_minor_multiplier": 1.0,
  "plaster_condition_renovation_multiplier": 1.3,

  "cleaning_surface_facade_multiplier": 1.0,
  "cleaning_surface_terrace_multiplier": 0.9,
  "cleaning_surface_driveway_multiplier": 0.95,
  "cleaning_surface_other_multiplier": 1.0,
  "cleaning_intensity_standard_multiplier": 1.0,
  "cleaning_intensity_deep_multiplier": 1.35,

  "spray_item_type_doors_multiplier": 1.0,
  "spray_item_type_radiators_multiplier": 1.05,
  "spray_item_type_cabinetry_multiplier": 1.25,
  "spray_item_type_other_multiplier": 1.0,
  "spray_finish_satin_multiplier": 1.0,
  "spray_finish_high_gloss_multiplier": 1.25,
  "spray_finish_standard_multiplier": 0.95,

  // Additional pricing factors (§3.2)
  "service_blend_base": 0.82,
  "service_blend_weight": 0.18,
  "service_blend_min": 0.9,
  "service_blend_max": 1.9,
  "large_project_threshold_cents": 650000,
  "small_project_threshold_cents": 180000,
  "price_rounding_chf": 10
};

export const DEFAULT_TRAVEL_ZONES = [
  { plzFrom: 4600, plzTo: 4614, km: 3, label: "Olten & immediate surroundings" },
  { plzFrom: 4615, plzTo: 4658, km: 12, label: "Olten district" },
  { plzFrom: 4800, plzTo: 4856, km: 12, label: "Zofingen / Oftringen region" },
  { plzFrom: 5000, plzTo: 5099, km: 15, label: "Aarau region" },
  { plzFrom: 4500, plzTo: 4599, km: 25, label: "Solothurn region" },
  { plzFrom: 4000, plzTo: 4499, km: 40, label: "Basel region" },
  { plzFrom: 6000, plzTo: 6099, km: 55, label: "Lucerne region" },
  { plzFrom: 8000, plzTo: 8999, km: 60, label: "Zurich region" },
  { plzFrom: 3000, plzTo: 3999, km: 65, label: "Bern region" }
];

export async function getPricingSettings() {
  try {
    const { loadPricingSettings } = await import("./pricingStore");
    return await loadPricingSettings();
  } catch (err) {
    console.error("Error fetching pricing settings, using defaults:", err);
    return { ...DEFAULT_PRICING_SETTINGS };
  }
}

export async function getTravelZones() {
  try {
    const rows = await sql`
      select plz_from as "plzFrom", plz_to as "plzTo", km, label
      from travel_zones
      order by km asc
    `;
    return rows.length > 0 ? rows : DEFAULT_TRAVEL_ZONES;
  } catch {
    return DEFAULT_TRAVEL_ZONES;
  }
}

export function calculateTravelCost(postalCode, settings, customZones) {
  const plz = parseInt(String(postalCode || "").trim(), 10);
  const flat = Number(settings?.base_travel_flat_fee ?? DEFAULT_PRICING_SETTINGS.base_travel_flat_fee);
  const perKm = Number(settings?.travel_cost_per_km ?? DEFAULT_PRICING_SETTINGS.travel_cost_per_km);

  if (Number.isNaN(plz)) {
    return Math.round(flat);
  }

  const zones = customZones && customZones.length > 0 ? customZones : DEFAULT_TRAVEL_ZONES;
  const match = zones.find((z) => plz >= z.plzFrom && plz <= z.plzTo);
  const approxKm = match ? match.km : 80;

  return Math.round(flat + (approxKm * perKm));
}
