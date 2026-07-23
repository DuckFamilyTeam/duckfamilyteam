import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'SEO u 2026: Tematski autoritet, AI pretraga i ključne reči | Duck Family Team',
  description:
    'Kompletni vodič za SEO u 2026. Tematski autoritet, Google SGE, E-E-A-T, Core Web Vitals i strategije koje zaista rade za firme u Srbiji.',
  alternates: {
    canonical: 'https://www.duckfamilyteam.online/blog/seo-2026',
  },
  keywords: [
    'SEO 2026',
    'SEO optimizacija Srbija 2026',
    'Google algoritam 2026',
    'tematski autoritet SEO',
    'Google SGE Srbija',
    'E-E-A-T SEO',
    'Core Web Vitals 2026',
    'ključne reči namera korisnika',
    'AI pretraga SEO',
    'lokalni SEO Srbija',
    'SEO strategija Srbija',
    'digitalni marketing Srbija',
    'Duck Family Team',
  ],
  openGraph: {
    title: 'SEO u 2026: Šta zaista radi za Google rangiranje | Duck Family Team',
    description: 'Tematski autoritet, AI pretraga i E-E-A-T — kompletni SEO vodič za 2026. godinu za firme u Srbiji.',
    url: 'https://www.duckfamilyteam.online/blog/seo-2026',
    type: 'article',
    publishedTime: '2026-03-15',
    modifiedTime: '2026-06-23',
    authors: ['Duck Family Team'],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=1200',
        width: 1200,
        height: 630,
        alt: 'SEO u 2026 — Strategija za Google rangiranje',
      },
    ],
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'SEO u 2026: Tematski autoritet, AI pretraga i ključne reči — šta zaista radi',
  description:
    'Kompletni SEO vodič za 2026. Tematski autoritet, Google SGE, E-E-A-T i Core Web Vitals strategije za firme u Srbiji.',
  image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=1200',
  datePublished: '2026-03-15',
  dateModified: '2026-06-23',
  wordCount: 2000,
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
    '@id': 'https://www.duckfamilyteam.online/blog/seo-2026',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Početna', item: 'https://www.duckfamilyteam.online' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.duckfamilyteam.online/blog' },
    { '@type': 'ListItem', position: 3, name: 'SEO u 2026', item: 'https://www.duckfamilyteam.online/blog/seo-2026' },
  ],
}

