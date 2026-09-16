import { calculateTravelCost, DEFAULT_PRICING_SETTINGS } from "./pricingSettings";

/* Maps each component to the quantity field it measures. The prices themselves live in
   the admin-editable pricing settings, not here. */
const QUANTITY_KEYS = {
  walls: "wallArea",
  ceilings: "ceilingArea",
  doors: "doors",
  windows: "windows",
  radiators: "radiators",
  baseboards: "baseboards",
  facade: "facadeArea",
  railings: "railingLength",
  stairs: "stairSteps",
  garage_doors: "garageDoors",
  shutters: "shutters",
  plaster_render: "plasterArea",
  pressure_cleaning: "cleaningArea",
  spray_painting: "sprayUnits",
  other: "otherUnits"
};

const QUICK_BASE_PRICE_KEYS = {
  "2_5_apartment": "2_5_room_apartment_base_price",
  "3_5_apartment": "3_5_room_apartment_base_price",
  "4_5_apartment": "4_5_room_apartment_base_price",
  "5_5_apartment": "5_5_room_apartment_base_price",
  "6_5_plus_apartment": "5_5_room_apartment_base_price",
  house: "house_base_price",
  commercial: "commercial_base_price",
  other: "other_base_price"
};

const SCOPE_MODIFIER_KEYS = {
  walls: "walls_modifier",
  ceilings: "ceilings_modifier",
  walls_ceilings: "walls_and_ceilings_modifier",
  individual_walls: "individual_walls_modifier",
  individual_rooms: "individual_rooms_modifier",
  floor: "floor_modifier",
  other: "other_modifier"
};

const CONDITION_MODIFIER_KEYS = {
  good: "good_condition_modifier",
  minor_repairs: "minor_repairs_modifier",
  renovation: "renovation_modifier"
};

const SPECIAL_WORK_MODIFIER_KEYS = {
  mould: "special_work_mould_modifier",
  nicotine: "special_work_nicotine_modifier",
  water_damage: "special_work_water_damage_modifier",
  cracks: "special_work_cracks_modifier",
  wallpaper_removal: "special_work_wallpaper_removal_modifier",
  substrate_preparation: "special_work_substrate_preparation_modifier",
  other: "special_work_other_modifier"
};

function settingValue(settings, key) {
  const number = Number(settings?.[key] ?? DEFAULT_PRICING_SETTINGS[key]);
  return Number.isFinite(number) ? number : 0;
}

