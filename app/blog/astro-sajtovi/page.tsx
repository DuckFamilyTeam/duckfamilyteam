import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Astro Sajtovi: Zašto Su Trenutno Najboljа Tehnologija za Web | Duck Family Team',
  description:
    'Otkrijte zašto su Astro sajtovi trenutno broj 1 izbor za brze, SEO optimizovane web prezentacije. Island Architecture, Lighthouse 100, nulti JavaScript — sve što Google voli.',
  alternates: {
    canonical: 'https://www.duckfamilyteam.online/blog/astro-sajtovi',
  },
  keywords: 'Astro framework, Astro sajt, Island Architecture, ultrabrzi sajt, SEO optimizacija, Lighthouse 100, web development Srbija',
  openGraph: {
    title: 'Astro Sajtovi: Zašto Su Trenutno Najboljа Tehnologija za Web | Duck Family Team',
    description: 'Island Architecture, nulti JavaScript i Lighthouse score 100. Otkrijte zašto Google voli Astro sajtove.',
    url: 'https://www.duckfamilyteam.online/blog/astro-sajtovi',
    type: 'article',
    publishedTime: '2026-05-09',
    authors: ['Duck Family Team'],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Astro Sajtovi — Duck Family Team',
      },
    ],
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Astro Sajtovi: Zašto Su Trenutno Najboljа Tehnologija za Web',
  description:
    'Otkrijte zašto su Astro sajtovi trenutno broj 1 izbor za brze, SEO optimizovane web prezentacije. Island Architecture, Lighthouse 100, nulti JavaScript.',
  image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200',
  datePublished: '2026-05-09',
  dateModified: '2026-05-09',
  author: {
    '@type': 'Organization',
    name: 'Duck Family Team',
    url: 'https://www.duckfamilyteam.online',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Duck Family Team',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.duckfamilyteam.online/img/logo-za-nasu-agenciju.png',
    },
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.duckfamilyteam.online/blog/astro-sajtovi',
  },
}

