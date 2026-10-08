import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PodvucenaRec from '@/components/PodvucenaRec'

export const metadata: Metadata = {
  title: 'AI agenti i automatizacija',
  description:
    'AI agenti koji odgovaraju klijentima i zakazuju termine 0-24, i automatizacija ponavljajućih zadataka u vašem poslovanju. Cena se dogovara po projektu.',
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
        text: 'Cena zavisi od obima i složenosti: da li agent samo odgovara na pitanja ili se povezuje sa vašim sistemom za zakazivanje, koliko jezika govori, koliko zadataka automatizuje. Javite se za besplatnu konsultaciju i konkretnu ponudu.',
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
      name: 'Gde agent može da radi: sajt, WhatsApp, Viber?',
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
        text: 'Opišite konkretan zadatak ili problem. Pravimo rešenje za taj slučaj, ne šablon.',
      },
    },
  ],
}

const usluge = [
  {
    title: 'Bot za odgovaranje i zakazivanje',
    desc: 'Agent koji na sajtu, WhatsApp-u ili Viberu odgovara na najčešća pitanja klijenata i pomaže oko zakazivanja termina, 0-24. Za biznise gde ljudi pišu van radnog vremena: klinike, hoteli, restorani, saloni.',
  },
  {
    title: 'Automatizacija internih zadataka',
    desc: 'AI skilovi i prompt-sistemi prilagođeni vašem poslovanju: brža obrada upita, automatski izveštaji, sortiranje i odgovaranje na mejlove. Za vlasnike koji gube vreme na ponavljajuće zadatke.',
  },
  {
    title: 'AI agent po meri',
    desc: 'Ako vam treba nešto specifično što nije gore navedeno, opišite problem. Pravimo rešenje za taj konkretan slučaj.',
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

          {/* ── BREADCRUMB ── */}
          <nav className="mb-8 font-mono text-xs text-ink-muted flex items-center gap-2 uppercase tracking-widest" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-ink-text transition">Početna</Link>
            <span>/</span>
            <span className="text-ink-text">AI agenti i automatizacija</span>
          </nav>

          {/* ── HERO ── */}
          <section className="mb-20 grid lg:grid-cols-12 gap-10 lg:items-center">
            <div className="lg:col-span-7">
              <div className="font-mono text-xs uppercase tracking-[0.12em] text-wine-text mb-4">
                Odgovori i zakazivanje 0-24
              </div>
              <h1 className="font-display font-medium text-4xl md:text-6xl leading-[1.1] tracking-tight mb-6 text-balance">
                AI koji <PodvucenaRec>radi</PodvucenaRec> dok vi ne morate
              </h1>
              <p className="text-lg text-ink-muted leading-relaxed max-w-2xl mb-8">
                Agenti koji odgovaraju klijentima i zakazuju termine, i automatizacija ponavljajućih zadataka u vašem poslovanju. Bez šablona: rešenje pravimo za vaš konkretan slučaj.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/kontakt" className="bg-wine hover:bg-wine-bright text-ink-text px-10 py-5 rounded-xl font-semibold text-base text-center transition-colors shadow-lg shadow-wine/20">
                  Besplatna konsultacija
                </Link>
                <Link href="#usluge" className="px-10 py-5 rounded-xl font-semibold text-base text-center border-2 border-ink-border hover:border-wine transition-colors">
                  Pogledaj šta nudimo
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5">
              {/* .svg, ne generisani robot sa antenom: ista zamerka kao na
                  blogu, robot glava sa antenom je generička AI-marketing
                  ikona (vizuelna provera krug 7, stavka 9). Novi crtež je u
                  jeziku ostalih ilustracija i priča konkretnu priču: poruka →
                  automatizacija → zakazan termin. */}
              <Image
                src="/img/usluge-ai-agenti.svg"
                unoptimized
                alt="Poruka klijenta, automatski odgovor i zakazan termin, bez ljudske intervencije"
                width={1000}
                height={753}
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="w-full h-auto rounded-2xl border border-ink-border"
                priority
              />
            </div>
          </section>

          {/* ── KAKO IZGLEDA JEDAN RAZGOVOR ──
              Konkretan tok kao tri povezane kartice, NE ponavlja hero SVG
              (velika scena, orbita, dijagram) nego sitne, ravne ikonice u
              horizontalnom nizu sa strelicama — nov kompozicijski obrazac na
              stranici (vizuelna provera, krug 10, preostala ispravka 2:
              "drugačije telo AI agenata", stavke 7 Raznolikost i 9
              Originalnost). */}
          <section className="mb-20">
            <h2 className="font-display font-medium text-3xl md:text-4xl tracking-tight mb-3">
              Kako izgleda jedan razgovor
            </h2>
            <p className="text-ink-muted mb-10 max-w-2xl">
              Konkretan tok, od prve poruke do zakazanog termina, bez vašeg učešća.
            </p>
            <div className="flex flex-col md:flex-row md:items-stretch gap-4">
              <div className="flex-1 bg-ink-surface border border-ink-border rounded-2xl p-6">
                <div className="w-14 h-14 rounded-full bg-wine/15 border border-wine flex items-center justify-center mb-5">
                  <svg width="26" height="26" viewBox="0 0 56 56" fill="none" aria-hidden="true">
                    <rect x="14" y="17" width="28" height="20" rx="8" stroke="#F2EAE2" strokeWidth="2.5" />
                    <path d="M20 37 L20 44 L28 37 Z" stroke="#F2EAE2" strokeWidth="2.5" strokeLinejoin="round" />
                    <circle cx="22" cy="27" r="2" fill="#F2EAE2" />
                    <circle cx="28" cy="27" r="2" fill="#F2EAE2" />
                    <circle cx="34" cy="27" r="2" fill="#F2EAE2" />
                  </svg>
                </div>
                <div className="font-mono text-xs text-ink-muted mb-2">01</div>
                <h3 className="font-display font-medium text-lg mb-2">Klijent piše poruku</h3>
                <p className="text-ink-muted text-sm leading-relaxed">
                  Na sajtu, WhatsApp-u ili Viberu, u bilo koje doba dana ili noći.
                </p>
              </div>

              <div className="hidden md:flex items-center justify-center text-wine-text text-2xl shrink-0" aria-hidden="true">→</div>
              <div className="flex md:hidden items-center justify-center text-wine-text text-2xl" aria-hidden="true">↓</div>

              <div className="flex-1 bg-ink-surface border border-ink-border rounded-2xl p-6">
                <div className="w-14 h-14 rounded-full bg-wine/15 border border-wine flex items-center justify-center mb-5">
                  <svg width="26" height="26" viewBox="0 0 56 56" fill="none" aria-hidden="true">
                    <path d="M28 14 L31 25 L42 28 L31 31 L28 42 L25 31 L14 28 L25 25 Z" fill="#F2EAE2" />
                  </svg>
                </div>
                <div className="font-mono text-xs text-ink-muted mb-2">02</div>
                <h3 className="font-display font-medium text-lg mb-2">Agent odgovara i predlaže termin</h3>
                <p className="text-ink-muted text-sm leading-relaxed">
                  Prepoznaje pitanje, odgovara na srpskom i odmah nudi slobodan termin, bez čekanja na čoveka.
                </p>
              </div>

              <div className="hidden md:flex items-center justify-center text-wine-text text-2xl shrink-0" aria-hidden="true">→</div>
              <div className="flex md:hidden items-center justify-center text-wine-text text-2xl" aria-hidden="true">↓</div>

              <div className="flex-1 bg-ink-surface border border-ink-border rounded-2xl p-6">
                <div className="w-14 h-14 rounded-full bg-wine/15 border border-wine flex items-center justify-center mb-5">
                  <svg width="26" height="26" viewBox="0 0 56 56" fill="none" aria-hidden="true">
                    <rect x="14" y="18" width="28" height="24" rx="4" stroke="#F2EAE2" strokeWidth="2.5" />
                    <line x1="14" y1="25" x2="42" y2="25" stroke="#F2EAE2" strokeOpacity="0.4" strokeWidth="1.5" />
                    <line x1="20" y1="14" x2="20" y2="20" stroke="#F2EAE2" strokeWidth="2.5" strokeLinecap="round" />
                    <line x1="36" y1="14" x2="36" y2="20" stroke="#F2EAE2" strokeWidth="2.5" strokeLinecap="round" />
                    <path d="M22 33 l5 5 9 -10" stroke="#F2EAE2" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  </svg>
                </div>
                <div className="font-mono text-xs text-ink-muted mb-2">03</div>
                <h3 className="font-display font-medium text-lg mb-2">Termin se zakazuje</h3>
                <p className="text-ink-muted text-sm leading-relaxed">
                  Klijent potvrđuje, termin upada u kalendar, a vi dobijate gotov dogovoren posao.
                </p>
              </div>
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

        </div>
      </main>
      <Footer
        ctaHeading="Imate zadatak koji AI može da preuzme?"
        ctaDescription="Opišite šta vam treba, pregledamo i predlažemo konkretno rešenje i cenu."
      />
    </>
  )
}
