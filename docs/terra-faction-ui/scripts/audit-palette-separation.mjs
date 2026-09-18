#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const defaultTokenPath = path.join(
  scriptDir,
  "..",
  "assets",
  "tokens",
  "terra-faction-ui.tokens.json",
);
const defaultStarterPath = path.join(
  scriptDir,
  "..",
  "assets",
  "starter",
  "styles.css",
);
const tokenPath = path.resolve(process.argv[2] ?? defaultTokenPath);
const starterPath = path.resolve(process.argv[3] ?? defaultStarterPath);
const document = JSON.parse(fs.readFileSync(tokenPath, "utf8"));
const starterCss = fs.readFileSync(starterPath, "utf8");
const factions = document.factions ?? {};
const errors = [];
const lanes = new Map();
const requiredColors = [
  "field",
  "ink",
  "surface",
  "rule",
  "signal",
  "signalInk",
  "signalText",
  "critical",
];
const requiredMetadata = ["toneLane", "mode", "temperature", "signalRole"];
const provisionalKeys = new Set([
  "ursus-student",
]);

function parseHex(value) {
  if (typeof value !== "string" || !/^#[0-9a-f]{6}$/i.test(value)) {
    return null;
  }
  return [
    Number.parseInt(value.slice(1, 3), 16),
    Number.parseInt(value.slice(3, 5), 16),
    Number.parseInt(value.slice(5, 7), 16),
  ];
}

function srgbChannel(value) {
  const channel = value / 255;
  return channel <= 0.04045
    ? channel / 12.92
    : ((channel + 0.055) / 1.055) ** 2.4;
}

function luminance(rgb) {
  const [r, g, b] = rgb.map(srgbChannel);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function contrast(first, second) {
  const bright = Math.max(luminance(first), luminance(second));
  const dark = Math.min(luminance(first), luminance(second));
  return (bright + 0.05) / (dark + 0.05);
}

function lab(rgb) {
  const [r, g, b] = rgb.map(srgbChannel);
  const x = (0.4124 * r + 0.3576 * g + 0.1805 * b) / 0.95047;
  const y = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  const z = (0.0193 * r + 0.1192 * g + 0.9505 * b) / 1.08883;
  const f = (value) =>
    value > 0.008856 ? Math.cbrt(value) : 7.787 * value + 16 / 116;
  const fx = f(x);
  const fy = f(y);
  const fz = f(z);
  return [116 * fy - 16, 500 * (fx - fy), 200 * (fy - fz)];
}

function deltaE(first, second) {
  const left = lab(first);
  const right = lab(second);
  return Math.sqrt(
    left.reduce((sum, value, index) => sum + (value - right[index]) ** 2, 0),
  );
}

function readVariables(block) {
  const variables = new Map();
  for (const match of block.matchAll(/--([a-z0-9-]+)\s*:\s*(#[0-9a-f]{6})\s*;/gi)) {
    variables.set(match[1].toLowerCase(), match[2].toLowerCase());
  }
  return variables;
}

function colorVariable(field) {
  return field.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);
}

const starterVariables = new Map();
const rootMatch = starterCss.match(/:root\s*\{([^}]*)\}/);
if (rootMatch) {
  starterVariables.set("rhine-lab", readVariables(rootMatch[1]));
}
for (const match of starterCss.matchAll(
  /\[data-terra-faction="([^"]+)"\]\s*\{([^}]*)\}/g,
)) {
  const key = match[1];
  const existing = starterVariables.get(key) ?? new Map();
  for (const [name, value] of readVariables(match[2])) {
    existing.set(name, value);
  }
  starterVariables.set(key, existing);
}

for (const [key, faction] of Object.entries(factions)) {
  for (const field of requiredMetadata) {
    if (!faction[field]) {
      errors.push(`${key}: missing ${field}`);
    }
  }

  for (const field of requiredColors) {
    if (!parseHex(faction[field])) {
      errors.push(`${key}: ${field} must be a six-digit hex color`);
    }
  }

  const cssVariables = starterVariables.get(key);
  if (!cssVariables) {
    errors.push(`${key}: missing starter palette selector`);
  } else {
    for (const field of requiredColors) {
      const variable = colorVariable(field);
      const tokenValue = faction[field]?.toLowerCase();
      const starterValue = cssVariables.get(variable);
      if (!starterValue) {
        errors.push(`${key}: starter is missing --${variable}`);
      } else if (starterValue !== tokenValue) {
        errors.push(
          `${key}: starter --${variable} (${starterValue}) differs from token ${field} (${tokenValue})`,
        );
      }
    }
  }

  if (lanes.has(faction.toneLane)) {
    errors.push(
      `${key}: toneLane duplicates ${lanes.get(faction.toneLane)} (${faction.toneLane})`,
    );
  } else if (faction.toneLane) {
    lanes.set(faction.toneLane, key);
  }

  if (provisionalKeys.has(key) && faction.provisional !== true) {
    errors.push(`${key}: low-confidence family must remain provisional`);
  }

  const field = parseHex(faction.field);
  const ink = parseHex(faction.ink);
  const signal = parseHex(faction.signal);
  const signalInk = parseHex(faction.signalInk);
  const signalText = parseHex(faction.signalText);

  if (field && ink && contrast(field, ink) < 4.5) {
    errors.push(`${key}: field/ink contrast is below 4.5:1`);
  }
  if (field && signalInk && contrast(field, signalInk) < 4.5) {
    errors.push(`${key}: field/signalInk contrast is below 4.5:1`);
  }
  if (signal && signalText && contrast(signal, signalText) < 4.5) {
    errors.push(`${key}: signal/signalText contrast is below 4.5:1`);
  }
}

const entries = Object.entries(factions);
const distances = [];

for (let leftIndex = 0; leftIndex < entries.length; leftIndex += 1) {
  for (let rightIndex = leftIndex + 1; rightIndex < entries.length; rightIndex += 1) {
    const [leftKey, left] = entries[leftIndex];
    const [rightKey, right] = entries[rightIndex];
    const leftField = parseHex(left.field);
    const rightField = parseHex(right.field);
    const leftSignal = parseHex(left.signal);
    const rightSignal = parseHex(right.signal);
    if (!leftField || !rightField || !leftSignal || !rightSignal) {
      continue;
    }

    const fieldDistance = deltaE(leftField, rightField);
    const signalDistance = deltaE(leftSignal, rightSignal);
    distances.push({ leftKey, rightKey, fieldDistance, signalDistance });

    if (fieldDistance < 12 && signalDistance < 24) {
      errors.push(
        `${leftKey} and ${rightKey}: palette collision (field ΔE ${fieldDistance.toFixed(1)}, signal ΔE ${signalDistance.toFixed(1)})`,
      );
    }
  }
}

if (errors.length > 0) {
  for (const error of errors) {
    console.error(`ERROR ${error}`);
  }
  console.error(`Palette audit failed with ${errors.length} error(s).`);
  process.exit(1);
}

distances.sort(
  (left, right) =>
    left.fieldDistance + left.signalDistance - (right.fieldDistance + right.signalDistance),
);
const closest = distances[0];
console.log(
  `PASS: ${entries.length} unique tone lanes; contrast, collision, and starter-sync checks passed.`,
);
if (closest) {
  console.log(
    `Closest pair: ${closest.leftKey} / ${closest.rightKey} (field ΔE ${closest.fieldDistance.toFixed(1)}, signal ΔE ${closest.signalDistance.toFixed(1)}).`,
  );
}
