import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Google Ads Agencija Srbija — PPC Kampanje i Google Oglasi | Duck Family Team',
  description:
    'Sertifikovana Google Ads agencija iz Srbije. Kreiramo i optimizujemo Google Search, Shopping i Display kampanje sa dokazanim ROAS-om. Besplatna konsultacija.',
  keywords: [
    'Google Ads agencija Srbija',
    'Google Ads Beograd',
    'Google oglasi Srbija',
    'PPC agencija Srbija',
    'Google Ads kampanje',
    'Google Search oglasi',
    'Google Shopping kampanje',
    'remarketing Google Ads',
    'Smart Bidding Srbija',
    'Google Ads cena Srbija',
    'PPC stručnjak Srbija',
    'Google Ads optimizacija',
    'Google Ads za firme Srbija',
    'povećanje konverzija Google Ads',
    'Duck Family Team',
  ],
  alternates: {
    canonical: 'https://www.duckfamilyteam.online/google-ads',
  },
  openGraph: {
    title: 'Google Ads Agencija Srbija — Duck Family Team',
    description:
      'Sertifikovana Google Ads agencija. Google Search, Shopping, Display i Remarketing kampanje sa merljivim ROI-em.',
    url: 'https://www.duckfamilyteam.online/google-ads',
    type: 'website',
    images: [
      {
        url: 'https://www.duckfamilyteam.online/img/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Google Ads Agencija Srbija — Duck Family Team',
      },
    ],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Google Ads Kampanje',
  description:
    'Kreiranje, optimizacija i skaliranje Google Ads kampanja za firme u Srbiji. Google Search, Shopping, Display i Remarketing.',
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
    description: 'Cena Google Ads usluge po dogovoru — kontaktirajte nas za besplatnu konsultaciju.',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Početna', item: 'https://www.duckfamilyteam.online' },
    { '@type': 'ListItem', position: 2, name: 'Google Ads', item: 'https://www.duckfamilyteam.online/google-ads' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Koliko košta Google Ads oglašavanje u Srbiji?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cena Google Ads oglašavanja u Srbiji zavisi od industrije, konkurencije i budžeta. Minimalni preporučeni mesečni budžet za Google Ads kampanje je 150–300 EUR. Naša agencijska naknada za upravljanje kampanjama kreće se od 150 EUR mesečno.',
      },
    },
    {
      '@type': 'Question',
      name: 'Koliko brzo se vide rezultati Google Ads kampanja?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Google Ads daje prve rezultate već u prvih 24–48 sati od pokretanja kampanje. Optimalna performansa se postiže nakon 2–4 nedelje, kada algoritam sakupi dovoljno podataka za Smart Bidding optimizaciju.',
      },
    },
    {
      '@type': 'Question',
      name: 'Šta je Smart Bidding i da li ga koristite?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Smart Bidding je Google-ov automatizovani sistem licitiranja koji koristi mašinsko učenje za optimizaciju konverzija u realnom vremenu. Koristimo Target CPA i Target ROAS strategije prilagođene budžetu i ciljevima svakog klijenta.',
      },
    },
    {
      '@type': 'Question',
      name: 'Da li radite Google Ads i za manje firme u Srbiji?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Da, radimo sa firmama svih veličina — od lokalnih biznisa do e-commerce brendova. Prilagođavamo strategiju i budžet realnim mogućnostima i ciljevima klijenta.',
      },
    },
  ],
}

