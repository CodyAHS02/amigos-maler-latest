"use client";

import { useState, useMemo } from "react";
import styles from "./PricingEditor.module.css";

// Human-friendly schema definitions for Quick and Advanced pricing variables.
// Handles automatic conversion between internal representation (e.g. cents) and visual display (CHF).

const QUICK_PROPERTY_PRICES = [
  { key: "2_5_room_apartment_base_price", label: "2½-Room Apartment", description: "Standard average 2.5 room flat (~55–70m²)", unit: "CHF", defaultVal: 2400 },
  { key: "3_5_room_apartment_base_price", label: "3½-Room Apartment", description: "Standard average 3.5 room flat (~75–90m²)", unit: "CHF", defaultVal: 3200 },
  { key: "4_5_room_apartment_base_price", label: "4½-Room Apartment", description: "Standard average 4.5 room flat (~95–115m²)", unit: "CHF", defaultVal: 4100 },
  { key: "5_5_room_apartment_base_price", label: "5½-Room Apartment", description: "Large apartment or duplex (~120–145m²)", unit: "CHF", defaultVal: 5200 },
  { key: "house_base_price", label: "Single-Family House", description: "Detached villa / house average (~150–220m²)", unit: "CHF", defaultVal: 6500 },
  { key: "commercial_base_price", label: "Commercial Space", description: "Offices, retail or commercial property", unit: "CHF", defaultVal: 4800 },
  { key: "other_base_price", label: "Other / Custom Property", description: "Baseline reference for custom buildings", unit: "CHF", defaultVal: 3200 },
];

const QUICK_SCOPE_MODIFIERS = [
  { key: "walls_modifier", label: "Walls Only", description: "Customer selects wall painting only", unit: "multiplier", defaultVal: 0.70 },
  { key: "ceilings_modifier", label: "Ceilings Only", description: "Customer selects ceiling painting only", unit: "multiplier", defaultVal: 0.50 },
  { key: "walls_and_ceilings_modifier", label: "Walls & Ceilings", description: "Customer selects both walls and ceilings (baseline 1.00)", unit: "multiplier", defaultVal: 1.00 },
];

const QUICK_CONDITION_MODIFIERS = [
  { key: "good_condition_modifier", label: "Good Condition", description: "Normal wear and tear, no major preparation", unit: "multiplier", defaultVal: 1.00 },
  { key: "minor_repairs_modifier", label: "Minor Repairs", description: "Small cracks, holes, light patching needed (+15%)", unit: "multiplier", defaultVal: 1.15 },
  { key: "renovation_modifier", label: "Renovation Needed", description: "Significant repairs, nicotine, or heavy prep (+35%)", unit: "multiplier", defaultVal: 1.35 },
];

const QUICK_TRAVEL_VARS = [
  { key: "base_travel_flat_fee", label: "Base Travel Flat Fee", description: "Minimum fixed travel and setup fee", unit: "CHF", defaultVal: 45.00 },
  { key: "travel_cost_per_km", label: "Travel Rate per km", description: "Per-kilometer travel rate from Olten dispatch", unit: "CHF/km", defaultVal: 2.50 },
];

