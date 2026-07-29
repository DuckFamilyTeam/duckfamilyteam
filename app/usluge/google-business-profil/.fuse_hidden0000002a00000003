import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Vođenje Google Business profila',
  description:
    'Vođenje Google Business profila: 8 objava i 8 fotografija mesečno, odgovaranje na recenzije, optimizacija profila. 100 evra mesečno.',
  keywords: [
    'vođenje Google Business profila',
    'optimizacija Google Business profila',
    'lokalni seo',
    'local seo',
    'GBP optimizacija Srbija',
    'Google mape optimizacija',
    'Duck Family Team',
  ],
  alternates: {
    canonical: 'https://www.duckfamilyteam.online/usluge/google-business-profil',
  },
  openGraph: {
    title: 'Vođenje Google Business profila',
    description: 'Google Business profil koji vas nalazi u okolini. Objave, fotografije, recenzije, optimizacija.',
    url: 'https://www.duckfamilyteam.online/usluge/google-business-profil',
    type: 'website',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Vođenje Google Business profila',
  description:
    'Vođenje Google Business profila za firme u Srbiji: objave, fotografije, odgovaranje na recenzije i optimizacija profila za lokalnu pretragu.',
  provider: {
    '@type': 'Organization',
    name: 'Duck Family Team',
    url: 'https://www.duckfamilyteam.online',
    telephone: '+381643877524',
    email: 'stankovic.s.nikola@gmail.com',
  },
  areaServed: [
    { '@type': 'Country', name: 'Serbia' },
    { '@type': 'City', name: 'Beograd' },
  ],
  serviceType: 'Google Business Profile Management',
  offers: {
    '@type': 'Offer',
    priceCurrency: 'EUR',
    price: '100',
    description: 'Vođenje profila, 100 evra mesečno.',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Početna', item: 'https://www.duckfamilyteam.online' },
    { '@type': 'ListItem', position: 2, name: 'Google Business profil', item: 'https://www.duckfamilyteam.online/usluge/google-business-profil' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Šta je Google Business profil?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Google Business profil je besplatan profil vaše firme koji se pojavljuje na Google mapi i u lokalnoj pretrazi. Prikazuje radno vreme, lokaciju, fotografije, recenzije i kontakt, pre nego što neko uopšte poseti vaš sajt.',
      },
    },
    {
      '@type': 'Question',
      name: 'Da li je sam profil besplatan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Da, otvaranje i osnovno korišćenje Google Business profila je besplatno. Mi naplaćujemo vođenje profila, objave, fotografije, odgovaranje na recenzije i optimizaciju, 100 evra mesečno.',
      },
    },
    {
      '@type': 'Question',
      name: 'Šta tačno radite u vođenju profila?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Mesečno postavljamo 8 objava i 8 fotografija, odgovaramo na recenzije i optimizujemo profil, kategorije, opis i atribute, da vas ljudi lakše pronađu kad pretražuju vašu uslugu u okolini.',
      },
    },
    {
      '@type': 'Question',
      name: 'Koliko brzo se vide rezultati optimizacije profila?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Prve promene u broju poziva i poseta profila obično se vide u prvih mesec dana redovnog objavljivanja i odgovaranja na recenzije. Lokalna pretraga nagrađuje profile koji su redovno aktivni.',
      },
    },
  ],
}

const sta_radimo = [
  { title: '8 objava mesečno', desc: 'Redovne objave o uslugama, ponudama i novostima, direktno na profilu.' },
  { title: '8 fotografija mesečno', desc: 'Sveže fotografije prostora, tima i rada, jer profili sa fotografijama dobijaju više poziva.' },
  { title: 'Odgovaranje na recenzije', desc: 'Odgovaramo na svaku novu recenziju, pozitivnu i negativnu, u vaše ime ili uz vašu potvrdu.' },
  { title: 'Optimizacija profila', desc: 'Kategorije, opis, radno vreme i atributi podešeni tako da vas Google prikazuje za prave pretrage.' },
]

