import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Zašto Google oglasi troše novac bez prodaje?',
  description:
    'Saznajte 3 glavna razloga zašto vaši Google oglasi ne donose konverzije i kako da prestanete da gubite budžet na pogrešne klikove.',
  alternates: {
    canonical: 'https://www.duckfamilyteam.online/blog/google-ads-trosak',
  },
  openGraph: {
    title: 'Zašto Google oglasi troše novac bez prodaje? | Duck Family Team',
    description: '3 glavna razloga zašto vaši Google oglasi ne donose konverzije.',
    url: 'https://www.duckfamilyteam.online/blog/google-ads-trosak',
    type: 'article',
    publishedTime: '2026-04-01',
    authors: ['Duck Family Team'],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
        width: 1200,
        height: 630,
        alt: 'Google Ads analitika',
      },
    ],
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Zašto vaši Google oglasi troše novac bez konverzija?',
  description:
    '3 glavna razloga zašto vaši Google oglasi ne donose konverzije i kako da prestanete da gubite budžet.',
  image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
  datePublished: '2026-04-01',
  dateModified: '2026-04-01',
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

export default function GoogleAdsTrosakPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
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
            <span className="text-slate-600">Google Ads Trošak</span>
          </nav>

          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <span className="bg-teal-50 text-teal-700 text-[10px] md:text-[11px] font-extrabold uppercase px-4 py-1.5 md:px-5 md:py-2 rounded-full tracking-wider italic">
              Ekspertska Analiza
            </span>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mt-6 mb-6 md:mb-8 leading-relaxed px-2">
              Zašto vaši Google oglasi{' '}
              <span className="duck-gradient-text italic">troše novac</span> bez konverzija?
            </h1>
            <p className="text-lg md:text-2xl text-slate-500 italic font-medium max-w-2xl mx-auto leading-relaxed">
              Klikovi stižu, budžet nestaje, ali telefon ne zvoni? Evo surove istine o tome gde grešite.
            </p>
            <div className="flex items-center justify-center gap-4 mt-6 text-[11px] text-slate-400 font-bold uppercase tracking-widest">
              <span>Duck Family Team</span>
              <span>·</span>
              <time dateTime="2026-04-01">1. April 2026.</time>
              <span>·</span>
              <span>5 min čitanja</span>
            </div>
          </div>

          <Image
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200"
            alt="Google Ads analitika — Duck Family Team"
            width={1200}
            height={600}
            className="w-full h-[250px] md:h-[500px] object-cover rounded-[2rem] md:rounded-[3.5rem] mb-12 md:mb-16 shadow-2xl"
            priority
          />

          {/* Content */}
          <div className="bg-white border border-black/5 rounded-[1.5rem] md:rounded-[2.5rem] p-6 md:p-12 lg:p-16 space-y-10 md:space-y-12 text-slate-700 text-base md:text-xl">
            <p className="leading-relaxed">
              Mnogi vlasnici biznisa uđu u svet Google Ads-a sa uverenjem:{' '}
              <strong className="text-slate-900 font-bold">"Ako platim klik, dobiću kupca."</strong> Realnost je često drugačija. Google je mašina koja će vrlo rado potrošiti svaki vaš cent ako mu precizno ne kažete šta želite.
            </p>

            <div className="space-y-4 md:space-y-6">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 italic uppercase leading-tight">
                1. Ne gađate nameru, već samo reč
              </h2>
              <p className="leading-relaxed">
                Ovo je najčešća greška. Ako prodajete "luksuzne satove", a vaš oglas se pojavljuje za pretragu "kako popraviti stari sat", vi gubite novac. Vi ste platili klik osobi koja želi{' '}
                <strong className="text-slate-900 font-bold">besplatan savet</strong>, a ne{' '}
                <strong className="text-slate-900 font-bold">nov proizvod</strong>.
              </p>
              <div className="bg-slate-50 p-5 md:p-8 border-l-4 border-teal-500 italic rounded-r-xl md:rounded-r-2xl shadow-sm">
                <p className="text-slate-800 m-0">
                  <strong className="text-teal-700 uppercase text-xs md:text-sm tracking-widest not-italic block mb-2">
                    Rešenje:
                  </strong>
                  Korišćenje negativnih ključnih reči i fokus na "Buyer Intent" termine (npr. "prodaja satova cena" umesto samo "satovi").
                </p>
              </div>
            </div>

            <div className="space-y-4 md:space-y-6">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 italic uppercase leading-tight">
                2. Landing stranica je "hladan tuš"
              </h2>
              <p className="leading-relaxed">
                Zamislite da kliknete na oglas za "dubinsko pranje tepiha", a sajt vas odvede na početnu stranu gde se priča o istoriji firme i čišćenju prozora.{' '}
                <span className="text-red-600 font-bold">Kupac odlazi u roku od 3 sekunde.</span>
              </p>
              <p className="leading-relaxed">
                Oglas je obećanje, a vaša stranica mora biti{' '}
                <strong className="text-slate-900 font-bold">ispunjenje tog obećanja</strong>. Ako stranica nije optimizovana za mobilne telefone ili je prekomplikovana, konverzija umire.
              </p>
              <div className="bg-slate-50 p-5 md:p-8 border-l-4 border-blue-500 italic rounded-r-xl md:rounded-r-2xl shadow-sm">
                <p className="text-slate-800 m-0">
                  <strong className="text-blue-700 uppercase text-xs md:text-sm tracking-widest not-italic block mb-2">
                    Rešenje:
                  </strong>
                  Svaki oglas treba da vodi na posebnu landing stranicu koja odgovara tačno na ono što je korisnik tražio. Brzina učitavanja ispod 2 sekunde je obavezna.
                </p>
              </div>
            </div>

            <div className="space-y-4 md:space-y-6">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 italic uppercase leading-tight">
                3. Algoritam ne zna šta je za vas uspeh
              </h2>
              <p className="leading-relaxed">
                Ako niste ispravno podesili{' '}
                <strong className="text-slate-900 font-bold">Conversion Tracking (GA4)</strong>, Google-ov AI luta u mraku. On optimizuje kampanju za klikove, a ne za prodaje. Rezultat? Mnogo saobraćaja, ali nula profita.
              </p>
              <div className="bg-slate-50 p-5 md:p-8 border-l-4 border-teal-500 italic rounded-r-xl md:rounded-r-2xl shadow-sm">
                <p className="text-slate-800 m-0">
                  <strong className="text-teal-700 uppercase text-xs md:text-sm tracking-widest not-italic block mb-2">
                    Rešenje:
                  </strong>
                  Podešavanje GA4 konverzija putem Google Tag Manager-a. Pratite svaki klik na telefon, svaki popunjen formular, svaku kupovinu.
                </p>
              </div>
            </div>

            <hr className="border-slate-100 my-8 md:my-12" />

            {/* CTA */}
            <div className="text-center py-4 md:py-6">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 mb-6 leading-tight">
                Dosta vam je bacanja para u vetar?
              </h3>
              <p className="mb-8 md:mb-10 text-slate-500 text-lg md:text-xl">
                Dozvolite nam da uradimo besplatan audit vašeg naloga i pokažemo vam gde tačno curi budžet.
              </p>
              <Link
                href="/#kontakt"
                className="btn-duck text-white px-8 py-5 md:px-10 md:py-6 rounded-2xl font-black uppercase tracking-widest inline-block shadow-2xl hover:scale-105 transform transition text-sm md:text-base"
              >
                Analizirajte Moj Budžet
              </Link>
            </div>
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
