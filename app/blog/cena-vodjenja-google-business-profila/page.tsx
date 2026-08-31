import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import BackButton from '@/components/BackButton'
import NewsletterForm from '@/components/NewsletterForm'

export const metadata: Metadata = {
  title: 'Cena vođenja Google Business Profila u Srbiji',
  description:
    'Google Business Profile je besplatan alat, ali vođenje nije. Razlažemo šta pomera mesečnu cenu, kada se isplati raditi sami, i koliko mi naplaćujemo.',
  alternates: {
    canonical: 'https://www.duckfamilyteam.online/blog/cena-vodjenja-google-business-profila',
  },
  keywords: [
    'google business profile cena',
    'cena gbp mesečno',
    'koliko košta gbp',
    'vođenje google business profila',
    'optimizacija google business profila',
    'agencija za google business profile',
    'cena vođenja google business profila',
    'Duck Family Team',
  ],
  openGraph: {
    title: 'Cena vođenja Google Business Profila u Srbiji: od čega zavisi mesečna cena',
    description:
      'Google ne naplaćuje profil, ali vođenje nije besplatno. Evo od čega zavisi mesečna cena i kada se uopšte isplati platiti nekom da to radi umesto vas.',
    url: 'https://www.duckfamilyteam.online/blog/cena-vodjenja-google-business-profila',
    type: 'article',
    publishedTime: '2026-08-31',
    modifiedTime: '2026-08-31',
    authors: ['Duck Family Team'],
    images: [
      {
        url: 'https://www.duckfamilyteam.online/img/blog/google-business-profil.png',
        width: 1200,
        height: 630,
        alt: 'Cena vođenja Google Business Profila u Srbiji',
      },
    ],
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Cena vođenja Google Business Profila u Srbiji: od čega zavisi mesečna cena',
  description:
    'Šta pomera mesečnu cenu vođenja Google Business Profila, zašto prosek za tržište nije dobar broj za oslanjanje, kada se isplati raditi sami, i koliko mi naplaćujemo.',
  image: 'https://www.duckfamilyteam.online/img/blog/google-business-profil.png',
  datePublished: '2026-08-31',
  dateModified: '2026-08-31',
  wordCount: 1050,
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
    '@id': 'https://www.duckfamilyteam.online/blog/cena-vodjenja-google-business-profila',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Početna', item: 'https://www.duckfamilyteam.online' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.duckfamilyteam.online/blog' },
    { '@type': 'ListItem', position: 3, name: 'Cena vođenja Google Business Profila', item: 'https://www.duckfamilyteam.online/blog/cena-vodjenja-google-business-profila' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Da li je Google Business Profile besplatan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Da, kreiranje profila, objave i odgovaranje na recenzije su besplatni i dostupni svakom vlasniku firme. Ono što se naplaćuje jeste rad nekoga ko profil vodi umesto vas, ne sam alat.',
      },
    },
    {
      '@type': 'Question',
      name: 'Koliko košta vođenje Google Business Profila?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Kod nas je cena fiksna, 100 evra mesečno, i uključuje osam objava, osam fotografija, odgovaranje na sve recenzije i tekuću optimizaciju profila. Firme sa više lokacija dobijaju predlog po profilu.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kada se isplati samostalno voditi profil, a kada platiti nekom drugom?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Samostalno vođenje ima smisla kod jedne lokacije, malo recenzija mesečno i kad postoji vreme za redovnu nedeljnu objavu. Plaćeno vođenje ima smisla kad broj lokacija pređe jednu ili kad profil realno neće biti prioritet.',
      },
    },
    {
      '@type': 'Question',
      name: 'Šta tačno utiče na cenu vođenja profila?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Najviše utiču broj lokacija, broj i vrsta recenzija koje treba obraditi, učestalost objava i obim optimizacije i praćenja profila. Više lokacija ili recenzija znači veći mesečni obim posla.',
      },
    },
  ],
}

