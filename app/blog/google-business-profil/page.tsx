import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Google Business Profil: Zašto je vaš najjači marketinški alat | Duck Family Team',
  description:
    'Kako Google Business Profil gradi poverenje kod klijenata i donosi više poziva i poseta — za male, srednje i velike firme. Kompletan vodič za podešavanje i optimizaciju.',
  alternates: {
    canonical: 'https://www.duckfamilyteam.online/blog/google-business-profil',
  },
  keywords: [
    'Google Business Profil',
    'Google My Business optimizacija',
    'GBP optimizacija Srbija',
    'lokalni SEO Srbija',
    'local pack rangiranje',
    'Google Maps oglašavanje',
    'poverenje klijenata Google recenzije',
    'GBP za male firme',
    'GBP za više lokacija',
    'Duck Family Team',
  ],
  openGraph: {
    title: 'Google Business Profil: Vodič za više poziva i poseta | Duck Family Team',
    description: 'Kako mala, srednja i velika firma grade poverenje i vidljivost preko Google Business Profila.',
    url: 'https://www.duckfamilyteam.online/blog/google-business-profil',
    type: 'article',
    publishedTime: '2026-07-23',
    authors: ['Duck Family Team'],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1200',
        width: 1200,
        height: 630,
        alt: 'Google Business Profil na mapi',
      },
    ],
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Google Business Profil: Zašto je vaš najjači marketinški alat',
  description:
    'Kako Google Business Profil gradi poverenje kod klijenata i donosi više poziva i poseta — za male, srednje i velike firme.',
  image: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1200',
  datePublished: '2026-07-23',
  dateModified: '2026-07-23',
  wordCount: 1600,
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
    '@id': 'https://www.duckfamilyteam.online/blog/google-business-profil',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Početna', item: 'https://www.duckfamilyteam.online' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.duckfamilyteam.online/blog' },
    { '@type': 'ListItem', position: 3, name: 'Google Business Profil', item: 'https://www.duckfamilyteam.online/blog/google-business-profil' },
  ],
}