function asNumber(value) {
  const number = Number(value);
  return Number.isFinite(number) && number > 0 ? number : 0;
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function unique(values) {
  return [...new Set(Array.isArray(values) ? values : [])];
}

export function calculateOfferPrice(project, options = {}) {
  const components = unique(project.components);
  const services = unique(project.services);
  const quantities = project.quantities || {};

  // Every factor below is an admin-editable setting (§13); DEFAULT_PRICING_SETTINGS holds
  // the seed values, so behaviour is unchanged until someone edits them in the backend.
  const settings = options.settings || DEFAULT_PRICING_SETTINGS;
  const propertyMultiplier =
    settingValue(settings, `property_multiplier_${project.propertyType}`) ||
    settingValue(settings, "property_multiplier_other");

  let componentTotal = 0;

  for (const component of components) {
    const quantityKey = QUANTITY_KEYS[component];
    if (!quantityKey) continue;

    const minimumQuantity = settingValue(settings, `quantity_min_${component}`);
    const unitWeight = settingValue(settings, `quantity_weight_${component}`);
    const quantity = Math.max(asNumber(quantities[quantityKey]), minimumQuantity);
    componentTotal += Math.max(quantity * unitWeight, settingValue(settings, `component_min_${component}`));
  }

  // Component-specific options (§4/§6 & Phase 2). Each answer maps to its own editable multiplier,
  // and only applies when its component was actually selected.
  const details = project.componentDetails || {};
  let detailMultiplier = 1;

  if (components.includes("walls")) {
    detailMultiplier *= settingValue(settings, `wall_coats_${details.wallCoats || "2_coats"}_multiplier`) || 1;
    detailMultiplier *= settingValue(settings, `wall_condition_${details.wallCondition || "good"}_multiplier`) || 1;
    detailMultiplier *= settingValue(settings, `wall_issue_${details.wallIssue || "none"}_multiplier`) || 1;
  }

  if (components.includes("ceilings")) {
    detailMultiplier *= settingValue(settings, `ceiling_coats_${details.ceilingCoats || "2_coats"}_multiplier`) || 1;
    detailMultiplier *= settingValue(settings, `ceiling_condition_${details.ceilingCondition || "good"}_multiplier`) || 1;
  }

  if (components.includes("doors")) {
    detailMultiplier *= settingValue(settings, `door_type_${details.doorType || "standard"}_multiplier`) || 1;
    detailMultiplier *= settingValue(settings, `door_material_${details.doorMaterial || "wood"}_multiplier`) || 1;
    detailMultiplier *= settingValue(settings, `door_sides_${details.doorSides || "both_sides"}_multiplier`) || 1;
    if (details.doorFrame === "yes") detailMultiplier *= settingValue(settings, "door_frame_multiplier") || 1;
    detailMultiplier *= settingValue(settings, `door_condition_${details.doorCondition || "good"}_multiplier`) || 1;
  }

  if (components.includes("windows")) {
    detailMultiplier *= settingValue(settings, `window_type_${details.windowType || "standard"}_multiplier`) || 1;
    detailMultiplier *= settingValue(settings, `window_material_${details.windowMaterial || "wood"}_multiplier`) || 1;
    detailMultiplier *= settingValue(settings, `window_sides_${details.windowSides || "both"}_multiplier`) || 1;
    detailMultiplier *= settingValue(settings, `window_condition_${details.windowCondition || "good"}_multiplier`) || 1;
  }

  if (components.includes("radiators")) {
    detailMultiplier *= settingValue(settings, `radiator_type_${details.radiatorType || "panel"}_multiplier`) || 1;
    detailMultiplier *= settingValue(settings, `radiator_condition_${details.radiatorCondition || "good"}_multiplier`) || 1;
  }

  if (components.includes("baseboards")) {
    detailMultiplier *= settingValue(settings, `baseboard_material_${details.baseboardMaterial || "wood"}_multiplier`) || 1;
    detailMultiplier *= settingValue(settings, `baseboard_condition_${details.baseboardCondition || "good"}_multiplier`) || 1;
  }

  if (components.includes("railings")) {
    detailMultiplier *= settingValue(settings, `railing_type_${details.railingType || "balcony"}_multiplier`) || 1;
    detailMultiplier *= settingValue(settings, `railing_material_${details.railingMaterial || "metal"}_multiplier`) || 1;
    detailMultiplier *= settingValue(settings, `railing_condition_${details.railingCondition || "good"}_multiplier`) || 1;
  }

  if (components.includes("stairs")) {
    detailMultiplier *= settingValue(settings, `stair_material_${details.stairMaterial || "wood"}_multiplier`) || 1;
    detailMultiplier *= settingValue(settings, `stair_scope_${details.stairScope || "steps_railing"}_multiplier`) || 1;
    detailMultiplier *= settingValue(settings, `stair_condition_${details.stairCondition || "good"}_multiplier`) || 1;
  }

  if (components.includes("facade")) {
    detailMultiplier *= settingValue(settings, `facade_surface_${details.facadeSurface || "render"}_multiplier`) || 1;
    detailMultiplier *= settingValue(settings, `facade_condition_${details.facadeCondition || "good"}_multiplier`) || 1;
    detailMultiplier *= settingValue(settings, `scaffolding_${details.scaffolding || "not_sure"}_multiplier`) || 1;
  }

  if (components.includes("garage_doors")) {
    detailMultiplier *= settingValue(settings, `garage_door_material_${details.garageDoorMaterial || "metal"}_multiplier`) || 1;
    detailMultiplier *= settingValue(settings, `garage_door_sides_${details.garageDoorSides || "outside"}_multiplier`) || 1;
    detailMultiplier *= settingValue(settings, `garage_door_condition_${details.garageDoorCondition || "good"}_multiplier`) || 1;
  }

  if (components.includes("shutters")) {
    detailMultiplier *= settingValue(settings, `shutter_material_${details.shutterMaterial || "wood"}_multiplier`) || 1;
    detailMultiplier *= settingValue(settings, `shutter_sides_${details.shutterSides || "both_sides"}_multiplier`) || 1;
    detailMultiplier *= settingValue(settings, `shutter_condition_${details.shutterCondition || "good"}_multiplier`) || 1;
  }

  if (components.includes("plaster_render")) {
    detailMultiplier *= settingValue(settings, `plaster_type_${details.plasterType || "interior"}_multiplier`) || 1;
    detailMultiplier *= settingValue(settings, `plaster_condition_${details.plasterCondition || "minor"}_multiplier`) || 1;
  }

  if (components.includes("pressure_cleaning")) {
    detailMultiplier *= settingValue(settings, `cleaning_surface_${details.cleaningSurface || "facade"}_multiplier`) || 1;
    detailMultiplier *= settingValue(settings, `cleaning_intensity_${details.cleaningIntensity || "standard"}_multiplier`) || 1;
  }

  if (components.includes("spray_painting")) {
    detailMultiplier *= settingValue(settings, `spray_item_type_${details.sprayItemType || "doors"}_multiplier`) || 1;
    detailMultiplier *= settingValue(settings, `spray_finish_${details.sprayFinish || "satin"}_multiplier`) || 1;
  }

  const defaultServiceFactor = settingValue(settings, "service_factor_default");
  const serviceFactor = services.reduce(
    (total, service) => total + (settingValue(settings, `service_factor_${service}`) || defaultServiceFactor),
    0
  );
  const preparationFactor = services.some((service) => [
    "filling_spackling",
    "mold_treatment",
    "nicotine_treatment",
    "water_damage_repair",
    "priming_sealing"
  ].includes(service)) ? settingValue(settings, "preparation_surcharge") : 1;
  const largeThreshold = settingValue(settings, "large_project_threshold_cents") || 650000;
  const smallThreshold = settingValue(settings, "small_project_threshold_cents") || 180000;
  const projectSizeFactor = componentTotal > largeThreshold
    ? settingValue(settings, "large_project_discount")
    : componentTotal < smallThreshold
      ? settingValue(settings, "small_project_surcharge")
      : 1;

  // Condition modifier (Section 13) — rates come from the admin-editable settings.
  const condition = options.condition || project.condition || "good";
  const conditionKey = CONDITION_MODIFIER_KEYS[condition] || CONDITION_MODIFIER_KEYS.good;
  const conditionFactor = settingValue(settings, conditionKey) || 1;

  // Travel cost calculation (Section 9)
  const postalCode = options.postalCode || project.postalCode || "";
  const travelCostChf = postalCode
    ? calculateTravelCost(postalCode, settings)
    : Math.round(Number(settings.base_travel_flat_fee ?? DEFAULT_PRICING_SETTINGS.base_travel_flat_fee));
  const travelCostCents = travelCostChf * 100;

  const blendBase = settingValue(settings, "service_blend_base") || 0.82;
  const blendWeight = settingValue(settings, "service_blend_weight") || 0.18;
  const blendMin = settingValue(settings, "service_blend_min") || 0.9;
  const blendMax = settingValue(settings, "service_blend_max") || 1.9;

  const subtotal = componentTotal * clamp(blendBase + serviceFactor * blendWeight, blendMin, blendMax);
  const estimate =
    Math.max(
      settingValue(settings, "detailed_minimum_cents"),
      subtotal * propertyMultiplier * preparationFactor * projectSizeFactor * conditionFactor * detailMultiplier
    ) + travelCostCents;

  // Presented as a single figure per §12, rounded to the nearest CHF (default 10).
  const roundingChf = settingValue(settings, "price_rounding_chf") || 10;
  const roundingCents = roundingChf * 100;
  const total = Math.round(estimate / roundingCents) * roundingCents;

  return {
    currency: "CHF",
    minCents: total,
    maxCents: total,
    travelCostChf
  };
}

/**
 * Quick Quote pricing (spec §7A + §13).
 *
 * Customer A never supplies measurements, so the price is derived entirely from
 * admin-editable reference values: a base price per property type, scaled by the scope
 * of work and the surface condition, plus travel costs for the postcode. Every factor
 * here is editable in the admin backend — none of it is hard-coded.
 */
export function calculateQuickQuotePrice(input = {}, settings = DEFAULT_PRICING_SETTINGS) {
  const baseKey = QUICK_BASE_PRICE_KEYS[input.propertyType] || QUICK_BASE_PRICE_KEYS["3_5_apartment"];
  const scopeKey = SCOPE_MODIFIER_KEYS[input.workScope] || SCOPE_MODIFIER_KEYS.walls_ceilings;
  const conditionKey = CONDITION_MODIFIER_KEYS[input.condition] || CONDITION_MODIFIER_KEYS.good;

  const basePriceChf = settingValue(settings, baseKey);
  const scopeModifier = settingValue(settings, scopeKey);
  const conditionModifier = settingValue(settings, conditionKey);
  const specialWorkModifier = unique(input.specialWork).reduce((factor, item) => {
    const key = SPECIAL_WORK_MODIFIER_KEYS[item];
    return key ? factor * (settingValue(settings, key) || 1) : factor;
  }, 1);
  const travelCostChf = input.postalCode
    ? calculateTravelCost(input.postalCode, settings)
    : Math.round(settingValue(settings, "base_travel_flat_fee"));

  const totalChf = Math.max(0, Math.round(basePriceChf * scopeModifier * conditionModifier * specialWorkModifier + travelCostChf));
  const cents = totalChf * 100;

  return {
    currency: "CHF",
    // Presented as a single figure per §12, not a range.
    minCents: cents,
    maxCents: cents,
    travelCostChf,
    basePriceChf,
    scopeModifier,
    conditionModifier,
    specialWorkModifier
  };
}
