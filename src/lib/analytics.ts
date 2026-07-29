// ---------------------------------------------------------------------------
// Minimal analytics event helper.
//
// The project has no analytics SDK installed (no GA/GTM/Plausible package in
// package.json). Rather than adding a new dependency, this pushes events to
// `window.dataLayer`, the standard event queue used by Google Tag Manager
// and most analytics setups — if a tag manager is (or later gets) installed
// on talio.dk, these events are picked up automatically with zero code
// changes. If no tag manager is present, this is a harmless no-op array push.
//
// Do NOT pass personally identifiable form values (name, email, phone,
// free-text message) as event payloads — only pass non-sensitive metadata
// (e.g. which trade/craft was selected, which form step was reached).
// ---------------------------------------------------------------------------

declare global {
  interface Window {
    dataLayer?: unknown[]
  }
}

export type CraftsLandingEvent =
  | 'crafts_landing_view'
  | 'crafts_cta_hero_click'
  | 'crafts_cta_midpage_click'
  | 'crafts_cta_sticky_click'
  | 'crafts_phone_click'
  | 'crafts_form_start'
  | 'crafts_form_step_complete'
  | 'crafts_form_submit'
  | 'crafts_form_success'
  | 'crafts_form_error'

let lastEvent: string | null = null

export function track(event: CraftsLandingEvent, payload?: Record<string, string | number | boolean>) {
  if (typeof window === 'undefined') return

  // Cheap de-dupe guard for events that could otherwise double-fire from
  // React 18 StrictMode double-invocation or accidental double submit.
  const key = `${event}:${JSON.stringify(payload ?? {})}`
  if (event === 'crafts_landing_view' && lastEvent === key) return
  lastEvent = key

  window.dataLayer = window.dataLayer ?? []
  window.dataLayer.push({ event, ...payload })
}