export default function GoogleBusinessProfilPage() {
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
      <main className="pt-28 md:pt-40 pb-20 px-4 md:px-6">
        <article className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm text-slate-400 font-bold flex items-center gap-2" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-teal-600 transition">Početna</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-teal-600 transition">Blog</Link>
            <span>/</span>
            <span className="text-slate-600">Google Business Profil</span>
          </nav>

          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <span className="bg-slate-100 text-slate-900 text-[10px] md:text-[11px] font-extrabold uppercase px-4 py-1.5 md:px-5 md:py-2 rounded-full tracking-wider italic">
              Google Business Profil
            </span>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mt-6 mb-6 md:mb-8 leading-relaxed px-2">
              Google Business Profil:{' '}
              <span className="duck-gradient-text italic">Vaš najjači, a najčešće zanemareni alat</span>
            </h1>
            <p className="text-lg md:text-2xl text-slate-500 italic font-medium max-w-2xl mx-auto leading-relaxed">
              Besplatan je, prati vas svaki dan na vrhu pretrage i gradi poverenje pre nego što neko uopšte klikne na vaš sajt. A opet, većina firmi ga podesi jednom i nikad se ne vrati.
            </p>
            <div className="flex items-center justify-center gap-4 mt-6 text-[11px] text-slate-400 font-bold uppercase tracking-widest">
              <span>Duck Family Team</span>
              <span>·</span>
              <time dateTime="2026-07-23">23. Jul 2026.</time>
              <span>·</span>
              <span>9 min čitanja</span>
            </div>
          </div>

          <Image
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1200"
            alt="Google Business Profil na mapi — Duck Family Team"
            width={1200}
            height={600}
            className="w-full h-[250px] md:h-[500px] object-cover rounded-[2rem] md:rounded-[3.5rem] mb-12 md:mb-16 shadow-2xl"
            priority
          />

          {/* Content */}
          <div className="bg-white border border-black/5 rounded-[1.5rem] md:rounded-[2.5rem] p-6 md:p-12 lg:p-16 space-y-10 md:space-y-12 text-slate-700 text-base md:text-xl">
            <p className="leading-relaxed">
              Zamislite nekoga ko upravo treba uslugu koju vi nudite — vodoinstalatera, frizerski salon, agenciju, prodavnicu. Ne otvara vaš sajt. Ne traži vas na Instagramu. Otvara Google Maps ili prostu Google pretragu, ukuca šta mu treba i grad u kom se nalazi, i za tri sekunde vidi tri firme sa mapom, ocenama, slikama i dugmetom{' '}
              <strong className="text-slate-900 font-bold">Pozovi</strong>. To je{' '}
              <strong className="text-teal-600 font-bold">local pack</strong> — i ako vas tu nema, taj klijent je već otišao kod nekog drugog. Nikad neće ni saznati da postojite.
            </p>
            <p className="leading-relaxed">
              Google Business Profil, skraćeno <strong className="text-slate-900 font-bold">GBP</strong> (nekadašnji Google My Business), nije "još jedna stavka na spisku obaveza". Za veliku većinu lokalnih firmi to je{' '}
              <strong className="text-slate-900 font-bold">prva stranica koju klijent vidi</strong> — pre sajta, pre društvenih mreža, pre bilo čega drugog. Zato je optimizacija GBP-a jedan od najisplativijih poteza u lokalnom SEO-u — i upravo zato zaslužuje mnogo više pažnje nego što obično dobija.
            </p>

            <div className="space-y-4 md:space-y-6">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 italic uppercase leading-tight">
                Zašto profil nosi toliku težinu
              </h2>
              <p className="leading-relaxed">
                Prema aktuelnim analizama lokalnih faktora rangiranja, signali sa Google Business Profila čine oko{' '}
                <strong className="text-slate-900 font-bold">32% ukupnog rangiranja u local pack-u</strong> — i čak osam od deset najvažnijih faktora dolazi direktno sa vašeg profila, ne sa sajta. Prva pozicija u local pack-u nosi prosečan CTR od skoro 18%. Sve ispod toga — praktično ste nevidljivi.
              </p>
              <div className="bg-teal-50 p-5 md:p-8 border-l-4 border-teal-500 italic rounded-r-xl md:rounded-r-2xl shadow-sm">
                <p className="text-slate-800 m-0">
                  <strong className="text-teal-700 uppercase text-xs md:text-sm tracking-widest not-italic block mb-2">
                    Praktično:
                  </strong>
                  Dok vaš sajt čeka mesecima da se popne na organsku SEO poziciju, profil se pravilno podešen i optimizovan može progurati u local pack za nedelje. To je najbrži besplatan put do telefona koji zvoni.
                </p>
              </div>
            </div>

            <div className="space-y-4 md:space-y-6">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 italic uppercase leading-tight">
                Mala, srednja i velika firma — ista alatka, drugačija igra
              </h2>
              <p className="leading-relaxed">
                Nema univerzalnog recepta, jer profil radi različit posao zavisno od veličine firme:
              </p>
              <div className="space-y-4">
                {[
                  { n: 'Mala', t: 'Zanatlije, saloni, mobilni servisi', d: 'Za veliki broj malih firmi u Srbiji profil je praktično cela online prisutnost — jedina "stranica" koju klijent ikad vidi. Radno vreme, poziv jednim klikom, pravac do vas. Ovde svaka nedovršena stavka direktno znači propušten posao.' },
                  { n: 'Srednja', t: 'Firme sa nekoliko lokacija ili širim spektrom usluga', d: 'Ovde je ključna doslednost — isti naziv, adresa i telefon na sajtu, profilu i svim direktorijumima, i sekcija usluga koja se poklapa sa onim što piše na sajtu. Google danas aktivno upoređuje jedno sa drugim.' },
                  { n: 'Velika', t: 'Lanci i firme sa 10+ lokacija', d: 'Individualno upravljanje profilima više nije opcija. Google nudi grupno upravljanje (Business Groups) i grupnu verifikaciju za 10 i više lokacija — jedan nalog, jedinstven pregled svih podružnica, kontrola pristupa za tim i dosledan brend na svakoj adresi.' },
                ].map((item) => (
                  <div key={item.n} className="flex gap-4 bg-slate-50 rounded-xl p-4">
                    <div className="text-sm font-black text-teal-600 select-none shrink-0 w-20 text-right uppercase tracking-wider pt-1">{item.n}</div>
                    <div>
                      <div className="font-black text-slate-800 mb-1">{item.t}</div>
                      <p className="text-slate-500 text-sm leading-relaxed m-0">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4 md:space-y-6">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 italic uppercase leading-tight">
                Poverenje se gradi na profilu, ne tek na sajtu
              </h2>
              <p className="leading-relaxed">
                Pre nego što neko uopšte razmisli da poseti vaš sajt, već je formirao mišljenje o vama na osnovu profila. Brojke to jasno pokazuju: čak{' '}
                <strong className="text-slate-900 font-bold">97% korisnika čita recenzije</strong> lokalnih firmi, a 88% ih čita direktno na Google-u pre nego što se odluči. Skoro sedam od deset ljudi{' '}
                <strong className="text-red-600 font-bold">neće ni razmatrati firmu sa ocenom ispod 4 zvezdice</strong>. Firma sa potpuno popunjenim i verifikovanim profilom je za korisnike 2,7 puta poverljivija od one koja to nema.
              </p>
              <p className="leading-relaxed">
                Recenzije danas nose oko petine ukupnog rangiranja u local pack-u — ne broje se samo pet zvezdica, već i koliko ih imate, koliko su sveže i da li uopšte odgovarate na njih. Firme u top 3 pozicije lokalne pretrage imaju u proseku 47 recenzija; one na pozicijama 7-10 tek 38. A profili sa 50 ili više recenzija imaju gotovo tri puta veću šansu da se uopšte pojave u local pack-u od onih sa manje od deset.
              </p>
              <div className="bg-slate-50 p-5 md:p-8 border-l-4 border-blue-500 italic rounded-r-xl md:rounded-r-2xl shadow-sm">
                <p className="text-slate-800 m-0">
                  <strong className="text-blue-700 uppercase text-xs md:text-sm tracking-widest not-italic block mb-2">
                    Šta ovo znači u praksi?
                  </strong>
                  Recenzije nisu "lepa stvar da imate" — one su direktan faktor rangiranja i direktan faktor odluke. Traženje recenzije od svakog zadovoljnog klijenta je jedna od retkih besplatnih akcija koja istovremeno podiže i poziciju i poverenje.
                </p>
              </div>
            </div>

            <div className="space-y-4 md:space-y-6">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 italic uppercase leading-tight">
                Kako pametno napraviti profil od nule
              </h2>
              <p className="leading-relaxed">
                Ako krećete ispočetka ili sumnjate da je profil loše podešen, evo redosleda koji se najviše isplati:
              </p>
              <div className="space-y-4">
                {[
                  { n: '1', t: 'Tačna primarna kategorija', d: 'Ovo je pojedinačno najvažniji faktor rangiranja profila. "Vodoinstalater" i "Hitne vodoinstalaterske usluge" nisu ista kategorija — birajte onu koja najpreciznije opisuje osnovnu delatnost, ne najširu.' },
                  { n: '2', t: 'Dosledno ime, adresa, telefon (NAP)', d: 'Identični podaci na sajtu, profilu i svim direktorijumima gde ste pomenuti. Google unakrsno proverava ove podatke — nedoslednost direktno šteti poverenju algoritma u vaš profil.' },
                  { n: '3', t: 'Pravilna verifikacija', d: 'Bez verifikovanog profila nemate pristup punoj funkcionalnosti niti kredibilitet kod Google-a. Za firme sa jednom lokacijom ide standardnim putem, za 10+ lokacija postoji grupna (chain) verifikacija.' },
                  { n: '4', t: 'Storefront ili uslužna zona', d: 'Ako klijenti dolaze kod vas — prodavnica, salon, ordinacija — koristite fizičku adresu. Ako vi idete kod klijenata — mobilni vulkanizer, majstor, dostava — podesite uslužnu zonu i sakrijte adresu. Mešanje ova dva modela zbunjuje i Google i klijente.' },
                  { n: '5', t: 'Sekcija usluga usklađena sa sajtom', d: 'Google danas aktivno poredi šta piše u "Services" tabu profila sa onim što piše na vašem sajtu, kako bi proverio da li je firma zaista aktivna i relevantna za te usluge.' },
                ].map((item) => (
                  <div key={item.n} className="flex gap-4 bg-slate-50 rounded-xl p-4">
                    <div className="text-3xl font-black text-teal-100 select-none shrink-0 w-8 text-right">{item.n}</div>
                    <div>
                      <div className="font-black text-slate-800 mb-1">{item.t}</div>
                      <p className="text-slate-500 text-sm leading-relaxed m-0">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4 md:space-y-6">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 italic uppercase leading-tight">
                Optimizacija koja stvarno pomera iglu
              </h2>
              <p className="leading-relaxed">
                Podešavanje je samo početak. Profil koji se ne dodiruje mesecima gubi vidljivost, jer Google danas nagrađuje{' '}
                <strong className="text-slate-900 font-bold">aktivnost, ne samo postojanje</strong>.
              </p>
              <ul className="space-y-3 pl-6 list-none">
                {[
                  { e: 'Fotografije', d: 'Profili sa preko 100 fotografija dobijaju znatno više pregleda i zahteva za pravce od onih sa nekoliko slika. Bolje je dodavati 5-10 mesečno nego ubaciti pedeset odjednom i zaboraviti na profil.' },
                  { e: 'Recenzije', d: 'Tražite ih posle svakog posla, odgovarajte na svaku — i pozitivnu i negativnu. Način odgovora na negativnu recenziju često ubedi budućeg klijenta više nego sama recenzija.' },
                  { e: 'Objave (Posts)', d: 'Redovne objave o ponudama, novostima ili radovima signaliziraju Google-u da je profil živ. Svežina sadržaja je danas jedan od signala koje algoritam direktno prati.' },
                  { e: 'Pitanja i odgovori', d: 'Sami postavite i odgovorite na najčešća pitanja pre nego što neko postavi netačan odgovor umesto vas — ova sekcija je javna i svako je može uređivati.' },
                  { e: 'Atributi', d: 'Plaćanje karticom, pristup za osobe sa invaliditetom, parking, radno vreme praznikom — sitni detalji koji vas uklapaju u filtere koje korisnici koriste pri pretrazi.' },
                ].map((item) => (
                  <li key={item.e} className="flex items-start gap-3">
                    <span className="text-teal-500 font-black text-xl leading-none shrink-0 mt-1">✓</span>
                    <span><strong className="text-slate-900">{item.e}</strong> — {item.d}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4 md:space-y-6">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 italic uppercase leading-tight">
                Organizacija kada imate više lokacija
              </h2>
              <p className="leading-relaxed">
                Za srednje i velike firme najveći rizik nije loš profil — već{' '}
                <strong className="text-red-600 font-bold">nekonzistentni profili</strong> na različitim adresama. Google danas nudi grupno upravljanje (Business Groups) preko kog centralizovano kontrolišete sve lokacije: jedinstven pregled statistike, masovne izmene podataka, i podelu pristupa članovima tima po ulogama. Za lance sa deset ili više lokacija tu je i grupna (bulk) verifikacija, koja štedi nedelje administracije.
              </p>
              <div className="bg-slate-50 p-5 md:p-8 border-l-4 border-slate-500 italic rounded-r-xl md:rounded-r-2xl shadow-sm">
                <p className="text-slate-800 m-0">
                  <strong className="text-slate-700 uppercase text-xs md:text-sm tracking-widest not-italic block mb-2">
                    Upozorenje:
                  </strong>
                  Grupno upravljanje ubrzava i dobre i loše navike podjednako. Ako je proces neuređen na pet lokacija, biće neuređen i na pedeset — samo brže.
                </p>
              </div>
            </div>

            <div className="space-y-4 md:space-y-6">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 italic uppercase leading-tight">
                Greške koje najčešće ubijaju profil
              </h2>
              <ul className="space-y-3 pl-6 list-none">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-black text-xl leading-none shrink-0 mt-1">✗</span>
                  <span className="text-slate-500">Ubacivanje ključnih reči u naziv firme ("Vulkanizer Beograd Najbrže") — kršenje Google pravila koje može dovesti do suspenzije profila.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-black text-xl leading-none shrink-0 mt-1">✗</span>
                  <span className="text-slate-500">Različit naziv ili broj telefona na sajtu, profilu i direktorijumima.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-black text-xl leading-none shrink-0 mt-1">✗</span>
                  <span className="text-slate-500">Ignorisanje negativnih recenzija — ćutanje deluje gore od same recenzije.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-black text-xl leading-none shrink-0 mt-1">✗</span>
                  <span className="text-slate-500">Zastarelo radno vreme ili slike od pre nekoliko godina.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-black text-xl leading-none shrink-0 mt-1">✗</span>
                  <span className="text-slate-500">Duplirani profili za istu lokaciju — zbunjuju algoritam i cepaju recenzije na dva mesta umesto da se sabiraju na jednom.</span>
                </li>
              </ul>
            </div>

            <hr className="border-slate-100 my-8 md:my-12" />

            {/* CTA */}
            <div className="text-center py-4 md:py-6">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 mb-6 leading-tight">
                Profil vam stoji, a telefon ne zvoni?
              </h3>
              <p className="mb-8 md:mb-10 text-slate-500 text-lg md:text-xl">
                Podešavamo i optimizujemo Google Business Profil (GBP) kao deo lokalnog SEO paketa — od kategorije i verifikacije, do fotografija, objava i sistema za prikupljanje recenzija.
              </p>
              <Link
                href="/#kontakt"
                className="btn-duck text-white px-8 py-5 md:px-10 md:py-6 rounded-2xl font-black uppercase tracking-widest inline-block shadow-2xl hover:scale-105 transform transition text-sm md:text-base"
              >
                Optimizuj Moj Profil
              </Link>
            </div>
          </div>

          {/* Related links */}
          <div className="mt-12 p-6 bg-slate-50 rounded-2xl">
            <h3 className="font-black text-slate-800 mb-4">Povezani tekstovi</h3>
            <ul className="space-y-2">
              <li><Link href="/blog/seo-2026" className="text-teal-600 hover:underline font-medium">SEO u 2026 — Tematski autoritet i AI pretraga →</Link></li>
              <li><Link href="/blog/ga4-vodic" className="text-teal-600 hover:underline font-medium">GA4 Vodič za preduzetnike →</Link></li>
              <li><Link href="/seo-optimizacija" className="text-teal-600 hover:underline font-medium">SEO Optimizacija — Duck Family Team →</Link></li>
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
