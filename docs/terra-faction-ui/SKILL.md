---
name: terra-faction-ui
description: "Design, implement, audit, or refactor original web and game-adjacent interfaces with evidence-based visual grammars for Arknights/Terra factions and regions, including Rhine Lab, Lungmen, Kazimierz, Laterano, Siracusa, Kjerag, Iberia/Aegir, Yan, Leithanien, Penguin Logistics, Blacksteel, and Ursus. Use for faction-themed dashboards, dossiers, archives, routes, reports, launchers, menus, HUD-like panels, event pages, design systems, HTML/CSS/JS/React components, and visual QA where faction identity must be distinct without copying protected logos, artwork, screenshots, fonts, or production assets."
---

# Terra Faction UI

Create original faction-specific interfaces from documented visual evidence. Keep faction family, application depth, and screen task independent so a Rhine Lab archive and a Rhine Lab route planner share identity without sharing one rigid layout.

## Start here

1. Inspect the target project, framework, viewport, existing tokens, content, and primary action.
2. Choose exactly one faction family from [references/faction-index.md](references/faction-index.md).
3. Choose one application depth from [references/depth-levels.md](references/depth-levels.md):
   - `1 / minimal / 极简`
   - `2 / moderate / 中等`
   - `3 / complex / 复杂`
   - `4 / maximal / 极繁`
4. Choose the real screen task: `archive`, `dashboard`, `dossier`, `route`, `report`, `menu`, `store`, or `event`.
5. Always read [references/palette-separation.md](references/palette-separation.md), [references/element-grammar.md](references/element-grammar.md), [references/layout-grammar.md](references/layout-grammar.md), [references/interaction-grammar.md](references/interaction-grammar.md), [references/control-catalog.md](references/control-catalog.md), [references/motion-grammar.md](references/motion-grammar.md), [references/evidence-policy.md](references/evidence-policy.md), [references/frontend-contract.md](references/frontend-contract.md), and only the selected faction reference.
6. Read [references/source-ledger.md](references/source-ledger.md) when sourcing, attributing, refreshing, or packaging evidence and assets.

Default to `moderate` for productivity interfaces and `complex` for game-adjacent showcases when the user does not specify depth. State the assumption. Ask only when a depth choice materially changes scope, performance, or asset production.

## Lock the contract

Before implementation, state:

```text
faction: rhine-lab
confidence: high
depth: moderate
task: dashboard
tone lane: cool-light-laboratory
evidence pattern: diagnostic panes + specimen band + one hazard state
primary action: review and approve the selected experiment
```

Treat the axes as orthogonal:

- Faction controls composition, material cues, type contrast, signal semantics, and motion character.
- Depth controls shell coverage, number of meaningful layers, component coverage, motion coordination, and responsive re-art-direction.
- Task controls information ownership and component choice.

Do not average multiple factions. If the user asks for a crossover, choose one structural owner and borrow one constrained trait from the secondary faction.

Palette separation is unconditional. Compare the selected family with the complete matrix in `references/palette-separation.md` on every invocation, even when the prompt names only one faction. Use that family's fixed default tone lane unless the user explicitly requests another palette or accessibility requires a documented adjustment.

Historical and social context constraints in the selected family reference are unconditional too. Apply them every time that family is selected, not only in comparison prompts. Do not let an early sampled accent, generic mood board, or convenient component theme override a documented faction-context correction.

## Respect evidence confidence

- `high`: implement the documented recipe directly while keeping code and artwork original.
- `medium-low`: use the recipe as a provisional direction, label it as an inference, and avoid claiming stable official tokens.
- `low`: do not lock a full design system from the early evidence alone. Either research a newer official surface or make the extrapolation explicit.

Never convert one sampled accent into a timeless faction color. Promote a motif only when it repeats across official images or another official surface independently reinforces it.

## Implement

- Start from semantic content, real state, and the primary decision.
- Reuse project components and conventions. For a new vanilla prototype, copy `assets/starter/` with `scripts/scaffold-faction-ui.py`.
- Use root attributes when practical:

  ```html
  <html data-terra-faction="rhine-lab" data-terra-depth="moderate">
  ```

