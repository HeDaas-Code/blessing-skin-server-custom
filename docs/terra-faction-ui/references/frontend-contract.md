# Frontend implementation contract

## Root state

Represent the three decisions independently:

```html
<html
  data-terra-faction="laterano-notarial"
  data-terra-depth="complex"
  data-terra-task="dossier"
>
```

Use semantic variables:

```css
:root {
  --terra-field: #f4f1e8;
  --terra-ink: #171714;
  --terra-surface: #e8e2d5;
  --terra-rule: #827a68;
  --terra-signal: #9b782b;
  --terra-critical: #9a2929;
}
```

These are original implementation seeds, not official faction tokens.

## Information ownership

- Shell owns global navigation and global state.
- Stage owns the selected subject, route, match, case, experiment, voyage, or record.
- Dossier owns context that is absent from comparable cards.
- Action region owns consequence and commitment.
- Toast or transition owns only its transient outcome and immediate next step.

Do not mirror the same metric across owners to fill space.

## Component rules

- Keep primary actions as visible verbs.
- Keep exact values, prerequisites, stop conditions, and exceptions in visible text.
- Pair compact English micro-labels with Chinese labels only when hierarchy benefits.
- Use tabular numerals for scores, dates, coordinates, sample IDs, and timing.
- Use icons for familiar secondary actions; give icon-only controls an accessible name.
- Use flat planes, rules, masks, and material texture before rounded card chrome.

## Responsive behavior

- Convert side rails into a compact top bar, bottom strip, or disclosure menu.
- Reorder content by task priority, not desktop coordinates.
- Preserve the selected record, current state, and primary action above the fold when practical.
- Test portrait, desktop, and short-wide layouts.

## Motion

- Direct feedback: 160–320ms.
- Section or record reveal: 420–800ms.
- Restrained attention loop: 1.6–2.4s and never on essential reading.
- Prefer directional wipe, mask, rule travel, or state-owned instrument movement.
- Provide `prefers-reduced-motion` parity.

## Accessibility

- Use semantic landmarks, headings, lists, forms, buttons, and links.
- Keep targets at least 40×40px.
- Use a visible 2px focus outline with offset.
- Maintain WCAG text contrast even if research images do not.
- Never bake necessary labels into background art.
- Give meaningful images alt text and decorative images empty alt.

## QA

Hold faction constant while changing depth: content remains stable; coverage changes.

Hold depth constant while changing faction: composition, material, and instrument change—not only color.
