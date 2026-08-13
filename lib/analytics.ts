/**
 * Merenje događaja u GA4.
 *
 * Na sajtu ne postoji GTM kontejner — učitava se gtag.js direktno. Zbog toga
 * `dataLayer.push({ event: ... })` nema ko da preuzme i takvi pozivi su ranije
 * bili mrtvo slovo. Sve što treba da se izmeri mora da ide kroz `gtag('event', …)`.
 */

export const GA_MEASUREMENT_ID = 'G-HW9597T7Y7'

type GtagParams = Record<string, string | number | boolean | undefined>

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    dataLayer?: unknown[]
  }
}

/** Šalje događaj u GA4. Tiho ne radi ništa ako gtag još nije učitan. */
export function trackEvent(name: string, params: GtagParams = {}): void {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return
  window.gtag('event', name, params)
}

/**
 * Upit poslat preko forme. `generate_lead` je GA4 preporučeni naziv događaja —
 * treba ga u GA4 označiti kao ključni događaj (Admin → Events → Mark as key event).
 */
export function trackLead(source: string, extra: GtagParams = {}): void {
  trackEvent('generate_lead', {
    // currency/value su opcioni, ali bez njih GA4 ne može da računa vrednost lead-a.
    form_source: source,
    page_path: typeof window !== 'undefined' ? window.location.pathname : undefined,
    ...extra,
  })
}

/** Klik na telefon — primarni CTA u meniju, do sada se nije merio nigde. */
export function trackPhoneClick(location: string): void {
  trackEvent('click_telefon', { link_location: location })
}

/** Klik na email adresu. */
export function trackEmailClick(location: string): void {
  trackEvent('click_email', { link_location: location })
}

/** Klik na link za ostavljanje Google recenzije. */
export function trackReviewClick(): void {
  trackEvent('click_gbp_recenzija', {})
}
