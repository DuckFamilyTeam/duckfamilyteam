import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AnimatedSection from '@/components/AnimatedSection'
import FaqAccordion from '@/components/FaqAccordion'
import ChatBot from '@/components/ChatBot'

export const metadata: Metadata = {
  title: 'Google Ads Agencija Srbija | SEO Sajtovi Next.js & Astro | Duck Family Team',
  description:
    'Sertifikovani Google Ads stručnjaci. Izrada ultrabrzih Next.js i Astro sajtova sa SEO optimizacijom. Instagram, YouTube, Gmail oglašavanje. Uvek na prvim mestima u Google pretrazi. Duck Family Team.',
  alternates: { canonical: 'https://www.duckfamilyteam.online/' },
  keywords: 'Google Ads Srbija, SEO optimizacija, izrada sajtova, Next.js, Astro, Instagram reklame, YouTube oglašavanje, digitalni marketing',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Zašto Google Ads umesto društvenih mreža?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Google Ads hvata ljude u momentu namere. Na Google-u se pojavljujete tačno onda kada neko traži vaše rešenje — to je razlika između sviđanja i kupovine.',
      },
    },
    {
      '@type': 'Question',
      name: 'Šta je to SEO i koliko traje?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'SEO je maraton. Prvi pomaci se vide nakon 3–6 meseci, ali jednom kada zauzmete vrh Google-a, dobijate besplatan saobraćaj godinama.',
      },
    },
    {
      '@type': 'Question',
      name: 'Da li AI (SGE) menja način rangiranja?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Apsolutno. Google SGE direktno odgovara korisnicima. Fokusiramo se na to da vaš sadržaj postane primarni izvor za te AI odgovore.',
      },
    },
  ],
}

const reviewsSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Duck Family Team',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: '28',
  },
}

const marketingClients = [
  {
    name: 'Diviana Beauty Studio',
    location: 'Beograd',
    service: 'Google Ads & Instagram',
    quote: 'Fantastična saradnja sa Duck Family Team! Naši termini su puni, a broj novih klijentkinja koje dolaze putem Meta i tiktok reklama je neverovatno porastao. Pravi profesionalci koji razumeju beauty industriju!',
    author: 'Dajana',
    role: 'Vlasnica',
    logo: '/img/diviana-beauty-studio-logo.jpg',
  },
  {
    name: 'Dubinsko Pranje Vetar Gotovuša',
    location: 'Sirinićka Župa',
    service: 'Google Ads & SEO',
    quote: 'Nikola i Anđela su napravili čudo za naš biznis! Zahvaljujući Google Ads kampanjama, broj poziva se trostruko povećao u prvom mesecu. Sada smo na prvom mestu u Google pretrazi za "dubinsko pranje" u našoj oblasti i klijenti nas pronalaze svaki dan.',
    author: 'Nenad i Milena Petković',
    role: 'Vlasnici',
    logo: '/img/vetar1.jpg',
  },
  {
    name: 'Tepih Servis Jevtić',
    location: 'Borča, Beograd',
    service: 'Google Ads & Lokalni SEO',
    quote: 'Pre saradnje sa Duck Family Team, niko nas nije nalazio na Google-u. Sada smo konstantno na prvom mestu! Broj novih klijenata se povećao za 200% u roku od 3 meseca. Preporučujem svim vlasnicima lokalnih biznisa!',
    author: 'Danijela Jevtić',
    role: 'Vlasnica',
    logo: '/img/tepih-servis-jevtic-logo.png',
  },
  {
    name: 'Mobilni Vulkanizer Milan',
    location: 'Borča, Beograd',
    service: 'Google Ads & YouTube',
    quote: 'Kontaktirao sam Duck Family Team i za manje od mesec dana moj broj je počeo da zvoni non-stop! Google reklame su mi dovele više klijenata nego što sam ikad imao. Prava investicija za svaki biznis koji želi da raste!',
    author: 'Milan',
    role: 'Vlasnik',
    logo: '/img/milan-vulkanizer-logo.webp',
  },
]

