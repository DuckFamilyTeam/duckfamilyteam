import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PodvucenaRec from '@/components/PodvucenaRec'
import BrowserFrame from '@/components/BrowserFrame'
import { sajtCenaMin, sajtCenaMax, sajtBrojTipovaBiznisa, mesecnoOdrzavanje } from '@/lib/cenaPodaci'
import PotezRazdelnik from '@/components/PotezRazdelnik'

export const metadata: Metadata = {
  title: 'Izrada sajtova i landing stranica',
  description:
    `Next.js i Astro sajtovi optimizovani za Google od prvog dana. Osnovna cena od ${sajtCenaMin} do ${sajtCenaMax} evra po tipu biznisa, uz dodatke po potrebi. Besplatna konsultacija.`,
  keywords: [
    'izrada sajtova Beograd',
    'izrada sajtova',
    'izrada web sajtova',
    'izrada web sajtova cena',
    'izrada landing stranica',
    'koliko košta sajt',
    'cena izrade sajta Beograd',
    'seo optimizacija sajta',
    'optimizacija sajta',
    'seo Srbija',
    'seo Beograd',
    'Duck Family Team',
  ],
  alternates: {
    canonical: 'https://www.duckfamilyteam.online/usluge/izrada-sajtova',
  },
  openGraph: {
    title: 'Izrada sajtova i landing stranica',
    description: 'Next.js i Astro sajtovi optimizovani za Google od prvog dana.',
    url: 'https://www.duckfamilyteam.online/usluge/izrada-sajtova',
    type: 'website',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Izrada sajtova',
  description:
    'Izrada Next.js i Astro sajtova za firme u Srbiji, sa ugrađenom SEO optimizacijom od prvog dana.',
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
  serviceType: 'Izrada web sajtova',
  // AggregateOffer, ne Offer: cena nije jedna, nego opseg po tipu biznisa.
  // Brojevi se izvode iz `lib/cenaPodaci.ts`, da ne mogu da se raziđu sa kalkulatorom.
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'EUR',
    lowPrice: String(sajtCenaMin),
    highPrice: String(sajtCenaMax),
    offerCount: String(sajtBrojTipovaBiznisa),
    description: `Osnovna cena izrade sajta zavisi od tipa biznisa i ide od ${sajtCenaMin} do ${sajtCenaMax} evra, uz dodatke po potrebi.`,
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Početna', item: 'https://www.duckfamilyteam.online' },
    { '@type': 'ListItem', position: 2, name: 'Izrada sajtova', item: 'https://www.duckfamilyteam.online/usluge/izrada-sajtova' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Koliko košta izrada sajta?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: `Osnovna cena zavisi od tipa biznisa i ide od ${sajtCenaMin} do ${sajtCenaMax} evra, plus dodaci po potrebi (rezervacioni sistem, dvojezičnost, blog, napredna kontakt forma, SEO paket, logo, tekstovi, fotografije, animacije, dodatne stranice). Fleksibilan rok izrade je 14 dana, ubrzana izrada za 7 ili 3 dana ide uz doplatu. Mesečno održavanje sa do 3 izmene košta ${mesecnoOdrzavanje} evra mesečno. Tačan iznos za vaš slučaj izračunava kalkulator na stranici Cene.`,
      },
    },
    {
      '@type': 'Question',
      name: 'Koliko dugo traje izrada sajta?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Fleksibilan rok je 14 dana, u zavisnosti od dostupnosti sadržaja i broja izmena sa vaše strane. Ako vam treba brže, nudimo ubrzanu izradu za 7 ili za 3 dana, uz doplatu koju vidite u kalkulatoru na stranici Cene.',
      },
    },
    {
      '@type': 'Question',
      name: 'Da li će sajt biti optimizovan za Google?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Da. Svaki sajt uključuje meta opise, ključne reči po stranici, JSON-LD structured data, sitemap i brzo učitavanje, bez posebne naplate. Za dublju optimizaciju nudimo poseban SEO paket kao dodatak, dostupan u kalkulatoru cena.',
      },
    },
    {
      '@type': 'Question',
      name: 'Već imam sajt, možete li ga samo poboljšati?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Da. Radimo audit i optimizaciju postojećih sajtova, brzinu učitavanja, SEO osnove i mobilnu prilagođenost, bez da morate da krenete ispočetka, osim ako je to zaista neophodno.',
      },
    },
  ],
}

