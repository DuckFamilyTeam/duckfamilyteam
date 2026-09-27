import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PodvucenaRec from '@/components/PodvucenaRec'

export const metadata: Metadata = {
  title: 'O nama',
  description:
    'Nikola i Anđela, tim iza Duck Family Team. Sertifikovani Google Ads stručnjaci koji lično rade na svakoj kampanji i sajtu.',
  alternates: {
    canonical: 'https://www.duckfamilyteam.online/o-nama',
  },
  openGraph: {
    title: 'O nama | Duck Family Team',
    description: 'Nikola i Anđela, tim iza Duck Family Team.',
    url: 'https://www.duckfamilyteam.online/o-nama',
    type: 'profile',
  },
}

const aboutPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'O nama',
  url: 'https://www.duckfamilyteam.online/o-nama',
  mainEntity: {
    '@type': 'Organization',
    name: 'Duck Family Team',
    founder: [
      { '@type': 'Person', name: 'Nikola Stanković' },
      { '@type': 'Person', name: 'Anđela Stanković' },
    ],
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Početna', item: 'https://www.duckfamilyteam.online' },
    { '@type': 'ListItem', position: 2, name: 'O nama', item: 'https://www.duckfamilyteam.online/o-nama' },
  ],
}

export default function ONamaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navbar />
      <main id="glavni-sadrzaj" className="bg-ink-bg text-ink-text pt-28 md:pt-40 pb-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">

          {/* ── BREADCRUMB ── */}
          <nav className="mb-8 font-mono text-xs text-ink-muted flex items-center gap-2 uppercase tracking-widest" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-ink-text transition">Početna</Link>
            <span>/</span>
            <span className="text-ink-text">O nama</span>
          </nav>

          {/* ── HERO ── */}
          <section className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.12em] text-wine-text mb-4">
                O nama
              </div>
              <h1 className="font-display font-medium text-4xl md:text-5xl leading-[1.1] tracking-tight mb-6">
                <PodvucenaRec>Nikola i Anđela</PodvucenaRec>, tim iza Duck Family Team
              </h1>
              <p className="text-lg text-ink-muted leading-relaxed mb-4">
                „Duck“ nije samo nadimak naše porodice, to je obećanje o lojalnosti. Svaku kampanju i svaki sajt radimo nas dvoje lično, ne prosleđujemo vaš nalog nepoznatom timu.
              </p>
              <p className="text-lg text-ink-muted leading-relaxed">
                Radimo sa firmama svih veličina, od lokalnih zanatlija i salona do srednjih kompanija, spremni smo i za e-commerce projekte, i budžet uvek prilagođavamo realnim mogućnostima i ciljevima klijenta.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/img/andjela-i-nikola-u-radnoj-sobi-1.png"
                alt="Anđela i Nikola Stanković, Google Ads stručnjaci, Duck Family Team"
                width={600}
                height={500}
                className="rounded-2xl border border-ink-border w-full object-cover"
              />
            </div>
          </section>

          {/* ── SERTIFIKATI ── */}
          <section className="mb-16">
            <h2 className="font-display font-medium text-2xl md:text-3xl tracking-tight mb-6">
              Sertifikati
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-ink-surface border border-ink-border rounded-2xl p-6">
                <div className="w-12 h-12 rounded-full bg-wine/15 border border-wine flex items-center justify-center mb-4">
                  <span className="font-mono text-wine-text text-xs font-semibold tracking-wide">GA</span>
                </div>
                <h3 className="font-medium">Nikola Stanković</h3>
                <p className="text-ink-muted text-sm mb-4">Sertifikovani Google Ads stručnjak</p>
                <a
                  href="/img/nikola-stankovic-slika-sertifikata.png"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-wine-text text-xs font-mono uppercase tracking-widest hover:text-ink-text transition"
                >
                  Pogledaj sertifikat →
                </a>
              </div>
              <div className="bg-ink-surface border border-ink-border rounded-2xl p-6">
                <div className="w-12 h-12 rounded-full bg-wine/15 border border-wine flex items-center justify-center mb-4">
                  <span className="font-mono text-wine-text text-xs font-semibold tracking-wide">GA</span>
                </div>
                <h3 className="font-medium">Anđela Stanković</h3>
                <p className="text-ink-muted text-sm mb-4">Sertifikovani Google Ads stručnjak</p>
                <a
                  href="/img/andjela-slika-sertifikata.png"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-wine-text text-xs font-mono uppercase tracking-widest hover:text-ink-text transition"
                >
                  Pogledaj sertifikat →
                </a>
              </div>
            </div>
          </section>

        </div>
      </main>
      <Footer
        ctaHeading="Upoznajmo se"
        ctaDescription="Besplatna konsultacija, bez obaveze."
      />
    </>
  )
}