export default function CenaVodjenjaGbpPage() {
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
          <BackButton />
          {/* Breadcrumb */}
          <nav className="mb-8 font-mono text-xs uppercase tracking-widest text-ink-muted flex items-center gap-2" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-ink-text transition">Početna</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-ink-text transition">Blog</Link>
            <span>/</span>
            <span className="text-ink-text">Cena vođenja Google Business Profila</span>
          </nav>

          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <span className="bg-wine text-ink-text text-[10px] md:text-[11px] font-mono uppercase px-4 py-1.5 md:px-5 md:py-2 rounded-full tracking-widest">
              GBP
            </span>
            <h1 className="font-display font-medium text-2xl md:text-4xl lg:text-5xl text-ink-text mt-6 mb-6 md:mb-8 leading-tight px-2">
              Cena vođenja Google Business Profila u Srbiji: od čega zavisi mesečna cena
            </h1>
            <p className="text-lg md:text-2xl text-ink-muted max-w-2xl mx-auto leading-relaxed">
              Google ne naplaćuje profil, ali vođenje nije besplatno. Razlažemo šta pomera mesečnu cenu, i kada se uopšte isplati platiti nekom da to radi umesto vas.
            </p>
            <div className="flex items-center justify-center gap-4 mt-6 font-mono text-[11px] text-ink-muted uppercase tracking-widest">
              <span>Duck Family Team</span>
              <span>·</span>
              <time dateTime="2026-08-31">31. avgust 2026.</time>
              <span>·</span>
              <span>6 min čitanja</span>
            </div>
          </div>

          <Image
            src="/img/blog/google-business-profil.svg"
            unoptimized
            alt="Cena vođenja Google Business Profila u Srbiji, Duck Family Team"
            width={1200}
            height={630}
            className="w-full h-[250px] md:h-[500px] object-cover rounded-2xl mb-12 md:mb-16 border border-ink-border"
            priority
          />

          {/* Content */}
          <div className="bg-ink-surface border border-ink-border rounded-2xl p-6 md:p-12 lg:p-16 space-y-10 md:space-y-12 text-ink-muted text-base md:text-xl">
            <p className="leading-relaxed">
              Google ne naplaćuje Business Profil. Kreiranje naloga, objave, čak i odgovaranje na recenzije, sve je besplatno i dostupno svakom vlasniku firme koji otvori profil. Pa ipak, kad neko pretraži{' '}
              <em className="text-ink-text not-italic font-medium">koliko košta vođenje Google Business profila</em>, očekuje konkretan broj, ne objašnjenje da je alat besplatan.
            </p>
            <p className="leading-relaxed">
              Ta dva podatka se ne kose. Alat jeste besplatan, ali vreme koje neko provede vodeći ga svake nedelje nije. Zato je pretraga{' '}
              <strong className="text-ink-text font-medium">google business profile cena</strong> sasvim opravdana, samo traži drugačiji odgovor od očekivanog. Cena o kojoj je ovde reč nije cena samog profila, nego cena rada koji neko drugi obavlja umesto vas,{' '}
              <strong className="text-wine-text font-medium">vođenje Google Business Profila</strong> kao usluga, ne kao besplatan alat. Piše objave, bira fotografije, odgovara na recenzije, prati šta se menja u vašoj kategoriji i okolini.
            </p>
            <p className="leading-relaxed">
              U ovom tekstu razlažemo od čega se ta cena sastoji, koji faktori je pomeraju gore ili dole, i kada se uopšte isplati platiti nekom da to radi umesto vas.
            </p>

            <div className="space-y-4 md:space-y-6">
              <h2 className="font-display font-medium text-2xl md:text-3xl lg:text-4xl text-ink-text leading-tight">
                Šta zapravo određuje cenu
              </h2>
              <p className="leading-relaxed">
                Cena vođenja Google Business Profila zavisi od količine posla, ne od toga koliko je sam alat „vredan". Nekoliko stavki najviše utiče na mesečni iznos.
              </p>
              <div className="space-y-4">
                {[
                  {
                    n: '1',
                    t: 'Broj lokacija',
                    d: 'Jedan profil za jednu radnju i pet profila za pet poslovnica nisu ni približno isti posao. Svaki dodatni profil nosi svoj set objava, svoje recenzije, svoju listu fotografija i često svoje lokalne posebnosti. Firme sa više lokacija, lanci i franšize, po pravilu plaćaju po profilu, ne paušalno za GBP uopšte.',
                  },
                  {
                    n: '2',
                    t: 'Broj i vrsta recenzija',
                    d: 'Profil sa pet recenzija mesečno i profil sa pedeset nisu isti posao. Odgovor na recenziju traži da neko pročita šta je klijent napisao, proceni da li je u pitanju stvarna pritužba ili nesporazum, i napiše odgovor koji zvuči kao čovek, ne kao šablon.',
                  },
                  {
                    n: '3',
                    t: 'Učestalost objava',
                    d: 'Profil koji dobija jednu objavu mesečno i profil koji dobija dve objave nedeljno ne traže isto vreme, ni istu količinu fotografskog materijala. Što je učestalost veća, veći je i mesečni obim posla.',
                  },
                  {
                    n: '4',
                    t: 'Optimizacija Google Business Profila',
                    d: 'Pored objava postoji rad koji klijent retko vidi: provera kategorija, atributa poput parkinga ili dostave, i opisa profila. Ovakva optimizacija Google Business Profila radi se povremeno, ali bez nje profil stoji, čak i kad se redovno objavljuje.',
                  },
                ].map((item) => (
                  <div key={item.n} className="flex gap-4 bg-ink-bg rounded-xl p-4">
                    <div className="font-display text-3xl text-ink-border select-none shrink-0 w-8 text-right">{item.n}</div>
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
                Zašto prosečna cena za Srbiju nije dobar broj za oslanjanje
              </h2>
              <p className="leading-relaxed">
                Ako pretražite koliko košta vođenje Google Business profila u Srbiji, naći ćete brojke koje se razlikuju i po tri, četiri puta. Razlog obično nije to što neko laže, nego što se pod istim nazivom prodaju različite stvari.
              </p>
              <p className="leading-relaxed">
                Jedna agencija pod „vođenje profila" podrazumeva samo objave, bez odgovaranja na recenzije. Druga uključuje i recenzije, ali ne i fotografije. Treća ima sve to plus mesečni izveštaj sa brojkama. Poređenje tri cene bez poređenja tri liste onoga što je uključeno ne govori ništa korisno.
              </p>
              <div className="bg-ink-bg p-5 md:p-8 border-l-4 border-wine rounded-r-xl shadow-sm">
                <p className="text-ink-text m-0">
                  <strong className="text-wine-text uppercase text-xs md:text-sm tracking-widest block mb-2">
                    Naš broj, ne prosek
                  </strong>
                  Mi vođenje Google Business profila naplaćujemo 100 evra mesečno, a u tu cenu ulazi osam objava mesečno, osam fotografija, odgovaranje na sve recenzije i tekuća optimizacija profila. Ako negde vidite nižu cenu, prvo proverite da li su unutra iste stavke. Ako je cena viša, isto pravilo važi.
                </p>
              </div>
              <p className="leading-relaxed text-sm">
                Radimo kao fizičko lice, pa cena ne podrazumeva fakturu sa PDVom ili PIBom, i tako je i naplaćujemo.
              </p>
            </div>

            <div className="space-y-4 md:space-y-6">
              <h2 className="font-display font-medium text-2xl md:text-3xl lg:text-4xl text-ink-text leading-tight">
                Kada se GBP isplati raditi samostalno
              </h2>
              <p className="leading-relaxed">
                Nije svaki biznis kandidat za plaćeno vođenje, i to vredi reći otvoreno, umesto da se svako ubeđuje da mu treba agencija.
              </p>
              <p className="leading-relaxed">
                Samostalno vođenje ima smisla kad imate jednu lokaciju, malo recenzija mesečno, do pet na primer, i vreme da jednom nedeljno sednete i otkucate kratku objavu sa telefona. Google Business Profile nije komplikovan alat. Dodavanje fotografije ili odgovor na recenziju traje par minuta i ne zahteva ni dizajnera ni copywritera.
              </p>
              <p className="leading-relaxed">
                Problem retko nastaje zato što je alat težak. Nastaje zato što taj posao stane na listi prioriteta iza svega ostalog, pa profil ostane bez objave dva meseca, recenzija čeka odgovor nedeljama, a konkurent koji redovno objavljuje polako preuzima poziciju u lokalnoj pretrazi.
              </p>
              <p className="leading-relaxed">
                Plaćeno vođenje ima smisla onog trenutka kad broj lokacija pređe jednu, kad je recenzija previše da se prati ručno, ili kad iskreno znate da profil neće biti prioritet koliko god se trudili. Tad ne treba još jedan alat, nego{' '}
                <strong className="text-wine-text font-medium">agencija za Google Business Profile</strong> koja vodi ono što vi nemate vremena da pratite. U tom slučaju cena vođenja je manja od cene izgubljenog vremena i propuštenih poziva.
              </p>
            </div>

            <div className="space-y-4 md:space-y-6">
              <h2 className="font-display font-medium text-2xl md:text-3xl lg:text-4xl text-ink-text leading-tight">
                Kako mi naplaćujemo
              </h2>
              <p className="leading-relaxed">
                Najčešće pitanje glasi otprilike ovako: cena gbp mesečno, koliko košta gbp, dajte mi konačan broj. Naša cena za vođenje Google Business Profila je fiksna, 100 evra mesečno, bez obzira na to koliko recenzija tog meseca stigne ili koliko posla ima oko fotografija. U tu cenu ulazi sledeće.
              </p>
              <ul className="space-y-3 pl-6 list-none">
                {[
                  { e: 'Osam objava mesečno', d: 'Planiranih tako da prate ono što se stvarno dešava u vašem poslu, ne generički tekst.' },
                  { e: 'Osam fotografija', d: 'Iz materijala koji nam pošaljete ili koje sami napravimo na licu mesta, po dogovoru.' },
                  { e: 'Odgovaranje na sve recenzije', d: 'Pozitivne i negativne, u roku koji ne ostavlja klijenta da čeka danima.' },
                  { e: 'Tekuća optimizacija', d: 'Kategorije, atributi, opis profila, sve ono što se ne vidi na prvi pogled, a utiče na to da li se profil uopšte pojavljuje kad neko pretražuje u vašoj okolini.' },
                ].map((item) => (
                  <li key={item.e} className="flex items-start gap-3">
                    <span className="text-wine-text font-bold text-xl leading-none shrink-0 mt-1">✓</span>
                    <span><strong className="text-ink-text">{item.e}</strong>: {item.d}</span>
                  </li>
                ))}
              </ul>
              <p className="leading-relaxed">
                Firme sa više od jedne lokacije dobijaju predlog po profilu, jer se posao množi sa brojem lokacija i ne ostaje isti. Ako vodite lanac ili franšizu, javite se za tačan predlog za vaš broj poslovnica.
              </p>
              <p className="leading-relaxed">
                Ako niste sigurni da li vam se isplati da neko drugi vodi vaš profil, najbrži način da saznate jeste da nam pošaljete link do svog GBP naloga. Pogledaćemo ga i reći vam iskreno da li tu ima šta da se popravi, i koliko bi to približno koštalo za vaš slučaj.
              </p>
            </div>

            <hr className="border-ink-border my-8 md:my-12" />

            {/* CTA */}
            <div className="text-center py-4 md:py-6">
              <h3 className="font-display font-medium text-2xl md:text-3xl lg:text-4xl text-ink-text mb-6 leading-tight">
                Da pogledamo vaš profil zajedno?
              </h3>
              <p className="mb-8 md:mb-10 text-ink-muted text-lg md:text-xl">
                Pošaljite nam link do svog Google Business profila i kažemo vam iskreno šta mu nedostaje i koliko bi približno koštalo da to sredimo umesto vas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/kontakt"
                  className="bg-wine hover:bg-wine-bright text-ink-text px-8 py-5 md:px-10 md:py-6 rounded-xl font-medium inline-block transition-colors text-sm md:text-base"
                >
                  Zatraži ponudu
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
              <li><Link href="/blog/google-business-profil" className="text-wine-text hover:text-ink-text font-medium">Google Business Profil: vaš najjači, a najčešće zanemareni alat →</Link></li>
              <li><Link href="/usluge/google-business-profil" className="text-wine-text hover:text-ink-text font-medium">Vođenje Google Business profila, naša usluga →</Link></li>
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
