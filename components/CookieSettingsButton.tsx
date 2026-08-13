'use client'

import { openCookieSettings } from './CookieConsent'

/** Otvara baner sa izborom o kolačićima iz bilo kog dela sajta. */
export default function CookieSettingsButton() {
  return (
    <button
      type="button"
      onClick={openCookieSettings}
      className="bg-wine hover:bg-wine-bright text-ink-text px-6 py-3 rounded-xl text-sm font-medium transition-colors"
    >
      Promeni izbor o kolačićima
    </button>
  )
}
