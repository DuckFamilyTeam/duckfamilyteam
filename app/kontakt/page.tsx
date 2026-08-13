import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import BackButton from '@/components/BackButton'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Kontakt',
  description:
    'Zakažite besplatnu konsultaciju sa Duck Family Team. Telefon, email, adresa i kontakt forma za Google Ads, Google Business profil i izradu sajta.',
  keywords: ['Google Ads agencija kontakt', 'Duck Family Team kontakt', 'zakazivanje konsultacije'],
  alternates: {
    canonical: 'https://www.duckfamilyteam.online/kontakt',
  },
  openGraph: {
    title: 'Kontakt | Duck Family Team',
    description: 'Zakažite besplatnu konsultaciju, telefon, email i kontakt forma.',
    url: 'https://www.duckfamilyteam.online/kontakt',
    type: 'website',
  },
}

const contactPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Kontakt',
  url: 'https://www.duckfamilyteam.online/kontakt',
  about: {
    '@type': 'Organization',
    name: 'Duck Family Team',
    telephone: '+381643877524',
    email: 'stankovic.s.nikola@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Porodice Josipović 2',
      addressLocality: 'Sremčica',
      addressRegion: 'Beograd',
      postalCode: '11253',
      addressCountry: 'RS',
    },
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Početna', item: 'https://www.duckfamilyteam.online' },
    { '@type': 'ListItem', position: 2, name: 'Kontakt', item: 'https://www.duckfamilyteam.online/kontakt' },
  ],
}

export default function KontaktPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navbar />
      <main id="glavni-sadrzaj" className="bg-ink-bg text-ink-text pt-28 md:pt-40 pb-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">

          <BackButton />

          {/* ── BREADCRUMB ── */}
          <nav className="mb-8 font-mono text-xs text-ink-muted flex items-center gap-2 uppercase tracking-widest" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-ink-text transition">Početna</Link>
            <span>/</span>
            <span className="text-ink-text">Kontakt</span>
          </nav>

          {/* ── HERO ── */}
          <section className="mb-16">
            <div className="font-mono text-xs uppercase tracking-[0.12em] text-wine-text mb-4">
              Kontakt
            </div>
            <h1 className="font-display font-medium text-4xl md:text-6xl leading-[1.1] tracking-tight mb-6 max-w-2xl">
              Zakažite besplatnu konsultaciju
            </h1>
            <p className="text-lg text-ink-muted leading-relaxed max-w-2xl">
              Javite se telefonom, mejlom ili preko forme. Odgovaramo u najkraćem roku.
            </p>
          </section>

          {/* ── KONTAKT INFO + FORMA ── */}
          <section className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <div>
                <p className="font-mono text-ink-muted text-xs uppercase tracking-widest mb-2">Direktna linija</p>
                <a href="tel:+381643877524" className="block font-display font-medium text-3xl hover:text-wine-text transition">
                  +381 64 387 7524
                </a>
              </div>
              <div>
                <p className="font-mono text-ink-muted text-xs uppercase tracking-widest mb-2">Email</p>
                <a href="mailto:stankovic.s.nikola@gmail.com" className="block text-xl font-medium hover:text-wine-text transition break-all">
                  stankovic.s.nikola@gmail.com
                </a>
              </div>
              <div>
                <p className="font-mono text-ink-muted text-xs uppercase tracking-widest mb-2">Adresa</p>
                <p className="text-xl font-medium">Porodice Josipović 2, Sremčica, Beograd</p>
              </div>
            </div>

            <div className="bg-ink-surface border border-ink-border rounded-2xl p-8">
              <ContactForm />
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </>
  )
}
