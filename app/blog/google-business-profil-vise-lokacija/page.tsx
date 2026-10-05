import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import NewsletterForm from '@/components/NewsletterForm'
import Potpis from '@/components/Potpis'
import { gbpOsnovnaCena } from '@/lib/cenaPodaci'

export const metadata: Metadata = {
  title: { absolute: 'Google Business profili za firme sa više lokacija' },
  description:
    `Lanci i franšize ne vode jedan profil, nego jedan po poslovnici. Kako se to postavlja bez duplikata, doorway stranica i rizika od suspenzije.`,
  alternates: {
    canonical: 'https://www.duckfamilyteam.online/blog/google-business-profil-vise-lokacija',
  },
  keywords: [
    'upravljanje profilima za lance',
    'google business profile za više lokacija',
    'gbp za više lokacija',
    'gbp franšize',
    'google business profil lanci',
    'upravljanje google business profilima',
    'više poslovnica google mapa',
    'Duck Family Team',
  ],
  openGraph: {
    title: 'Google Business profili za firme sa više lokacija (lanci i franšize)',
    description:
      'Jedan profil po poslovnici, ne jedan za celu firmu. Kako se postavlja struktura koja ne pravi duplikate, ne upada u doorway kaznu i ne nosi rizik od suspenzije.',
    url: 'https://www.duckfamilyteam.online/blog/google-business-profil-vise-lokacija',
    type: 'article',
    publishedTime: '2026-10-05',
    modifiedTime: '2026-10-05',
    authors: ['Duck Family Team'],
    images: [
      {
        url: 'https://www.duckfamilyteam.online/img/blog/gbp-vise-lokacija.svg',
        width: 1200,
        height: 630,
        alt: 'Jedan brend povezan sa četiri odvojena profila na mapi',
      },
    ],
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Google Business profili za firme sa više lokacija (lanci i franšize)',
  description:
    'Kako se vodi više Google Business profila: jedan po poslovnici, jedna stranica po lokaciji, jedan LocalBusiness čvor sa sopstvenim podacima. Šta pravi duplikate, šta doorway kaznu, i šta dovodi do suspenzije.',
  image: 'https://www.duckfamilyteam.online/img/blog/gbp-vise-lokacija.svg',
  datePublished: '2026-10-05',
  dateModified: '2026-10-05',
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
    '@id': 'https://www.duckfamilyteam.online/blog/google-business-profil-vise-lokacija',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Početna', item: 'https://www.duckfamilyteam.online' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.duckfamilyteam.online/blog' },
    { '@type': 'ListItem', position: 3, name: 'Profili za više lokacija', item: 'https://www.duckfamilyteam.online/blog/google-business-profil-vise-lokacija' },
  ],
}

/**
 * Jedan izvor za FAQ: i JSON-LD i vidljiva sekcija se generisu odavde.
 * Google trazi da FAQPage markup doslovno odgovara vidljivom tekstu, pa schema
 * bez vidljive sekcije nije u redu (isti razlog je zapisan u `lib/faqs.ts`).
 */
