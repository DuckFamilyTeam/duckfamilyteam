import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import NewsletterForm from '@/components/NewsletterForm'
import Potpis from '@/components/Potpis'

export const metadata: Metadata = {
  title: { absolute: 'Astro sajtovi: kada su najbolji izbor, a kada nisu' },
  description:
    'Island Architecture, nulti JavaScript i Lighthouse 100. Za koje sajtove je Astro najbolji izbor, a kada je Next.js prava odluka.',
  alternates: {
    canonical: 'https://www.duckfamilyteam.online/blog/astro-sajtovi',
  },
  keywords: [
    'Astro framework',
    'Astro sajt',
    'Island Architecture',
    'ultrabrzi sajt',
    'SEO optimizacija Srbija',
    'Lighthouse 100',
    'web development Srbija',
    'Duck Family Team',
  ],
  openGraph: {
    title: 'Astro sajtovi: kada su najbolji izbor, a kada nisu',
    description: 'Island Architecture, nulti JavaScript i Lighthouse score 100. I jasna granica: kada je Astro prava odluka, a kada Next.js.',
    url: 'https://www.duckfamilyteam.online/blog/astro-sajtovi',
    type: 'article',
    publishedTime: '2026-05-09',
    authors: ['Duck Family Team'],
    images: [
      {
        url: 'https://www.duckfamilyteam.online/img/blog/astro-sajtovi.png',
        width: 1200,
        height: 630,
        alt: 'Astro Sajtovi, Duck Family Team',
      },
    ],
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Astro sajtovi: kada su najbolji izbor, a kada nisu',
  description:
    'Za koje sajtove je Astro najbolji izbor, a za koje Next.js. Island Architecture, Lighthouse 100, nulti JavaScript i jasna granica između dve tehnologije.',
  image: 'https://www.duckfamilyteam.online/img/blog/astro-sajtovi.png',
  datePublished: '2026-05-09',
  dateModified: '2026-10-05',
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

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Početna', item: 'https://www.duckfamilyteam.online' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.duckfamilyteam.online/blog' },
    { '@type': 'ListItem', position: 3, name: 'Astro Sajtovi', item: 'https://www.duckfamilyteam.online/blog/astro-sajtovi' },
  ],
}

