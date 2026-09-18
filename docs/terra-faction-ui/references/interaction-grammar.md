# Faction interaction grammar

Apply this matrix on every invocation. Interaction shape is a fixed part of faction identity, not a comparison-only flourish and not a global rounded-corner theme.

## Core contract

At `moderate` depth and above, express the selected faction through all four layers:

1. **Corner topology** — square, chamfered, arched, stitched, ticketed, or repaired.
2. **Boundary rhythm** — inset rail, double ring, lower-third bar, docket rule, perforation, or equipment lock.
3. **State response** — a directional press and a stable selected/committed state owned by the task.
4. **Focus silhouette** — a visible keyboard focus treatment that follows the control’s form.
5. **Control family** — include at least one binary control and one continuous or stepped control when the real task supports both.
6. **Signature mechanic** — choose a real task-owned control from [control-catalog.md](control-catalog.md) instead of stopping at a reskinned checkbox, range, and button.

Changing only `border-radius` is insufficient. Use at least two of corner topology, boundary rhythm, press direction, selected state, and focus silhouette. Apply the profile to primary actions and task-owned selectors; global application settings may remain neutral.

## Fixed interaction profiles

| Family | Primary geometry | Secondary selector | State response | Avoid |
| --- | --- | --- | --- | --- |
| `rhine-lab` | 2px diagnostic plate with a measured inset rail | compact specimen tab with crisp corners | calibrates inward; selected state gains a bounded sample rail | pills, soft glass buttons, elastic bounce |
| `lungmen-municipal` | square civic gate with a clipped upper-right corner | ward block with jade ownership and vermilion commitment edge | moves along the route axis, then lands as a permit block | generic red rounded rectangles, decorative seal buttons |
| `kazimierz-broadcast` | asymmetric broadcast wedge | lower-third selector with a slanted trailing edge | snaps horizontally; selected side gains a cobalt score rail | medieval shield buttons, gold capsule controls |
| `laterano-notarial` | ceremonial capsule reserved for approval | restrained arched case tab | contracts symmetrically; focus and confirmation use a double authority ring | making every surface circular, halo decoration |
| `siracusa-dossier` | docket tab with one folded corner | file-tab selector with a burgundy ruling edge | settles downward like a document tab; selected rule advances once | noir-gloss pills, red-string interactions |
| `kjerag-alpine` | asymmetrical woven corners (`12px 2px 12px 2px`) | stitched route gate | settles vertically; selected boundary tightens like a verified textile edge | generic snow-globe buttons, soft icy pills |
| `iberia-nautical` | bounded porthole plaque with an arched top | watch selector with a bearing ring | contracts radially; selected course receives a brass bearing boundary | cyan sonar buttons, pirate ornament |
| `yan-archival` | ink-paper block with a folded upper-right corner | narrow record slip | moves down like a seal press; confirmation lands once in seal red | seals on every control, decorative cloud corners |
| `leithanien-conservatory` | elongated cadence control with mirrored soft corners | program selector with a brass cue edge | closes symmetrically; selected state resolves like a cadence | piano-key buttons, floating-note affordances |
| `penguin-logistics-street` | removable waybill with small ticket corners | dashed handoff slip | snaps along the delivery lane; selected stub gains a paper-white dispatch band | sticker noise, yellow toy controls, generic graffiti |
| `blacksteel-contract` | hard plate with two opposite industrial chamfers | readiness lock with a safety-yellow equipment rail and a quiet violet owner edge | locks inward and down; selected state closes a contract edge | weapon-shaped buttons, generic military HUD chrome, all-violet readiness states |
| `ursus-student` | repaired paper control with irregular small radii (`2px 8px 3px 1px`) | student-owned checklist strip | settles modestly downward; confirmed state gains one brick-red repair/check line | pink softness, cute school controls, spectacular alarm motion |

Low-confidence profiles remain provisional, but their context corrections and interaction topology stay fixed across invocations.

## Hierarchy and component coverage