- Keep faction tokens and depth tokens separate. Changing depth must not alter copy, accessible names, or task semantics.
- Use the original starter tokens as safe seeds, not official palette claims.
- Preserve the selected family's default `toneLane`, light/dark mode, temperature, and signal group. Do not drift toward another family's lane because a reference screenshot, existing component, or preferred color is convenient.
- Let one neutral field dominate. Reserve one signal for selection, action, progress, judgment, or exception.
- Translate material cues into bounded structural owners such as an identity spine, section divider, reading surface, route gate, or state strip. Keep them small enough to preserve text contrast, and never paste a photoreal material texture across the entire application.
- Apply the selected family’s fixed element profile from `references/element-grammar.md`. At `moderate` and above, include one structural identity element, one state instrument, and one decision artifact. These must remain distinguishable in grayscale and own real information.
- Apply the selected family’s fixed spatial profile from `references/layout-grammar.md`. Change the dominant axis, navigation position, stage proportion, decision position, and instrument relationship as required; do not reuse one three-column dashboard shell across factions.
- Apply the selected family’s fixed control profile from `references/interaction-grammar.md` on every invocation. Differentiate task-owned controls through corner topology, boundary rhythm, press direction, selected state, and focus silhouette; changing only the palette or one global radius is not sufficient.
- Keep primary actions and secondary selectors related but non-identical. Reserve the profile’s strongest silhouette for commitment, use a quieter version for selection, and keep shared application settings neutral when no faction owns them.
- At `moderate` and above, include a meaningful selection/navigation control, a binary control, and a continuous or stepped control when the task supports them. Give checkboxes, sliders, hover, disabled, focus, and committed states the selected faction’s topology and motion.
- Apply the signature-control budget from `references/control-catalog.md` on every single-faction invocation. At `moderate`, add at least one faction-owned control with a task-specific mechanic beyond ordinary checkbox/range/button styling. At `complex` and `maximal`, add at least two controls with different mechanics. This is a fixed trigger, not a comparison-only enhancement.
- When the user asks for a control showcase, component system, UI kit, or “complete controls,” apply the traditional-control completeness contract in `references/interaction-grammar.md`. At `complex` and `maximal`, cover text input with clear and validation, select or menu, radio, checkbox, switch, range or stepper, progress, disabled and busy states, confirmation dialog, and transient result feedback. Every control must update real local task state; static component pictures do not satisfy this contract.
- Apply the enrichment budget on every single-faction invocation, not only during comparisons. At `moderate`, add one data-owning secondary instrument from the fixed faction profile when real product data supports it; at `complex`, allow up to two. Connect it to selection, progress, or commitment instead of leaving it as static decoration.
- Give motion the same faction ownership as material and composition. Apply the selected family's fixed reveal, instrument, and commit behavior from `references/motion-grammar.md` even when no comparison prompt is present.
- Build motion in three layers: one coordinated arrival sequence, state-owned instrument motion, and direct selection or commitment feedback. At `moderate`, allow only one restrained persistent attention loop; at `complex` and `maximal`, coordinate additional motion families without multiplying decorative loops.
- Keep the information correct at every animation frame. Motion may reveal, connect, confirm, or redirect attention, but must not fabricate state, delay essential values, or become the only carrier of status.
- Generate diagrams, grids, stamps, route lines, textures, and instruments with original CSS/SVG.
- Use licensed icons from `assets/icons/` or another verified open set. Keep the bundled ISC notice.
- Use safe font stacks or the OFL-licensed Noto families documented in `assets/licenses/`.
- Assign each persistent datum one visual owner. Do not repeat the same metric in a dossier, status rail, and footer.
- Recompose portrait layouts; do not scale down desktop absolute positioning.
- Preserve keyboard access, visible focus, semantic controls, readable contrast, reduced motion, and meaningful alt text.

## Combine with Ark UI

This skill is standalone and must not import files from `ark-ui` at runtime. When both skills are invoked:

1. Keep one shared application depth.
2. Let Terra Faction UI own faction-specific composition, material, and signal semantics.
3. Reuse only Ark UI's general hierarchy and accessibility principles.
4. Do not combine the Ark cyan, Endfield yellow, or other product-family accents with the faction signal unless the user explicitly needs a two-brand system.

## Avoid

