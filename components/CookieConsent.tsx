'use client'

import { useEffect, useState } from 'react'

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

const STORAGE_KEY = 'cookie_consent'

function applyConsent(granted: boolean) {
  if (typeof window.gtag === 'function') {
    window.gtag('consent', 'update', {
      ad_storage: granted ? 'granted' : 'denied',
      ad_user_data: granted ? 'granted' : 'denied',
      ad_personalization: granted ? 'granted' : 'denied',
      analytics_storage: granted ? 'granted' : 'denied',
    })
  }
  localStorage.setItem(STORAGE_KEY, granted ? 'granted' : 'denied')
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (!stored) {
      setVisible(true)
    }
  }, [])

  function handleChoice(granted: boolean) {
    applyConsent(granted)
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 inset-x-0 z-[200] p-4 md:p-6">
      <div className="max-w-3xl mx-auto bg-ink-surface border border-ink-border rounded-2xl p-5 md:p-6 shadow-2xl flex flex-col md:flex-row items-center gap-4 md:gap-6">
        <p className="text-ink-muted text-sm leading-relaxed flex-1">
          Koristimo kolačiće za analitiku i merenje efikasnosti oglasa (Google Ads i GA4). Možete da prihvatite ili odbijete, sajt radi u oba slučaja.
        </p>
        <div className="flex gap-3 flex-shrink-0">
          <button
            onClick={() => handleChoice(false)}
            className="border border-ink-border hover:border-wine text-ink-text px-5 py-2.5 rounded-xl text-sm font-medium transition-colors"
          >
            Odbijam
          </button>
          <button
            onClick={() => handleChoice(true)}
            className="bg-wine hover:bg-wine-bright text-ink-text px-5 py-2.5 rounded-xl text-sm font-medium transition-colors"
          >
            Prihvatam
          </button>
        </div>
      </div>
    </div>
  )
}