const websitePortfolio = [
  {
    name: 'Mobilni Vulkanizer Milan',
    url: 'https://www.mobilnivulkanizermilan.com/',
    description: 'Ultrabrzi Next.js sajt sa kompletnom SEO optimizacijom. Sajt se rangira na prvom mestu Google pretrage za mobilnog vulkanizera u Beogradu.',
    tech: 'Next.js',
    techColor: 'bg-slate-900',
    seoTag: 'TOP #1 Google',
    tagColor: 'bg-teal-500',
    logo: '/img/milan-vulkanizer-logo.webp',
  },
  {
    name: 'Tepih Servis Jevtić',
    url: 'https://tepihservisjevtic.rs/',
    description: 'Ultrabrzi Astro sajt sa lokalnim SEO-om i precizno targetiranim ključnim rečima. Klijenti pronalaze servis direktno kroz Google pretragu svaki dan.',
    tech: 'Astro',
    techColor: 'bg-orange-600',
    seoTag: 'TOP #2 Google',
    tagColor: 'bg-blue-600',
    logo: '/img/tepih-servis-jevtic-logo.png',
  },
  {
    name: 'Dubinsko Pranje Vetar',
    url: 'https://dubinsko-pranje-vetar.vercel.app/',
    description: 'Kombinovani Next.js + Astro sajt sa optimizovanim SEO-om za lokalno tržište. Kompletan digitalni branding i web prisustvo za lokalni biznis.',
    tech: 'Next.js + Astro',
    techColor: 'bg-indigo-600',
    seoTag: 'TOP #1 Google',
    tagColor: 'bg-teal-500',
    logo: '/img/vetar1.jpg',
  },
  {
    name: 'Shara Mara Nails Studio',
    url: 'https://shara-mara-nails-studio.vercel.app/',
    description: 'Elegantni kombinovani sajt za nail studio sa online prikazom usluga. SEO optimizovan za lokalne pretrage — klijentkinje zakazuju termine direktno putem sajta.',
    tech: 'Next.js + Astro',
    techColor: 'bg-indigo-600',
    seoTag: 'TOP #3 Google',
    tagColor: 'bg-purple-600',
    logo: '/img/shara-mara-nails-logo.jpg',
  },
]

