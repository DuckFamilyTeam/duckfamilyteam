import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import BackButton from '@/components/BackButton'

export const metadata: Metadata = {
  title: 'Google Ads marketing i kampanje',
  description:
    'Google Ads kampanje fokusirane na pozive i konverzije, ne na broj klikova. Smart Bidding, remarketing, mesečno vođenje 200 evra. Besplatna konsultacija.',
  keywords: [
    'Google Ads marketing',
    'Google Ads kampanje',
    'Google Ads kampanje cena',
    'cena online reklama',
    'online reklame',
    'digitalni marketing',
    'online marketing',
    'PPC agencija Srbija',
    'reklamiranje na Google-u',
    'vođenje Google Ads kampanja cena',
    'Google Ads specijalista Srbija',
    'Duck Family Team',
  ],
  alternates: {
    canonical: 'https://www.duckfamilyteam.online/usluge/google-ads',
  },
  openGraph: {
    title: 'Google Ads marketing i kampanje',
    description:
      'PPC kampanje fokusirane na konverzije i pozive. Smart Bidding, remarketing, potpuna transparentnost.',
    url: 'https://www.duckfamilyteam.online/usluge/google-ads',
    type: 'website',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Google Ads kampanje',
  description:
    'Kreiranje, optimizacija i vođenje Google Ads kampanja za firme u Srbiji. Google Search, Shopping, Display i Remarketing.',
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
  serviceType: 'Google Ads PPC',
  offers: {
    '@type': 'Offer',
    priceCurrency: 'EUR',
    price: '200',
    description: 'Mesečno vođenje Google Ads kampanja, 200 evra mesečno.',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Početna', item: 'https://www.duckfamilyteam.online' },
    { '@type': 'ListItem', position: 2, name: 'Google Ads', item: 'https://www.duckfamilyteam.online/usluge/google-ads' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Koliko košta vođenje Google Ads kampanja?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Mesečno vođenje Google Ads kampanja košta 200 evra. U to spada svakodnevno praćenje, podešavanje ponuda i mesečni izveštaj sa konkretnim brojkama. Jednokratna postavka kampanje, bez mesečnog vođenja, košta 70 evra po kampanji.',
      },
    },
    {
      '@type': 'Question',
      name: 'Koliko brzo se vide rezultati Google Ads kampanja?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Prve posete stižu u prvih 24 do 48 sati od pokretanja kampanje. Kampanja radi stabilnije posle 2 do 4 nedelje, kada algoritam sakupi dovoljno podataka za Smart Bidding.',
      },
    },
    {
      '@type': 'Question',
      name: 'Šta je Smart Bidding?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Smart Bidding je Google-ov automatizovani sistem licitiranja koji koristi mašinsko učenje za optimizaciju konverzija u realnom vremenu. Koristimo ga zajedno sa remarketingom da vratimo posetioce koji nisu odmah konvertovali.',
      },
    },
    {
      '@type': 'Question',
      name: 'Radite li Google Ads i za manje firme?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Da, radimo sa firmama svih veličina, od lokalnih zanatlija do srednjih kompanija. Budžet i strategiju prilagođavamo realnim mogućnostima i ciljevima klijenta.',
      },
    },
    {
      '@type': 'Question',
      name: 'Da li garantujete prvo mesto na Google-u?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nijedna ozbiljna agencija ne može da garantuje tačnu poziciju, jer Google algoritam nije pod nečijom kontrolom. Garantujemo transparentan rad, primenu proverenih tehnika i mesečno izveštavanje o napretku.',
      },
    },
  ],
}

