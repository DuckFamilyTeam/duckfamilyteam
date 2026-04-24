import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AnimatedSection from '@/components/AnimatedSection'
import FaqAccordion from '@/components/FaqAccordion'
import ChatBot from '@/components/ChatBot'

export const metadata: Metadata = {
  title: 'Google Ads Agencija Srbija | SEO & GA4 Analitika | Duck Family Team',
  description:
    'Sertifikovani Google Ads stručnjaci. Povećajte prodaju uz precizno targetiranje i naprednu GA4 analitiku. Duck Family Team — Vaš partner za ROI.',
  alternates: { canonical: 'https://www.duckfamilyteam.online/' },
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

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
                Ne trošite budžet na klikove koji ne kupuju. Mi kreiramo Google Ads kampanje zasnovane na{' '}
                <strong>čistim podacima</strong> i SEO strategije koje donose profit.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#kontakt"
                  className="btn-duck text-white px-8 md:px-10 py-4 md:py-5 rounded-2xl font-bold text-lg text-center"
                >
                  Besplatna Analiza Budžeta
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
                    <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">Mesečni ROI</p>
                    <p className="text-4xl font-black text-slate-800 tracking-tighter">+482%</p>
                  </div>
                  <div className="flex gap-1 items-end h-20">
                    <div className="w-3 bg-slate-100 rounded-t-lg h-[40%]" />
                    <div className="w-3 bg-slate-100 rounded-t-lg h-[60%]" />
                    <div className="w-3 bg-teal-500 rounded-t-lg h-[90%]" />
                    <div className="w-3 bg-blue-600 rounded-t-lg h-[100%]" />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between p-4 bg-slate-50 rounded-2xl">
                    <span className="font-bold text-slate-600 text-sm italic">Google Search Ads</span>
                    <span className="font-black text-teal-600 uppercase text-sm">Aktivan</span>
                  </div>
                  <div className="flex justify-between p-4 bg-slate-50 rounded-2xl">
                    <span className="font-bold text-slate-600 text-sm italic">SEO Ranking</span>
                    <span className="font-black text-blue-600 uppercase text-sm">TOP #3</span>
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
                Specijalistički Marketing
              </h2>
              <p className="text-slate-500 text-lg">
                Od istraživanja ključnih reči do tehničkog SEO-a i automatizovanih oglasa. Pokrivamo kompletan prodajni levak.
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-12 gap-6">
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

              <AnimatedSection delay={100} className="md:col-span-4 bento-card p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] flex flex-col justify-between">
                <div>
                  <div className="h-14 w-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-8">
                    <svg className="w-7 h-7 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-black text-slate-800 mb-4">SEO koji radi</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Tehnički SEO + quality content + linkbuilding = dugoročan besplatan saobraćaj.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={200} className="md:col-span-4 bento-card p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] flex flex-col justify-between">
                <div>
                  <div className="h-14 w-14 bg-purple-50 rounded-2xl flex items-center justify-center mb-8">
                    <svg className="w-7 h-7 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-black text-slate-800 mb-4">GA4 Analitika</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Pratimo svaki klik. Conversion tracking, event setup, i custom dashboards.
                  </p>
                </div>
              </AnimatedSection>

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
              {/* Korak 1 */}
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
                    Analiziramo vaš biznis model, konkurenciju i ciljnu grupu. Identifikujemo ključne reči sa visokom namerom kupovine.
                  </p>
                </div>
              </AnimatedSection>

              {/* Korak 2 */}
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
                    Kreiramo kampanje sa preciznim targetiranjem. Postavljamo GA4 tracking, konverzije i custom dashboards za potpuni uvid.
                  </p>
                </div>
              </AnimatedSection>

              {/* Korak 3 */}
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

              {/* Korak 4 */}
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

        {/* ── PORTFOLIO (CASE STUDY) ── */}
        <section id="portfolio" className="py-20 px-6 md:px-12 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-3xl md:text-6xl font-black italic tracking-tighter mb-6">
                Projekti koji <span className="text-teal-400">pričaju sami.</span>
              </h2>
              <p className="text-slate-400 text-lg">
                Realni rezultati. Bez ulepšavanja. Čisti podaci.
              </p>
            </AnimatedSection>

            <div className="max-w-3xl mx-auto">
              <AnimatedSection className="bg-white/5 backdrop-blur-sm rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-10 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-start gap-4 mb-6">
                  <Image
                    src="/img/vetar1.jpg"
                    alt="Dubinsko Pranje Vetar - Sirinićka Župa"
                    width={80}
                    height={80}
                    className="rounded-xl object-cover"
                  />
                  <div>
                    <h3 className="text-2xl md:text-3xl font-black mb-1">Dubinsko Pranje Vetar</h3>
                    <p className="text-slate-400 text-sm font-bold uppercase tracking-widest">Sirinićka Župa i okolina | Uslužna delatnost</p>
                  </div>
                </div>
                <p className="text-slate-300 leading-relaxed mb-8">
                  Kompletan digitalni branding i web prisustvo za lokalni biznis u Sirinićkoj Župi. Moderni, responsive sajt sa optimizovanim SEO-om za lokalno tržište i jasnim pozivom na akciju.
                </p>
                <a
                  href="https://dubinsko-pranje-vetar.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-teal-400 font-black text-sm uppercase tracking-widest hover:gap-5 transition-all"
                >
                  Vidi projekat uživo
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </AnimatedSection>
            </div>
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
                  href: '/blog',
                  img: 'https://www.vazoola.com/hs-fs/hubfs/The%20SEO%20Ecosystem%20in%202026.webp?width=864&height=486&name=The%20SEO%20Ecosystem%20in%202026.webp',
                  tag: 'SEO',
                  tagColor: 'bg-blue-600',
                  title: 'SEO u 2026: Da li su ključne reči i dalje bitne?',
                  excerpt: 'Fokus se pomera sa kucanja reči na nameru korisnika. Saznajte kako da dominirate...',
                },
                {
                  href: '/blog',
                  img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
                  tag: 'Analitika',
                  tagColor: 'bg-slate-900',
                  title: 'GA4 vodič: Šta zapravo treba da gledate?',
                  excerpt: 'Ne dozvolite da vas brojevi zbune. Fokusirajte se na ove 3 metrike koje pokazuju profit...',
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
      
      {/* AI ChatBot */}
      <ChatBot />
    </>
  )
}
