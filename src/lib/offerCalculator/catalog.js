/**
 * catalog.js — Single source of truth for every option list, default,
 * and step definition used by the Offer Calculator UI, validation, and pricing.
 *
 * Extracted from OfferCalculator.jsx (Phase 0, Fix Plan v2) so that
 * all downstream modules import from here instead of maintaining parallel copies.
 */

// ───────────────────────────────────────────────────────
// 1. PROPERTY TYPES
// ───────────────────────────────────────────────────────

export const propertyTypes = [
  {
    id: "apartment",
    title: "Apartment",
    subtitle: "Flats & condominiums",
    description: "Flats and condominiums from 1 room to luxury penthouses.",
    image: "/assets/projects/project-01.jpg"
  },
  {
    id: "single_family_home",
    title: "Single-Family Home",
    subtitle: "Detached & terraced homes",
    description: "Detached and semi-detached homes, multi-floor residential properties.",
    image: "/assets/projects/project-05.jpg"
  },
  {
    id: "commercial",
    title: "Commercial Space",
    subtitle: "Offices, retail & clinics",
    description: "Offices, retail, clinics, practice rooms and administrative buildings.",
    image: "/assets/projects/project-08.jpg"
  },
  {
    id: "facade",
    title: "Facade / Exterior",
    subtitle: "Exterior surfaces & masonry",
    iconKey: "facade",
    image: "/assets/services-imags/facade.jpg"
  },
  {
    id: "room",
    title: "Single Room",
    subtitle: "Individual room painting",
    iconKey: "room",
    image: "/assets/external/appartment-renovation/photo-1600210492486-724fe5c67fb0.jpg"
  },
  {
    id: "other",
    title: "Other Property",
    subtitle: "Special projects on request",
    iconKey: "other",
    image: "/assets/drywall/painting.jpg"
  }
];

export const quickPropertyTypes = [
  {
    id: "2_5_apartment",
    title: "2½-room",
    subtitle: "Apartment",
    iconKey: "apartment",
    roomCount: 3,
    image: "/assets/external/appartment-renovation/photo-1600210492486-724fe5c67fb0.jpg"
  },
  {
    id: "3_5_apartment",
    title: "3½-room",
    subtitle: "Apartment",
    iconKey: "apartment",
    roomCount: 4,
    image: "/assets/external/projects/photo-1600607687920-4e2a09cf159d-w1500-q90.jpg"
  },
  {
    id: "4_5_apartment",
    title: "4½-room",
    subtitle: "Apartment",
    iconKey: "apartment",
    roomCount: 5,
    image: "/assets/external/property-value-preservation/photo-1600566753086-00f18fb6b3ea-w1200-q85.jpg"
  },
  {
    id: "5_5_apartment",
    title: "5½-room",
    subtitle: "Apartment",
    iconKey: "apartment",
    roomCount: 6,
    image: "/assets/external/appartment-renovation/photo-1600566753190-17f0baa2a6c3.jpg"
  },
  {
    id: "house",
    title: "House",
    subtitle: "(Single-family home)",
    iconKey: "house",
    roomCount: 6,
    image: "/assets/external/property-value-preservation/photo-1600585154340-be6161a56a0c-w1400-q85.jpg"
  },
  {
    id: "commercial",
    title: "Commercial",
    subtitle: "(Office / Practice)",
    iconKey: "commercial",
    roomCount: 4,
    image: "/assets/external/property-value-preservation/photo-1486406146926-c627a92ad1ab-w1400-q85.jpg"
  },
  {
    id: "other",
    title: "Other",
    subtitle: "(on request)",
    iconKey: "other",
    roomCount: 3,
    image: "/assets/drywall/painting.jpg"
  }
];

export const roomTypes = ["Living Room", "Bedroom", "Kitchen", "Bathroom", "Hallway", "Other"];

// ───────────────────────────────────────────────────────
// 2. COMPONENTS
// ───────────────────────────────────────────────────────