const kampanje = [
  {
    title: 'Google Search kampanje',
    desc: 'Oglas se prikazuje kada ljudi aktivno traže vašu uslugu. Najveća namera kupovine, direktne konverzije i pozivi.',
  },
  {
    title: 'Google Shopping kampanje',
    desc: 'Proizvod se prikazuje sa slikom, cenom i nazivom prodavnice direktno u pretrazi. Za online prodavnice koje žele veću prodaju.',
  },
  {
    title: 'Google Display mreža',
    desc: 'Baneri na milionima sajtova i YouTube-u. Za prepoznatljivost brenda i dosezanje ljudi koji tek istražuju.',
  },
  {
    title: 'Remarketing kampanje',
    desc: 'Oglas prati ljude koji su već posetili vaš sajt ali nisu pozvali ili kupili. Radi se o toploj publici koja vas već poznaje.',
  },
  {
    title: 'Performance Max',
    desc: 'Google-ova kampanja koja automatski raspoređuje oglase na Search, Display, YouTube, Gmail i Maps.',
  },
  {
    title: 'Google lokalne kampanje',
    desc: 'Za biznise koji targetiraju kupce u Beogradu ili bilo kom gradu u Srbiji. Oglas se prikazuje ljudima u neposrednoj blizini.',
  },
]

const proces = [
  {
    step: '01',
    title: 'Analiza naloga i konkurencije',
    desc: 'Pre pokretanja kampanje analiziramo vaše tržište, konkurente i ključne reči sa realnim potencijalom za konverziju.',
  },
  {
    step: '02',
    title: 'Struktura kampanje i ključne reči',
    desc: 'Biramo ključne reči sa visokom namerom kupovine, organizovane u tematske grupe oglasa radi nižeg troška po kliku.',
  },
  {
    step: '03',
    title: 'Pisanje oglasa',
    desc: 'Pišemo oglase koji vode na jasnu akciju, poziv ili formu. Po potrebi predlažemo izmene na landing stranici.',
  },
  {
    step: '04',
    title: 'Podešavanje konverzija',
    desc: 'Svaka kampanja dobija praćenje konverzija, poziva i formi u GA4. Bez ovoga se ne zna šta zaista radi.',
  },
  {
    step: '05',
    title: 'Optimizacija',
    desc: 'Pauziramo ključne reči koje ne rade, testiramo oglase i skaliramo budžet na ono što donosi pozive.',
  },
  {
    step: '06',
    title: 'Mesečni izveštaj',
    desc: 'Svakog meseca dobijate izveštaj sa impresijama, klikovima, cenom po kliku i brojem konverzija.',
  },
]

