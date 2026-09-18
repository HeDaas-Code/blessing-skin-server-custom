import { css } from '@emotion/react'

// Rhine Lab token reader — mirrors the --terra-* CSS custom properties
// declared in styles/terra.css. Keeping emotion styles on the variables
// means they stay in sync with the global theme and its .dark-mode
// overrides without duplicating hex values in TypeScript.

export const ink = 'var(--terra-ink)'
export const inkMuted = 'var(--terra-ink-muted)'
export const field = 'var(--terra-field)'
export const surface = 'var(--terra-surface)'
export const surfaceMuted = 'var(--terra-surface-muted)'
export const surfaceDeep = 'var(--terra-surface-deep)'
export const rule = 'var(--terra-rule)'
export const ruleStrong = 'var(--terra-rule-strong)'
export const signal = 'var(--terra-signal)'
export const signalInk = 'var(--terra-signal-ink)'
export const signalDeep = 'var(--terra-signal-deep)'
export const warn = 'var(--terra-warn)'
export const warnInk = 'var(--terra-warn-ink)'
export const critical = 'var(--terra-critical)'
export const criticalInk = 'var(--terra-critical-ink)'
export const radius = 'var(--terra-radius)'
export const ruleWidth = 'var(--terra-rule-width)'
export const inset = 'var(--terra-inset)'
export const fontLabel = 'var(--terra-font-label)'
export const fontData = 'var(--terra-font-data)'

// Diagnostic pane geometry: 2px mineral border + squared radius on a
// frosted surface, no drop shadow (Rhine Lab prefers measured edges).
export const pane = css`
  border: var(--terra-rule-width) solid var(--terra-rule);
  border-radius: var(--terra-radius);
  background-color: var(--terra-surface);
  box-shadow: none;
`

// Narrow technical micro-label (uppercase, letter-spaced, muted ink).
export const microLabel = css`
  font-family: var(--terra-font-label);
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--terra-ink-muted);
`

// Tabular specimen / time data.
export const tabular = css`
  font-variant-numeric: tabular-nums;
  font-feature-settings: 'tnum';
`