export const componentOptions = [
  { id: "ceilings", title: "Ceilings", iconKey: "ceilings", quantityKey: "ceilingArea", label: "Ceiling area", unit: "m²" },
  { id: "walls", title: "Walls", iconKey: "walls", quantityKey: "wallArea", label: "Wall area", unit: "m²" },
  { id: "doors", title: "Doors", iconKey: "doors", quantityKey: "doors", label: "Doors", unit: "pcs" },
  { id: "windows", title: "Windows", iconKey: "windows", quantityKey: "windows", label: "Windows", unit: "pcs" },
  { id: "radiators", title: "Radiators", iconKey: "radiators", quantityKey: "radiators", label: "Radiators", unit: "pcs" },
  { id: "baseboards", title: "Skirting boards", iconKey: "baseboards", quantityKey: "baseboards", label: "Skirting boards", unit: "lm" },
  { id: "railings", title: "Railings / Balcony", iconKey: "railings", quantityKey: "railingLength", label: "Railing length", unit: "lm" },
  { id: "stairs", title: "Stairs / Steps", iconKey: "stairs", quantityKey: "stairSteps", label: "Stair steps", unit: "steps" },
  { id: "garage_doors", title: "Garage doors", iconKey: "garage_doors", quantityKey: "garageDoors", label: "Garage doors", unit: "pcs" },
  { id: "shutters", title: "Window shutters", iconKey: "shutters", quantityKey: "shutters", label: "Window shutters", unit: "pcs" },
  { id: "plaster_render", title: "Plaster / Render", iconKey: "plaster_render", quantityKey: "plasterArea", label: "Plaster / Render area", unit: "m²" },
  { id: "pressure_cleaning", title: "Pressure cleaning", iconKey: "pressure_cleaning", quantityKey: "cleaningArea", label: "Pressure cleaning area", unit: "m²" },
  { id: "spray_painting", title: "Spray painting", iconKey: "spray_painting", quantityKey: "sprayUnits", label: "Spray painting items", unit: "pcs" },
  { id: "other", title: "Other", iconKey: "other", quantityKey: "otherUnits", label: "Other items", unit: "qty" }
];

export const facadeComponent = {
  id: "facade", title: "Facade / Exterior Surface", iconKey: "facade", quantityKey: "facadeArea", label: "Facade area", unit: "m²"
};

// ───────────────────────────────────────────────────────
// 3. COMPONENT DETAILS (spec §4/§6, Phase 2)
// ───────────────────────────────────────────────────────