// Advanced Calculator Component Rates
const ADVANCED_COMPONENTS = [
  {
    id: "walls",
    title: "Walls",
    rateKey: "quantity_weight_walls",
    rateUnit: "CHF/m²",
    rateDivisor: 100, // stored as cents (1850 = CHF 18.50)
    minQtyKey: "quantity_min_walls",
    minQtyUnit: "m²",
    minChargeKey: "component_min_walls",
    minChargeUnit: "CHF",
    minChargeDivisor: 100 // stored as cents (42000 = CHF 420.00)
  },
  {
    id: "ceilings",
    title: "Ceilings",
    rateKey: "quantity_weight_ceilings",
    rateUnit: "CHF/m²",
    rateDivisor: 100,
    minQtyKey: "quantity_min_ceilings",
    minQtyUnit: "m²",
    minChargeKey: "component_min_ceilings",
    minChargeUnit: "CHF",
    minChargeDivisor: 100
  },
  {
    id: "doors",
    title: "Doors",
    rateKey: "quantity_weight_doors",
    rateUnit: "CHF/pc",
    rateDivisor: 100,
    minQtyKey: "quantity_min_doors",
    minQtyUnit: "pcs",
    minChargeKey: "component_min_doors",
    minChargeUnit: "CHF",
    minChargeDivisor: 100
  },
  {
    id: "windows",
    title: "Windows",
    rateKey: "quantity_weight_windows",
    rateUnit: "CHF/pc",
    rateDivisor: 100,
    minQtyKey: "quantity_min_windows",
    minQtyUnit: "pcs",
    minChargeKey: "component_min_windows",
    minChargeUnit: "CHF",
    minChargeDivisor: 100
  },
  {
    id: "radiators",
    title: "Radiators",
    rateKey: "quantity_weight_radiators",
    rateUnit: "CHF/pc",
    rateDivisor: 100,
    minQtyKey: "quantity_min_radiators",
    minQtyUnit: "pcs",
    minChargeKey: "component_min_radiators",
    minChargeUnit: "CHF",
    minChargeDivisor: 100
  },
  {
    id: "baseboards",
    title: "Skirting / Baseboards",
    rateKey: "quantity_weight_baseboards",
    rateUnit: "CHF/lm",
    rateDivisor: 100,
    minQtyKey: "quantity_min_baseboards",
    minQtyUnit: "lm",
    minChargeKey: "component_min_baseboards",
    minChargeUnit: "CHF",
    minChargeDivisor: 100
  },
  {
    id: "facade",
    title: "Facade / Exterior",
    rateKey: "quantity_weight_facade",
    rateUnit: "CHF/m²",
    rateDivisor: 100,
    minQtyKey: "quantity_min_facade",
    minQtyUnit: "m²",
    minChargeKey: "component_min_facade",
    minChargeUnit: "CHF",
    minChargeDivisor: 100
  },
  {
    id: "railings",
    title: "Balcony / Stair Railings",
    rateKey: "quantity_weight_railings",
    rateUnit: "CHF/m",
    rateDivisor: 100,
    minQtyKey: "quantity_min_railings",
    minQtyUnit: "m",
    minChargeKey: "component_min_railings",
    minChargeUnit: "CHF",
    minChargeDivisor: 100
  },
  {
    id: "stairs",
    title: "Staircases",
    rateKey: "quantity_weight_stairs",
    rateUnit: "CHF/step",
    rateDivisor: 100,
    minQtyKey: "quantity_min_stairs",
    minQtyUnit: "steps",
    minChargeKey: "component_min_stairs",
    minChargeUnit: "CHF",
    minChargeDivisor: 100
  },
  {
    id: "garage_doors",
    title: "Garage Doors",
    rateKey: "quantity_weight_garage_doors",
    rateUnit: "CHF/pc",
    rateDivisor: 100,
    minQtyKey: "quantity_min_garage_doors",
    minQtyUnit: "doors",
    minChargeKey: "component_min_garage_doors",
    minChargeUnit: "CHF",
    minChargeDivisor: 100
  },
  {
    id: "shutters",
    title: "Window Shutters",
    rateKey: "quantity_weight_shutters",
    rateUnit: "CHF/pair",
    rateDivisor: 100,
    minQtyKey: "quantity_min_shutters",
    minQtyUnit: "pairs",
    minChargeKey: "component_min_shutters",
    minChargeUnit: "CHF",
    minChargeDivisor: 100
  },
  {
    id: "plaster_render",
    title: "Plaster & Render Work",
    rateKey: "quantity_weight_plaster_render",
    rateUnit: "CHF/m²",
    rateDivisor: 100,
    minQtyKey: "quantity_min_plaster_render",
    minQtyUnit: "m²",
    minChargeKey: "component_min_plaster_render",
    minChargeUnit: "CHF",
    minChargeDivisor: 100
  },
  {
    id: "pressure_cleaning",
    title: "High-Pressure Cleaning",
    rateKey: "quantity_weight_pressure_cleaning",
    rateUnit: "CHF/m²",
    rateDivisor: 100,
    minQtyKey: "quantity_min_pressure_cleaning",
    minQtyUnit: "m²",
    minChargeKey: "component_min_pressure_cleaning",
    minChargeUnit: "CHF",
    minChargeDivisor: 100
  },
  {
    id: "spray_painting",
    title: "Spray Painting",
    rateKey: "quantity_weight_spray_painting",
    rateUnit: "CHF/unit",
    rateDivisor: 100,
    minQtyKey: "quantity_min_spray_painting",
    minQtyUnit: "units",
    minChargeKey: "component_min_spray_painting",
    minChargeUnit: "CHF",
    minChargeDivisor: 100
  },
  {
    id: "other",
    title: "Other / Custom Works",
    rateKey: "quantity_weight_other",
    rateUnit: "CHF/unit",
    rateDivisor: 100,
    minQtyKey: "quantity_min_other",
    minQtyUnit: "units",
    minChargeKey: "component_min_other",
    minChargeUnit: "CHF",
    minChargeDivisor: 100
  }
];

