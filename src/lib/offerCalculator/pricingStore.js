import fs from "node:fs/promises";
import path from "node:path";
import { sql } from "@/lib/db";
import { DEFAULT_PRICING_SETTINGS } from "./pricingSettings";

const DATA_FILE_PATH = path.join(process.cwd(), "src", "data", "pricing-settings.json");

/**
 * In-memory cached settings to prevent unnecessary disk/db reads on every high-frequency calculation.
 */
let memoryCache = null;
let cacheTimestamp = 0;
const CACHE_TTL_MS = 2000; // 2 seconds

/**
 * Reads settings from the JSON fallback file.
 */
async function readFromFile() {
  try {
    const raw = await fs.readFile(DATA_FILE_PATH, "utf-8");
    const parsed = JSON.parse(raw);
    return { ...DEFAULT_PRICING_SETTINGS, ...parsed };
  } catch (err) {
    console.warn("Could not read pricing-settings.json, using defaults:", err.message);
    return { ...DEFAULT_PRICING_SETTINGS };
  }
}

/**
 * Writes settings to the JSON fallback file.
 */
async function writeToFile(settings) {
  try {
    const dir = path.dirname(DATA_FILE_PATH);
    await fs.mkdir(dir, { recursive: true });
    await fs.writeFile(DATA_FILE_PATH, JSON.stringify(settings, null, 2), "utf-8");
  } catch (err) {
    console.error("Failed writing to pricing-settings.json:", err.message);
  }
}

/**
 * Loads dynamic pricing settings.
 * First tries to load from PostgreSQL pricing_settings table.
 * If database is not reachable (e.g., local dev), falls back to JSON file.
 */
export async function loadPricingSettings() {
  const now = Date.now();
  if (memoryCache && now - cacheTimestamp < CACHE_TTL_MS) {
    return memoryCache;
  }

  let dbSettings = null;
  try {
    const rows = await sql`select key, value from pricing_settings`;
    if (rows && rows.length > 0) {
      dbSettings = {};
      for (const row of rows) {
        const num = Number(row.value);
        if (!Number.isNaN(num)) {
          dbSettings[row.key] = num;
        }
      }
    }
  } catch {
    // Database offline or query failed, continue to file fallback
  }

  const fileSettings = await readFromFile();
  const merged = {
    ...DEFAULT_PRICING_SETTINGS,
    ...fileSettings,
    ...(dbSettings || {})
  };

  memoryCache = merged;
  cacheTimestamp = now;
  return merged;
}

/**
 * Saves pricing updates.
 * Updates the JSON file and tries to persist to PostgreSQL if connected.
 * @param {Array<{ key: string, value: number|string }>} updates
 */
export async function savePricingSettings(updates) {
  if (!Array.isArray(updates) || updates.length === 0) {
    return loadPricingSettings();
  }

  // Load current settings
  const current = await loadPricingSettings();
  const updated = { ...current };

  for (const item of updates) {
    if (item.key) {
      const num = Number(item.value);
      if (!Number.isNaN(num)) {
        updated[item.key] = num;
      }
    }
  }

  // Persist to JSON file
  await writeToFile(updated);

  // Invalidate memory cache
  memoryCache = updated;
  cacheTimestamp = Date.now();

  // Attempt to persist to PostgreSQL if available
  try {
    for (const item of updates) {
      if (item.key && item.value !== undefined) {
        await sql`
          insert into pricing_settings (key, value, updated_at)
          values (${item.key}, ${String(item.value)}, now())
          on conflict (key) do update set
            value = ${String(item.value)},
            updated_at = now()
        `;
      }
    }
  } catch {
    // DB offline, file store is authoritative
  }

  return updated;
}

/**
 * Resets all pricing settings back to the recommended Swiss painter average defaults.
 */
export async function resetToAverageDefaults() {
  const defaults = { ...DEFAULT_PRICING_SETTINGS };
  await writeToFile(defaults);

  memoryCache = defaults;
  cacheTimestamp = Date.now();

  try {
    for (const [key, value] of Object.entries(defaults)) {
      await sql`
        insert into pricing_settings (key, value, updated_at)
        values (${key}, ${String(value)}, now())
        on conflict (key) do update set
          value = ${String(value)},
          updated_at = now()
      `;
    }
  } catch {
    // DB offline, file store updated
  }

  return defaults;
}
