import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'GA4 vodič za preduzetnike: Šta zapravo treba da gledate?',
  description:
    'Ne dozvolite da vas gomila brojeva zbuni. Fokusirajte se na ove 3 metrike koje direktno pokazuju koliko zarađujete.',
  alternates: {
    canonical: 'https://www.duckfamilyteam.online/blog/ga4-vodic',
  },
  openGraph: {
    title: 'GA4 vodič: Šta zapravo treba da gledate? | Duck Family Team',
    description: 'Fokusirajte se na 3 metrike koje direktno pokazuju koliko zarađujete.',
    url: 'https://www.duckfamilyteam.online/blog/ga4-vodic',
    type: 'article',
    publishedTime: '2026-02-28',
    authors: ['Duck Family Team'],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200',
        width: 1200,
        height: 630,
        alt: 'GA4 analitika',
      },
    ],
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'GA4 vodič za preduzetnike: Šta zapravo treba da gledate?',
  description:
    'Ne dozvolite da vas gomila brojeva zbuni. Fokusirajte se na ove 3 metrike koje direktno pokazuju koliko zarađujete.',
  image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200',
  datePublished: '2026-02-28',
  dateModified: '2026-02-28',
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
    '@id': 'https://www.duckfamilyteam.online/blog/ga4-vodic',
  },
}