export const componentDetailGroups = {
  walls: [
    { id: "wallCoats", label: "Coats", choices: [
      { id: "1_coat", title: "1 Coat (Refresh)" },
      { id: "2_coats", title: "2 Coats (Standard)" },
      { id: "3_coats", title: "3 Coats (Opaque / Color change)" }
    ] },
    { id: "wallCondition", label: "Condition", choices: [
      { id: "good", title: "Good" },
      { id: "minor", title: "Minor preparation" },
      { id: "renovation", title: "Renovation required" }
    ] },
    { id: "wallIssue", label: "Special issue", choices: [
      { id: "none", title: "None" },
      { id: "mould", title: "Mould treatment" },
      { id: "nicotine", title: "Nicotine stains" },
      { id: "water_damage", title: "Water damage" }
    ] }
  ],
  ceilings: [
    { id: "ceilingCoats", label: "Coats", choices: [
      { id: "1_coat", title: "1 Coat (Refresh)" },
      { id: "2_coats", title: "2 Coats (Standard)" },
      { id: "3_coats", title: "3 Coats (Intensive)" }
    ] },
    { id: "ceilingCondition", label: "Condition", choices: [
      { id: "good", title: "Good" },
      { id: "minor", title: "Minor preparation" },
      { id: "renovation", title: "Renovation required" }
    ] }
  ],
  doors: [
    { id: "doorType", label: "Door type", choices: [
      { id: "standard", title: "Standard" },
      { id: "double", title: "Double" },
      { id: "entrance", title: "Entrance" },
      { id: "other", title: "Other" }
    ] },
    { id: "doorMaterial", label: "Material", choices: [
      { id: "wood", title: "Wood" },
      { id: "metal", title: "Metal" },
      { id: "unsure", title: "Not sure" }
    ] },
    { id: "doorSides", label: "Painting", choices: [
      { id: "one_side", title: "One side" },
      { id: "both_sides", title: "Both sides" }
    ] },
    { id: "doorFrame", label: "Door frame", choices: [
      { id: "yes", title: "Yes" },
      { id: "no", title: "No" }
    ] },
    { id: "doorCondition", label: "Condition", choices: [
      { id: "good", title: "Good" },
      { id: "minor", title: "Minor preparation" },
      { id: "renovation", title: "Renovation required" }
    ] }
  ],
  windows: [
    { id: "windowType", label: "Window type", choices: [
      { id: "standard", title: "Standard" },
      { id: "large", title: "Floor-to-ceiling / Large" },
      { id: "skylight", title: "Skylight / Roof" }
    ] },
    { id: "windowMaterial", label: "Material", choices: [
      { id: "wood", title: "Wood" },
      { id: "metal", title: "Metal" },
      { id: "plastic", title: "Plastic / PVC" }
    ] },
    { id: "windowSides", label: "Painting sides", choices: [
      { id: "inside", title: "Inside only" },
      { id: "outside", title: "Outside only" },
      { id: "both", title: "Inside & outside" }
    ] },
    { id: "windowCondition", label: "Condition", choices: [
      { id: "good", title: "Good" },
      { id: "minor", title: "Minor preparation" },
      { id: "renovation", title: "Renovation required" }
    ] }
  ],
  radiators: [
    { id: "radiatorType", label: "Radiator type", choices: [
      { id: "panel", title: "Panel radiator (Flach)" },
      { id: "column", title: "Sectional / Column (Glieder)" }
    ] },
    { id: "radiatorCondition", label: "Condition", choices: [
      { id: "good", title: "Good" },
      { id: "minor", title: "Minor preparation" },
      { id: "renovation", title: "Renovation / rust removal" }
    ] }
  ],
  baseboards: [
    { id: "baseboardMaterial", label: "Material", choices: [
      { id: "wood", title: "Solid wood" },
      { id: "mdf", title: "MDF / Lacquered" },
      { id: "other", title: "Other / Plastic" }
    ] },
    { id: "baseboardCondition", label: "Condition", choices: [
      { id: "good", title: "Good" },
      { id: "minor", title: "Minor touch-up" },
      { id: "renovation", title: "Renovation required" }
    ] }
  ],
  railings: [
    { id: "railingType", label: "Railing type", choices: [
      { id: "balcony", title: "Balcony railing" },
      { id: "stair", title: "Stair railing" }
    ] },
    { id: "railingMaterial", label: "Material", choices: [
      { id: "metal", title: "Metal" },
      { id: "wood", title: "Wood" }
    ] },
    { id: "railingCondition", label: "Condition", choices: [
      { id: "good", title: "Good" },
      { id: "minor", title: "Minor preparation" },
      { id: "renovation", title: "Renovation required" }
    ] }
  ],
  stairs: [
    { id: "stairMaterial", label: "Material", choices: [
      { id: "wood", title: "Wood" },
      { id: "metal", title: "Metal" },
      { id: "concrete", title: "Concrete / Stone" }
    ] },
    { id: "stairScope", label: "Scope", choices: [
      { id: "steps_only", title: "Steps only" },
      { id: "steps_railing", title: "Steps & railing" }
    ] },
    { id: "stairCondition", label: "Condition", choices: [
      { id: "good", title: "Good" },
      { id: "minor", title: "Minor sanding" },
      { id: "renovation", title: "Full refurbishment" }
    ] }
  ],
  facade: [
    { id: "facadeSurface", label: "Surface type", choices: [
      { id: "render", title: "Plaster / Render (Putz)" },
      { id: "wood", title: "Wood (Holz)" },
      { id: "concrete", title: "Concrete" },
      { id: "mixed", title: "Mixed surfaces" }
    ] },
    { id: "facadeCondition", label: "Condition", choices: [
      { id: "good", title: "Good" },
      { id: "minor", title: "Minor cracks / cleaning" },
      { id: "renovation", title: "Renovation required" }
    ] },
    { id: "scaffolding", label: "Scaffolding", choices: [
      { id: "not_sure", title: "To evaluate on site" },
      { id: "yes", title: "Scaffolding needed" },
      { id: "no", title: "No scaffolding (ground level)" }
    ] }
  ],
  garage_doors: [
    { id: "garageDoorMaterial", label: "Material", choices: [
      { id: "metal", title: "Metal / Steel" },
      { id: "wood", title: "Wood" }
    ] },
    { id: "garageDoorSides", label: "Painting sides", choices: [
      { id: "outside", title: "Outside only" },
      { id: "both", title: "Both sides" }
    ] },
    { id: "garageDoorCondition", label: "Condition", choices: [
      { id: "good", title: "Good" },
      { id: "minor", title: "Minor sanding" },
      { id: "renovation", title: "Renovation required" }
    ] }
  ],
  shutters: [
    { id: "shutterMaterial", label: "Material", choices: [
      { id: "wood", title: "Wood (traditional)" },
      { id: "metal", title: "Metal / Aluminium" }
    ] },
    { id: "shutterSides", label: "Painting sides", choices: [
      { id: "both_sides", title: "Both sides" },
      { id: "one_side", title: "Front side only" }
    ] },
    { id: "shutterCondition", label: "Condition", choices: [
      { id: "good", title: "Good" },
      { id: "minor", title: "Minor preparation" },
      { id: "renovation", title: "Renovation required" }
    ] }
  ],
  plaster_render: [
    { id: "plasterType", label: "Plaster type", choices: [
      { id: "interior", title: "Interior plaster" },
      { id: "exterior", title: "Exterior render" },
      { id: "repair", title: "Patch & crack repair" }
    ] },
    { id: "plasterCondition", label: "Condition", choices: [
      { id: "good", title: "Sound surface" },
      { id: "minor", title: "Minor surface defects" },
      { id: "renovation", title: "Significant damage" }
    ] }
  ],
  pressure_cleaning: [
    { id: "cleaningSurface", label: "Surface", choices: [
      { id: "facade", title: "Facade / Exterior wall" },
      { id: "terrace", title: "Terrace / Patio" },
      { id: "driveway", title: "Driveway / Forecourt" },
      { id: "other", title: "Other outdoor surface" }
    ] },
    { id: "cleaningIntensity", label: "Treatment", choices: [
      { id: "standard", title: "Standard wash" },
      { id: "deep", title: "Deep moss & algae treatment" }
    ] }
  ],
  spray_painting: [
    { id: "sprayItemType", label: "Item category", choices: [
      { id: "doors", title: "Doors / Panels" },
      { id: "radiators", title: "Radiators / Metal fixtures" },
      { id: "cabinetry", title: "Fitted cabinetry" },
      { id: "other", title: "Other items" }
    ] },
    { id: "sprayFinish", label: "Finish", choices: [
      { id: "satin", title: "Satin / Silk-matt" },
      { id: "high_gloss", title: "High gloss" },
      { id: "standard", title: "Standard matte" }
    ] }
  ]
};

