import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import NewsletterForm from '@/components/NewsletterForm'
import Potpis from '@/components/Potpis'
import { gbpOsnovnaCena } from '@/lib/cenaPodaci'

export const metadata: Metadata = {
  title: { absolute: 'Google Business Profile za apoteke' },
  description:
    'Pretraga apoteke je skoro uvek hitna. Zašto je radno vreme najvažnije polje profila, i šta Zakon o lekovima zabranjuje u objavama vaše apoteke.',
  alternates: {
    canonical: 'https://www.duckfamilyteam.online/blog/google-business-profil-za-apoteke',
  },
  keywords: [
    'google business profile za apoteke',
    'gbp apoteke',
    'marketing za apoteke',
    'apoteka na google mapi',
    'google business profil apoteka',
    'dežurna apoteka google',
    'lokalni seo za apoteke',
    'Duck Family Team',
  ],
  openGraph: {
    title: 'Google Business Profile za apoteke: kako da vas pacijenti pronađu na Google mapi',
    description:
      'Pretraga apoteke je hitna pretraga. Radno vreme, dežurstva i tačna lokacija odlučuju, a Zakon o lekovima postavlja granicu šta sme u objave.',
    url: 'https://www.duckfamilyteam.online/blog/google-business-profil-za-apoteke',
    type: 'article',
    publishedTime: '2026-10-05',
    modifiedTime: '2026-10-05',
    authors: ['Duck Family Team'],
    images: [
      {
        url: 'https://www.duckfamilyteam.online/img/blog/gbp-za-apoteke.svg',
        width: 1200,
        height: 630,
        alt: 'Oznaka apoteke na mapi uz sat koji pokazuje radno vreme',
      },
    ],
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Google Business Profile za apoteke: kako da vas pacijenti pronađu na Google mapi',
  description:
    'Kako se postavlja Google Business profil apoteke: tačna kategorija, radno vreme i dežurstva, Pharmacy markup, i granica koju postavlja Zakon o lekovima i medicinskim sredstvima.',
  image: 'https://www.duckfamilyteam.online/img/blog/gbp-za-apoteke.svg',
  datePublished: '2026-10-05',
  dateModified: '2026-10-05',
  wordCount: 1350,
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
    '@id': 'https://www.duckfamilyteam.online/blog/google-business-profil-za-apoteke',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Početna', item: 'https://www.duckfamilyteam.online' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.duckfamilyteam.online/blog' },
    { '@type': 'ListItem', position: 3, name: 'GBP za apoteke', item: 'https://www.duckfamilyteam.online/blog/google-business-profil-za-apoteke' },
  ],
}

/**
 * Jedan izvor za FAQ: i JSON-LD i vidljiva sekcija se generisu odavde.
 * Google trazi da FAQPage markup doslovno odgovara vidljivom tekstu, pa schema
 * bez vidljive sekcije nije u redu (isti razlog je zapisan u `lib/faqs.ts`).
 */