export default function AstroSajtoviPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar />
      <main id="glavni-sadrzaj" className="bg-ink-bg text-ink-text pt-28 md:pt-40 pb-20 px-4 md:px-6">
        <article className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="mb-8 font-mono text-xs uppercase tracking-widest text-ink-muted flex items-center gap-2" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-ink-text transition">Početna</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-ink-text transition">Blog</Link>
            <span>/</span>
            <span className="text-ink-text">Astro Sajtovi</span>
          </nav>

          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <span className="bg-wine text-ink-text text-[10px] md:text-[11px] font-mono uppercase px-4 py-1.5 md:px-5 md:py-2 rounded-full tracking-widest">
              Web Development
            </span>
            <h1 className="font-display font-medium text-[2rem] md:text-4xl lg:text-5xl text-ink-text mt-6 mb-6 md:mb-8 leading-tight px-2">
              Astro sajtovi: kada su najbolji izbor, a kada nisu?
            </h1>
            <Potpis className="mx-auto -mt-1 mb-8" />
            <p className="text-lg md:text-2xl text-ink-muted max-w-2xl mx-auto leading-relaxed">
              Island Architecture, nulti JavaScript i Lighthouse score 100. Evo za koje sajtove je Astro prava odluka, a za koje je Next.js bolji.
            </p>
            {/* Razdelnik "·" grupisan UZ sledecu stavku (ne sopstveni flex
                child): na uskom ekranu se lomi zajedno s njom, pa ne ostaje
                da visi sam na kraju reda (vizuelna provera, krug 7,
                ispravka 4b). */}
            <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 mt-6 font-mono text-[11px] text-ink-muted uppercase tracking-widest">
              <span className="whitespace-nowrap">Duck Family Team</span>
              <span className="whitespace-nowrap">· <time dateTime="2026-05-09">9. maj 2026.</time></span>
              <span className="whitespace-nowrap">· 8 min čitanja</span>
            </div>
          </div>

          <Image
            src="/img/blog/astro-sajtovi.svg"
            unoptimized
            alt="Astro Sajtovi, Duck Family Team web development"
            width={1200}
            height={600}
            className="w-full h-[250px] md:h-[500px] object-cover rounded-2xl mb-12 md:mb-16 border border-ink-border"
            priority
          />

          {/* Content */}
          <div className="bg-ink-surface border border-ink-border rounded-2xl p-6 md:p-12 lg:p-16 space-y-10 md:space-y-12 text-ink-muted text-base md:text-xl">

            <p className="leading-relaxed">
              Pravimo sajtove u dve tehnologije, Astro i Next.js. Skoro svaki razgovor sa klijentom dođe do istog pitanja: koja je bolja. Nijedna. One rešavaju različite probleme, a pogrešan izbor se plaća ili brzinom sajta ili mesecima dodatnog posla. Ovaj tekst objašnjava gde je granica i kako da prepoznate{' '}
              <strong className="text-ink-text font-medium">na kojoj strani je vaš sajt</strong>.
            </p>

            {/* Šta je Astro */}
            <div className="space-y-4 md:space-y-6">
              <h2 className="font-display font-medium text-2xl md:text-3xl lg:text-4xl text-ink-text leading-tight">
                Šta je zapravo Astro?
              </h2>
              <p className="leading-relaxed">
                Astro polazi od jedne pretpostavke: <strong className="text-ink-text font-medium">većini stranica JavaScript u pregledaču uopšte ne treba</strong>. Tekst, slike, cenovnik, radno vreme, mapa. Sve je to HTML. Astro zato podrazumevano ne pošalje ni jednu liniju JS-a, pa ga vi dodajete samo tamo gde stvarno postoji interakcija.
              </p>
              <p className="leading-relaxed">
                Next.js polazi od druge pretpostavke, i ima dobar razlog: da stranica jeste aplikacija. Zato u pregledač šalje React, pa dobijate stanje, rutiranje, forme koje reaguju bez osvežavanja i sve ostalo što aplikacija traži. Taj runtime nije trošak nego alat. Samo se plaća i kada vam ne treba.
              </p>
              <div className="bg-ink-bg p-5 md:p-8 border-l-4 border-wine rounded-r-xl shadow-sm">
                <p className="text-ink-text m-0">
                  <strong className="text-wine-text uppercase text-xs md:text-sm tracking-widest block mb-2">
                    Razlika u pristupu
                  </strong>
                  Astro počinje od nule JavaScript-a i vi ga dodajete kad zatreba. Next.js počinje od React aplikacije i vi je skraćujete. Oba stižu do brzog sajta. Pitanje je samo koliko posla ima između, a to zavisi od toga šta stranica radi.
                </p>
              </div>
            </div>

            {/* Island Architecture */}
            <div className="space-y-4 md:space-y-6">
              <h2 className="font-display font-medium text-2xl md:text-3xl lg:text-4xl text-ink-text leading-tight">
                Island Architecture, kako Astro bira šta dobija JavaScript
              </h2>
              <p className="leading-relaxed">
                Astro to radi kroz <strong className="text-ink-text font-medium">Island Architecture</strong>, arhitekturu ostrva. Princip je jednostavan:
              </p>
              <ul className="space-y-3 pl-6 list-none">
                <li className="flex items-start gap-3">
                  <span className="text-wine-text font-bold text-2xl leading-none">→</span>
                  <span>Stranica se sastoji od "ostrva", interaktivnih komponenti</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-wine-text font-bold text-2xl leading-none">→</span>
                  <span>Sve ostalo (tekst, slike, navigacija) je statični HTML, bez JavaScript-a</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-wine-text font-bold text-2xl leading-none">→</span>
                  <span>Samo "ostrva" dobijaju JavaScript, i to samo kada je potrebno</span>
                </li>
              </ul>
              <p className="leading-relaxed">
                Rezultat je stranica koja u pregledač pošalje tačno onoliko JavaScript-a koliko na njoj ima ostrva. Na prezentacionom sajtu to je često nula. Koliko se to na kraju vidi u sekundama zavisi od sadržaja, slika, fontova i hostinga, pa <strong className="text-ink-text font-medium">brojku ne dajemo unapred</strong>, nego je izmerimo na vašem sajtu.
              </p>

              <div className="bg-ink-bg p-5 md:p-8 border-l-4 border-wine rounded-r-xl shadow-sm">
                <p className="text-ink-text m-0">
                  <strong className="text-wine-text uppercase text-xs md:text-sm tracking-widest block mb-2">
                    Primer iz prakse
                  </strong>
                  Zamislite sajt restorana. Skoro sve je statično: meni, adresa, radno vreme. Samo rezervacija treba JavaScript. Astro pošalje JS za tu jednu formu, a sve ostalo stigne kao gotov HTML. Da je ista stranica React aplikacija, pregledač bi morao da preuzme i pokrene framework samo da bi ispisao meni koji se ne menja.
                </p>
              </div>
            </div>

            {/* Lighthouse Score */}
            <div className="space-y-4 md:space-y-6">
              <h2 className="font-display font-medium text-2xl md:text-3xl lg:text-4xl text-ink-text leading-tight">
                Lighthouse 100/100, i šta ta cifra zaista znači
              </h2>
              <p className="leading-relaxed">
                Google Lighthouse je alat koji meri kvalitet web sajtova ocenama od 0 do 100 u 4 kategorije: performanse, pristupačnost, best practices i SEO. Astro sajtovi rutinski postižu:
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: 'Performance', score: '100' },
                  { label: 'Accessibility', score: '98' },
                  { label: 'Best Practices', score: '100' },
                  { label: 'SEO', score: '100' },
                ].map((item) => (
                  <div key={item.label} className="bg-ink-bg border border-ink-border rounded-2xl p-4 text-center">
                    <div className="w-16 h-16 bg-wine rounded-full flex items-center justify-center text-ink-text font-display font-medium text-2xl mx-auto mb-2">
                      {item.score}
                    </div>
                    <p className="text-xs font-mono uppercase tracking-wide text-ink-muted">{item.label}</p>
                  </div>
                ))}
              </div>

              <p className="leading-relaxed">
                Na sadržajnoj stranici Astro tu cifru dobija podrazumevano, jer nema JavaScript-a koji bi odložio prikaz. Next.js do visokih ocena takođe stiže, ali se tamo na tome radi: šta ide na server, šta u pregledač, šta se učitava kasnije. Taj posao radimo i naplaćujemo kao deo izrade. Razlika nije u tome da li je moguće, nego koliko košta da bude tako.
              </p>
              <p className="leading-relaxed">
                I jedna ograda, da se cifra ne čita pogrešno. Lighthouse meri jednu posetu u kontrolisanim uslovima, na simuliranom telefonu i simuliranoj mreži. Ono što Google koristi za rangiranje su podaci od stvarnih korisnika, a oni umeju da izgledaju drugačije. Zato ocenu gledamo kao alat za otkrivanje problema, ne kao rezultat sam po sebi.
              </p>
            </div>

            {/* Zašto Google voli Astro */}
            <div className="space-y-4 md:space-y-6">
              <h2 className="font-display font-medium text-2xl md:text-3xl lg:text-4xl text-ink-text leading-tight">
                Core Web Vitals, gde se razlika zaista vidi
              </h2>
              <p className="leading-relaxed">
                Google rangira sajtove prema desecima faktora, ali <strong className="text-wine-text">Core Web Vitals su postali jedan od najvažnijih</strong>. Mere se tri stvari:
              </p>
              <ul className="space-y-5 pl-6 list-none">
                <li className="flex items-start gap-3">
                  <span className="text-wine-text font-bold text-2xl leading-none">1.</span>
                  <div>
                    <strong className="text-ink-text font-medium">LCP (Largest Contentful Paint)</strong>
                    <p className="text-ink-muted text-base mt-1">Koliko brzo se pojavi najveći element na stranici. Google kao dobro računa sve do 2,5 sekunde. Kad u pregledaču nema JavaScript-a koji prvo mora da se preuzme i pokrene, ta granica se lakše drži.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-wine-text font-bold text-2xl leading-none">2.</span>
                  <div>
                    <strong className="text-ink-text font-medium">FID / INP (Interaction to Next Paint)</strong>
                    <p className="text-ink-muted text-base mt-1">Koliko sajt brzo odgovori na klik ili dodir. Što manje JavaScript-a drži glavnu nit, to je odziv bolji. Na stranici bez ostrva nema šta da je zadrži.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-wine-text font-bold text-2xl leading-none">3.</span>
                  <div>
                    <strong className="text-ink-text font-medium">CLS (Cumulative Layout Shift)</strong>
                    <p className="text-ink-muted text-base mt-1">Da li sadržaj skače dok se stranica učitava. Gotov HTML sa zadatim dimenzijama slika nema odakle da skoči. Isto važi i za Next.js kad se dimenzije postave, samo se tamo na to mora paziti.</p>
                  </div>
                </li>
              </ul>
              <div className="bg-ink-bg p-5 md:p-8 border-l-4 border-wine rounded-r-xl shadow-sm">
                <p className="text-ink-text m-0">
                  <strong className="text-wine-text uppercase text-xs md:text-sm tracking-widest block mb-2">
                    Direktna veza
                  </strong>
                  Google je potvrdio da Core Web Vitals ulaze u rangiranje. Oni nisu najvažniji faktor, ali su jedan od onih na koje stvarno možete da utičete. Astro na sadržajnim stranicama ulazi u to sa prednošću, jer najčešći izvor problema, JavaScript koji blokira glavnu nit, tamo prosto ne postoji.
                </p>
              </div>
            </div>

            {/* SEO Prednosti */}
            <div className="space-y-4 md:space-y-6">
              <h2 className="font-display font-medium text-2xl md:text-3xl lg:text-4xl text-ink-text leading-tight">
                SEO koji dobijate bez dodatnog rada
              </h2>
              <p className="leading-relaxed">
                Veći deo SEO osnove Astro daje podrazumevano, bez podešavanja. Next.js ima ekvivalent za svaku stavku sa ove liste, samo se neke uključuju ručno i neke zahtevaju odluku:
              </p>
              <ul className="space-y-4 pl-6 list-none">
                {[
                  {
                    title: 'Statički generisan HTML',
                    desc: 'Google bot odmah vidi kompletan sadržaj bez potrebe za JavaScript izvršavanjem. Nema čekanja na hydration.',
                  },
                  {
                    title: 'Ugrađeni SEO alati',
                    desc: 'Meta tagovi, Open Graph, Twitter Cards i Schema Markup se generišu automatski na pravi način.',
                  },
                  {
                    title: 'Optimizacija slika',
                    desc: 'Astro automatski konvertuje slike u WebP format, menja veličinu i dodaje lazy loading. Google nagrađuje brže učitavanje slika.',
                  },
                  {
                    title: 'Automatski sitemap',
                    desc: 'Astro generiše sitemap.xml koji Google koristi za indeksiranje. Svaka nova strana se automatski prijavljuje Google-u.',
                  },
                  {
                    title: 'Core Web Vitals bez borbe',
                    desc: 'Bez JavaScript-a nema šta da odloži prikaz, pa se dobre vrednosti dobijaju same. U Next.js-u se do istog dolazi, ali uz rad.',
                  },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <span className="text-wine-text font-bold mt-1 flex-shrink-0">✓</span>
                    <div>
                      <strong className="text-ink-text font-medium">{item.title}: </strong>
                      <span className="text-ink-muted">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Astro vs Next.js */}
            <div className="space-y-4 md:space-y-6">
              <h2 className="font-display font-medium text-2xl md:text-3xl lg:text-4xl text-ink-text leading-tight">
                Astro vs Next.js, kada koristiti šta?
              </h2>
              <p className="leading-relaxed">
                Oba su ozbiljna, oba koristimo, i nijedno nije rezervno rešenje. Razlikuju se po tome za koji tip projekta su pravljena. Zvezdice ispod su naša ocena iz prakse, ne merenje:
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-sm rounded-2xl overflow-hidden border border-ink-border">
                  <thead>
                    <tr className="bg-ink-bg text-ink-text">
                      <th className="text-left p-4 font-medium font-display">Kriterijum</th>
                      <th className="text-center p-4 font-medium font-display text-wine-text">Astro</th>
                      <th className="text-center p-4 font-medium font-display text-ink-muted">Next.js</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-ink-border">
                    {[
                      { crit: 'Performanse', astro: '★★★★★', next: '★★★★' },
                      { crit: 'SEO', astro: '★★★★★', next: '★★★★★' },
                      { crit: 'Prezentacioni sajtovi', astro: '★★★★★', next: '★★★' },
                      { crit: 'E-commerce', astro: '★★★', next: '★★★★★' },
                      { crit: 'Blog / Sadržaj', astro: '★★★★★', next: '★★★★' },
                      { crit: 'Autentifikacija', astro: '★★★', next: '★★★★★' },
                      { crit: 'Baza podataka', astro: '★★', next: '★★★★★' },
                      { crit: 'JS u pregledaču, podrazumevano', astro: 'nula', next: 'React runtime' },
                    ].map((row, i) => (
                      <tr key={row.crit} className={i % 2 === 0 ? 'bg-ink-surface' : 'bg-ink-bg'}>
                        <td className="p-4 font-medium text-ink-text">{row.crit}</td>
                        <td className="p-4 text-center text-wine-text font-medium">{row.astro}</td>
                        <td className="p-4 text-center text-ink-muted font-medium">{row.next}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="bg-ink-bg rounded-2xl p-6 border border-wine">
                  <h3 className="font-display font-medium text-wine-text mb-3 uppercase text-sm tracking-widest">Koristite Astro za</h3>
                  <ul className="space-y-2 text-sm text-ink-muted">
                    {['Prezentacioni sajtovi biznisa', 'Blogovi i informativni portali', 'Landing stranice', 'Lokalni biznisi (maksimalan SEO)', 'Portfolio sajtovi', 'Dokumentacija'].map(item => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="text-wine-text">✓</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-ink-bg rounded-2xl p-6 border border-ink-border">
                  <h3 className="font-display font-medium text-ink-text mb-3 uppercase text-sm tracking-widest">Koristite Next.js za</h3>
                  <ul className="space-y-2 text-sm text-ink-muted">
                    {['E-commerce prodavnice', 'Aplikacije sa loginom', 'Dashboard-i i admin paneli', 'Sajtovi sa bazom podataka', 'Real-time funkcionalnosti', 'SaaS platforme'].map(item => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="text-ink-muted">✓</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Vercel */}
            <div className="space-y-4 md:space-y-6">
              <h2 className="font-display font-medium text-2xl md:text-3xl lg:text-4xl text-ink-text leading-tight">
                Vercel, gde hostujemo i jedne i druge
              </h2>
              <p className="leading-relaxed">
                I Astro i Next.js sajtove hostujemo na <strong className="text-ink-text font-medium">Vercel platformi</strong>, globalnoj CDN mreži koja sadržaj servira sa servera najbližeg korisniku. Ovaj sajt koji sada čitate radi na Next.js-u, na istoj platformi.
              </p>
              <ul className="space-y-3 pl-6 list-none">
                <li className="flex items-start gap-3">
                  <span className="text-wine-text font-bold text-2xl leading-none">→</span>
                  <span><strong className="text-ink-text">Globalni CDN</strong>, serveri u 30+ zemalja, sajt se učitava brzo svuda</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-wine-text font-bold text-2xl leading-none">→</span>
                  <span><strong className="text-ink-text">Auto-deploy</strong>, svaka izmena na sajtu je live za 30 sekundi</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-wine-text font-bold text-2xl leading-none">→</span>
                  <span><strong className="text-ink-text">Besplatni SSL</strong>, HTTPS sertifikat bez dodatnih troškova</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-wine-text font-bold text-2xl leading-none">→</span>
                  <span><strong className="text-ink-text">99.99% uptime</strong>, vaš sajt je uvek dostupan</span>
                </li>
              </ul>
            </div>

            {/* Naši primeri */}
            <div className="space-y-4 md:space-y-6">
              <h2 className="font-display font-medium text-2xl md:text-3xl lg:text-4xl text-ink-text leading-tight">
                Naši Astro sajtovi, realni rezultati
              </h2>
              <p className="leading-relaxed">
                Jedan naš Astro sajt za lokalni biznis u Srbiji:
              </p>

              <div className="grid md:grid-cols-1 gap-6 max-w-xl">
                <div className="bg-ink-bg rounded-2xl p-6 border border-ink-border">
                  <h3 className="font-display font-medium text-ink-text mb-2">Tepih Servis Jevtić</h3>
                  <p className="text-wine-text font-medium text-sm mb-3">Dok smo vodili njihovu kampanju, bili su na 2. mestu na Google-u za "tepih servis" u Beogradu</p>
                  <p className="text-ink-muted text-sm mb-4">Čist Astro sajt sa visokim Lighthouse score-om. Dok smo sarađivali, klijenti su servis pronalazili i slali upite putem organskog SEO-a.</p>
                  <a
                    href="https://tepihservisjevtic.rs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-wine-text font-medium text-xs uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all"
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
              <h2 className="font-display font-medium text-2xl md:text-3xl lg:text-4xl text-ink-text leading-tight">
                Zaključak: Astro ili Next.js za vaš sajt?
              </h2>
              <p className="leading-relaxed">
                Postoji jedno pitanje koje razrešava skoro svaki slučaj: <strong className="text-wine-text">da li vaša stranica prikazuje sadržaj ili radi nešto</strong>. Ako prikazuje, idite na Astro. Ako radi, idite na Next.js.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-ink-bg rounded-2xl p-6 border border-wine">
                  <h3 className="font-display font-medium text-wine-text mb-3 uppercase text-sm tracking-widest">Astro, ako vam treba</h3>
                  <ul className="space-y-3 text-base text-ink-muted">
                    <li className="flex items-start gap-3"><span className="text-wine-text font-bold leading-none">✓</span><span>Prezentacioni sajt, blog ili landing stranica</span></li>
                    <li className="flex items-start gap-3"><span className="text-wine-text font-bold leading-none">✓</span><span>Učitavanje na telefonu koje nema šta da ga zadrži</span></li>
                    <li className="flex items-start gap-3"><span className="text-wine-text font-bold leading-none">✓</span><span>Core Web Vitals koji se drže sami, bez stalnog nadzora</span></li>
                    <li className="flex items-start gap-3"><span className="text-wine-text font-bold leading-none">✓</span><span>Jeftinije održavanje, jer ima manje pokretnih delova</span></li>
                  </ul>
                </div>
                <div className="bg-ink-bg rounded-2xl p-6 border border-ink-border">
                  <h3 className="font-display font-medium text-ink-text mb-3 uppercase text-sm tracking-widest">Next.js, ako vam treba</h3>
                  <ul className="space-y-3 text-base text-ink-muted">
                    <li className="flex items-start gap-3"><span className="text-ink-muted font-bold leading-none">✓</span><span>Prodavnica, korpa, plaćanje, stanje artikala</span></li>
                    <li className="flex items-start gap-3"><span className="text-ink-muted font-bold leading-none">✓</span><span>Nalozi i login, lični deo sajta za svakog korisnika</span></li>
                    <li className="flex items-start gap-3"><span className="text-ink-muted font-bold leading-none">✓</span><span>Baza podataka, pretraga, filteri, kalkulatori</span></li>
                    <li className="flex items-start gap-3"><span className="text-ink-muted font-bold leading-none">✓</span><span>Sajt koji će rasti u aplikaciju, pa da se ne seli kasnije</span></li>
                  </ul>
                </div>
              </div>

              <p className="leading-relaxed">
                Granica nije uvek čista i to je u redu. Prezentacioni sajt kojem za godinu treba zakazivanje termina i korisnički nalozi je od početka Next.js posao, ne Astro. Isto tako, prodavnica od dvanaest proizvoda bez naloga i bez stanja lager liste je Astro posao. Zato pitamo šta sajt treba da radi <strong className="text-ink-text font-medium">za dve godine</strong>, ne samo na dan predaje.
              </p>
              <div className="bg-ink-bg p-5 md:p-8 border-l-4 border-wine rounded-r-xl shadow-sm">
                <p className="text-ink-text m-0">
                  <strong className="text-wine-text uppercase text-xs md:text-sm tracking-widest block mb-2">
                    Kako mi biramo
                  </strong>
                  Ne počinjemo od tehnologije. Prvo popišemo šta sajt treba da radi, pa izbor ispadne sam. Kod lokalnih biznisa to najčešće ispadne Astro, jer im sajt prikazuje usluge i prima upite. Sajt koji sada čitate je Next.js, jer ima kalkulator cena, forme i sadržaj koji se povlači u toku rada. Nijedan od ta dva izbora nije kompromis.
                </p>
              </div>
            </div>

            <hr className="border-ink-border my-8 md:my-12" />

            {/* CTA */}
            <div className="text-center py-4 md:py-6">
              <h3 className="font-display font-medium text-2xl md:text-3xl lg:text-4xl text-ink-text mb-6 leading-tight">
                Niste sigurni koja vam tehnologija treba?
              </h3>
              <p className="mb-8 md:mb-10 text-ink-muted text-lg md:text-xl">
                Recite nam šta sajt treba da radi, a izbor tehnologije je naš posao. Pravimo i Astro i Next.js sajtove, sa SEO osnovom postavljenom od prvog dana.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/kontakt"
                  className="bg-wine hover:bg-wine-bright text-ink-text px-8 py-5 md:px-10 md:py-6 rounded-xl font-medium inline-block transition-colors text-sm md:text-base text-center"
                >
                  Zatraži besplatnu konsultaciju
                </Link>
                <Link
                  href="/rezultati"
                  className="border border-ink-border hover:border-wine text-ink-text px-8 py-5 md:px-10 md:py-6 rounded-xl font-medium inline-block transition-colors text-sm md:text-base text-center"
                >
                  Pogledaj rezultate klijenata
                </Link>
              </div>
            </div>
          </div>

          {/* Related links */}
          <div className="mt-12 p-6 bg-ink-surface border border-ink-border rounded-2xl">
            <h3 className="font-display font-medium text-ink-text mb-4">Povezani tekstovi</h3>
            <ul className="space-y-2">
              <li><Link href="/usluge/izrada-sajtova" className="text-wine-text hover:text-ink-text font-medium">Next.js i Astro sajtovi, naša usluga →</Link></li>
              <li><Link href="/blog/seo-2026" className="text-wine-text hover:text-ink-text font-medium">SEO u 2026, tematski autoritet i AI pretraga →</Link></li>
              <li><Link href="/blog/google-ads-trosak" className="text-wine-text hover:text-ink-text font-medium">Zašto Google Ads troše novac bez konverzija? →</Link></li>
            </ul>
          </div>

          {/* Newsletter — traka od jednog reda, ne još jedna CTA kutija sa
              velikim naslovom. Ranije je ovde stajao pun boks odmah iznad
              "Nazad na sve blogove" i Footer-ovog "Vreme je da pobedite.",
              pa je članak imao tri poziva na akciju zaredom (vizuelna
              provera, krug 7, ispravka 3). Prijava ide preko sopstvene
              /api/newsletter rute. */}
          <div className="mt-12 py-8 border-t border-b border-ink-border flex flex-col md:flex-row items-center md:items-start justify-between gap-6 text-center md:text-left">
            <div className="md:max-w-xs">
              <p className="font-mono text-xs uppercase tracking-widest text-wine-text mb-1">
                Newsletter
              </p>
              <p className="text-ink-muted text-sm">
                Jedna analiza tržišta mesečno, bez spama.
              </p>
            </div>
            <div className="w-full md:w-auto md:flex-1 md:max-w-md">
              <NewsletterForm />
            </div>
          </div>

          {/* Back to blog */}
          <div className="mt-12 text-center">
            <Link
              href="/blog"
              className="text-wine-text font-medium hover:text-ink-text transition text-sm md:text-base flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              Nazad na sve blogove
            </Link>
          </div>
        </article>
      </main>
      <Footer containerClassName="max-w-4xl" />
    </>
  )
}
