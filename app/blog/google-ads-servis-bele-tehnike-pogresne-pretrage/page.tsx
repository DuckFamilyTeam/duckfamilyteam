import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import NewsletterForm from '@/components/NewsletterForm'
import Potpis from '@/components/Potpis'

const url = 'https://www.duckfamilyteam.online/blog/google-ads-servis-bele-tehnike-pogresne-pretrage'
const naslov = 'Kampanja koja je radila, pa počela da troši novac na pogrešne pozive'

export const metadata: Metadata = {
  title: 'Google Ads za servis bele tehnike: slučaj Specijaltehnik',
  description:
    'Kako je Google Ads kampanja servisa bele tehnike posle šest meseci počela da troši budžet na pogrešne pozive, i šta smo popravili.',
  alternates: {
    canonical: url,
  },
  keywords: [
    'Google Ads servis bele tehnike',
    'Google Ads za servisere',
    'pogrešne pretrage Google Ads',
    'termini pretrage Google Ads',
    'optimization score preporuke',
    'Performance Max ili Search kampanja',
    'Duck Family Team',
  ],
  openGraph: {
    title: naslov,
    description:
      'Slučaj servisa bele tehnike Specijaltehnik: šta se desilo posle šest meseci i šta smo popravili.',
    url,
    type: 'article',
    publishedTime: '2026-11-20',
    modifiedTime: '2026-11-20',
    authors: ['Duck Family Team'],
    images: [
      {
        url: 'https://www.duckfamilyteam.online/img/blog/google-ads-servis-bele-tehnike-pogresne-pretrage.jpg',
        width: 1200,
        height: 630,
        alt: 'Perilica veša i lupa, pogrešne pretrage u Google Ads kampanji',
      },
    ],
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: naslov,
  description:
    'Slučaj servisa bele tehnike: kampanja je prvo donela više poziva, a posle šest meseci počela da troši budžet na pretrage bez veze sa uslugom.',
  image: 'https://www.duckfamilyteam.online/img/blog/google-ads-servis-bele-tehnike-pogresne-pretrage.jpg',
  datePublished: '2026-11-20',
  dateModified: '2026-11-20',
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
    { '@type': 'ListItem', position: 3, name: 'Slučaj Specijaltehnik', item: url },
  ],
}

/**
 * Pokazatelji iz naloga, na nivou kampanje, za period na početku novembra 2026.
 * Sve tri kolone su udeli prikaza, ne vremena i ne zarade. Definicije su na
 * zvaničnoj Google Ads stranici "About top and absolute top metrics" i
 * "About impression share".
 */
const pokazatelji = [
  { vrednost: '76%', naziv: 'Impr. (Top) %', opis: 'prikaza među gornjim oglasima' },
  { vrednost: '68%', naziv: 'Impr. (Abs. Top) %', opis: 'prikaza kao prvi oglas' },
  { vrednost: '100%', naziv: 'Search impression share', opis: 'mogućih prikaza ostvareno' },
]