export const componentDetailDefaults = {
  wallCoats: "2_coats",
  wallCondition: "good",
  wallIssue: "none",
  ceilingCoats: "2_coats",
  ceilingCondition: "good",
  doorType: "standard",
  doorMaterial: "wood",
  doorSides: "both_sides",
  doorFrame: "yes",
  doorCondition: "good",
  windowType: "standard",
  windowMaterial: "wood",
  windowSides: "both",
  windowCondition: "good",
  radiatorType: "panel",
  radiatorCondition: "good",
  baseboardMaterial: "wood",
  baseboardCondition: "good",
  railingType: "balcony",
  railingMaterial: "metal",
  railingCondition: "good",
  stairMaterial: "wood",
  stairScope: "steps_railing",
  stairCondition: "good",
  facadeSurface: "render",
  facadeCondition: "good",
  scaffolding: "not_sure",
  garageDoorMaterial: "metal",
  garageDoorSides: "outside",
  garageDoorCondition: "good",
  shutterMaterial: "wood",
  shutterSides: "both_sides",
  shutterCondition: "good",
  plasterType: "interior",
  plasterCondition: "minor",
  cleaningSurface: "facade",
  cleaningIntensity: "standard",
  sprayItemType: "doors",
  sprayFinish: "satin"
};

// ───────────────────────────────────────────────────────
// 4. SERVICES
// ───────────────────────────────────────────────────────

