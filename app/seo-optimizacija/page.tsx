import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'SEO Optimizacija Srbija — SEO Agencija Beograd | Duck Family Team',
  description:
    'Profesionalna SEO optimizacija za firme u Srbiji. Tehničko i sadržajno SEO, lokalni SEO Beograd, link building. Povećajte organski saobraćaj i rangiranje na Google-u.',
  keywords: [
    'SEO optimizacija Srbija',
    'SEO agencija Beograd',
    'SEO agencija Srbija',
    'SEO optimizacija cena Srbija',
    'lokalni SEO Srbija',
    'tehničko SEO',
    'sadržajno SEO',
    'link building Srbija',
    'Google rangiranje Srbija',
    'organski saobraćaj',
    'SEO za firme Srbija',
    'on-page SEO',
    'off-page SEO',
    'Core Web Vitals Srbija',
    'Duck Family Team',
  ],
  alternates: {
    canonical: 'https://www.duckfamilyteam.online/seo-optimizacija',
  },
  openGraph: {
    title: 'SEO Optimizacija Srbija — Duck Family Team',
    description:
      'SEO agencija iz Srbije. Tehničko SEO, sadržajno SEO i lokalni SEO koji donose organske posete i trajno visoko rangiranje.',
    url: 'https://www.duckfamilyteam.online/seo-optimizacija',
    type: 'website',
    images: [
      {
        url: 'https://www.duckfamilyteam.online/img/og-image.png',
        width: 1200,
        height: 630,
        alt: 'SEO Optimizacija Srbija — Duck Family Team',
      },
    ],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'SEO Optimizacija',
  description:
    'Profesionalna SEO optimizacija za firme u Srbiji. Tehničko SEO, on-page optimizacija, sadržajna strategija i link building.',
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
  serviceType: 'SEO Optimizacija',
  offers: {
    '@type': 'Offer',
    priceCurrency: 'EUR',
    description: 'SEO usluge po dogovoru — kontaktirajte nas za besplatnu SEO analizu.',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Početna', item: 'https://www.duckfamilyteam.online' },
    { '@type': 'ListItem', position: 2, name: 'SEO Optimizacija', item: 'https://www.duckfamilyteam.online/seo-optimizacija' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Koliko dugo traje SEO optimizacija da bi dala rezultate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'SEO optimizacija daje prve vidljive rezultate za 3–6 meseci, a trajne i stabilne pozicije na Google-u postižu se za 6–12 meseci. Za razliku od Google Ads, SEO rezultati su dugoročni i ne nestaju kada prestanete da plaćate.',
      },
    },
    {
      '@type': 'Question',
      name: 'Koliko košta SEO optimizacija u Srbiji?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cena SEO usluge u Srbiji zavisi od konkurentnosti industrije, veličine sajta i potrebnog obima rada. Kontaktirajte nas za besplatnu SEO analizu i personalizovanu ponudu.',
      },
    },
    {
      '@type': 'Question',
      name: 'Šta je lokalni SEO i da li mi treba?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Lokalni SEO je optimizacija koja pomaže vašem biznisu da se rangira u lokalnim pretragama — na primer "frizer Beograd" ili "advokat Novi Sad". Ako imate fizičku lokaciju ili usluge nudite u određenom gradu, lokalni SEO je ključan.',
      },
    },
    {
      '@type': 'Question',
      name: 'Šta su Core Web Vitals i utiču li na SEO?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Core Web Vitals su Google-ove metrike performansi sajta: LCP (učitavanje), CLS (stabilnost) i INP (interaktivnost). Od 2021. direktno utiču na rangiranje. Naši sajtovi postižu Lighthouse skor 90+ što daje prednost u pretrazi.',
      },
    },
  ],
}

