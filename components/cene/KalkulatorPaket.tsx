import Link from 'next/link'
import {
  paketSveNaJednomMestu,
  adsStavke,
  gbpOsnovnaCena,
  mesecnoOdrzavanje,
  formatEvra,
} from '@/lib/cenaPodaci'

// Statična kartica — cene za poređenje su fiksne stavke iz cenovnika, ne zavise
// od izbora u druga tri kalkulatora. Zato ne treba klijentsko stanje.
export default function KalkulatorPaket() {
  const adsVodjenje = adsStavke.find((s) => s.id === 'vodjenje')!.cena
  const pojedinacno = adsVodjenje + gbpOsnovnaCena + mesecnoOdrzavanje
  const usteda = pojedinacno - paketSveNaJednomMestu.cena

  return (
    <div>
      <div className="rounded-2xl border border-wine bg-ink-surface p-8 md:p-10 mb-8 text-center shadow-lg shadow-wine/10">
        <div className="font-mono text-xs uppercase tracking-widest text-wine-text mb-3">
          Sve na jednom mestu
        </div>
        <div className="font-display font-medium text-4xl md:text-5xl tracking-tight mb-4">
          {formatEvra(paketSveNaJednomMestu.cena)} <span className="text-xl text-ink-muted">mesečno</span>
        </div>
        <p className="text-ink-muted max-w-xl mx-auto">{paketSveNaJednomMestu.opis}</p>
      </div>

      <div className="border border-ink-border rounded-2xl overflow-hidden mb-8">
        <div className="flex justify-between p-5 md:p-6 odd:bg-ink-surface even:bg-ink-bg">
          <span className="text-ink-text">Google Ads — mesečno vođenje</span>
          <span className="font-mono text-ink-muted">{formatEvra(adsVodjenje)}</span>
        </div>
        <div className="flex justify-between p-5 md:p-6 odd:bg-ink-surface even:bg-ink-bg">
          <span className="text-ink-text">Google Business profil — vođenje</span>
          <span className="font-mono text-ink-muted">{formatEvra(gbpOsnovnaCena)}</span>
        </div>
        <div className="flex justify-between p-5 md:p-6 odd:bg-ink-surface even:bg-ink-bg">
          <span className="text-ink-text">Hosting i održavanje sajta</span>
          <span className="font-mono text-ink-muted">{formatEvra(mesecnoOdrzavanje)}</span>
        </div>
        <div className="flex justify-between p-5 md:p-6 odd:bg-ink-surface even:bg-ink-bg font-medium">
          <span className="text-ink-text">Pojedinačno ukupno</span>
          <span className="font-mono text-ink-text">{formatEvra(pojedinacno)}</span>
        </div>
      </div>

      <p className="text-center text-ink-text mb-8">
        Sa paketom štedite <span className="text-wine-text font-mono">{formatEvra(usteda)}</span> mesečno
        u odnosu na pojedinačne cene.
      </p>

      <div className="text-center">
        <Link
          href="/kontakt"
          className="bg-wine hover:bg-wine-bright text-ink-text px-10 py-5 rounded-xl font-semibold text-base inline-block transition-colors shadow-lg shadow-wine/20"
        >
          Zakažite besplatnu konsultaciju
        </Link>
      </div>
    </div>
  )
}
