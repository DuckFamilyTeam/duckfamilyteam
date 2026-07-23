import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Izrada Web Sajtova Srbija — Next.js Sajtovi Beograd | Duck Family Team',
  description:
    'Profesionalna izrada web sajtova u Srbiji. Next.js, React, Astro sajtovi sa Lighthouse 90+ skorom, SEO optimizacijom i brzim učitavanjem. Izrada sajtova Beograd i cela Srbija.',
  keywords: [
    'izrada web sajtova Srbija',
    'izrada sajtova Beograd',
    'Next.js sajt Srbija',
    'web dizajn Beograd',
    'izrada sajtova cena Srbija',
    'profesionalna izrada sajta',
    'brzi web sajtovi Srbija',
    'React sajtovi Srbija',
    'Astro sajt Srbija',
    'izrada landing stranice Srbija',
    'web razvoj Srbija',
    'SEO sajtovi Srbija',
    'mobilni sajtovi Srbija',
    'Core Web Vitals Srbija',
    'Duck Family Team',
  ],
  alternates: {
    canonical: 'https://www.duckfamilyteam.online/izrada-sajtova',
  },
  openGraph: {
    title: 'Izrada Web Sajtova Srbija — Duck Family Team',
    description:
      'Next.js sajtovi sa Lighthouse 90+ skorom, SEO optimizacijom i mobilnom prilagođenošću. Izrada web sajtova za firme u Srbiji.',
    url: 'https://www.duckfamilyteam.online/izrada-sajtova',
    type: 'website',
    images: [
      {
        url: 'https://www.duckfamilyteam.online/img/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Izrada Web Sajtova Srbija — Duck Family Team',
      },
    ],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Izrada Web Sajtova',
  description:
    'Profesionalna izrada web sajtova i landing stranica za firme u Srbiji. Next.js, React i Astro sajtovi sa SEO optimizacijom i visokim Lighthouse skorom.',
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
  serviceType: 'Izrada Web Sajtova',
  offers: {
    '@type': 'Offer',
    priceCurrency: 'EUR',
    description: 'Kontaktirajte nas za ponudu — izrada web sajta po vašim potrebama i budžetu.',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Početna', item: 'https://www.duckfamilyteam.online' },
    { '@type': 'ListItem', position: 2, name: 'Izrada Web Sajtova', item: 'https://www.duckfamilyteam.online/izrada-sajtova' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Koliko košta izrada web sajta u Srbiji?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cena izrade web sajta u Srbiji zavisi od kompleksnosti projekta. Jednostavna landing stranica počinje od 300-500 EUR, dok kompleksni poslovni sajtovi mogu koštati i više. Kontaktirajte nas za besplatnu procenu vašeg projekta.',
      },
    },
    {
      '@type': 'Question',
      name: 'Koliko dugo traje izrada web sajta?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Landing stranica se izrađuje za 5-7 radnih dana. Kompletan poslovni sajt sa više stranica traje 2-4 nedelje. Rok zavisi od dostupnosti sadržaja sa vaše strane i broja revizija.',
      },
    },
    {
      '@type': 'Question',
      name: 'Zašto Next.js umesto WordPress-a?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Next.js sajtovi su 3-5x brži od WordPress sajtova, imaju bolji Lighthouse skor, manje bezbednosnih ranjivosti i bolju SEO optimizaciju. Za firme koje žele visoko rangiranje na Google-u, Next.js je superiorno rešenje.',
      },
    },
    {
      '@type': 'Question',
      name: 'Da li će moj sajt biti SEO optimizovan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Da — svaki sajt koji radimo uključuje on-page SEO, structured data (JSON-LD), sitemap, robots.txt, Open Graph tagove i Core Web Vitals optimizaciju. Vaš sajt će biti spreman za Google rangiranje od prvog dana.',
      },
    },
  ],
}

