import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import NewsletterForm from '@/components/NewsletterForm'
import Potpis from '@/components/Potpis'
import {
  dodaciSajt,
  formatEvra,
  mesecnoOdrzavanje,
  napomenaODomenu,
  rokovi,
  sajtCenaMax,
  sajtCenaMin,
  tipoviBiznisa,
} from '@/lib/cenaPodaci'

/**
 * Napisano 2026-10-08 po Semrush podacima (baza `rs`): `izrada sajta cena` i
 * `izrada sajtova cena` po 320 pretraga mesečno, težina 7/100, a sajt za njih
 * nije imao nijedan prikaz u GSC-u (90 dana). Isti obrazac kao dva cenovna
 * teksta koja na ovom sajtu najbolje rade (koliko-kosta-google-ads,
 * cena-vodjenja-google-business-profila).
 *
 * Svaki broj u tekstu se čita iz `lib/cenaPodaci.ts`, kao i na /cene i na
 * /usluge/izrada-sajtova, da tekst ne može da ode u drugu cenu od kalkulatora.
 */

const cenaTipa = (id: string) => tipoviBiznisa.find((t) => t.id === id)?.cena ?? 0
const cenaDodatka = (id: string) => dodaciSajt.find((d) => d.id === id)?.cena ?? 0
const doplataRoka = (id: string) =>
  Math.round(((rokovi.find((r) => r.id === id)?.mnozilac ?? 1) - 1) * 100)

// Primer iz teksta: frizerski salon sa rezervacijama i tekstovima koje pišemo mi.
const primerBaza = cenaTipa('frizer')
const primerRezervacije = cenaDodatka('rezervacije')
const primerTekstovi = cenaDodatka('tekstovi')
const primerUkupno = primerBaza + primerRezervacije + primerTekstovi
const primerUkupno7 = primerUkupno * (rokovi.find((r) => r.id === '7dana')?.mnozilac ?? 1)

const primeriTipova = ['pekara', 'majstor', 'frizer', 'restoran', 'stomatolog', 'advokat', 'hotel']
  .map((id) => tipoviBiznisa.find((t) => t.id === id))
  .filter((t): t is NonNullable<typeof t> => Boolean(t))

const url = 'https://www.duckfamilyteam.online/blog/koliko-kosta-izrada-sajta'

export const metadata: Metadata = {
  title: { absolute: 'Koliko košta izrada sajta u Srbiji: cena i šta ulazi u nju' },
  description: `Izrada sajta kod nas košta od ${sajtCenaMin} do ${sajtCenaMax} evra, zavisno od delatnosti. Šta pomera cenu, šta se plaća posebno i šta da pitate pre nego što potpišete ponudu.`,
  alternates: {
    canonical: url,
  },
  keywords: [
    'izrada sajta cena',
    'koliko košta izrada sajta',
    'izrada sajtova cena',
    'cena izrade sajta',
    'izrada sajta za firmu',
    'održavanje sajta cena',
    'Duck Family Team',
  ],
  openGraph: {
    title: 'Koliko košta izrada sajta u Srbiji, i šta ulazi u cenu',
    description:
      'Naše cene bez zaokruživanja, četiri troška koja se zovu istim imenom i šest pitanja pre nego što potpišete ponudu.',
    url,
    type: 'article',
    publishedTime: '2026-10-08',
    modifiedTime: '2026-10-08',
    authors: ['Duck Family Team'],
    images: [
      {
        url: 'https://www.duckfamilyteam.online/img/blog/koliko-kosta-izrada-sajta.jpg',
        width: 1200,
        height: 630,
        alt: 'Prozor pregledača sa cenovnom etiketom',
      },
    ],
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Koliko košta izrada sajta u Srbiji, i šta ulazi u cenu',
  description:
    'Od čega zavisi cena izrade sajta, šta se plaća posebno (domen, hosting, održavanje, sadržaj) i kako da uporedite dve ponude.',
  image: 'https://www.duckfamilyteam.online/img/blog/koliko-kosta-izrada-sajta.jpg',
  datePublished: '2026-10-08',
  dateModified: '2026-10-08',
  wordCount: 1400,
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
    '@id': url,
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Početna', item: 'https://www.duckfamilyteam.online' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.duckfamilyteam.online/blog' },
    { '@type': 'ListItem', position: 3, name: 'Koliko košta izrada sajta', item: url },
  ],
}

