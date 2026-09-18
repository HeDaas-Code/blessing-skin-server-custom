# Global palette separation

Apply this matrix on every invocation. It is not conditional on multiple factions appearing in the same prompt.

## Fixed default tone lanes

| Faction | Tone lane | Mode | Temperature | Default signal | Reserved secondary or exception |
|---|---|---|---|---|---|
| Rhine Lab | `cool-light-laboratory` | Light | Cool mineral | Chartreuse for active research | Amber only for real heat or intervention; red for hazard |
| Lungmen | `cool-mid-civic` | Mid-light | Cool concrete and ink | Disciplined vermilion | Deep-jade transit glass and Chinese civic hierarchy; no gold baseline |
| Kazimierz | `neutral-light-broadcast` | Light | Neutral | Cobalt broadcast side/selection | Red for opposing side or live exception; gold for rank only |
| Laterano | `warm-light-ceremonial` | Light | Warm ivory | Brass-gold authority | Red only for judgment or exception |
| Siracusa | `warm-mid-dossier` | Mid-light | Warm paper/walnut | Burgundy proceeding | Judicial red only for exception |
| Kjerag | `cold-mid-alpine` | Mid-light | Ice blue | Teal route/weather | Brass only for a ceremonial state |
| Iberia | `cold-dark-nautical` | Dark | Deep navy | Weathered brass heading | Red-orange only for maritime hazard |
| Yan | `neutral-light-ink-paper` | Light | Neutral paper | Seal red commitment | Muted gold only for rank or ceremony |
| Leithanien | `warm-dark-conservatory` | Dark | Burgundy/wood | Brass cue or sequence | Rose-red only for critical state |
| Penguin Logistics | `cool-dark-navy-white` | Dark | Ink navy | Paper-white dispatch band | Cold blue for route depth; red only for delay or failed handoff; no electric-blue or yellow baseline |
| Blacksteel | `neutral-dark-industrial-hazard` | Dark | Neutral gunmetal | Safety-yellow readiness and commitment | Violet only for institutional ownership; red only for unresolved danger |
| Ursus Student Group | `neutral-mid-wartime-documentary` | Mid-light | Smoke, ash, damaged paper | Emergency brick-red | Provisional soot black and dark burgundy; never pink or cosmetic rose |

## Mandatory behavior

1. Compare the selected family with all rows, not only factions mentioned by the user.
2. Start from the row's mode, temperature, and default signal group.
3. Keep each family on its fixed lane unless the user explicitly overrides it.
4. When accessibility requires an adjustment, change lightness before hue and record the reason.
5. When a user requests a different mood, preserve at least two of the three lane properties: mode, temperature, signal group.
6. For low-confidence families, label the lane provisional and do not treat it as official evidence.

## Collision test

Reject a default palette when either condition is true:

- another family has the same tone-lane key; or
- both the dominant field and signal are perceptually close to another family.

Resolve collisions in this order:

1. Preserve the strongest direct evidence.
2. Shift dominant field lightness or temperature within the documented neutral range.
3. Select a documented alternative signal role.
4. Update the family profile, token matrix, starter CSS, and validation together.

Do not solve a collision by adding extra accent colors. One dominant signal remains the default.
