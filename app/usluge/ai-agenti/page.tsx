import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import BackButton from '@/components/BackButton'

export const metadata: Metadata = {
  title: 'AI agenti i automatizacija',
  description:
    'AI agenti koji odgovaraju klijentima i zakazuju termine 0-24, i automatizacija ponavljajućih zadataka u vašem poslovanju. Cena po dogovoru, besplatna konsultacija.',
  keywords: [
    'AI agent Srbija',
    'AI chatbot za biznis',
    'automatizacija poslovanja AI',
    'AI bot za zakazivanje termina',
    'AI skilovi i promptovi',
    'Duck Family Team',
  ],
  alternates: {
    canonical: 'https://www.duckfamilyteam.online/usluge/ai-agenti',
  },
  openGraph: {
    title: 'AI agenti i automatizacija',
    description: 'AI agenti koji odgovaraju klijentima i zakazuju termine 0-24, i automatizacija ponavljajućih zadataka.',
    url: 'https://www.duckfamilyteam.online/usluge/ai-agenti',
    type: 'website',
  },
}

// Nema `offers` u ovoj šemi — cena zavisi od obima i dogovara se pojedinačno,
// za razliku od sajta i Ads/GBP usluga koje imaju fiksan cenovnik.
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI agenti i automatizacija',
  description:
    'Izrada AI agenata, čet botova i automatizacije poslovnih zadataka za firme u Srbiji.',
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
  serviceType: 'AI agenti i automatizacija',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Početna', item: 'https://www.duckfamilyteam.online' },
    { '@type': 'ListItem', position: 2, name: 'AI agenti i automatizacija', item: 'https://www.duckfamilyteam.online/usluge/ai-agenti' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Koliko košta AI agent ili automatizacija?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cena zavisi od obima i složenosti — da li agent samo odgovara na pitanja ili se povezuje sa vašim sistemom za zakazivanje, koliko jezika govori, koliko zadataka automatizuje. Javite se za besplatnu konsultaciju i konkretnu ponudu.',
      },
    },
    {
      '@type': 'Question',
      name: 'Da li agent radi na srpskom jeziku?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Da, agenti se prave da razgovaraju na srpskom, uključujući svakodnevni govor kojim vaši klijenti stvarno pišu.',
      },
    },
    {
      '@type': 'Question',
      name: 'Gde agent može da radi — sajt, WhatsApp, Viber?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Zavisi od projekta. Najčešće su to sajt, WhatsApp ili Viber, ali se dogovara prema tome gde vaši klijenti stvarno pišu.',
      },
    },
    {
      '@type': 'Question',
      name: 'Šta ako mi treba nešto specifično, van ovih primera?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Opišite konkretan zadatak ili problem — pravimo rešenje po meri, ne šablon.',
      },
    },
  ],
}

const usluge = [
  {
    title: 'Bot za odgovaranje i zakazivanje',
    desc: 'Agent koji na sajtu, WhatsApp-u ili Viberu odgovara na najčešća pitanja klijenata i pomaže oko zakazivanja termina, 0-24. Za biznise gde ljudi pišu van radnog vremena — klinike, hoteli, restorani, saloni.',
  },
  {
    title: 'Automatizacija internih zadataka',
    desc: 'AI skilovi i prompt-sistemi prilagođeni vašem poslovanju: brža obrada upita, automatski izveštaji, sortiranje i odgovaranje na mejlove. Za vlasnike koji gube vreme na ponavljajuće zadatke.',
  },
  {
    title: 'AI agent po meri',
    desc: 'Ako vam treba nešto specifično što nije gore navedeno, opišite problem — pravimo rešenje za taj konkretan slučaj.',
  },
]

export default function AiAgentiPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <main id="glavni-sadrzaj" className="bg-ink-bg text-ink-text pt-28 md:pt-40 pb-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">

          <BackButton />

          {/* ── BREADCRUMB ── */}
          <nav className="mb-8 font-mono text-xs text-ink-muted flex items-center gap-2 uppercase tracking-widest" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-ink-text transition">Početna</Link>
            <span>/</span>
            <span className="text-ink-text">AI agenti i automatizacija</span>
          </nav>

          {/* ── HERO ── */}
          <section className="mb-20">
            <div className="font-mono text-xs uppercase tracking-[0.12em] text-wine-text mb-4">
              AI agenti i automatizacija
            </div>
            <h1 className="font-display font-medium text-4xl md:text-6xl leading-[1.1] tracking-tight mb-6 max-w-3xl">
              AI koji radi dok vi ne morate
            </h1>
            <p className="text-lg text-ink-muted leading-relaxed max-w-2xl mb-8">
              Agenti koji odgovaraju klijentima i zakazuju termine, i automatizacija ponavljajućih zadataka u vašem poslovanju. Bez šablona — rešenje se pravi za vaš konkretan slučaj.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/kontakt" className="bg-wine hover:bg-wine-bright text-ink-text px-10 py-5 rounded-xl font-semibold text-base text-center transition-colors shadow-lg shadow-wine/20">
                Besplatna konsultacija
              </Link>
              <Link href="#usluge" className="px-10 py-5 rounded-xl font-semibold text-base text-center border-2 border-ink-border hover:border-wine transition-colors">
                Pogledaj šta nudimo
              </Link>
            </div>
          </section>

          {/* ── ŠTA NUDIMO ── */}
          <section id="usluge" className="mb-20">
            <h2 className="font-display font-medium text-3xl md:text-4xl tracking-tight mb-3">
              Šta nudimo
            </h2>
            <p className="text-ink-muted mb-10">
              Cena zavisi od obima i složenosti, javite se za besplatnu konsultaciju.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {usluge.map((item) => (
                <div key={item.title} className="bg-ink-surface border border-ink-border rounded-2xl p-6">
                  <h3 className="font-display font-medium text-xl mb-2">{item.title}</h3>
                  <p className="text-ink-muted text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── FAQ ── */}
          <section className="mb-20">
            <h2 className="font-display font-medium text-3xl md:text-4xl tracking-tight mb-10">
              Pitanja o AI agentima
            </h2>
            <div className="space-y-4">
              {faqSchema.mainEntity.map((item) => (
                <details key={item.name} className="bg-ink-surface border border-ink-border rounded-2xl p-6 group">
                  <summary className="font-medium cursor-pointer text-lg list-none flex justify-between items-center gap-4">
                    {item.name}
                    <span className="text-wine-text shrink-0 group-open:rotate-180 transition-transform">↓</span>
                  </summary>
                  <p className="mt-4 text-ink-muted leading-relaxed">{item.acceptedAnswer.text}</p>
                </details>
              ))}
            </div>
          </section>

          {/* ── CTA ── */}
          <section className="bg-ink-surface border border-ink-border rounded-2xl p-10 md:p-16 text-center">
            <h2 className="font-display font-medium text-3xl md:text-4xl mb-4">
              Imate zadatak koji AI može da preuzme?
            </h2>
            <p className="text-ink-muted mb-8 max-w-xl mx-auto">
              Opišite šta vam treba, pregledamo i predlažemo konkretno rešenje i cenu.
            </p>
            <Link href="/kontakt" className="bg-wine hover:bg-wine-bright text-ink-text px-10 py-5 rounded-xl font-semibold text-base inline-block transition-colors shadow-lg shadow-wine/20">
              Zatražite besplatnu procenu
            </Link>
          </section>

        </div>
      </main>
      <Footer />
    </>
  )
}