- Primary actions may use the profile’s strongest silhouette. Secondary selectors use a quieter version of the same grammar.
- At `moderate` and above, provide at least three meaningful interactive affordances when the task supports them: one selection or navigation control, one binary state such as a checkbox/switch, and one continuous or stepped control such as a range input. The primary action does not count as all three.
- At `moderate`, add at least one faction signature control from `control-catalog.md`. At `complex` and `maximal`, add at least two signature controls with different mechanics. This applies even when only one faction is generated.
- A signature control must change task state or expose a prerequisite. A themed segmented selector that differs only in color, corner radius, or label is still a generic selector and does not satisfy the budget.
- Style checkbox topology, range track, range thumb, hover response, disabled state, and focus state from the same faction grammar. Do not ship a faction button beside browser-default form controls.
- Make form controls change a visible, truthful value or prerequisite. Do not add sliders for fictional telemetry or decorative motion.
- Do not apply a faction radius to every panel. Containers remain structurally appropriate; controls reveal how the institution acts.
- Destructive or exceptional actions keep their semantic critical color while retaining the faction geometry.
- A selected state must remain visible without hue through rule position, inset depth, double boundary, notch, or displacement.
- Press feedback must be brief and reversible. Commitment feedback may be stronger, but it must end in a stable state.

## Traditional control completeness contract

Apply this contract whenever the user asks for a control showcase, component system, UI kit, “complete controls,” or a representative `complex` / `maximal` interface. A styled but inert component gallery does not count.

| Primitive | Required behavior |
| --- | --- |
| Text input | label, placeholder, editable value, clear action, visible validation, error text, and a useful described-by relationship |
| Select or menu | keyboard-operable choices, current value, disabled item when a real prerequisite is absent, and a close/reset path |
| Radio group | one stable selected value, native group semantics, label click, focus silhouette, and non-color selected boundary |
| Checkbox | independent true/false task state, readable label, focus state, and visible checked mark |
| Switch | immediate on/off task preference with `switch` semantics or equivalent native checkbox semantics; do not use it for one-shot commitment |
| Range or stepper | exact output, meaningful minimum/maximum/step, keyboard increments, and a track/thumb derived from the faction grammar |
| Progress | native or equivalent progress semantics connected to actual form readiness, chronology, or completion |
| Primary action | disabled until named prerequisites are complete, explicit consequence, busy state, and a stable committed result |
| Confirmation dialog | modal semantics, reversible cancel path, summary of the data being committed, and no hidden prerequisite |
| Toast or status | transient result only, live-region semantics, dismiss action when persistent, and no duplication of long-lived task data |

Functional requirements:

- Connect every primitive to real local state and let changed values appear in an adjacent summary, instrument, prerequisite, or commitment.
- Exercise valid, invalid, selected, checked, off, on, disabled, busy, confirmed, and dismissed states where relevant.
- A disabled control must retain a visible reason. Busy feedback must use text or `aria-busy`; animation alone is insufficient.
- Keep dialog, menu, tooltip, and toast geometry faction-owned, but preserve native reading and keyboard order.
- Recompose the suite through the faction layout profile. Do not place all families in one identical component-grid shell and change only radius or color.

## Accessibility and motion

- Keep pointer targets at least `40 × 40px`; clipping a corner must not shrink the usable hit area.
- Use a visible 2px focus outline or an equivalent double/inset ring with at least 3:1 contrast against adjacent colors.
- Never communicate selected, busy, or destructive state through shape motion alone.
- Use individual `translate` and `scale` properties when a component already owns a transform, so interaction does not erase layout geometry.
- Under `prefers-reduced-motion: reduce`, remove travel and scaling while preserving the final boundary, label, and selected state.
- Do not use spring bounce, perpetual hover animation, or cursor-chasing effects as faction identity.

## Silhouette test

Before delivery, hide labels and color and compare the primary action plus one selector:

1. Each faction should be distinguishable by topology or boundary rhythm.
2. No more than one family should rely on the same ordinary rounded rectangle.
3. Focus, hover, active, selected, busy, and disabled states must remain legible.
4. The interaction direction must agree with the faction motion profile and the task’s real transition.
5. Checkbox, slider, navigation, and primary action must not collapse into one shared generic component silhouette.