export default function GA4VodicPage() {
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
            <span className="text-slate-600">GA4 Vodič</span>
          </nav>

          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <span className="bg-slate-100 text-slate-900 text-[10px] md:text-[11px] font-extrabold uppercase px-4 py-1.5 md:px-5 md:py-2 rounded-full tracking-wider italic">
              Analitika
            </span>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mt-6 mb-6 md:mb-8 leading-relaxed px-2">
              GA4 vodič za preduzetnike:{' '}
              <span className="duck-gradient-text italic">Šta zapravo treba da gledate?</span>
            </h1>
            <p className="text-lg md:text-2xl text-slate-500 italic font-medium max-w-2xl mx-auto leading-relaxed">
              Google Analytics 4 je lavirint brojeva. Mi vam pokazujemo samo ono što ZAPRAVO utiče na profit.
            </p>
            <div className="flex items-center justify-center gap-4 mt-6 text-[11px] text-slate-400 font-bold uppercase tracking-widest">
              <span>Duck Family Team</span>
              <span>·</span>
              <time dateTime="2026-02-28">28. Februar 2026.</time>
              <span>·</span>
              <span>6 min čitanja</span>
            </div>
          </div>

          <Image
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200"
            alt="GA4 analitika — Duck Family Team"
            width={1200}
            height={600}
            className="w-full h-[250px] md:h-[500px] object-cover rounded-[2rem] md:rounded-[3.5rem] mb-12 md:mb-16 shadow-2xl"
            priority
          />

          {/* Content */}
          <div className="bg-white border border-black/5 rounded-[1.5rem] md:rounded-[2.5rem] p-6 md:p-12 lg:p-16 space-y-10 md:space-y-12 text-slate-700 text-base md:text-xl">
            <p className="leading-relaxed">
              Otvorite Google Analytics 4. Šta vidite?{' '}
              <strong className="text-slate-900 font-bold">Haos.</strong> Grafovi, tabele, procentualni pomaci koji ne znače apsolutno ništa vašem budžetu. Većina ljudi se tu izgubi i odustane.
            </p>
            <p className="leading-relaxed">
              Ali vi niste tu da budete data scientist — vi ste tu da{' '}
              <strong className="text-red-600 font-bold">zarađujete novac</strong>. Zato ćemo vam objasniti 3 metrike koje morate pratiti ako želite da znate koliko vam marketing ZAISTA donosi.
            </p>

            <div className="space-y-4 md:space-y-6">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 italic uppercase leading-tight">
                1. Conversion Rate (Stopa konverzije)
              </h2>
              <p className="leading-relaxed">
                Ovo je<strong className="text-slate-900 font-bold"> najvažnija metrika</strong>. Period. Zašto? Zato što vam kaže:{' '}
                <span className="text-teal-600 font-bold">"Koliko ljudi koji dođu na sajt ZAPRAVO nešto uradi?"</span>
              </p>
              <p className="leading-relaxed">
                Možete imati 10.000 posetilaca mesečno, ali ako nijedan ne popuni formular, ne nazove, ili ne kupi — vi trošite pare na vetar.
              </p>
              <div className="bg-teal-50 p-5 md:p-8 border-l-4 border-teal-500 italic rounded-r-xl md:rounded-r-2xl shadow-sm">
                <p className="text-slate-800 m-0">
                  <strong className="text-teal-700 uppercase text-xs md:text-sm tracking-widest not-italic block mb-2">
                    Gde naći:
                  </strong>
                  Reports → Engagement → Conversions. Podešavate šta je "konverzija" za vas (klik na telefon, kupovina, prijava na newsletter).
                </p>
              </div>
              <div className="bg-slate-50 p-5 md:p-8 border-l-4 border-blue-500 italic rounded-r-xl md:rounded-r-2xl shadow-sm">
                <p className="text-slate-800 m-0">
                  <strong className="text-blue-700 uppercase text-xs md:text-sm tracking-widest not-italic block mb-2">
                    Šta je dobro?
                  </strong>
                  Zavisi od industrije, ali generalno: 2-5% je solidno za e-commerce, 5-10% za B2B usluge.
                </p>
              </div>
            </div>

            <div className="space-y-4 md:space-y-6">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 italic uppercase leading-tight">
                2. Traffic Source (Odakle dolaze posetitelji)
              </h2>
              <p className="leading-relaxed">
                Da li vaš profit dolazi iz Google Ads-a? Organskog SEO-a? Instagrama? Ako ne znate ovo,{' '}
                <strong className="text-red-600 font-bold">gubite novac tamo gde ne treba</strong>.
              </p>
              <p className="leading-relaxed">
                GA4 vam pokazuje koje kanale dovode najviše korisnika koji se <strong className="text-slate-900 font-bold">konvertuju</strong> — ne samo klikaju.
              </p>
              <div className="bg-slate-50 p-5 md:p-8 border-l-4 border-slate-500 italic rounded-r-xl md:rounded-r-2xl shadow-sm">
                <p className="text-slate-800 m-0">
                  <strong className="text-slate-700 uppercase text-xs md:text-sm tracking-widest not-italic block mb-2">
                    Gde naći:
                  </strong>
                  Reports → Acquisition → Traffic acquisition. Filtrirajte po "konverzijama", ne po broju posetilaca.
                </p>
              </div>
              <p className="leading-relaxed">
                Praktičan primer: Otkrijete da Instagram donosi 1.000 klikova, ali 0 prodaja. Google Ads donosi 200 klikova, ali 15 prodaja. Gde ćete uložiti budžet sledeći mesec?
              </p>
            </div>

            <div className="space-y-4 md:space-y-6">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 italic uppercase leading-tight">
                3. Event Tracking (Praćenje akcija korisnika)
              </h2>
              <p className="leading-relaxed">
                GA4 nije kao stari Universal Analytics. Sve je bazirano na <strong className="text-slate-900 font-bold">"Events"</strong> (događajima).
              </p>
              <p className="leading-relaxed">
                To znači da možete da pratite bukvalno SVAKI klik koji korisnik napravi:
              </p>
              <ul className="space-y-3 pl-6 list-none">
                <li className="flex items-start gap-3">
                  <span className="text-teal-500 font-black text-2xl leading-none">→</span>
                  <span>Klik na telefon ("Click to Call")</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-500 font-black text-2xl leading-none">→</span>
                  <span>Preuzimanje PDF-a sa cenovnikom</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-500 font-black text-2xl leading-none">→</span>
                  <span>Koliko daleko su korisnici skrolovali stranicu</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-500 font-black text-2xl leading-none">→</span>
                  <span>Reprodukcija video-snimka</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-500 font-black text-2xl leading-none">→</span>
                  <span>Klik na CTA dugme ("Zakaži konsultaciju")</span>
                </li>
              </ul>
              <p className="leading-relaxed">
                Ovo vam daje <strong className="text-teal-600 font-bold">rendgen</strong> ponašanja korisnika. Vidite TAČNO gde oni gube interesovanje i odlaze sa sajta.
              </p>
              <div className="bg-teal-50 p-5 md:p-8 border-l-4 border-teal-500 italic rounded-r-xl md:rounded-r-2xl shadow-sm">
                <p className="text-slate-800 m-0">
                  <strong className="text-teal-700 uppercase text-xs md:text-sm tracking-widest not-italic block mb-2">
                    Gde naći:
                  </strong>
                  Reports → Engagement → Events. Možete kreirati custom event-e kroz Google Tag Manager.
                </p>
              </div>
            </div>

            <div className="space-y-4 md:space-y-6">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 italic uppercase leading-tight">
                Bonus: ROI (Return on Investment)
              </h2>
              <p className="leading-relaxed">
                Uložili ste 1.000€ u marketing. Dobili ste 5.000€ prodaje. <strong className="text-teal-600 font-bold">Profit = 5x.</strong> To je jedini broj koji vaš direktor zaista želi da vidi.
              </p>
              <p className="leading-relaxed">
                GA4 može automatski da prati koliko donosi svaki izvor saobraćaja ako ispravno podesite{' '}
                <strong className="text-slate-900 font-bold">Enhanced E-commerce</strong> ili{' '}
                <strong className="text-slate-900 font-bold">konverzije sa vrednošću</strong>.
              </p>
              <div className="bg-slate-50 p-5 md:p-8 border-l-4 border-blue-500 italic rounded-r-xl md:rounded-r-2xl shadow-sm">
                <p className="text-slate-800 m-0">
                  <strong className="text-blue-700 uppercase text-xs md:text-sm tracking-widest not-italic block mb-2">
                    Gde naći:
                  </strong>
                  Reports → Monetization → Purchase revenue (ako je e-commerce), ili kreirajte custom report sa vrednošću konverzije.
                </p>
              </div>
            </div>

            <div className="space-y-4 md:space-y-6">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 italic uppercase leading-tight">
                Šta NE treba da gledate (bar ne svaki dan)
              </h2>
              <p className="leading-relaxed text-slate-500">
                Izbegavajte opsesiju ovim metrikama — one ne donose direktan profit:
              </p>
              <ul className="space-y-3 pl-6 list-none">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-black text-xl leading-none">✗</span>
                  <span className="text-slate-500">Bounce Rate (napuštena, jer GA4 ne meri isto što i UA)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-black text-xl leading-none">✗</span>
                  <span className="text-slate-500">Session Duration (retko relevantno za prodaju)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-black text-xl leading-none">✗</span>
                  <span className="text-slate-500">Page Views (samo broj — ne znači ništa bez konteksta)</span>
                </li>
              </ul>
              <p className="leading-relaxed">
                <strong className="text-slate-900 font-bold">Pravilo:</strong> Ako metrika ne može da se pretvori u dinare, euro ili dolare — nije bitna.
              </p>
            </div>

            <hr className="border-slate-100 my-8 md:my-12" />

            {/* CTA */}
            <div className="text-center py-4 md:py-6">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 mb-6 leading-tight">
                Ne znate kako da podesite GA4?
              </h3>
              <p className="mb-8 md:mb-10 text-slate-500 text-lg md:text-xl">
                Mi podešavamo kompletno praćenje, od instalacije do custom dashboarda koji vam pokazuje samo ono što je bitno.
              </p>
              <Link
                href="/#kontakt"
                className="btn-duck text-white px-8 py-5 md:px-10 md:py-6 rounded-2xl font-black uppercase tracking-widest inline-block shadow-2xl hover:scale-105 transform transition text-sm md:text-base"
              >
                Podesi GA4 za Mene
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