const faqs: { q: string; a: string }[] = [
  {
    q: 'Da li firma sa više poslovnica pravi jedan profil ili više?',
    a: 'Jedan profil po fizičkoj lokaciji. Google traži da svaka lokacija ima stalnu tablu sa nazivom firme na adresi i da je u objavljenom radnom vremenu tu neko ko može da primi mušteriju. Lokacija koja to ne ispunjava ne dobija svoj profil.',
  },
  {
    q: 'Da li svaka poslovnica treba svoju stranicu na sajtu?',
    a: 'Da, i u polje za sajt u profilu ide adresa te stranice, ne početna. Ali stranice ne smeju biti kopije sa zamenjenim nazivom grada. Google to zove doorway stranicama i tretira kao kršenje politike.',
  },
  {
    q: 'Koliko košta vođenje profila za lanac sa više poslovnica?',
    a: `Cena se računa po profilu, ${gbpOsnovnaCena} evra mesečno za jedan profil. Pet poslovnica znači pet profila, jer svaki nosi svoje objave, svoje recenzije i svoje fotografije. Paušalna cena za celu firmu bi značila da neki profili ne dobijaju rad.`,
  },
  {
    q: 'Šta je najčešći uzrok suspenzije profila kod lanaca?',
    a: 'Ključne reči i naziv grada dopisani u naziv firme, da bi se profili razlikovali. Google traži stvaran naziv firme i izričito kaže da nepotrebne informacije u nazivu mogu da dovedu do suspenzije profila. Lokacije se razlikuju adresom, ne nazivom.',
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
    t: 'Jedan profil za celu firmu',
    d: 'Najčešći početak. Firma ima četiri poslovnice i jedan profil sa adresom sedišta. Posledica je da tri poslovnice ne postoje na mapi, pa ne mogu ni da se pojave kad neko u njihovom kraju pretraži uslugu. Blizina je jedan od tri faktora koja Google priznaje za lokalno rangiranje, a profil koji nije na toj adresi nema šta da ponudi po tom faktoru.',
  },
  {
    n: '2',
    t: 'Naziv grada dopisan u naziv firme',
    d: 'Da bi se profili razlikovali u panelu, dopiše se grad ili kvart. Google traži stvaran naziv firme i izričito kaže da nepotrebne informacije u nazivu mogu da dovedu do suspenzije profila. Lokacije se razlikuju adresom i to je dovoljno, Google ih sam prikazuje odvojeno.',
  },
  {
    n: '3',
    t: 'Sve profile vodi ka početnoj stranici',
    d: 'U polju za sajt na svih pet profila stoji ista početna adresa. Posetilac koji je tražio poslovnicu u svom gradu dobija opštu stranicu i sam traži dalje. U polje ide adresa stranice te lokacije.',
  },
  {
    n: '4',
    t: 'Stranice lokacija su kopije sa zamenjenim gradom',
    d: 'Ovo je ozbiljnije od propuštene prilike. Google svojom politikom imenuje stranice koje su suštinski iste i ciljaju razne gradove, i tretira ih kao doorway. Pravilo palca: ako je jedina razlika između dve stranice naziv grada, nije trebalo da budu dve stranice.',
  },
  {
    n: '5',
    t: 'Recenzije se posmatraju zbirno',
    d: 'Ocena se u lokalnoj pretrazi vezuje za profil, ne za firmu. Poslovnica sa dve recenzije se ne vozi na ocenu one sa sto dvadeset. Zbirni prosek u mesečnom izveštaju izgleda dobro i skriva da jedna lokacija stoji.',
  },
  {
    n: '6',
    t: 'Jedno radno vreme za sve',
    d: 'Poslovnica u tržnom centru i ona u ulici retko rade isto, a za praznike skoro nikad. Google ima posebno radno vreme za praznike i ono se postavlja po profilu. Pogrešno radno vreme je jedna od retkih grešaka koju mušterija odmah oseti, jer dođe na zatvorena vrata.',
  },
]