const ADVANCED_PROPERTY_MULTIPLIERS = [
  { key: "property_multiplier_apartment", label: "Apartment / Flat", unit: "x", defaultVal: 1.0 },
  { key: "property_multiplier_house", label: "Single-Family House", unit: "x", defaultVal: 1.08 },
  { key: "property_multiplier_commercial", label: "Commercial Space", unit: "x", defaultVal: 1.16 },
  { key: "property_multiplier_facade", label: "Facade / Exterior", unit: "x", defaultVal: 1.20 },
  { key: "property_multiplier_room", label: "Single Room", unit: "x", defaultVal: 0.92 },
  { key: "property_multiplier_other", label: "Other / Special Property", unit: "x", defaultVal: 1.05 }
];

const ADVANCED_THRESHOLDS = [
  { key: "detailed_minimum_cents", label: "Minimum Project Total", description: "Absolute minimum order total", unit: "CHF", divisor: 100, defaultVal: 650 },
  { key: "small_project_surcharge", label: "Small Project Surcharge", description: "Multiplier applied under threshold", unit: "x", defaultVal: 1.12 },
  { key: "small_project_threshold_cents", label: "Small Project Threshold", description: "Threshold for small project surcharge", unit: "CHF", divisor: 100, defaultVal: 1800 },
  { key: "large_project_discount", label: "Large Project Discount", description: "Discount factor applied over threshold", unit: "x", defaultVal: 0.94 },
  { key: "large_project_threshold_cents", label: "Large Project Threshold", description: "Threshold for volume discount", unit: "CHF", divisor: 100, defaultVal: 6500 },
  { key: "price_rounding_chf", label: "Price Rounding Step", description: "Rounds final quotes to nearest CHF", unit: "CHF", defaultVal: 10 }
];

const TRAVEL_ZONES = [
  { plz: "4600 – 4614", region: "Olten & immediate surroundings", km: 3 },
  { plz: "4615 – 4658", region: "Olten district", km: 12 },
  { plz: "4800 – 4856", region: "Zofingen / Oftringen region", km: 12 },
  { plz: "5000 – 5099", region: "Aarau region", km: 15 },
  { plz: "4500 – 4599", region: "Solothurn region", km: 25 },
  { plz: "4000 – 4499", region: "Basel region", km: 40 },
  { plz: "6000 – 6099", region: "Lucerne region", km: 55 },
  { plz: "8000 – 8999", region: "Zurich region", km: 60 },
  { plz: "3000 – 3999", region: "Bern region", km: 65 },
  { plz: "Other / CH", region: "Switzerland standard max zone", km: 80 }
];

