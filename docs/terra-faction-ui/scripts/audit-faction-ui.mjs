#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";

const targetArg = process.argv[2];

if (!targetArg) {
  console.error("Usage: audit-faction-ui.mjs <file-or-directory>");
  process.exit(2);
}

const target = path.resolve(targetArg);
const supported = new Set([".html", ".css", ".js", ".mjs", ".jsx", ".ts", ".tsx", ".vue", ".svelte"]);
const allowedFactions = new Set([
  "rhine-lab",
  "lungmen-municipal",
  "kazimierz-broadcast",
  "laterano-notarial",
  "siracusa-dossier",
  "kjerag-alpine",
  "iberia-nautical",
  "yan-archival",
  "leithanien-conservatory",
  "penguin-logistics-street",
  "blacksteel-contract",
  "ursus-student"
]);
const allowedDepths = new Set(["minimal", "moderate", "complex", "maximal"]);
const allowedLayouts = new Set([
  "instrument-bench",
  "civic-gate-axis",
  "broadcast-zones",
  "symmetrical-reading-paper",
  "layered-evidence-desk",
  "elevation-ascent",
  "radial-chart-watch",
  "scroll-annotation-margin",
  "measured-sequence-field",
  "diagonal-handoff-lane",
  "protected-equipment-rack",
  "repaired-shared-document"
]);
const allowedElements = new Set([
  "sample-provenance-capsule",
  "route-gate-permit",
  "live-cut-matrix",
  "witness-covenant-band",
  "provenance-tabs",
  "altitude-threshold-ribbon",
  "verified-heading-scale",
  "annotation-margin",
  "cue-ownership-ledger",
  "removable-waybill-stub",
  "contract-readiness-lock",
  "supply-responsibility-checklist"
]);
const allowedInteractions = new Set([
  "diagnostic-plate-2px",
  "civic-gate-chamfer",
  "broadcast-wedge",
  "authority-capsule-double-ring",
  "docket-tab-folded-edge",
  "woven-gate-stitched",
  "porthole-plaque",
  "folded-record-seal-press",
  "cadence-control",
  "removable-ticket",
  "industrial-lock-plate",
  "repaired-paper-control"
]);
const allowedSignatureControls = new Set([
  "tolerance-caliper",
  "ward-gate-matrix",
  "side-ownership-switch",
  "witness-pair-toggle",
  "docket-leaf-tabs",
  "stitched-weather-gates",
  "drift-trim-wheel",
  "seal-press",
  "cadence-stepper",
  "courier-relay-rail",
  "equipment-bay-shutters",
  "shared-supply-tabs"
]);
const issues = [];

function add(level, code, message, file = target) {
  issues.push({ level, code, message, file: path.relative(process.cwd(), file) || "." });
}

function walk(entry) {
  const stat = fs.statSync(entry);
  if (stat.isFile()) {
    return supported.has(path.extname(entry).toLowerCase()) ? [entry] : [];
  }

  return fs.readdirSync(entry, { withFileTypes: true }).flatMap((item) => {
    if (item.name === "node_modules" || item.name === ".git" || item.name === "dist") {
      return [];
    }
    return walk(path.join(entry, item.name));
  });
}

if (!fs.existsSync(target)) {
  console.error(`Target does not exist: ${target}`);
  process.exit(2);
}

const files = walk(target);
if (files.length === 0) {
  console.error("No supported frontend files found.");
  process.exit(2);
}

const records = files.map((file) => ({
  file,
  ext: path.extname(file).toLowerCase(),
  text: fs.readFileSync(file, "utf8")
}));

