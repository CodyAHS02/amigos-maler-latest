"use client";

import { useCallback, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAmigosTheme } from "@/lib/useAmigosTheme";
import styles from "./OfferCalculator.module.css";
import {
  propertyTypes,
  quickPropertyTypes,
  roomTypes,
  componentOptions,
  facadeComponent,
  componentDetailGroups,
  componentDetailDefaults,
  serviceOptions,
  simpleServiceOptions,
  conditionOptions,
  workScopeOptions,
  roomSizeOptions,
  roomCountOptions,
  livingAreaOptions,
  individualWallCountOptions,
  wallSizeOptions,
  ceilingCountOptions,
  areaTypeOptions,
  areaWorkOptions,
  floorTypeOptions,
  specialWorkOptions,
  photoCategories,
  detailedStepMeta,
  simpleStepMeta,
  customerRequiredFields,
  initialState,
  titlesFromIds,
  toggle
} from "@/lib/offerCalculator/catalog";

function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

function isValidSwissPostalCode(value) {
  return /^\d{4}$/.test(String(value || "").trim());
}


function ComponentIcon({ iconKey }) {
  const commonProps = {
    viewBox: "0 0 48 48",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.6",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  };

  switch (iconKey) {
    case "apartment":
      return (
        <svg {...commonProps}>
          <path d="M15 25 24 16l9 9" />
          <path d="M18 23v11h12V23" />
          <path d="M22 34v-7h4v7" />
        </svg>
      );
    case "house":
      return (
        <svg {...commonProps}>
          <path d="M11 24 24 12l13 12" />
          <path d="M15 22v15h18V22" />
          <path d="M21 37v-9h6v9" />
        </svg>
      );
    case "commercial":
      return (
        <svg {...commonProps}>
          <path d="M14 18h20v18H14V18Z" />
          <path d="M18 18v-5h12v5" />
          <path d="M19 24h2M27 24h2M19 30h2M27 30h2" />
        </svg>
      );
    case "room":
      return (
        <svg {...commonProps}>
          <path d="M14 15h20v22H14V15Z" />
          <path d="M20 21h8v8h-8V21Z" />
          <path d="M18 37v-5h12v5" />
        </svg>
      );
    case "ceilings":
    case "ceiling_lamp":
      return (
        <svg {...commonProps}>
          <path d="M12 12h24M24 12v8M16 26h16l-3-6H19l-3 6ZM21 26v2a3 3 0 0 0 6 0v-2M15 34l2-2M33 34l-2-2M24 33v3" />
        </svg>
      );
    case "walls":
    case "paint_roller":
      return (
        <svg {...commonProps}>
          <path d="M14 14h16a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3H14a3 3 0 0 1-3-3v-4a3 3 0 0 1 3-3Z" />
          <path d="M33 18h4v11H25v7" />
          <path d="M22 36h6" />
        </svg>
      );
    case "doors":
      return (
        <svg {...commonProps}>
          <path d="M14 10h20v28H14V10Z" />
          <path d="M23 10v28" />
          <path d="M29 24h1" />
        </svg>
      );
    case "windows":
      return (
        <svg {...commonProps}>
          <path d="M12 12h24v24H12V12Z" />
          <path d="M24 12v24" />
          <path d="M12 24h24" />
        </svg>
      );
    case "radiators":
      return (
        <svg {...commonProps}>
          <path d="M14 34V17a5 5 0 0 1 10 0v17" />
          <path d="M24 34V17a5 5 0 0 1 10 0v17" />
          <path d="M10 34h28" />
          <path d="M10 20h4" />
          <path d="M34 20h4" />
        </svg>
      );
    case "baseboards":
      return (
        <svg {...commonProps}>
          <path d="M10 34h24a6 6 0 0 0 0-12h-3" />
          <path d="M10 34c7-2 11-6 13-12l2-7 11 3-2 6" />
          <path d="M27 15l3-5" />
        </svg>
      );
    case "railings":
      return (
        <svg {...commonProps}>
          <path d="M10 14h28M10 34h28M16 14v20M22 14v20M28 14v20M34 14v20M10 10v28M38 10v28" />
        </svg>
      );
    case "stairs":
      return (
        <svg {...commonProps}>
          <path d="M10 36h7v-6h7v-6h7v-6h7v-6" />
          <path d="M10 36v-6" />
        </svg>
      );
    case "facade":
      return (
        <svg {...commonProps}>
          <path d="M12 36V16l12-6 12 6v20" />
          <path d="M18 36V24h12v12" />
          <path d="M18 18h.01M24 18h.01M30 18h.01" />
        </svg>
      );
    case "garage_doors":
      return (
        <svg {...commonProps}>
          <rect x="10" y="12" width="28" height="24" rx="2" />
          <path d="M10 18h28M10 24h28M10 30h28" />
          <path d="M22 33h4" />
        </svg>
      );
    case "shutters":
      return (
        <svg {...commonProps}>
          <rect x="10" y="12" width="10" height="24" rx="1" />
          <rect x="28" y="12" width="10" height="24" rx="1" />
          <path d="M12 17h6M12 22h6M12 27h6M12 31h6" />
          <path d="M30 17h6M30 22h6M30 27h6M30 31h6" />
        </svg>
      );
    case "plaster_render":
      return (
        <svg {...commonProps}>
          <path d="M12 28l14-14 8 8-14 14z" />
          <path d="M26 14l4-4 4 4-4 4" />
          <path d="M12 36h24" />
        </svg>
      );
    case "pressure_cleaning":
      return (
        <svg {...commonProps}>
          <path d="M12 26l12-12 6 6-12 12H12v-6z" />
          <path d="M30 14l4-4" />
          <path d="M34 18l3-1M31 22l3 2M27 25l2 4" />
        </svg>
      );
    case "spray_painting":
      return (
        <svg {...commonProps}>
          <path d="M14 22v14h8V22z" />
          <path d="M18 14v8M18 14l-4 4M18 14l4 4" />
          <path d="M26 12l2-2M29 15l3-1M28 19l3 2" />
        </svg>
      );
    case "condition_good":
      return (
        <svg {...commonProps}>
          <circle cx="24" cy="24" r="14" />
          <path d="m18 24 4 4 8-8" />
        </svg>
      );
    case "condition_minor":
      return (
        <svg {...commonProps}>
          <path d="M14 34l6-6 9 9-6 6-9-9Z" />
          <path d="M26 21l6-6a4 4 0 1 1 6 6l-6 6" />
        </svg>
      );
    case "condition_renovation":
      return (
        <svg {...commonProps}>
          <path d="M15 15l4 4-6 6-4-4 6-6ZM29 19l4-4a4 4 0 1 0-6-6l-4 4 6 6ZM18 30l12-12" />
        </svg>
      );
    case "pin":
      return (
        <svg {...commonProps}>
          <path d="M24 10a8 8 0 0 0-8 8c0 7 8 18 8 18s8-11 8-18a8 8 0 0 0-8-8Z" />
          <circle cx="24" cy="18" r="3" />
        </svg>
      );
    case "shield":
      return (
        <svg {...commonProps}>
          <path d="M24 10s10 3 12 5v10c0 9-7 15-12 17-5-2-12-8-12-17V15c2-2 12-5 12-5Z" />
          <path d="m19 24 4 4 7-7" />
        </svg>
      );
    case "lock":
      return (
        <svg {...commonProps}>
          <rect x="14" y="20" width="20" height="18" rx="3" />
          <path d="M18 20v-5a6 6 0 0 1 12 0v5" />
          <circle cx="24" cy="28" r="2" />
        </svg>
      );
    case "swiss_quality":
      return (
        <svg {...commonProps}>
          <circle cx="24" cy="24" r="15" />
          <path d="M24 16v16M16 24h16" strokeWidth="3" />
        </svg>
      );
    case "step_property":
      return (
        <svg {...commonProps}>
          <path d="M12 22 24 12l12 10" />
          <path d="M15 20v16h18V20" />
          <path d="M21 36v-8h6v8" />
        </svg>
      );
    case "step_components":
      return (
        <svg {...commonProps}>
          <rect x="12" y="12" width="10" height="10" rx="1.5" />
          <rect x="26" y="12" width="10" height="10" rx="1.5" />
          <rect x="12" y="26" width="10" height="10" rx="1.5" />
          <rect x="26" y="26" width="10" height="10" rx="1.5" />
        </svg>
      );
    case "step_services":
      return (
        <svg {...commonProps}>
          <path d="M14 15h16a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H14a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2Z" />
          <path d="M32 18h4v10H25v6" />
          <path d="M22 34h6" />
        </svg>
      );
    case "step_quantities":
      return (
        <svg {...commonProps}>
          <path d="M14 14h20v20H14Z" />
          <path d="M14 20h4M14 28h4M20 34v-4M28 34v-4" />
        </svg>
      );
    case "step_condition":
      return (
        <svg {...commonProps}>
          <path d="M14 34l6-6 9 9-6 6-9-9Z" />
          <path d="M26 21l6-6a4 4 0 1 1 6 6l-6 6" />
        </svg>
      );
    case "step_location":
      return (
        <svg {...commonProps}>
          <path d="M24 10a8 8 0 0 0-8 8c0 7 8 18 8 18s8-11 8-18a8 8 0 0 0-8-8Z" />
          <circle cx="24" cy="18" r="3" />
        </svg>
      );
    case "step_summary":
      return (
        <svg {...commonProps}>
          <path d="M16 12h16a2 2 0 0 1 2 2v22a2 2 0 0 1-2 2H16a2 2 0 0 1-2-2V14a2 2 0 0 1 2-2Z" />
          <path d="M20 12V9a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v3" />
          <path d="M19 20h10M19 26h10M19 32h6" />
        </svg>
      );
    case "step_verify":
      return (
        <svg {...commonProps}>
          <rect x="11" y="14" width="26" height="20" rx="2" />
          <path d="m11 16 13 10 13-10" />
        </svg>
      );
    case "step_price":
      return (
        <svg {...commonProps}>
          <circle cx="24" cy="24" r="14" />
          <path d="m17 24 5 5 9-10" strokeWidth="3" />
        </svg>
      );
    case "other":
    default:
      return (
        <svg {...commonProps}>
          <circle cx="16" cy="24" r="2" />
          <circle cx="24" cy="24" r="2" />
          <circle cx="32" cy="24" r="2" />
        </svg>
      );
  }
}


/* Renders the option groups belonging to the components the customer actually selected
   (spec §4/§6). A doors-only project sees door options and nothing else. */
function ComponentDetailFields({ components, details, onChange }) {
  const groups = components
    .filter((component) => componentDetailGroups[component])
    .map((component) => ({ component, groups: componentDetailGroups[component] }));

  if (!groups.length) return null;

  return (
    <>
      {groups.map(({ component, groups: fields }) => (
        <div key={component} className={styles.detailGroup}>
          <span className={styles.detailGroupTitle}>
            {componentOptions.find((option) => option.id === component)?.title || component} options
          </span>
          <div className={styles.quantityGrid}>
            {fields.map((field) => (
              <label key={field.id} className={styles.quantityField}>
                <span>{field.label}</span>
                <div>
                  <select
                    className={styles.detailSelect}
                    value={details[field.id] ?? field.choices[0].id}
                    onChange={(event) => onChange(field.id, event.target.value)}
                  >
                    {field.choices.map((choice) => (
                      <option key={choice.id} value={choice.id}>{choice.title}</option>
                    ))}
                  </select>
                </div>
              </label>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

/* Both journeys ask for the location before pricing, so the travel cost is based on the
   customer's postcode rather than a flat fallback. */
function LocationFields({ postalCode, city, onChange }) {
  return (
    <div className={cx(styles.quantityGrid, styles.locationGrid)} style={{ marginTop: "16px" }}>
      <label className={styles.quantityField}>
        <span>Postal Code (PLZ)</span>
        <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
          <span className={styles.locationInputIcon}>
            <ComponentIcon iconKey="pin" />
          </span>
          <input
            className={styles.locationInput}
            type="text"
            inputMode="numeric"
            maxLength={4}
            value={postalCode}
            placeholder="e.g. 4600 (Olten & surroundings)"
            onChange={(event) => onChange("postalCode", event.target.value.replace(/\D/g, "").slice(0, 4))}
          />
        </div>
      </label>
      <label className={styles.quantityField}>
        <span>City / Town</span>
        <div>
          <input
            type="text"
            value={city}
            placeholder="e.g. Olten"
            onChange={(event) => onChange("locationCity", event.target.value)}
          />
        </div>
      </label>
    </div>
  );
}

function LockedPricePlaceholder() {
  return (
    <div className={styles.lockedPrice} aria-label="Estimated price locked until e-mail verification">
      <span>Estimated price locked</span>
      <strong>CHF ***</strong>
      <small>Verify your e-mail to reveal the estimate.</small>
    </div>
  );
}

function DetailedMeasurementFields({ state, setState }) {
  const canCalculate = state.components.includes("walls") || state.components.includes("ceilings");
  if (!canCalculate) return null;

  const updateDimension = (key, value) => {
    setState((current) => {
      const next = { ...current, [key]: value };
      const length = Number(next.roomLength);
      const width = Number(next.roomWidth);
      const height = Number(next.roomHeight);
      const quantities = { ...current.quantities };

      if (length > 0 && width > 0) {
        if (current.components.includes("ceilings")) quantities.ceilingArea = String(Math.round(length * width * 10) / 10);
        if (current.components.includes("walls") && height > 0) quantities.wallArea = String(Math.round(2 * (length + width) * height * 10) / 10);
      }

      return { ...next, quantities };
    });
  };

  return (
    <div className={styles.autoMeasurementPanel}>
      <span className={styles.detailGroupTitle}>Optional automatic room calculation</span>
      <p>Enter room dimensions to calculate selected wall and ceiling areas automatically. You can still adjust the results below.</p>
      <div className={styles.autoMeasurementGrid}>
        {[["roomLength", "Length", "m"], ["roomWidth", "Width", "m"], ["roomHeight", "Height", "m"]].map(([key, label, unit]) => (
          <label className={styles.quantityField} key={key}>
            <span>{label}</span>
            <div><input type="number" min="0" step="0.1" inputMode="decimal" value={state[key]} onChange={(event) => updateDimension(key, event.target.value)} /><b>{unit}</b></div>
          </label>
        ))}
      </div>
    </div>
  );
}

export default function OfferCalculator({ embedded = false, defaultFlow = "SELECT", detailedQuoteHref = "" }) {
  const router = useRouter();
  const { isDark, toggleTheme } = useAmigosTheme();
  const [step, setStep] = useState(0);
  const [state, setState] = useState(() => ({
    ...initialState,
    calculatorType: defaultFlow
  }));
  const [sessionId, setSessionId] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [errors, setErrors] = useState({});
  const [notice, setNotice] = useState("");
  const [busy, setBusy] = useState(false);
  const [codeSent, setCodeSent] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [pendingPhotos, setPendingPhotos] = useState([]);
  const [showSiteVisitForm, setShowSiteVisitForm] = useState(false);
  const [isSoundOn, setIsSoundOn] = useState(false);
  const codeRefs = useRef([]);

  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "41790000000";

  const isSimple = state.calculatorType === "SIMPLE";
  const isSelect = state.calculatorType === "SELECT";
  // Homepage block (spec §8): the Quick Quote runs directly, with the Detailed Quote
  // offered alongside as a link to its own page rather than as an in-place mode switch.
  const isHomeQuickQuote = embedded && isSimple && Boolean(detailedQuoteHref);
  const currentStepMeta = isSimple ? simpleStepMeta : detailedStepMeta;
  // Detailed inputs run 0–4 since Location was added as step 05 (§7B); the simple flow
  // still ends its inputs at 3, with 4 as its contact screen.
  const inputStepCount = isSimple ? 4 : 5;

  const components = useMemo(() => {
    return state.propertyType === "facade"
      ? [
          facadeComponent,
          ...componentOptions.filter((item) =>
            ["windows", "doors", "shutters", "garage_doors", "pressure_cleaning", "plaster_render", "other"].includes(item.id)
          )
        ]
      : componentOptions;
  }, [state.propertyType]);

  const COMPONENT_PRIMARY_SERVICE = {
    ceilings: "ceiling_paint_2_coats",
    walls: "wall_paint_2_coats",
    doors: "paint_doors",
    windows: "paint_windows",
    radiators: "paint_radiators",
    baseboards: "paint_baseboards",
    railings: "paint_railings",
    stairs: "paint_stairs",
    garage_doors: "paint_garage_doors",
    shutters: "paint_shutters",
    plaster_render: "plaster_render_work",
    pressure_cleaning: "pressure_clean",
    spray_painting: "spray_paint_items",
    facade: "wall_paint_2_coats"
  };

  const toggleComponent = useCallback((componentId) => {
    setState((current) => {
      const nextComponents = toggle(current.components, componentId);
      let nextServices = current.services;
      // Preselect service when only 1 component is selected (§2.3)
      if (nextComponents.length === 1) {
        const primaryService = COMPONENT_PRIMARY_SERVICE[nextComponents[0]];
        if (primaryService && !nextServices.includes(primaryService)) {
          nextServices = [...nextServices, primaryService];
        }
      }
      return {
        ...current,
        components: nextComponents,
        services: nextServices
      };
    });
  }, []);

  const visibleServices = useMemo(() => {
    return serviceOptions.filter((service) => {
      if (!state.components.length) return true;
      return service.components.some((component) => state.components.includes(component));
    });
  }, [state.components]);

  const visibleQuantities = useMemo(() => {
    // Measurement fields come only from components the customer actually selected.
    // Deriving them from selected services pulled in every component a shared service
    // maps to, so a doors-only project was asked for wall and ceiling m².
    const selectedComponents = new Set(state.components);

    return components.filter((component) => selectedComponents.has(component.id));
  }, [components, state.components]);

  const selectedComponentTitles = useMemo(() => {
    return titlesFromIds(components, state.components);
  }, [components, state.components]);

  const selectedServiceTitles = useMemo(() => {
    return titlesFromIds(serviceOptions, state.services);
  }, [state.services]);

  const projectTitleText = useMemo(() => {
    const propTitle = propertyTypes.find((o) => o.id === state.propertyType)?.title || "Malerarbeiten";
    if (isSimple) {
      const scopeTitle = workScopeOptions.find((o) => o.id === state.workScope)?.title || "";
      return [propTitle, scopeTitle].filter(Boolean).join(" - ");
    }
    return [propTitle, selectedComponentTitles.slice(0, 2).join(", ")].filter(Boolean).join(" - ");
  }, [state.propertyType, state.workScope, isSimple, selectedComponentTitles]);

  const whatsappUrl = useMemo(() => {
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hallo AMIGOS Maler, ich habe eine Online-Offerte berechnet (${projectTitleText}).`)}`;
  }, [whatsappNumber, projectTitleText]);

  const progress = useMemo(() => {
    if (isSimple) {
      // 5 steps: 0,1,2,3 are the input steps; step >= 10 means post-calculation
      if (step === 0) return 20;
      if (step === 1) return 40;
      if (step === 2) return 60;
      if (step === 3) return 80;
      return 100; // step 4 contact, step 10+ post-calc
    }
    return ((step + 1) / detailedStepMeta.length) * 100;
  }, [isSimple, step]);

  function updateComponentDetail(key, value) {
    setState((current) => ({
      ...current,
      componentDetails: { ...current.componentDetails, [key]: value }
    }));
  }

  function updateField(key, value) {
    setState((current) => ({ ...current, [key]: value }));
  }

  function updateCustomerInfo(key, value) {
    setState((current) => ({
      ...current,
      customerInfo: { ...current.customerInfo, [key]: value }
    }));
  }

  function selectSimpleOption(key, value) {
    setState((current) => ({ ...current, [key]: value }));
  }

  function toggleSpecialWork(itemId) {
    setState((current) => ({ ...current, specialWork: toggle(current.specialWork, itemId) }));
  }

  function attachPendingPhotos(fileInput, category) {
    const files = fileInput instanceof FileList || Array.isArray(fileInput)
      ? Array.from(fileInput)
      : [fileInput];

    setPendingPhotos((current) => [
      ...current,
      ...files.filter(Boolean).map((file) => ({ file, category }))
    ]);
  }

  function canContinue() {
    if (isSimple) {
      if (step === 0) return Boolean(state.propertyType);
      if (step === 1) return Boolean(state.workScope);
      if (step === 2) return Boolean(state.condition);
      if (step === 3) return isValidSwissPostalCode(state.postalCode);
      // step 4 = contact form — handled separately (pre-calc submit)
      return true;
    }
    if (step === 0) return Boolean(state.propertyType);
    if (step === 1) return state.components.length > 0;
    if (step === 2) return state.services.length > 0;
    if (step === 3) return visibleQuantities.every((item) => Number(state.quantities[item.quantityKey]) > 0);
    if (step === 4) return isValidSwissPostalCode(state.postalCode);
    return true;
  }


  async function calculateDetailed() {
    setBusy(true);
    setErrors({});
    setNotice("");

    try {
      const response = await fetch("/api/offer-calculator/calculate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          mode: state.mode,
          propertyType: state.propertyType,
          roomType: state.roomType,
          components: state.components,
          services: state.services,
          quantities: state.quantities,
          componentDetails: state.componentDetails,
          condition: state.condition,
          postalCode: state.postalCode,
          locationCity: state.locationCity,
          projectNotes: state.projectNotes
        })
      });
      const data = await response.json().catch(() => ({}));

      setBusy(false);

      if (!response.ok) {
        setErrors(data.errors || { general: data.error || "Could not calculate the quote. Please check the details and try again." });
        return;
      }

      setSessionId(data.sessionId);
      setStep(5);
    } catch {
      setBusy(false);
      setErrors({ general: "Could not calculate the quote. Please try again." });
    }
  }

  async function calculateQuick() {
    setBusy(true);
    setErrors({});
    setNotice("");

    try {
      const response = await fetch("/api/offer-calculator/quick-calculate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          propertyType: state.propertyType,
          roomType: state.roomType,
          roomCount: state.roomCount,
          roomSize: state.roomSize,
          livingArea: state.livingArea,
          individualWallCount: state.individualWallCount,
          individualWallSize: state.individualWallSize,
          ceilingCount: state.ceilingCount,
          areaType: state.areaType,
          areaWork: state.areaWork,
          floorType: state.floorType,
          floorArea: state.floorArea,
          specialWork: state.specialWork,
          workScope: state.workScope,
          condition: state.condition,
          postalCode: state.postalCode,
          locationCity: state.locationCity,
          projectNotes: [
            `Location: ${state.postalCode} ${state.locationCity}`.trim(),
            `Condition: ${state.condition}`,
            state.projectNotes
          ].filter(Boolean).join(" | ")
        })
      });
      const data = await response.json();
      setBusy(false);

      if (!response.ok) {
        setErrors(data.errors || { general: data.error || "Please check your project details." });
        return;
      }

      setSessionId(data.sessionId);
      // After calculate, move to email verify (step 10 = verify for simple mode)
      setStep(10);
    } catch (err) {
      setBusy(false);
      setErrors({ general: "Failed to calculate estimate. Please try again." });
    }
  }

  function next() {
    if (isSimple) {
      // Steps 0–3 are inputs; step 4 is the contact+send-code screen (triggered by submitContactAndSendCode)
      if (step === 3) {
        // Move to step 4 = contact + email form
        if (canContinue()) setStep(4);
        return;
      }
      if (canContinue()) setStep((current) => current + 1);
      return;
    }

    // Detailed inputs now run 0–4 (Location added as step 05, spec §7B); 4 is the last
    // input step, so continuing from there triggers the calculation.
    if (step === 4) {
      if (canContinue()) calculateDetailed();
      else setErrors({ general: "Please enter a valid 4-digit Swiss postal code." });
      return;
    }

    if (canContinue()) setStep((current) => Math.min(current + 1, detailedStepMeta.length - 1));
  }

  // Shared handler for both Simple and Detailed: send customer contact and dispatch verification code
  async function submitContactAndSendCode() {
    const info = state.customerInfo;
    if (!info.firstName.trim() || !info.lastName.trim() || !state.email.trim()) {
      setErrors({ general: "Please enter your first name, last name, and e-mail address." });
      return;
    }

    setBusy(true);
    setErrors({});
    setNotice("");

    try {
      let activeSessionId = sessionId;

      if (isSimple) {
        const calcResponse = await fetch("/api/offer-calculator/quick-calculate", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            propertyType: state.propertyType,
            roomType: state.roomType,
          roomCount: state.roomCount,
          roomSize: state.roomSize,
          livingArea: state.livingArea,
          individualWallCount: state.individualWallCount,
          individualWallSize: state.individualWallSize,
          ceilingCount: state.ceilingCount,
          areaType: state.areaType,
          areaWork: state.areaWork,
          floorType: state.floorType,
          floorArea: state.floorArea,
          specialWork: state.specialWork,
          workScope: state.workScope,
            condition: state.condition,
            postalCode: state.postalCode,
            locationCity: state.locationCity,
            projectNotes: [
              `Location: ${state.postalCode} ${state.locationCity}`.trim(),
              `Condition: ${state.condition}`,
              state.livingArea ? `Living area: ${state.livingArea}` : "",
              state.individualWallCount ? `Individual walls: ${state.individualWallCount}` : "",
              state.individualWallSize ? `Wall size: ${state.individualWallSize}` : "",
              state.ceilingCount ? `Ceilings: ${state.ceilingCount}` : "",
              state.areaType ? `Area: ${state.areaType}` : "",
              state.areaWork ? `Area work: ${state.areaWork}` : "",
              state.floorType ? `Floor type: ${state.floorType}` : "",
              state.floorArea ? `Floor area: ${state.floorArea}` : "",
              state.specialWork.length ? `Special work: ${state.specialWork.join(", ")}` : "",
              state.additionalWork ? `Additional work: ${state.additionalWork}` : "",
              state.projectNotes
            ].filter(Boolean).join(" | ")
          })
        });
        const calcData = await calcResponse.json();

        if (!calcResponse.ok) {
          setBusy(false);
          setErrors(calcData.errors || { general: calcData.error || "Calculation failed." });
          return;
        }

        activeSessionId = calcData.sessionId;
        setSessionId(activeSessionId);

        if (pendingPhotos.length > 0) {
          for (const pending of pendingPhotos) {
            await uploadPhotos(pending.file, pending.category, activeSessionId);
          }
          setPendingPhotos([]);
        }
      }

      const codeResponse = await fetch("/api/offer-calculator/send-code", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sessionId: activeSessionId,
          email: state.email,
          firstName: state.customerInfo.firstName,
          lastName: state.customerInfo.lastName,
          phone: state.customerInfo.phone
        })
      });
      const codeData = await codeResponse.json();

      setBusy(false);

      if (!codeResponse.ok) {
        setErrors(codeData.errors || { general: codeData.error || "Could not send verification code." });
        return;
      }

      setCodeSent(true);
      setStep(isSimple ? 10 : 6); // Move to code entry screen
      setNotice(codeData.developmentCode ? `Development code: ${codeData.developmentCode}` : "Verification code sent. Please check your e-mail.");
    } catch (err) {
      setBusy(false);
      setErrors({ general: "An error occurred. Please try again." });
    }
  }

  // Alias for backward compatibility if invoked anywhere
  const sendDetailedCode = submitContactAndSendCode;

  async function resendCode() {
    if (!sessionId && isSimple) {
      return submitContactAndSendCode();
    }

    setBusy(true);
    setErrors({});
    setNotice("");

    try {
      const response = await fetch("/api/offer-calculator/send-code", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sessionId,
          email: state.email,
          firstName: state.customerInfo.firstName,
          lastName: state.customerInfo.lastName,
          phone: state.customerInfo.phone
        })
      });
      const data = await response.json();

      setBusy(false);

      if (!response.ok) {
        setErrors(data.errors || { general: data.error || "Could not send verification code." });
        return;
      }

      setCodeSent(true);
      setNotice(data.developmentCode ? `Development code: ${data.developmentCode}` : "Verification code resent. Please check your e-mail.");
    } catch (err) {
      setBusy(false);
      setErrors({ general: "An error occurred. Please try again." });
    }
  }

  const sendCode = resendCode;

  async function verifyCode() {
    setBusy(true);
    setErrors({});
    setNotice("");

    try {
      const response = await fetch("/api/offer-calculator/verify-code", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sessionId, code: state.code.join("") })
      });
      const data = await response.json();

      setBusy(false);

      if (!response.ok) {
        setErrors({ general: data.error || "Verification failed." });
        return;
      }

      setPriceRange(data.priceRange);
      // Simple mode → step 11 (simple price); Detailed mode → step 7 (price)
      setStep(isSimple ? 11 : 7);
    } catch (err) {
      setBusy(false);
      setErrors({ general: "Verification failed. Please try again." });
    }
  }

  async function uploadPhotos(fileInput, category, overrideSessionId = "") {
    const targetSessionId = overrideSessionId || sessionId;
    if (!targetSessionId || !fileInput) return;
    const files = fileInput instanceof FileList || Array.isArray(fileInput)
      ? Array.from(fileInput)
      : [fileInput];

    if (files.length === 0) return;

    for (const file of files) {
      const formData = new FormData();
      formData.set("sessionId", targetSessionId);
      formData.set("category", category);
      formData.set("photo", file);

      try {
        const response = await fetch("/api/offer-calculator/photos", {
          method: "POST",
          body: formData
        });
        const data = await response.json();

        if (response.ok) {
          setPhotos((current) => [...current, data.photo]);
        } else {
          setErrors({ general: data.error || `Upload failed for ${file.name}.` });
        }
      } catch {
        setErrors({ general: `Upload failed for ${file.name}. Please try again.` });
      }
    }
  }

  const uploadPhoto = uploadPhotos;

  async function submitRequest(requestedAction) {
    if (requestedAction === "CONSULTATION" && !showSiteVisitForm) {
      setShowSiteVisitForm(true);
      return;
    }

    const fieldErrors = {};
    const requiredFields = requestedAction === "CONSULTATION"
      ? ["firstName", "lastName", "phone", "address"]
      : ["firstName", "lastName"];

    for (const field of requiredFields) {
      if (!String(state.customerInfo[field] || "").trim()) fieldErrors[field] = "Required";
    }

    if (Object.keys(fieldErrors).length) {
      setErrors({
        ...fieldErrors,
        general: requestedAction === "CONSULTATION"
          ? "Please enter your street address for the site visit."
          : "Please check your contact details."
      });
      return;
    }

    setBusy(true);
    setErrors({});
    setNotice("");

    const response = await fetch("/api/offer-calculator/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        sessionId,
        customerInfo: {
          ...state.customerInfo,
          postalCode: state.customerInfo.postalCode || state.postalCode,
          city: state.customerInfo.city || state.locationCity,
          email: state.email,
          requestedAction
        }
      })
    });
    const data = await response.json();

    setBusy(false);

    if (!response.ok) {
      setErrors(data.errors || { general: data.error || "Please complete the required details." });
      return;
    }

    setNotice(requestedAction === "CONSULTATION"
      ? "Site visit request received. Our team will contact you to confirm the appointment."
      : "Offer request received. It is now in the AMIGOS CRM.");
  }

  function renderPropertyCard(option, selected, onClick) {
    return (
      <button
        key={option.id}
        type="button"
        className={cx(styles.propertyCard, selected && styles.propertyCardSelected)}
        onClick={onClick}
      >
        {selected && <span className={styles.propertyCardBadge}>✓</span>}
        <div className={styles.propertyCardMedia}>
          {option.image ? (
            <img src={option.image} alt={option.title} className={styles.propertyCardImage} />
          ) : (
            <div className={styles.propertyCardFallbackGraphic}>
              <ComponentIcon iconKey={option.iconKey || "other"} />
            </div>
          )}
        </div>
        <div className={styles.propertyCardInfo}>
          <strong className={styles.propertyCardTitle}>{option.title}</strong>
          <span className={styles.propertyCardSubtitle}>{option.subtitle || "\u00A0"}</span>
        </div>
      </button>
    );
  }

  function renderScopeCard(option, selected, onClick) {
    return (
      <button
        key={option.id}
        type="button"
        className={cx(styles.scopeCard, selected && styles.scopeCardSelected)}
        onClick={onClick}
      >
        {selected && <span className={styles.propertyCardBadge}>✓</span>}
        <div className={styles.scopeCardIcon}>
          <ComponentIcon iconKey={option.iconKey || "walls"} />
        </div>
        <strong className={styles.scopeCardTitle}>{option.title}</strong>
        <span className={styles.scopeCardDesc}>{option.desc}</span>
      </button>
    );
  }

  function renderConditionCard(option, selected, onClick) {
    return (
      <button
        key={option.id}
        type="button"
        className={cx(styles.conditionCard, selected && styles.conditionCardSelected)}
        onClick={onClick}
      >
        {selected && <span className={styles.propertyCardBadge}>✓</span>}
        <div className={styles.conditionCardIcon}>
          <ComponentIcon iconKey={option.iconKey || "condition_good"} />
        </div>
        <div className={styles.conditionCardContent}>
          <strong className={styles.conditionCardTitle}>{option.title}</strong>
          <span className={styles.conditionCardDesc}>{option.desc}</span>
        </div>
      </button>
    );
  }

  function renderSelectionCard(option, selected, onClick) {
    return (
      <button key={option.id} type="button" className={cx(styles.selectionCard, selected && styles.selectedCard)} onClick={onClick}>
        <span className={styles.cardIcon}>{option.iconKey ? <ComponentIcon iconKey={option.iconKey} /> : option.icon || "✦"}</span>
        <div className={styles.selectionCardText}>
          <strong className={styles.selectionCardTitle}>{option.title}</strong>
          {option.unit && <small className={styles.selectionCardUnit}>Unit: {option.unit}</small>}
        </div>
        {!selected && <i aria-hidden="true">›</i>}
      </button>
    );
  }

  // --- EMBEDDED HOMEPAGE VERSION ---
  if (embedded) {
    if (isSelect) {
      return (
        <main className={cx(styles.page, styles.embedded, styles.selectionPage, "offerCalculatorEmbedded")}>
          <div className={styles.selectionHeroContainer}>
            {/* 1. Header */}
            <div className={styles.selectionHeader}>
              <h1 className={styles.selectionTitle}>Offer calculator &amp; request</h1>
              <h2 className={styles.selectionSubTitle}>Choose the right calculation for your project.</h2>
              <p className={styles.selectionLead}>
                Select the calculation model that best matches your project requirements.
              </p>
            </div>

            {/* 2. Two Calculator Cards */}
            <div className={styles.selectionTabsGrid}>
              {/* CARD 1: For Homeowners */}
              <div
                role="button"
                tabIndex={0}
                className={cx(styles.selectionTabCard, styles.tabFastEstimate)}
                onClick={() => {
                  setState((curr) => ({ ...curr, calculatorType: "SIMPLE" }));
                  setStep(0);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    setState((curr) => ({ ...curr, calculatorType: "SIMPLE" }));
                    setStep(0);
                  }
                }}
              >
                <div className={styles.tabBadgeRow}>
                  <span className={styles.tabTagFast}>
                    <span className={styles.tabTagIcon}>⚡</span> FOR HOMEOWNERS
                  </span>
                  <span className={styles.tabTagEstimateTime}>⏱ ~2 min estimate</span>
                </div>

                <h3 className={styles.tabHeadline}>
                  Get an estimate in a few simple steps
                </h3>

                <p className={styles.tabDescription}>
                  Fast, non-binding quote tailored for private homes and flats with no wall measurements needed.
                </p>

                <ul className={styles.tabFeatureList}>
                  <li className={styles.tabFeatureItem}>
                    <span className={styles.tabFeatureIcon}>✓</span>
                    <span>No wall or ceiling m² measuring needed</span>
                  </li>
                  <li className={styles.tabFeatureItem}>
                    <span className={styles.tabFeatureIcon}>✓</span>
                    <span>Room count &amp; condition based estimate</span>
                  </li>
                  <li className={styles.tabFeatureItem}>
                    <span className={styles.tabFeatureIcon}>✓</span>
                    <span>Instant price range delivered via e-mail</span>
                  </li>
                </ul>

                <div className={styles.tabButtonWrapper}>
                  <button type="button" className={styles.tabActionBtn}>
                    <span>Start Quick Estimate</span>
                    <span className={styles.tabActionArrow}>→</span>
                  </button>
                </div>
              </div>

              {/* CARD 2: For Professionals */}
              <div
                role="button"
                tabIndex={0}
                className={cx(styles.selectionTabCard, styles.tabDetailedSpecs)}
                onClick={() => {
                  if (detailedQuoteHref) {
                    router.push(detailedQuoteHref);
                  } else {
                    setState((curr) => ({ ...curr, calculatorType: "DETAILED" }));
                    setStep(0);
                  }
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    if (detailedQuoteHref) {
                      router.push(detailedQuoteHref);
                    } else {
                      setState((curr) => ({ ...curr, calculatorType: "DETAILED" }));
                      setStep(0);
                    }
                  }
                }}
              >
                <div className={styles.tabBadgeRow}>
                  <span className={styles.tabTagDetailed}>
                    <span className={styles.tabTagIcon}>📐</span> FOR PROFESSIONALS
                  </span>
                  <span className={styles.tabTagEstimateTime}>📄 Itemized PDF</span>
                </div>

                <h3 className={styles.tabHeadline}>
                  Detailed quote for precise planning
                </h3>

                <p className={styles.tabDescription}>
                  Itemized cost estimation designed for property managers, architects, and precision planners.
                </p>

                <ul className={styles.tabFeatureList}>
                  <li className={styles.tabFeatureItem}>
                    <span className={styles.tabFeatureIcon}>✓</span>
                    <span>Exact m² calculations for all surfaces</span>
                  </li>
                  <li className={styles.tabFeatureItem}>
                    <span className={styles.tabFeatureIcon}>✓</span>
                    <span>Doors, windows, radiators &amp; woodwork</span>
                  </li>
                  <li className={styles.tabFeatureItem}>
                    <span className={styles.tabFeatureIcon}>✓</span>
                    <span>Downloadable official PDF quote</span>
                  </li>
                </ul>

                <div className={styles.tabButtonWrapper}>
                  <button type="button" className={cx(styles.tabActionBtn, styles.tabActionBtnDetailed)}>
                    <span>Create Detailed Quote</span>
                    <span className={styles.tabActionArrow}>→</span>
                  </button>
                </div>
              </div>
            </div>

            {/* 3. Reassurance Strip Below Cards */}
            <div className={styles.selectionTrustRow}>
              <div className={styles.selectionTrustItem}>
                <span className={styles.selectionTrustIcon}>
                  <ComponentIcon iconKey="shield" />
                </span>
                <div>
                  <strong>100% Free &amp; Non-Binding</strong>
                  <p>Transparent estimation with zero purchase obligation.</p>
                </div>
              </div>
              <div className={styles.selectionTrustItem}>
                <span className={styles.selectionTrustIcon}>
                  <ComponentIcon iconKey="lock" />
                </span>
                <div>
                  <strong>Prices Are Protected</strong>
                  <p>Secure calculation revealed after quick e-mail verification.</p>
                </div>
              </div>
              <div className={styles.selectionTrustItem}>
                <span className={styles.selectionTrustIcon}>
                  <ComponentIcon iconKey="swiss_quality" />
                </span>
                <div>
                  <strong>Swiss Quality Standards</strong>
                  <p>Certified craftsmanship across Olten and surrounding cantons.</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      );
    }

    return (
      <main className={cx(styles.page, styles.embedded, isHomeQuickQuote && styles.homeLayout, "offerCalculatorEmbedded")}>
        <aside className={styles.embeddedRail}>
          {isHomeQuickQuote ? (
            /* Homepage rail is the Detailed Quote CTA for Customer B — it links to the
               separate calculator page rather than swapping this one in place. */
            <div className={styles.sidebarModeCard}>
              <div className={styles.calculatorControls} aria-label="Calculator controls">
                <button
                  className={cx(styles.soundToggle, isSoundOn && styles.soundToggleActive)}
                  type="button"
                  aria-label={isSoundOn ? "Turn sound off" : "Turn sound on"}
                  aria-pressed={isSoundOn}
                  onClick={() => setIsSoundOn((current) => !current)}
                >
                  <span className={styles.soundToggleIcon} aria-hidden="true">
                    {isSoundOn ? "♪" : "×"}
                  </span>
                </button>
                <button
                  className={styles.themeToggle}
                  type="button"
                  aria-label={`Switch to ${isDark ? "day" : "night"} mode`}
                  aria-pressed={isDark}
                  onClick={toggleTheme}
                >
                  <span className={styles.themeToggleIcon} aria-hidden="true">{isDark ? "☀" : "☾"}</span>
                </button>
              </div>
              <span className={styles.sidebarModeKicker}>For professionals &amp; precise planning</span>
              <h3 className={styles.sidebarModeTitle}>Create a detailed quote.</h3>
              <ul className={styles.detailedCtaList}>
                <li>Selectable components and services</li>
                <li>Ideal for architects, property managers &amp; professionals</li>
              </ul>
              <Link className={styles.sidebarModeSwitchBtn} href={detailedQuoteHref}>
                <span>Open detailed calculator</span>
                <i>→</i>
              </Link>
              <p className={styles.protectedPriceNote}>
                🔒 <strong>Prices are protected</strong> — visible after e-mail verification.
              </p>
            </div>
          ) : (
            <>
              <div className={styles.heroCopy}>
                <span className={styles.brand}>AMIGOS MALER <span style={{ textTransform: "none" }}>GmbH</span></span>
                <strong>Kompetenz verbindet</strong>
                <h1>Offer calculator &amp; request</h1>
                <p>Calculate, see your price – and request your offer.</p>
                <ul>
                  <li>Calculate your estimated price in a few steps</li>
                  <li>See your result after verifying your e-mail</li>
                  <li>Request your personal offer or book a consultation</li>
                </ul>
              </div>

              {/* MODE SWITCH CTA */}
              <div className={styles.sidebarModeCard}>
                <span className={styles.sidebarModeKicker}>
                  {isSimple ? "FOR HOMEOWNERS" : "FOR PROFESSIONALS"}
                </span>
                <h3 className={styles.sidebarModeTitle}>
                    {isSimple ? "Fast estimate mode" : "Detailed quote mode"}
                </h3>
                <p className={styles.sidebarModeDesc}>
                  {isSimple
                    ? "Immediate estimate in 5 simple steps without m² wall measurements."
                    : "Exact measurements with doors, windows, radiators & repair surface specs."}
                </p>
                <button
                  type="button"
                  className={styles.sidebarModeSwitchBtn}
                  onClick={() => {
                    setState((curr) => ({
                      ...curr,
                      calculatorType: isSimple ? "DETAILED" : "SIMPLE"
                    }));
                    setStep(0);
                  }}
                >
                  <span>{isSimple ? "Switch to Detailed Quote" : "Switch to Fast Estimate"}</span>
                  <i>→</i>
                </button>
              </div>
            </>
          )}

          {!isHomeQuickQuote && (
            <div className={styles.securityCard}>
              <span>🔒</span>
              <h2>Prices are protected</h2>
              <p>The exact price is only visible after e-mail verification.</p>
            </div>
          )}
        </aside>

        <div className={styles.embeddedWorkspace}>
          {isHomeQuickQuote && (
            <header className={styles.quickQuoteIntro}>
              <div className={styles.quickQuoteTopBar}>
                <h2>Your estimated quote in just a few steps</h2>
              </div>
              <p>Simple. Fast. No obligation. Receive your price after entering your email address.</p>
            </header>
          )}
          {/* PROGRESS BAR */}
          <nav className={cx(styles.progressNav, isSimple && styles.progressNavSimple)} aria-label="Calculator progress">
            <span className={styles.progressFill} style={{ width: `${progress}%` }} />
            {currentStepMeta.map((item, index) => {
              let isCurrent, isDone;
              if (isSimple) {
                isCurrent = step === index || (index === 4 && (step === 10 || step === 11));
                isDone = step > index && !(index === 4 && step >= 10);
              } else {
                isCurrent = index === step;
                isDone = index < step;
              }

              return (
                <button
                  key={item.key}
                  className={cx(styles.progressStep, isCurrent && styles.currentStep, isDone && styles.doneStep)}
                  type="button"
                  onClick={() => {
                    if (isSimple) {
                      if (step <= inputStepCount && index < step) setStep(index);
                    } else {
                      if (index < step) setStep(index);
                    }
                  }}
                >
                  <span>{item.number}</span>
                  <i>{item.icon?.startsWith?.("step_") ? <ComponentIcon iconKey={item.icon} /> : item.icon}</i>
                  <b>{item.title}</b>
                </button>
              );
            })}
          </nav>

          <section className={cx(styles.embeddedLayout, (isSimple || step < inputStepCount) && styles.embeddedLayoutExpanded)}>
            <div className={cx(styles.consultationShell, styles.embeddedLeft)}>
              {errors.general && <p className={styles.error}>{errors.general}</p>}
              {notice && <p className={styles.notice}>{notice}</p>}

              {/* STEP 0: Project Type */}
              {step === 0 && (
                <div className={styles.stepPanel}>
                  <span className={styles.stepKicker}>01 Project Type</span>
                  <h2>{isSimple ? "What type of property would you like us to paint?" : "What type of property is it?"}</h2>
                  <p>Please select your property type below.</p>
                  <div className={styles.propertyGrid}>
                    {(isSimple ? quickPropertyTypes : propertyTypes).map((option) =>
                      renderPropertyCard(option, state.propertyType === option.id, () => {
                        setState((current) => ({
                          ...current,
                          propertyType: option.id,
                          roomCount: option.roomCount || current.roomCount,
                          components: option.id === "facade" ? ["facade"] : current.components.filter((item) => item !== "facade"),
                          services: option.id === "facade" ? current.services.filter((service) => serviceOptions.find((item) => item.id === service)?.components.includes("facade")) : current.services,
                          quantities: option.id === "facade" ? current.quantities : { ...current.quantities, facadeArea: "" }
                        }));
                      })
                    )}
                  </div>
                  {!isSimple && state.propertyType === "room" && (
                    <div className={styles.roomChips}>
                      {roomTypes.map((room) => (
                        <button key={room} type="button" className={state.roomType === room ? styles.activeChip : ""} onClick={() => setState((current) => ({ ...current, roomType: room }))}>{room}</button>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* SIMPLE MODE — STEP 1: Scope & Work */}
              {isSimple && step === 1 && (
                <div className={styles.stepPanel}>
                  <span className={styles.stepKicker}>02 Scope & Work</span>
                  <h2>What would you like us to paint?</h2>
                  <p>Select the work scope that best fits your project. No m² calculations needed.</p>

                  <div className={styles.scopeCardGrid}>
                    {workScopeOptions.map((option) =>
                      renderScopeCard(option, state.workScope === option.id, () => {
                        setState((curr) => ({ ...curr, workScope: option.id }));
                      })
                    )}
                  </div>

                  {["walls", "walls_ceilings"].includes(state.workScope) && (
                    <div style={{ marginTop: "16px" }}>
                      <div style={{ fontSize: "13px", fontWeight: "700", marginBottom: "8px", color: "var(--ink)" }}>
                        Approximate living / floor area
                      </div>
                      <div className={styles.roomChips}>
                        {livingAreaOptions.map((option) => (
                          <button
                            key={option.id}
                            type="button"
                            className={state.livingArea === option.id ? styles.activeChip : ""}
                            onClick={() => selectSimpleOption("livingArea", option.id)}
                          >
                            {option.title}
                          </button>
                        ))}
                      </div>
                      <p style={{ marginTop: "8px", color: "var(--ink-muted)", fontSize: "13px" }}>
                        Estimate applies to standard room heights up to 2.80 m. Higher rooms may require a surcharge after review.
                      </p>
                    </div>
                  )}

                  {state.workScope === "individual_walls" && (
                    <>
                      <div style={{ marginTop: "16px" }}>
                        <div style={{ fontSize: "13px", fontWeight: "700", marginBottom: "8px", color: "var(--ink)" }}>
                          Number of walls
                        </div>
                        <div className={styles.roomChips}>
                          {individualWallCountOptions.map((option) => (
                            <button key={option.id} type="button" className={state.individualWallCount === option.id ? styles.activeChip : ""} onClick={() => selectSimpleOption("individualWallCount", option.id)}>
                              {option.title}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div style={{ marginTop: "14px" }}>
                        <div style={{ fontSize: "13px", fontWeight: "700", marginBottom: "8px", color: "var(--ink)" }}>
                          Approximate wall size
                        </div>
                        <div className={styles.roomChips}>
                          {wallSizeOptions.map((option) => (
                            <button key={option.id} type="button" className={state.individualWallSize === option.id ? styles.activeChip : ""} onClick={() => selectSimpleOption("individualWallSize", option.id)}>
                              {option.title}
                            </button>
                          ))}
                        </div>
                      </div>
                    </>
                  )}

                  {state.workScope === "ceilings" && (
                    <div style={{ marginTop: "16px" }}>
                      <div style={{ fontSize: "13px", fontWeight: "700", marginBottom: "8px", color: "var(--ink)" }}>
                        Number of rooms / ceilings
                      </div>
                      <div className={styles.roomChips}>
                        {ceilingCountOptions.map((option) => (
                          <button key={option.id} type="button" className={state.ceilingCount === option.id ? styles.activeChip : ""} onClick={() => selectSimpleOption("ceilingCount", option.id)}>
                            {option.title}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {state.workScope === "individual_rooms" && (
                    <>
                      <div style={{ marginTop: "16px" }}>
                        <div style={{ fontSize: "13px", fontWeight: "700", marginBottom: "8px", color: "var(--ink)" }}>
                          Area / room
                        </div>
                        <div className={styles.roomChips}>
                          {areaTypeOptions.map((option) => (
                            <button key={option.id} type="button" className={state.areaType === option.id ? styles.activeChip : ""} onClick={() => selectSimpleOption("areaType", option.id)}>
                              {option.title}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div style={{ marginTop: "14px" }}>
                        <div style={{ fontSize: "13px", fontWeight: "700", marginBottom: "8px", color: "var(--ink)" }}>
                          What should be painted there?
                        </div>
                        <div className={styles.roomChips}>
                          {areaWorkOptions.map((option) => (
                            <button key={option.id} type="button" className={state.areaWork === option.id ? styles.activeChip : ""} onClick={() => selectSimpleOption("areaWork", option.id)}>
                              {option.title}
                            </button>
                          ))}
                        </div>
                      </div>
                    </>
                  )}

                  {state.workScope === "floor" && (
                    <>
                      <div style={{ marginTop: "16px" }}>
                        <div style={{ fontSize: "13px", fontWeight: "700", marginBottom: "8px", color: "var(--ink)" }}>
                          Floor type
                        </div>
                        <div className={styles.roomChips}>
                          {floorTypeOptions.map((option) => (
                            <button key={option.id} type="button" className={state.floorType === option.id ? styles.activeChip : ""} onClick={() => selectSimpleOption("floorType", option.id)}>
                              {option.title}
                            </button>
                          ))}
                        </div>
                      </div>
                      <label className={styles.quantityField} style={{ marginTop: "14px" }}>
                        <span>Approximate floor area</span>
                        <div>
                          <input type="number" min="0" inputMode="decimal" value={state.floorArea} placeholder="25" onChange={(event) => selectSimpleOption("floorArea", event.target.value)} />
                          <b>m²</b>
                        </div>
                      </label>
                    </>
                  )}

                  <div style={{ marginTop: "16px" }}>
                    <div style={{ fontSize: "13px", fontWeight: "700", marginBottom: "8px", color: "var(--ink)" }}>
                      Number of Rooms: <b style={{ color: "var(--yellow)" }}>{state.roomCount} {state.roomCount === 1 ? "Room" : "Rooms"}</b>
                    </div>
                    <div className={styles.roomChips}>
                      {[1, 2, 3, 4, 5, 6, 8, 10].map((num) => (
                        <button
                          key={num}
                          type="button"
                          className={state.roomCount === num ? styles.activeChip : ""}
                          onClick={() => setState((curr) => ({ ...curr, roomCount: num }))}
                        >
                          {num === 10 ? "10+" : num}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div style={{ marginTop: "14px" }}>
                    <div style={{ fontSize: "13px", fontWeight: "700", marginBottom: "8px", color: "var(--ink)" }}>
                      Average Room Size
                    </div>
                    <div className={styles.roomChips}>
                      {[
                        { id: "small", title: "Compact (~10–14 m²)" },
                        { id: "medium", title: "Standard (~15–22 m²)" },
                        { id: "large", title: "Spacious (~25–35+ m²)" }
                      ].map((preset) => (
                        <button
                          key={preset.id}
                          type="button"
                          className={state.roomSize === preset.id ? styles.activeChip : ""}
                          onClick={() => setState((curr) => ({ ...curr, roomSize: preset.id }))}
                        >
                          {preset.title}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* SIMPLE MODE — STEP 2: Condition */}
              {isSimple && step === 2 && (
                <div className={styles.stepPanel}>
                  <span className={styles.stepKicker}>03 Condition</span>
                  <h2>What is the current condition?</h2>
                  <p>This helps us give you the most accurate estimate possible.</p>

                  <div className={styles.conditionCardGrid}>
                    {conditionOptions.map((option) =>
                      renderConditionCard(option, state.condition === option.id, () => {
                        setState((curr) => ({ ...curr, condition: option.id }));
                      })
                    )}
                  </div>

                  <div style={{ marginTop: "18px" }}>
                    <div style={{ fontSize: "13px", fontWeight: "700", marginBottom: "8px", color: "var(--ink)" }}>
                      Special work or damage
                    </div>
                    <p style={{ margin: "0 0 10px", color: "var(--ink-muted)", fontSize: "13px" }}>
                      Select anything that should be reviewed. These items can be priced manually or with later surcharge rules.
                    </p>
                    <div className={styles.roomChips}>
                      {specialWorkOptions.map((option) => (
                        <button
                          key={option.id}
                          type="button"
                          className={state.specialWork.includes(option.id) ? styles.activeChip : ""}
                          onClick={() => toggleSpecialWork(option.id)}
                        >
                          {option.title}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* SIMPLE MODE — STEP 3: Location */}
              {isSimple && step === 3 && (
                <div className={styles.stepPanel}>
                  <span className={styles.stepKicker}>04 Location</span>
                  <h2>Where is the property located?</h2>
                  <p>Your location helps us calculate any travel costs accurately.</p>
                  <LocationFields postalCode={state.postalCode} city={state.locationCity} onChange={updateField} />
                </div>
              )}

              {/* DETAILED MODE — STEP 5: Location */}
              {!isSimple && step === 4 && (
                <div className={styles.stepPanel}>
                  <span className={styles.stepKicker}>05 Location</span>
                  <h2>Where is the property located?</h2>
                  <p>Your location helps us calculate any travel costs accurately.</p>
                  <LocationFields postalCode={state.postalCode} city={state.locationCity} onChange={updateField} />
                </div>
              )}

                  {/* SIMPLE MODE — STEP 4: Contact + Send Code */}
                  {isSimple && step === 4 && (
                    <div className={styles.stepPanel}>
                      <span className={styles.stepKicker}>05 Your Quote</span>
                      <h2>Your estimated quote is ready.</h2>
                      <p>Enter your contact details to receive your personal AMIGOS estimated quotation.</p>
                      <LockedPricePlaceholder />

                      <label className={styles.notesField} style={{ marginTop: "16px" }}>
                        <span>Project description</span>
                        <textarea
                          value={state.projectNotes}
                          placeholder="Describe the rooms, surfaces, damage, timing or access. You can also mention anything that is not listed above."
                          onChange={(event) => setState((current) => ({ ...current, projectNotes: event.target.value }))}
                        />
                      </label>

                      <label className={styles.notesField} style={{ marginTop: "12px" }}>
                        <span>Other / Additional work</span>
                        <textarea
                          value={state.additionalWork}
                          placeholder="Example: one door, one radiator, a window frame or another small item should also be painted."
                          onChange={(event) => setState((current) => ({ ...current, additionalWork: event.target.value }))}
                        />
                      </label>

                      <div className={styles.uploadPanel} style={{ marginTop: "16px" }}>
                        <h3>Photos before e-mail verification</h3>
                        <p style={{ margin: "0 0 12px", color: "var(--ink-muted)", fontSize: "13px" }}>
                          Upload photos of surfaces, damage or areas you want us to review.
                        </p>
                        <div className={styles.photoGrid}>
                          {["Room overview", "Damage", "Other"].map((category) => (
                            <label key={category} className={styles.photoDrop}>
                              <span>{category}</span>
                              <small>JPG, PNG, WEBP, HEIC or PDF</small>
                              <input
                                type="file"
                                accept="image/*,.pdf,application/pdf"
                                multiple
                                onChange={(event) => {
                                  attachPendingPhotos(event.target.files, category);
                                  event.target.value = "";
                                }}
                              />
                            </label>
                          ))}
                        </div>
                        {pendingPhotos.length > 0 && (
                          <p className={styles.notice} style={{ marginTop: "10px" }}>
                            {pendingPhotos.length} photo{pendingPhotos.length === 1 ? "" : "s"} ready to attach after calculation.
                          </p>
                        )}
                      </div>

                      <div className={styles.customerGrid} style={{ marginTop: "16px" }}>
                        {[
                          ["firstName", "First Name *"],
                          ["lastName", "Last Name *"],
                          ["phone", "Phone (optional)"]
                        ].map(([key, label]) => (
                          <label key={key}>
                            <span>{label}</span>
                            <input
                              value={state.customerInfo[key]}
                              onChange={(event) => updateCustomerInfo(key, event.target.value)}
                              aria-invalid={Boolean(errors[key])}
                            />
                            {errors[key] && <small>{errors[key]}</small>}
                          </label>
                        ))}
                        <label style={{ gridColumn: "1 / -1" }}>
                          <span>E-Mail Address *</span>
                          <input
                            type="email"
                            value={state.email}
                            placeholder="you@example.com"
                            onChange={(event) => setState((current) => ({ ...current, email: event.target.value }))}
                          />
                        </label>
                      </div>

                      {errors.general && <p className={styles.error}>{errors.general}</p>}
                      {notice && <p className={styles.notice}>{notice}</p>}

                      <div className={styles.navActions} style={{ marginTop: "16px" }}>
                        <button type="button" className={styles.secondaryAction} onClick={() => setStep(3)}>
                          ← BACK
                        </button>
                        <button
                          type="button"
                          className={styles.primaryAction}
                          disabled={busy}
                          onClick={submitContactAndSendCode}
                        >
                          {busy ? "SENDING…" : "GET MY ESTIMATED QUOTE →"}
                        </button>
                      </div>
                    </div>
                  )}

                  {/* SIMPLE MODE — STEP 10: Code Verification */}
                  {isSimple && step === 10 && (
                    <div className={styles.verifyPanel}>
                      <span className={styles.stepKicker}>05 Verify E-Mail</span>
                      <h2>Check your e-mail</h2>
                      <p>Enter the four-digit code we sent to <strong>{state.email}</strong>.</p>

                      {notice && <p className={styles.notice}>{notice}</p>}
                      {errors.general && <p className={styles.error}>{errors.general}</p>}

                      <div className={styles.codeInputs}>
                        {state.code.map((digit, index) => (
                          <input
                            key={index}
                            ref={(node) => { codeRefs.current[index] = node; }}
                            type="text"
                            inputMode="numeric"
                            maxLength={1}
                            value={digit}
                            onChange={(event) => {
                              const value = event.target.value.replace(/\D/g, "").slice(0, 1);
                              setState((current) => {
                                const code = [...current.code];
                                code[index] = value;
                                return { ...current, code };
                              });
                              if (value && codeRefs.current[index + 1]) codeRefs.current[index + 1].focus();
                            }}
                          />
                        ))}
                      </div>
                      <button className={styles.primaryAction} type="button" onClick={verifyCode} disabled={busy}>
                        {busy ? "VERIFYING…" : "VERIFY E-MAIL →"}
                      </button>
                      <button className={styles.textButton} type="button" onClick={resendCode} disabled={busy}>
                        Didn't receive the code? Send again
                      </button>
                    </div>
                  )}

                  {/* SIMPLE MODE — STEP 11: Price Result */}
                  {isSimple && step === 11 && (
                    <div className={styles.pricePanel}>
                      <div className={styles.successMark}>✓</div>
                      <span className={styles.stepKicker}>E-mail successfully verified</span>
                      <h2>Your personal estimated quotation</h2>

                      <div className={styles.summaryPanel} style={{ marginTop: "16px" }}>
                        <h3>Your project summary</h3>
                        <dl>
                          <div><dt>Property</dt><dd>{quickPropertyTypes.find((o) => o.id === state.propertyType)?.title || "Not selected"}</dd></div>
                          <div><dt>Scope</dt><dd>{workScopeOptions.find((o) => o.id === state.workScope)?.title || state.workScope}</dd></div>
                          <div><dt>Rooms</dt><dd>{state.roomCount} room(s) · {state.roomSize} size</dd></div>
                          <div><dt>Condition</dt><dd>{conditionOptions.find((o) => o.id === state.condition)?.title || state.condition}</dd></div>
                          <div><dt>Location</dt><dd>{state.postalCode} {state.locationCity}</dd></div>
                          <div><dt>Travel costs</dt><dd>Included</dd></div>
                        </dl>
                      </div>

                      <div style={{ margin: "20px 0 8px", textAlign: "center" }}>
                        <strong className={styles.priceRange}>{priceRange}</strong>
                        <p style={{ margin: "6px 0 0", fontSize: "0.9rem", color: "var(--color-muted, #888)" }}>Estimated price incl. VAT</p>
                      </div>
                      <p>This estimate is non-binding and based on your project details. The final price may vary after review or an on-site inspection.</p>

                      {notice && <p className={styles.notice} style={{ marginTop: "12px" }}>{notice}</p>}
                      {errors.general && <p className={styles.error} style={{ marginTop: "12px" }}>{errors.general}</p>}

                      <div className={styles.finalActions} style={{ marginTop: "20px" }}>
                        <button className={styles.primaryAction} type="button" onClick={() => submitRequest("OFFER")} disabled={busy}>
                          {busy ? "SUBMITTING…" : "REQUEST OFFER"}
                        </button>
                        {sessionId && (
                          <a
                            href={`/api/offer-calculator/pdf?sessionId=${sessionId}`}
                            download
                            className={styles.secondaryAction}
                            style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", textDecoration: "none", gap: "6px" }}
                          >
                            <span>📄</span>
                            <b>DOWNLOAD PDF QUOTE</b>
                          </a>
                        )}
                        <button
                          className={styles.secondaryAction}
                          type="button"
                          onClick={() => submitRequest("CONSULTATION")}
                          disabled={busy}
                        >
                          REQUEST SITE VISIT
                        </button>
                        <a
                          href={whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.secondaryAction}
                          style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", textDecoration: "none", gap: "6px" }}
                        >
                          <span>💬</span>
                          <span>CONTACT VIA WHATSAPP</span>
                        </a>
                      </div>

                      {showSiteVisitForm && (
                        <div style={{ marginTop: "16px", padding: "16px", background: "rgba(255,255,255,0.05)", borderRadius: "8px", textAlign: "left" }}>
                          <h4 style={{ margin: "0 0 10px 0" }}>Property address for site visit</h4>
                          <label style={{ display: "block", marginBottom: "8px" }}><span style={{ fontSize: "0.85rem", display: "block", marginBottom: "4px" }}>Phone *</span><input type="tel" value={state.customerInfo.phone} onChange={(e) => updateCustomerInfo("phone", e.target.value)} aria-invalid={Boolean(errors.phone)} />{errors.phone && <small style={{ color: "#ff4d4f", display: "block" }}>{errors.phone}</small>}</label>
                          <label style={{ display: "block", marginBottom: "8px" }}>
                            <span style={{ fontSize: "0.85rem", display: "block", marginBottom: "4px" }}>Street / Property Address *</span>
                            <input
                              value={state.customerInfo.address}
                              placeholder="Bahnhofstrasse 12"
                              onChange={(e) => updateCustomerInfo("address", e.target.value)}
                              aria-invalid={Boolean(errors.address)}
                            />
                            {errors.address && <small style={{ color: "#ff4d4f", display: "block" }}>{errors.address}</small>}
                          </label>
                          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "8px" }}>
                            <label>
                              <span style={{ fontSize: "0.85rem", display: "block", marginBottom: "4px" }}>Postal Code</span>
                              <input value={state.customerInfo.postalCode || state.postalCode} readOnly style={{ opacity: 0.8 }} />
                            </label>
                            <label>
                              <span style={{ fontSize: "0.85rem", display: "block", marginBottom: "4px" }}>City</span>
                              <input value={state.customerInfo.city || state.locationCity} readOnly style={{ opacity: 0.8 }} />
                            </label>
                          </div>
                          <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "12px", alignItems: "center", marginBottom: "12px" }}>
                            <label>
                              <span style={{ fontSize: "0.85rem", display: "block", marginBottom: "4px" }}>Company (optional)</span>
                              <input
                                value={state.customerInfo.company}
                                placeholder="Company AG"
                                onChange={(e) => updateCustomerInfo("company", e.target.value)}
                              />
                            </label>
                            <label style={{ display: "flex", alignItems: "center", gap: "6px", cursor: "pointer", marginTop: "18px" }}>
                              <input
                                type="checkbox"
                                checked={state.customerInfo.propertyManagement}
                                onChange={(e) => updateCustomerInfo("propertyManagement", e.target.checked)}
                              />
                              <span style={{ fontSize: "0.85rem" }}>Property Management</span>
                            </label>
                          </div>
                          <button
                            className={styles.primaryAction}
                            type="button"
                            onClick={() => submitRequest("CONSULTATION")}
                            disabled={busy}
                          >
                            {busy ? "SUBMITTING…" : "CONFIRM SITE VISIT REQUEST →"}
                          </button>
                        </div>
                      )}

                      <div className={styles.uploadPanel} style={{ marginTop: "24px" }}>
                        <h3>Upload photos of your project (optional)</h3>
                        <div className={styles.photoGrid}>
                          {photoCategories.map((category) => (
                            <label key={category} className={styles.photoDrop}>
                              <span>{category}</span>
                              <small>Choose photos or a PDF document</small>
                              <input
                                type="file"
                                accept="image/*,.pdf,application/pdf"
                                multiple
                                onChange={(event) => {
                                  uploadPhotos(event.target.files, category);
                                  event.target.value = "";
                                }}
                              />
                            </label>
                          ))}
                        </div>
                        {photos.length > 0 && (
                          <div className={styles.uploadedPhotosList}>
                            <p className={styles.notice}>{photos.length} photo{photos.length === 1 ? "" : "s"} attached to this project.</p>
                            <div className={styles.uploadedPhotosTags}>
                              {photos.map((p, idx) => (
                                <span key={p.id || idx} className={styles.photoTag}>
                                  📷 {p.category}: {p.fileName}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}


                  {/* DETAILED MODE — STEP 1: Components */}
                  {!isSimple && step === 1 && (
                    <div className={styles.stepPanel}>
                      <span className={styles.stepKicker}>02 Components</span>
                      <h2>Which components should be worked on?</h2>
                      <p>Select all that apply.</p>
                      <div className={styles.cardGrid}>
                        {components.map((option) => renderSelectionCard(option, state.components.includes(option.id), () => {
                          toggleComponent(option.id);
                        }))}
                      </div>
                    </div>
                  )}

                  {/* DETAILED MODE — STEP 2: Work & Services */}
                  {!isSimple && step === 2 && (
                    <div className={styles.stepPanel}>
                      <span className={styles.stepKicker}>03 Work & Services</span>
                      <h2>What work should we do?</h2>
                      <p>Select multiple services. The catalogue is structured so it can grow with AMIGOS.</p>
                      <div className={styles.serviceGrid}>
                        {visibleServices.map((option) => renderSelectionCard(option, state.services.includes(option.id), () => {
                          setState((current) => ({ ...current, services: toggle(current.services, option.id) }));
                        }))}
                      </div>
                    </div>
                  )}

                  {/* DETAILED MODE — STEP 3: Quantities */}
                  {!isSimple && step === 3 && (
                    <div className={styles.stepPanel}>
                      <span className={styles.stepKicker}>04 Quantities</span>
                      <h2>Enter the quantities</h2>
                      <p>Please enter the areas, lengths and quantities.</p>
                      <DetailedMeasurementFields state={state} setState={setState} />
                      <div className={styles.quantityGrid}>
                        {visibleQuantities.map((item) => (
                          <label key={item.id} className={styles.quantityField}>
                            <span>{item.label}</span>
                            <div>
                              <input
                                type="number"
                                min="0"
                                inputMode="decimal"
                                value={state.quantities[item.quantityKey] || ""}
                                placeholder={item.unit === "m²" ? "120" : "5"}
                                onChange={(event) => setState((current) => ({
                                  ...current,
                                  quantities: { ...current.quantities, [item.quantityKey]: event.target.value }
                                }))}
                              />
                              <b>{item.unit}</b>
                            </div>
                          </label>
                        ))}
                      </div>
                      <ComponentDetailFields components={state.components} details={state.componentDetails} onChange={updateComponentDetail} />
                      <label className={styles.notesField}>
                        <span>Project information</span>
                        <textarea value={state.projectNotes} placeholder="Tell us anything important about access, condition, damage or timing." onChange={(event) => setState((current) => ({ ...current, projectNotes: event.target.value }))} />
                      </label>
                    </div>
                  )}

                  {/* SUMMARY PANEL (detailed mode, after the Location step triggers calculation) */}
                  {!isSimple && step >= 5 && (
                    <div className={cx(styles.stepPanel, styles.embeddedComplete)}>
                      <span className={styles.stepKicker}>Selections Complete</span>
                      <h2>Your project details are ready.</h2>
                      <p>Use the panel to verify your e-mail and receive your estimated project price.</p>
                      <div className={styles.summaryPanel}>
                        <h3>Your selected project</h3>
                        <dl>
                          <div>
                            <dt>Property</dt>
                            <dd>
                              <span>{propertyTypes.find((option) => option.id === state.propertyType)?.title || "Not selected"}{state.roomType ? ` · ${state.roomType}` : ""}</span>
                              {step === 5 && <button type="button" className={styles.editStepLink} onClick={() => setStep(0)}>Edit</button>}
                            </dd>
                          </div>
                          <div>
                            <dt>Components</dt>
                            <dd>
                              <span>{selectedComponentTitles.length ? selectedComponentTitles.join(", ") : "Not selected"}</span>
                              {step === 5 && <button type="button" className={styles.editStepLink} onClick={() => setStep(1)}>Edit</button>}
                            </dd>
                          </div>
                          <div>
                            <dt>Services</dt>
                            <dd>
                              <span>{selectedServiceTitles.length ? selectedServiceTitles.join(", ") : "Not selected"}</span>
                              {step === 5 && <button type="button" className={styles.editStepLink} onClick={() => setStep(2)}>Edit</button>}
                            </dd>
                          </div>
                          <div>
                            <dt>Quantities</dt>
                            <dd>
                              <span>{visibleQuantities.map((item) => `${item.label}: ${state.quantities[item.quantityKey] || 0} ${item.unit}`).join(" · ")}</span>
                              {step === 5 && <button type="button" className={styles.editStepLink} onClick={() => setStep(3)}>Edit</button>}
                            </dd>
                          </div>
                          <div>
                            <dt>Location</dt>
                            <dd>
                              <span>{state.postalCode ? `${state.postalCode} ${state.locationCity}`.trim() : "Not specified"}</span>
                              {step === 5 && <button type="button" className={styles.editStepLink} onClick={() => setStep(4)}>Edit</button>}
                            </dd>
                          </div>
                        </dl>
                      </div>
                    </div>
                  )}

                  {/* NAV ACTIONS (Back & Continue) */}
                  {step < inputStepCount && (
                    <div className={styles.navActions}>
                      <div className={styles.navActionsLeft}>
                        {embedded ? (
                          <button
                            type="button"
                            className={styles.secondaryAction}
                            onClick={() => setState((curr) => ({ ...curr, calculatorType: "SELECT" }))}
                          >
                            ← Back to Calculator Selection
                          </button>
                        ) : (
                          <a className={styles.backToQuickNavBtn} href="/#quote">
                            ← Back to Calculator Selection
                          </a>
                        )}
                        {step > 0 && (
                          <button type="button" className={styles.secondaryAction} onClick={() => setStep((current) => current - 1)}>
                            ← BACK
                          </button>
                        )}
                      </div>
                      <button type="button" className={styles.primaryAction} disabled={!canContinue() || busy} onClick={next}>
                        {isSimple ? "CONTINUE →" : (step === 4 ? "CALCULATE" : "CONTINUE →")}
                      </button>
                    </div>
                  )}

                  {!isSimple && step >= 5 && step < 7 && (
                    <div className={styles.navActions}>
                      <button type="button" className={styles.secondaryAction} onClick={() => setStep(4)}>
                        ← EDIT SELECTIONS
                      </button>
                    </div>
                  )}
                </div>

                {/* DETAILED MODE: CONTACT / VERIFY / PRICE PANEL (Step >= 5) */}
                {!isSimple && step >= 5 && (
                  <aside className={cx(styles.consultationShell, styles.embeddedRight, styles.detailSidePanel)}>
                    {step === 5 && (
                      <div className={styles.resultLocked}>
                        <span className={styles.stepKicker}>06 Summary</span>
                        <h2>Your estimated quote is ready.</h2>
                        <p>Enter your contact details to receive your personal AMIGOS estimated quotation.</p>
                        <LockedPricePlaceholder />

                        <div className={styles.customerGrid} style={{ marginTop: "14px" }}>
                          <label>
                            <span>First Name *</span>
                            <input
                              value={state.customerInfo.firstName}
                              onChange={(e) => updateCustomerInfo("firstName", e.target.value)}
                              aria-invalid={Boolean(errors.firstName)}
                            />
                            {errors.firstName && <small>{errors.firstName}</small>}
                          </label>
                          <label>
                            <span>Last Name *</span>
                            <input
                              value={state.customerInfo.lastName}
                              onChange={(e) => updateCustomerInfo("lastName", e.target.value)}
                              aria-invalid={Boolean(errors.lastName)}
                            />
                            {errors.lastName && <small>{errors.lastName}</small>}
                          </label>
                          <label>
                            <span>Phone (optional)</span>
                            <input
                              value={state.customerInfo.phone}
                              onChange={(e) => updateCustomerInfo("phone", e.target.value)}
                            />
                          </label>
                          <label style={{ gridColumn: "1 / -1" }}>
                            <span>E-Mail Address *</span>
                            <input
                              type="email"
                              value={state.email}
                              placeholder="you@example.com"
                              onChange={(e) => setState((curr) => ({ ...curr, email: e.target.value }))}
                              aria-invalid={Boolean(errors.email)}
                            />
                            {errors.email && <small>{errors.email}</small>}
                          </label>
                        </div>
                        {errors.general && <p className={styles.error} style={{ marginTop: "10px" }}>{errors.general}</p>}
                        {notice && <p className={styles.notice} style={{ marginTop: "10px" }}>{notice}</p>}
                        <button className={styles.primaryAction} style={{ marginTop: "14px" }} type="button" onClick={submitContactAndSendCode} disabled={busy}>
                          {busy ? "SENDING…" : "GET MY ESTIMATED QUOTE →"}
                        </button>
                      </div>
                    )}

                    {step === 6 && (
                      <div className={styles.verifyPanel}>
                        <span className={styles.stepKicker}>07 Verify E-Mail</span>
                        <h2>Check your e-mail</h2>
                        <p>Enter the four-digit code we sent to <strong>{state.email}</strong>.</p>

                        {notice && <p className={styles.notice}>{notice}</p>}
                        {errors.general && <p className={styles.error}>{errors.general}</p>}

                        <div className={styles.codeInputs}>
                          {state.code.map((digit, index) => (
                            <input
                              key={index}
                              ref={(node) => { codeRefs.current[index] = node; }}
                              type="text"
                              inputMode="numeric"
                              maxLength={1}
                              value={digit}
                              onChange={(event) => {
                                const value = event.target.value.replace(/\D/g, "").slice(0, 1);
                                setState((current) => {
                                  const code = [...current.code];
                                  code[index] = value;
                                  return { ...current, code };
                                });
                                if (value && codeRefs.current[index + 1]) codeRefs.current[index + 1].focus();
                              }}
                            />
                          ))}
                        </div>
                        <button className={styles.primaryAction} type="button" onClick={verifyCode} disabled={busy}>
                          {busy ? "VERIFYING…" : "VERIFY E-MAIL →"}
                        </button>
                        <button className={styles.textButton} type="button" onClick={resendCode} disabled={busy}>
                          Didn't receive the code? Send again
                        </button>
                      </div>
                    )}

                    {step === 7 && (
                      <div className={styles.pricePanel}>
                        <div className={styles.successMark}>✓</div>
                        <span className={styles.stepKicker}>E-mail successfully verified</span>
                        <h2>Your personal estimated quotation</h2>

                        <div className={styles.summaryPanel} style={{ marginTop: "16px" }}>
                          <h3>Your selected project</h3>
                          <dl>
                            <div>
                              <dt>Property</dt>
                              <dd>{propertyTypes.find((option) => option.id === state.propertyType)?.title || "Not selected"}{state.roomType ? ` · ${state.roomType}` : ""}</dd>
                            </div>
                            <div>
                              <dt>Components</dt>
                              <dd>{selectedComponentTitles.length ? selectedComponentTitles.join(", ") : "Not selected"}</dd>
                            </div>
                            <div>
                              <dt>Services</dt>
                              <dd>{selectedServiceTitles.length ? selectedServiceTitles.join(", ") : "Not selected"}</dd>
                            </div>
                            <div>
                              <dt>Quantities</dt>
                              <dd>{visibleQuantities.map((item) => `${item.label}: ${state.quantities[item.quantityKey] || 0} ${item.unit}`).join(" · ")}</dd>
                            </div>
                            <div>
                              <dt>Location</dt>
                              <dd>{state.postalCode} {state.locationCity}</dd>
                            </div>
                            <div>
                              <dt>Travel costs</dt>
                              <dd>Included</dd>
                            </div>
                          </dl>
                        </div>

                        <div style={{ margin: "20px 0 8px", textAlign: "center" }}>
                          <strong className={styles.priceRange}>{priceRange}</strong>
                          <p style={{ margin: "6px 0 0", fontSize: "0.9rem", color: "var(--color-muted, #888)" }}>Estimated price incl. VAT</p>
                        </div>
                        <p>This estimate is non-binding and based on the information provided. The final price may vary after review and/or an on-site inspection.</p>

                        {notice && <p className={styles.notice} style={{ marginTop: "12px" }}>{notice}</p>}
                        {errors.general && <p className={styles.error} style={{ marginTop: "12px" }}>{errors.general}</p>}

                      <div className={styles.finalActions} style={{ marginTop: "20px" }}>
                        <button className={styles.primaryAction} type="button" onClick={() => submitRequest("OFFER")} disabled={busy}>
                          {busy ? "SUBMITTING…" : "REQUEST OFFER"}
                        </button>
                        {sessionId && (
                            <a
                              href={`/api/offer-calculator/pdf?sessionId=${sessionId}`}
                              download
                              className={styles.secondaryAction}
                              style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", textDecoration: "none", gap: "6px" }}
                            >
                              <span>📄</span>
                              <b>DOWNLOAD PDF QUOTE</b>
                            </a>
                          )}
                        <button
                          className={styles.secondaryAction}
                            type="button"
                            onClick={() => submitRequest("CONSULTATION")}
                            disabled={busy}
                          >
                            REQUEST SITE VISIT
                          </button>
                          <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.secondaryAction}
                            style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", textDecoration: "none", gap: "6px" }}
                          >
                            <span>💬</span>
                            <span>CONTACT VIA WHATSAPP</span>
                          </a>
                        </div>

                        {showSiteVisitForm && (
                          <div style={{ marginTop: "16px", padding: "16px", background: "rgba(255,255,255,0.05)", borderRadius: "8px", textAlign: "left" }}>
                          <h4 style={{ margin: "0 0 10px 0" }}>Property address for site visit</h4>
                          <label style={{ display: "block", marginBottom: "8px" }}><span style={{ fontSize: "0.85rem", display: "block", marginBottom: "4px" }}>Phone *</span><input type="tel" value={state.customerInfo.phone} onChange={(e) => updateCustomerInfo("phone", e.target.value)} aria-invalid={Boolean(errors.phone)} />{errors.phone && <small style={{ color: "#ff4d4f", display: "block" }}>{errors.phone}</small>}</label>
                            <label style={{ display: "block", marginBottom: "8px" }}>
                              <span style={{ fontSize: "0.85rem", display: "block", marginBottom: "4px" }}>Street / Property Address *</span>
                              <input
                                value={state.customerInfo.address}
                                placeholder="Bahnhofstrasse 12"
                                onChange={(e) => updateCustomerInfo("address", e.target.value)}
                                aria-invalid={Boolean(errors.address)}
                              />
                              {errors.address && <small style={{ color: "#ff4d4f", display: "block" }}>{errors.address}</small>}
                            </label>
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "8px" }}>
                              <label>
                                <span style={{ fontSize: "0.85rem", display: "block", marginBottom: "4px" }}>Postal Code</span>
                                <input value={state.customerInfo.postalCode || state.postalCode} readOnly style={{ opacity: 0.8 }} />
                              </label>
                              <label>
                                <span style={{ fontSize: "0.85rem", display: "block", marginBottom: "4px" }}>City</span>
                                <input value={state.customerInfo.city || state.locationCity} readOnly style={{ opacity: 0.8 }} />
                              </label>
                            </div>
                            <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "12px", alignItems: "center", marginBottom: "12px" }}>
                              <label>
                                <span style={{ fontSize: "0.85rem", display: "block", marginBottom: "4px" }}>Company (optional)</span>
                                <input
                                  value={state.customerInfo.company}
                                  placeholder="Company AG"
                                  onChange={(e) => updateCustomerInfo("company", e.target.value)}
                                />
                              </label>
                              <label style={{ display: "flex", alignItems: "center", gap: "6px", cursor: "pointer", marginTop: "18px" }}>
                                <input
                                  type="checkbox"
                                  checked={state.customerInfo.propertyManagement}
                                  onChange={(e) => updateCustomerInfo("propertyManagement", e.target.checked)}
                                />
                                <span style={{ fontSize: "0.85rem" }}>Property Management</span>
                              </label>
                            </div>
                            <button
                              className={styles.primaryAction}
                              type="button"
                              onClick={() => submitRequest("CONSULTATION")}
                              disabled={busy}
                            >
                              {busy ? "SUBMITTING…" : "CONFIRM SITE VISIT REQUEST →"}
                            </button>
                          </div>
                        )}

                        <div className={styles.uploadPanel} style={{ marginTop: "24px" }}>
                          <h3>Upload photos of your project (optional)</h3>
                          <div className={styles.photoGrid}>
                            {photoCategories.map((category) => (
                              <label key={category} className={styles.photoDrop}>
                                <span>{category}</span>
                                <small>Choose photos or a PDF document</small>
                                <input
                                  type="file"
                                  accept="image/*,.pdf,application/pdf"
                                  multiple
                                  onChange={(event) => {
                                    uploadPhotos(event.target.files, category);
                                    event.target.value = "";
                                  }}
                                />
                              </label>
                            ))}
                          </div>
                          {photos.length > 0 && (
                            <div className={styles.uploadedPhotosList}>
                              <p className={styles.notice}>{photos.length} photo{photos.length === 1 ? "" : "s"} attached to this project.</p>
                              <div className={styles.uploadedPhotosTags}>
                                {photos.map((p, idx) => (
                                  <span key={p.id || idx} className={styles.photoTag}>
                                    📷 {p.category}: {p.fileName}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </aside>
                )}
              </section>
        </div>
      </main>
    );
  }

  // --- NON-EMBEDDED STANDALONE PAGE VERSION ---
  if (isSelect) {
    return (
      <main className={cx(styles.page, styles.selectionPage)}>
        <div className={styles.selectionHeroContainer}>
          {/* 1. Header */}
          <div className={styles.selectionHeader}>
            <span className={styles.selectionKicker}>AMIGOS MALER <span style={{ textTransform: "none" }}>GmbH</span> · KOMPETENZ VERBINDET</span>
            <h1 className={styles.selectionTitle}>Offer calculator &amp; request</h1>
            <h2 className={styles.selectionSubTitle}>Choose the right calculation for your project.</h2>
            <p className={styles.selectionLead}>
              Select the calculation model that best matches your project requirements.
            </p>
          </div>

          {/* 2. Two Calculator Cards */}
          <div className={styles.selectionTabsGrid}>
            {/* CARD 1: For Homeowners */}
            <div
              role="button"
              tabIndex={0}
              className={cx(styles.selectionTabCard, styles.tabFastEstimate)}
              onClick={() => {
                setState((curr) => ({ ...curr, calculatorType: "SIMPLE" }));
                setStep(0);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setState((curr) => ({ ...curr, calculatorType: "SIMPLE" }));
                  setStep(0);
                }
              }}
            >
              <div className={styles.tabBadgeRow}>
                <span className={styles.tabTagFast}>FOR HOMEOWNERS</span>
              </div>

              <h3 className={styles.tabHeadline}>
                Get an estimate in a few simple steps
              </h3>

              <p className={styles.tabDescription}>
                Fast, non-binding quote tailored for private homes and flats with no wall measurements needed.
              </p>

              <ul className={styles.tabFeatureList}>
                <li className={styles.tabFeatureItem}>
                  <span className={styles.tabFeatureIcon}>✓</span>
                  <span>No wall or ceiling m² measuring needed</span>
                </li>
                <li className={styles.tabFeatureItem}>
                  <span className={styles.tabFeatureIcon}>✓</span>
                  <span>Room count &amp; condition based estimate</span>
                </li>
                <li className={styles.tabFeatureItem}>
                  <span className={styles.tabFeatureIcon}>✓</span>
                  <span>Instant price range delivered via e-mail</span>
                </li>
              </ul>

              <div className={styles.tabButtonWrapper}>
                <button type="button" className={styles.tabActionBtn}>
                  <span>Start Quick Estimate</span>
                  <span className={styles.tabActionArrow}>→</span>
                </button>
              </div>
            </div>

            {/* CARD 2: For Professionals */}
            <div
              role="button"
              tabIndex={0}
              className={cx(styles.selectionTabCard, styles.tabDetailedSpecs)}
              onClick={() => {
                setState((curr) => ({ ...curr, calculatorType: "DETAILED" }));
                setStep(0);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setState((curr) => ({ ...curr, calculatorType: "DETAILED" }));
                  setStep(0);
                }
              }}
            >
              <div className={styles.tabBadgeRow}>
                <span className={styles.tabTagDetailed}>FOR PROFESSIONALS</span>
              </div>

              <h3 className={styles.tabHeadline}>
                Detailed quote for precise planning
              </h3>

              <p className={styles.tabDescription}>
                Itemized cost estimation designed for property managers, architects, and precision planners.
              </p>

              <ul className={styles.tabFeatureList}>
                <li className={styles.tabFeatureItem}>
                  <span className={styles.tabFeatureIcon}>✓</span>
                  <span>Exact m² calculations for all surfaces</span>
                </li>
                <li className={styles.tabFeatureItem}>
                  <span className={styles.tabFeatureIcon}>✓</span>
                  <span>Doors, windows, radiators &amp; woodwork</span>
                </li>
                <li className={styles.tabFeatureItem}>
                  <span className={styles.tabFeatureIcon}>✓</span>
                  <span>Downloadable official PDF quote</span>
                </li>
              </ul>

              <div className={styles.tabButtonWrapper}>
                <button type="button" className={cx(styles.tabActionBtn, styles.tabActionBtnDetailed)}>
                  <span>Create Detailed Quote</span>
                  <span className={styles.tabActionArrow}>→</span>
                </button>
              </div>
            </div>
          </div>

          {/* 3. Reassurance Strip Below Cards */}
          <div className={styles.selectionTrustRow}>
            <div className={styles.selectionTrustItem}>
              <span className={styles.selectionTrustIcon}>
                <ComponentIcon iconKey="shield" />
              </span>
              <div>
                <strong>100% Free &amp; Non-Binding</strong>
                <p>Transparent estimation with zero purchase obligation.</p>
              </div>
            </div>
            <div className={styles.selectionTrustItem}>
              <span className={styles.selectionTrustIcon}>
                <ComponentIcon iconKey="lock" />
              </span>
              <div>
                <strong>Prices Are Protected</strong>
                <p>Secure calculation provided after quick e-mail verification.</p>
              </div>
            </div>
            <div className={styles.selectionTrustItem}>
              <span className={styles.selectionTrustIcon}>
                <ComponentIcon iconKey="swiss_quality" />
              </span>
              <div>
                <strong>Swiss Quality Standards</strong>
                <p>Certified craftsmanship across Olten and surrounding cantons.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <div className={styles.heroTopRow} aria-hidden="true" />
          <h1>Create a detailed quote.</h1>
          <p>Select your components and services, enter only the measurements they require, and see your result after e-mail verification.</p>
        </div>
        <div className={styles.heroAside}>
          <div className={styles.calculatorControls} aria-label="Calculator controls">
            <button
              className={cx(styles.soundToggle, isSoundOn && styles.soundToggleActive)}
              type="button"
              aria-label={isSoundOn ? "Turn sound off" : "Turn sound on"}
              aria-pressed={isSoundOn}
              onClick={() => setIsSoundOn((current) => !current)}
            >
              <span className={styles.soundToggleIcon} aria-hidden="true">
                {isSoundOn ? (
                  <svg className={styles.soundIcon} viewBox="0 0 24 24" fill="none">
                    <path d="M4 10v4h4l5 4V6L8 10H4Z" fill="currentColor" />
                    <path d="M16 9.5c.9 1.4.9 3.6 0 5M18.4 7.2c1.9 2.8 1.9 6.8 0 9.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                ) : (
                  <svg className={styles.soundIcon} viewBox="0 0 24 24" fill="none">
                    <path d="M4 10v4h4l5 4V6L8 10H4Z" fill="currentColor" />
                    <path d="m17 10 4 4m0-4-4 4" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
                  </svg>
                )}
              </span>
            </button>
            <button
              className={styles.themeToggle}
              type="button"
              aria-label={`Switch to ${isDark ? "day" : "night"} mode`}
              aria-pressed={isDark}
              onClick={toggleTheme}
            >
              <span className={styles.themeToggleIcon} aria-hidden="true">
                {isDark ? (
                  <svg className={styles.themeIcon} viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="4.2" fill="currentColor" />
                    <path
                      d="M12 2.8v2.4M12 18.8v2.4M21.2 12h-2.4M5.2 12H2.8M18.5 5.5l-1.7 1.7M7.2 16.8l-1.7 1.7M18.5 18.5l-1.7-1.7M7.2 7.2 5.5 5.5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                ) : (
                  <svg className={styles.themeIcon} viewBox="0 0 24 24" fill="none">
                    <path
                      d="M20.2 14.2A7.6 7.6 0 0 1 9.8 3.8 8.5 8.5 0 1 0 20.2 14.2Z"
                      fill="currentColor"
                    />
                  </svg>
                )}
              </span>
            </button>
          </div>
          <div className={styles.asideIntro}>
            <span className={styles.brand}>FOR PROFESSIONALS &amp; PRECISE PLANNING</span>
            <strong>Kompetenz verbindet</strong>
          </div>
          <aside className={styles.securityCard}>
            <h2>Prices are protected</h2>
            <p>The exact price is only visible after e-mail verification.</p>
          </aside>
        </div>
      </section>

      <nav className={cx(styles.progressNav, isSimple && styles.progressNavSimple)} aria-label="Calculator progress">
        <span className={styles.progressFill} style={{ width: `${progress}%` }} />
        {currentStepMeta.map((item, index) => {
          let isCurrent, isDone;
          if (isSimple) {
            isCurrent = step === index || (index === 4 && (step === 10 || step === 11));
            isDone = step > index && !(index === 4 && step >= 10);
          } else {
            isCurrent = index === step;
            isDone = index < step;
          }

          return (
            <button
              key={item.key}
              className={cx(styles.progressStep, isCurrent && styles.currentStep, isDone && styles.doneStep)}
              type="button"
              onClick={() => {
                if (isSimple) {
                  if (step <= inputStepCount && index < step) setStep(index);
                } else {
                  if (index < step) setStep(index);
                }
              }}
            >
              <span>{item.number}</span>
              <i>{item.icon?.startsWith?.("step_") ? <ComponentIcon iconKey={item.icon} /> : item.icon}</i>
              <b>{item.title}</b>
            </button>
          );
        })}
      </nav>

      <section className={styles.consultationShell}>
        {errors.general && <p className={styles.error}>{errors.general}</p>}
        {notice && <p className={styles.notice}>{notice}</p>}

        {/* STEP 0: Project Type */}
        {step === 0 && (
          <div className={styles.stepPanel}>
            <span className={styles.stepKicker}>01 Project Type</span>
            <h2>What type of property is it?</h2>
            <p>Please select the type of property.</p>
            <div className={styles.propertyGrid}>
              {(isSimple ? quickPropertyTypes : propertyTypes).map((option) =>
                renderPropertyCard(option, state.propertyType === option.id, () => {
                  setState((current) => ({
                    ...current,
                    propertyType: option.id,
                    roomCount: option.roomCount || current.roomCount,
                    components: option.id === "facade" ? ["facade"] : current.components.filter((item) => item !== "facade"),
                    services: option.id === "facade" ? current.services.filter((service) => serviceOptions.find((item) => item.id === service)?.components.includes("facade")) : current.services,
                    quantities: option.id === "facade" ? current.quantities : { ...current.quantities, facadeArea: "" }
                  }));
                })
              )}
            </div>
            {!isSimple && state.propertyType === "room" && (
              <div className={styles.roomChips}>
                {roomTypes.map((room) => (
                  <button key={room} type="button" className={state.roomType === room ? styles.activeChip : ""} onClick={() => setState((current) => ({ ...current, roomType: room }))}>{room}</button>
                ))}
              </div>
            )}
          </div>
        )}

        {/* SIMPLE MODE STEP 1: Scope & Work */}
        {isSimple && step === 1 && (
          <div className={styles.stepPanel}>
            <span className={styles.stepKicker}>02 Scope & Work</span>
            <h2>What would you like painted?</h2>
            <p>Select the work scope that best fits your project. No m² calculations needed.</p>

            <div className={styles.scopeCardGrid}>
              {workScopeOptions.map((option) =>
                renderScopeCard(option, state.workScope === option.id, () =>
                  setState((curr) => ({ ...curr, workScope: option.id }))
                )
              )}
            </div>

            <div style={{ margin: "18px 0" }}>
              <div style={{ fontSize: "13px", fontWeight: "700", marginBottom: "8px", color: "var(--ink)" }}>
                Number of Rooms: <b style={{ color: "var(--yellow)" }}>{state.roomCount} {state.roomCount === 1 ? "Room" : "Rooms"}</b>
              </div>
              <div className={styles.roomChips}>
                {[1, 2, 3, 4, 5, 6, 8, 10].map((num) => (
                  <button
                    key={num}
                    type="button"
                    className={state.roomCount === num ? styles.activeChip : ""}
                    onClick={() => setState((curr) => ({ ...curr, roomCount: num }))}
                  >
                    {num === 10 ? "10+" : num}
                  </button>
                ))}
              </div>
            </div>

            <div style={{ margin: "18px 0" }}>
              <div style={{ fontSize: "13px", fontWeight: "700", marginBottom: "8px", color: "var(--ink)" }}>
                Average Room Size
              </div>
              <div className={styles.roomChips}>
                {[
                  { id: "small", title: "Compact (~10–14 m²)" },
                  { id: "medium", title: "Standard (~15–22 m²)" },
                  { id: "large", title: "Spacious (~25–35+ m²)" }
                ].map((preset) => (
                  <button
                    key={preset.id}
                    type="button"
                    className={state.roomSize === preset.id ? styles.activeChip : ""}
                    onClick={() => setState((curr) => ({ ...curr, roomSize: preset.id }))}
                  >
                    {preset.title}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* SIMPLE MODE STEP 2: Condition */}
        {isSimple && step === 2 && (
          <div className={styles.stepPanel}>
            <span className={styles.stepKicker}>03 Condition</span>
            <h2>What is the current condition?</h2>
            <p>This helps us give you the most accurate estimate possible.</p>

            <div className={styles.conditionCardGrid}>
              {conditionOptions.map((option) =>
                renderConditionCard(option, state.condition === option.id, () =>
                  setState((curr) => ({ ...curr, condition: option.id }))
                )
              )}
            </div>
          </div>
        )}

        {/* SIMPLE MODE STEP 3: Location */}
        {isSimple && step === 3 && (
          <div className={styles.stepPanel}>
            <span className={styles.stepKicker}>04 Location</span>
            <h2>Where is the property located?</h2>
            <p>Your location helps us calculate any travel costs accurately.</p>
            <LocationFields postalCode={state.postalCode} city={state.locationCity} onChange={updateField} />
          </div>
        )}

        {/* DETAILED MODE STEP 5: Location */}
        {!isSimple && step === 4 && (
          <div className={styles.stepPanel}>
            <span className={styles.stepKicker}>05 Location</span>
            <h2>Where is the property located?</h2>
            <p>Your location helps us calculate any travel costs accurately.</p>
            <LocationFields postalCode={state.postalCode} city={state.locationCity} onChange={updateField} />
          </div>
        )}

        {/* SIMPLE MODE STEP 4: Contact + Send Code */}
        {isSimple && step === 4 && (
          <div className={styles.stepPanel}>
            <span className={styles.stepKicker}>05 Your Quote</span>
            <h2>Your estimated quote is ready.</h2>
            <p>Enter your contact details to receive your personal AMIGOS estimated quotation.</p>
            <LockedPricePlaceholder />

            <div className={styles.customerGrid}>
              {[
                ["firstName", "First Name *"],
                ["lastName", "Last Name *"],
                ["phone", "Phone (optional)"]
              ].map(([key, label]) => (
                <label key={key}>
                  <span>{label}</span>
                  <input
                    value={state.customerInfo[key]}
                    onChange={(event) => updateCustomerInfo(key, event.target.value)}
                    aria-invalid={Boolean(errors[key])}
                  />
                  {errors[key] && <small>{errors[key]}</small>}
                </label>
              ))}
              <label style={{ gridColumn: "1 / -1" }}>
                <span>E-Mail Address *</span>
                <input
                  type="email"
                  value={state.email}
                  placeholder="you@example.com"
                  onChange={(event) => setState((current) => ({ ...current, email: event.target.value }))}
                />
              </label>
            </div>

            {errors.general && <p className={styles.error}>{errors.general}</p>}
            {notice && <p className={styles.notice}>{notice}</p>}

            <div className={styles.navActions}>
              <button type="button" className={styles.secondaryAction} onClick={() => setStep(3)}>
                ← BACK
              </button>
              <button
                type="button"
                className={styles.primaryAction}
                disabled={busy}
                onClick={submitContactAndSendCode}
              >
                {busy ? "SENDING…" : "GET MY ESTIMATED QUOTE →"}
              </button>
            </div>
          </div>
        )}

        {/* SIMPLE MODE STEP 10: Code Verification */}
        {isSimple && step === 10 && (
          <div className={styles.verifyPanel}>
            <span className={styles.stepKicker}>05 Verify E-Mail</span>
            <h2>Check your e-mail</h2>
            <p>Enter the four-digit code we sent to <strong>{state.email}</strong>.</p>

            {notice && <p className={styles.notice}>{notice}</p>}
            {errors.general && <p className={styles.error}>{errors.general}</p>}

            <div className={styles.codeInputs}>
              {state.code.map((digit, index) => (
                <input
                  key={index}
                  ref={(node) => { codeRefs.current[index] = node; }}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(event) => {
                    const value = event.target.value.replace(/\D/g, "").slice(0, 1);
                    setState((current) => {
                      const code = [...current.code];
                      code[index] = value;
                      return { ...current, code };
                    });
                    if (value && codeRefs.current[index + 1]) codeRefs.current[index + 1].focus();
                  }}
                />
              ))}
            </div>
            <button className={styles.primaryAction} type="button" onClick={verifyCode} disabled={busy}>
              {busy ? "VERIFYING…" : "VERIFY E-MAIL →"}
            </button>
            <button className={styles.textButton} type="button" onClick={resendCode} disabled={busy}>
              Didn't receive the code? Send again
            </button>
          </div>
        )}

        {/* SIMPLE MODE STEP 11: Price Result */}
        {isSimple && step === 11 && (
          <div className={styles.pricePanel}>
            <div className={styles.successMark}>✓</div>
            <span className={styles.stepKicker}>E-mail successfully verified</span>
            <h2>Your personal estimated quotation</h2>

            <div className={styles.summaryPanel}>
              <h3>Your project summary</h3>
              <dl>
                <div><dt>Property</dt><dd>{(isSimple ? quickPropertyTypes : propertyTypes).find((o) => o.id === state.propertyType)?.title || "Not selected"}</dd></div>
                <div><dt>Scope</dt><dd>{workScopeOptions.find((o) => o.id === state.workScope)?.title || state.workScope}</dd></div>
                <div><dt>Rooms</dt><dd>{state.roomCount} room(s) · {state.roomSize} size</dd></div>
                <div><dt>Condition</dt><dd>{conditionOptions.find((o) => o.id === state.condition)?.title || state.condition}</dd></div>
                <div><dt>Location</dt><dd>{state.postalCode} {state.locationCity}</dd></div>
                <div><dt>Travel costs</dt><dd>Included</dd></div>
              </dl>
            </div>

            <div style={{ margin: "20px 0 8px", textAlign: "center" }}>
              <strong className={styles.priceRange}>{priceRange}</strong>
              <p style={{ margin: "6px 0 0", fontSize: "0.9rem", color: "var(--color-muted, #888)" }}>Estimated price incl. VAT</p>
            </div>
            <p>This estimate is non-binding and based on your project details. The final price may vary after review or an on-site inspection.</p>

            {notice && <p className={styles.notice} style={{ marginTop: "12px" }}>{notice}</p>}
            {errors.general && <p className={styles.error} style={{ marginTop: "12px" }}>{errors.general}</p>}

            <div className={styles.finalActions}>
              <button className={styles.primaryAction} type="button" onClick={() => submitRequest("OFFER")} disabled={busy}>
                {busy ? "SUBMITTING…" : "REQUEST OFFER"}
              </button>
              {sessionId && (
                <a
                  href={`/api/offer-calculator/pdf?sessionId=${sessionId}`}
                  download
                  className={styles.secondaryAction}
                  style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", textDecoration: "none", gap: "6px" }}
                >
                  <span>📄</span>
                  <b>DOWNLOAD PDF QUOTE</b>
                </a>
              )}
              <button
                className={styles.secondaryAction}
                type="button"
                onClick={() => submitRequest("CONSULTATION")}
                disabled={busy}
              >
                REQUEST SITE VISIT
              </button>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.secondaryAction}
                style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", textDecoration: "none", gap: "6px" }}
              >
                <span>💬</span>
                <span>CONTACT VIA WHATSAPP</span>
              </a>
            </div>

            {showSiteVisitForm && (
              <div style={{ marginTop: "16px", padding: "16px", background: "rgba(255,255,255,0.05)", borderRadius: "8px", textAlign: "left" }}>
                <h4 style={{ margin: "0 0 10px 0" }}>Property address for site visit</h4>
                <label style={{ display: "block", marginBottom: "8px" }}><span style={{ fontSize: "0.85rem", display: "block", marginBottom: "4px" }}>Phone *</span><input type="tel" value={state.customerInfo.phone} onChange={(e) => updateCustomerInfo("phone", e.target.value)} aria-invalid={Boolean(errors.phone)} />{errors.phone && <small style={{ color: "#ff4d4f", display: "block" }}>{errors.phone}</small>}</label>
                <label style={{ display: "block", marginBottom: "8px" }}>
                  <span style={{ fontSize: "0.85rem", display: "block", marginBottom: "4px" }}>Street / Property Address *</span>
                  <input
                    value={state.customerInfo.address}
                    placeholder="Bahnhofstrasse 12"
                    onChange={(e) => updateCustomerInfo("address", e.target.value)}
                    aria-invalid={Boolean(errors.address)}
                  />
                  {errors.address && <small style={{ color: "#ff4d4f", display: "block" }}>{errors.address}</small>}
                </label>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "8px" }}>
                  <label>
                    <span style={{ fontSize: "0.85rem", display: "block", marginBottom: "4px" }}>Postal Code</span>
                    <input value={state.customerInfo.postalCode || state.postalCode} readOnly style={{ opacity: 0.8 }} />
                  </label>
                  <label>
                    <span style={{ fontSize: "0.85rem", display: "block", marginBottom: "4px" }}>City</span>
                    <input value={state.customerInfo.city || state.locationCity} readOnly style={{ opacity: 0.8 }} />
                  </label>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "12px", alignItems: "center", marginBottom: "12px" }}>
                  <label>
                    <span style={{ fontSize: "0.85rem", display: "block", marginBottom: "4px" }}>Company (optional)</span>
                    <input
                      value={state.customerInfo.company}
                      placeholder="Company AG"
                      onChange={(e) => updateCustomerInfo("company", e.target.value)}
                    />
                  </label>
                  <label style={{ display: "flex", alignItems: "center", gap: "6px", cursor: "pointer", marginTop: "18px" }}>
                    <input
                      type="checkbox"
                      checked={state.customerInfo.propertyManagement}
                      onChange={(e) => updateCustomerInfo("propertyManagement", e.target.checked)}
                    />
                    <span style={{ fontSize: "0.85rem" }}>Property Management</span>
                  </label>
                </div>
                <button
                  className={styles.primaryAction}
                  type="button"
                  onClick={() => submitRequest("CONSULTATION")}
                  disabled={busy}
                >
                  {busy ? "SUBMITTING…" : "CONFIRM SITE VISIT REQUEST →"}
                </button>
              </div>
            )}

            <div className={styles.uploadPanel} style={{ marginTop: "24px" }}>
              <h3>Upload photos of your project (optional)</h3>
              <div className={styles.photoGrid}>
                {photoCategories.map((category) => (
                  <label key={category} className={styles.photoDrop}>
                    <span>{category}</span>
                    <small>Choose photos or a PDF document</small>
                    <input
                      type="file"
                      accept="image/*,.pdf,application/pdf"
                      multiple
                      onChange={(event) => {
                        uploadPhotos(event.target.files, category);
                        event.target.value = "";
                      }}
                    />
                  </label>
                ))}
              </div>
              {photos.length > 0 && (
                <div className={styles.uploadedPhotosList}>
                  <p className={styles.notice}>{photos.length} photo{photos.length === 1 ? "" : "s"} attached to this project.</p>
                  <div className={styles.uploadedPhotosTags}>
                    {photos.map((p, idx) => (
                      <span key={p.id || idx} className={styles.photoTag}>
                        📷 {p.category}: {p.fileName}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* DETAILED MODE STEP 1 */}
        {!isSimple && step === 1 && (
          <div className={styles.stepPanel}>
            <span className={styles.stepKicker}>02 Components</span>
            <h2>Which components should be worked on?</h2>
            <p>Select all that apply.</p>
            <div className={styles.cardGrid}>
              {components.map((option) => renderSelectionCard(option, state.components.includes(option.id), () => {
                toggleComponent(option.id);
              }))}
            </div>
          </div>
        )}

        {/* DETAILED MODE STEP 2 */}
        {!isSimple && step === 2 && (
          <div className={styles.stepPanel}>
            <span className={styles.stepKicker}>03 Work & Services</span>
            <h2>What work should we do?</h2>
            <p>Select multiple services. The catalogue is structured so it can grow with AMIGOS.</p>
            <div className={styles.serviceGrid}>
              {visibleServices.map((option) => renderSelectionCard(option, state.services.includes(option.id), () => {
                setState((current) => ({ ...current, services: toggle(current.services, option.id) }));
              }))}
            </div>
          </div>
        )}

        {/* DETAILED MODE STEP 3 */}
        {!isSimple && step === 3 && (
          <div className={styles.stepPanel}>
            <span className={styles.stepKicker}>04 Quantities</span>
            <h2>Enter the quantities</h2>
            <p>Please enter the areas, lengths and quantities.</p>
            <DetailedMeasurementFields state={state} setState={setState} />
            <div className={styles.quantityGrid}>
              {visibleQuantities.map((item) => (
                <label key={item.id} className={styles.quantityField}>
                  <span>{item.label}</span>
                  <div>
                    <input
                      type="number"
                      min="0"
                      inputMode="decimal"
                      value={state.quantities[item.quantityKey] || ""}
                      placeholder={item.unit === "m²" ? "120" : "5"}
                      onChange={(event) => setState((current) => ({
                        ...current,
                        quantities: { ...current.quantities, [item.quantityKey]: event.target.value }
                      }))}
                    />
                    <b>{item.unit}</b>
                  </div>
                </label>
              ))}
            </div>
            <ComponentDetailFields components={state.components} details={state.componentDetails} onChange={updateComponentDetail} />
            <label className={styles.notesField}>
              <span>Project information</span>
              <textarea value={state.projectNotes} placeholder="Tell us anything important about access, condition, damage or timing." onChange={(event) => setState((current) => ({ ...current, projectNotes: event.target.value }))} />
            </label>
          </div>
        )}

        {/* DETAILED MODE index 5 — "06 Summary": selections recap only */}
        {!isSimple && step === 5 && (
          <div className={styles.resultLocked}>
            <div className={styles.summaryPanel} style={{ marginBottom: "20px" }}>
              <h3>Project summary</h3>
              <dl>
                <div>
                  <dt>Property</dt>
                  <dd>
                    <span>{propertyTypes.find((option) => option.id === state.propertyType)?.title || "Not selected"}{state.roomType ? ` · ${state.roomType}` : ""}</span>
                    <button type="button" className={styles.editStepLink} onClick={() => setStep(0)}>Edit</button>
                  </dd>
                </div>
                <div>
                  <dt>Components</dt>
                  <dd>
                    <span>{selectedComponentTitles.length ? selectedComponentTitles.join(", ") : "Not selected"}</span>
                    <button type="button" className={styles.editStepLink} onClick={() => setStep(1)}>Edit</button>
                  </dd>
                </div>
                <div>
                  <dt>Services</dt>
                  <dd>
                    <span>{selectedServiceTitles.length ? selectedServiceTitles.join(", ") : "Not selected"}</span>
                    <button type="button" className={styles.editStepLink} onClick={() => setStep(2)}>Edit</button>
                  </dd>
                </div>
                <div>
                  <dt>Quantities</dt>
                  <dd>
                    <span>{visibleQuantities.map((item) => `${item.label}: ${state.quantities[item.quantityKey] || 0} ${item.unit}`).join(" · ")}</span>
                    <button type="button" className={styles.editStepLink} onClick={() => setStep(3)}>Edit</button>
                  </dd>
                </div>
                <div>
                  <dt>Location</dt>
                  <dd>
                    <span>{state.postalCode ? `${state.postalCode} ${state.locationCity}`.trim() : "Not specified"}</span>
                    <button type="button" className={styles.editStepLink} onClick={() => setStep(4)}>Edit</button>
                  </dd>
                </div>
              </dl>
            </div>
            <LockedPricePlaceholder />
            <div className={styles.navActions} style={{ marginTop: "18px" }}>
              <div className={styles.navActionsLeft}>
                <a className={styles.backToQuickNavBtn} href="/#quote">
                  ← Back to Calculator Selection
                </a>
                <button type="button" className={styles.secondaryAction} onClick={() => setStep(4)}>
                  ← EDIT SELECTIONS
                </button>
              </div>
              <button className={styles.primaryAction} type="button" onClick={() => setStep(6)}>
                CONTINUE →
              </button>
            </div>
          </div>
        )}

        {/* DETAILED MODE index 6 — "07 Verify E-Mail" */}
        {step === 6 && (
          <div className={styles.verifyPanel}>
            <span className={styles.stepKicker}>07 Verify E-Mail</span>
            {!codeSent ? (
              <>
                <h2>Where should we send your quote?</h2>
                <p>Enter your contact details to receive your personal AMIGOS estimated quotation.</p>
                <div className={styles.customerGrid}>
                  <label><span>First Name *</span><input value={state.customerInfo.firstName} onChange={(e) => updateCustomerInfo("firstName", e.target.value)} aria-invalid={Boolean(errors.firstName)} /></label>
                  <label><span>Last Name *</span><input value={state.customerInfo.lastName} onChange={(e) => updateCustomerInfo("lastName", e.target.value)} aria-invalid={Boolean(errors.lastName)} /></label>
                  <label><span>Phone (optional)</span><input value={state.customerInfo.phone} onChange={(e) => updateCustomerInfo("phone", e.target.value)} /></label>
                  <label style={{ gridColumn: "1 / -1" }}><span>E-Mail Address *</span><input type="email" value={state.email} placeholder="you@example.com" onChange={(e) => setState((curr) => ({ ...curr, email: e.target.value }))} aria-invalid={Boolean(errors.email)} /></label>
                </div>
                {errors.general && <p className={styles.error}>{errors.general}</p>}
                <div className={styles.navActions} style={{ marginTop: "18px" }}>
                  <button type="button" className={styles.secondaryAction} onClick={() => setStep(5)}>← BACK</button>
                  <button className={styles.primaryAction} type="button" onClick={submitContactAndSendCode} disabled={busy}>{busy ? "SENDING…" : "SEND VERIFICATION CODE →"}</button>
                </div>
              </>
            ) : (
              <>
                <h2>Check your e-mail</h2>
                <p>Enter the four-digit code we sent to <strong>{state.email}</strong>.</p>

            {notice && <p className={styles.notice}>{notice}</p>}
            {errors.general && <p className={styles.error}>{errors.general}</p>}

            <div className={styles.codeInputs}>
              {state.code.map((digit, index) => (
                <input
                  key={index}
                  ref={(node) => { codeRefs.current[index] = node; }}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(event) => {
                    const value = event.target.value.replace(/\D/g, "").slice(0, 1);
                    setState((current) => {
                      const code = [...current.code];
                      code[index] = value;
                      return { ...current, code };
                    });
                    if (value && codeRefs.current[index + 1]) codeRefs.current[index + 1].focus();
                  }}
                />
              ))}
            </div>
                <button className={styles.primaryAction} type="button" onClick={verifyCode} disabled={busy}>{busy ? "VERIFYING…" : "VERIFY E-MAIL →"}</button>
                <button className={styles.textButton} type="button" onClick={resendCode} disabled={busy}>Didn't receive the code? Send again</button>
              </>
            )}
            <div style={{ marginTop: "16px", display: "flex", justifyContent: "center" }}>
              <a className={styles.backToQuickNavBtn} href="/#quote">
                ← Back to Calculator Selection
              </a>
            </div>
          </div>
        )}

        {/* DETAILED MODE index 7 — "08 Your Estimated Quotation" */}
        {step === 7 && (
          <div className={styles.pricePanel}>
            <div className={styles.successMark}>✓</div>
            <span className={styles.stepKicker}>E-mail successfully verified</span>
            <h2>Your personal estimated quotation</h2>

            <div className={styles.summaryPanel}>
              <h3>Your selected project</h3>
              <dl>
                <div>
                  <dt>Property</dt>
                  <dd>{propertyTypes.find((option) => option.id === state.propertyType)?.title || "Not selected"}{state.roomType ? ` · ${state.roomType}` : ""}</dd>
                </div>
                <div>
                  <dt>Components</dt>
                  <dd>{selectedComponentTitles.length ? selectedComponentTitles.join(", ") : "Not selected"}</dd>
                </div>
                <div>
                  <dt>Services</dt>
                  <dd>{selectedServiceTitles.length ? selectedServiceTitles.join(", ") : "Not selected"}</dd>
                </div>
                <div>
                  <dt>Quantities</dt>
                  <dd>{visibleQuantities.map((item) => `${item.label}: ${state.quantities[item.quantityKey] || 0} ${item.unit}`).join(" · ")}</dd>
                </div>
                <div>
                  <dt>Location</dt>
                  <dd>{state.postalCode} {state.locationCity}</dd>
                </div>
                <div>
                  <dt>Travel costs</dt>
                  <dd>Included</dd>
                </div>
              </dl>
            </div>

            <div style={{ margin: "20px 0 8px", textAlign: "center" }}>
              <strong className={styles.priceRange}>{priceRange}</strong>
              <p style={{ margin: "6px 0 0", fontSize: "0.9rem", color: "var(--color-muted, #888)" }}>Estimated price incl. VAT</p>
            </div>
            <p>This estimate is non-binding and based on the information provided. The final price may vary after review and/or an on-site inspection.</p>

            {notice && <p className={styles.notice} style={{ marginTop: "12px" }}>{notice}</p>}
            {errors.general && <p className={styles.error} style={{ marginTop: "12px" }}>{errors.general}</p>}

            <div className={styles.finalActions}>
              <button className={styles.primaryAction} type="button" onClick={() => submitRequest("OFFER")} disabled={busy}>
                {busy ? "SUBMITTING…" : "REQUEST OFFER"}
              </button>
              {sessionId && (
                <a
                  href={`/api/offer-calculator/pdf?sessionId=${sessionId}`}
                  download
                  className={styles.secondaryAction}
                  style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", textDecoration: "none", gap: "6px" }}
                >
                  <span>📄</span>
                  <b>DOWNLOAD PDF QUOTE</b>
                </a>
              )}
              <button
                className={styles.secondaryAction}
                type="button"
                onClick={() => submitRequest("CONSULTATION")}
                disabled={busy}
              >
                REQUEST SITE VISIT
              </button>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.secondaryAction}
                style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", textDecoration: "none", gap: "6px" }}
              >
                <span>💬</span>
                <span>CONTACT VIA WHATSAPP</span>
              </a>
            </div>

            {showSiteVisitForm && (
              <div style={{ marginTop: "16px", padding: "16px", background: "rgba(255,255,255,0.05)", borderRadius: "8px", textAlign: "left" }}>
                <h4 style={{ margin: "0 0 10px 0" }}>Property address for site visit</h4>
                <label style={{ display: "block", marginBottom: "8px" }}><span style={{ fontSize: "0.85rem", display: "block", marginBottom: "4px" }}>Phone *</span><input type="tel" value={state.customerInfo.phone} onChange={(e) => updateCustomerInfo("phone", e.target.value)} aria-invalid={Boolean(errors.phone)} />{errors.phone && <small style={{ color: "#ff4d4f", display: "block" }}>{errors.phone}</small>}</label>
                <label style={{ display: "block", marginBottom: "8px" }}>
                  <span style={{ fontSize: "0.85rem", display: "block", marginBottom: "4px" }}>Street / Property Address *</span>
                  <input
                    value={state.customerInfo.address}
                    placeholder="Bahnhofstrasse 12"
                    onChange={(e) => updateCustomerInfo("address", e.target.value)}
                    aria-invalid={Boolean(errors.address)}
                  />
                  {errors.address && <small style={{ color: "#ff4d4f", display: "block" }}>{errors.address}</small>}
                </label>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "8px" }}>
                  <label>
                    <span style={{ fontSize: "0.85rem", display: "block", marginBottom: "4px" }}>Postal Code</span>
                    <input value={state.customerInfo.postalCode || state.postalCode} readOnly style={{ opacity: 0.8 }} />
                  </label>
                  <label>
                    <span style={{ fontSize: "0.85rem", display: "block", marginBottom: "4px" }}>City</span>
                    <input value={state.customerInfo.city || state.locationCity} readOnly style={{ opacity: 0.8 }} />
                  </label>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "12px", alignItems: "center", marginBottom: "12px" }}>
                  <label>
                    <span style={{ fontSize: "0.85rem", display: "block", marginBottom: "4px" }}>Company (optional)</span>
                    <input
                      value={state.customerInfo.company}
                      placeholder="Company AG"
                      onChange={(e) => updateCustomerInfo("company", e.target.value)}
                    />
                  </label>
                  <label style={{ display: "flex", alignItems: "center", gap: "6px", cursor: "pointer", marginTop: "18px" }}>
                    <input
                      type="checkbox"
                      checked={state.customerInfo.propertyManagement}
                      onChange={(e) => updateCustomerInfo("propertyManagement", e.target.checked)}
                    />
                    <span style={{ fontSize: "0.85rem" }}>Property Management</span>
                  </label>
                </div>
                <button
                  className={styles.primaryAction}
                  type="button"
                  onClick={() => submitRequest("CONSULTATION")}
                  disabled={busy}
                >
                  {busy ? "SUBMITTING…" : "CONFIRM SITE VISIT REQUEST →"}
                </button>
              </div>
            )}

            <div className={styles.uploadPanel} style={{ marginTop: "24px" }}>
              <h3>Upload photos of your project (optional)</h3>
              <div className={styles.photoGrid}>
                {photoCategories.map((category) => (
                  <label key={category} className={styles.photoDrop}>
                    <span>{category}</span>
                    <small>Choose photos or a PDF document</small>
                    <input
                      type="file"
                      accept="image/*,.pdf,application/pdf"
                      multiple
                      onChange={(event) => {
                        uploadPhotos(event.target.files, category);
                        event.target.value = "";
                      }}
                    />
                  </label>
                ))}
              </div>
              {photos.length > 0 && (
                <div className={styles.uploadedPhotosList}>
                  <p className={styles.notice}>{photos.length} photo{photos.length === 1 ? "" : "s"} attached to this project.</p>
                  <div className={styles.uploadedPhotosTags}>
                    {photos.map((p, idx) => (
                      <span key={p.id || idx} className={styles.photoTag}>
                        📷 {p.category}: {p.fileName}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* NON-EMBEDDED NAV ACTIONS */}
        {step < inputStepCount && (
          <div className={styles.navActions}>
            <div className={styles.navActionsLeft}>
              <a className={styles.backToQuickNavBtn} href="/#quote">
                ← Back to Calculator Selection
              </a>
              {step > 0 && (
                <button type="button" className={styles.secondaryAction} onClick={() => setStep((current) => current - 1)}>
                  ← BACK
                </button>
              )}
            </div>
            <button type="button" className={styles.primaryAction} disabled={!canContinue() || busy} onClick={next}>
              {isSimple ? "CONTINUE →" : (step === 4 ? "CALCULATE" : "CONTINUE →")}
            </button>
          </div>
        )}
      </section>
    </main>
  );
}