const tipovi = [
  {
    title: 'Osnovna cena po tipu biznisa',
    price: `${sajtCenaMin} - ${sajtCenaMax} evra`,
    desc: 'Next.js ili Astro sajt, SEO optimizovan. Tačna osnovna cena zavisi od tipa biznisa (npr. frizerski salon, stomatolog, hotel), vidi kalkulator.',
  },
  {
    title: 'Dodaci po potrebi',
    price: 'od 20 evra',
    desc: 'Rezervacioni sistem, dvojezičnost, blog/CMS, napredna kontakt forma, SEO paket, logo, tekstovi, fotografije, animacije, dodatne stranice ili revizije.',
  },
  {
    title: 'Rok izrade',
    price: '14 / 7 / 3 dana',
    desc: 'Fleksibilan rok od 14 dana je uračunat u osnovnu cenu. Ubrzana izrada za 7 ili 3 dana ide uz doplatu.',
  },
  {
    title: 'Mesečno održavanje',
    price: `${mesecnoOdrzavanje} evra / mesečno`,
    desc: 'Do 3 izmene mesečno i redovna kontrola stabilnosti sajta, za klijente koji već imaju sajt kod nas.',
  },
]

const ukljuceno = [
  { title: 'SEO optimizacija', desc: 'Title tagovi, meta opisi, H1-H6 hijerarhija, JSON-LD structured data, sitemap.' },
  { title: 'Brzo učitavanje', desc: 'Cilj je učitavanje ispod 2 sekunde i visok Lighthouse skor na svakom sajtu.' },
  { title: 'Mobilno prilagođen', desc: 'Dizajn koji radi na svim ekranima, od telefona do velikog monitora.' },
  { title: 'Sigurnost', desc: 'HTTPS, sigurni HTTP zaglavlja, bez ranjivosti karakterističnih za stare CMS platforme.' },
  { title: 'Otvoreni grafovi', desc: 'Optimizovano deljenje na Facebook, Instagram i drugim mrežama.' },
  { title: 'GA4 analitika', desc: 'Praćenje saobraćaja i konverzija od prvog dana posle lansiranja.' },
]