for (const record of records) {
  const productionUrl = /(?:https?:)?\/\/[^"'()\s]*(?:hypergryph|hycdn)\.[^"'()\s]*/i;
  if (productionUrl.test(record.text) || /official-evidence|curated-announcement-images/i.test(record.text)) {
    add("error", "production-asset", "Official production or research-only asset reference found.", record.file);
  }

  if (/\b(?:SYS|CH|NODE|SECTOR)-?\d{3,}\b|random telemetry|scanline|glitch noise/i.test(record.text)) {
    add("warning", "fiction-noise", "Potential decorative telemetry or imitation cliché; verify that it owns real state.", record.file);
  }
}

for (const record of records.filter(({ ext }) => ext === ".html")) {
  const factionMatch = record.text.match(/data-terra-faction="([^"]+)"/);
  const depthMatch = record.text.match(/data-terra-depth="([^"]+)"/);
  const elementMatch = record.text.match(/data-terra-element="([^"]+)"/);
  const layoutMatch = record.text.match(/data-terra-layout="([^"]+)"/);
  const interactionMatch = record.text.match(/data-terra-interaction="([^"]+)"/);
  const signatureControlMatch = record.text.match(/data-terra-control="([^"]+)"/);

  if (!factionMatch) {
    add("error", "missing-faction", "HTML root is missing data-terra-faction.", record.file);
  } else if (!allowedFactions.has(factionMatch[1])) {
    add("error", "invalid-faction", `Unknown faction key: ${factionMatch[1]}`, record.file);
  }

  if (!depthMatch) {
    add("error", "missing-depth", "HTML root is missing data-terra-depth.", record.file);
  } else if (!allowedDepths.has(depthMatch[1])) {
    add("error", "invalid-depth", `Unknown depth key: ${depthMatch[1]}`, record.file);
  }

  if (!elementMatch) {
    add("warning", "missing-element-profile", "HTML root is missing data-terra-element; declare the faction-owned information element.", record.file);
  } else if (!allowedElements.has(elementMatch[1])) {
    add("warning", "invalid-element-profile", `Unknown element profile: ${elementMatch[1]}`, record.file);
  }

  if (!layoutMatch) {
    add("warning", "missing-layout-profile", "HTML root is missing data-terra-layout; declare the faction-owned spatial profile.", record.file);
  } else if (!allowedLayouts.has(layoutMatch[1])) {
    add("warning", "invalid-layout-profile", `Unknown layout profile: ${layoutMatch[1]}`, record.file);
  }

  if (!interactionMatch) {
    add("warning", "missing-interaction-profile", "HTML root is missing data-terra-interaction; declare the fixed faction control silhouette.", record.file);
  } else if (!allowedInteractions.has(interactionMatch[1])) {
    add("warning", "invalid-interaction-profile", `Unknown interaction profile: ${interactionMatch[1]}`, record.file);
  }

  if (!signatureControlMatch && depthMatch?.[1] !== "minimal") {
    add("warning", "missing-signature-control", "HTML root is missing data-terra-control; declare one fixed faction-owned control mechanic.", record.file);
  } else if (signatureControlMatch && !allowedSignatureControls.has(signatureControlMatch[1])) {
    add("warning", "invalid-signature-control", `Unknown signature control: ${signatureControlMatch[1]}`, record.file);
  }

  if (!/<html\b[^>]*\blang=/i.test(record.text)) {
    add("warning", "missing-lang", "Document is missing an html lang attribute.", record.file);
  }

  for (const image of record.text.matchAll(/<img\b[^>]*>/gi)) {
    if (!/\balt\s*=/i.test(image[0])) {
      add("warning", "missing-alt", "Image is missing an alt attribute.", record.file);
    }
  }
}

