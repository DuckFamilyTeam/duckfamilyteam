import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import BackButton from '@/components/BackButton'
import CenaKalkulator from '@/components/cene/CenaKalkulator'

export const metadata: Metadata = {
  title: 'Kalkulator cena',
  description:
    'Izračunajte cenu za izradu sajta, Google Ads vođenje i Google Business profil na osnovu vašeg tipa biznisa i potreba. Pun, transparentan cenovnik.',
  keywords: ['kalkulator cena sajta', 'cena izrade sajta', 'Google Ads kampanje cena', 'cena vođenja Google Business profila', 'Duck Family Team'],
  alternates: {
    canonical: 'https://www.duckfamilyteam.online/cene',
  },
  openGraph: {
    title: 'Kalkulator cena | Duck Family Team',
    description: 'Izračunajte cenu za izradu sajta, Google Ads i Google Business profil, prilagođeno vašem biznisu.',
    url: 'https://www.duckfamilyteam.online/cene',
    type: 'website',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Šta je uključeno u mesečno vođenje Google Ads kampanja?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Vođenje Google Ads kampanja, 200 evra mesečno. U to spada svakodnevno praćenje, podešavanje ponuda i mesečni izveštaj sa konkretnim brojkama.',
      },
    },
    {
      '@type': 'Question',
      name: 'Da li cena uključuje budžet za same Google oglase?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ne. Navedena cena je naša naknada za vođenje kampanje. Budžet koji ide direktno Google-u za prikazivanje oglasa je poseban i dogovara se prema vašim ciljevima.',
      },
    },
    {
      '@type': 'Question',
      name: 'Šta ako mi treba samo jedna usluga, ne sve zajedno?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Svaka usluga, Google Ads, Google Business profil i izrada sajta, naplaćuje se pojedinačno — izaberite odgovarajući tab u kalkulatoru. Paket "sve na jednom mestu" je opcija za one koji žele kompletno vođenje na jednom mestu.',
      },
    },
    {
      '@type': 'Question',
      name: 'Da li su cene iz kalkulatora fiksne?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cena za izradu sajta zavisi od tipa biznisa i izabranih dodataka, i prikazuje se kao raspon (minimum, preporučeno, premium). Google Ads i Google Business profil su fiksne, standardne cene. Za dodatne usluge, kao izrada AI skilova i promptova, cena zavisi od obima posla i dogovara se posebno.',
      },
    },
  ],
}

export default function CenePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <main id="glavni-sadrzaj" className="bg-ink-bg text-ink-text pt-28 md:pt-40 pb-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">

          <BackButton />

          {/* ── BREADCRUMB ── */}
          <nav className="mb-8 font-mono text-xs text-ink-muted flex items-center gap-2 uppercase tracking-widest" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-ink-text transition">Početna</Link>
            <span>/</span>
            <span className="text-ink-text">Cene</span>
          </nav>

          {/* ── HERO ── */}
          <section className="mb-16">
            <div className="font-mono text-xs uppercase tracking-[0.12em] text-wine-text mb-4">
              Kalkulator cena
            </div>
            <h1 className="font-display font-medium text-4xl md:text-6xl leading-[1.1] tracking-tight mb-6 max-w-3xl">
              Koliko košta Google Ads, GBP i izrada sajta
            </h1>
            <p className="text-lg text-ink-muted leading-relaxed max-w-2xl">
              Izaberite uslugu, tip biznisa i dodatke — cena se računa odmah, bez skrivenih troškova.
            </p>
          </section>

          {/* ── KALKULATOR ── */}
          <section className="mb-16">
            <CenaKalkulator />
          </section>

          {/* ── AI AGENTI I AUTOMATIZACIJA ── */}
          <section className="mb-16">
            <h2 className="font-display font-medium text-2xl md:text-3xl tracking-tight mb-4">AI agenti i automatizacija</h2>
            <p className="text-ink-muted mb-6 max-w-2xl">
              Cena zavisi od obima i složenosti, javite se za besplatnu konsultaciju.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-ink-surface border border-ink-border rounded-2xl p-6">
                <h3 className="font-display font-medium text-lg mb-2">Bot za odgovaranje i zakazivanje</h3>
                <p className="text-ink-muted text-sm leading-relaxed">
                  Agent koji na sajtu, WhatsApp-u ili Viberu odgovara na najčešća pitanja i pomaže oko zakazivanja termina, 0-24.
                </p>
              </div>
              <div className="bg-ink-surface border border-ink-border rounded-2xl p-6">
                <h3 className="font-display font-medium text-lg mb-2">Automatizacija internih zadataka</h3>
                <p className="text-ink-muted text-sm leading-relaxed">
                  AI skilovi i prompt-sistemi prilagođeni vašem poslovanju: izveštaji, obrada upita, mejlovi.
                </p>
              </div>
              <div className="bg-ink-surface border border-ink-border rounded-2xl p-6">
                <h3 className="font-display font-medium text-lg mb-2">AI agent po meri</h3>
                <p className="text-ink-muted text-sm leading-relaxed">
                  Nešto specifično što nije gore navedeno? Opišite problem, pravimo rešenje za taj slučaj.
                </p>
              </div>
            </div>
            <Link href="/usluge/ai-agenti" className="text-wine-text hover:text-ink-text text-sm font-medium inline-flex items-center gap-2 transition-colors">
              Više o AI agentima i automatizaciji <span className="arrow-fx">→</span>
            </Link>
          </section>

          {/* ── FAQ ── */}
          <section className="mb-16">
            <h2 className="font-display font-medium text-3xl md:text-4xl tracking-tight mb-10">
              Pitanja o cenama
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
              Nije sigurno šta vam treba?
            </h2>
            <p className="text-ink-muted mb-8 max-w-xl mx-auto">
              Besplatna konsultacija, pregledamo vaš biznis i predlažemo tačno ono što vam treba, ništa više.
            </p>
            <Link href="/kontakt" className="bg-wine hover:bg-wine-bright text-ink-text px-10 py-5 rounded-xl font-semibold text-base inline-block transition-colors shadow-lg shadow-wine/20">
              Zakažite besplatnu konsultaciju
            </Link>
          </section>

        </div>
      </main>
      <Footer />
    </>
  )
}
