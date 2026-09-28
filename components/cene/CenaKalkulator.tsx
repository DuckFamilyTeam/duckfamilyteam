'use client'

import { useRef, useState, type KeyboardEvent } from 'react'
import { TabDugme } from './deljeno'
import KalkulatorSajt from './KalkulatorSajt'
import KalkulatorAds from './KalkulatorAds'
import KalkulatorGbp from './KalkulatorGbp'
import KalkulatorPaket from './KalkulatorPaket'

type TabId = 'sajt' | 'ads' | 'gbp' | 'paket'

const tabovi: { id: TabId; naziv: string }[] = [
  { id: 'sajt', naziv: 'Izrada sajta' },
  { id: 'ads', naziv: 'Google Ads' },
  { id: 'gbp', naziv: 'Google Business profil' },
  { id: 'paket', naziv: 'Sve na jednom mestu' },
]

/**
 * Tabovi po ARIA obrascu (role tab / tabpanel, strelice levo-desno, Home/End).
 *
 * Ranije je `role="tablist"` sadržao obična dugmad sa `aria-pressed`, što je
 * nevalidan ARIA (Lighthouse `aria-required-children`, 2026-09-27): čitač ekrana
 * je najavljivao listu tabova bez ijednog taba.
 */
export default function CenaKalkulator() {
  const [aktivanTab, setAktivanTab] = useState<TabId>('sajt')
  const refs = useRef<Array<HTMLButtonElement | null>>([])

  function naTastaturu(e: KeyboardEvent<HTMLDivElement>) {
    const i = tabovi.findIndex((t) => t.id === aktivanTab)
    let sledeci = -1
    if (e.key === 'ArrowRight') sledeci = (i + 1) % tabovi.length
    else if (e.key === 'ArrowLeft') sledeci = (i - 1 + tabovi.length) % tabovi.length
    else if (e.key === 'Home') sledeci = 0
    else if (e.key === 'End') sledeci = tabovi.length - 1
    if (sledeci < 0) return
    e.preventDefault()
    setAktivanTab(tabovi[sledeci].id)
    refs.current[sledeci]?.focus()
  }

  return (
    <div>
      {/* Mreža 2x2 na < 640px: sa flex-wrap su se četiri pilule različite
          dužine lomile u tri neravna reda ("Izrada sajta" + "Google Ads",
          pa "Google Business profil", pa "Sve na jednom mestu" sama), pa je
          kalkulator padao ispod preloma na 390px (vizuelna provera, krug 7,
          ispravka 4d). */}
      <div
        className="grid grid-cols-2 gap-2 mb-10 sm:flex sm:flex-wrap"
        role="tablist"
        aria-label="Izbor kalkulatora"
        onKeyDown={naTastaturu}
      >
        {tabovi.map((tab, i) => (
          <TabDugme
            key={tab.id}
            id={`tab-${tab.id}`}
            panelId={`panel-${tab.id}`}
            aktivan={aktivanTab === tab.id}
            onClick={() => setAktivanTab(tab.id)}
            dugmeRef={(el) => {
              refs.current[i] = el
            }}
          >
            {tab.naziv}
          </TabDugme>
        ))}
      </div>

      <div
        role="tabpanel"
        id={`panel-${aktivanTab}`}
        aria-labelledby={`tab-${aktivanTab}`}
      >
        {aktivanTab === 'sajt' && <KalkulatorSajt />}
        {aktivanTab === 'ads' && <KalkulatorAds />}
        {aktivanTab === 'gbp' && <KalkulatorGbp />}
        {aktivanTab === 'paket' && <KalkulatorPaket />}
      </div>
    </div>
  )
}