export default function IzradaSajtovaTPage() {
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
          <span className="text-slate-600">Izrada Web Sajtova</span>
        </nav>

        {/* ── HERO ── */}
        <section className="max-w-5xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-50 border border-teal-100 rounded-full text-teal-700 text-xs font-bold uppercase tracking-widest mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500" />
            </span>
            Next.js · React · Astro · TypeScript
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.1] text-slate-900 tracking-tight mb-6">
            Izrada Web Sajtova Srbija —{' '}
            <span className="duck-gradient-text italic">Brzi, SEO sajtovi koji rangiraju</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mb-8">
            Duck Family Team izrađuje <strong>Next.js i React web sajtove</strong> za firme u Srbiji koji
            postižu Lighthouse 90+ skor, učitavaju se za ispod 1.5s i dolaze sa kompletnom SEO
            optimizacijom. Sajtovi koji se rangiraju na Google-u od prvog dana.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/#kontakt" className="btn-duck text-white px-8 py-4 rounded-2xl font-bold text-lg text-center">
              Besplatna Procena Projekta
            </Link>
            <Link href="#tipovi-sajtova" className="px-8 py-4 rounded-2xl font-bold text-lg text-center border-2 border-slate-200 hover:border-teal-400 transition text-slate-700">
              Videti naše rešenja ↓
            </Link>
          </div>
        </section>

        {/* ── ZAŠTO MI ── */}
        <section className="max-w-5xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-6">
            Zašto Next.js sajt, a ne WordPress?
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-6">
            Većina firmi u Srbiji i dalje koristi WordPress, ali to dolazi sa cenom: sporiji sajtovi,
            bezbednosne ranjivosti, teže SEO optimizovanje. <strong>Next.js sajtovi su 3-5x brži</strong>,
            imaju automatski bolji Lighthouse skor i prirodno su SEO-friendly zbog server-side renderinga.
          </p>
          <p className="text-slate-600 text-lg leading-relaxed mb-10">
            Google je jasno rekao — brzina i Core Web Vitals utiču na rangiranje. Svaki milisekund
            kašnjenja košta konverzije. Naši sajtovi učitavaju se za <strong>ispod 1.5 sekundi</strong>
            na mobilnim uređajima, što daje direktnu prednost u pretrazi.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { num: '90+', label: 'Lighthouse skor na svakom sajtu' },
              { num: '<1.5s', label: 'Prosečno vreme učitavanja' },
              { num: '100%', label: 'Mobilno prilagođeni sajtovi' },
              { num: '0', label: 'Mesečnih hosting troškova za statične sajtove' },
            ].map((stat) => (
              <div key={stat.num} className="bg-white border border-slate-100 rounded-2xl p-6 text-center shadow-sm">
                <div className="text-3xl font-black text-teal-600 mb-2">{stat.num}</div>
                <div className="text-slate-500 text-xs font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── TIPOVI SAJTOVA ── */}
        <section id="tipovi-sajtova" className="max-w-5xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Tipovi web sajtova koje radimo
          </h2>
          <p className="text-slate-500 text-lg mb-10">
            Od jednostavnih landing stranica do složenih poslovnih sajtova — svaki sa SEO fundamentima.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Landing stranica',
                desc: 'Jedna stranica fokusirana na jednu akciju — generisanje upita, rezervacija, preuzimanje. Idealna za Google Ads kampanje ili specijalne ponude. Rok: 5-7 dana.',
                tags: ['Konverzija fokus', 'Brzo učitavanje', '5-7 dana'],
              },
              {
                title: 'Poslovni prezentacioni sajt',
                desc: 'Kompletna web prezentacija firme: početna, o nama, usluge, kontakt, blog. Sve sa SEO optimizacijom i structured data za Google. Rok: 2-4 nedelje.',
                tags: ['Više stranica', 'Blog integracija', '2-4 nedelje'],
              },
              {
                title: 'Blog i sadržajni portal',
                desc: 'Sajtovi orijentisani na sadržaj — blog, novinski portal, knowledge base. Optimizovano za Google indexovanje i brzo učitavanje čak i sa stotinama članaka.',
                tags: ['Markdown/MDX', 'Sitemap auto', 'Content fokus'],
              },
              {
                title: 'E-commerce sajt',
                desc: 'Online prodavnice sa Stripe ili PayPal integracijom, upravljanjem zalihama i automatizovanim email notifikacijama. Sigurnost i brzina su prioritet.',
                tags: ['Stripe / PayPal', 'Upravljanje zalihama', 'Email automatizacija'],
              },
              {
                title: 'SaaS i web aplikacije',
                desc: 'Kompleksne web aplikacije sa autentifikacijom, bazom podataka i API integracijom. Next.js App Router + Supabase ili Neon za skalabilne aplikacije.',
                tags: ['Auth sistem', 'Supabase / Neon', 'API integracije'],
              },
              {
                title: 'Astro statični sajtovi',
                desc: 'Za maksimalnu brzinu — Astro sajtovi šalju nula JavaScript-a klijentu po defaultu. Lighthouse 100 je standard. Idealni za lokalne biznise i SEO landing stranice.',
                tags: ['Lighthouse 100', 'Zero JS', 'Ultra-brzo'],
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

        {/* ── SVE ŠTO DOBIJATE ── */}
        <section className="max-w-5xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-10">
            Šta je uključeno u svaki sajt
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: '🔍', title: 'SEO optimizacija', desc: 'Title tagovi, meta opisi, H1-H6 hijerarhija, JSON-LD structured data, sitemap.xml, robots.txt.' },
              { icon: '⚡', title: 'Core Web Vitals', desc: 'LCP ispod 2s, CLS < 0.1, INP < 200ms. Svi Google Performance standardi ispunjeni.' },
              { icon: '📱', title: 'Mobilno prilagođen', desc: 'Mobile-first dizajn koji savršeno radi na svim ekranima — od telefona do 4K monitora.' },
              { icon: '🔒', title: 'HTTPS i sigurnost', desc: 'SSL sertifikat, sigurni HTTP headeri, bez ranjivosti karakterističnih za WordPress.' },
              { icon: '🌍', title: 'Open Graph i socijalne mreže', desc: 'Optimizovano deljenje na Facebook, Instagram, LinkedIn i Twitter/X platformama.' },
              { icon: '📊', title: 'Google Analytics 4', desc: 'GA4 i Google Search Console integracija — pratite saobraćaj i rangiranje od prvog dana.' },
            ].map((item) => (
              <div key={item.title} className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-black text-slate-800 mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── PROCES ── */}
        <section className="max-w-5xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Proces izrade web sajta
          </h2>
          <div className="space-y-5">
            {[
              { step: '01', title: 'Konsultacija i definisanje zahteva', desc: 'Besplatan razgovor o vašim potrebama, ciljevima, ciljnoj publici i budžetu. Definišemo strukturu sajta i ključne funkcionalnosti.' },
              { step: '02', title: 'Dizajn i wireframes', desc: 'Kreiramo vizuelni dizajn i raspored elemenata koji odgovara vašem brendu. Dobijate preview pre nego što počne razvoj.' },
              { step: '03', title: 'Razvoj (Next.js / Astro)', desc: 'Kodiranje sajta sa svim SEO elementima, performansnom optimizacijom i mobilnom prilagođenošću integrisanom od početka.' },
              { step: '04', title: 'SEO i structured data implementacija', desc: 'Dodajemo JSON-LD sheme, sitemap, robots.txt, Open Graph tagove i verifikujemo sajt u Google Search Console.' },
              { step: '05', title: 'Testiranje i revizija', desc: 'Testiramo na svim uređajima i browserima. Proveravamo Lighthouse skorove, linkove i forme. Prilagođavamo prema vašim komentarima.' },
              { step: '06', title: 'Pokretanje i predaja', desc: 'Deploy na Vercel ili vaš hosting. Predaja izvornog koda, pristupa i kratka obuka za upravljanje sadržajem.' },
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
            Pitanja o izradi web sajtova
          </h2>
          <div className="space-y-4">
            {[
              {
                q: 'Koliko košta izrada web sajta u Srbiji?',
                a: 'Cena zavisi od kompleksnosti. Landing stranica: od 300-500 EUR. Poslovni sajt sa više stranica: od 700-1500 EUR. Kontaktirajte nas za besplatnu procenu vašeg projekta.',
              },
              {
                q: 'Zašto Next.js umesto WordPress-a?',
                a: 'Next.js sajtovi su 3-5x brži, imaju bolji Lighthouse skor, manje bezbednosnih ranjivosti i bolju SEO optimizaciju. Za Google rangiranje, Next.js je superiorno rešenje.',
              },
              {
                q: 'Da li će moj sajt biti SEO optimizovan?',
                a: 'Da — svaki sajt uključuje on-page SEO, JSON-LD structured data, sitemap, robots.txt, Open Graph tagove i Core Web Vitals optimizaciju. Vaš sajt će biti spreman za Google od prvog dana.',
              },
              {
                q: 'Šta mi treba da obezbedim za izradu sajta?',
                a: 'Logo, tekstualni sadržaj i slike. Mi se brinemo o dizajnu, kodu, SEO i postavki. Ako nemate sadržaj, možemo pomoći sa copywritingom.',
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
              Pokrenite vaš novi sajt za 7 dana
            </h2>
            <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
              Besplatna konsultacija — razgovaramo o vašim potrebama i prikazujemo primer sličnog sajta
              koji smo već uradili.
            </p>
            <Link href="/#kontakt" className="btn-duck text-white px-10 py-5 rounded-2xl font-bold text-xl inline-block">
              Zatražite besplatnu procenu
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