const pohvale = [
  {
    text: 'Sertifikovani Google stručnjaci koji zaista razumeju vaš biznis. Za svega 6 nedelja naše konverzije su porasle za 340%. Uvek dostupni, uvek na prvim mestima u Google pretrazi — ne možete pogrešiti sa Duck Family Team!',
    author: 'Ana P.',
    role: 'Vlasnica online prodavnice, Beograd',
    stars: 5,
    service: 'Google Ads',
  },
  {
    text: 'Tražio sam agenciju koja ne samo da postavlja oglase, već razume strategiju. Duck Family Team mi je dao kompletan plan i rezultati su stigli odmah — 1. mesto na Google-u i trostruko veći promet u restoranu!',
    author: 'Dragan M.',
    role: 'Vlasnik restorana, Novi Sad',
    stars: 5,
    service: 'Google Ads & SEO',
  },
  {
    text: 'Fantastičan sajt + Google kampanje = puna narudžbenica svaki dan. Nikola i Anđela su mi objasnili sve korak po korak. Profesionalan tim koji stoji iza svojih obećanja!',
    author: 'Jelena S.',
    role: 'Vlasnica kozmetičkog salona, Beograd',
    stars: 5,
    service: 'Izrada sajta + Marketing',
  },
  {
    text: 'Naš sajt je uvek na prvom ili drugom mestu u Google pretrazi. Duck Family Team ne pravi kompromise — daju 100% svemu što rade. Jedina agencija kojoj mogu da verujem!',
    author: 'Stefan V.',
    role: 'Servis bele tehnike, Kragujevac',
    stars: 5,
    service: 'SEO & Izrada sajta',
  },
  {
    text: 'Preporučio sam Duck Family Team svim mojim poslovnim prijateljima. Profesionalnost, brzina i rezultati koji se vide — to je njihov potpis. Moj Instagram profil eksplodirao je posle samo 2 meseca kampanje!',
    author: 'Ivana R.',
    role: 'Vlasnica online butika, Subotica',
    stars: 5,
    service: 'Instagram Oglašavanje',
  },
  {
    text: 'Nikad nisam verovao u digitalni marketing dok nisam upoznao ovaj tim. YouTube kampanja mi je dovela 500+ novih klijenata za 3 meseca. Apsolutno preporučujem svakome!',
    author: 'Bojan K.',
    role: 'Vlasnik fitnes studija, Beograd',
    stars: 5,
    service: 'YouTube Ads',
  },
]

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsSchema) }}
      />
      <Navbar />
      <main className="pt-24">

        {/* ── HERO ── */}
        <section className="hero-mesh min-h-[90vh] flex items-center px-6 md:px-12 relative overflow-hidden">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 relative z-10 py-16">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-50 border border-teal-100 rounded-full text-teal-700 text-[10px] md:text-xs font-bold uppercase tracking-widest float-element">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500" />
                </span>
                Google Premier Partner Standard
              </div>
              <h1 className="text-4xl md:text-7xl font-extrabold leading-[1.1] text-slate-900 tracking-tight">
                Dominirajte na <br />
                <span className="duck-gradient-text italic font-black">Google Pretrazi.</span>
              </h1>
              <p className="text-base md:text-xl text-slate-600 leading-relaxed max-w-xl font-medium">
                Ultrabrzi SEO sajtovi, Google Ads, Instagram i YouTube kampanje — sve što vam treba da budete{' '}
                <strong>uvek na prvom mestu.</strong>
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#kontakt"
                  className="btn-duck text-white px-8 md:px-10 py-4 md:py-5 rounded-2xl font-bold text-lg text-center"
                >
                  Besplatna Konsultacija
                </Link>
                <Link
                  href="#usluge"
                  className="bg-white border border-slate-200 text-slate-700 px-8 md:px-10 py-4 md:py-5 rounded-2xl font-bold text-lg text-center hover:bg-slate-50 transition"
                >
                  Pogledaj Usluge
                </Link>
              </div>
            </div>

            {/* Hero widget */}
            <div className="relative hidden lg:flex justify-center items-center">
              <div className="absolute w-72 h-72 bg-teal-400/10 rounded-full blur-3xl -top-10 -right-10" />
              <div className="bg-white p-8 rounded-[3rem] shadow-2xl border border-slate-100 w-full relative z-20">
                <div className="flex justify-between items-end mb-10">
                  <div>
                    <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">Prosečni ROI klijenata</p>
                    <p className="text-4xl font-black text-slate-800 tracking-tighter">+482%</p>
                  </div>
                  <div className="flex gap-1 items-end h-20">
                    <div className="w-3 bg-slate-100 rounded-t-lg h-[40%]" />
                    <div className="w-3 bg-slate-100 rounded-t-lg h-[60%]" />
                    <div className="w-3 bg-teal-500 rounded-t-lg h-[90%]" />
                    <div className="w-3 bg-blue-600 rounded-t-lg h-[100%]" />
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between p-4 bg-slate-50 rounded-2xl">
                    <span className="font-bold text-slate-600 text-sm italic">Google Search Ads</span>
                    <span className="font-black text-teal-600 uppercase text-sm">Aktivan</span>
                  </div>
                  <div className="flex justify-between p-4 bg-slate-50 rounded-2xl">
                    <span className="font-bold text-slate-600 text-sm italic">SEO Ranking</span>
                    <span className="font-black text-blue-600 uppercase text-sm">TOP #1-2</span>
                  </div>
                  <div className="flex justify-between p-4 bg-slate-50 rounded-2xl">
                    <span className="font-bold text-slate-600 text-sm italic">Izrada Sajta</span>
                    <span className="font-black text-orange-500 uppercase text-sm">Next.js / Astro</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── USLUGE ── */}
        <section id="usluge" className="py-20 px-6 md:px-12 bg-white">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-6xl font-black text-slate-900 tracking-tighter italic mb-6">
                Sve Što Vaš Biznis Treba
              </h2>
              <p className="text-slate-500 text-lg">
                Od izrade ultrabrzih SEO sajtova do Google, Instagram i YouTube kampanja. Pokrivamo kompletan digitalni nastup.
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-12 gap-6">
              {/* Google Ads */}
              <AnimatedSection className="md:col-span-8 bento-card p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem]">
                <div className="h-14 w-14 bg-teal-50 rounded-2xl flex items-center justify-center mb-8">
                  <svg className="w-7 h-7 text-teal-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-black text-slate-800 mb-4">Napredni Google Ads (PPC)</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Naša strategija se ne zasniva na "možda". Koristimo <strong>Smart Bidding</strong>, dinamičke Search oglase i precizan Remarketing da bismo vratili kupce koji su već posetili vaš sajt. Fokusiramo se na <strong>konverzije</strong>, a ne samo na broj klikova.
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-bold text-slate-500 italic">
                  {['Pmax Kampanje', 'YouTube Video Ads', 'Google Shopping', 'Display Mreža'].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="text-teal-500">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </AnimatedSection>

              {/* SEO */}
              <AnimatedSection delay={100} className="md:col-span-4 bento-card p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] flex flex-col justify-between">
                <div>
                  <div className="h-14 w-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-8">
                    <svg className="w-7 h-7 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-black text-slate-800 mb-4">SEO koji radi</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Tehnički SEO + quality content + linkbuilding = dugoročan besplatan saobraćaj. Naši klijenti su uvek na prvim pozicijama.
                  </p>
                </div>
              </AnimatedSection>

              {/* GA4 */}
              <AnimatedSection delay={200} className="md:col-span-4 bento-card p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] flex flex-col justify-between">
                <div>
                  <div className="h-14 w-14 bg-purple-50 rounded-2xl flex items-center justify-center mb-8">
                    <svg className="w-7 h-7 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-black text-slate-800 mb-4">GA4 Analitika</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Pratimo svaki klik. Conversion tracking, event setup, i custom dashboards za potpun uvid u performanse.
                  </p>
                </div>
              </AnimatedSection>

              {/* Landing Page */}
              <AnimatedSection delay={300} className="md:col-span-8 bento-card p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem]">
                <div className="h-14 w-14 bg-orange-50 rounded-2xl flex items-center justify-center mb-8">
                  <svg className="w-7 h-7 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-black text-slate-800 mb-4">Landing Page Optimizacija</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Pola kampanje je oglas. Druga polovina je gde ljudi slete. Mi pravimo stranice koje <strong>konvertuju</strong> — brze, mobilno prilagođene, i sa jasnim pozivom na akciju.
                </p>
                <div className="inline-flex items-center gap-3 text-orange-600 font-black text-sm uppercase tracking-widest">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500" />
                  </span>
                  A/B Testing uključen
                </div>
              </AnimatedSection>

              {/* Izrada Sajtova - NOVA USLUGA */}
              <AnimatedSection delay={0} className="md:col-span-8 bento-card p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] border-2 border-teal-100">
                <div className="flex items-center gap-3 mb-8">
                  <div className="h-14 w-14 bg-gradient-to-br from-teal-500 to-blue-600 rounded-2xl flex items-center justify-center">
                    <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <span className="bg-teal-500 text-white text-[10px] font-black uppercase px-3 py-1 rounded-full tracking-widest">Nova Usluga</span>
                </div>
                <h3 className="text-2xl font-black text-slate-800 mb-4">Ultrabrzi SEO Sajtovi — Next.js & Astro</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Pravimo <strong>ultrabrze sajtove</strong> u Next.js i Astro tehnologiji sa ugrađenom SEO optimizacijom, meta opisima, ključnim rečima i svim što Google zahteva za najviše pozicije u pretrazi. Svaki sajt je <strong>optimizovan od prvog dana</strong> — klijenti vas pronalaze odmah.
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-bold text-slate-500 italic">
                  {[
                    'Next.js & Astro Framework',
                    'Lighthouse Score 95-100',
                    'Meta tagovi & Schema Markup',
                    'Targeting ključnih reči',
                    'Vercel Deployment',
                    'Mobilno prilagođen (Mobile-first)',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="text-teal-500">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </AnimatedSection>

              {/* Instagram Oglašavanje - NOVA USLUGA */}
              <AnimatedSection delay={100} className="md:col-span-4 bento-card p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] flex flex-col justify-between">
                <div>
                  <div className="h-14 w-14 rounded-2xl flex items-center justify-center mb-8" style={{background: 'linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)'}}>
                    <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-black text-slate-800 mb-4">Instagram Oglašavanje</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Targetirane Instagram kampanje koje dosežu vašu idealnu publiku. Stories, Reels i feed oglasi koji donose stvarne rezultate i nove pratioce.
                  </p>
                </div>
              </AnimatedSection>

              {/* Google Platforme - NOVA USLUGA */}
              <AnimatedSection delay={200} className="md:col-span-12 bento-card p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem]">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="h-14 w-14 bg-yellow-50 rounded-2xl flex items-center justify-center mb-8">
                      <svg className="w-7 h-7 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-black text-slate-800 mb-4">Sve Google Platforme</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Kompletno oglašavanje putem svih Google platformi — YouTube, Gmail, Display mreža, Google Maps i više. Vaši oglasi prate korisnike svuda gde se nalaze.
                    </p>
                  </div>
                  <ul className="grid grid-cols-2 gap-4 text-sm font-bold text-slate-500 italic">
                    {[
                      'YouTube Video Oglasi',
                      'Gmail Sponsored Ads',
                      'Google Display Mreža',
                      'Google Maps Oglašavanje',
                      'Google Shopping',
                      'Performance Max (AI)',
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="text-yellow-500">✓</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* ── NAŠ PROCES ── */}
        <section id="proces" className="py-20 px-6 md:px-12 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-6xl font-black text-slate-900 tracking-tighter italic mb-6">
                Naš <span className="text-teal-500">Proces</span>
              </h2>
              <p className="text-slate-500 text-lg">
                Transparentan, merljiv i optimizovan za maksimalan ROI. Evo kako funkcionišemo:
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <AnimatedSection delay={0} className="group relative">
                <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer h-full">
                  <div className="flex items-center justify-between mb-6">
                    <div className="h-16 w-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-lg">
                      01
                    </div>
                    <svg className="w-6 h-6 text-slate-300 group-hover:text-teal-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-black text-slate-800 mb-3">Dubinska Analiza</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Analiziramo vaš biznis model, konkurenciju i ciljnu grupu. Identifikujemo ključne reči sa visokom namerom kupovine i postavljamo nekoliko pitanja da razumemo vaše potrebe.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={100} className="group relative">
                <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer h-full">
                  <div className="flex items-center justify-between mb-6">
                    <div className="h-16 w-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-lg">
                      02
                    </div>
                    <svg className="w-6 h-6 text-slate-300 group-hover:text-blue-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-black text-slate-800 mb-3">Strategija & Setup</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Kreiramo kampanje sa preciznim targetiranjem. Postavljamo GA4 tracking, konverzije i custom dashboards. Dajemo vam kompletan plan rada pre nego što počnemo.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={200} className="group relative">
                <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer h-full">
                  <div className="flex items-center justify-between mb-6">
                    <div className="h-16 w-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-lg">
                      03
                    </div>
                    <svg className="w-6 h-6 text-slate-300 group-hover:text-purple-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-black text-slate-800 mb-3">Lansiranje & Testiranje</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Pokrećemo kampanje i vršimo A/B testiranje oglasa, landing stranica i bid strategija. Sve se meri, ništa se ne pretpostavlja.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={300} className="group relative">
                <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer h-full">
                  <div className="flex items-center justify-between mb-6">
                    <div className="h-16 w-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-lg">
                      04
                    </div>
                    <svg className="w-6 h-6 text-slate-300 group-hover:text-orange-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-black text-slate-800 mb-3">Optimizacija & Scaling</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Kontinuirano pratimo performanse i skaliramo ono što radi. Mesečni izveštaji sa konkretnim preporukama za rast.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* ── MARKETING KLIJENTI ── */}
        <section id="klijenti" className="py-20 px-6 md:px-12 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection className="text-center mb-16">
              <span className="inline-block bg-teal-500/10 text-teal-400 text-[10px] font-black uppercase px-4 py-2 rounded-full tracking-widest mb-6">
                Zadovoljni Klijenti — Reklamiranje
              </span>
              <h2 className="text-3xl md:text-6xl font-black italic tracking-tighter mb-6">
                Njihov uspeh je <span className="text-teal-400">naš ponos.</span>
              </h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                Lokalni biznisi koji su poverili svoje digitalno oglašavanje Duck Family Team-u i sada dominiraju Google pretragom.
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-6">
              {marketingClients.map((client, i) => (
                <AnimatedSection key={client.name} delay={i * 100}>
                  <div className="bg-white/5 backdrop-blur-sm rounded-[2.5rem] p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 h-full flex flex-col">
                    <div className="w-24 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-lg overflow-hidden p-1.5">
                      <Image
                        src={client.logo}
                        alt={`${client.name} logo`}
                        width={90}
                        height={60}
                        className="object-contain w-full h-full"
                      />
                    </div>
                    <div className="mb-4">
                      <h3 className="text-xl font-black text-white mb-1">{client.name}</h3>
                      <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">{client.location} · {client.service}</p>
                    </div>
                    <blockquote className="text-slate-300 leading-relaxed italic text-sm flex-1 mb-6">
                      "{client.quote}"
                    </blockquote>
                    <div className="flex items-center gap-3 border-t border-white/10 pt-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-blue-600 rounded-full flex items-center justify-center text-white font-black text-sm">
                        {client.author.charAt(0)}
                      </div>
                      <div>
                        <p className="font-black text-white text-sm">{client.author}</p>
                        <p className="text-slate-400 text-xs">{client.role}</p>
                      </div>
                      <div className="ml-auto flex gap-0.5">
                        {[...Array(5)].map((_, j) => (
                          <span key={j} className="text-yellow-400 text-sm">★</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ── PORTFOLIO SAJTOVA ── */}
        <section id="portfolio" className="py-20 px-6 md:px-12 bg-white">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection className="text-center mb-16">
              <span className="inline-block bg-blue-50 text-blue-700 text-[10px] font-black uppercase px-4 py-2 rounded-full tracking-widest mb-6">
                Zadovoljni Klijenti — Izrada Sajtova
              </span>
              <h2 className="text-3xl md:text-6xl font-black text-slate-900 italic tracking-tighter mb-6">
                Sajtovi koji <span className="duck-gradient-text">rangiraju.</span>
              </h2>
              <p className="text-slate-500 text-lg max-w-2xl mx-auto">
                Svaki sajt koji pravimo je SEO optimizovan od prvog dana — ključne reči, meta opisi, ultrabrzo učitavanje i sve što Google traži za najviše pozicije.
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-6">
              {websitePortfolio.map((site, i) => (
                <AnimatedSection key={site.name} delay={i * 100}>
                  <div className="bento-card p-8 md:p-10 rounded-[2.5rem] h-full flex flex-col">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-black text-slate-800 mb-2">{site.name}</h3>
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className={`${site.techColor} text-white text-[10px] font-black uppercase px-3 py-1 rounded-full tracking-widest`}>
                            {site.tech}
                          </span>
                          <span className={`${site.tagColor} text-white text-[10px] font-black uppercase px-3 py-1 rounded-full tracking-widest`}>
                            {site.seoTag}
                          </span>
                        </div>
                      </div>
                      <div className="w-16 h-14 bg-white rounded-xl border border-slate-100 flex items-center justify-center flex-shrink-0 overflow-hidden p-1">
                        <Image
                          src={site.logo}
                          alt={`${site.name} logo`}
                          width={64}
                          height={56}
                          className="object-contain w-full h-full"
                        />
                      </div>
                    </div>
                    <p className="text-slate-600 leading-relaxed mb-8 flex-1">{site.description}</p>
                    {site.url ? (
                      <a
                        href={site.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 text-teal-600 font-black text-sm uppercase tracking-widest hover:gap-5 transition-all"
                      >
                        Poseti sajt uživo
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-2 text-slate-400 font-black text-sm uppercase tracking-widest">
                        Sajt u izradi
                      </span>
                    )}
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ── POHVALE KLIJENATA ── */}
        <section className="py-20 px-6 md:px-12 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block bg-yellow-50 text-yellow-700 text-[10px] font-black uppercase px-4 py-2 rounded-full tracking-widest mb-6">
                ★★★★★ Pohvale Klijenata
              </span>
              <h2 className="text-3xl md:text-6xl font-black text-slate-900 italic tracking-tighter mb-6">
                Šta kažu naši <span className="duck-gradient-text">klijenti?</span>
              </h2>
              <p className="text-slate-500 text-lg">
                Naši klijenti su uvek na <strong>prvom ili drugom mestu Google pretrage</strong>. Ovo su njihove reči.
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pohvale.map((review, i) => (
                <AnimatedSection key={i} delay={i * 80}>
                  <div className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                    <div className="flex gap-0.5 mb-6">
                      {[...Array(review.stars)].map((_, j) => (
                        <span key={j} className="text-yellow-400 text-xl">★</span>
                      ))}
                    </div>
                    <blockquote className="text-slate-700 leading-relaxed italic flex-1 mb-6 text-sm md:text-base">
                      "{review.text}"
                    </blockquote>
                    <div className="flex items-center justify-between border-t border-slate-100 pt-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-blue-600 rounded-full flex items-center justify-center text-white font-black text-sm">
                          {review.author.charAt(0)}
                        </div>
                        <div>
                          <p className="font-black text-slate-800 text-sm">{review.author}</p>
                          <p className="text-slate-400 text-xs italic">{review.role}</p>
                        </div>
                      </div>
                      <span className="text-[10px] font-black uppercase text-teal-600 bg-teal-50 px-3 py-1 rounded-full tracking-wide">
                        {review.service}
                      </span>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ── CENE ── */}
        <section id="cene" className="py-20 px-6 md:px-12 bg-white">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection className="text-center mb-16">
              <span className="inline-block bg-teal-50 text-teal-700 text-[10px] font-black uppercase px-4 py-2 rounded-full tracking-widest mb-6">
                Transparentno Formiranje Cena
              </span>
              <h2 className="text-3xl md:text-6xl font-black text-slate-900 italic tracking-tighter mb-6">
                Koliko košta<br /><span className="duck-gradient-text">vaš uspeh?</span>
              </h2>
              <p className="text-slate-500 text-lg max-w-2xl mx-auto">
                Cene naših usluga zavise od obima posla i zahteva svakog klijenta. Nema skrivenih troškova — samo transparentnost i rezultati.
              </p>
            </AnimatedSection>

            <AnimatedSection>
              <div className="bg-slate-900 rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden">
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-teal-500/10 blur-3xl" />
                <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-500/10 blur-3xl" />

                <div className="relative z-10">
                  <h3 className="text-2xl md:text-4xl font-black mb-8 italic">Kako formiramo cenu?</h3>

                  <div className="grid md:grid-cols-3 gap-6 mb-12">
                    {[
                      {
                        step: '01',
                        title: 'Postavljamo pitanja',
                        desc: 'Razgovaramo o vašim ciljevima, industriji, ciljnoj publici i očekivanjima. Svaki biznis je jedinstven.',
                        color: 'from-teal-500 to-teal-600',
                      },
                      {
                        step: '02',
                        title: 'Analiza tržišta',
                        desc: 'Analiziramo vaše tržište, konkurenciju, ključne reči i potencijal za rast. Dajemo vam realne projekcije.',
                        color: 'from-blue-500 to-blue-600',
                      },
                      {
                        step: '03',
                        title: 'Cena + Plan',
                        desc: 'Uz cenu dobijate kompletan plan kampanje — šta radimo, kako radimo i kada možete očekivati rezultate.',
                        color: 'from-purple-500 to-purple-600',
                      },
                    ].map((item) => (
                      <div key={item.step} className="bg-white/5 rounded-2xl p-6 border border-white/10">
                        <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center text-white font-black text-lg mb-4`}>
                          {item.step}
                        </div>
                        <h4 className="font-black text-white mb-2">{item.title}</h4>
                        <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 mb-8">
                    <p className="text-slate-300 text-base md:text-lg leading-relaxed italic text-center">
                      "Verujemo da svaki biznis zaslužuje fer i prilagođenu cenu. Zato ne naplaćujemo 'pakete'
                      koji ne odgovaraju vašim stvarnim potrebama — analiziramo situaciju i dajemo preciznu
                      ponudu sa kompletnim planom reklamiranja."
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                      href="#kontakt"
                      className="btn-duck text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-center"
                    >
                      Zatraži Besplatnu Analizu
                    </Link>
                    <a
                      href="tel:+381643877524"
                      className="bg-white/10 hover:bg-white/20 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-center transition border border-white/20"
                    >
                      📞 Pozovite Nas
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ── O NAMA ── */}
        <section id="o-nama" className="py-20 px-6 md:px-12 bg-slate-900 text-white overflow-hidden relative">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection className="relative">
              <Image
                src="/img/andjela-i-nikola-u-radnoj-sobi-1.png"
                alt="Anđela i Nikola Stanković — Google Ads stručnjaci, Duck Family Team"
                width={600}
                height={500}
                className="rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border-4 border-white/10 relative z-20 w-full object-cover"
              />
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-teal-500/20 blur-3xl" />
            </AnimatedSection>
            <AnimatedSection delay={100} className="space-y-6 md:space-y-8">
              <h2 className="text-3xl md:text-6xl font-black italic tracking-tighter">
                Nismo samo agencija.<br />
                <span className="text-teal-400">Mi smo Vaš tim.</span>
              </h2>
              <p className="text-slate-400 text-base md:text-lg leading-relaxed italic">
                "Duck" nije samo nadimak moje porodice, to je obećanje o lojalnosti. Dok drugi agencijski giganti vide samo vaš budžet, mi vidimo vaš san i trud.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <Image
                  src="/img/nikola-stankovic-slika-sertifikata.png"
                  alt="Nikola Stanković — Sertifikovani Google Ads stručnjak"
                  width={300}
                  height={200}
                  className="rounded-xl opacity-70 hover:opacity-100 transition duration-500 border border-white/10 w-full object-cover"
                />
                <Image
                  src="/img/andjela-slika-sertifikata.png"
                  alt="Anđela Stanković — Google Ads i GA4 analitika ekspert"
                  width={300}
                  height={200}
                  className="rounded-xl opacity-70 hover:opacity-100 transition duration-500 border border-white/10 w-full object-cover"
                />
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-20 px-6 md:px-12 bg-white">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 text-center italic mb-12">
                Ekspertski Odgovori
              </h2>
              <FaqAccordion />
            </AnimatedSection>
          </div>
        </section>

        {/* ── BLOG PREVIEW ── */}
        <section id="blog" className="py-20 px-6 md:px-12 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div className="max-w-2xl">
                <h2 className="text-3xl md:text-6xl font-black text-slate-900 italic tracking-tighter mb-4">
                  Marketing Bez Filtera
                </h2>
                <p className="text-slate-500 text-lg italic font-medium">
                  Delimo strategije koje testiramo svakodnevno. Nema pametovanja, samo čisti podaci.
                </p>
              </div>
              <Link
                href="/blog"
                className="bg-white border border-slate-200 text-slate-700 px-8 py-4 rounded-2xl font-bold hover:bg-slate-100 transition whitespace-nowrap"
              >
                Vidi sve tekstove
              </Link>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  href: '/blog/google-ads-trosak',
                  img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
                  tag: 'Google Ads',
                  tagColor: 'bg-teal-500',
                  title: 'Zašto vaši oglasi troše novac bez konverzija?',
                  excerpt: 'Otkrijte 3 najčešće greške koje prave početnici i kako da podesite Smart Bidding...',
                },
                {
                  href: '/blog/seo-2026',
                  img: 'https://www.vazoola.com/hs-fs/hubfs/The%20SEO%20Ecosystem%20in%202026.webp?width=864&height=486&name=The%20SEO%20Ecosystem%20in%202026.webp',
                  tag: 'SEO',
                  tagColor: 'bg-blue-600',
                  title: 'SEO u 2026: Da li su ključne reči i dalje bitne?',
                  excerpt: 'Fokus se pomera sa kucanja reči na nameru korisnika. Saznajte kako da dominirate...',
                },
                {
                  href: '/blog/astro-sajtovi',
                  img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800',
                  tag: 'Web Development',
                  tagColor: 'bg-orange-600',
                  title: 'Astro Sajtovi: Zašto Su Trenutno Najbolji na Svetu?',
                  excerpt: 'Island Architecture, nulti JavaScript i Lighthouse score 100. Otkrijte zašto Google voli Astro sajtove...',
                },
              ].map((post, i) => (
                <AnimatedSection key={post.title} delay={i * 100}>
                  <article className="bg-white rounded-[2.5rem] overflow-hidden flex flex-col shadow-sm hover:shadow-xl border border-slate-100 hover:-translate-y-2 transition-all duration-300 h-full">
                    <div className="h-56 bg-slate-200 relative overflow-hidden">
                      <Image
                        src={post.img}
                        alt={post.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <span className={`absolute top-4 left-4 ${post.tagColor} text-white text-[10px] font-black uppercase px-3 py-1.5 rounded-full tracking-widest italic`}>
                        {post.tag}
                      </span>
                    </div>
                    <div className="p-8 flex-1 flex flex-col">
                      <h3 className="text-xl font-black text-slate-800 mb-4 leading-tight">{post.title}</h3>
                      <p className="text-slate-500 text-sm italic mb-6 flex-1">{post.excerpt}</p>
                      <Link
                        href={post.href}
                        className="text-[#248a84] font-black text-xs uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all"
                      >
                        Pročitaj više
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </div>
                  </article>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <ChatBot />
    </>
  )
}
