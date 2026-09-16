/** Ensures shared calculator options stay accepted by server validation. */
import {
  COMPONENT_IDS, QUANTITY_KEYS, SERVICE_IDS, componentOptions, facadeComponent,
  propertyTypes, quickPropertyTypes, serviceOptions
} from "../src/lib/offerCalculator/catalog.js";

const problems = [];
const componentIds = new Set([...componentOptions.map((item) => item.id), facadeComponent.id]);
const serviceIds = new Set(serviceOptions.map((item) => item.id));
const quantityKeys = new Set([...componentOptions, facadeComponent].map((item) => item.quantityKey).filter(Boolean));

for (const id of componentIds) if (!COMPONENT_IDS.has(id)) problems.push(`component "${id}" is missing from COMPONENT_IDS`);
for (const id of serviceIds) if (!SERVICE_IDS.has(id)) problems.push(`service "${id}" is missing from SERVICE_IDS`);
for (const key of quantityKeys) if (!QUANTITY_KEYS.has(key)) problems.push(`quantity key "${key}" is missing from QUANTITY_KEYS`);
for (const item of serviceOptions) for (const id of item.components || []) {
  if (!COMPONENT_IDS.has(id)) problems.push(`service "${item.id}" references unknown component "${id}"`);
}
for (const item of [...propertyTypes, ...quickPropertyTypes]) {
  if (!item.id || !item.title) problems.push("property option is missing an id or title");
}

if (problems.length) {
  console.error(`Calculator catalog mismatch:\n${problems.map((problem) => `  - ${problem}`).join("\n")}`);
  process.exit(1);
}

console.log(`Calculator catalog OK — ${componentIds.size} components, ${serviceIds.size} services, ${quantityKeys.size} quantity keys and ${propertyTypes.length + quickPropertyTypes.length} property options checked.`);