export default function GoogleAdsPage() {
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
          <span className="text-slate-600">Google Ads</span>
        </nav>

        {/* ── HERO ── */}
        <section className="max-w-5xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-50 border border-teal-100 rounded-full text-teal-700 text-xs font-bold uppercase tracking-widest mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500" />
            </span>
            Google Premier Partner Standard
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.1] text-slate-900 tracking-tight mb-6">
            Google Ads Agencija Srbija —{' '}
            <span className="duck-gradient-text italic">Kampanje koje donose rezultate</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mb-8">
            Duck Family Team je sertifikovana <strong>Google Ads agencija iz Srbije</strong>. Kreiramo, optimizujemo i skaliramo
            Google Search, Shopping, Display i Remarketing kampanje sa jasno merljivim povratom investicije (ROAS).
            Prosečni ROI naših klijenata je <strong>+482%</strong>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/#kontakt" className="btn-duck text-white px-8 py-4 rounded-2xl font-bold text-lg text-center">
              Besplatna Konsultacija
            </Link>
            <Link href="#tipovi-kampanja" className="px-8 py-4 rounded-2xl font-bold text-lg text-center border-2 border-slate-200 hover:border-teal-400 transition text-slate-700">
              Vidite naše usluge ↓
            </Link>
          </div>
        </section>

        {/* ── ZAŠTO GOOGLE ADS ── */}
        <section className="max-w-5xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-6">
            Zašto Google Ads oglašavanje u Srbiji?
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-6">
            Google drži <strong>više od 95% tržišta pretrage u Srbiji</strong>. Kada vaši potencijalni kupci traže proizvod
            ili uslugu, oni to rade na Google-u. Google Ads vam omogućava da budete vidljivi u tačnom trenutku kada je
            korisnik spreman da kupi — to je ono što čini PPC oglašavanje najefikasnijim kanalom digitalnog marketinga.
          </p>
          <p className="text-slate-600 text-lg leading-relaxed mb-6">
            Za razliku od SEO optimizacije koja donosi rezultate za 3–6 meseci, <strong>Google Ads kampanje donose
            posete već u prvih 24 sata</strong>. Plaćate samo kada neko klikne na vaš oglas, a vi kontrolišete
            budžet, ciljnu publiku i geografsko targetiranje — od Beograda do celog regiona.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {[
              { num: '95%', label: 'Google tržišno učešće u Srbiji' },
              { num: '24h', label: 'Prve posete od pokretanja kampanje' },
              { num: '+482%', label: 'Prosečni ROI naših klijenata' },
            ].map((stat) => (
              <div key={stat.num} className="bg-white border border-slate-100 rounded-2xl p-6 text-center shadow-sm">
                <div className="text-4xl font-black text-teal-600 mb-2">{stat.num}</div>
                <div className="text-slate-500 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── TIPOVI KAMPANJA ── */}
        <section id="tipovi-kampanja" className="max-w-5xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Vrste Google Ads kampanja koje vodimo
          </h2>
          <p className="text-slate-500 text-lg mb-10">
            Svaki tip kampanje ima svoju svrhu. Kombinacijom više tipova postižemo maksimalni doseg i konverzije.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Google Search kampanje',
                desc: 'Vaš oglas se prikazuje kada korisnici aktivno pretražuju vaše usluge ili proizvode. Najveća namera kupovine — idealno za direktne konverzije i generisanje leadova za firme u Srbiji.',
                tags: ['Visoka namera', 'Direktne konverzije', 'Precizno targetiranje'],
              },
              {
                title: 'Google Shopping kampanje',
                desc: 'Prikazujete proizvode sa slikom, cenom i nazivom prodavnice direktno u Google pretrazi. Neophodno za svaki e-commerce biznis koji želi da poveća online prodaju u Srbiji.',
                tags: ['E-commerce', 'Vizuelni oglasi', 'Prikaz proizvoda'],
              },
              {
                title: 'Google Display Network',
                desc: 'Banneri na milionima sajtova i YouTube-u. Idealno za brand awareness, retargeting i dosezanje korisnika koji još uvek istraživaju pre kupovine.',
                tags: ['Brand awareness', 'Vizuelni baneri', '2M+ sajtova'],
              },
              {
                title: 'Remarketing kampanje',
                desc: 'Targetirate posetioce koji su već bili na vašem sajtu ali nisu konvertovali. Remarketing prosečno povećava stepen konverzije za 70% jer se obraćate zagrejanoj publici.',
                tags: ['Topla publika', '+70% konverzija', 'Custom liste'],
              },
              {
                title: 'Performance Max (PMax)',
                desc: 'Google-ova najmodernija kampanja koja automatski distribuira vaše oglase na svim platformama — Search, Display, YouTube, Gmail i Maps. Koristimo AI za maksimalni ROAS.',
                tags: ['Sve platforme', 'AI optimizacija', 'Najviši ROAS'],
              },
              {
                title: 'Google Local Ads',
                desc: 'Lokalne kampanje za biznise koji targetiraju kupce u Beogradu, Novom Sadu ili bilo kom gradu u Srbiji. Vaš oglas se prikazuje korisnicima u neposrednoj blizini.',
                tags: ['Lokalni biznis', 'Geo-targetiranje', 'Google Maps'],
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

        {/* ── PROCES ── */}
        <section className="max-w-5xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Kako vodimo Google Ads kampanje u Srbiji
          </h2>
          <p className="text-slate-500 text-lg mb-10">
            Naš proces je transparentan i merljiv. Svaki korak ima jasan cilj i KPI.
          </p>
          <div className="space-y-6">
            {[
              {
                step: '01',
                title: 'Audit i analiza konkurencije',
                desc: 'Pre pokretanja svake kampanje radimo dubinsku analizu vašeg tržišta, konkurenata i ključnih reči. Istražujemo šta radi vaša konkurencija u Srbiji i kako da ih nadmašimo po ROAS-u.',
              },
              {
                step: '02',
                title: 'Istraživanje ključnih reči i struktura kampanje',
                desc: 'Biramo visoko-namerne ključne reči sa realnim potencijalom konverzije. Organizujemo kampanje u tematske grupe oglasa za maksimalni Quality Score i niži CPC.',
              },
              {
                step: '03',
                title: 'Kreiranje oglasa i landing stranica',
                desc: 'Pišemo Responsive Search Ads sa jakim CTA-om. Po potrebi optimizujemo ili kreiramo landing stranicu koja konvertuje posetioce u kupce.',
              },
              {
                step: '04',
                title: 'Podešavanje konverzija u GA4',
                desc: 'Svaka kampanja dobija precizno praćenje konverzija — pozivi, forme, kupovine, dodavanja u korpu. Bez ovoga ne možemo znati šta zaista radi.',
              },
              {
                step: '05',
                title: 'Optimizacija i Smart Bidding',
                desc: 'Nakon prikupljanja podataka prelazimo na Target CPA ili Target ROAS strategije. A/B testiramo oglase, pauziramo loše ključne reči i skaliramo ono što donosi rezultate.',
              },
              {
                step: '06',
                title: 'Mesečni izveštaji i transparentna komunikacija',
                desc: 'Svaki mesec dobijate detaljni izveštaj sa metrikama: impresije, klikovi, CPC, konverzije, ROAS. Uvek znate gde odlazi vaš budžet i koliko zarađujete.',
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

        {/* ── CENA ── */}
        <section className="max-w-5xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Koliko košta Google Ads agencija u Srbiji?
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-6">
            Cena Google Ads usluge u Srbiji zavisi od veličine kampanje, industrije i potrebnog obima rada.
            Naša agencijska naknada za upravljanje kampanjama kreće se od <strong>150 EUR mesečno</strong>,
            a preporučeni minimalni <strong>Google budžet je 150–300 EUR mesečno</strong>.
          </p>
          <p className="text-slate-600 text-lg leading-relaxed mb-6">
            Za razliku od velikih agencija koje naplaćuju procenat od budžeta (obično 15–20%), mi naplaćujemo
            fiksnu mesečnu naknadu. To znači da naš interes nije da potrošite više — naš interes je da
            vaš biznis raste jer na tome se bazira naša dugoročna saradnja.
          </p>
          <div className="bg-gradient-to-r from-teal-50 to-cyan-50 border border-teal-100 rounded-2xl p-8">
            <h3 className="text-2xl font-black text-slate-800 mb-4">Šta dobijate u cenu upravljanja?</h3>
            <ul className="grid md:grid-cols-2 gap-3 text-slate-600">
              {[
                'Kompletno kreiranje i podešavanje kampanja',
                'Istraživanje ključnih reči i negativnih reči',
                'Pisanje i A/B testiranje oglasa',
                'Podešavanje GA4 konverzija',
                'Mesečna optimizacija i Smart Bidding',
                'Mesečni izveštaj sa svim metrikama',
                'Direktna komunikacija sa stručnjakom',
                'Besplatne konsultacije i strategijske preporuke',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm">
                  <span className="text-teal-500 font-black">✓</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="max-w-5xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-10">
            Često postavljena pitanja o Google Ads oglašavanju
          </h2>
          <div className="space-y-4">
            {[
              {
                q: 'Koliko košta Google Ads oglašavanje u Srbiji?',
                a: 'Minimalni preporučeni mesečni budžet za Google Ads kampanje je 150–300 EUR. Naša agencijska naknada za upravljanje kampanjama kreće se od 150 EUR mesečno. Ukupna investicija za start je dakle 300–600 EUR mesečno.',
              },
              {
                q: 'Koliko brzo se vide rezultati Google Ads kampanja?',
                a: 'Google Ads daje prve rezultate već u prvih 24–48 sati od pokretanja kampanje. Optimalna performansa se postiže nakon 2–4 nedelje, kada algoritam sakupi dovoljno podataka za Smart Bidding optimizaciju.',
              },
              {
                q: 'Da li radite Google Ads i za manje firme u Srbiji?',
                a: 'Da, radimo sa firmama svih veličina — od lokalnih biznisa do e-commerce brendova. Prilagođavamo strategiju i budžet realnim mogućnostima i ciljevima klijenta.',
              },
              {
                q: 'Šta je Quality Score i zašto je važan?',
                a: 'Quality Score je Google-ova ocena relevantnosti vašeg oglasa, ključnih reči i landing stranice na skali 1–10. Visok Quality Score direktno smanjuje vaš CPC (cenu po kliku) i poboljšava poziciju oglasa. Mi aktivno optimizujemo Quality Score kroz relevantne ad grupe i usklađivanje landing stranica.',
              },
              {
                q: 'Radite li i Google Shopping kampanje za e-commerce?',
                a: 'Da, specijalizovani smo za Google Shopping kampanje za online prodavnice u Srbiji. Podešavamo Google Merchant Center, optimizujemo product feed i vodimo Standard Shopping i Performance Max kampanje.',
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
              Pokrenite Google Ads kampanju danas
            </h2>
            <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
              Besplatna konsultacija — analiziramo vaš biznis i procenimo potencijal Google Ads kampanje
              bez ikakve obaveze.
            </p>
            <Link href="/#kontakt" className="btn-duck text-white px-10 py-5 rounded-2xl font-bold text-xl inline-block">
              Zakažite besplatnu konsultaciju
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
