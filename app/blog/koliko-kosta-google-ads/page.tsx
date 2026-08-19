import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import BackButton from '@/components/BackButton'
import NewsletterForm from '@/components/NewsletterForm'

export const metadata: Metadata = {
  title: 'Koliko košta Google Ads u Srbiji: kako se računa mesečni budžet',
  description:
    'Ne postoji prosečna cena klika za Srbiju. Iz čega se sastoji trošak Google Ads kampanje, kako da izvučete svoju cifru i šta se plaća agenciji.',
  alternates: {
    canonical: 'https://www.duckfamilyteam.online/blog/koliko-kosta-google-ads',
  },
  keywords: [
    'koliko košta Google Ads',
    'cena Google Ads kampanje Srbija',
    'budžet za Google oglase',
    'Google Ads cena klika Srbija',
    'dnevni budžet Google Ads',
    'Keyword Planner procena cene klika',
    'Google Ads za male firme',
    'cena vođenja Google Ads kampanja',
    'Google Ads aukcija CPC',
    'Duck Family Team',
  ],
  openGraph: {
    title: 'Koliko košta Google Ads u Srbiji, i kako se budžet stvarno računa',
    description:
      'Prosečna cena klika za Srbiju ne postoji. Evo kako da izvučete svoju cifru iz Keyword Planner-a i iz čega se sastoji mesečni trošak.',
    url: 'https://www.duckfamilyteam.online/blog/koliko-kosta-google-ads',
    type: 'article',
    publishedTime: '2026-08-19',
    modifiedTime: '2026-08-19',
    authors: ['Duck Family Team'],
    images: [
      {
        url: 'https://www.duckfamilyteam.online/img/blog/koliko-kosta-google-ads.jpg',
        width: 1200,
        height: 630,
        alt: 'Raspodela mesečnog budžeta za Google Ads kampanju',
      },
    ],
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Koliko košta Google Ads u Srbiji: kako se stvarno računa mesečni budžet',
  description:
    'Iz čega se sastoji trošak Google Ads kampanje, kako Google naplaćuje klik, kako se izvlači sopstvena procena cene klika i šta se plaća agenciji.',
  image: 'https://www.duckfamilyteam.online/img/blog/koliko-kosta-google-ads.jpg',
  datePublished: '2026-08-19',
  dateModified: '2026-08-19',
  wordCount: 1900,
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
    '@id': 'https://www.duckfamilyteam.online/blog/koliko-kosta-google-ads',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Početna', item: 'https://www.duckfamilyteam.online' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.duckfamilyteam.online/blog' },
    { '@type': 'ListItem', position: 3, name: 'Koliko košta Google Ads', item: 'https://www.duckfamilyteam.online/blog/koliko-kosta-google-ads' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Koliki je minimalni budžet za Google Ads?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Google Ads nema propisan minimalni budžet. Vi zadajete prosečan dnevni budžet kampanje i možete ga menjati u svakom trenutku. Pitanje nije koliki je minimum koji Google traži, nego koliko klikova mesečno vam treba da biste dobili dovoljno konverzija za odluku.',
      },
    },
    {
      '@type': 'Question',
      name: 'Koliko je prosečna cena klika u Srbiji?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Jedinstvena prosečna cena klika za Srbiju ne postoji, jer se cena formira po aukciji za svaku pojedinačnu pretragu i razlikuje se po delatnosti, gradu, uređaju i dobu dana. Svoju procenu izvlačite iz Keyword Planner-a, iz kolona sa procenom ponude za vrh stranice.',
      },
    },
    {
      '@type': 'Question',
      name: 'Da li dnevni budžet može da se prekorači?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Na pojedinačan dan potrošnja može da ide do dvostrukog prosečnog dnevnog budžeta, ali u obračunskom periodu Google neće naplatiti više od 30,4 puta prosečan dnevni budžet. Broj 30,4 je prosečan broj dana u mesecu, 365 podeljeno sa 12.',
      },
    },
    {
      '@type': 'Question',
      name: 'Koliko košta vođenje Google Ads kampanja u agenciji?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Kod nas mesečno vođenje kampanja košta 200 evra, a jednokratna postavka kampanje bez mesečnog vođenja 70 evra po kampanji. To je odvojeno od budžeta koji plaćate Google-u.',
      },
    },
  ],
}