const css = records.filter(({ ext }) => ext === ".css").map(({ text }) => text).join("\n");
const source = records.map(({ text }) => text).join("\n");
const declaredDepths = new Set(
  records
    .filter(({ ext }) => ext === ".html")
    .flatMap(({ text }) => {
      const root = text.match(/<html\b[^>]*>/i)?.[0] ?? "";
      return [...root.matchAll(/data-terra-depth=["']([^"']+)["']/g)].map(
        (match) => match[1],
      );
    }),
);
if (css) {
  const hasAnimation = /@keyframes\b|\banimation(?:-name)?\s*:/.test(css);
  if (!/:focus-visible\b/.test(css)) {
    add("warning", "focus-visible", "No :focus-visible treatment found.");
  }
  if (!/--(?:study-)?control-radius\b/.test(css) || !/\btranslate\s*:/.test(css)) {
    add("warning", "interaction-grammar", "No fixed control radius and directional press grammar found.");
  }
  if (!/prefers-reduced-motion\s*:\s*reduce/.test(css)) {
    add("warning", "reduced-motion", "No prefers-reduced-motion: reduce fallback found.");
  }
  if (hasAnimation && !/prefers-reduced-motion\s*:\s*no-preference/.test(css)) {
    add("warning", "motion-gate", "Animation found without a prefers-reduced-motion: no-preference gate.");
  }
  if (!/@media\s*\([^)]*max-width/i.test(css)) {
    add("warning", "responsive", "No max-width responsive breakpoint found.");
  }
  if (!/input[^>]*type\s*=\s*["']checkbox["']/.test(source)) {
    add("warning", "binary-control", "No checkbox or equivalent binary task control found.");
  }
  if (!/input[^>]*type\s*=\s*["']range["']/.test(source)) {
    add("warning", "continuous-control", "No range or equivalent continuous/stepped task control found.");
  }
  if (!/data-terra-layout|layoutProfiles/.test(source)) {
    add("warning", "layout-grammar", "No fixed faction layout profile declaration found.");
  }
  if (!/data-terra-control|signatureProfiles|signature-control/.test(source)) {
    add("warning", "signature-control", "No faction-owned signature control mechanic found; moderate depth requires one beyond generic checkbox/range/button styling.");
  }

  if (declaredDepths.has("complex") || declaredDepths.has("maximal")) {
    const completeControls = [
      ["text-control", /<input\b[^>]*type\s*=\s*["'](?:text|email|search|url|tel|number)["']|<textarea\b/i, "No editable text input or textarea found for the complex/maximal control contract."],
      ["choice-control", /<select\b|role\s*=\s*["'](?:menu|listbox)["']/i, "No select, menu, or listbox found for the complex/maximal control contract."],
      ["radio-control", /<input\b[^>]*type\s*=\s*["']radio["']|role\s*=\s*["']radio["']/i, "No radio group found for the complex/maximal control contract."],
      ["switch-control", /role\s*=\s*["']switch["']|data-(?:terra-)?switch/i, "No switch semantics found for the complex/maximal control contract."],
      ["progress-control", /<progress\b|role\s*=\s*["']progressbar["']/i, "No progress semantics found for the complex/maximal control contract."],
      ["confirmation-dialog", /<dialog\b|role\s*=\s*["']dialog["']|aria-modal\s*=\s*["']true["']/i, "No confirmation dialog found for the complex/maximal control contract."],
      ["transient-feedback", /aria-live\s*=|role\s*=\s*["'](?:status|alert)["']|toast/i, "No live transient result feedback found for the complex/maximal control contract."],
      ["busy-state", /aria-busy\s*=|data-(?:is-)?busy|is-busy/i, "No explicit busy state found for the complex/maximal control contract."],
    ];

    for (const [code, pattern, message] of completeControls) {
      if (!pattern.test(source)) {
        add("warning", code, message);
      }
    }
  }
}

const severity = { error: 0, warning: 1 };
issues.sort((a, b) => severity[a.level] - severity[b.level] || a.file.localeCompare(b.file));

if (issues.length === 0) {
  console.log(`PASS: ${files.length} frontend files checked; no issues found.`);
  process.exit(0);
}

for (const issue of issues) {
  console.log(`${issue.level.toUpperCase()} [${issue.code}] ${issue.file}: ${issue.message}`);
}

const errorCount = issues.filter(({ level }) => level === "error").length;
const warningCount = issues.length - errorCount;
console.log(`Checked ${files.length} files: ${errorCount} error(s), ${warningCount} warning(s).`);
process.exit(errorCount > 0 ? 1 : 0);