export default function SlucajSpecijaltehnikPage() {
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
          <nav className="mb-8 font-mono text-xs uppercase tracking-widest text-ink-muted flex items-center gap-2 flex-wrap" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-ink-text transition">Početna</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-ink-text transition">Blog</Link>
            <span>/</span>
            <span className="text-ink-text">Slučaj Specijaltehnik</span>
          </nav>

          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <span className="bg-wine text-ink-text text-[10px] md:text-[11px] font-mono uppercase px-4 py-1.5 md:px-5 md:py-2 rounded-full tracking-widest">
              Google Ads
            </span>
            <h1 className="font-display font-medium text-[2rem] md:text-4xl lg:text-5xl text-ink-text mt-6 mb-6 md:mb-8 leading-tight px-2 text-balance">
              {naslov}
            </h1>
            <Potpis className="mx-auto -mt-1 mb-8" />
            <p className="text-lg md:text-2xl text-ink-muted max-w-2xl mx-auto leading-relaxed">
              Prvi deo saradnje je išao dobro. Posle šest meseci su počeli da zovu ljudi koji nemaju veze sa popravkom bele tehnike. Šta se desilo i šta smo popravili.
            </p>
            <div className="mt-6 font-mono text-[11px] text-ink-muted uppercase tracking-widest text-center leading-relaxed">
              <span className="block sm:inline">Duck Family Team</span>
              <span className="hidden sm:inline"> · </span>
              <span className="block sm:inline whitespace-nowrap">
                <time dateTime="2026-11-20">20. novembar 2026.</time> · 4 min čitanja
              </span>
            </div>
          </div>

          <Image
            src="/img/blog/google-ads-servis-bele-tehnike-pogresne-pretrage.svg"
            unoptimized
            alt="Perilica veša i lupa, ilustracija za slučaj servisa bele tehnike"
            width={1200}
            height={630}
            className="w-full h-[250px] md:h-[500px] object-cover rounded-2xl mb-12 md:mb-16 border border-ink-border"
            priority
          />

          {/* Content */}
          <div className="bg-ink-surface border border-ink-border rounded-2xl p-6 md:p-12 lg:p-16 space-y-10 md:space-y-12 text-ink-muted text-base md:text-xl">
            <p className="leading-relaxed">
              Specijaltehnik popravlja Siemens i Bosch uređaje. Google oglašavanje je pokrenuo sam, preko preporuke na Google Business profilu, i dobio Performance Max kampanju. Nalog sam preuzeo u maju 2026.
            </p>

            <div className="space-y-4 md:space-y-6">
              <h2 className="font-display font-medium text-2xl md:text-3xl lg:text-4xl text-ink-text leading-tight">
                Stanje pri preuzimanju
              </h2>
              <p className="leading-relaxed">
                Kampanja nije donosila rezultate. Sajt je imao jednu stranicu sa svim informacijama, malo fotografija intervencija i više početničkih grešaka.
              </p>
            </div>

            <div className="space-y-4 md:space-y-6">
              <h2 className="font-display font-medium text-2xl md:text-3xl lg:text-4xl text-ink-text leading-tight">
                Šta je promenjeno
              </h2>
              <ul className="list-disc pl-6 space-y-2 leading-relaxed">
                <li>Prešli smo na Google Search kampanju.</li>
                <li>Dnevni budžet je povećan sa 1.200 na 2.000 dinara.</li>
                <li>Ispravljene su lokacije i ključne reči, a dodate su negativne reči.</li>
                <li>Oglasi se prikazuju u stvarnom radnom vremenu i samo u području u kom servis izlazi na intervenciju.</li>
                <li>Napravljene su tri grupe oglasa: Bosch, Siemens i hitne intervencije.</li>
              </ul>
              <p className="leading-relaxed">
                Analizom konkurencije utvrdili smo šta malo ko nudi, pa smo uz korektne cene ponudili besplatan dolazak u Borči, dolazak u Zemunu 20% jeftiniji i garanciju od godinu dana na ugrađeni deo. Klijentu sam predložio i popravke sajta.
              </p>
            </div>

            <div className="space-y-4 md:space-y-6">
              <h2 className="font-display font-medium text-2xl md:text-3xl lg:text-4xl text-ink-text leading-tight">
                Prvi rezultat
              </h2>
              <p className="leading-relaxed">
                Posle mesec dana bilo je više poziva i intervencija, a potrošnja na pogrešne pretrage je prestala. Klijent navodi da se zarada povećala u odnosu na period pre prepravke. Tačne brojke nemamo, pa je to njegova izjava, a ne merenje. Budžet je povećan istovremeno sa izmenama, pa se rast ne pripisuje samo njima.
              </p>
            </div>

            <div className="space-y-4 md:space-y-6">
              <h2 className="font-display font-medium text-2xl md:text-3xl lg:text-4xl text-ink-text leading-tight">
                Posle šest meseci
              </h2>
              <p className="leading-relaxed">
                Klijent me je pozvao jer su počeli da zovu ljudi koji nemaju veze sa popravkom bele tehnike. U izveštaju termina pretrage našli su se upiti za kupovinu motora i auto hladnjaka, popravku Beko mašina, usisivače Xiaomi i servisere uopšte, a pozivi su stizali i sa lokacija van zadatih.
              </p>
              <p className="leading-relaxed">
                Klijent ne zna tačno koje je predloge prihvatio. Kaže da mu je Google nudio poboljšanje kampanje za 7%, pa za 3%, i da je to prihvatao nekoliko puta. Ti procenti su procenjeno povećanje optimization score-a naloga, a ne zarade. Uz to je ručno ograničio maksimalnu cenu po kliku da bi smanjio broj klikova, što je, po mojoj proceni, ograničilo njegovo učešće u aukcijama.
              </p>
            </div>

            <div className="space-y-4 md:space-y-6">
              <h2 className="font-display font-medium text-2xl md:text-3xl lg:text-4xl text-ink-text leading-tight">
                Popravka
              </h2>
              <p className="leading-relaxed">
                Ispravili smo greške i napravili kratko uputstvo za samostalno održavanje. Klijent me zove samo kad naiđe na problem koji ne može sam da reši.
              </p>
            </div>

            <div className="space-y-4 md:space-y-6">
              <h2 className="font-display font-medium text-2xl md:text-3xl lg:text-4xl text-ink-text leading-tight">
                Rezultat
              </h2>
              <p className="leading-relaxed">
                Ponovo su zvali ljudi sa pravim kvarom. U periodu na početku novembra 2026, na nivou kampanje, oglasi su se u 76% prikaza pojavljivali među gornjim oglasima, a u 68% prikaza kao prvi oglas. Udeo u prikazima (Search impression share) bio je 100%.
              </p>
              <ul className="grid sm:grid-cols-3 gap-4 text-center">
                {pokazatelji.map((p) => (
                  <li key={p.naziv} className="bg-ink-bg border border-ink-border rounded-xl p-5">
                    <span className="block font-display font-medium text-3xl md:text-4xl text-wine-text tabular-nums">
                      {p.vrednost}
                    </span>
                    <span className="block font-mono text-[11px] uppercase tracking-widest text-ink-text mt-3">
                      {p.naziv}
                    </span>
                    <span className="block text-sm text-ink-muted mt-1">{p.opis}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4 md:space-y-6">
              <h2 className="font-display font-medium text-2xl md:text-3xl lg:text-4xl text-ink-text leading-tight">
                Šta iz toga sledi
              </h2>
              <ol className="list-decimal pl-6 space-y-3 leading-relaxed">
                <li>Procenat uz Googleov predlog govori o oceni naloga, a ne o zaradi.</li>
                <li>Pre prihvatanja predloga proveri se šta se tačno menja u kampanji.</li>
                <li>Pregled izveštaja termina pretrage i istorije promena otkriva problem pre nego što potroši budžet.</li>
              </ol>
            </div>

            <p className="text-sm md:text-base leading-relaxed">
              Napomena: podaci o prikazima su iz naloga. Podatak o zaradi je izjava klijenta. Ime i logo objavljeni su uz saglasnost klijenta.
            </p>

            <hr className="border-ink-border my-8 md:my-12" />

            {/* CTA */}
            <div className="text-center py-4 md:py-6">
              <h3 className="font-display font-medium text-2xl md:text-3xl lg:text-4xl text-ink-text mb-6 leading-tight">
                Vaša kampanja troši novac na pogrešne pozive?
              </h3>
              <p className="mb-8 md:mb-10 text-ink-muted text-lg md:text-xl">
                Pošaljite upit i dogovorimo pregled naloga: u koje se pretrage troši budžet i koji su predlozi primenjeni.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/kontakt"
                  className="bg-wine hover:bg-wine-bright text-ink-text px-8 py-5 md:px-10 md:py-6 rounded-xl font-medium inline-block transition-colors text-sm md:text-base"
                >
                  Pošalji upit
                </Link>
                <Link
                  href="/cene"
                  className="border border-ink-border-strong hover:border-wine text-ink-text px-8 py-5 md:px-10 md:py-6 rounded-xl font-medium inline-block transition-colors text-sm md:text-base"
                >
                  Pogledaj cenovnik
                </Link>
              </div>
            </div>
          </div>

          {/* Related links */}
          <div className="mt-12 p-6 bg-ink-surface border border-ink-border rounded-2xl">
            <h3 className="font-display font-medium text-ink-text mb-4">Povezani tekstovi</h3>
            <ul className="space-y-2">
              <li><Link href="/blog/google-ads-trosak" className="text-wine-text hover:text-ink-text font-medium">Zašto Google oglasi troše novac bez konverzija →</Link></li>
              <li><Link href="/blog/koliko-kosta-google-ads" className="text-wine-text hover:text-ink-text font-medium">Koliko košta Google Ads u Srbiji →</Link></li>
              <li><Link href="/rezultati/mobilni-vulkanizer-milan" className="text-wine-text hover:text-ink-text font-medium">Slučaj Mobilni Vulkanizer Milan →</Link></li>
              <li><Link href="/usluge/google-ads" className="text-wine-text hover:text-ink-text font-medium">Vođenje Google Ads kampanja, naša usluga →</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
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