export const serviceOptions = [
  { id: "ceiling_paint_2_coats", title: "Paint ceilings – 2 coats", components: ["ceilings"] },
  { id: "wall_paint_2_coats", title: "Paint walls – 2 coats", components: ["walls", "facade"] },
  { id: "remove_wallpaper", title: "Remove wallpaper", components: ["walls"] },
  { id: "apply_wallpaper", title: "Apply wallpaper", components: ["walls"] },
  { id: "filling_spackling", title: "Filling / Spackling", components: ["walls", "ceilings", "facade"] },
  { id: "mold_treatment", title: "Mold treatment", components: ["walls", "ceilings", "facade"] },
  { id: "nicotine_treatment", title: "Nicotine treatment", components: ["walls", "ceilings"] },
  { id: "water_damage_repair", title: "Water damage repair (Wasserschäden)", components: ["walls", "ceilings"] },
  { id: "priming_sealing", title: "Priming / Sealing", components: ["walls", "ceilings", "facade"] },
  { id: "paint_doors", title: "Paint doors", components: ["doors"] },
  { id: "paint_windows", title: "Paint window frames", components: ["windows"] },
  { id: "paint_radiators", title: "Paint radiators", components: ["radiators"] },
  { id: "paint_baseboards", title: "Paint skirting boards", components: ["baseboards"] },
  { id: "railing_cleaning", title: "Clean railings", components: ["railings"] },
  { id: "railing_sanding", title: "Sand railings", components: ["railings"] },
  { id: "railing_priming", title: "Prime railings", components: ["railings"] },
  { id: "paint_railings", title: "Paint / coat railings", components: ["railings"] },
  { id: "paint_stairs", title: "Paint / varnish stairs", components: ["stairs"] },
  { id: "paint_garage_doors", title: "Paint garage doors", components: ["garage_doors"] },
  { id: "paint_shutters", title: "Paint window shutters", components: ["shutters"] },
  { id: "plaster_render_work", title: "Plaster / Render work", components: ["plaster_render", "walls", "facade"] },
  { id: "pressure_clean", title: "Pressure cleaning", components: ["pressure_cleaning", "facade"] },
  { id: "spray_paint_items", title: "Airless spray painting", components: ["spray_painting", "doors", "radiators"] },
  { id: "paint_other", title: "Painting / coating – other items", components: ["other"] },
  { id: "covering_protection", title: "Covering / Protection", components: [
    "ceilings", "walls", "doors", "windows", "radiators", "baseboards",
    "railings", "stairs", "facade", "garage_doors", "shutters",
    "plaster_render", "pressure_cleaning", "spray_painting", "other"
  ] }
];