const faqs: { q: string; a: string }[] = [
  {
    q: 'Zašto je radno vreme najvažnije polje na profilu apoteke?',
    a: 'Zato što je pretraga apoteke skoro uvek hitna. Čovek traži apoteku koja radi sada, u svojoj blizini. Netačno radno vreme kod apoteke ne znači propuštenu priliku nego pacijenta pred zatvorenim vratima, i to je greška koju odmah oseti.',
  },
  {
    q: 'Sme li apoteka da reklamira lekove u objavama na Google profilu?',
    a: 'Lekove koji se izdaju na recept ne sme. Član 118. Zakona o lekovima i medicinskim sredstvima zabranjuje oglašavanje takvih lekova široj javnosti, a Google objava je oglašavanje široj javnosti. Objave mogu da govore o radnom vremenu, dežurstvima, uslugama i savetima, bez imena Rx preparata. Za konkretan slučaj pitajte svog pravnika.',
  },
  {
    q: 'Koja kategorija je tačna za apoteku?',
    a: 'Google traži da kategorija dopuni rečenicu „ova firma JESTE ___“, ne „ova firma IMA ___“. Za apoteku je to Apoteka kao primarna kategorija. Sekundarne se dodaju samo ako stvarno opisuju šta apoteka jeste, i to u najmanjem mogućem broju.',
  },
  {
    q: 'Da li objave na profilu podižu poziciju apoteke u pretrazi?',
    a: 'Google nigde ne navodi objave, fotografije ni Q&A kao faktore rangiranja, i tvrdnja da objavljivanje jednom nedeljno podiže poziciju nema Google izvor. Objave vrede jer pomažu pacijentu da se odluči i jer drže profil tačnim, ne kao poluga ranga.',
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

const greske = [
  {
    n: '1',
    t: 'Radno vreme koje nije tačno za praznike',
    d: 'Redovno radno vreme je obično uneto, posebno praznično skoro nikad. U Srbiji to su Nova godina, Božić 7. januara, Uskrs koji je pomerljiv, Prvi i Drugi maj, Dan primirja 11. novembra i Sretenje 15. i 16. februara. To su upravo dani kada pretraga „apoteka otvorena“ najviše raste, a profil tada pokazuje redovno vreme i šalje pacijenta na zatvorena vrata.',
  },
  {
    n: '2',
    t: 'Dežurstva nigde ne postoje',
    d: 'Apoteka koja ima noćno ili nedeljno dežurstvo to često ne prikazuje nigde osim na papiru na vratima. Ako dežurstvo nije u radnom vremenu profila, za Google u tom trenutku ne radi, i ne pojavljuje se onome ko u dva po noći traži apoteku.',
  },
  {
    n: '3',
    t: 'Ključne reči dopisane u naziv',
    d: 'Naziv tipa „Apoteka Beograd Vračar 0 do 24“ izgleda korisno a nosi stvaran rizik. Google traži stvarni naziv firme i izričito kaže da nepotrebne informacije u nazivu mogu da dovedu do suspenzije profila. Radno vreme ide u polje za radno vreme, kraj se vidi iz adrese.',
  },
  {
    n: '4',
    t: 'Imena lekova u objavama',
    d: 'Ovo je greška koja kod apoteka može da ima posledicu van marketinga. Vidi odeljak o Zakonu o lekovima ispod.',
  },
  {
    n: '5',
    t: 'Fotografije iz kataloga',
    d: 'Generične fotografije polica sa lekovima ne pomažu nikome. Pacijent koji prvi put dolazi traži da prepozna ulaz, izlog i gde se ulazi. Fotografija fasade sa table i ulice je korisnija od bilo kakve ilustracije.',
  },
  {
    n: '6',
    t: 'Recenzije bez odgovora',
    d: 'Apoteke dobijaju recenzije koje se tiču ljubaznosti, čekanja i toga da li je nečega bilo na stanju. Odgovor na takvu recenziju je jedino mesto gde apoteka može da pokaže kako radi, pre nego što pacijent uđe.',
  },
]

export default function GbpZaApotekePage() {
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
            <span className="text-ink-text">GBP za apoteke</span>
          </nav>

          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <span className="bg-wine text-ink-text text-[10px] md:text-[11px] font-mono uppercase px-4 py-1.5 md:px-5 md:py-2 rounded-full tracking-widest">
              GBP
            </span>
            <h1 className="font-display font-medium text-[2rem] md:text-4xl lg:text-5xl text-ink-text mt-6 mb-6 md:mb-8 leading-tight px-2">
              Google Business Profile za apoteke
            </h1>
            <Potpis className="mx-auto -mt-1 mb-8" />
            <p className="text-lg md:text-2xl text-ink-muted max-w-2xl mx-auto leading-relaxed">
              Pretraga apoteke je skoro uvek hitna. Zato je kod apoteke radno vreme važnije od svega ostalog na profilu, a zakon postavlja granicu koju druge delatnosti nemaju.
            </p>
            {/* Autor u svom redu ispod 640 px, pa datum i vreme čitanja zajedno u jednom.
                Ranije je razdelnik „·" završavao ili počinjao red na telefonu
                (vizuelna provera, krugovi 10 i 12, ispravka 3d). */}
            <div className="mt-6 font-mono text-[11px] text-ink-muted uppercase tracking-widest text-center leading-relaxed">
              <span className="block sm:inline">Duck Family Team</span>
              <span className="hidden sm:inline"> · </span>
              <span className="block sm:inline whitespace-nowrap">
                <time dateTime="2026-10-05">5. oktobar 2026.</time> · 7 min čitanja
              </span>
            </div>
          </div>

          <Image
            src="/img/blog/gbp-za-apoteke.svg"
            unoptimized
            alt="Ilustracija: oznaka apoteke na mapi, uz sat koji pokazuje da je otvoreno u trenutku pretrage"
            width={1200}
            height={630}
            className="w-full h-[250px] md:h-[500px] object-cover rounded-2xl mb-12 md:mb-16 border border-ink-border"
            priority
            fetchPriority="high"
          />

          {/* Content */}
          <div className="bg-ink-surface border border-ink-border rounded-2xl p-6 md:p-12 lg:p-16 space-y-10 md:space-y-12 text-ink-muted text-base md:text-xl">
            <p className="leading-relaxed">
              Niko ne pretražuje apoteku iz radoznalosti. Pretražuje je zato što mu nešto treba sada, a ne sutra, i zato što mu treba blizu, a ne u drugom delu grada. To jednu stvar čini važnijom od svega ostalog na profilu, i nije ono što bi se očekivalo.
            </p>
            <p className="leading-relaxed">
              Nije opis, nisu fotografije, nisu objave. Najvažnije polje na profilu apoteke je <strong className="text-ink-text font-medium">radno vreme</strong>. Jer kod apoteke netačno radno vreme nije propuštena prilika nego pacijent pred zatvorenim vratima, i to je greška koju odmah oseti.
            </p>
            <p className="leading-relaxed">
              Uz to, apoteke imaju i ograničenje koje druge delatnosti nemaju: zakon određuje šta sme da se pomene u objavi. O tome ispod, jer se tu greši lako i nesvesno.
            </p>

            <div className="space-y-4 md:space-y-6">
              <h2 className="font-display font-medium text-2xl md:text-3xl lg:text-4xl text-ink-text leading-tight">
                Zašto se kod apoteke sve svodi na blizinu i radno vreme
              </h2>
              <p className="leading-relaxed">
                Google navodi tri faktora za lokalno rangiranje, doslovno: <strong className="text-ink-text font-medium">relevantnost</strong>, <strong className="text-ink-text font-medium">blizina</strong> i <strong className="text-ink-text font-medium">poznatost</strong>. Kod većine delatnosti sva tri igraju. Kod apoteke se pretraga po pravilu dešava u jednom konkretnom trenutku i na jednom konkretnom mestu, pa blizina nosi nesrazmerno mnogo.
              </p>
              <p className="leading-relaxed">
                Blizinu ne možete da promenite, apoteka je gde je. Ali možete da budete tačni u onome što profil tvrdi o vama, a to je ono što odlučuje da li ćete se pojaviti onome ko traži apoteku koja <em className="text-ink-text not-italic font-medium">radi sada</em>.
              </p>
              <div className="bg-ink-bg p-5 md:p-8 border-l-4 border-wine rounded-r-xl shadow-sm">
                <p className="text-ink-text m-0">
                  <strong className="text-wine-text uppercase text-xs md:text-sm tracking-widest block mb-2">
                    Jedna ograda, da ne prodajemo ništa izmišljeno
                  </strong>
                  Google ne objavljuje težine ni formulu po kojoj se ta tri faktora kombinuju, i izričito piše da ne postoji način da se bolji lokalni rang zatraži ili plati. Svaki procenat koji vam neko navede po faktoru je izmišljen. Mi takav broj nemamo.
                </p>
              </div>
            </div>

            <div className="space-y-4 md:space-y-6">
              <h2 className="font-display font-medium text-2xl md:text-3xl lg:text-4xl text-ink-text leading-tight">
                Šest grešaka koje viđamo na profilima apoteka
              </h2>
              <div className="space-y-4">
                {greske.map((item) => (
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
                Granica koju postavlja Zakon o lekovima
              </h2>
              <p className="leading-relaxed">
                Ovo je deo koji apoteku razlikuje od svake druge lokalne firme, i razlog zašto se savet tipa „objavljujte dva puta nedeljno o svojim proizvodima“ na apoteku ne primenjuje.
              </p>
              <p className="leading-relaxed">
                <strong className="text-ink-text font-medium">Član 118. Zakona o lekovima i medicinskim sredstvima zabranjuje oglašavanje široj javnosti lekova koji se izdaju isključivo na lekarski recept.</strong> Zabrana se odnosi i na lekove koji se izdaju na teret zdravstvenog osiguranja, kao i na lekove za pojedine bolesti. Način oglašavanja onoga što je dozvoljeno uređuje poseban pravilnik, koji traži da oglašavanje bude objektivno i da ne dovodi u zabludu.
              </p>
              <p className="leading-relaxed">
                Objava na Google Business profilu je javno dostupan oglasni sadržaj, dakle oglašavanje široj javnosti. Praktično to znači:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-ink-bg rounded-2xl p-6 border border-ink-border">
                  <h3 className="font-display font-medium text-ink-text mb-3 uppercase text-sm tracking-widest">Ne ide u objavu</h3>
                  <ul className="space-y-2 text-base text-ink-muted">
                    <li>Ime leka koji se izdaje na recept</li>
                    <li>Cena ili popust na takav lek</li>
                    <li>Tvrdnja da nešto leči određenu bolest</li>
                    <li>Poruka koja navodi pacijenta da sam odluči o terapiji</li>
                  </ul>
                </div>
                <div className="bg-ink-bg rounded-2xl p-6 border border-wine">
                  <h3 className="font-display font-medium text-wine-text mb-3 uppercase text-sm tracking-widest">Ide u objavu</h3>
                  <ul className="space-y-2 text-base text-ink-muted">
                    <li>Radno vreme, prazničko vreme, dežurstva</li>
                    <li>Usluge: merenje pritiska, savet farmaceuta, naručivanje</li>
                    <li>Pristupačnost: parking, ulaz bez stepenica, rad subotom</li>
                    <li>Sezonski saveti bez imenovanja Rx preparata</li>
                  </ul>
                </div>
              </div>
              <p className="leading-relaxed">
                Ovo je okvir, ne pravno mišljenje. Za konkretnu objavu i konkretan preparat pitajte svog pravnika ili odgovornog farmaceuta. Nama je ovde važno jedno: agencija koja vam za apoteku predloži kampanju objava sa imenima lekova ne zna šta radi, i rizik od toga ne nosi ona.
              </p>
            </div>

            <div className="space-y-4 md:space-y-6">
              <h2 className="font-display font-medium text-2xl md:text-3xl lg:text-4xl text-ink-text leading-tight">
                Šta se tačno postavlja na profilu
              </h2>
              <div className="space-y-4">
                {[
                  {
                    t: 'Primarna kategorija: Apoteka',
                    d: 'Google traži da kategorija dopuni rečenicu „ova firma JESTE ___“, ne „ova firma IMA ___“. Dakle Apoteka, a ne Prodavnica kozmetike zato što imate i kozmetiku. Sekundarnih kategorija što je moguće manje, i samo ako stvarno opisuju šta apoteka jeste.',
                  },
                  {
                    t: 'Radno vreme, pa onda prazničko',
                    d: 'Redovno radno vreme je polovina posla. Druga polovina su praznici i dežurstva, i to je mesto gde apoteke najčešće stoje nepopunjeno. Unosi se po danu, unapred, za celu godinu ako je raspored poznat.',
                  },
                  {
                    t: 'Adresa u jednom obliku, telefon u formatu +381',
                    d: 'Isti zapis adrese na profilu, u futeru sajta, na kontakt stranici i po direktorijumima. Bulevar kralja Aleksandra 73 i Bul. kralja Aleksandra 73 nisu isti zapis, i nedosledna transliteracija je u Srbiji najčešći način da se ovo pokvari.',
                  },
                  {
                    t: 'Stalna tabla i osoblje u objavljenom vremenu',
                    d: 'Google traži da prodajni objekat ima stalnu tablu sa nazivom firme na adresi i da u objavljenom radnom vremenu tu bude neko ko može da primi mušteriju. Apoteka to po prirodi ispunjava, ali vredi znati da je to uslov za profil, ne formalnost.',
                  },
                  {
                    t: 'Fotografije ulaza i izloga, ne polica',
                    d: 'Pacijent koji prvi put dolazi prepoznaje fasadu i vrata. To je posao koji fotografija treba da obavi.',
                  },
                ].map((item) => (
                  <div key={item.t} className="flex items-start gap-3">
                    <span className="text-wine-text font-bold mt-1 flex-shrink-0">✓</span>
                    <div>
                      <strong className="text-ink-text font-medium">{item.t}: </strong>
                      <span className="text-ink-muted">{item.d}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4 md:space-y-6">
              <h2 className="font-display font-medium text-2xl md:text-3xl lg:text-4xl text-ink-text leading-tight">
                Na sajtu: Pharmacy, ne obična LocalBusiness
              </h2>
              <p className="leading-relaxed">
                Google traži da se koristi najodređeniji podtip koji postoji, a za apoteku on postoji. <code className="text-ink-text font-mono text-base">Pharmacy</code> je zvaničan schema.org tip, podtip <code className="text-ink-text font-mono text-base">MedicalBusiness</code>, koji je dalje podtip <code className="text-ink-text font-mono text-base">LocalBusiness</code>. Dakle umesto opšteg markupa ide određeniji, sa istim obaveznim poljima: naziv i adresa, uz preporučene geo koordinate, radno vreme, telefon i adresu sajta.
              </p>
              <p className="leading-relaxed">
                I ovde jedna ograda koju retko ko kaže naglas: dokumentovana namena ovog markupa je podobnost za rich results u pretrazi. <strong className="text-ink-text font-medium">Ne postoji Google izjava da markup na sajtu utiče na rangiranje u mapi.</strong> Mapu pokreću podaci sa profila. Ako vam neko prodaje schema markup kao ulaznicu u Local Pack, to nije osnovano.
              </p>
            </div>

            <div className="space-y-4 md:space-y-6">
              <h2 className="font-display font-medium text-2xl md:text-3xl lg:text-4xl text-ink-text leading-tight">
                Recenzije kod apoteke
              </h2>
              <p className="leading-relaxed">
                Poznatost kao faktor eksplicitno uključuje broj i ocenu recenzija, pa recenzije nisu kozmetika. Ali kod apoteke postoji dodatna osetljivost: pacijent u recenziji ume da napiše i šta je kupio i zašto. Odgovor ne treba da ponavlja te podatke.
              </p>
              <p className="leading-relaxed">
                Dve granice iz Google politike koje se ne prelaze: plaćene recenzije, u novcu ili naturi, su zabranjene, i selektivno traženje samo pozitivnih recenzija je zabranjeno. Levak u kom se prvo pita koliko je pacijent zadovoljan pa samo zadovoljni dobiju link, to je drugo. Ne gradimo ga, ni na izričit zahtev.
              </p>
            </div>

            <div className="space-y-4 md:space-y-6">
              <h2 className="font-display font-medium text-2xl md:text-3xl lg:text-4xl text-ink-text leading-tight">
                Šta mi radimo drugačije
              </h2>
              <p className="leading-relaxed">
                Tri stvari, i sve tri su posledica toga što smo pročitali šta Google i zakon zaista pišu.
              </p>
              <ul className="space-y-3 pl-6 list-none">
                <li className="flex items-start gap-3">
                  <span className="text-wine-text font-bold text-2xl leading-none">→</span>
                  <span><strong className="text-ink-text">Prazničko radno vreme unosimo unapred</strong>, za celu godinu, ne kad praznik dođe. To je najveći pojedinačni dobitak na profilu apoteke i najčešće neurađena stavka.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-wine-text font-bold text-2xl leading-none">→</span>
                  <span><strong className="text-ink-text">Objave pišemo u okviru Zakona o lekovima</strong>, bez imena Rx preparata. Radije manje objava koje su u redu, nego kampanja koja apoteci donosi problem.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-wine-text font-bold text-2xl leading-none">→</span>
                  <span><strong className="text-ink-text">Ne obećavamo poziciju.</strong> Kod apoteke blizina nosi previše, a nju ne menja nijedna agencija. Obećavamo da profil bude tačan, potpun i da se pojavi kad treba.</span>
                </li>
              </ul>
              <p className="leading-relaxed">
                Vođenje jednog profila kod nas košta {gbpOsnovnaCena} evra mesečno. Ako imate više apoteka, cena se računa po profilu, jer svaki nosi svoje radno vreme, svoje recenzije i svoje objave. O tome detaljnije u tekstu o{' '}
                <Link href="/blog/google-business-profil-vise-lokacija" className="text-wine-text underline hover:no-underline">profilima za firme sa više lokacija</Link>.
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

            <hr className="border-ink-border my-8 md:my-12" />

            {/* CTA */}
            <div className="text-center py-4 md:py-6">
              <h3 className="font-display font-medium text-2xl md:text-3xl lg:text-4xl text-ink-text mb-6 leading-tight">
                Da pogledamo profil vaše apoteke?
              </h3>
              <p className="mb-8 md:mb-10 text-ink-muted text-lg md:text-xl">
                Pošaljite nam link do profila. Proverićemo kategoriju, radno vreme i praznike, naziv i objave, i reći vam šta je pokvareno. Besplatno i bez obaveze.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/kontakt"
                  className="bg-wine hover:bg-wine-bright text-ink-text px-8 py-5 md:px-10 md:py-6 rounded-xl font-medium inline-block transition-colors text-sm md:text-base"
                >
                  Besplatna provera GBP profila
                </Link>
                <Link
                  href="/usluge/google-business-profil"
                  className="border border-ink-border-strong hover:border-wine text-ink-text px-8 py-5 md:px-10 md:py-6 rounded-xl font-medium inline-block transition-colors text-sm md:text-base"
                >
                  Pogledaj uslugu
                </Link>
              </div>
            </div>
          </div>

          {/* Related links */}
          <div className="mt-12 p-6 bg-ink-surface border border-ink-border rounded-2xl">
            <h3 className="font-display font-medium text-ink-text mb-4">Povezani tekstovi</h3>
            <ul className="space-y-2">
              <li><Link href="/blog/google-business-profil-vise-lokacija" className="text-wine-text hover:text-ink-text font-medium">Google Business profili za firme sa više lokacija →</Link></li>
              <li><Link href="/blog/cena-vodjenja-google-business-profila" className="text-wine-text hover:text-ink-text font-medium">Cena vođenja Google Business Profila u Srbiji →</Link></li>
              <li><Link href="/usluge/google-business-profil" className="text-wine-text hover:text-ink-text font-medium">Vođenje Google Business profila, naša usluga →</Link></li>
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
