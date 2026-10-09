import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PodvucenaRec from '@/components/PodvucenaRec'
import BrowserFrame from '@/components/BrowserFrame'

const brojke = [
  { label: 'Uloženo', value: '7.150 €' },
  { label: 'Period', value: '6 meseci' },
  { label: 'Neto zarada', value: '21.850 €' },
  { label: 'Povraćaj', value: '306%' },
]

export const metadata: Metadata = {
  title: 'Rezultati klijenata',
  description:
    'Stvarni, proverljivi rezultati klijenata Duck Family Team, sa studijom slučaja Mobilnog Vulkanizera Milana. Bez izmišljenih testimonijala, samo dokazive brojke.',
  alternates: {
    canonical: 'https://www.duckfamilyteam.online/rezultati',
  },
  openGraph: {
    title: 'Rezultati klijenata | Duck Family Team',
    description: 'Stvarni, proverljivi rezultati, bez izmišljenih testimonijala.',
    url: 'https://www.duckfamilyteam.online/rezultati',
    type: 'website',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Početna', item: 'https://www.duckfamilyteam.online' },
    { '@type': 'ListItem', position: 2, name: 'Rezultati', item: 'https://www.duckfamilyteam.online/rezultati' },
  ],
}

export default function RezultatiPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navbar />
      <main id="glavni-sadrzaj" className="bg-ink-bg text-ink-text pt-28 md:pt-40 pb-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">

          {/* ── BREADCRUMB ── */}
          <nav className="mb-8 font-mono text-xs text-ink-muted flex items-center gap-2 uppercase tracking-widest" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-ink-text transition">Početna</Link>
            <span>/</span>
            <span className="text-ink-text">Rezultati</span>
          </nav>

          {/* ── HERO ── */}
          <section className="mb-16">
            <div className="font-mono text-xs uppercase tracking-[0.12em] text-wine-text mb-4">
              Ono što možemo da dokažemo
            </div>
            {/* Zarez zalepljen uz "Rezultati" unutar PodvucenaRec, isti
                razlog kao na o-nama (krug 10): sa text-balance element-granica
                posle </PodvucenaRec> je mesto preloma, pa bi zarez ostao sam
                na početku sledećeg reda. */}
            <h1 className="font-display font-medium text-4xl md:text-6xl leading-[1.1] tracking-tight mb-6 max-w-3xl text-balance">
              <PodvucenaRec>Rezultati,</PodvucenaRec> ne obećanja
            </h1>
            <p className="text-lg text-ink-muted leading-relaxed max-w-2xl">
              Ovde stoji samo ono što možemo da dokažemo brojkama. Nema uniformnih citata petnaest zadovoljnih klijenata, ima jedan slučaj sa stvarnim ulaganjem i stvarnom zaradom, i žive Google recenzije na našoj početnoj strani.
            </p>
          </section>

          {/* ── CASE STUDY KARTICA ──
              Ranije samo tekstualna kartica, cela stranica se svodila na
              jedan pasus. Sad nosi traku od 4 brojke i sličicu istog snimka
              sa studije slučaja, kao dodatni dokaz (vizuelna provera, krug 7,
              ispravka 5f). */}
          <section>
            <Link
              href="/rezultati/mobilni-vulkanizer-milan"
              className="group block bg-ink-surface hover:bg-ink-surface-hover border border-ink-border hover:border-wine rounded-2xl p-5 sm:p-8 md:p-10 transition-colors"
            >
              {/* lg, ne md: na 768px bi 7/12 kolona bila preuska za naslov i
                  4 statistike (isti problem kao na studiji slučaja, krug 8). */}
              {/* `grid-cols-1` (minmax(0,1fr)) ispod lg: bez njega je kolona
                  bila široka koliko pun red adrese u BrowserFrame-u, pa je na
                  320 px kartica izlazila 14 do 26 px van ekrana. */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7">
                  <div className="font-mono text-[11px] uppercase tracking-widest text-wine-text mb-3.5">
                    Google Ads &amp; SEO
                  </div>
                  <h2 className="font-display font-medium text-2xl md:text-3xl mb-3">
                    Mobilni Vulkanizer Milan, 306 odsto povraćaja za šest meseci
                  </h2>
                  <p className="text-ink-muted leading-relaxed mb-6">
                    7.150 evra uloženo, 21.850 evra neto zarade posle svih troškova, u šest meseci. Povraćaj je naš obračun na osnovu brojki koje je dao klijent. Kampanja se i dalje vodi.
                  </p>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
                    {brojke.map((item) => (
                      <div key={item.label} className="bg-ink-bg border border-ink-border rounded-xl p-3 text-center">
                        <div className="font-display font-medium text-lg text-wine-text mb-0.5 whitespace-nowrap">{item.value}</div>
                        <div className="text-ink-muted text-[10px] uppercase tracking-widest font-mono">{item.label}</div>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-sm font-medium">
                    Pročitaj ceo slučaj →
                  </div>
                </div>
                <div className="lg:col-span-5">
                  <BrowserFrame url="mobilnivulkanizermilan.com" className="pointer-events-none">
                    <Image
                      src="/img/milan-vulkanizer-sajt-screenshot.webp"
                      alt="Naslovna strana sajta mobilnivulkanizermilan.com koji smo izradili za Milana"
                      width={1264}
                      height={800}
                      sizes="(min-width: 768px) 35vw, 90vw"
                      className="w-full h-auto"
                    />
                  </BrowserFrame>
                </div>
              </div>
            </Link>
          </section>

        </div>
      </main>
      <Footer />
    </>
  )
}
