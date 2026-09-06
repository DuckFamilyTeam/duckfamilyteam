'use client'

import { useState } from 'react'
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

export default function CenaKalkulator() {
  const [aktivanTab, setAktivanTab] = useState<TabId>('sajt')

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-10" role="tablist" aria-label="Izbor kalkulatora">
        {tabovi.map((tab) => (
          <TabDugme key={tab.id} aktivan={aktivanTab === tab.id} onClick={() => setAktivanTab(tab.id)}>
            {tab.naziv}
          </TabDugme>
        ))}
      </div>

      <div role="tabpanel">
        {aktivanTab === 'sajt' && <KalkulatorSajt />}
        {aktivanTab === 'ads' && <KalkulatorAds />}
        {aktivanTab === 'gbp' && <KalkulatorGbp />}
        {aktivanTab === 'paket' && <KalkulatorPaket />}
      </div>
    </div>
  )
}
