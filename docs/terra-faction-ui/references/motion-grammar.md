# Faction motion grammar

Apply this motion matrix on every invocation. Motion is a faction identity system and a state-feedback system, not a layer of generic fade-ins.

## Fixed motion profiles

| Faction | Arrival / section reveal | State-owned instrument | Selection or commitment |
|---|---|---|---|
| Rhine Lab | Diagnostic aperture and measured pane calibration | Specimen ring breathes or measurement rule travels | Containment or approval gate locks into its next state |
| Lungmen | Orthogonal gate wipe with a restrained diagonal civic split | Route draws from gate to destination; checkpoints arrive in order | Vermilion permit block lands once after commitment |
| Kazimierz | Broadcast cut, split frame, and lower-third reveal | Live positions or bracket state pulse by side ownership | Selected analysis locks with a scoreboard snap |
| Laterano | Centered paper reveal with measured symmetry | Approval ring advances or chronology resolves radially | Brass confirmation ring closes; red appears only for exception |
| Siracusa | Dossier leaf or evidence band reveals in reading order | Current testimony or provenance line receives quiet focus | Burgundy ruling line advances to the next procedural state |
| Kjerag | Elevation-ascent reveal from lower route to upper window | Safe path draws through verified stops; current weather window breathes | Passage gate opens along the route direction |
| Iberia | Nautical chart uncovers from the verified bearing | Heading or watch instrument turns slowly around a real value | Brass course line settles and the report is archived |
| Yan | Bounded ink or paper mask opens with strong negative space | Administrative route draws node by node | Seal-red commitment block lands once, never on every control |
| Leithanien | Measured score or stage curtain sweep | Cue needle, sequence marker, or current measure moves with restrained tempo | Brass cadence closes the confirmed sequence |
| Penguin Logistics | Diagonal waybill snap and lane handoff | Delivery route advances between real handoff nodes | Paper-white dispatch band confirms the next courier segment |
| Blacksteel | Industrial shutter or equipment-rack reveal | Equipment scan and safety-yellow deployment segments advance by readiness | Contract lock closes inward after prerequisites are satisfied; violet remains on the assignment owner edge |
| Ursus Student Group | Hard documentary cut and damaged-paper strip reveal | Alert window or safe-transfer tape advances without flashing | Brick-red checklist locks once; never romanticize danger with spectacle |

Evidence confidence does not relax context corrections: Penguin Logistics stays route-owned rather than graffiti-owned; Blacksteel stays contract-owned rather than weapon-HUD-owned; Ursus Student Group stays documentary and non-spectacular.

## Choreography contract

Build motion from three owned layers:

1. **Arrival** — shell, section, or selected record reveal. Use one coherent family per screen.
2. **Instrument** — a route, ring, cue, chronology, watch, scan, or alert band moves only because its underlying state can change.
3. **Decision** — selection and primary commitment receive a brief directional confirmation that ends in a stable final state.

Depth controls coordination:

- `minimal`: direct feedback only; no persistent loop.
- `moderate`: one arrival family, direct feedback, and at most one restrained state-owned loop.
- `complex`: coordinate at least two motion families across shell, stage, and shared components.
- `maximal`: coordinate masks, stage layers, section transitions, and state change while retaining a static reading mode.

## Timing and easing

- Direct selection feedback: `160–280ms`.
- Primary commitment: `360–680ms`.
- Section or record reveal: `480–800ms`.
- Route, chronology, or multi-stop draw: `720–1200ms`.
- Attention loop for a live current state: `1.8–2.4s`.
- Slow orientation loop for a bounded compass, ring, or dial: `6–14s`.
- Use decisive cubic easing for civic, broadcast, logistics, and industrial motion; measured ease-in-out for laboratory, archive, alpine, nautical, and conservatory motion.

Do not chain more than four visible stagger steps before the primary information is readable.

## Accessibility and truth

- Gate non-essential animation behind `prefers-reduced-motion: no-preference`.
- Under `prefers-reduced-motion: reduce`, render the final state immediately, stop every loop, and retain equivalent selection, status, and focus styling.
- Never autoplay scroll, move focus, or delay essential labels.
- Never use flicker, perpetual glitch, camera shake, or high-frequency flashing.
- Pause or remove a loop when its owning state is no longer current.
- Do not use animation to imply live telemetry when the underlying value is static or invented.
