#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const skillRoot = path.resolve(scriptDirectory, "..");
const repositoryRoot = path.dirname(skillRoot);
const issues = [];

const families = new Map([
  ["rhine-lab", "rhine-lab.md"],
  ["lungmen-municipal", "lungmen-municipal.md"],
  ["kazimierz-broadcast", "kazimierz-broadcast.md"],
  ["laterano-notarial", "laterano-notarial.md"],
  ["siracusa-dossier", "siracusa-dossier.md"],
  ["kjerag-alpine", "kjerag-alpine.md"],
  ["iberia-nautical", "iberia-nautical.md"],
  ["yan-archival", "yan-archival.md"],
  ["leithanien-conservatory", "leithanien-conservatory.md"],
  ["penguin-logistics-street", "penguin-logistics-street.md"],
  ["blacksteel-contract", "blacksteel-contract.md"],
  ["ursus-student", "emerging-families.md"],
]);

const profileContracts = {
  "rhine-lab": {
    element: "sample-provenance-capsule",
    layout: "instrument-bench",
    interaction: "diagnostic-plate-2px",
    control: "tolerance-caliper",
  },
  "lungmen-municipal": {
    element: "route-gate-permit",
    layout: "civic-gate-axis",
    interaction: "civic-gate-chamfer",
    control: "ward-gate-matrix",
  },
  "kazimierz-broadcast": {
    element: "live-cut-matrix",
    layout: "broadcast-zones",
    interaction: "broadcast-wedge",
    control: "side-ownership-switch",
  },
  "laterano-notarial": {
    element: "witness-covenant-band",
    layout: "symmetrical-reading-paper",
    interaction: "authority-capsule-double-ring",
    control: "witness-pair-toggle",
  },
  "siracusa-dossier": {
    element: "provenance-tabs",
    layout: "layered-evidence-desk",
    interaction: "docket-tab-folded-edge",
    control: "docket-leaf-tabs",
  },
  "kjerag-alpine": {
    element: "altitude-threshold-ribbon",
    layout: "elevation-ascent",
    interaction: "woven-gate-stitched",
    control: "stitched-weather-gates",
  },
  "iberia-nautical": {
    element: "verified-heading-scale",
    layout: "radial-chart-watch",
    interaction: "porthole-plaque",
    control: "drift-trim-wheel",
  },
  "yan-archival": {
    element: "annotation-margin",
    layout: "scroll-annotation-margin",
    interaction: "folded-record-seal-press",
    control: "seal-press",
  },
  "leithanien-conservatory": {
    element: "cue-ownership-ledger",
    layout: "measured-sequence-field",
    interaction: "cadence-control",
    control: "cadence-stepper",
  },
  "penguin-logistics-street": {
    element: "removable-waybill-stub",
    layout: "diagonal-handoff-lane",
    interaction: "removable-ticket",
    control: "courier-relay-rail",
  },
  "blacksteel-contract": {
    element: "contract-readiness-lock",
    layout: "protected-equipment-rack",
    interaction: "industrial-lock-plate",
    control: "equipment-bay-shutters",
  },
  "ursus-student": {
    element: "supply-responsibility-checklist",
    layout: "repaired-shared-document",
    interaction: "repaired-paper-control",
    control: "shared-supply-tabs",
  },
};

const requiredFiles = [
  "SKILL.md",
  "agents/openai.yaml",
  "assets/icons/LICENSE",
  "assets/licenses/noto-sans-sc/OFL.txt",
  "assets/licenses/noto-serif-sc/OFL.txt",
  "assets/starter/app.js",
  "assets/starter/index.html",
  "assets/starter/styles.css",
  "assets/tokens/terra-faction-ui.tokens.json",
  "references/control-catalog.md",
  "references/depth-levels.md",
  "references/element-grammar.md",
  "references/evidence-policy.md",
  "references/faction-index.md",
  "references/frontend-contract.md",
  "references/interaction-grammar.md",
  "references/layout-grammar.md",
  "references/motion-grammar.md",
  "references/palette-separation.md",
  "references/source-ledger.md",
  "scripts/audit-faction-ui.mjs",
  "scripts/audit-palette-separation.mjs",
  "scripts/scaffold-faction-ui.py",
  "scripts/validate-package.mjs",
];

function issue(code, message) {
  issues.push({ code, message });
}

function relativePath(file) {
  return path.relative(skillRoot, file) || ".";
}

function read(relative) {
  return fs.readFileSync(path.join(skillRoot, relative), "utf8");
}

function walk(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const target = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(target) : [target];
  });
}

function sameKeys(actual, expected) {
  return actual.length === expected.length && expected.every((key) => actual.includes(key));
}

for (const relative of requiredFiles) {
  if (!fs.existsSync(path.join(skillRoot, relative))) {
    issue("missing-file", relative);
  }
}

for (const [family, reference] of families) {
  if (!fs.existsSync(path.join(skillRoot, "references", reference))) {
    issue("missing-family-reference", `${family}: references/${reference}`);
  }
}

const skill = read("SKILL.md");
const frontmatter = skill.match(/^---\n([\s\S]*?)\n---/);
if (!frontmatter) {
  issue("frontmatter", "SKILL.md has no valid YAML frontmatter block.");
} else {
  const topLevelKeys = [...frontmatter[1].matchAll(/^([a-z][a-z0-9-]*):/gm)].map(
    (match) => match[1],
  );
  if (!sameKeys(topLevelKeys, ["name", "description"])) {
    issue("frontmatter-keys", `Expected only name and description; found ${topLevelKeys.join(", ")}.`);
  }
  if (!/^name:\s*terra-faction-ui\s*$/m.test(frontmatter[1])) {
    issue("skill-name", "SKILL.md name must be terra-faction-ui.");
  }
}
if (skill.split(/\r?\n/).length > 500) {
  issue("skill-length", "SKILL.md exceeds 500 lines.");
}