export default function GoogleAdsPage() {
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
            <span className="text-ink-text">Google Ads</span>
          </nav>

          {/* ── HERO ── */}
          <section className="mb-20">
            <div className="font-mono text-xs uppercase tracking-[0.12em] text-wine-text mb-4">
              Google Ads marketing
            </div>
            <h1 className="font-display font-medium text-4xl md:text-6xl leading-[1.1] tracking-tight mb-6 max-w-3xl">
              Google Ads kampanje koje dovode pozive
            </h1>
            <p className="text-lg text-ink-muted leading-relaxed max-w-2xl mb-8">
              Kreiramo, optimizujemo i vodimo Google Search, Shopping, Display i Remarketing kampanje. Fokus je na pozivima i konverzijama, ne na broju klikova.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/#kontakt" className="bg-wine hover:bg-wine-bright text-ink-text px-10 py-5 rounded-xl font-semibold text-base text-center transition-colors shadow-lg shadow-wine/20">
                Besplatna konsultacija
              </Link>
              <Link href="#cena" className="px-10 py-5 rounded-xl font-semibold text-base text-center border-2 border-ink-border hover:border-wine transition-colors">
                Pogledaj cenu
              </Link>
            </div>
          </section>

          {/* ── ZAŠTO ── */}
          <section className="mb-20">
            <h2 className="font-display font-medium text-3xl md:text-4xl tracking-tight mb-6">
              Zašto Google Ads
            </h2>
            <p className="text-ink-muted leading-relaxed mb-4 max-w-3xl">
              Google drži veliku većinu tržišta pretrage u Srbiji. Kad neko traži vašu uslugu, traži je na Google-u. Google Ads vas postavlja tačno u tom trenutku, dok SEO za istu poziciju traži mesece.
            </p>
            <p className="text-ink-muted leading-relaxed mb-10 max-w-3xl">
              Plaćate samo kada neko klikne na oglas. Vi kontrolišete budžet, ciljnu publiku i lokaciju, od jednog grada do cele Srbije.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-ink-surface border border-ink-border rounded-2xl p-6">
                <div className="font-display font-medium text-3xl text-wine-text mb-2">95%</div>
                <div className="text-ink-muted text-sm">Google tržišno učešće u Srbiji</div>
              </div>
              <div className="bg-ink-surface border border-ink-border rounded-2xl p-6">
                <div className="font-display font-medium text-3xl text-wine-text mb-2">24h</div>
                <div className="text-ink-muted text-sm">Prve posete od pokretanja kampanje</div>
              </div>
              <Link
                href="/rezultati/mobilni-vulkanizer-milan"
                className="bg-ink-surface hover:bg-ink-surface-hover border border-ink-border hover:border-wine rounded-2xl p-6 transition-colors"
              >
                <div className="font-display font-medium text-3xl text-wine-text mb-2">203%</div>
                <div className="text-ink-muted text-sm">Povraćaj na uloženo, Mobilni Vulkanizer Milan, 3 meseca →</div>
              </Link>
            </div>
          </section>

          {/* ── TIPOVI KAMPANJA ── */}
          <section className="mb-20">
            <h2 className="font-display font-medium text-3xl md:text-4xl tracking-tight mb-3">
              Vrste kampanja koje vodimo
            </h2>
            <p className="text-ink-muted mb-10">
              Kombinujemo više tipova kampanja u zavisnosti od cilja i budžeta.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {kampanje.map((item) => (
                <div key={item.title} className="bg-ink-surface border border-ink-border rounded-2xl p-6">
                  <h3 className="font-display font-medium text-xl mb-2">{item.title}</h3>
                  <p className="text-ink-muted text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── PROCES ── */}
          <section className="mb-20">
            <h2 className="font-display font-medium text-3xl md:text-4xl tracking-tight mb-10">
              Kako vodimo kampanju
            </h2>
            <div className="space-y-4">
              {proces.map((item) => (
                <div key={item.step} className="flex gap-6 bg-ink-surface border border-ink-border rounded-2xl p-6">
                  <div className="font-mono text-2xl text-ink-border shrink-0 w-10">{item.step}</div>
                  <div>
                    <h3 className="font-display font-medium text-lg mb-1">{item.title}</h3>
                    <p className="text-ink-muted text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── CENA ── */}
          <section id="cena" className="mb-20">
            <h2 className="font-display font-medium text-3xl md:text-4xl tracking-tight mb-6">
              Koliko košta Google Ads
            </h2>
            <div className="border border-ink-border rounded-2xl overflow-hidden">
              {[
                ['Mesečno vođenje Google Ads kampanja', '200 evra mesečno'],
                ['Jednokratna postavka kampanje, bez mesečnog vođenja', '70 evra po kampanji'],
                ['Detaljna analiza naloga, sa istorijom kampanja i proverom konverzija', '200 evra'],
                ['Detaljna analiza naloga, samo trenutne aktivne kampanje', '100 evra'],
                ['Povezivanje GA4 sa Google Ads nalogom', '50 evra'],
                ['Povezivanje Google Business profila sa Google Ads nalogom', '50 evra'],
              ].map(([label, price], i) => (
                <div
                  key={label}
                  className={`flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-5 md:p-6 ${i % 2 === 0 ? 'bg-ink-surface' : 'bg-ink-bg'}`}
                >
                  <span className="text-ink-text">{label}</span>
                  <span className="font-mono text-wine-text whitespace-nowrap">{price}</span>
                </div>
              ))}
            </div>
          </section>

          {/* ── FAQ ── */}
          <section className="mb-20">
            <h2 className="font-display font-medium text-3xl md:text-4xl tracking-tight mb-10">
              Pitanja o Google Ads oglašavanju
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
              Pokrenite kampanju koja donosi pozive
            </h2>
            <p className="text-ink-muted mb-8 max-w-xl mx-auto">
              Besplatna konsultacija, analiziramo vaš biznis i procenjujemo potencijal bez ikakve obaveze.
            </p>
            <Link href="/#kontakt" className="bg-wine hover:bg-wine-bright text-ink-text px-10 py-5 rounded-xl font-semibold text-base inline-block transition-colors shadow-lg shadow-wine/20">
              Zakažite besplatnu konsultaciju
            </Link>
          </section>

        </div>
      </main>
      <Footer />
    </>
  )
}