export const simpleServiceOptions = [
  { id: "paint_walls", title: "Paint walls – 2 coats", iconKey: "walls" },
  { id: "paint_ceilings", title: "Paint ceilings – 2 coats", iconKey: "ceilings" },
  { id: "apply_wallpaper", title: "Apply wallpaper", iconKey: "walls" },
  { id: "remove_wallpaper", title: "Remove wallpaper", iconKey: "walls" },
  { id: "filling_spackling", title: "Filling / Spackling", iconKey: "walls" },
  { id: "covering_protection", title: "Covering / Protection", iconKey: "other" }
];

// ───────────────────────────────────────────────────────
// 5. CONDITION & SCOPE (Quick Quote)
// ───────────────────────────────────────────────────────

export const conditionOptions = [
  { id: "good", title: "Good Condition", desc: "No major preparation work needed.", iconKey: "condition_good" },
  { id: "minor_repairs", title: "Minor Repairs", desc: "Small filling work, hairline cracks.", iconKey: "condition_minor" },
  { id: "renovation", title: "Renovation Required", desc: "More extensive work: peeling, patching, remediation.", iconKey: "condition_renovation" }
];

export const workScopeOptions = [
  { id: "walls", title: "Walls", desc: "All walls in the selected property", iconKey: "paint_roller" },
  { id: "ceilings", title: "Ceilings", desc: "One or more ceilings", iconKey: "ceiling_lamp" },
  { id: "walls_ceilings", title: "Walls & Ceilings", desc: "Complete interior painting", iconKey: "apartment" },
  { id: "individual_walls", title: "Individual Walls", desc: "A few feature walls or selected surfaces", iconKey: "walls" },
  { id: "individual_rooms", title: "Individual Rooms / Areas", desc: "Kitchen, bathroom, staircase, basement or similar", iconKey: "room" },
  { id: "floor", title: "Floor", desc: "Garage, basement, laundry room or balcony floor", iconKey: "baseboards" },
  { id: "other", title: "Other", desc: "Tell us what else should be checked", iconKey: "other" }
];

export const roomSizeOptions = [
  { id: "small", title: "Compact (~10–14 m²)" },
  { id: "medium", title: "Standard (~15–22 m²)" },
  { id: "large", title: "Spacious (~25–35+ m²)" }
];

export const roomCountOptions = [1, 2, 3, 4, 5, 6, 8, 10];

export const livingAreaOptions = [
  { id: "up_to_50", title: "up to 50 m²" },
  { id: "51_70", title: "51–70 m²" },
  { id: "71_90", title: "71–90 m²" },
  { id: "91_120", title: "91–120 m²" },
  { id: "120_plus", title: "120+ m²" }
];

export const individualWallCountOptions = [
  { id: "1", title: "1 wall" },
  { id: "2", title: "2 walls" },
  { id: "3", title: "3 walls" },
  { id: "4_plus", title: "4+ walls" }
];

export const wallSizeOptions = [
  { id: "small", title: "Small" },
  { id: "medium", title: "Medium" },
  { id: "large", title: "Large" },
  { id: "very_large", title: "Very large" }
];

export const ceilingCountOptions = [
  { id: "1", title: "1 ceiling" },
  { id: "2", title: "2 ceilings" },
  { id: "3", title: "3 ceilings" },
  { id: "4_plus", title: "4+ ceilings" }
];

export const areaTypeOptions = [
  { id: "kitchen", title: "Kitchen" },
  { id: "bathroom", title: "Bathroom" },
  { id: "wc", title: "WC" },
  { id: "living_room", title: "Living Room" },
  { id: "bedroom", title: "Bedroom / Individual Room" },
  { id: "staircase", title: "Staircase" },
  { id: "basement", title: "Basement" },
  { id: "garage", title: "Garage" },
  { id: "laundry_room", title: "Laundry Room" },
  { id: "balcony", title: "Balcony" },
  { id: "other_area", title: "Other Area" }
];

