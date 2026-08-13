import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CookieSettingsButton from '@/components/CookieSettingsButton'

const url = 'https://www.duckfamilyteam.online/politika-kolacica'

export const metadata: Metadata = {
  title: 'Politika kolačića',
  description:
    'Koje kolačiće sajt Duck Family Team koristi, čemu služe, koliko traju i kako da u svakom trenutku promenite ili povučete svoj pristanak.',
  alternates: { canonical: url },
  openGraph: {
    title: 'Politika kolačića | Duck Family Team',
    description: 'Spisak kolačića, njihova svrha i trajanje, i kako da promenite izbor.',
    url,
    type: 'article',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Početna', item: 'https://www.duckfamilyteam.online' },
    { '@type': 'ListItem', position: 2, name: 'Politika kolačića', item: url },
  ],
}

const AZURIRANO = '13. avgust 2026.'

const kolacici = [
  {
    naziv: 'cookie_consent',
    vrsta: 'Neophodan (localStorage)',
    svrha: 'Pamti da ste prihvatili ili odbili analitičke kolačiće, da vas baner ne pita ponovo.',
    trajanje: 'Dok ga ne obrišete iz browsera',
  },
  {
    naziv: '_ga, _ga_HW9597T7Y7',
    vrsta: 'Analitički (Google Analytics 4)',
    svrha:
      'Razlikuje posetioce i sesije, da bismo videli koje stranice se čitaju i odakle ljudi dolaze.',
    trajanje: '2 godine (_ga), 2 godine (_ga_*)',
  },
]

export default function PolitikaKolacicaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar />
      <main
        id="glavni-sadrzaj"
        className="bg-ink-bg text-ink-text pt-28 md:pt-40 pb-20 px-6 md:px-12"
      >
        <div className="max-w-3xl mx-auto">
          <nav
            className="mb-8 font-mono text-xs text-ink-muted flex items-center gap-2 uppercase tracking-widest"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-ink-text transition">
              Početna
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-ink-text">Politika kolačića</span>
          </nav>

          <div className="font-mono text-xs uppercase tracking-[0.12em] text-wine-text mb-4">
            Pravne informacije
          </div>
          <h1 className="font-display font-medium text-4xl md:text-5xl leading-[1.1] tracking-tight mb-6">
            Politika kolačića
          </h1>
          <p className="text-ink-muted leading-relaxed mb-12">
            Poslednje ažuriranje: {AZURIRANO}. Sajt koristi minimum kolačića: jedan da zapamti vaš
            izbor i, samo ako pristanete, Google Analytics za statistiku posete. Reklamnih kolačića
            nema.
          </p>

          <div className="space-y-12 text-ink-muted leading-relaxed">
            <section className="space-y-4">
              <h2 className="font-display font-medium text-2xl text-ink-text">Šta su kolačići</h2>
              <p>
                Kolačići su male datoteke koje sajt ostavlja u vašem browseru da bi zapamtio nešto
                između poseta. Slično tome radi i localStorage, pa ga tretiramo isto.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-display font-medium text-2xl text-ink-text">Spisak</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-ink-border-strong text-ink-text text-left">
                      <th className="py-3 pr-4 font-medium">Naziv</th>
                      <th className="py-3 pr-4 font-medium">Vrsta</th>
                      <th className="py-3 pr-4 font-medium">Svrha</th>
                      <th className="py-3 font-medium">Trajanje</th>
                    </tr>
                  </thead>
                  <tbody>
                    {kolacici.map((k) => (
                      <tr key={k.naziv} className="border-b border-ink-border align-top">
                        <td className="py-3 pr-4 font-mono text-xs text-ink-text">{k.naziv}</td>
                        <td className="py-3 pr-4">{k.vrsta}</td>
                        <td className="py-3 pr-4">{k.svrha}</td>
                        <td className="py-3 whitespace-nowrap">{k.trajanje}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="font-display font-medium text-2xl text-ink-text">
                Šta se učitava tek na klik
              </h2>
              <p>
                Google mapa u dnu stranice se <strong className="text-ink-text">ne učitava sama</strong>.
                Dok ne kliknete „Prikaži mapu", Google ne dobija vašu IP adresu i ne postavlja svoje
                kolačiće. Isto važi i za mapu na stranici kontakta.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-display font-medium text-2xl text-ink-text">
                Statistika bez kolačića
              </h2>
              <p>
                Pored GA4 koristimo i Vercel Web Analytics, koji broji posete bez kolačića i bez
                ličnih identifikatora. Zato za njega ne tražimo pristanak.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-display font-medium text-2xl text-ink-text">
                Kako da promenite izbor
              </h2>
              <p>
                Odluku možete promeniti kad god želite, jednim klikom. Povlačenje pristanka je isto
                tako jednostavno kao i davanje.
              </p>
              <CookieSettingsButton />
              <p className="text-sm">
                Kolačiće možete i obrisati kroz podešavanja svog browsera. Ako obrišete
                <span className="font-mono text-xs text-ink-text"> cookie_consent</span>, baner će
                se pojaviti ponovo pri sledećoj poseti.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-display font-medium text-2xl text-ink-text">Više detalja</h2>
              <p>
                Kompletan pregled podataka koje obrađujemo i vaših prava nalazi se u{' '}
                <Link
                  href="/politika-privatnosti"
                  className="text-wine-text hover:text-ink-text transition"
                >
                  politici privatnosti
                </Link>
                .
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