export default function GoogleBusinessProfilPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <main className="bg-ink-bg text-ink-text pt-28 md:pt-40 pb-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">

          {/* ── BREADCRUMB ── */}
          <nav className="mb-8 font-mono text-xs text-ink-muted flex items-center gap-2 uppercase tracking-widest" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-ink-text transition">Početna</Link>
            <span>/</span>
            <span className="text-ink-text">Google Business profil</span>
          </nav>

          {/* ── HERO ── */}
          <section className="mb-20">
            <div className="font-mono text-xs uppercase tracking-[0.12em] text-wine-bright mb-4">
              Google Business profil
            </div>
            <h1 className="font-display font-medium text-4xl md:text-6xl leading-[1.1] tracking-tight mb-6 max-w-3xl">
              Google Business profil koji vas nalazi u okolini
            </h1>
            <p className="text-lg text-ink-muted leading-relaxed max-w-2xl mb-8">
              Besplatan je i gradi poverenje pre nego što neko uopšte klikne na vaš sajt. Mi ga vodimo umesto vas: objave, fotografije, recenzije, optimizacija.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/#kontakt" className="bg-wine hover:bg-wine-bright text-ink-text px-8 py-4 rounded-xl font-medium text-center transition-colors">
                Besplatna konsultacija
              </Link>
              <Link href="#cena" className="px-8 py-4 rounded-xl font-medium text-center border border-ink-border hover:border-wine transition-colors">
                Pogledaj cenu
              </Link>
            </div>
          </section>

          {/* ── ZAŠTO ── */}
          <section className="mb-20">
            <h2 className="font-display font-medium text-3xl md:text-4xl tracking-tight mb-6">
              Zašto je Google Business profil bitan
            </h2>
            <p className="text-ink-muted leading-relaxed mb-4 max-w-3xl">
              Kad neko u vašem gradu pretraži uslugu koju nudite, Google prvo prikazuje mapu sa profilima firmi u okolini, pre svih ostalih rezultata. Profil bez fotografija, bez odgovora na recenzije i bez redovnih objava gubi u odnosu na konkurenciju koja se time bavi.
            </p>
            <p className="text-ink-muted leading-relaxed mb-10 max-w-3xl">
              Ovo je isti profil na kom stoje vaše žive Google recenzije, ocena 5.0.
            </p>
          </section>

          {/* ── ŠTA RADIMO ── */}
          <section className="mb-20">
            <h2 className="font-display font-medium text-3xl md:text-4xl tracking-tight mb-10">
              Šta radimo mesečno
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {sta_radimo.map((item) => (
                <div key={item.title} className="bg-ink-surface border border-ink-border rounded-2xl p-6">
                  <h3 className="font-display font-medium text-xl mb-2">{item.title}</h3>
                  <p className="text-ink-muted text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── CENA ── */}
          <section id="cena" className="mb-20">
            <h2 className="font-display font-medium text-3xl md:text-4xl tracking-tight mb-6">
              Cena
            </h2>
            <div className="bg-ink-surface border border-ink-border rounded-2xl p-6 md:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="font-medium text-lg mb-1">Vođenje Google Business profila</h3>
                <p className="text-ink-muted text-sm">8 objava i 8 fotografija mesečno, odgovaranje na recenzije, optimizacija profila.</p>
              </div>
              <span className="font-mono text-wine-bright text-lg whitespace-nowrap">100 evra mesečno</span>
            </div>
          </section>

          {/* ── FAQ ── */}
          <section className="mb-20">
            <h2 className="font-display font-medium text-3xl md:text-4xl tracking-tight mb-10">
              Pitanja o Google Business profilu
            </h2>
            <div className="space-y-4">
              {faqSchema.mainEntity.map((item) => (
                <details key={item.name} className="bg-ink-surface border border-ink-border rounded-2xl p-6 group">
                  <summary className="font-medium cursor-pointer text-lg list-none flex justify-between items-center gap-4">
                    {item.name}
                    <span className="text-wine-bright shrink-0 group-open:rotate-180 transition-transform">↓</span>
                  </summary>
                  <p className="mt-4 text-ink-muted leading-relaxed">{item.acceptedAnswer.text}</p>
                </details>
              ))}
            </div>
          </section>

          {/* ── CTA ── */}
          <section className="bg-ink-surface border border-ink-border rounded-2xl p-10 md:p-16 text-center">
            <h2 className="font-display font-medium text-3xl md:text-4xl mb-4">
              Neka vas ljudi u okolini pronađu
            </h2>
            <p className="text-ink-muted mb-8 max-w-xl mx-auto">
              Besplatna konsultacija, pogledamo vaš profil i kažemo tačno šta mu nedostaje.
            </p>
            <Link href="/#kontakt" className="bg-wine hover:bg-wine-bright text-ink-text px-10 py-5 rounded-xl font-medium inline-block transition-colors">
              Zakažite besplatnu konsultaciju
            </Link>
          </section>

        </div>
      </main>
      <Footer />
    </>
  )
}