export default function AstroSajtoviPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Navbar />
      <main className="pt-28 md:pt-40 pb-20 px-4 md:px-6">
        <article className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm text-slate-400 font-bold flex items-center gap-2" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-teal-600 transition">Početna</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-teal-600 transition">Blog</Link>
            <span>/</span>
            <span className="text-slate-600">Astro Sajtovi</span>
          </nav>

          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <span className="bg-orange-50 text-orange-700 text-[10px] md:text-[11px] font-extrabold uppercase px-4 py-1.5 md:px-5 md:py-2 rounded-full tracking-wider italic">
              Web Development
            </span>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mt-6 mb-6 md:mb-8 leading-relaxed px-2">
              Astro Sajtovi:{' '}
              <span className="duck-gradient-text italic">Zašto Su Trenutno Najboljа</span>{' '}
              Tehnologija za Web?
            </h1>
            <p className="text-lg md:text-2xl text-slate-500 italic font-medium max-w-2xl mx-auto leading-relaxed">
              Island Architecture, nulti JavaScript i Lighthouse score 100. Evo zašto Google obožava Astro sajtove — i zašto vaš biznis treba jedan.
            </p>
            <div className="flex items-center justify-center gap-4 mt-6 text-[11px] text-slate-400 font-bold uppercase tracking-widest">
              <span>Duck Family Team</span>
              <span>·</span>
              <time dateTime="2026-05-09">9. Maj 2026.</time>
              <span>·</span>
              <span>8 min čitanja</span>
            </div>
          </div>

          <Image
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200"
            alt="Astro Sajtovi — Duck Family Team web development"
            width={1200}
            height={600}
            className="w-full h-[250px] md:h-[500px] object-cover rounded-[2rem] md:rounded-[3.5rem] mb-12 md:mb-16 shadow-2xl"
            priority
          />

          {/* Content */}
          <div className="bg-white border border-black/5 rounded-[1.5rem] md:rounded-[2.5rem] p-6 md:p-12 lg:p-16 space-y-10 md:space-y-12 text-slate-700 text-base md:text-xl">

            <p className="leading-relaxed">
              U svetu web razvoja, svake godine se pojavljuje novi "revolucionarni" framework. Ali Astro je nešto drugačije. Od svog lansiranja, Astro je preuzeo primat u kategoriji performansi — i to nije slučajno. Iza toga stoji fundamentalno drugačiji pristup tome{' '}
              <strong className="text-slate-900 font-bold">šta web sajt treba da radi</strong>.
            </p>

            {/* Šta je Astro */}
            <div className="space-y-4 md:space-y-6">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 italic uppercase leading-tight">
                Šta je zapravo Astro?
              </h2>
              <p className="leading-relaxed">
                Astro je web framework koji je kreiran sa jednom misijom: <strong className="text-slate-900 font-bold">isporučiti manje JavaScript-a</strong>. Dok Next.js, Nuxt i ostali frameworki šalju tone JS-a klijentu (čak i za statičan sadržaj koji mu ne treba), Astro ide suprotnim putem.
              </p>
              <div className="bg-orange-50 p-5 md:p-8 border-l-4 border-orange-500 italic rounded-r-xl md:rounded-r-2xl shadow-sm">
                <p className="text-slate-800 m-0">
                  <strong className="text-orange-700 uppercase text-xs md:text-sm tracking-widest not-italic block mb-2">
                    Ključna razlika:
                  </strong>
                  Tradicionalni JavaScript frameworki šalju kompletan JS bundle klijentu. Astro šalje HTML i CSS — bez ijedne linije JavaScript-a, osim ako vi to eksplicitno ne tražite za specifičnu komponentu.
                </p>
              </div>
            </div>

            {/* Island Architecture */}
            <div className="space-y-4 md:space-y-6">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 italic uppercase leading-tight">
                Island Architecture — Revolucija u Web Razvoju
              </h2>
              <p className="leading-relaxed">
                Astro-ov "tajni recept" zove se <strong className="text-slate-900 font-bold">Island Architecture</strong> (Arhitektura Ostrva). Ideja je jednostavna, ali genijalna:
              </p>
              <ul className="space-y-3 pl-6 list-none">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-black text-2xl leading-none">→</span>
                  <span>Stranica se sastoji od "ostrva" — interaktivnih komponenti</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-black text-2xl leading-none">→</span>
                  <span>Sve ostalo (tekst, slike, navigacija) je statični HTML — BEZ JavaScript-a</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-black text-2xl leading-none">→</span>
                  <span>Samo "ostrva" dobijaju JavaScript, i to samo kada je potrebno</span>
                </li>
              </ul>
              <p className="leading-relaxed">
                Rezultat? Sajt se učitava <strong className="text-slate-900 font-bold">3-10x brže</strong> od ekvivalentnog Next.js sajta, uz isti vizuelni izgled i funkcionalnost.
              </p>

              <div className="bg-slate-50 p-5 md:p-8 border-l-4 border-teal-500 italic rounded-r-xl md:rounded-r-2xl shadow-sm">
                <p className="text-slate-800 m-0">
                  <strong className="text-teal-700 uppercase text-xs md:text-sm tracking-widest not-italic block mb-2">
                    Primer iz prakse:
                  </strong>
                  Zamislite restoran sajt. 95% sadržaja je statičan (meni, adresa, radno vreme). Samo kontakt forma treba JavaScript. Astro šalje JS SAMO za tu formu, a sve ostalo učitava kao čisti HTML. Rezultat: sajt se otvara za manje od 0.5 sekunde.
                </p>
              </div>
            </div>

            {/* Lighthouse Score */}
            <div className="space-y-4 md:space-y-6">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 italic uppercase leading-tight">
                Lighthouse 100/100 — Nije Mit
              </h2>
              <p className="leading-relaxed">
                Google Lighthouse je alat koji meri kvalitet web sajtova ocenama od 0 do 100 u 4 kategorije: Performanse, Pristupačnost, Best Practices i SEO. Astro sajtovi rutinski postižu:
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: 'Performance', score: '100', color: 'bg-green-500' },
                  { label: 'Accessibility', score: '98', color: 'bg-green-500' },
                  { label: 'Best Practices', score: '100', color: 'bg-green-500' },
                  { label: 'SEO', score: '100', color: 'bg-green-500' },
                ].map((item) => (
                  <div key={item.label} className="bg-slate-50 rounded-2xl p-4 text-center">
                    <div className={`w-16 h-16 ${item.color} rounded-full flex items-center justify-center text-white font-black text-2xl mx-auto mb-2`}>
                      {item.score}
                    </div>
                    <p className="text-xs font-bold text-slate-600 uppercase tracking-wide">{item.label}</p>
                  </div>
                ))}
              </div>

              <p className="leading-relaxed">
                Poređenja radi, prosečni WordPress sajt postiže 40-60 poena za performanse. Čak i dobro optimizovani Next.js sajtovi retko prelaze 95. Astro dostiže 100 bez posebnog truda.
              </p>
            </div>

            {/* Zašto Google voli Astro */}
            <div className="space-y-4 md:space-y-6">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 italic uppercase leading-tight">
                Zašto Google Obožava Astro Sajtove?
              </h2>
              <p className="leading-relaxed">
                Google rangira sajtove prema desecima faktora, ali <strong className="text-red-600">Core Web Vitals su postali jedan od najvažnijih</strong>. Ovo su 3 ključne metrike:
              </p>
              <ul className="space-y-5 pl-6 list-none">
                <li className="flex items-start gap-3">
                  <span className="text-teal-500 font-black text-2xl leading-none">1.</span>
                  <div>
                    <strong className="text-slate-900 font-black">LCP (Largest Contentful Paint)</strong>
                    <p className="text-slate-600 text-base mt-1">Koliko brzo se pojavljuje najveći element na stranici. Astro postiže &lt;1.2s (odlično), dok WordPress prosečno 3-5s (loše).</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-500 font-black text-2xl leading-none">2.</span>
                  <div>
                    <strong className="text-slate-900 font-black">FID / INP (Interaction to Next Paint)</strong>
                    <p className="text-slate-600 text-base mt-1">Odzivnost sajta na interakcije korisnika. Sa minimalnim JavaScript-om, Astro postiže skoro nultu kašnjenje.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-500 font-black text-2xl leading-none">3.</span>
                  <div>
                    <strong className="text-slate-900 font-black">CLS (Cumulative Layout Shift)</strong>
                    <p className="text-slate-600 text-base mt-1">Stabilnost layouta tokom učitavanja. Astro generiše savršen statičan HTML koji ne "skače".</p>
                  </div>
                </li>
              </ul>
              <div className="bg-teal-50 p-5 md:p-8 border-l-4 border-teal-500 italic rounded-r-xl md:rounded-r-2xl shadow-sm">
                <p className="text-slate-800 m-0">
                  <strong className="text-teal-700 uppercase text-xs md:text-sm tracking-widest not-italic block mb-2">
                    Direktna veza:
                  </strong>
                  Google je zvanično potvrdio da Core Web Vitals utiču na rangiranje. Bolji Vitals = Viša pozicija u pretrazi. Astro sajtovi uvek imaju perfektne Vitals = uvek na vrhu Google-a.
                </p>
              </div>
            </div>

            {/* SEO Prednosti */}
            <div className="space-y-4 md:space-y-6">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 italic uppercase leading-tight">
                SEO Prednosti Koje Nema Nijedan Drugi Framework
              </h2>
              <p className="leading-relaxed">
                Astro nije samo brz — on je dizajniran da bude SEO mašina od prvog dana.
              </p>
              <ul className="space-y-4 pl-6 list-none">
                {[
                  {
                    title: 'Statički generisan HTML',
                    desc: 'Google bot odmah vidi kompletan sadržaj bez potrebe za JavaScript izvršavanjem. Nema "čekanja" na hydration.',
                  },
                  {
                    title: 'Ugrađeni SEO alati',
                    desc: 'Meta tagovi, Open Graph, Twitter Cards, Schema Markup — sve se generiše automatski na pravi način.',
                  },
                  {
                    title: 'Optimizacija slika',
                    desc: 'Astro automatski konvertuje slike u WebP format, menja veličinu i dodaje lazy loading. Google nagrađuje brže učitavanje slika.',
                  },
                  {
                    title: 'Automatski sitemap',
                    desc: 'Astro generiše sitemap.xml koji Google koristi za indeksiranje. Svaka nova strana je automatski prijavljuje Google-u.',
                  },
                  {
                    title: 'Perfektni Core Web Vitals',
                    desc: 'Bez JavaScript-a = bez blokiranja renderovanja = savršeni vitali. Direktan uticaj na SEO ranking.',
                  },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <span className="text-orange-500 font-black mt-1 flex-shrink-0">✓</span>
                    <div>
                      <strong className="text-slate-900 font-black">{item.title}: </strong>
                      <span className="text-slate-600">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Astro vs Next.js */}
            <div className="space-y-4 md:space-y-6">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 italic uppercase leading-tight">
                Astro vs Next.js — Kada Koristiti Šta?
              </h2>
              <p className="leading-relaxed">
                I Astro i Next.js su odlični frameworki. Ali nisu za isti tip projekata. Evo kada koristiti koji:
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-sm rounded-2xl overflow-hidden">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="text-left p-4 font-black">Kriterijum</th>
                      <th className="text-center p-4 font-black text-orange-400">Astro</th>
                      <th className="text-center p-4 font-black text-blue-400">Next.js</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {[
                      { crit: 'Performanse', astro: '★★★★★', next: '★★★★' },
                      { crit: 'SEO', astro: '★★★★★', next: '★★★★★' },
                      { crit: 'Prezentacioni sajtovi', astro: '★★★★★', next: '★★★' },
                      { crit: 'E-commerce', astro: '★★★', next: '★★★★★' },
                      { crit: 'Blog / Sadržaj', astro: '★★★★★', next: '★★★★' },
                      { crit: 'Autentifikacija', astro: '★★★', next: '★★★★★' },
                      { crit: 'Baza podataka', astro: '★★', next: '★★★★★' },
                      { crit: 'Lighthouse Score', astro: '100/100', next: '90-97/100' },
                    ].map((row, i) => (
                      <tr key={row.crit} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                        <td className="p-4 font-bold text-slate-700">{row.crit}</td>
                        <td className="p-4 text-center text-orange-600 font-bold">{row.astro}</td>
                        <td className="p-4 text-center text-blue-600 font-bold">{row.next}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="bg-orange-50 rounded-2xl p-6 border-2 border-orange-200">
                  <h4 className="font-black text-orange-700 mb-3 uppercase text-sm tracking-widest">Koristite Astro za:</h4>
                  <ul className="space-y-2 text-sm text-slate-700">
                    {['Prezentacioni sajtovi biznisa', 'Blogovi i informativni portali', 'Landing page-ovi', 'Lokalni biznisi (max SEO)', 'Portfolio sajtovi', 'Dokumentacija'].map(item => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="text-orange-500">✓</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-blue-50 rounded-2xl p-6 border-2 border-blue-200">
                  <h4 className="font-black text-blue-700 mb-3 uppercase text-sm tracking-widest">Koristite Next.js za:</h4>
                  <ul className="space-y-2 text-sm text-slate-700">
                    {['E-commerce prodavnice', 'Aplikacije sa loginom', 'Dashboard-i i admin paneli', 'Sajtovi sa bazom podataka', 'Real-time funkcionalnosti', 'SaaS platforme'].map(item => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="text-blue-500">✓</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Vercel */}
            <div className="space-y-4 md:space-y-6">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 italic uppercase leading-tight">
                Vercel — Savršeni Dom za Astro Sajtove
              </h2>
              <p className="leading-relaxed">
                Astro sajtove hostujemo na <strong className="text-slate-900 font-bold">Vercel platformi</strong> — globalnoj CDN mreži koja servira sadržaj sa najbližeg servera svakom korisniku.
              </p>
              <ul className="space-y-3 pl-6 list-none">
                <li className="flex items-start gap-3">
                  <span className="text-teal-500 font-black text-2xl leading-none">→</span>
                  <span><strong>Globalni CDN</strong> — Serveri u 30+ zemalja = sajt se učitava brzo svuda</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-500 font-black text-2xl leading-none">→</span>
                  <span><strong>Auto-deploy</strong> — Svaka izmena na sajtu je live za 30 sekundi</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-500 font-black text-2xl leading-none">→</span>
                  <span><strong>Besplatni SSL</strong> — HTTPS sertifikat bez dodatnih troškova</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-500 font-black text-2xl leading-none">→</span>
                  <span><strong>99.99% uptime</strong> — Vaš sajt je uvek dostupan</span>
                </li>
              </ul>
            </div>

            {/* Naši primeri */}
            <div className="space-y-4 md:space-y-6">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 italic uppercase leading-tight">
                Naši Astro Sajtovi — Realni Rezultati
              </h2>
              <p className="leading-relaxed">
                Duck Family Team je do sada izradio više Astro sajtova za srpske lokalne biznise. Rezultati su konzistentno impresivni:
              </p>

              <div className="grid md:grid-cols-1 gap-6 max-w-xl">
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                  <h4 className="font-black text-slate-800 mb-2">Tepih Servis Jevtić</h4>
                  <p className="text-teal-600 font-bold text-sm mb-3">🏆 TOP #2 Google za "tepih servis" u Beogradu</p>
                  <p className="text-slate-600 text-sm mb-4">Čisti Astro sajt sa savršenim Lighthouse score-om. Klijenti pronalaze servis i šalju upite svaki dan putem organskog SEO-a.</p>
                  <a
                    href="https://www.tepihservisjevtic.rs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-600 font-black text-xs uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all"
                  >
                    Poseti sajt
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Zaključak */}
            <div className="space-y-4 md:space-y-6">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 italic uppercase leading-tight">
                Zaključak: Da Li Vaš Biznis Treba Astro Sajt?
              </h2>
              <p className="leading-relaxed">
                Ako imate prezentacioni sajt, blog, landing page ili sajt za lokalni biznis — odgovor je gotovo uvek <strong className="text-teal-600">da</strong>. Astro vam daje:
              </p>
              <ul className="space-y-3 pl-6 list-none">
                <li className="flex items-start gap-3">
                  <span className="text-teal-500 font-black text-xl leading-none">✓</span>
                  <span>Savršene performanse koje Google nagrađuje višim pozicijama</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-500 font-black text-xl leading-none">✓</span>
                  <span>SEO optimizaciju od prvog dana bez dodatnih podešavanja</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-500 font-black text-xl leading-none">✓</span>
                  <span>Ultra brzo učitavanje na mobilnim uređajima (70%+ saobraćaja)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-500 font-black text-xl leading-none">✓</span>
                  <span>Lighthouse Score 100 koji konkurencija ne može da dosegne</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-500 font-black text-xl leading-none">✓</span>
                  <span>Klijente koji vas pronalaze organskim putem — besplatno i svaki dan</span>
                </li>
              </ul>
              <div className="bg-orange-50 p-5 md:p-8 border-l-4 border-orange-500 italic rounded-r-xl md:rounded-r-2xl shadow-sm">
                <p className="text-slate-800 m-0">
                  <strong className="text-orange-700 uppercase text-xs md:text-sm tracking-widest not-italic block mb-2">
                    Naša preporuka:
                  </strong>
                  Za lokalne biznise u Srbiji, Astro sajt + Google Ads je trenutno najmoćnija kombinacija za brzo sticanje novih klijenata. Organski SEO kroz Astro donosi besplatan saobraćaj, dok Google Ads odmah dovodi kupce dok SEO raste.
                </p>
              </div>
            </div>

            <hr className="border-slate-100 my-8 md:my-12" />

            {/* CTA */}
            <div className="text-center py-4 md:py-6">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 mb-6 leading-tight">
                Želite Astro sajt koji rangira?
              </h3>
              <p className="mb-8 md:mb-10 text-slate-500 text-lg md:text-xl">
                Duck Family Team pravi ultrabrze Astro i Next.js sajtove sa kompletnom SEO optimizacijom. Vaši klijenti će vas pronaći odmah.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/#kontakt"
                  className="btn-duck text-white px-8 py-5 md:px-10 md:py-6 rounded-2xl font-black uppercase tracking-widest inline-block shadow-2xl hover:scale-105 transform transition text-sm md:text-base text-center"
                >
                  Zatraži Besplatnu Konsultaciju
                </Link>
                <Link
                  href="/#portfolio"
                  className="bg-slate-900 text-white px-8 py-5 md:px-10 md:py-6 rounded-2xl font-black uppercase tracking-widest inline-block hover:bg-slate-800 transition text-sm md:text-base text-center"
                >
                  Vidi Naše Sajtove
                </Link>
              </div>
            </div>
          </div>

          {/* Back to blog */}
          <div className="mt-12 text-center">
            <Link
              href="/blog"
              className="text-teal-600 font-bold hover:text-teal-700 transition italic text-sm md:text-base flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              Nazad na sve blogove
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
