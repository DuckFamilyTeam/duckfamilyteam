'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Link from 'next/link'

const STORAGE_KEY = 'cookie_consent'

/** Događaj kojim bilo koji deo sajta može ponovo da otvori izbor o kolačićima. */
export const COOKIE_SETTINGS_EVENT = 'duck:open-cookie-settings'

export function openCookieSettings(): void {
  window.dispatchEvent(new Event(COOKIE_SETTINGS_EVENT))
}

function applyConsent(granted: boolean) {
  // Reklamni tagovi su uklonjeni sa sajta, pa se ad_* ne traži ni ne odobrava.
  if (typeof window.gtag === 'function') {
    window.gtag('consent', 'update', {
      analytics_storage: granted ? 'granted' : 'denied',
    })
  }
  try {
    localStorage.setItem(STORAGE_KEY, granted ? 'granted' : 'denied')
  } catch {
    /* privatni režim bez localStorage — izbor važi samo za ovu posetu */
  }
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)
  const [current, setCurrent] = useState<'granted' | 'denied' | null>(null)
  const panelRef = useRef<HTMLDivElement>(null)

  const open = useCallback(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      setCurrent(stored === 'granted' ? 'granted' : stored === 'denied' ? 'denied' : null)
    } catch {
      setCurrent(null)
    }
    setVisible(true)
  }, [])

  useEffect(() => {
    let stored: string | null = null
    try {
      stored = localStorage.getItem(STORAGE_KEY)
    } catch {
      /* ignoriši */
    }
    if (!stored) {
      setCurrent(null)
      setVisible(true)
    }
  }, [])

  // Povlačenje pristanka mora da bude jednako lako kao davanje — futer zove
  // openCookieSettings() i baner se vraća sa trenutnim izborom.
  useEffect(() => {
    window.addEventListener(COOKIE_SETTINGS_EVENT, open)
    return () => window.removeEventListener(COOKIE_SETTINGS_EVENT, open)
  }, [open])

  // Fokus ide na baner čim se pojavi; bez toga korisnik tastature mora da
  // protabuje celu stranicu da bi stigao do njega, jer se renderuje na kraju DOM-a.
  useEffect(() => {
    if (visible) panelRef.current?.focus()
  }, [visible])

  function handleChoice(granted: boolean) {
    applyConsent(granted)
    setCurrent(granted ? 'granted' : 'denied')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 inset-x-0 z-[200] p-3 md:p-5">
      <div
        ref={panelRef}
        role="dialog"
        aria-labelledby="kolacici-naslov"
        aria-describedby="kolacici-opis"
        tabIndex={-1}
        className="max-w-2xl mx-auto bg-ink-surface/95 backdrop-blur-md border border-ink-border-strong rounded-2xl p-4 md:p-5 shadow-2xl flex flex-col md:flex-row md:items-center gap-3 md:gap-5"
      >
        <div className="flex-1">
          <h2 id="kolacici-naslov" className="text-ink-text text-sm font-medium mb-1">
            Kolačići
          </h2>
          <p id="kolacici-opis" className="text-ink-muted text-xs md:text-sm leading-relaxed">
            Koristimo kolačiće samo za analitiku posete (Google Analytics 4). Reklamnih kolačića
            nema. Sajt radi isto bez obzira na izbor, a odluku možete promeniti kad god želite.{' '}
            <Link
              href="/politika-kolacica"
              className="text-wine-text hover:text-ink-text transition underline underline-offset-2"
            >
              Više o kolačićima
            </Link>
            {current && (
              <span className="block mt-1 text-ink-muted/80">
                Trenutni izbor: {current === 'granted' ? 'prihvaćeno' : 'odbijeno'}.
              </span>
            )}
          </p>
        </div>
        <div className="flex gap-3 flex-shrink-0">
          <button
            onClick={() => handleChoice(false)}
            className="border border-ink-border-strong hover:border-wine-text text-ink-text px-5 py-2.5 rounded-xl text-sm font-medium transition-colors"
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