export default function SEOOptimizacijaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <main className="pt-28 md:pt-40 pb-20 px-4 md:px-6">

        {/* ── BREADCRUMB ── */}
        <nav className="mb-8 max-w-5xl mx-auto text-sm text-slate-400 font-bold flex items-center gap-2" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-teal-600 transition">Početna</Link>
          <span>/</span>
          <span className="text-slate-600">SEO Optimizacija</span>
        </nav>

        {/* ── HERO ── */}
        <section className="max-w-5xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-50 border border-teal-100 rounded-full text-teal-700 text-xs font-bold uppercase tracking-widest mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500" />
            </span>
            Tehničko · Sadržajno · Lokalno SEO
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.1] text-slate-900 tracking-tight mb-6">
            SEO Optimizacija Srbija —{' '}
            <span className="duck-gradient-text italic">Organski saobraćaj koji traje</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mb-8">
            Duck Family Team je <strong>SEO agencija iz Srbije</strong> koja kombinuje tehničko SEO,
            sadržajnu strategiju i lokalni SEO u jedan sistem koji dovodi organske posete i povećava
            vidljivost na Google-u — trajno, bez plaćanja po kliku.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/#kontakt" className="btn-duck text-white px-8 py-4 rounded-2xl font-bold text-lg text-center">
              Besplatna SEO Analiza
            </Link>
            <Link href="#seo-usluge" className="px-8 py-4 rounded-2xl font-bold text-lg text-center border-2 border-slate-200 hover:border-teal-400 transition text-slate-700">
              Naše SEO usluge ↓
            </Link>
          </div>
        </section>

        {/* ── SEO vs ADS ── */}
        <section className="max-w-5xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-6">
            Zašto SEO optimizacija, a ne samo Google Ads?
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-6">
            Google Ads donosi trenutne rezultate, ali čim pauzirate kampanju — posete nestaju.
            <strong> SEO optimizacija gradi trajnu vidljivost</strong> — rangiranje koje ostaje i raste mesecima
            nakon što investicija bude napravljena. Firme koje ulažu u SEO u Srbiji smanjuju zavisnost od
            plaćenih oglasa i grade organsku publiku koja donosi konverzije bez CPC troška.
          </p>
          <p className="text-slate-600 text-lg leading-relaxed mb-6">
            Statistike jasno govore: <strong>53% svih website klikova dolazi iz organskih pretražnih rezultata</strong>,
            a korisnici veruju organskim rezultatima više nego plaćenim oglasima. Kombinacija SEO i Google Ads
            daje sinergijski efekat — prisutni ste i u plaćenim i u organskim rezultatima.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {[
              { num: '53%', label: 'web saobraćaja dolazi iz organike' },
              { num: '6–12', label: 'meseci do trajnih pozicija' },
              { num: '14×', label: 'veća stopa konverzije vs outbound' },
            ].map((stat) => (
              <div key={stat.num} className="bg-white border border-slate-100 rounded-2xl p-6 text-center shadow-sm">
                <div className="text-4xl font-black text-teal-600 mb-2">{stat.num}</div>
                <div className="text-slate-500 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── USLUGE ── */}
        <section id="seo-usluge" className="max-w-5xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
            SEO usluge za firme u Srbiji
          </h2>
          <p className="text-slate-500 text-lg mb-10">
            Kompletna SEO optimizacija — od tehničke osnove do sadržajne strategije i link buildinga.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Tehničko SEO',
                desc: 'Optimizacija brzine sajta (Core Web Vitals), XML sitemap, robots.txt, structured data (JSON-LD), HTTPS, canonical URL-ovi i crawlability. Tehničko SEO je osnova bez koje ni odličan sadržaj ne može da rangira.',
                tags: ['Core Web Vitals', 'Structured Data', 'Crawlability'],
              },
              {
                title: 'On-Page SEO optimizacija',
                desc: 'Optimizacija naslova stranica, meta opisa, H1-H6 hijerarhije, internog linkovanja i alt tekstova slika. Svaka stranica dobija jasan fokus na jednu ključnu reč ili grupu srodnih reči.',
                tags: ['Meta tagovi', 'H1-H6 struktura', 'Interno linkovanje'],
              },
              {
                title: 'Sadržajna SEO strategija',
                desc: 'Istraživanje ključnih reči, kreiranje content plana i pisanje SEO optimizovanih tekstova koji odgovaraju na pitanja vaše ciljne publike. Blokovi sadržaja koji rangiraju za dugoročne "informational" i "commercial" pretrage.',
                tags: ['Keyword research', 'Blog strategija', 'Content plan'],
              },
              {
                title: 'Lokalni SEO Srbija',
                desc: 'Google Business Profile optimizacija, lokalni citati, recenzije i lokalne ključne reči za Beograd, Novi Sad, Niš i ostale gradove u Srbiji. Kritično za firme sa fizičkom lokacijom.',
                tags: ['Google Business', 'Lokalne pretrage', 'Grad targetiranje'],
              },
              {
                title: 'Link Building',
                desc: 'Izgradnja autoritativnih backlink profila sa relevantnih srpskih i regionalnih sajtova. Koristimo white-hat tehnike — guest posting, digital PR i brand mentions koji dugoročno povećavaju Domain Authority.',
                tags: ['Backlinks', 'White-hat', 'Domain Authority'],
              },
              {
                title: 'SEO Audit i izveštavanje',
                desc: 'Detaljan SEO audit vašeg sajta sa prioritizovanim listom akcija. Mesečni izveštaji sa praćenjem rangiranja za targetirane ključne reči, organski saobraćaj i konverzije kroz Google Search Console i GA4.',
                tags: ['SEO Audit', 'Rank tracking', 'Mesečni izveštaj'],
              },
            ].map((item) => (
              <div key={item.title} className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
                <h3 className="text-xl font-black text-slate-800 mb-3">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">{item.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-teal-50 text-teal-700 text-xs font-bold rounded-full">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── KAKO RADIMO SEO ── */}
        <section className="max-w-5xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Naš SEO proces — korak po korak
          </h2>
          <div className="space-y-6">
            {[
              {
                step: '01',
                title: 'Tehnički audit i baseline analiza',
                desc: 'Analiziramo trenutno stanje sajta: Core Web Vitals, indeksiranost, crawl greške, broken linkovi, duplicate content i struktura URL-ova. Identifikujemo tehničke blokatere koji sprečavaju rangiranje.',
              },
              {
                step: '02',
                title: 'Istraživanje ključnih reči za srpsko tržište',
                desc: 'Koristimo Semrush, Ahrefs i Google Search Console za pronalazak ključnih reči sa realnim search volumenom u Srbiji. Fokusiramo se na "commercial intent" reči koje vode do konverzija.',
              },
              {
                step: '03',
                title: 'On-page optimizacija svake stranice',
                desc: 'Optimizujemo title tagove, meta opise, heading strukturu i sadržaj za svaku stranicu. Implementiramo JSON-LD structured data za bogate isečke u Google rezultatima.',
              },
              {
                step: '04',
                title: 'Sadržajna strategija i blog plan',
                desc: 'Kreiramo content kalendar sa temama koje odgovaraju na pitanja vaše publike u Srbiji. Pišemo dugačke, detaljne tekstove (1500+ reči) koji rangiraju za multiple ključne reči.',
              },
              {
                step: '05',
                title: 'Link building i digitalni PR',
                desc: 'Gradimo backlink profil sa relevantnih i autoritativnih srpskih sajtova. Koristimo isključivo white-hat tehnike koje su dugoročno sigurne i efektivne.',
              },
              {
                step: '06',
                title: 'Praćenje, izveštavanje i iteracija',
                desc: 'Pratimo rangiranje za sve targetirane ključne reči, organski saobraćaj i konverzije. Mesečno analiziramo rezultate i prilagođavamo strategiju na osnovu podataka.',
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-6 bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
                <div className="text-4xl font-black text-teal-100 select-none shrink-0 w-14 text-right">{item.step}</div>
                <div>
                  <h3 className="text-xl font-black text-slate-800 mb-2">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="max-w-5xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-10">
            Pitanja o SEO optimizaciji u Srbiji
          </h2>
          <div className="space-y-4">
            {[
              {
                q: 'Koliko dugo traje SEO optimizacija da bi dala rezultate?',
                a: 'SEO optimizacija daje prve vidljive rezultate za 3–6 meseci, a trajne i stabilne pozicije na Google-u postižu se za 6–12 meseci. Za razliku od Google Ads, SEO rezultati su dugoročni.',
              },
              {
                q: 'Koliko košta SEO optimizacija u Srbiji?',
                a: 'Cena SEO usluge u Srbiji zavisi od konkurentnosti industrije i veličine sajta. Kontaktirajte nas za besplatnu SEO analizu i personalizovanu ponudu bez obaveze.',
              },
              {
                q: 'Šta je lokalni SEO i da li mi treba?',
                a: 'Lokalni SEO pomaže vašem biznisu da se rangira u lokalnim pretragama — na primer "frizer Beograd". Ako imate fizičku lokaciju ili nudite usluge u određenom gradu u Srbiji, lokalni SEO je ključan.',
              },
              {
                q: 'Da li SEO garantujete prvu poziciju na Google-u?',
                a: 'Nijedna ozbiljna SEO agencija ne može garantovati prvu poziciju jer Google algoritam nije pod kontrolom agencija. Garantujemo transparentan rad, primenu best practice SEO tehnika i mesečno izveštavanje o napretku.',
              },
            ].map((item) => (
              <details key={item.q} className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm group">
                <summary className="font-black text-slate-800 cursor-pointer text-lg list-none flex justify-between items-center">
                  {item.q}
                  <span className="text-teal-500 group-open:rotate-180 transition-transform">↓</span>
                </summary>
                <p className="mt-4 text-slate-500 leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="max-w-5xl mx-auto">
          <div className="bg-slate-900 rounded-3xl p-10 md:p-16 text-center">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
              Povećajte organski saobraćaj na vašem sajtu
            </h2>
            <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
              Besplatna SEO analiza — pregledamo vaš sajt i pokažemo vam konkretne prilike za bolje rangiranje
              na Google-u u Srbiji.
            </p>
            <Link href="/#kontakt" className="btn-duck text-white px-10 py-5 rounded-2xl font-bold text-xl inline-block">
              Zatražite besplatnu SEO analizu
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