export const areaWorkOptions = [
  { id: "walls", title: "Walls" },
  { id: "ceiling", title: "Ceiling" },
  { id: "walls_ceiling", title: "Walls & Ceiling" },
  { id: "floor", title: "Floor" },
  { id: "other", title: "Other" }
];

export const floorTypeOptions = [
  { id: "basement_floor", title: "Basement Floor" },
  { id: "garage_floor", title: "Garage Floor" },
  { id: "laundry_room_floor", title: "Laundry Room Floor" },
  { id: "balcony_floor", title: "Balcony Floor" },
  { id: "other_floor", title: "Other" }
];

export const specialWorkOptions = [
  { id: "mould", title: "Mould" },
  { id: "nicotine", title: "Nicotine contamination" },
  { id: "water_damage", title: "Water damage" },
  { id: "cracks", title: "Cracks / filling work" },
  { id: "wallpaper_removal", title: "Wallpaper removal" },
  { id: "substrate_preparation", title: "Special substrate preparation" },
  { id: "other", title: "Other" }
];

// ───────────────────────────────────────────────────────
// 6. PHOTO CATEGORIES
// ───────────────────────────────────────────────────────

export const photoCategories = [
  "Room overview", "Walls", "Ceiling", "Damage",
  "Mold", "Water damage", "Facade", "Windows", "Doors", "Other"
];

// ───────────────────────────────────────────────────────
// 7. STEP METADATA
// ───────────────────────────────────────────────────────

export const detailedStepMeta = [
  { number: "01", key: "type", title: "Project Type", icon: "step_property" },
  { number: "02", key: "components", title: "Components", icon: "step_components" },
  { number: "03", key: "services", title: "Work & Services", icon: "step_services" },
  { number: "04", key: "quantities", title: "Quantities", icon: "step_quantities" },
  { number: "05", key: "location", title: "Location", icon: "step_location" },
  { number: "06", key: "result", title: "Summary", icon: "step_summary" },
  { number: "07", key: "verify", title: "Verify E-Mail", icon: "step_verify" },
  { number: "08", key: "price", title: "Price", icon: "step_price" }
];

export const simpleStepMeta = [
  { number: "01", key: "type", title: "Project Type", icon: "step_property" },
  { number: "02", key: "scope", title: "Scope & Work", icon: "step_components" },
  { number: "03", key: "condition", title: "Condition", icon: "step_condition" },
  { number: "04", key: "location", title: "Location", icon: "step_location" },
  { number: "05", key: "contact", title: "Your Quote", icon: "step_price" }
];

// ───────────────────────────────────────────────────────
// 8. INITIAL STATE
// ───────────────────────────────────────────────────────

export const customerRequiredFields = ["firstName", "lastName"];

export const initialState = {
  calculatorType: "SELECT", // "SELECT" | "SIMPLE" | "DETAILED"
  mode: "CALCULATE",
  propertyType: "",
  roomType: "",
  components: [],
  services: [],
  quantities: {},
  componentDetails: { ...componentDetailDefaults },
  projectNotes: "",
  email: "",
  code: ["", "", "", ""],
  customerInfo: {
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
    postalCode: "",
    city: "",
    company: "",
    propertyManagement: false
  },
  // Simple mode specifics (Customer A)
  roomCount: 3,
  roomSize: "medium",
  livingArea: "",
  individualWallCount: "",
  individualWallSize: "",
  ceilingCount: "",
  areaType: "",
  areaWork: "",
  floorType: "",
  floorArea: "",
  roomLength: "",
  roomWidth: "",
  roomHeight: "2.8",
  specialWork: [],
  additionalWork: "",
  simpleServices: ["paint_walls", "paint_ceilings", "covering_protection"],
  workScope: "walls_ceilings",
  condition: "good",              // "good" | "minor_repairs" | "renovation"
  postalCode: "",
  locationCity: ""
};