export default function PricingEditor({ initialSettings = {} }) {
  const [activeTab, setActiveTab] = useState("quick"); // "quick" | "advanced" | "travel" | "simulator"
  const [settings, setSettings] = useState(initialSettings);
  const [modified, setModified] = useState({});
  const [search, setSearch] = useState("");
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState(null);

  // Simulator State
  const [simType, setSimType] = useState("quick");
  const [simProperty, setSimProperty] = useState("3_5_apartment");
  const [simScope, setSimScope] = useState("walls_ceilings");
  const [simCondition, setSimCondition] = useState("good");
  const [simPlz, setSimPlz] = useState("4600");

  // Read value helper: returns the modified value or current stored value
  const getValue = (key, divisor = 1) => {
    let raw;
    if (modified[key] !== undefined) {
      raw = modified[key];
    } else if (settings[key] !== undefined) {
      raw = settings[key];
    } else {
      raw = 0;
    }
    if (divisor !== 1) {
      return (Number(raw) / divisor).toFixed(2).replace(/\.00$/, "");
    }
    return String(raw);
  };

  const isChanged = (key) => modified[key] !== undefined;

  const handleValueChange = (key, visualValue, multiplier = 1) => {
    const num = Number(visualValue);
    if (Number.isNaN(num)) return;
    const internalValue = Math.round(num * multiplier);
    setModified((prev) => ({ ...prev, [key]: internalValue }));
  };

  const hasChanges = Object.keys(modified).length > 0;

  // Save changes
  const handleSave = async () => {
    if (!hasChanges) return;
    setSaving(true);
    setMessage(null);

    const updates = Object.entries(modified).map(([key, value]) => ({ key, value }));

    try {
      const res = await fetch("/api/admin/pricing-settings", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ updates })
      });

      const data = await res.json();
      if (res.ok && data.ok) {
        setSettings(data.settings);
        setModified({});
        setMessage({ type: "success", text: `Successfully saved ${updates.length} pricing change(s)! Dynamic quotes are now updated live.` });
      } else {
        setMessage({ type: "error", text: data.error || "Failed to save pricing settings." });
      }
    } catch {
      setMessage({ type: "error", text: "Network error saving pricing settings." });
    } finally {
      setSaving(false);
    }
  };

  // Reset to averages
  const handleResetDefaults = async () => {
    if (!confirm("Are you sure you want to reset all calculator prices to the recommended Swiss painter market averages?")) {
      return;
    }
    setSaving(true);
    setMessage(null);
    try {
      const res = await fetch("/api/admin/pricing-settings", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "reset_defaults" })
      });

      const data = await res.json();
      if (res.ok && data.ok) {
        setSettings(data.settings);
        setModified({});
        setMessage({ type: "success", text: "Successfully reset all calculator prices to Swiss painter average rates!" });
      } else {
        setMessage({ type: "error", text: data.error || "Failed to reset pricing." });
      }
    } catch {
      setMessage({ type: "error", text: "Network error resetting pricing." });
    } finally {
      setSaving(false);
    }
  };

  // Live Quick Quote Simulation calculation using currently edited rates
  const simResult = useMemo(() => {
    const baseKey = `${simProperty}_base_price`;
    const basePrice = Number(modified[baseKey] ?? settings[baseKey] ?? 3200);
    const scopeKey = `${simScope}_modifier`;
    const scopeMod = Number(modified[scopeKey] ?? settings[scopeKey] ?? 1.0);
    const conditionKey = `${simCondition}_modifier`;
    const conditionMod = Number(modified[conditionKey] ?? settings[conditionKey] ?? 1.0);

    const baseTravel = Number(modified.base_travel_flat_fee ?? settings.base_travel_flat_fee ?? 45);
    const travelPerKm = Number(modified.travel_cost_per_km ?? settings.travel_cost_per_km ?? 2.5);

    const plzNum = parseInt(simPlz, 10);
    let approxKm = 80;
    if (plzNum >= 4600 && plzNum <= 4614) approxKm = 3;
    else if (plzNum >= 4615 && plzNum <= 4658) approxKm = 12;
    else if (plzNum >= 4800 && plzNum <= 4856) approxKm = 12;
    else if (plzNum >= 5000 && plzNum <= 5099) approxKm = 15;
    else if (plzNum >= 4500 && plzNum <= 4599) approxKm = 25;
    else if (plzNum >= 4000 && plzNum <= 4499) approxKm = 40;
    else if (plzNum >= 6000 && plzNum <= 6099) approxKm = 55;
    else if (plzNum >= 8000 && plzNum <= 8999) approxKm = 60;
    else if (plzNum >= 3000 && plzNum <= 3999) approxKm = 65;

    const travelCost = Math.round(baseTravel + (approxKm * travelPerKm));
    const subtotal = Math.round(basePrice * scopeMod * conditionMod);
    const total = subtotal + travelCost;

    return {
      basePrice,
      scopeMod,
      conditionMod,
      approxKm,
      travelCost,
      subtotal,
      total
    };
  }, [simProperty, simScope, simCondition, simPlz, modified, settings]);

  return (
    <div className={styles.wrapper}>
      {/* Top Banner & Control Actions */}
      <div className={styles.headerBar}>
        <div>
          <div className={styles.badgeRow}>
            <span className={styles.liveBadge}>● Dynamic Pricing Active</span>
            <span className={styles.regionBadge}>Currency: CHF (Swiss Francs)</span>
          </div>
          <h2 className={styles.title}>Calculator Pricing Management</h2>
          <p className={styles.subtitle}>
            Easily adjust base rates, scope multipliers, and component unit costs. Changes take effect dynamically across both calculators immediately.
          </p>
        </div>

        <div className={styles.actionGroup}>
          <button
            type="button"
            className={styles.resetBtn}
            onClick={handleResetDefaults}
            disabled={saving}
            title="Reset all prices to recommended Swiss painter averages"
          >
            ↻ Restore Swiss Averages
          </button>

          <button
            type="button"
            className={`${styles.saveBtn} ${hasChanges ? styles.saveBtnActive : ""}`}
            onClick={handleSave}
            disabled={!hasChanges || saving}
          >
            {saving ? "Saving…" : `Save Changes ${hasChanges ? `(${Object.keys(modified).length})` : ""}`}
          </button>
        </div>
      </div>

      {message && (
        <div className={message.type === "success" ? styles.alertSuccess : styles.alertError}>
          {message.type === "success" ? "✓ " : "⚠ "}
          {message.text}
        </div>
      )}

      {/* Main Tabs Navigation */}
      <div className={styles.tabsNav} role="tablist">
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === "quick"}
          className={`${styles.tabBtn} ${activeTab === "quick" ? styles.tabBtnActive : ""}`}
          onClick={() => setActiveTab("quick")}
        >
          <span className={styles.tabIcon}>⚡</span>
          <span>Quick Calculator</span>
          <span className={styles.tabPill}>7 Base Types</span>
        </button>

        <button
          type="button"
          role="tab"
          aria-selected={activeTab === "advanced"}
          className={`${styles.tabBtn} ${activeTab === "advanced" ? styles.tabBtnActive : ""}`}
          onClick={() => setActiveTab("advanced")}
        >
          <span className={styles.tabIcon}>🔬</span>
          <span>Advanced Calculator</span>
          <span className={styles.tabPill}>15 Components</span>
        </button>

        <button
          type="button"
          role="tab"
          aria-selected={activeTab === "travel"}
          className={`${styles.tabBtn} ${activeTab === "travel" ? styles.tabBtnActive : ""}`}
          onClick={() => setActiveTab("travel")}
        >
          <span className={styles.tabIcon}>🚗</span>
          <span>Travel & Regions</span>
          <span className={styles.tabPill}>10 Zones</span>
        </button>

        <button
          type="button"
          role="tab"
          aria-selected={activeTab === "simulator"}
          className={`${styles.tabBtn} ${activeTab === "simulator" ? styles.tabBtnActive : ""}`}
          onClick={() => setActiveTab("simulator")}
        >
          <span className={styles.tabIcon}>🧪</span>
          <span>Live Price Simulator</span>
          <span className={styles.tabPill}>Instant Preview</span>
        </button>
      </div>

      {/* TAB 1: QUICK CALCULATOR */}
      {activeTab === "quick" && (
        <div className={styles.tabContent}>
          {/* Section 1: Base Property Rates */}
          <div className={styles.sectionCard}>
            <div className={styles.sectionHeader}>
              <div>
                <h3 className={styles.sectionTitle}>1. Base Property Prices (CHF)</h3>
                <p className={styles.sectionDesc}>
                  The reference baseline prices for full apartment/house repaints in Canton Solothurn & Aargau.
                </p>
              </div>
            </div>

            <div className={styles.cardGrid}>
              {QUICK_PROPERTY_PRICES.map((item) => {
                const val = getValue(item.key);
                const dirty = isChanged(item.key);
                return (
                  <div key={item.key} className={`${styles.priceCard} ${dirty ? styles.priceCardDirty : ""}`}>
                    <div className={styles.priceCardHeader}>
                      <strong className={styles.priceCardLabel}>{item.label}</strong>
                      {dirty && <span className={styles.dirtyDot} title="Unsaved modification">• Changed</span>}
                    </div>
                    <p className={styles.priceCardDesc}>{item.description}</p>
                    <div className={styles.inputWrap}>
                      <span className={styles.inputPrefix}>CHF</span>
                      <input
                        type="number"
                        step="50"
                        min="0"
                        value={val}
                        onChange={(e) => handleValueChange(item.key, e.target.value)}
                        className={`${styles.numberInput} ${dirty ? styles.inputDirty : ""}`}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Section 2: Scope & Condition Modifiers */}
          <div className={styles.twoColumnGrid}>
            <div className={styles.sectionCard}>
              <div className={styles.sectionHeader}>
                <div>
                  <h3 className={styles.sectionTitle}>2. Work Scope Multipliers</h3>
                  <p className={styles.sectionDesc}>Adjusts price when customer chooses walls only or ceilings only.</p>
                </div>
              </div>

              <div className={styles.compactList}>
                {QUICK_SCOPE_MODIFIERS.map((item) => {
                  const val = getValue(item.key);
                  const dirty = isChanged(item.key);
                  const pct = Math.round(Number(val) * 100);
                  return (
                    <div key={item.key} className={`${styles.rowItem} ${dirty ? styles.rowItemDirty : ""}`}>
                      <div className={styles.rowInfo}>
                        <strong>{item.label}</strong>
                        <span>{item.description}</span>
                      </div>
                      <div className={styles.rowInputWrap}>
                        <input
                          type="number"
                          step="0.05"
                          min="0.1"
                          max="2.0"
                          value={val}
                          onChange={(e) => handleValueChange(item.key, e.target.value)}
                          className={`${styles.compactInput} ${dirty ? styles.inputDirty : ""}`}
                        />
                        <span className={styles.pctBadge}>{pct}%</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className={styles.sectionCard}>
              <div className={styles.sectionHeader}>
                <div>
                  <h3 className={styles.sectionTitle}>3. Condition Multipliers</h3>
                  <p className={styles.sectionDesc}>Scale factor for wall/ceiling condition and required surface prep.</p>
                </div>
              </div>

              <div className={styles.compactList}>
                {QUICK_CONDITION_MODIFIERS.map((item) => {
                  const val = getValue(item.key);
                  const dirty = isChanged(item.key);
                  const pct = Math.round((Number(val) - 1.0) * 100);
                  return (
                    <div key={item.key} className={`${styles.rowItem} ${dirty ? styles.rowItemDirty : ""}`}>
                      <div className={styles.rowInfo}>
                        <strong>{item.label}</strong>
                        <span>{item.description}</span>
                      </div>
                      <div className={styles.rowInputWrap}>
                        <input
                          type="number"
                          step="0.05"
                          min="0.5"
                          max="3.0"
                          value={val}
                          onChange={(e) => handleValueChange(item.key, e.target.value)}
                          className={`${styles.compactInput} ${dirty ? styles.inputDirty : ""}`}
                        />
                        <span className={styles.pctBadge}>{pct >= 0 ? `+${pct}%` : `${pct}%`}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Section 3: Travel Rates */}
          <div className={styles.sectionCard}>
            <div className={styles.sectionHeader}>
              <div>
                <h3 className={styles.sectionTitle}>4. Travel & Logistics Rates</h3>
                <p className={styles.sectionDesc}>Configures the dispatch fee and per-kilometer rate applied to postal codes.</p>
              </div>
            </div>

            <div className={styles.cardGrid}>
              {QUICK_TRAVEL_VARS.map((item) => {
                const val = getValue(item.key);
                const dirty = isChanged(item.key);
                return (
                  <div key={item.key} className={`${styles.priceCard} ${dirty ? styles.priceCardDirty : ""}`}>
                    <div className={styles.priceCardHeader}>
                      <strong className={styles.priceCardLabel}>{item.label}</strong>
                      {dirty && <span className={styles.dirtyDot}>• Changed</span>}
                    </div>
                    <p className={styles.priceCardDesc}>{item.description}</p>
                    <div className={styles.inputWrap}>
                      <span className={styles.inputPrefix}>{item.unit}</span>
                      <input
                        type="number"
                        step="0.10"
                        min="0"
                        value={val}
                        onChange={(e) => handleValueChange(item.key, e.target.value)}
                        className={`${styles.numberInput} ${dirty ? styles.inputDirty : ""}`}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: ADVANCED CALCULATOR */}
      {activeTab === "advanced" && (
        <div className={styles.tabContent}>
          {/* Section 1: Component Rates Table */}
          <div className={styles.sectionCard}>
            <div className={styles.sectionHeader}>
              <div>
                <h3 className={styles.sectionTitle}>1. Component Unit Rates & Minimum Charges</h3>
                <p className={styles.sectionDesc}>
                  Configures the unit pricing (m², pcs, lm) and minimum charge per component. Displayed in CHF.
                </p>
              </div>
            </div>

            <div className={styles.tableWrapper}>
              <table className={styles.dataTable}>
                <thead>
                  <tr>
                    <th style={{ width: "22%" }}>Component</th>
                    <th style={{ width: "26%" }}>Unit Rate (CHF)</th>
                    <th style={{ width: "26%" }}>Min. Quantity Required</th>
                    <th style={{ width: "26%" }}>Minimum Charge (CHF)</th>
                  </tr>
                </thead>
                <tbody>
                  {ADVANCED_COMPONENTS.map((comp) => {
                    const rateVal = getValue(comp.rateKey, comp.rateDivisor);
                    const rateDirty = isChanged(comp.rateKey);
                    const minQtyVal = getValue(comp.minQtyKey);
                    const minQtyDirty = isChanged(comp.minQtyKey);
                    const minChargeVal = getValue(comp.minChargeKey, comp.minChargeDivisor);
                    const minChargeDirty = isChanged(comp.minChargeKey);

                    return (
                      <tr key={comp.id} className={rateDirty || minQtyDirty || minChargeDirty ? styles.tableRowDirty : ""}>
                        <td>
                          <strong>{comp.title}</strong>
                        </td>
                        <td>
                          <div className={styles.tableInputWrap}>
                            <input
                              type="number"
                              step="0.50"
                              min="0"
                              value={rateVal}
                              onChange={(e) => handleValueChange(comp.rateKey, e.target.value, comp.rateDivisor)}
                              className={`${styles.tableInput} ${rateDirty ? styles.inputDirty : ""}`}
                            />
                            <span className={styles.tableUnit}>{comp.rateUnit}</span>
                          </div>
                        </td>
                        <td>
                          <div className={styles.tableInputWrap}>
                            <input
                              type="number"
                              step="1"
                              min="1"
                              value={minQtyVal}
                              onChange={(e) => handleValueChange(comp.minQtyKey, e.target.value)}
                              className={`${styles.tableInput} ${minQtyDirty ? styles.inputDirty : ""}`}
                            />
                            <span className={styles.tableUnit}>{comp.minQtyUnit}</span>
                          </div>
                        </td>
                        <td>
                          <div className={styles.tableInputWrap}>
                            <input
                              type="number"
                              step="10"
                              min="0"
                              value={minChargeVal}
                              onChange={(e) => handleValueChange(comp.minChargeKey, e.target.value, comp.minChargeDivisor)}
                              className={`${styles.tableInput} ${minChargeDirty ? styles.inputDirty : ""}`}
                            />
                            <span className={styles.tableUnit}>CHF</span>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 2: Property Multipliers */}
          <div className={styles.twoColumnGrid}>
            <div className={styles.sectionCard}>
              <div className={styles.sectionHeader}>
                <div>
                  <h3 className={styles.sectionTitle}>2. Property Multipliers</h3>
                  <p className={styles.sectionDesc}>Difficulty and preparation scaling by building architecture.</p>
                </div>
              </div>

              <div className={styles.compactList}>
                {ADVANCED_PROPERTY_MULTIPLIERS.map((item) => {
                  const val = getValue(item.key);
                  const dirty = isChanged(item.key);
                  return (
                    <div key={item.key} className={`${styles.rowItem} ${dirty ? styles.rowItemDirty : ""}`}>
                      <div className={styles.rowInfo}>
                        <strong>{item.label}</strong>
                      </div>
                      <div className={styles.rowInputWrap}>
                        <input
                          type="number"
                          step="0.02"
                          min="0.5"
                          max="2.5"
                          value={val}
                          onChange={(e) => handleValueChange(item.key, e.target.value)}
                          className={`${styles.compactInput} ${dirty ? styles.inputDirty : ""}`}
                        />
                        <span className={styles.pctBadge}>{val}x</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Section 3: Project Thresholds */}
            <div className={styles.sectionCard}>
              <div className={styles.sectionHeader}>
                <div>
                  <h3 className={styles.sectionTitle}>3. Project Thresholds & Surcharges</h3>
                  <p className={styles.sectionDesc}>Minimum order thresholds, volume discounts, and rounding.</p>
                </div>
              </div>

              <div className={styles.compactList}>
                {ADVANCED_THRESHOLDS.map((item) => {
                  const val = getValue(item.key, item.divisor || 1);
                  const dirty = isChanged(item.key);
                  return (
                    <div key={item.key} className={`${styles.rowItem} ${dirty ? styles.rowItemDirty : ""}`}>
                      <div className={styles.rowInfo}>
                        <strong>{item.label}</strong>
                        <span>{item.description}</span>
                      </div>
                      <div className={styles.rowInputWrap}>
                        <input
                          type="number"
                          step={item.unit === "CHF" ? "10" : "0.02"}
                          min="0"
                          value={val}
                          onChange={(e) => handleValueChange(item.key, e.target.value, item.divisor || 1)}
                          className={`${styles.compactInput} ${dirty ? styles.inputDirty : ""}`}
                        />
                        <span className={styles.pctBadge}>{item.unit}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: TRAVEL & REGIONS */}
      {activeTab === "travel" && (
        <div className={styles.tabContent}>
          <div className={styles.sectionCard}>
            <div className={styles.sectionHeader}>
              <div>
                <h3 className={styles.sectionTitle}>Travel Distance Zones & Rates</h3>
                <p className={styles.sectionDesc}>
                  Calculations determine travel costs by matching customer postal codes with estimated distance from Olten dispatch center.
                </p>
              </div>
            </div>

            <div className={styles.tableWrapper}>
              <table className={styles.dataTable}>
                <thead>
                  <tr>
                    <th style={{ width: "20%" }}>PLZ Range</th>
                    <th style={{ width: "40%" }}>Destination Region</th>
                    <th style={{ width: "20%" }}>Est. Distance (km)</th>
                    <th style={{ width: "20%" }}>Travel Charge</th>
                  </tr>
                </thead>
                <tbody>
                  {TRAVEL_ZONES.map((zone, idx) => {
                    const baseFee = Number(getValue("base_travel_flat_fee"));
                    const rateKm = Number(getValue("travel_cost_per_km"));
                    const estFee = Math.round(baseFee + (zone.km * rateKm));

                    return (
                      <tr key={idx}>
                        <td>
                          <code className={styles.plzCode}>{zone.plz}</code>
                        </td>
                        <td>
                          <strong>{zone.region}</strong>
                        </td>
                        <td>{zone.km} km</td>
                        <td>
                          <span className={styles.estCostBadge}>CHF {estFee}.-</span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: LIVE SIMULATOR */}
      {activeTab === "simulator" && (
        <div className={styles.tabContent}>
          <div className={styles.simulatorCard}>
            <div className={styles.sectionHeader}>
              <div>
                <h3 className={styles.sectionTitle}>Live Price Test Bench</h3>
                <p className={styles.sectionDesc}>
                  Test how the currently edited pricing variables compute in real-time before saving or publishing.
                </p>
              </div>
            </div>

            <div className={styles.simGrid}>
              <div className={styles.simForm}>
                <div className={styles.simField}>
                  <label>Property Type:</label>
                  <select value={simProperty} onChange={(e) => setSimProperty(e.target.value)}>
                    <option value="2_5_apartment">2½-Room Apartment</option>
                    <option value="3_5_apartment">3½-Room Apartment</option>
                    <option value="4_5_apartment">4½-Room Apartment</option>
                    <option value="5_5_apartment">5½-Room Apartment</option>
                    <option value="house">Single-Family House</option>
                    <option value="commercial">Commercial Property</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className={styles.simField}>
                  <label>Scope of Work:</label>
                  <select value={simScope} onChange={(e) => setSimScope(e.target.value)}>
                    <option value="walls">Walls Only (0.70x)</option>
                    <option value="ceilings">Ceilings Only (0.50x)</option>
                    <option value="walls_ceilings">Walls & Ceilings (1.00x)</option>
                  </select>
                </div>

                <div className={styles.simField}>
                  <label>Surface Condition:</label>
                  <select value={simCondition} onChange={(e) => setSimCondition(e.target.value)}>
                    <option value="good">Good Condition (1.00x)</option>
                    <option value="minor_repairs">Minor Repairs (+15%)</option>
                    <option value="renovation">Full Renovation (+35%)</option>
                  </select>
                </div>

                <div className={styles.simField}>
                  <label>Customer Postal Code (PLZ):</label>
                  <input
                    type="text"
                    value={simPlz}
                    onChange={(e) => setSimPlz(e.target.value)}
                    placeholder="e.g. 4600, 5000, 8000"
                  />
                </div>
              </div>

              <div className={styles.simResultCard}>
                <div className={styles.simResultHeader}>Estimated Quote Output</div>
                <div className={styles.simBreakdown}>
                  <div className={styles.simRow}>
                    <span>Base Property Price:</span>
                    <strong>CHF {simResult.basePrice}.-</strong>
                  </div>
                  <div className={styles.simRow}>
                    <span>Scope Factor:</span>
                    <span>{simResult.scopeMod}x</span>
                  </div>
                  <div className={styles.simRow}>
                    <span>Condition Factor:</span>
                    <span>{simResult.conditionMod}x</span>
                  </div>
                  <div className={styles.simRow}>
                    <span>Painting Subtotal:</span>
                    <strong>CHF {simResult.subtotal}.-</strong>
                  </div>
                  <div className={styles.simRow}>
                    <span>Travel ({simResult.approxKm} km):</span>
                    <span>+ CHF {simResult.travelCost}.-</span>
                  </div>
                  <div className={styles.simDivider} />
                  <div className={styles.simTotalRow}>
                    <span>Customer Quote Total:</span>
                    <strong className={styles.simTotalNumber}>CHF {simResult.total}.-</strong>
                  </div>
                </div>
                <p className={styles.simNote}>
                  * This estimate is calculated using your current in-editor values.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