const markdownFiles = walk(skillRoot).filter((file) => path.extname(file) === ".md");
for (const file of markdownFiles) {
  const content = fs.readFileSync(file, "utf8");
  for (const match of content.matchAll(/\[[^\]]*]\(([^)]+)\)/g)) {
    let target = match[1].trim().replace(/^<|>$/g, "");
    if (/^(?:https?:|mailto:|data:|#)/i.test(target)) {
      continue;
    }
    target = target.split("#", 1)[0];
    if (!target || target.includes("<family>")) {
      continue;
    }
    const resolved = path.resolve(path.dirname(file), decodeURIComponent(target));
    if (!fs.existsSync(resolved)) {
      issue("broken-link", `${relativePath(file)} -> ${target}`);
    }
  }
}

const tokenPath = path.join(skillRoot, "assets", "tokens", "terra-faction-ui.tokens.json");
let tokens;
try {
  tokens = JSON.parse(fs.readFileSync(tokenPath, "utf8"));
} catch (error) {
  issue("tokens-json", error.message);
}

const familyKeys = [...families.keys()];
if (tokens) {
  const tokenFamilies = Object.keys(tokens.factions ?? {});
  const interactionFamilies = Object.keys(tokens.interactionProfiles ?? {});
  if (!sameKeys(tokenFamilies, familyKeys)) {
    issue("token-families", `Expected twelve faction token entries; found ${tokenFamilies.length}.`);
  }
  if (!sameKeys(interactionFamilies, familyKeys)) {
    issue(
      "interaction-families",
      `Expected twelve interaction profile entries; found ${interactionFamilies.length}.`,
    );
  }
  if (!/^\d+\.\d+\.\d+$/.test(tokens.metadata?.packageVersion ?? "")) {
    issue("package-version", "Token metadata.packageVersion must be semantic x.y.z.");
  }
  for (const family of familyKeys) {
    const controls = tokens.interactionProfiles?.[family]?.signatureControls;
    if (!Array.isArray(controls) || controls.length < 2 || new Set(controls).size !== controls.length) {
      issue("signature-controls", `${family} needs at least two unique signature controls.`);
    }
  }
}

const factionIndex = read("references/faction-index.md");
const starterIndex = read("assets/starter/index.html");
const starterApp = read("assets/starter/app.js");
const starterStyles = read("assets/starter/styles.css");
const scaffold = read("scripts/scaffold-faction-ui.py");
for (const [family, reference] of families) {
  if (!factionIndex.includes(`\`${family}\``) || !factionIndex.includes(`(${reference})`)) {
    issue("faction-index", `${family} is not routed to ${reference}.`);
  }
  if (!starterIndex.includes(`value="${family}"`)) {
    issue("starter-option", `${family} is missing from the starter faction selector.`);
  }
  if (family !== "rhine-lab" && !starterStyles.includes(`[data-terra-faction="${family}"]`)) {
    issue("starter-palette", `${family} is missing from starter palette selectors.`);
  }
  const contract = profileContracts[family];
  for (const [attribute, value] of Object.entries(contract)) {
    const dataAttribute = `data-terra-${attribute}`;
    if (!scaffold.includes(`"${dataAttribute}": "${value}"`)) {
      issue("scaffold-contract", `${family} is missing ${dataAttribute}=${value}.`);
    }
    const appPattern = attribute === "control" ? `key: "${value}"` : `"${family}": "${value}"`;
    if (!starterApp.includes(appPattern)) {
      issue("starter-contract", `${family} is missing runtime ${attribute}=${value}.`);
    }
  }
}

const agent = read("agents/openai.yaml");
const shortDescription = agent.match(/short_description:\s*"([^"]+)"/)?.[1] ?? "";
if (shortDescription.length < 25 || shortDescription.length > 64) {
  issue("agent-description", "agents/openai.yaml short_description must be 25–64 characters.");
}
if (!agent.includes("$terra-faction-ui")) {
  issue("agent-prompt", "agents/openai.yaml default_prompt must mention $terra-faction-ui.");
}

const repositoryPackagePath = path.join(repositoryRoot, "package.json");
const repositoryVersionPath = path.join(repositoryRoot, "VERSION");
if (fs.existsSync(repositoryPackagePath) && fs.existsSync(repositoryVersionPath) && tokens) {
  const repositoryPackage = JSON.parse(fs.readFileSync(repositoryPackagePath, "utf8"));
  const releaseVersion = fs.readFileSync(repositoryVersionPath, "utf8").trim();
  const versions = [
    repositoryPackage.version,
    releaseVersion,
    tokens.metadata?.packageVersion,
  ];
  if (new Set(versions).size !== 1) {
    issue("version-sync", `package.json, VERSION, and tokens disagree: ${versions.join(", ")}.`);
  }
}

if (issues.length > 0) {
  for (const item of issues) {
    console.error(`ERROR [${item.code}] ${item.message}`);
  }
  console.error(`Package validation failed with ${issues.length} error(s).`);
  process.exit(1);
}

console.log(
  `PASS: Terra Faction UI ${tokens.metadata.packageVersion}; ${familyKeys.length} families, ${markdownFiles.length} Markdown files, starter, tokens, scripts, licenses, and agent metadata are synchronized.`,
);