// ───────────────────────────────────────────────────────
// 9. VALIDATION SETS (used by server-side validation.js)
// ───────────────────────────────────────────────────────

export const PROPERTY_TYPE_IDS = new Set(propertyTypes.map((p) => p.id));
export const COMPONENT_IDS = new Set([...componentOptions.map((c) => c.id), facadeComponent.id]);
export const SERVICE_IDS = new Set(serviceOptions.map((s) => s.id));
export const QUANTITY_KEYS = new Set(
  [...componentOptions, facadeComponent].map((c) => c.quantityKey)
);

// Component-specific answer sets for server-side validation
export const COMPONENT_DETAIL_CHOICES = {
  wallCoats: new Set(["1_coat", "2_coats", "3_coats"]),
  wallCondition: new Set(["good", "minor", "renovation"]),
  wallIssue: new Set(["none", "mould", "nicotine", "water_damage"]),
  ceilingCoats: new Set(["1_coat", "2_coats", "3_coats"]),
  ceilingCondition: new Set(["good", "minor", "renovation"]),
  doorType: new Set(["standard", "double", "entrance", "other"]),
  doorMaterial: new Set(["wood", "metal", "unsure"]),
  doorSides: new Set(["one_side", "both_sides"]),
  doorFrame: new Set(["yes", "no"]),
  doorCondition: new Set(["good", "minor", "renovation"]),
  windowType: new Set(["standard", "large", "skylight"]),
  windowMaterial: new Set(["wood", "metal", "plastic"]),
  windowSides: new Set(["inside", "outside", "both"]),
  windowCondition: new Set(["good", "minor", "renovation"]),
  radiatorType: new Set(["panel", "column"]),
  radiatorCondition: new Set(["good", "minor", "renovation"]),
  baseboardMaterial: new Set(["wood", "mdf", "other"]),
  baseboardCondition: new Set(["good", "minor", "renovation"]),
  railingType: new Set(["balcony", "stair"]),
  railingMaterial: new Set(["metal", "wood"]),
  railingCondition: new Set(["good", "minor", "renovation"]),
  stairMaterial: new Set(["wood", "metal", "concrete"]),
  stairScope: new Set(["steps_only", "steps_railing"]),
  stairCondition: new Set(["good", "minor", "renovation"]),
  facadeSurface: new Set(["render", "wood", "concrete", "mixed"]),
  facadeCondition: new Set(["good", "minor", "renovation"]),
  scaffolding: new Set(["not_sure", "yes", "no"]),
  garageDoorMaterial: new Set(["metal", "wood"]),
  garageDoorSides: new Set(["outside", "both"]),
  garageDoorCondition: new Set(["good", "minor", "renovation"]),
  shutterMaterial: new Set(["wood", "metal"]),
  shutterSides: new Set(["both_sides", "one_side"]),
  shutterCondition: new Set(["good", "minor", "renovation"]),
  plasterType: new Set(["interior", "exterior", "repair"]),
  plasterCondition: new Set(["good", "minor", "renovation"]),
  cleaningSurface: new Set(["facade", "terrace", "driveway", "other"]),
  cleaningIntensity: new Set(["standard", "deep"]),
  sprayItemType: new Set(["doors", "radiators", "cabinetry", "other"]),
  sprayFinish: new Set(["satin", "high_gloss", "standard"])
};

// ───────────────────────────────────────────────────────
// 10. UTILITY
// ───────────────────────────────────────────────────────

/** Given a list of option objects and selected IDs, return their titles. */
export function titlesFromIds(options, ids) {
  return ids
    .map((id) => options.find((option) => option.id === id)?.title || id)
    .filter(Boolean);
}

/** Toggle a value in a list: add if missing, remove if present. */
export function toggle(list, value) {
  return list.includes(value) ? list.filter((item) => item !== value) : [...list, value];
}