export default function KolikoKostaGoogleAdsPage() {
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
            <span className="text-ink-text">Koliko košta Google Ads</span>
          </nav>

          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <span className="bg-wine text-ink-text text-[10px] md:text-[11px] font-mono uppercase px-4 py-1.5 md:px-5 md:py-2 rounded-full tracking-widest">
              Google Ads
            </span>
            <h1 className="font-display font-medium text-2xl md:text-4xl lg:text-5xl text-ink-text mt-6 mb-6 md:mb-8 leading-tight px-2">
              Koliko košta Google Ads u Srbiji, i kako se budžet stvarno računa
            </h1>
            <p className="text-lg md:text-2xl text-ink-muted max-w-2xl mx-auto leading-relaxed">
              Prosečna cena klika za Srbiju ne postoji. Svaka cifra koju vidite kao „prosek za naše tržište" je neko lepo zaokružio. Evo kako da izvučete svoju.
            </p>
            <div className="flex items-center justify-center gap-4 mt-6 font-mono text-[11px] text-ink-muted uppercase tracking-widest">
              <span>Duck Family Team</span>
              <span>·</span>
              <time dateTime="2026-08-19">19. avgust 2026.</time>
              <span>·</span>
              <span>9 min čitanja</span>
            </div>
          </div>

          <Image
            src="/img/blog/koliko-kosta-google-ads.jpg"
            unoptimized
            alt="Raspodela mesečnog budžeta za Google Ads kampanju, Duck Family Team"
            width={1200}
            height={630}
            className="w-full h-[250px] md:h-[500px] object-cover rounded-2xl mb-12 md:mb-16 border border-ink-border"
            priority
          />

          {/* Content */}
          <div className="bg-ink-surface border border-ink-border rounded-2xl p-6 md:p-12 lg:p-16 space-y-10 md:space-y-12 text-ink-muted text-base md:text-xl">
            <p className="leading-relaxed">
              Pitanje stigne skoro uvek u istom obliku:{' '}
              <em className="text-ink-text not-italic font-medium">„Koliko mi treba mesečno za Google oglase?"</em>{' '}
              Čovek očekuje jedan broj. Mi na to pitanje ne možemo pošteno da odgovorimo jednim brojem, i nijedna agencija ne može, a da ne pogađa.
            </p>
            <p className="leading-relaxed">
              Ali to ne znači da je odgovor magla. Postoji postupak kojim se za konkretnu delatnost i konkretan grad dolazi do cifre koja drži vodu, i taj postupak možete da odradite sami, za dvadesetak minuta, pre nego što bilo kome date novac. U ovom tekstu ga razlažemo korak po korak.
            </p>

            <div className="space-y-4 md:space-y-6">
              <h2 className="font-display font-medium text-2xl md:text-3xl lg:text-4xl text-ink-text leading-tight">
                Tri različita troška koja ljudi zovu istim imenom
              </h2>
              <p className="leading-relaxed">
                Najveći deo zabune oko cene dolazi odatle što se tri odvojene stavke guraju pod jednu reč. Kad neko kaže „Google Ads me košta 300 evra", to može da znači bilo koju od njih.
              </p>
              <div className="space-y-4">
                {[
                  {
                    n: '1',
                    t: 'Budžet koji ide Google-u',
                    d: 'Novac za same klikove. Ide direktno Google-u sa vaše kartice, vi ga zadajete i menjate kad hoćete. Ovo je jedini deo koji zaista kupuje posetioce.',
                  },
                  {
                    n: '2',
                    t: 'Rad na kampanji',
                    d: 'Ono što plaćate čoveku ili agenciji koja kampanju postavlja i vodi. Kod nas je to 200 evra mesečno za vođenje, ili 70 evra po kampanji za jednokratnu postavku bez vođenja. Odvojeno od budžeta i nikad se ne uzima kao procenat potrošnje.',
                  },
                  {
                    n: '3',
                    t: 'Ono na šta klik sleće',
                    d: 'Stranica, merenje, telefon koji neko diže. Ovo je jednokratno i najčešće se preskoči, pa onda budžet iz stavke 1 curi u stranicu koja ne ume da pretvori posetioca u poziv.',
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
              <div className="bg-ink-bg p-5 md:p-8 border-l-4 border-wine rounded-r-xl shadow-sm">
                <p className="text-ink-text m-0">
                  <strong className="text-wine-text uppercase text-xs md:text-sm tracking-widest block mb-2">
                    Praktično
                  </strong>
                  Kad tražite ponudu, tražite je razloženu na ove tri stavke. Ponuda koja ih spaja u jedan iznos vam ne dozvoljava da uporedite dve agencije, a ni da posle vidite gde novac curi.
                </p>
              </div>
            </div>

            <div className="space-y-4 md:space-y-6">
              <h2 className="font-display font-medium text-2xl md:text-3xl lg:text-4xl text-ink-text leading-tight">
                Kako Google zapravo naplaćuje klik
              </h2>
              <p className="leading-relaxed">
                Google Ads{' '}
                <strong className="text-ink-text font-medium">nema propisan minimalni budžet</strong>. Nema ulaznice, nema paketa, nema obavezne godišnje potrošnje. Zadate prosečan dnevni budžet i to je to.
              </p>
              <p className="leading-relaxed">
                Cena se formira aukcijski, i to za svaku pojedinačnu pretragu iznova. Ono što je važno, a retko se kaže naglas: vi po pravilu plaćate{' '}
                <strong className="text-wine-text font-medium">manje od svoje maksimalne ponude</strong>. Google naplaćuje najmanji iznos koji je bio potreban da pređete prag i pretečete oglašivača neposredno ispod vas. Ako iza vas nema nikoga, plaćate rezervnu cenu.
              </p>
              <p className="leading-relaxed">
                Posledica je konkretna. Vaša stvarna cena klika ne zavisi samo od toga koliko ste spremni da date, nego i od toga koliko je oglašivača u vašoj niši i koliko su relevantni njihovi oglasi. Dobro napisan oglas sa dobrom stranicom plaća{' '}
                <strong className="text-ink-text font-medium">jeftiniji klik za istu poziciju</strong> od lošeg oglasa sa istom ponudom.
              </p>
            </div>

            <div className="space-y-4 md:space-y-6">
              <h2 className="font-display font-medium text-2xl md:text-3xl lg:text-4xl text-ink-text leading-tight">
                Dnevni budžet nije dnevni limit
              </h2>
              <p className="leading-relaxed">
                Ovo iznenadi skoro svakoga ko prvi put otvori nalog i sledećeg jutra vidi da je potrošeno više nego što je zadao.
              </p>
              <p className="leading-relaxed">
                Google prosečan dnevni budžet tretira kao prosek, ne kao plafon. Na dan sa jakim saobraćajem kampanja može da potroši{' '}
                <strong className="text-ink-text font-medium">do dvostrukog dnevnog budžeta</strong>, da nadoknadi dane kad je saobraćaja bilo manje. Plafon postoji, ali je mesečni: u obračunskom periodu ne može vam biti naplaćeno više od{' '}
                <strong className="text-wine-text font-medium">30,4 puta prosečan dnevni budžet</strong>. Broj 30,4 je prosečan broj dana u mesecu, 365 podeljeno sa 12.
              </p>
              <div className="bg-ink-bg p-5 md:p-8 border-l-4 border-ink-border rounded-r-xl shadow-sm">
                <p className="text-ink-text m-0">
                  <strong className="text-ink-muted uppercase text-xs md:text-sm tracking-widest block mb-2">
                    Računica u jednom redu
                  </strong>
                  Hoćete da mesečno na klikove date najviše 304 evra? Dnevni budžet postavite na 10 evra. Ne na 304 podeljeno sa 31.
                </p>
              </div>
            </div>

            <div className="space-y-4 md:space-y-6">
              <h2 className="font-display font-medium text-2xl md:text-3xl lg:text-4xl text-ink-text leading-tight">
                Zašto „prosečna cena klika za Srbiju" ne postoji
              </h2>
              <p className="leading-relaxed">
                Pošto se cena formira po aukciji, ona se menja po delatnosti, po gradu, po uređaju, po dobu dana i po tome ko je taj mesec odlučio da pojača oglašavanje. Klik za hitnu intervenciju vodoinstalatera i klik za prodaju sadnica nisu isti proizvod i nemaju razloga da koštaju slično.
              </p>
              <p className="leading-relaxed">
                Zato tekstove koji vam nude jedan broj kao „prosek za srpsko tržište" tretirajte kao dekoraciju. Nije da je broj nužno pogrešan, nego{' '}
                <strong className="text-ink-text font-medium">ne odnosi se ni na šta što vi prodajete</strong>. Vaš broj postoji, samo ga treba izvući.
              </p>
            </div>

            <div className="space-y-4 md:space-y-6">
              <h2 className="font-display font-medium text-2xl md:text-3xl lg:text-4xl text-ink-text leading-tight">
                Kako da izvučete svoju procenu iz Keyword Planner-a
              </h2>
              <p className="leading-relaxed">
                Keyword Planner je Google-ov besplatan alat unutar Ads naloga. Za ovo ne morate imati aktivnu kampanju, dovoljno je da nalog postoji.
              </p>
              <div className="space-y-4">
                {[
                  {
                    n: '1',
                    t: 'Otvorite alat i unesite prave fraze',
                    d: 'Ne unosite naziv svoje delatnosti, nego ono što kupac stvarno kuca. „Vulkanizer non stop Novi Sad", ne „vulkanizerske usluge". Deset do dvadeset fraza je sasvim dovoljno za prvu procenu.',
                  },
                  {
                    n: '2',
                    t: 'Podesite lokaciju i jezik pre nego što pogledate ijedan broj',
                    d: 'Procene se računaju za lokaciju i mrežu koje ste zadali. Ako ostane podrazumevana lokacija, gledate tuđe tržište. Ovo je najčešća greška u ovom koraku.',
                  },
                  {
                    n: '3',
                    t: 'Gledajte dve kolone sa procenom ponude za vrh stranice',
                    d: 'Niži raspon je približno 20. percentil onoga što su oglašivači istorijski plaćali za vrh stranice, viši raspon približno 80. percentil. To nisu prosek i maksimum, nego dve tačke iste raspodele. Podaci se odnose na poslednjih 30 dana.',
                  },
                  {
                    n: '4',
                    t: 'Za planiranje uzmite viši raspon',
                    d: 'Niži raspon je scenario u kom vam sve ide na ruku. Ako budžet postavite po njemu, prvi mesec će vas demantovati. Kod fraza sa malo istorije procena zna i da izostane, tu se planira grubo i ispravlja posle prvih stvarnih podataka.',
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
                Od cene klika do mesečnog budžeta
              </h2>
              <p className="leading-relaxed">
                Sad imate procenu cene klika. Pretvaranje te cifre u mesečni budžet ide unazad, od posla koji hoćete da dobijete, a ne unapred od para koje vam se ne čini strašno da date.
              </p>
              <ul className="space-y-3 pl-6 list-none">
                {[
                  { e: 'Koliko vredi jedan klijent', d: 'Ne cena jedne usluge, nego koliko taj čovek ostavi kod vas prvi put, i da li se vraća. Servis koji od klijenta ima 40 evra godišnje i onaj koji ima 400 ne smeju da imaju isti budžet.' },
                  { e: 'Koliko poziva pretvorite u posao', d: 'Ako od deset poziva zaključite tri, to je vaš procenat. Ne procenjujte ga naviše, ovo je jedini broj koji već znate iz sopstvenog posla.' },
                  { e: 'Koliko klikova daje jedan poziv', d: 'Ovo je jedina nepoznata na početku. Za planiranje se uzima gruba pretpostavka, pa se ispravlja čim stignu prvi stvarni podaci, obično posle dve do tri nedelje.' },
                  { e: 'Pomnožite unazad', d: 'Klikovi po pozivu puta cena klika daje cenu jednog poziva. Puta broj poziva koji vam mesečno treba, dobijate budžet. Ako ta cifra ispadne veća od onoga što klijent vredi, kampanja nema smisla i to je vredan nalaz, ne loša vest.' },
                ].map((item) => (
                  <li key={item.e} className="flex items-start gap-3">
                    <span className="text-wine-text font-bold text-xl leading-none shrink-0 mt-1">✓</span>
                    <span><strong className="text-ink-text">{item.e}</strong>: {item.d}</span>
                  </li>
                ))}
              </ul>
              <p className="leading-relaxed">
                Postoji i donja granica ispod koje računica nema smisla, i ona nije Google-ova nego statistička. Budžet koji mesečno kupi deset klikova ne daje dovoljno podataka da se iz njih bilo šta zaključi. Prva dva do tri meseca kampanje niste kupili samo posetioce, nego i{' '}
                <strong className="text-ink-text font-medium">saznanje šta u vašoj niši radi</strong>. Ko taj period preskoči, gasi kampanju tačno u trenutku kad je počela da uči.
              </p>
            </div>

            <div className="space-y-4 md:space-y-6">
              <h2 className="font-display font-medium text-2xl md:text-3xl lg:text-4xl text-ink-text leading-tight">
                Jedan slučaj sa stvarnim brojkama
              </h2>
              <p className="leading-relaxed">
                Portfolio sa deset logotipa nemamo i nećemo ga izmišljati. Imamo jedan slučaj koji smemo da pokažemo brojkama, mobilni vulkanizer.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                {[
                  { k: '3.550 €', v: 'uloženo' },
                  { k: '3 meseca', v: 'trajanje' },
                  { k: '7.210 €', v: 'neto zarada' },
                  { k: '203%', v: 'povraćaj' },
                ].map((item) => (
                  <div key={item.v} className="bg-ink-bg rounded-xl p-4 text-center">
                    <div className="font-mono text-lg md:text-2xl text-wine-text mb-1">{item.k}</div>
                    <div className="text-xs md:text-sm text-ink-muted leading-snug">{item.v}</div>
                  </div>
                ))}
              </div>
              <p className="leading-relaxed">
                Neto zarada je posle svih troškova. Povraćaj od 203 odsto je{' '}
                <strong className="text-ink-text font-medium">naš obračun na osnovu brojki koje je klijent dao usmeno</strong>, ne nezavisno verifikovan podatak, i tako ga i predstavljamo. Isto tako, jedan slučaj je jedan slučaj. On pokazuje da se ovako nešto dešava, ne da će se desiti vama.
              </p>
            </div>

            <div className="space-y-4 md:space-y-6">
              <h2 className="font-display font-medium text-2xl md:text-3xl lg:text-4xl text-ink-text leading-tight">
                Kad Google Ads nije pravo mesto za vaš novac
              </h2>
              <p className="leading-relaxed">
                Ovo je deo koji agencije obično preskoče, pa ga pišemo prvi.
              </p>
              <ul className="space-y-3 pl-6 list-none">
                <li className="flex items-start gap-3">
                  <span className="text-wine-text font-bold text-xl leading-none shrink-0 mt-1">✗</span>
                  <span className="text-ink-muted">Niko vašu uslugu ne traži pretragom. Ako ljudi ne kucaju to što prodajete, oglas nema gde da se pojavi. Tu pre Ads-a idu{' '}
                    <Link href="/usluge/google-business-profil" className="text-wine-text hover:text-ink-text font-medium">Google Business profil</Link> i sadržaj.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-wine-text font-bold text-xl leading-none shrink-0 mt-1">✗</span>
                  <span className="text-ink-muted">Zarada po klijentu je premala da pokrije cenu poziva. Računica iz prethodne sekcije to pokaže za deset minuta, pre nego što potrošite prvi dinar.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-wine-text font-bold text-xl leading-none shrink-0 mt-1">✗</span>
                  <span className="text-ink-muted">Nema ko da se javi na telefon. Kampanja koja radi znači pozive u toku radnog dana. Neodgovoren poziv je plaćen klik bačen u celosti.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-wine-text font-bold text-xl leading-none shrink-0 mt-1">✗</span>
                  <span className="text-ink-muted">Budžet stiže samo za jedan mesec probe. Jedan mesec je prekratko da kampanja izađe iz faze učenja, a taman dovoljno da zaključite pogrešnu stvar.</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4 md:space-y-6">
              <h2 className="font-display font-medium text-2xl md:text-3xl lg:text-4xl text-ink-text leading-tight">
                Kratak rezime
              </h2>
              <p className="leading-relaxed">
                Trošak Google Ads kampanje razložite na budžet za Google, rad na kampanji i stranicu na koju klik sleće. Google nema minimum, naplaćuje aukcijski i po pravilu manje od vaše maksimalne ponude, a dnevni budžet je prosek sa mesečnim plafonom od 30,4 puta dnevni iznos.
              </p>
              <p className="leading-relaxed">
                Prosečnu cenu klika za Srbiju nemojte tražiti jer je nema. Izvucite svoju iz Keyword Planner-a, uzmite viši raspon, pa unazad od vrednosti klijenta izračunajte budžet. Ako brojke ne izlaze, to ste saznali besplatno.
              </p>
            </div>

            {/* Izvori */}
            <div className="bg-ink-bg p-5 md:p-8 rounded-xl border border-ink-border">
              <strong className="text-ink-muted uppercase text-xs md:text-sm tracking-widest block mb-3">
                Izvori za tvrdnje o naplati i budžetu
              </strong>
              <ul className="space-y-2 text-sm md:text-base m-0 list-none pl-0">
                <li>
                  <a
                    href="https://support.google.com/google-ads/answer/1704443"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-wine-text hover:text-ink-text font-medium"
                  >
                    Google Ads Help: prekoračenje i prosečan dnevni budžet →
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.google.com/google-ads/answer/6297"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-wine-text hover:text-ink-text font-medium"
                  >
                    Google Ads Help: stvarna cena po kliku →
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.google.com/google-ads/answer/6292661"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-wine-text hover:text-ink-text font-medium"
                  >
                    Google Ads Help: procena ponude za vrh stranice →
                  </a>
                </li>
              </ul>
            </div>

            <hr className="border-ink-border my-8 md:my-12" />

            {/* CTA */}
            <div className="text-center py-4 md:py-6">
              <h3 className="font-display font-medium text-2xl md:text-3xl lg:text-4xl text-ink-text mb-6 leading-tight">
                Da izračunamo vašu cifru zajedno?
              </h3>
              <p className="mb-8 md:mb-10 text-ink-muted text-lg md:text-xl">
                Prođemo kroz vaše fraze, vaš grad i vrednost jednog klijenta, pa dobijete raspon budžeta i procenu da li se kampanja uopšte isplati. Ako se ne isplati, to ćemo vam i reći.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/kontakt"
                  className="bg-wine hover:bg-wine-bright text-ink-text px-8 py-5 md:px-10 md:py-6 rounded-xl font-medium inline-block transition-colors text-sm md:text-base"
                >
                  Izračunaj moj budžet
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
              <li><Link href="/blog/ga4-vodic" className="text-wine-text hover:text-ink-text font-medium">GA4 vodič za preduzetnike →</Link></li>
              <li><Link href="/usluge/google-ads" className="text-wine-text hover:text-ink-text font-medium">Vođenje Google Ads kampanja, naša usluga →</Link></li>
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
