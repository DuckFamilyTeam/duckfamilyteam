import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import BackButton from '@/components/BackButton'

export const metadata: Metadata = {
  title: 'Rezultati klijenata',
  description:
    'Stvarni, proverljivi rezultati klijenata Duck Family Team. Bez izmišljenih testimonijala, samo brojke koje možemo da dokažemo.',
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

          <BackButton />

          {/* ── BREADCRUMB ── */}
          <nav className="mb-8 font-mono text-xs text-ink-muted flex items-center gap-2 uppercase tracking-widest" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-ink-text transition">Početna</Link>
            <span>/</span>
            <span className="text-ink-text">Rezultati</span>
          </nav>

          {/* ── HERO ── */}
          <section className="mb-16">
            <div className="font-mono text-xs uppercase tracking-[0.12em] text-wine-text mb-4">
              Rezultati
            </div>
            <h1 className="font-display font-medium text-4xl md:text-6xl leading-[1.1] tracking-tight mb-6 max-w-3xl">
              Rezultati, ne obećanja
            </h1>
            <p className="text-lg text-ink-muted leading-relaxed max-w-2xl">
              Ovde stoji samo ono što možemo da dokažemo brojkama. Nema uniformnih citata petnaest zadovoljnih klijenata, ima jedan slučaj sa stvarnim ulaganjem i stvarnom zaradom, i žive Google recenzije na vrhu naše početne strane.
            </p>
          </section>

          {/* ── CASE STUDY KARTICA ── */}
          <section>
            <Link
              href="/rezultati/mobilni-vulkanizer-milan"
              className="group block bg-ink-surface hover:bg-ink-surface-hover border border-ink-border hover:border-wine rounded-2xl p-8 md:p-10 transition-colors"
            >
              <div className="font-mono text-[11px] uppercase tracking-widest text-wine-text mb-3.5">
                Google Ads &amp; SEO
              </div>
              <h2 className="font-display font-medium text-2xl md:text-3xl mb-3">
                Mobilni Vulkanizer Milan, 203 odsto povraćaja za tri meseca
              </h2>
              <p className="text-ink-muted leading-relaxed max-w-2xl mb-5">
                3.550 evra uloženo, 7.210 evra neto zarade posle svih troškova, u tri meseca. Kampanja se i dalje vodi.
              </p>
              <div className="flex items-center gap-2 text-sm font-medium">
                Pročitaj ceo slučaj →
              </div>
            </Link>
          </section>

        </div>
      </main>
      <Footer />
    </>
  )
}