export default function GbpViseLokacijaPage() {
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
            <span className="text-ink-text">Profili za više lokacija</span>
          </nav>

          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <span className="bg-wine text-ink-text text-[10px] md:text-[11px] font-mono uppercase px-4 py-1.5 md:px-5 md:py-2 rounded-full tracking-widest">
              GBP
            </span>
            <h1 className="font-display font-medium text-[2rem] md:text-4xl lg:text-5xl text-ink-text mt-6 mb-6 md:mb-8 leading-tight px-2">
              Google Business profili za firme sa više lokacija
            </h1>
            <Potpis className="mx-auto -mt-1 mb-8" />
            <p className="text-lg md:text-2xl text-ink-muted max-w-2xl mx-auto leading-relaxed">
              Lanac ne vodi jedan profil, nego jedan po poslovnici. Evo kako se ta struktura postavlja, i šta je u njoj najčešće pokvareno.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 mt-6 font-mono text-[11px] text-ink-muted uppercase tracking-widest">
              <span className="whitespace-nowrap">Duck Family Team</span>
              <span className="whitespace-nowrap">· <time dateTime="2026-10-05">5. oktobar 2026.</time></span>
              <span className="whitespace-nowrap">· 8 min čitanja</span>
            </div>
          </div>

          <Image
            src="/img/blog/gbp-vise-lokacija.svg"
            unoptimized
            alt="Ilustracija: jedan brend u sredini, povezan tankim linijama sa četiri odvojena profila na mapi"
            width={1200}
            height={630}
            className="w-full h-[250px] md:h-[500px] object-cover rounded-2xl mb-12 md:mb-16 border border-ink-border"
            priority
            fetchPriority="high"
          />

          {/* Content */}
          <div className="bg-ink-surface border border-ink-border rounded-2xl p-6 md:p-12 lg:p-16 space-y-10 md:space-y-12 text-ink-muted text-base md:text-xl">
            <p className="leading-relaxed">
              Firma sa jednom radnjom ima jedan Google Business profil i tu nema šta da se razmišlja. Firma sa pet poslovnica ima pet odvojenih profila, pet radnih vremena, pet setova recenzija i pet stranica na sajtu. To nije isti posao pomnožen sa pet, nego drugačiji posao, jer se greška na jednom mestu prenese na sve.
            </p>
            <p className="leading-relaxed">
              Ovaj tekst je o tome kako se ta struktura postavlja. Pisan je za <strong className="text-ink-text font-medium">lance, franšize i firme sa više poslovnica</strong> u Srbiji, i drži se onoga što Google zaista piše u svojoj dokumentaciji.
            </p>

            <div className="space-y-4 md:space-y-6">
              <h2 className="font-display font-medium text-2xl md:text-3xl lg:text-4xl text-ink-text leading-tight">
                Pravilo od kog sve počinje: jedan profil po fizičkoj lokaciji
              </h2>
              <p className="leading-relaxed">
                Google ne broji vaše pravne subjekte nego vrata na koja mušterija može da uđe. Zato je uslov za profil vezan za samo mesto, i ima dva dela koja se lako prečuju.
              </p>
              <ul className="space-y-3 pl-6 list-none">
                <li className="flex items-start gap-3">
                  <span className="text-wine-text font-bold text-2xl leading-none">→</span>
                  <span>Na adresi mora da postoji <strong className="text-ink-text">stalna tabla</strong> sa nazivom firme</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-wine-text font-bold text-2xl leading-none">→</span>
                  <span>U objavljenom radnom vremenu tu mora da bude <strong className="text-ink-text">neko ko može da primi mušteriju</strong></span>
                </li>
              </ul>
              <p className="leading-relaxed">
                Lokacija koja to ne ispunjava ne dobija svoj profil. Magacin bez table, kancelarija u koju se ne ulazi, adresa knjigovođe, virtuelna kancelarija ili poštansko sanduče su dokumentovani uzroci suspenzije, ne siva zona.
              </p>
              <div className="bg-ink-bg p-5 md:p-8 border-l-4 border-wine rounded-r-xl shadow-sm">
                <p className="text-ink-text m-0">
                  <strong className="text-wine-text uppercase text-xs md:text-sm tracking-widest block mb-2">
                    Poseban slučaj: izlazite na terenu
                  </strong>
                  Ako radite kod mušterije a ne u svom prostoru, to je drugačija vrsta profila. Jedan profil za centralnu lokaciju, <strong className="font-medium">adresa sakrivena</strong>, i označeno područje rada. Google kaže da područje ne treba da se pruža dalje od oko dva sata vožnje. Neskrivena adresa kod ovakvog profila je takođe dokumentovan uzrok suspenzije.
                </p>
              </div>
            </div>

            <div className="space-y-4 md:space-y-6">
              <h2 className="font-display font-medium text-2xl md:text-3xl lg:text-4xl text-ink-text leading-tight">
                Šest grešaka koje viđamo kod lanaca
              </h2>
              <p className="leading-relaxed">
                Poređane su po tome koliko štete prave, ne po tome koliko su očigledne.
              </p>
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
                Kako struktura treba da izgleda
              </h2>
              <p className="leading-relaxed">
                Ista šema radi za tri poslovnice i za trideset. Razlika je samo u količini posla.
              </p>
              <div className="space-y-4">
                {[
                  {
                    t: 'Jedan profil po lokaciji, u jednom nalogu',
                    d: 'Svi profili pod istim nalogom, grupisani, sa istim pravnim nazivom firme. Razlikuju se adresom i telefonom, ne nazivom.',
                  },
                  {
                    t: 'Jedna stranica po lokaciji, pod zajedničkim čvorištem',
                    d: 'Struktura tipa /lokacije/novi-sad, uz indeksnu stranicu /lokacije koja ih sve nabraja i interno povezuje. Čvorište je važno: stranica do koje se ne dolazi linkom teško ulazi u indeks.',
                  },
                  {
                    t: 'U polje za sajt u profilu ide stranica te lokacije',
                    d: 'Ne početna. Posetilac dolazi tačno na poslovnicu koju je tražio, sa njenom adresom, njenim radnim vremenom i njenim telefonom na prvom ekranu.',
                  },
                  {
                    t: 'Jedan LocalBusiness čvor po stranici',
                    d: 'Svaki sa sopstvenim geo koordinatama, radnim vremenom, telefonom i svojim @id. Opciono Organization sa subOrganization da se veza brenda i poslovnica izrazi mašinski.',
                  },
                  {
                    t: 'Jedan oblik adrese, zamrznut svuda',
                    d: 'Ovo je srpska specifičnost koju je lako prevideti: Bulevar kralja Aleksandra 73 i Bul. kralja Aleksandra 73 nisu isti zapis. Izaberite jedan oblik i držite ga na profilu, u futeru, na kontakt stranici i po direktorijumima. Telefon u formatu +381.',
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
                Gde je granica između stranice lokacije i doorway stranice
              </h2>
              <p className="leading-relaxed">
                Ovo je mesto gde se najviše greši, i greška se ne vidi odmah. Google u svojoj politici spama imenuje stranice koje su suštinski iste a ciljaju razne gradove, i to zove doorway zloupotrebom. Posebno navodi i masovno generisanje stranica radi rangiranja, uključujući generisanje pomoću AI alata bez dodate vrednosti.
              </p>
              <p className="leading-relaxed">
                Šablon sa zamenjenim nazivom grada upada u oba opisa. A razlika između dobre i loše stranice lokacije nije u dužini teksta, nego u tome da li na njoj ima nečega što samo ta poslovnica ima:
              </p>
              <ul className="space-y-3 pl-6 list-none">
                <li className="flex items-start gap-3">
                  <span className="text-wine-text font-bold text-2xl leading-none">→</span>
                  <span>Imena ljudi koji tu rade</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-wine-text font-bold text-2xl leading-none">→</span>
                  <span>Prave fotografije tog prostora, ne iste za sve</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-wine-text font-bold text-2xl leading-none">→</span>
                  <span>Radno vreme i telefon te poslovnice, ugrađena mapa sa njenom adresom</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-wine-text font-bold text-2xl leading-none">→</span>
                  <span>Recenzije mušterija sa te lokacije, ne zbirne</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-wine-text font-bold text-2xl leading-none">→</span>
                  <span>Ono što je kod nje drugačije: parking, ulaz iz dvorišta, rad subotom, usluga koju druge nemaju</span>
                </li>
              </ul>
              <div className="bg-ink-bg p-5 md:p-8 border-l-4 border-wine rounded-r-xl shadow-sm">
                <p className="text-ink-text m-0">
                  <strong className="text-wine-text uppercase text-xs md:text-sm tracking-widest block mb-2">
                    Praktična posledica
                  </strong>
                  Ne pravite stranice za gradove u kojima ne radite. Firma sa tri poslovnice ima tri stranice lokacija, ne pedeset gradskih. Pedeset praznih stranica nije veći domet, nego veći rizik, i odvlači autoritet sa onih tri koje nešto stvarno nude.
                </p>
              </div>
            </div>

            <div className="space-y-4 md:space-y-6">
              <h2 className="font-display font-medium text-2xl md:text-3xl lg:text-4xl text-ink-text leading-tight">
                Šta Google priznaje da utiče na lokalni rang, a šta ne
              </h2>
              <p className="leading-relaxed">
                Ovde namerno idemo po dokumentaciji, jer se oko ovoga prodaje najviše izmišljenog. Google navodi tri faktora, doslovno: <strong className="text-ink-text font-medium">relevantnost</strong> (koliko profil odgovara onome što se traži), <strong className="text-ink-text font-medium">blizina</strong> (koliko je firma daleko od onoga ko pretražuje) i <strong className="text-ink-text font-medium">poznatost</strong> (koliko je firma poznata, na šta utiče i broj recenzija).
              </p>
              <p className="leading-relaxed">
                Uz to piše i ovo: <em className="text-ink-text not-italic">ne postoji način da se bolji lokalni rang zatraži ili plati</em>.
              </p>
              <p className="leading-relaxed">
                Ono što Google <strong className="text-ink-text font-medium">ne objavljuje</strong> su težine, redosled ni formula. Svaka agencija koja vam kaže da kategorija vredi toliko procenata a recenzije toliko, tu brojku je izmislila. Mi je nemamo i nećemo je dati.
              </p>
              <p className="leading-relaxed">
                Dve stvari koje se često prodaju kao rang, a nisu dokumentovane kao rang: objave, fotografije i Q&amp;A na profilu nigde se ne navode kao faktori rangiranja, i tvrdnja da objavljivanje jednom nedeljno podiže poziciju nema Google izvor. To su površine za konverziju i za relevantnost, i vrede zbog toga. Isto važi i za LocalBusiness markup na sajtu: njegova dokumentovana namena je podobnost za rich results, a ne ulazak u mapu. Mapu pokreću podaci sa profila.
              </p>
            </div>

            <div className="space-y-4 md:space-y-6">
              <h2 className="font-display font-medium text-2xl md:text-3xl lg:text-4xl text-ink-text leading-tight">
                Recenzije kad ih je više profila
              </h2>
              <p className="leading-relaxed">
                Poznatost kao faktor eksplicitno uključuje recenzije, pa je kod lanaca najveći rizik da se one gledaju zbirno. Prosek firme je 4,6 i izveštaj izgleda dobro, a jedna poslovnica ima dve recenzije i stoji već godinu.
              </p>
              <p className="leading-relaxed">
                Dve granice koje se ne prelaze, jer su u Google politici:
              </p>
              <ul className="space-y-3 pl-6 list-none">
                <li className="flex items-start gap-3">
                  <span className="text-wine-text font-bold text-2xl leading-none">→</span>
                  <span><strong className="text-ink-text">Plaćene recenzije</strong>, u novcu ili u naturi, su zabranjene. Isto i sadržaj koji nije zasnovan na stvarnom iskustvu.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-wine-text font-bold text-2xl leading-none">→</span>
                  <span><strong className="text-ink-text">Filtriranje po zadovoljstvu</strong> je takođe zabranjeno. Ako se prvo pita koliko je mušterija zadovoljna pa samo zadovoljni dobiju link za Google recenziju, to je selektivno traženje pozitivnih recenzija, što politika imenuje kao prekršaj. Ne gradimo takav levak, ni na izričit zahtev.</span>
                </li>
              </ul>
              <p className="leading-relaxed">
                Ono što radi i dozvoljeno je: pitati sve, svuda isto, i odgovarati pojedinačno. Šablonski odgovor kopiran na trideset recenzija vidi se odmah, i čita se gore nego da odgovora nema.
              </p>
            </div>

            <div className="space-y-4 md:space-y-6">
              <h2 className="font-display font-medium text-2xl md:text-3xl lg:text-4xl text-ink-text leading-tight">
                Kako da znate da li ovo radi
              </h2>
              <p className="leading-relaxed">
                Od juna 2026 postoji nativno povezivanje Google Business profila sa GA4. Pozivi, rezervacije i zahtevi za rutu ulaze u GA4 izveštaje, pa se ne mora ručno označavati link ka sajtu. Za lanac je to bitno više nego za jednu radnju, jer je jedini način da se vidi koja poslovnica stvarno dobija pozive, a koja samo prikaze.
              </p>
              <p className="leading-relaxed">
                Praćenje po profilu je i jedini pošten osnov za mesečni izveštaj. Zbirna brojka za celu firmu skriva upravo ono što treba da se vidi.
              </p>
            </div>

            <div className="space-y-4 md:space-y-6">
              <h2 className="font-display font-medium text-2xl md:text-3xl lg:text-4xl text-ink-text leading-tight">
                Kako mi to naplaćujemo
              </h2>
              <p className="leading-relaxed">
                Po profilu, {gbpOsnovnaCena} evra mesečno za jedan. Pet poslovnica znači pet profila i pet puta toliko. Nije stvar u cenovniku nego u tome da svaki profil nosi svoje objave, svoje recenzije i svoje fotografije. Paušalna cena za celu firmu bi u praksi značila da neki profili dobijaju rad a neki ne, i uvek su to oni manji.
              </p>
              <p className="leading-relaxed">
                Ako vodite lanac ili franšizu i niste sigurni u kakvom su stanju vaši profili, pošaljite nam spisak lokacija. Pogledaćemo svaki profil i reći vam koji su duplikati, gde je naziv rizičan, gde radno vreme nije tačno i gde profil vodi na pogrešnu stranicu. To je besplatno i ne obavezuje ni na šta.
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
                Vodite lanac ili franšizu?
              </h3>
              <p className="mb-8 md:mb-10 text-ink-muted text-lg md:text-xl">
                Pošaljite nam spisak lokacija i pogledaćemo svaki profil pojedinačno. Dobijate spisak toga šta je pokvareno i predlog za vaš broj poslovnica.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/kontakt"
                  className="bg-wine hover:bg-wine-bright text-ink-text px-8 py-5 md:px-10 md:py-6 rounded-xl font-medium inline-block transition-colors text-sm md:text-base"
                >
                  Zatraži konsultaciju za lance
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
              <li><Link href="/blog/cena-vodjenja-google-business-profila" className="text-wine-text hover:text-ink-text font-medium">Cena vođenja Google Business Profila u Srbiji →</Link></li>
              <li><Link href="/blog/google-business-profil" className="text-wine-text hover:text-ink-text font-medium">Google Business Profil: vaš najjači, a najčešće zanemareni alat →</Link></li>
              <li><Link href="/rezultati" className="text-wine-text hover:text-ink-text font-medium">Rezultati naših klijenata →</Link></li>
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