/** Jedan izvor za FAQ: i JSON-LD i vidljiva sekcija se generišu odavde. */
const faqs: { q: string; a: string }[] = [
  {
    q: 'Koliko košta izrada sajta za malu firmu?',
    a: `Kod nas osnovna cena zavisi od delatnosti i ide od ${sajtCenaMin} do ${sajtCenaMax} evra, jednokratno. Na to idu samo dodaci koje izaberete, na primer rezervacioni sistem ili tekstovi koje pišemo mi. Tačan iznos za vaš slučaj izračunava kalkulator na stranici Cene.`,
  },
  {
    q: 'Koliko traje izrada sajta?',
    a: `Uobičajen rok je 14 dana i uračunat je u osnovnu cenu. Izrada za 7 dana ide uz doplatu od ${doplataRoka('7dana')} odsto, a za 3 dana uz doplatu od ${doplataRoka('3dana')} odsto. Najčešće kašnjenje ne dolazi od izrade, nego od tekstova i fotografija koji kasne.`,
  },
  {
    q: 'Da li je domen uključen u cenu sajta?',
    a: 'Domen se plaća posebno, jer se plaća godišnje i registruje se na vas. Mi ga kupujemo u vaše ime, po ceni koja je aktuelna u tom trenutku, a osmišljavanje imena i povezivanje sa sajtom ne naplaćujemo.',
  },
  {
    q: 'Koliko košta održavanje sajta mesečno?',
    a: `Hosting i održavanje kod nas koštaju ${mesecnoOdrzavanje} evra mesečno, posebno od jednokratne cene izrade. U to ulaze do tri izmene mesečno i redovna kontrola da sajt radi.`,
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

export default function KolikoKostaIzradaSajtaPage() {
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
            <span className="text-ink-text">Koliko košta izrada sajta</span>
          </nav>

          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <span className="bg-wine text-ink-text text-[10px] md:text-[11px] font-mono uppercase px-4 py-1.5 md:px-5 md:py-2 rounded-full tracking-widest">
              Web Development
            </span>
            <h1 className="font-display font-medium text-[2rem] md:text-4xl lg:text-5xl text-ink-text mt-6 mb-6 md:mb-8 leading-tight px-2">
              Koliko košta izrada sajta u Srbiji, i šta ulazi u cenu
            </h1>
            <Potpis className="mx-auto -mt-1 mb-8" />
            <p className="text-lg md:text-2xl text-ink-muted max-w-2xl mx-auto leading-relaxed">
              Dve ponude za „isti sajt“ mogu da se razlikuju nekoliko puta, i obe mogu biti poštene. Razlika je u tome šta je ušlo u cenu, a šta stiže kasnije.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 mt-6 font-mono text-[11px] text-ink-muted uppercase tracking-widest">
              <span className="whitespace-nowrap">Duck Family Team</span>
              <span className="whitespace-nowrap">· <time dateTime="2026-10-08">8. oktobar 2026.</time></span>
              <span className="whitespace-nowrap">· 7 min čitanja</span>
            </div>
          </div>

          <Image
            src="/img/blog/koliko-kosta-izrada-sajta.svg"
            unoptimized
            alt="Prozor pregledača sa cenovnom etiketom, Duck Family Team"
            width={1200}
            height={630}
            className="w-full h-[250px] md:h-[500px] object-cover rounded-2xl mb-12 md:mb-16 border border-ink-border"
            priority
          />

          {/* Content */}
          <div className="bg-ink-surface border border-ink-border rounded-2xl p-6 md:p-12 lg:p-16 space-y-10 md:space-y-12 text-ink-muted text-base md:text-xl">
            <p className="leading-relaxed">
              Na pitanje{' '}
              <em className="text-ink-text not-italic font-medium">„Koliko košta sajt?“</em>{' '}
              svaka agencija može da odgovori jednim brojem. Problem je što taj broj ne znači isto kod dve agencije. Kod jedne su unutra tekstovi, fotografije i prva godina hostinga. Kod druge je to samo kod, a sve ostalo stiže kao poseban račun.
            </p>
            <p className="leading-relaxed">
              Zato ovaj tekst ne daje „prosečnu cenu sajta u Srbiji“. Daje naše cene, bez zaokruživanja, i spisak stvari koje treba da pitate bilo koga od koga tražite ponudu, uključujući nas.
            </p>

            <div className="space-y-4 md:space-y-6">
              <h2 className="font-display font-medium text-2xl md:text-3xl lg:text-4xl text-ink-text leading-tight">
                Četiri troška koja se zovu istim imenom
              </h2>
              <p className="leading-relaxed">
                Kad neko kaže „sajt me je koštao 500 evra“, to može da bude samo izrada, a može da bude i izrada sa prvom godinom svega ostalog. Pre poređenja ponuda, razdvojite ove četiri stavke.
              </p>
              <div className="space-y-4">
                {[
                  {
                    n: '1',
                    t: 'Izrada',
                    d: 'Jednokratno. Dizajn, kod, prilagođavanje telefonu, osnovna podešavanja za Google. Ovo je broj koji se najčešće poredi, i jedini koji se poredi bez muke.',
                  },
                  {
                    n: '2',
                    t: 'Domen',
                    d: 'Godišnje. Adresa sajta, na primer vasafirma.rs. Plaća se svake godine i treba da bude registrovan na vas, ne na agenciju.',
                  },
                  {
                    n: '3',
                    t: 'Hosting i održavanje',
                    d: 'Mesečno ili godišnje. Server na kom sajt radi, sigurnosne zakrpe, izmene teksta i cena. Sajt bez ovoga ne prestaje da postoji, ali prestaje da se menja.',
                  },
                  {
                    n: '4',
                    t: 'Sadržaj',
                    d: 'Tekstovi, fotografije, logo. Često se podrazumeva da ih klijent donosi, pa se ne pominju u ponudi. Ako ih nemate, ovo je stavka koja najviše kasni i najviše košta živaca.',
                  },
                ].map((item) => (
                  <div key={item.n} className="flex gap-4 bg-ink-bg rounded-xl p-4">
                    <div className="font-display text-3xl text-ink-border-strong select-none shrink-0 w-8 text-right">{item.n}</div>
                    <div>
                      <div className="font-medium text-ink-text mb-1">{item.t}</div>
                      <p className="text-ink-muted text-sm leading-relaxed m-0">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-ink-bg p-5 md:p-8 border-l-4 border-wine rounded-r-xl shadow-sm">
                <p className="text-ink-text m-0">
                  <strong className="text-wine-text uppercase text-xs md:text-sm tracking-widest block mb-2">
                    Praktično
                  </strong>
                  Tražite ponudu razloženu na ove četiri stavke, sa iznosom za prvu godinu i za svaku sledeću. Tek tada dve ponude postaju uporedive.
                </p>
              </div>
            </div>

            <div className="space-y-4 md:space-y-6">
              <h2 className="font-display font-medium text-2xl md:text-3xl lg:text-4xl text-ink-text leading-tight">
                Šta pomera cenu izrade
              </h2>
              <p className="leading-relaxed">
                Sama izrada nije jedna cifra ni kod nas. Pomeraju je četiri stvari, ovim redom po težini.
              </p>
              <ul className="space-y-3 pl-6 list-none">
                {[
                  { e: 'Delatnost', d: 'Sajt za kafić i sajt za privatnu kliniku nisu isti posao. Klinika ima više usluga, više stranica, više pitanja koja pacijent postavlja pre nego što zakaže. Zato osnovnu cenu računamo po vrsti biznisa, a svaka stranica preko toga se naplaćuje posebno.' },
                  { e: 'Funkcije', d: 'Rezervacije, dva jezika, blog koji sami uređujete. Svaka od njih je dodatni posao koji ostaje na sajtu i posle predaje, pa se plaća posebno.' },
                  { e: 'Ko donosi sadržaj', d: 'Ako tekstove i fotografije imate, izrada ide brže i jeftinije. Ako ih pišemo i obezbeđujemo mi, to je posebna stavka, i iskreno, često najvrednija.' },
                  { e: 'Rok', d: 'Uobičajen rok je 14 dana. Kraći rok znači da se vaš sajt radi pre drugih, i to se doplaćuje.' },
                ].map((item) => (
                  <li key={item.e} className="flex items-start gap-3">
                    <span className="text-wine-text font-bold text-xl leading-none shrink-0 mt-1">✓</span>
                    <span><strong className="text-ink-text">{item.e}</strong>: {item.d}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4 md:space-y-6">
              <h2 className="font-display font-medium text-2xl md:text-3xl lg:text-4xl text-ink-text leading-tight">
                Naše cene, bez zaokruživanja
              </h2>
              <p className="leading-relaxed">
                Osnovna cena izrade kod nas ide od{' '}
                <strong className="text-ink-text font-medium">{sajtCenaMin} do {sajtCenaMax} evra</strong>, jednokratno, zavisno od delatnosti. Nekoliko primera iz cenovnika:
              </p>
              <div className="border border-ink-border rounded-xl overflow-hidden">
                {primeriTipova.map((t) => (
                  <div key={t.id} className="flex justify-between gap-4 px-4 py-3 md:px-6 odd:bg-ink-bg even:bg-ink-surface text-base">
                    <span className="text-ink-text">{t.naziv.replace(/\s*\([^)]*…?\.{0,3}\)$/, '')}</span>
                    <span className="font-mono text-ink-muted whitespace-nowrap">{t.cena === null ? 'po dogovoru' : formatEvra(t.cena)}</span>
                  </div>
                ))}
              </div>
              <p className="leading-relaxed">
                U osnovnu cenu ulaze dizajn, izrada, prilagođavanje telefonu, osnovna podešavanja za Google (naslovi, opisi, mapa sajta, strukturirani podaci), merenje posete i dve runde izmena. Dodaci se biraju po potrebi:
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {dodaciSajt.map((d) => (
                  <div key={d.id} className="flex justify-between gap-3 bg-ink-bg rounded-xl px-4 py-3 text-sm md:text-base">
                    <span className="text-ink-text">{d.naziv}</span>
                    <span className="font-mono text-ink-muted whitespace-nowrap">
                      {formatEvra(d.cena)}{d.jedinica ? ' po ' + d.jedinica : ''}
                    </span>
                  </div>
                ))}
              </div>
              <div className="bg-ink-bg p-5 md:p-8 border-l-4 border-ink-border rounded-r-xl shadow-sm">
                <p className="text-ink-text m-0">
                  <strong className="text-ink-muted uppercase text-xs md:text-sm tracking-widest block mb-2">
                    Računica u jednom redu
                  </strong>
                  Frizerski salon sa rezervacijama i tekstovima koje pišemo mi: {primerBaza} + {primerRezervacije} + {primerTekstovi} ={' '}
                  {formatEvra(primerUkupno)} jednokratno, u roku od 14 dana. Isti sajt za 7 dana: {formatEvra(primerUkupno7)}.
                </p>
              </div>
              <p className="leading-relaxed">
                Posle izrade ide{' '}
                <strong className="text-ink-text font-medium">{mesecnoOdrzavanje} evra mesečno za hosting i održavanje</strong>, sa do tri izmene mesečno. Domen je odvojena stavka. {napomenaODomenu}
              </p>
            </div>

            <div className="space-y-4 md:space-y-6">
              <h2 className="font-display font-medium text-2xl md:text-3xl lg:text-4xl text-ink-text leading-tight">
                Šablon, WordPress ili sajt pisan u kodu
              </h2>
              <p className="leading-relaxed">
                Ovo je drugi veliki razlog zašto se ponude razlikuju. Sajt sklopljen iz gotovog šablona je najjeftiniji za izradu. WordPress je najrašireniji sistem za sajtove i ima smisla kad vi sami svakodnevno menjate mnogo sadržaja, ali dolazi sa dodacima koje neko mora redovno da ažurira, inače postaju sigurnosni rizik.
              </p>
              <p className="leading-relaxed">
                Mi pravimo sajtove u Next.js-u i Astro-u. Stranice se generišu unapred, pa se učitavaju brzo i po pravilu nemaju bazu podataka ni dodatke koje treba stalno krpiti. Google navodi da njegovi sistemi rangiranja nagrađuju stranice sa dobrim iskustvom korišćenja, uključujući brzinu učitavanja, ali i da{' '}
                <strong className="text-ink-text font-medium">relevantan sadržaj ostaje važniji od brzine</strong>. Brz sajt sa praznim tekstom neće rangirati. Detaljnije poređenje je u tekstu{' '}
                <Link href="/blog/astro-sajtovi" className="text-wine-text hover:text-ink-text font-medium">Astro sajtovi: kada su najbolji izbor, a kada nisu</Link>.
              </p>
            </div>

            <div className="space-y-4 md:space-y-6">
              <h2 className="font-display font-medium text-2xl md:text-3xl lg:text-4xl text-ink-text leading-tight">
                Šest pitanja pre nego što potpišete ponudu
              </h2>
              <p className="leading-relaxed">
                Ova pitanja važe za svaku agenciju i svakog frilensera. Ako na neko ne dobijete jasan odgovor, to je odgovor.
              </p>
              <div className="space-y-4">
                {[
                  { n: '1', t: 'Na koga je registrovan domen?', d: 'Na vas, ne na agenciju. Domen registrovan na tuđe ime znači da bez njihove saglasnosti ne možete da promenite izvođača, a ponekad ni da zadržite adresu.' },
                  { n: '2', t: 'Ko ima pristup hostingu i kodu?', d: 'Pitajte šta dobijate ako se rastanete: pristupe, fajlove, izvoz sadržaja. Odgovor „to ostaje kod nas“ treba znati pre potpisa, ne posle.' },
                  { n: '3', t: 'Koliko košta druga godina?', d: 'Prva godina hostinga je često uključena ili snižena. Pitajte koliko sajt košta godišnje kad popust istekne.' },
                  { n: '4', t: 'Koliko rundi izmena je uključeno?', d: 'Bez broja, izmene postaju predmet pregovora na kraju projekta, baš kad vam sajt najviše treba.' },
                  { n: '5', t: 'Ko piše tekstove i odakle su fotografije?', d: 'Ako ih donosite vi, pitajte do kada. Ako ih obezbeđuje agencija, pitajte da li su fotografije sa licencom za komercijalnu upotrebu.' },
                  { n: '6', t: 'Šta tačno znači „SEO optimizovan“?', d: 'Tražite spisak: naslovi i opisi stranica, mapa sajta, strukturirani podaci, brzina na telefonu. Reč bez spiska ne znači ništa.' },
                ].map((item) => (
                  <div key={item.n} className="flex gap-4 bg-ink-bg rounded-xl p-4">
                    <div className="font-display text-3xl text-ink-border-strong select-none shrink-0 w-8 text-right">{item.n}</div>
                    <div>
                      <div className="font-medium text-ink-text mb-1">{item.t}</div>
                      <p className="text-ink-muted text-sm leading-relaxed m-0">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4 md:space-y-6">
              <h2 className="font-display font-medium text-2xl md:text-3xl lg:text-4xl text-ink-text leading-tight">
                Kad vam sajt još ne treba
              </h2>
              <p className="leading-relaxed">
                Ovo pišemo iako pravimo sajtove. Lokalnu uslugu, frizera, majstora ili vulkanizera, kupac često prvi put vidi na Google mapi, pre nego što otvori ijedan sajt. Ako budžet stiže samo za jednu stvar, krenite od besplatnog{' '}
                <Link href="/blog/google-business-profil" className="text-wine-text hover:text-ink-text font-medium">Google Business profila</Link>{' '}
                i uredite ga kako treba. Sajt ima smisla kad imate šta da kažete više nego što staje u profil: cenovnik, usluge, primere rada, odgovore na pitanja koja vam stalno postavljaju.
              </p>
            </div>

            <div className="space-y-4 md:space-y-6">
              <h2 className="font-display font-medium text-2xl md:text-3xl lg:text-4xl text-ink-text leading-tight">
                Kratak rezime
              </h2>
              <p className="leading-relaxed">
                Cenu sajta razložite na izradu, domen, hosting sa održavanjem i sadržaj, i tražite iznos za prvu i za svaku sledeću godinu. Izradu najviše pomeraju delatnost, funkcije, sadržaj i rok.
              </p>
              <p className="leading-relaxed">
                Kod nas izrada košta od {sajtCenaMin} do {sajtCenaMax} evra plus izabrani dodaci, a hosting i održavanje {mesecnoOdrzavanje} evra mesečno. Domen je vaš i registruje se na vas. Tačan iznos za vaš slučaj izbacuje{' '}
                <Link href="/cene" className="text-wine-text hover:text-ink-text font-medium">kalkulator cena</Link>, za minut.
              </p>
            </div>

            <div className="space-y-4 md:space-y-6">
              <h2 className="font-display font-medium text-2xl md:text-3xl lg:text-4xl text-ink-text leading-tight">
                Česta pitanja
              </h2>
              <div className="space-y-4">
                {faqs.map((f) => (
                  <div key={f.q} className="bg-ink-bg rounded-xl p-5 md:p-6">
                    <h3 className="font-medium text-ink-text mb-2">{f.q}</h3>
                    <p className="text-ink-muted text-base leading-relaxed m-0">{f.a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Izvori */}
            <div className="bg-ink-bg p-5 md:p-8 rounded-xl border border-ink-border">
              <strong className="text-ink-muted uppercase text-xs md:text-sm tracking-widest block mb-3">
                Izvori
              </strong>
              <ul className="space-y-2 text-sm md:text-base m-0 list-none pl-0">
                <li>
                  <a
                    href="https://developers.google.com/search/docs/appearance/page-experience"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-wine-text hover:text-ink-text font-medium"
                  >
                    Google Search Central: iskustvo stranice i rangiranje →
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.rnids.rs/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-wine-text hover:text-ink-text font-medium"
                  >
                    RNIDS: registar .rs i .срб domena →
                  </a>
                </li>
              </ul>
            </div>

            <hr className="border-ink-border my-8 md:my-12" />

            {/* CTA */}
            <div className="text-center py-4 md:py-6">
              <h3 className="font-display font-medium text-2xl md:text-3xl lg:text-4xl text-ink-text mb-6 leading-tight">
                Da izračunamo vaš sajt?
              </h3>
              <p className="mb-8 md:mb-10 text-ink-muted text-lg md:text-xl">
                Recite nam čime se bavite i šta sajt treba da radi. Dobijate tačnu cenu razloženu na sve četiri stavke, sa iznosom za prvu i za svaku sledeću godinu.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/cene"
                  className="bg-wine hover:bg-wine-bright text-ink-text px-8 py-5 md:px-10 md:py-6 rounded-xl font-medium inline-block transition-colors text-sm md:text-base"
                >
                  Izračunaj cenu sajta
                </Link>
                <Link
                  href="/kontakt"
                  className="border border-ink-border-strong hover:border-wine text-ink-text px-8 py-5 md:px-10 md:py-6 rounded-xl font-medium inline-block transition-colors text-sm md:text-base"
                >
                  Zatraži ponudu
                </Link>
              </div>
            </div>
          </div>

          {/* Related links */}
          <div className="mt-12 p-6 bg-ink-surface border border-ink-border rounded-2xl">
            <h3 className="font-display font-medium text-ink-text mb-4">Povezani tekstovi</h3>
            <ul className="space-y-2">
              <li><Link href="/usluge/izrada-sajtova" className="text-wine-text hover:text-ink-text font-medium">Izrada sajtova, naša usluga →</Link></li>
              <li><Link href="/blog/astro-sajtovi" className="text-wine-text hover:text-ink-text font-medium">Astro sajtovi: kada su najbolji izbor, a kada nisu →</Link></li>
              <li><Link href="/blog/koliko-kosta-google-ads" className="text-wine-text hover:text-ink-text font-medium">Koliko košta Google Ads u Srbiji →</Link></li>
            </ul>
          </div>

          {/* Newsletter, traka od jednog reda (isti obrazac kao ostali postovi). */}
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