- Do not bundle or reproduce official logos, faction marks, character art, key art, screenshots, CDN assets, production bundles, or unclear-license fonts.
- Do not call the result “official Arknights UI.” Use “evidence-based Terra faction interface” or “Hypergryph-inspired” when attribution is needed.
- Do not reduce a faction to nationality stereotypes, costumes, or one color.
- Do not add fake coordinates, system codes, meters, legal stamps, music notes, sonar rings, or telemetry without an information role.
- Do not use generic cyberpunk grids for every faction.
- Do not let decorative fiction hide prerequisites, exact values, stop conditions, destructive consequences, or accessibility labels.

## Validate

1. Validate the installed skill package before a release or after editing its references, tokens, starter, scripts, or agent metadata:

   ```bash
   node "$CODEX_HOME/skills/terra-faction-ui/scripts/validate-package.mjs"
   ```

2. Run the target project's tests, lint, and build.
3. Audit HTML/CSS/JS:

   ```bash
   node "$CODEX_HOME/skills/terra-faction-ui/scripts/audit-faction-ui.mjs" <file-or-directory>
   ```

4. Render desktop and portrait widths. Check clipping, overflow, focus order, active state, text size, and reduced-motion behavior.
5. Exercise primary controls in a browser and inspect runtime errors.
6. Confirm the selected faction changes composition, material, and information-bearing elements—not only color.
7. Run `node "$CODEX_HOME/skills/terra-faction-ui/scripts/audit-palette-separation.mjs"` when editing faction tokens.
8. Confirm the selected depth changes coverage and orchestration—not copy density.
9. Confirm every instrument supports grouping, direction, state, chronology, identity, or world-building.
10. Confirm provenance: production evidence is cited but not bundled; copied third-party assets retain their license.
11. Confirm motion ownership, interruption behavior, and reduced-motion parity. Every loop must identify its state owner and stop or become static under `prefers-reduced-motion`.
12. Run the grayscale test in `references/element-grammar.md`: at least two task-bearing elements must still identify the family without its palette or name.
13. Confirm the enrichment budget: each secondary instrument owns non-duplicated task data and changes meaningfully with an interaction or state transition.
14. Run the silhouette test in `references/interaction-grammar.md`: compare a primary action and one selector without color or labels, then verify hover, focus, active, selected, busy, disabled, and reduced-motion states.
15. Run the layout collision test in `references/layout-grammar.md`: blur text and remove color, then compare dominant axis, navigation position, stage proportion, and decision position against all faction profiles.
16. Run the signature-control collision test in `references/control-catalog.md`: verify that the control owns real state, uses the selected faction’s mechanic, and is not merely the same segmented control with a new skin.

## Bundled resources

- `references/faction-index.md`: family keys, confidence, and routing.
- `references/palette-separation.md`: unconditional global tone lanes and collision resolution.
- `references/element-grammar.md`: unconditional faction-owned structural elements, state instruments, and decision artifacts.
- `references/layout-grammar.md`: unconditional dominant axis, navigation, stage, decision, overlap, and spatial collision profiles.
- `references/interaction-grammar.md`: unconditional control topology, boundary rhythm, state feedback, focus, and silhouette profiles.
- `references/control-catalog.md`: fixed task-specific signature controls and a twelve-family mechanics collision test.
- `references/motion-grammar.md`: unconditional faction motion profiles, timing, ownership, and reduced-motion rules.
- `references/depth-levels.md`: independent four-level coverage rubric.
- `references/evidence-policy.md`: evidence promotion and legal rules.
- `references/frontend-contract.md`: implementation, state ownership, responsive, and accessibility conventions.
- `references/<family>.md`: faction-specific visual grammar and depth behavior.
- `assets/starter/`: dependency-free original interactive starter.
- `assets/tokens/terra-faction-ui.tokens.json`: original semantic seed tokens.
- `assets/icons/`: selected ISC-licensed Lucide SVGs.
- `scripts/scaffold-faction-ui.py`: copy the starter into a new destination.
- `scripts/validate-package.mjs`: validate package structure, internal links, twelve-family coverage, starter synchronization, token versioning, and agent metadata.
- `scripts/audit-faction-ui.mjs`: flag missing contracts, accessibility gaps, copied production references, and imitation clichés.
- `scripts/audit-palette-separation.mjs`: validate unique tone lanes and palette contrast/collision thresholds.