export default function IzradaSajtovaPage() {
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
            <span className="text-ink-text">Izrada sajtova</span>
          </nav>

          {/* ── HERO ── */}
          <section className="mb-20 grid lg:grid-cols-12 gap-10 lg:items-center">
            <div className="lg:col-span-7">
              <div className="font-mono text-xs uppercase tracking-[0.12em] text-wine-text mb-4">
                Next.js i Astro sajtovi
              </div>
              <h1 className="font-display font-medium text-4xl md:text-6xl leading-[1.1] tracking-tight mb-6 text-balance">
                <PodvucenaRec>Brzi</PodvucenaRec> sajtovi, optimizovani za Google od prvog dana
              </h1>
              <p className="text-lg text-ink-muted leading-relaxed max-w-2xl mb-8">
                Next.js i Astro sajtovi sa ugrađenom osnovnom SEO optimizacijom, bez posebne naplate, ključne reči i meta podaci su deo same izrade. Dublji SEO paket je dostupan kao dodatak, ako vam zatreba.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/#kontakt" className="bg-wine hover:bg-wine-bright text-ink-text px-10 py-5 rounded-xl font-semibold text-base text-center transition-colors shadow-lg shadow-wine/20">
                  Besplatna konsultacija
                </Link>
                <Link href="#cena" className="px-10 py-5 rounded-xl font-semibold text-base text-center border-2 border-ink-border hover:border-wine transition-colors">
                  Pogledaj cenu
                </Link>
              </div>
            </div>
            {/* Širina ograničena ispod 1024 px: na 768 je ceo okvir bio visok
                oko 578 px i gurao sadržaj ispod preloma (vizuelna provera,
                krug 12, ispravka 3b). Sada je oko 337 px, bez sečenja crteža. */}
            <div className="lg:col-span-5 max-w-md mx-auto w-full lg:max-w-none">
              {/* .svg, u istom jeziku kao AI agenti/GBP/blog ilustracije (tanka
                  parchment linija, wine akcenat, bez teksta i brojki u slici),
                  zamenjuje stari sjajni raster sa munjom i perspektivnom mrežom
                  (vizuelna provera krug 9/10, stavka Vizuali: "dva jezika
                  heroja"). Wireframe stranice u prozoru pregledača, sa
                  kursorom koji klikće na dugme. */}
              <Image
                src="/img/usluge-izrada-sajtova.svg"
                unoptimized
                alt="Wireframe stranice sajta u prozoru pregledača, sa kursorom koji klikće na dugme za akciju"
                width={1000}
                height={753}
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="w-full h-auto rounded-2xl border border-ink-border"
                priority
              />
            </div>
          </section>

          {/* ── PRIMER SAJTA ──
              Dodatni dokaz da "brz sajt koji rangira" nije samo tvrdnja: isti
              snimak kao na studiji slučaja Milan (vizuelna provera, krug 7,
              ispravka 5g). */}
          <section className="mb-20">
            <div className="font-mono text-xs uppercase tracking-widest text-wine-text mb-3">
              Primer sajta koji smo izradili
            </div>
            <h2 className="font-display font-medium text-2xl md:text-3xl tracking-tight mb-6 max-w-2xl">
              Milanov mobilni servis za gume, izrađen i optimizovan kod nas
            </h2>
            <BrowserFrame
              url="mobilnivulkanizermilan.com"
              caption="mobilnivulkanizermilan.com · snimak septembar 2026."
              className="max-w-3xl"
            >
              <Image
                src="/img/milan-vulkanizer-sajt-screenshot.webp"
                alt="Naslovna strana sajta mobilnivulkanizermilan.com koji smo izradili za Milana"
                width={1264}
                height={800}
                sizes="(min-width: 1024px) 55vw, 90vw"
                className="w-full h-auto"
              />
            </BrowserFrame>
            <Link
              href="/rezultati/mobilni-vulkanizer-milan"
              className="inline-flex items-center gap-2 text-wine-text hover:text-ink-text font-medium mt-4 text-sm"
            >
              Pogledajte ceo slučaj, 306 odsto povraćaja za šest meseci →
            </Link>
          </section>

          {/* ── ZAŠTO ── */}
          <section className="mb-20">
            <PotezRazdelnik className="mb-4" />
            <h2 className="font-display font-medium text-3xl md:text-4xl tracking-tight mb-6">
              Zašto Next.js ili Astro, ne WordPress
            </h2>
            <p className="text-ink-muted leading-relaxed mb-4 max-w-3xl">
              WordPress sajtovi nose sobom sporije učitavanje, više bezbednosnih rupa i teže SEO podešavanje. Next.js i Astro sajtovi su brži po prirodi tehnologije, jer se najveći deo stranice generiše unapred.
            </p>
            <p className="text-ink-muted leading-relaxed mb-10 max-w-3xl">
              Google direktno koristi brzinu učitavanja kao faktor rangiranja. Cilj na svakom sajtu koji pravimo je učitavanje ispod 2 sekunde.
            </p>
          </section>

          {/* ── TIPOVI SAJTOVA ── */}
          <section id="cena" className="mb-20">
            <PotezRazdelnik className="mb-4" />
            <h2 className="font-display font-medium text-3xl md:text-4xl tracking-tight mb-3">
              Kako se formira cena
            </h2>
            <p className="text-ink-muted mb-10">
              Cena zavisi od tipa biznisa, dodataka i roka izrade. Nema skrivenih troškova.{' '}
              <Link href="/cene" className="text-wine-text underline underline-offset-2 hover:text-ink-text transition">
                Izračunajte tačnu cenu za vaš sajt u kalkulatoru
              </Link>
              , a šta sve ulazi u cenu sajta i kako da uporedite dve ponude piše u tekstu{' '}
              <Link href="/blog/koliko-kosta-izrada-sajta" className="text-wine-text underline underline-offset-2 hover:text-ink-text transition">
                koliko košta izrada sajta
              </Link>
              .
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {tipovi.map((item) => (
                <div key={item.title} className="bg-ink-surface border border-ink-border rounded-2xl p-6">
                  <h3 className="font-display font-medium text-xl mb-1">{item.title}</h3>
                  <div className="font-mono text-wine-text text-sm mb-3">{item.price}</div>
                  <p className="text-ink-muted text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── ŠTA JE UKLJUČENO ── */}
          <section className="mb-20">
            <PotezRazdelnik className="mb-4" />
            <h2 className="font-display font-medium text-3xl md:text-4xl tracking-tight mb-10">
              Šta je uključeno u svaki sajt
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {ukljuceno.map((item) => (
                <div key={item.title} className="bg-ink-surface border border-ink-border rounded-2xl p-6">
                  <h3 className="font-medium mb-2">{item.title}</h3>
                  <p className="text-ink-muted text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── FAQ ── */}
          <section className="mb-20">
            <PotezRazdelnik className="mb-4" />
            <h2 className="font-display font-medium text-3xl md:text-4xl tracking-tight mb-10">
              Pitanja o izradi sajtova
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
        ctaHeading="Pokrenite novi sajt"
        ctaDescription="Besplatna konsultacija, razgovaramo o vašim potrebama i predlažemo tačan obim posla."
      />
    </>
  )
}