export default function SEO2026Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navbar />
      <main className="pt-28 md:pt-40 pb-20 px-4 md:px-6">
        <article className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm text-slate-400 font-bold flex items-center gap-2" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-teal-600 transition">Početna</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-teal-600 transition">Blog</Link>
            <span>/</span>
            <span className="text-slate-600">SEO u 2026</span>
          </nav>

          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <span className="bg-blue-50 text-blue-700 text-[10px] md:text-[11px] font-extrabold uppercase px-4 py-1.5 md:px-5 md:py-2 rounded-full tracking-wider italic">
              SEO Strategija 2026
            </span>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mt-6 mb-6 md:mb-8 leading-relaxed px-2">
              SEO u 2026:{' '}
              <span className="duck-gradient-text italic">Tematski autoritet, AI pretraga</span>{' '}
              i ključne reči
            </h1>
            <p className="text-lg md:text-2xl text-slate-500 italic font-medium max-w-2xl mx-auto leading-relaxed">
              Google se menja. AI preuzima kontrolu. Evo kompletnog vodiča šta to znači za SEO strategiju u Srbiji u 2026. godini.
            </p>
            <div className="flex items-center justify-center gap-4 mt-6 text-[11px] text-slate-400 font-bold uppercase tracking-widest">
              <span>Duck Family Team</span>
              <span>·</span>
              <time dateTime="2026-03-15">15. Mart 2026.</time>
              <span>·</span>
              <span>12 min čitanja</span>
            </div>
          </div>

          <Image
            src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=1200"
            alt="SEO u 2026 — Strategija za Google rangiranje"
            width={1200}
            height={600}
            className="w-full h-[250px] md:h-[500px] object-cover rounded-[2rem] md:rounded-[3.5rem] mb-12 md:mb-16 shadow-2xl"
            priority
          />

          {/* Content */}
          <div className="bg-white border border-black/5 rounded-[1.5rem] md:rounded-[2.5rem] p-6 md:p-12 lg:p-16 space-y-10 md:space-y-12 text-slate-700 text-base md:text-xl">
            <p className="leading-relaxed">
              <strong className="text-slate-900 font-bold">SEO u 2026. godini nije isti kao 2021.</strong> Google je prošao kroz više fundamentalnih promena algoritma, uveo AI generisane odgovore (SGE), i sve više kažnjava sajtove koji pokušavaju da "hakuju" sistem umesto da zaista pomognu korisnicima. Za firme u Srbiji, ovo je i izazov i prilika — jer srpski konkurenti još uvek uglavnom koriste zastarele taktike.
            </p>
            <p className="leading-relaxed">
              U ovom tekstu ćemo pokriti sve što treba da znate o modernom SEO-u: od promena u Google algoritmu, kroz tematski autoritet i E-E-A-T, do konkretnih taktika za lokalne firme u Srbiji.
            </p>

            {/* SEO 1 */}
            <div className="space-y-4 md:space-y-6">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 italic uppercase leading-tight">
                Šta se zapravo promenilo u Google algoritmu?
              </h2>
              <p className="leading-relaxed">
                Google više ne "čita reči" — on <strong className="text-slate-900 font-bold">razume kontekst i nameru</strong>. Uz BERT (2019), MUM (2021) i Gemini integraciju (2024-2026), Google je prešao sa jednostavnog keyword matchinga na duboko razumevanje semantičkih odnosa između pojmova.
              </p>
              <p className="leading-relaxed">
                Šta to praktično znači? Kada neko ukuca "Google Ads agencija Srbija", Google razume da ta osoba:
              </p>
              <ul className="space-y-3 pl-6 list-none">
                {[
                  'Traži profesionalnu firmu, ne DIY tutorial',
                  'Verovatno ima budžet za oglašavanje',
                  'Želi da vidi rezultate (case studies, reference)',
                  'Može biti spreman da kontaktira odmah',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-teal-500 font-black text-2xl leading-none">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="leading-relaxed">
                Sajt koji odgovara na sve ove implicitne potrebe — čak i kada ne pominje svaku doslovno — rangiraće bolje od sajta koji mehanički ponavlja ključnu reč 15 puta.
              </p>
            </div>

            {/* SEO 2 */}
            <div className="space-y-4 md:space-y-6">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 italic uppercase leading-tight">
                Da li su ključne reči i dalje bitne?
              </h2>
              <p className="leading-relaxed text-red-600 font-bold text-2xl md:text-3xl">
                Da. Ali njihova uloga se drastično promenila.
              </p>
              <p className="leading-relaxed">
                Ključne reči nisu nestale — ali one više nisu <em>pokretač</em> SEO strategije, već njen <em>vodič</em>. Umesto da pitate "za koje ključne reči treba da se rangiram?", pravo pitanje je "koja pitanja i probleme moja ciljna publika ima, i kako mogu da na njih odgovorim bolje od svih konkurenata?"
              </p>
              <p className="leading-relaxed">
                Ranije: Nabaciti ključnu reč što više puta = rangiranje.<br />
                Sada: <strong className="text-slate-900">Relevantnost teme → Kvalitet odgovora → E-E-A-T → Tehnička baza</strong> = rangiranje.
              </p>
              <div className="bg-slate-50 p-5 md:p-8 border-l-4 border-blue-500 italic rounded-r-xl md:rounded-r-2xl shadow-sm">
                <p className="text-slate-800 m-0">
                  <strong className="text-blue-700 uppercase text-xs md:text-sm tracking-widest not-italic block mb-2">Primer:</strong>
                  Blog koji 50 puta ponavlja "SEO agencija Beograd" će biti potučen od strane kvalitetnog teksta koji detaljno analizira konkretne SEO rezultate, sa primerima, podacima i ekspertskim uvidima — čak i ako tu frazu pominje samo 3-4 puta.
                </p>
              </div>
            </div>

            {/* SEO 3 */}
            <div className="space-y-4 md:space-y-6">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 italic uppercase leading-tight">
                Tematski autoritet — nova SEO paradigma
              </h2>
              <p className="leading-relaxed">
                Umesto da targetujete jednu ključnu reč, u 2026. gradite <strong className="text-slate-900 font-bold">tematski autoritet</strong>. To znači da Google vidi vaš sajt kao pouzdan izvor informacija za celu temu — a ne samo za jedan keyword.
              </p>
              <p className="leading-relaxed">
                Kako se gradi tematski autoritet:
              </p>
              <ul className="space-y-4 pl-6 list-none">
                {[
                  { n: '1.', t: 'Pillar stranica', d: 'Glavna "stub" stranica koja sveobuhvatno pokriva temu (npr. "Kompletan vodič za Google Ads u Srbiji" — 3000+ reči).' },
                  { n: '2.', t: 'Cluster sadržaj', d: 'Serija dubinskih tekstova na uže podteme koji se linkuju ka pillar stranici i međusobno (npr. "Kako podesiti Smart Bidding", "Negativne ključne reči vodič", "Google Ads Quality Score").' },
                  { n: '3.', t: 'Interno linkovanje', d: 'Sistematično međusobno linkovanje srodnih stranica prenosi SEO vrednost i pomaže Google-u da razume strukturu vašeg znanja.' },
                  { n: '4.', t: 'Konzistentna objava', d: 'Redovni novi sadržaj signalizira Google-u da je sajt aktivan i relevantan — idealno jednom nedeljno.' },
                ].map((item) => (
                  <li key={item.n} className="flex items-start gap-3">
                    <span className="text-teal-500 font-black text-2xl leading-none shrink-0">{item.n}</span>
                    <span><strong className="text-slate-800">{item.t}:</strong> {item.d}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-teal-50 p-5 md:p-8 border-l-4 border-teal-500 italic rounded-r-xl md:rounded-r-2xl shadow-sm">
                <p className="text-slate-800 m-0">
                  <strong className="text-teal-700 uppercase text-xs md:text-sm tracking-widest not-italic block mb-2">Zlatno pravilo 2026:</strong>
                  Pišite za ljude, optimizujte za Google. Svaki tekst treba da bude toliko dobar da neko želi da ga podeli i da se na njega referiše — to automatski donosi backlink-ove i autoritativnost.
                </p>
              </div>
            </div>

            {/* SEO 4 */}
            <div className="space-y-4 md:space-y-6">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 italic uppercase leading-tight">
                E-E-A-T: Expertise, Experience, Authoritativeness, Trust
              </h2>
              <p className="leading-relaxed">
                Google-ov Quality Rater Guidelines dokument definiše <strong>E-E-A-T</strong> kao jedan od ključnih faktora za procenu kvaliteta stranice. Ovo je posebno bitno za YMYL (Your Money or Your Life) teme: zdravlje, pravo, finansije, marketing.
              </p>
              <p className="leading-relaxed">
                <strong>Experience</strong> (Iskustvo) — Google sada eksplicitno nagrađuje sadržaj kreiran od strane nekoga ko ima lično iskustvo sa temom. Case studies, konkretni primeri i realni rezultati su zlata vredni.<br /><br />
                <strong>Expertise</strong> (Stručnost) — demonstriranje dubokog poznavanja teme. Ne površinski pregled, već detaljne analize.<br /><br />
                <strong>Authoritativeness</strong> (Autoritet) — mention na drugih autoritativnih sajtova, backlink-ovi sa relevantnih izvora, citiranja.<br /><br />
                <strong>Trust</strong> (Poverenje) — transparentnost: ime autora, kontakt informacije, politika privatnosti, HTTPS, jasne informacije o firmi.
              </p>
              <p className="leading-relaxed">
                Za firme u Srbiji, praktična preporuka: dodajte <strong>biografiju autora</strong> na svaki blog post, navedite adresu i broj telefona u footeru, prikupljajte recenzije na Google Business Profile-u.
              </p>
            </div>

            {/* SEO 5 */}
            <div className="space-y-4 md:space-y-6">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 italic uppercase leading-tight">
                Google SGE i AI pretraga — šta to znači za vaš saobraćaj?
              </h2>
              <p className="leading-relaxed">
                Google Search Generative Experience (SGE) i AI Overviews su drastično promenili izgled stranica sa rezultatima. AI sada generiše sažetak odgovora <em>pre</em> organskih rezultata, što je dovelo do pada klika na organske rezultate za određene tipove upita.
              </p>
              <p className="leading-relaxed">
                <strong>Koji upiti su najviše pogođeni?</strong> Jednostavni faktografski upiti ("koliko košta", "šta je", "kako se zove"). Za ove pretrage, korisnici često dobiju odgovor direktno od AI-a bez klikanja.
              </p>
              <p className="leading-relaxed">
                <strong>Koji upiti su najmanje pogođeni?</strong> Kompleksne pretrage sa personalnom namerom, lokalne pretrage ("frizer Beograd"), transakcione pretrage ("kupi auto karike Srbija"), pretrage gde korisnici žele da vide više opcija i porede.
              </p>
              <p className="leading-relaxed">
                Strategija: fokusirajte se na <strong>long-tail ključne reči</strong> sa jasnom transakcionom ili lokalnom namerom. "SEO optimizacija za mali biznis Beograd" je mnogo teže za AI da zadovolji direktno nego "šta je SEO".
              </p>
              <div className="bg-slate-50 p-5 md:p-8 border-l-4 border-blue-500 italic rounded-r-xl md:rounded-r-2xl shadow-sm">
                <p className="text-slate-800 m-0">
                  <strong className="text-blue-700 uppercase text-xs md:text-sm tracking-widest not-italic block mb-2">Bonus:</strong>
                  Sajtovi koji se citiraju u AI Overview-ima dobijaju verodostojnost i brand svest čak i bez klika. Strukturirani, autoritativni sadržaj povećava šansu da Google AI citira vaš sajt kao izvor.
                </p>
              </div>
            </div>

            {/* SEO 6 */}
            <div className="space-y-4 md:space-y-6">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 italic uppercase leading-tight">
                Tehničko SEO i Core Web Vitals — i dalje fundament
              </h2>
              <p className="leading-relaxed">
                Bez obzira koliko dobar bio vaš sadržaj, ako sajt ne učitava brzo ili nije optimizovan za mobilne, <span className="text-red-600 font-bold">gubite pozicije</span>. Google-ovi Core Web Vitals su i u 2026. direktni ranking faktor:
              </p>
              <ul className="space-y-3 pl-6 list-none">
                {[
                  { m: 'LCP (Largest Contentful Paint)', v: '< 2.5 sekundi — koliko brzo se prikazuje glavni sadržaj' },
                  { m: 'CLS (Cumulative Layout Shift)', v: '< 0.1 — koliko se stranica "skače" tokom učitavanja' },
                  { m: 'INP (Interaction to Next Paint)', v: '< 200ms — koliko brzo stranica reaguje na klikove' },
                ].map((item) => (
                  <li key={item.m} className="flex items-start gap-3">
                    <span className="text-teal-500 font-black text-xl leading-none">✓</span>
                    <span><strong className="text-slate-800">{item.m}:</strong> {item.v}</span>
                  </li>
                ))}
              </ul>
              <p className="leading-relaxed">
                Osim performansi, tehničko SEO u 2026. uključuje: <strong>structured data (JSON-LD)</strong> za bogate isečke u pretražnim rezultatima, <strong>IndexNow protokol</strong> za brže indexovanje novih stranica, <strong>mobile-first indexing</strong> (Google primarno indeksira mobilnu verziju sajta), i <strong>HTTPS</strong> kao bazični uslov.
              </p>
            </div>

            {/* SEO 7 - Lokalni */}
            <div className="space-y-4 md:space-y-6">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 italic uppercase leading-tight">
                Lokalni SEO u Srbiji — podcenjena prilika
              </h2>
              <p className="leading-relaxed">
                Za firme koje rade u Srbiji sa fizičkom lokacijom, <strong>lokalni SEO je možda najveća prilika u 2026</strong>. Zašto? Jer srpske firme u ogromnoj većini ignorišu Google Business Profile, ne prikupljaju recenzije i ne optimizuju za lokalne ključne reči.
              </p>
              <p className="leading-relaxed">
                Pretraga "advokat Beograd" prikazuje Map Pack — tri lokalna rezultata na vrhu stranice. Kompanija koja se pojavljuje u Map Pack-u za relevantne lokalne pretrage dobija vidljivost ekvivalentnu prvoj organskoj poziciji, bez plaćanja Google Ads-a.
              </p>
              <p className="leading-relaxed">
                Lokalni SEO checklist za firme u Srbiji:
              </p>
              <ul className="space-y-3 pl-6 list-none">
                {[
                  'Google Business Profile kompletno popunjen (opis, kategorije, radno vreme, slike)',
                  'Minimalno 20+ recenzija sa prosekom 4.5+',
                  'Konzistentno NAP (Name, Address, Phone) na svim platformama',
                  'Lokalne ključne reči u naslovu i opisu GBP profila',
                  'Lokalne ključne reči na sajtu (grad + usluga)',
                  'Citati na lokalnim srpskim direktorijumima',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-teal-500 font-black text-xl leading-none">☐</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* SEO 8 */}
            <div className="space-y-4 md:space-y-6">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 italic uppercase leading-tight">
                AI vidljivost — novi SEO front
              </h2>
              <p className="leading-relaxed">
                U 2026. godini pojavio se potpuno novi kanal koji mnogi SEO stručnjaci ignorišu: <strong>vidljivost u AI sistemima</strong>. Korisnici sve češće pitaju ChatGPT, Claude, Perplexity i Gemini za preporuke firmi, agencija i usluga — umesto da idu direktno na Google.
              </p>
              <p className="leading-relaxed">
                Šta to znači? Ako vaša firma nije citirana u relevantnim AI odgovorima, propuštate sve veći deo potencijalnih klijenata koji koriste AI asistente za istraživanje.
              </p>
              <p className="leading-relaxed">
                Kako povećati AI vidljivost: kreirajte sadržaj koji AI sistemi mogu lako citirati (strukturiran, autoritativan, sa jasnim tvrdnjama), nabavite linkove sa autoritativnih izvora, osigurajte da je vaš sajt dostupan AI crawler-ima (ClaudeBot, GPTBot, PerplexityBot) u robots.txt, i implementirajte <strong>llms.txt</strong> — novi standard koji AI sistemima opisuje vaš sajt.
              </p>
            </div>

            {/* Summary */}
            <div className="bg-slate-900 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-black text-white mb-4">SEO u 2026 — rezime strategije</h3>
              <ul className="space-y-3 text-slate-300">
                {[
                  'Gradite tematski autoritet, ne lovite pojedinačne ključne reči',
                  'E-E-A-T: demonstrirajte iskustvo, stručnost i poverenje',
                  'Fokus na transakcione i lokalne long-tail upite koje AI ne može zadovoljiti',
                  'Tehničko SEO: Core Web Vitals, structured data, HTTPS',
                  'Lokalni SEO: Google Business Profile + recenzije',
                  'AI vidljivost: robots.txt, llms.txt, autoritativni citati',
                  'Interni linking i content cluster strategija',
                  'Konzistentna objava kvalitetnog sadržaja (1500+ reči)',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-teal-400 font-black shrink-0">{i + 1}.</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <hr className="border-slate-100 my-8 md:my-12" />

            {/* CTA */}
            <div className="text-center py-4 md:py-6">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 mb-6 leading-tight">
                Vaš sajt nije rangiran kako treba?
              </h3>
              <p className="mb-8 md:mb-10 text-slate-500 text-lg md:text-xl">
                Radimo SEO audit i pokazujemo vam tačno šta treba da se promeni da biste ušli u Top 3 za ključne reči važne vašoj firmi u Srbiji.
              </p>
              <Link
                href="/#kontakt"
                className="btn-duck text-white px-8 py-5 md:px-10 md:py-6 rounded-2xl font-black uppercase tracking-widest inline-block shadow-2xl hover:scale-105 transform transition text-sm md:text-base"
              >
                Zatražite besplatni SEO audit
              </Link>
            </div>
          </div>

          {/* Related links */}
          <div className="mt-12 p-6 bg-slate-50 rounded-2xl">
            <h3 className="font-black text-slate-800 mb-4">Povezani tekstovi</h3>
            <ul className="space-y-2">
              <li><Link href="/seo-optimizacija" className="text-teal-600 hover:underline font-medium">SEO Optimizacija Srbija — naše usluge →</Link></li>
              <li><Link href="/blog/google-ads-trosak" className="text-teal-600 hover:underline font-medium">Zašto Google Ads troše novac bez konverzija? →</Link></li>
              <li><Link href="/blog/astro-sajtovi" className="text-teal-600 hover:underline font-medium">Astro sajtovi — Lighthouse 100 i Island Architecture →</Link></li>
            </ul>
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
