import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import BackButton from '@/components/BackButton'
import NewsletterForm from '@/components/NewsletterForm'

export const metadata: Metadata = {
  title: 'Zašto Google oglasi troše novac bez prodaje? 7 razloga',
  description:
    'Sedam razloga zašto Google Ads kampanja troši budžet bez konverzija: negativne ključne reči, landing stranica, Quality Score i Smart Bidding.',
  alternates: {
    canonical: 'https://www.duckfamilyteam.online/blog/google-ads-trosak',
  },
  keywords: [
    'Google Ads Srbija',
    'Google Ads troškovi',
    'Smart Bidding Srbija',
    'PPC optimizacija Srbija',
    'Google Ads konverzije',
    'Quality Score Google Ads',
    'negativne ključne reči',
    'Google Ads budžet',
    'ROAS optimizacija',
    'conversion tracking GA4',
    'Google Ads agencija Srbija',
    'digitalni marketing Srbija',
    'Duck Family Team',
  ],
  openGraph: {
    title: 'Zašto Google oglasi troše novac bez prodaje?',
    description: '7 razloga zašto vaši Google Ads kampanje ne konvertuju i kako to popraviti odmah.',
    url: 'https://www.duckfamilyteam.online/blog/google-ads-trosak',
    type: 'article',
    publishedTime: '2026-04-01',
    modifiedTime: '2026-06-23',
    authors: ['Duck Family Team'],
    images: [
      {
        url: 'https://www.duckfamilyteam.online/img/blog/google-ads-trosak.png',
        width: 1200,
        height: 630,
        alt: 'Google Ads analitika, troškovi bez konverzija',
      },
    ],
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Zašto vaši Google oglasi troše novac bez konverzija? 7 razloga i rešenja',
  description:
    '7 glavnih razloga zašto Google Ads kampanje troše budžet bez rezultata, i kako svaki od njih rešiti.',
  image: 'https://www.duckfamilyteam.online/img/blog/google-ads-trosak.png',
  datePublished: '2026-04-01',
  dateModified: '2026-06-23',
  wordCount: 1800,
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
    '@id': 'https://www.duckfamilyteam.online/blog/google-ads-trosak',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Početna', item: 'https://www.duckfamilyteam.online' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.duckfamilyteam.online/blog' },
    { '@type': 'ListItem', position: 3, name: 'Google Ads Trošak', item: 'https://www.duckfamilyteam.online/blog/google-ads-trosak' },
  ],
}

export default function GoogleAdsTrosakPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navbar />
      <main id="glavni-sadrzaj" className="bg-ink-bg text-ink-text pt-28 md:pt-40 pb-20 px-4 md:px-6">
        <article className="max-w-4xl mx-auto">
          <BackButton />
          {/* Breadcrumb */}
          <nav className="mb-8 font-mono text-xs uppercase tracking-widest text-ink-muted flex items-center gap-2" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-ink-text transition">Početna</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-ink-text transition">Blog</Link>
            <span>/</span>
            <span className="text-ink-text">Google Ads Trošak</span>
          </nav>

          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <span className="bg-wine text-ink-text text-[10px] md:text-[11px] font-mono uppercase px-4 py-1.5 md:px-5 md:py-2 rounded-full tracking-widest">
              Ekspertska Analiza
            </span>
            <h1 className="font-display font-medium text-2xl md:text-4xl lg:text-5xl text-ink-text mt-6 mb-6 md:mb-8 leading-tight px-2">
              Zašto vaši Google oglasi troše novac bez konverzija? 7 razloga
            </h1>
            <p className="text-lg md:text-2xl text-ink-muted max-w-2xl mx-auto leading-relaxed">
              Klikovi stižu, budžet nestaje, ali telefon ne zvoni? Evo surove istine o tome gde grešite, i kako to odmah popraviti.
            </p>
            <div className="flex items-center justify-center gap-4 mt-6 font-mono text-[11px] text-ink-muted uppercase tracking-widest">
              <span>Duck Family Team</span>
              <span>·</span>
              <time dateTime="2026-04-01">1. april 2026.</time>
              <span>·</span>
              <span>10 min čitanja</span>
            </div>
          </div>

          <Image
            src="/img/blog/google-ads-trosak.svg"
            unoptimized
            alt="Google Ads analitika, troškovi bez konverzija"
            width={1200}
            height={600}
            className="w-full h-[250px] md:h-[500px] object-cover rounded-2xl mb-12 md:mb-16 border border-ink-border"
            priority
          />

          {/* Content */}
          <div className="bg-ink-surface border border-ink-border rounded-2xl p-6 md:p-12 lg:p-16 space-y-10 md:space-y-12 text-ink-muted text-base md:text-xl">
            <p className="leading-relaxed">
              Mnogi vlasnici biznisa uđu u svet Google Ads-a sa uverenjem:{' '}
              <strong className="text-ink-text font-medium">"Ako platim klik, dobiću kupca."</strong> Realnost je često brutalno drugačija. Google je mašina koja će vrlo rado potrošiti svaki vaš cent ako joj precizno ne kažete šta želite. U ovom tekstu ćemo proći kroz <strong>7 najčešćih razloga</strong> zašto Google Ads kampanje u Srbiji troše budžet bez rezultata, i šta konkretno možete da uradite.
            </p>

            {/* RAZLOG 1 */}
            <div className="space-y-4 md:space-y-6">
              <h2 className="font-display font-medium text-2xl md:text-3xl lg:text-4xl text-ink-text leading-tight">
                1. Ne gađate nameru, već samo reč
              </h2>
              <p className="leading-relaxed">
                Ovo je najčešća greška. Ako prodajete "luksuzne satove", a vaš oglas se pojavljuje za pretragu "kako popraviti stari sat", vi gubite novac. Platili ste klik osobi koja želi <strong className="text-ink-text font-medium">besplatan savet</strong>, a ne <strong className="text-ink-text font-medium">novi proizvod</strong>.
              </p>
              <p className="leading-relaxed">
                U srpskom kontekstu ovo je posebno izraženo. Mnoge firme targetuju generičke reči poput "advokat", "zubar" ili "auto servis", a da ne specificiraju lokaciju, tip usluge ili nameru kupca. Rezultat: platite klik studenta koji istražuje profesije, a ne klijenta koji traži vašu uslugu.
              </p>
              <p className="leading-relaxed">
                Postoje četiri tipa pretražnog namere: <strong>informational</strong> (žele da uče), <strong>navigational</strong> (traže specifičan sajt), <strong>commercial investigation</strong> (porede opcije) i <strong>transactional</strong> (spremni da kupe). Vi plaćate samo za poslednje dve.
              </p>
              <div className="bg-ink-bg p-5 md:p-8 border-l-4 border-wine rounded-r-xl shadow-sm">
                <p className="text-ink-text m-0">
                  <strong className="text-wine-text uppercase text-xs md:text-sm tracking-widest block mb-2">Rešenje</strong>
                  Koristite negativne ključne reči i fokusirajte se na "Buyer Intent" termine: "prodaja satova cena Beograd", "kupovina luksuznog sata" umesto samo "satovi". Revidirajte Search Terms izveštaj svake nedelje i dodajte irelevantne pretrage u negativnu listu.
                </p>
              </div>
            </div>

            {/* RAZLOG 2 */}
            <div className="space-y-4 md:space-y-6">
              <h2 className="font-display font-medium text-2xl md:text-3xl lg:text-4xl text-ink-text leading-tight">
                2. Landing stranica je hladan tuš
              </h2>
              <p className="leading-relaxed">
                Zamislite da kliknete na oglas "dubinsko pranje tepiha Beograd", a sajt vas odvede na početnu stranicu gde se priča o istoriji firme i čišćenju prozora. <span className="text-wine-text font-medium">Kupac odlazi u roku od 3 sekunde.</span>
              </p>
              <p className="leading-relaxed">
                Oglas je obećanje, a vaša stranica mora biti <strong className="text-ink-text font-medium">ispunjenje tog obećanja</strong>. Mora postojati savršena koherentnost između naslova oglasa, ključnih reči i sadržaja stranice. Google to naziva "message match", i direktno utiče na vaš Quality Score.
              </p>
              <p className="leading-relaxed">
                Osim relevantnosti, problemi su i tehničke prirode. Ako stranica ne učitava za ispod 3 sekunde na mobilnom telefonu, gubi se prosečno 53% posetilaca. U Srbiji, gde se više od 65% pretrage odvija na mobilnim uređajima, ovo je kritično.
              </p>
              <div className="bg-ink-bg p-5 md:p-8 border-l-4 border-ink-border rounded-r-xl shadow-sm">
                <p className="text-ink-text m-0">
                  <strong className="text-ink-muted uppercase text-xs md:text-sm tracking-widest block mb-2">Rešenje</strong>
                  Svaki oglas treba da vodi na posebnu landing stranicu koja odgovara tačno na ono što je korisnik tražio. Proverite brzinu učitavanja u Google PageSpeed Insights, cilj je ispod 2.5s. Dodajte jasnu CTA (call-to-action) u prvih 100px stranice.
                </p>
              </div>
            </div>

            {/* RAZLOG 3 */}
            <div className="space-y-4 md:space-y-6">
              <h2 className="font-display font-medium text-2xl md:text-3xl lg:text-4xl text-ink-text leading-tight">
                3. Algoritam ne zna šta je za vas uspeh
              </h2>
              <p className="leading-relaxed">
                Ako niste ispravno podesili <strong className="text-ink-text font-medium">Conversion Tracking</strong> u GA4, Google-ov AI luta u mraku. On optimizuje kampanju za klikove, a ne za prodaje. Rezultat? Mnogo saobraćaja, ali nula profita.
              </p>
              <p className="leading-relaxed">
                Ovo je posebno osetljivo kada koristite <strong>Smart Bidding</strong> strategije kao što su Target CPA ili Maximize Conversions. Bez tačnih konverzionih signala, algoritam uči na pogrešnim podacima i vremenom postaje sve gori, čak i dok troši sve više novca.
              </p>
              <div className="bg-ink-bg p-5 md:p-8 border-l-4 border-wine rounded-r-xl shadow-sm">
                <p className="text-ink-text m-0">
                  <strong className="text-wine-text uppercase text-xs md:text-sm tracking-widest block mb-2">Rešenje</strong>
                  Podesite GA4 konverzije putem Google Tag Manager-a. Pratite svaki klik na telefon (tel: link), svaki popunjen formular, svaku kupovinu. Importujte GA4 konverzije u Google Ads. Sačekajte minimum 30 do 50 konverzija pre nego što aktivirate Target CPA bidding.
                </p>
              </div>
            </div>

            {/* RAZLOG 4 */}
            <div className="space-y-4 md:space-y-6">
              <h2 className="font-display font-medium text-2xl md:text-3xl lg:text-4xl text-ink-text leading-tight">
                4. Nemate negativne ključne reči
              </h2>
              <p className="leading-relaxed">
                Negativne ključne reči su možda <strong>najjači alat za smanjenje troškova</strong> u Google Ads-u, i najzanemareniji. Bez robusne liste negativnih reči, vaši oglasi se prikazuju za irelevantne pretrage i vi plaćate za klikove koji nikada neće konvertovati.
              </p>
              <p className="leading-relaxed">
                Tipičan primer za srpsko tržište: firma koja nudi plaćene računovodstvene usluge prikazuje oglas za pretragu "besplatni računovodstveni program". Ili agencija za nekretnine koja želi kupce prikazuje se za "iznajmljivanje stanova". To su realni troškovi bez ikakvog potencijala za konverziju.
              </p>
              <div className="bg-ink-bg p-5 md:p-8 border-l-4 border-wine rounded-r-xl shadow-sm">
                <p className="text-ink-text m-0">
                  <strong className="text-wine-text uppercase text-xs md:text-sm tracking-widest block mb-2">Rešenje</strong>
                  Izgradite negativnu listu pre pokretanja kampanje: dodajte "besplatan", "kako", "sam", "DIY", "šta je", "Wikipedia" i slično. Svake nedelje pregledajte Search Terms izveštaj i dodajte nove negativne reči.
                </p>
              </div>
            </div>

            {/* RAZLOG 5 */}
            <div className="space-y-4 md:space-y-6">
              <h2 className="font-display font-medium text-2xl md:text-3xl lg:text-4xl text-ink-text leading-tight">
                5. Loš Quality Score, plaćate više, dobijate manje
              </h2>
              <p className="leading-relaxed">
                Quality Score je ocena od 1 do 10 koju Google daje svakoj ključnoj reči u vašoj kampanji. Ona se zasniva na: <strong>Expected CTR</strong> (koliko se očekuje da će korisnici kliknuti), <strong>Ad relevance</strong> (koliko je oglas relevantan za ključnu reč) i <strong>Landing page experience</strong> (kvalitet vaše stranice).
              </p>
              <p className="leading-relaxed">
                Zašto je ovo ključno? Jer Quality Score direktno utiče na cenu klika. Sa Quality Score 10, možete plaćati i do <strong>50% manje</strong> po kliku nego konkurent sa Quality Score 5, čak i za iste pozicije. Loš Quality Score znači da plaćate penale za irelevantnost.
              </p>
              <div className="bg-ink-bg p-5 md:p-8 border-l-4 border-ink-border rounded-r-xl shadow-sm">
                <p className="text-ink-text m-0">
                  <strong className="text-ink-muted uppercase text-xs md:text-sm tracking-widest block mb-2">Rešenje</strong>
                  Grupišite ključne reči u uske ad grupe (1 do 3 bliske reči po grupi). Pišite naslove oglasa koji sadrže tačnu ključnu reč. Osigurajte da landing stranica ima sadržaj direktno vezan za ključnu reč. Ciljajte Quality Score 7 ili više za svaku reč.
                </p>
              </div>
            </div>

            {/* RAZLOG 6 */}
            <div className="space-y-4 md:space-y-6">
              <h2 className="font-display font-medium text-2xl md:text-3xl lg:text-4xl text-ink-text leading-tight">
                6. Pogrešno vreme i lokacija prikazivanja
              </h2>
              <p className="leading-relaxed">
                Da li znate u koje sate i koji dani vaša ciljna publika u Srbiji traži vaše usluge? Ako ne, verovatno trošite deo budžeta u trenutku kada niko ne kupuje, ili kada su konkurentski troškovi po kliku najviši, ali konverzije najniže.
              </p>
              <p className="leading-relaxed">
                Na primer, B2B usluge se retko kupuju vikendom. Restoran verovatno nema potrebe da prikazuje oglase u 3h ujutru. Lokalna firma u Beogradu ne treba da prikazuje oglase korisnicima u Novom Sadu ako ne šalje tamo. Sve ovo su troškovi koji se mogu eliminisati.
              </p>
              <div className="bg-ink-bg p-5 md:p-8 border-l-4 border-wine rounded-r-xl shadow-sm">
                <p className="text-ink-text m-0">
                  <strong className="text-wine-text uppercase text-xs md:text-sm tracking-widest block mb-2">Rešenje</strong>
                  Analizirajte GA4 i Google Ads izveštaje po danu i satu. Podesite bid adjustments (korekcije ponuda) za periode niže konverzije. Koristite location targeting na nivou grada ili radijusa. Isključite nerentabilne periode iz prikazivanja.
                </p>
              </div>
            </div>

            {/* RAZLOG 7 */}
            <div className="space-y-4 md:space-y-6">
              <h2 className="font-display font-medium text-2xl md:text-3xl lg:text-4xl text-ink-text leading-tight">
                7. Ignorišete mobilne vs desktop performanse
              </h2>
              <p className="leading-relaxed">
                U Srbiji, <strong>više od 60% pretrage</strong> se odvija na mobilnim uređajima. Ali za mnoge industrije, konverzije i dalje dolaze pretežno sa desktopa jer korisnici istražuju na telefonu, a kupuju ili kontaktiraju sa računara. Ako tretirate sve uređaje jednako, plaćate previše za mobilne klikove koji retko konvertuju.
              </p>
              <p className="leading-relaxed">
                Obrnuto važi za određene industrije, na primer hitne usluge (vodoinstalater, ključar, auto servis) imaju visoke mobilne konverzije jer korisnici direktno klikaju na telefon iz oglasa. Razumevanje ponašanja vaše publike je ključno.
              </p>
              <div className="bg-ink-bg p-5 md:p-8 border-l-4 border-wine rounded-r-xl shadow-sm">
                <p className="text-ink-text m-0">
                  <strong className="text-wine-text uppercase text-xs md:text-sm tracking-widest block mb-2">Rešenje</strong>
                  U Google Ads, proverite izveštaj "Devices" i vidite CPA po uređaju. Podesite bid adjustments za mobilne, tablet i desktop posebno. Za mobilne oglasnike, koristite Call Extensions i Click-to-Call da iskoristite prirodnu prednost mobilnih uređaja.
                </p>
              </div>
            </div>

            {/* BONUS */}
            <div className="space-y-4 md:space-y-6">
              <h2 className="font-display font-medium text-2xl md:text-3xl lg:text-4xl text-ink-text leading-tight">
                Bonus: praćenje atribucije i multi-touch putanja
              </h2>
              <p className="leading-relaxed">
                Čak i kada sve gore navedeno uradite ispravno, može doći do problema sa <strong>atribucijom</strong>. Korisnik može videti vaš oglas, otići bez konverzije, a potom se vratiti organskim putem ili direktno, i tada konvertovati. Ako koristite "Last Click" atribucioni model, Google Ads nikada neće dobiti zasluge za tu konverziju, čak i ako je oglas bio ključni okidač.
              </p>
              <p className="leading-relaxed">
                Moderni Google Ads preporučuje <strong>Data-driven attribution</strong> koji koristi mašinsko učenje za pravednu raspodelu zasluga kroz ceo put kupca. Ovo daje algoritmu tačniju sliku i dugoročno dovodi do boljih rezultata.
              </p>
            </div>

            {/* Checklist */}
            <div className="bg-ink-bg border border-ink-border rounded-2xl p-6 md:p-8">
              <h3 className="font-display font-medium text-xl md:text-2xl text-ink-text mb-4">Brzi checklist za audit vašeg Google Ads naloga</h3>
              <ul className="space-y-3 text-ink-muted">
                {[
                  'Imate negativne ključne reči za svaku kampanju?',
                  'Svaki oglas vodi na specifičnu landing stranicu?',
                  'GA4 konverzije su ispravno podešene i importovane?',
                  'Quality Score svih ključnih reči je 7 ili više?',
                  'Prikazujete se samo u relevantnim geografskim lokacijama?',
                  'Analizirali ste performanse po satu i danu?',
                  'Koristite Data-driven attribution model?',
                  'Imate ad extensions: Sitelinks, Callout, Call?',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-wine-text font-bold shrink-0">☐</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <hr className="border-ink-border my-8 md:my-12" />

            {/* CTA */}
            <div className="text-center py-4 md:py-6">
              <h3 className="font-display font-medium text-2xl md:text-3xl lg:text-4xl text-ink-text mb-6 leading-tight">
                Dosta vam je bacanja para u vetar?
              </h3>
              <p className="mb-8 md:mb-10 text-ink-muted text-lg md:text-xl">
                Dozvolite nam da uradimo besplatan audit vašeg Google Ads naloga i pokažemo vam gde tačno curi budžet, i kako da to popravimo.
              </p>
              <Link
                href="/kontakt"
                className="bg-wine hover:bg-wine-bright text-ink-text px-8 py-5 md:px-10 md:py-6 rounded-xl font-medium inline-block transition-colors text-sm md:text-base"
              >
                Zatražite besplatni Google Ads audit
              </Link>
            </div>
          </div>

          {/* Related links */}
          <div className="mt-12 p-6 bg-ink-surface border border-ink-border rounded-2xl">
            <h3 className="font-display font-medium text-ink-text mb-4">Povezani tekstovi</h3>
            <ul className="space-y-2">
              <li><Link href="/usluge/google-ads" className="text-wine-text hover:text-ink-text font-medium">Google Ads kampanje, naša usluga →</Link></li>
              <li><Link href="/blog/seo-2026" className="text-wine-text hover:text-ink-text font-medium">SEO u 2026: da li su ključne reči i dalje bitne? →</Link></li>
              <li><Link href="/blog/ga4-vodic" className="text-wine-text hover:text-ink-text font-medium">GA4 vodič: kako podesiti Google Analytics 4 →</Link></li>
            </ul>
          </div>

          {/* Newsletter — prijava ide preko sopstvene /api/newsletter rute. */}
          <div className="mt-12 p-8 md:p-10 bg-ink-surface border border-ink-border rounded-2xl text-center">
            <h3 className="font-display font-medium text-xl md:text-2xl text-ink-text mb-3">
              Javljamo se kad izađe nov tekst
            </h3>
            <p className="text-ink-muted text-sm mb-6 max-w-md mx-auto leading-relaxed">
              Jedna analiza tržišta mesečno, bez spama. Odjava je moguća u svakom trenutku.
            </p>
            <NewsletterForm />
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
      <Footer />
    </>
  )
}
