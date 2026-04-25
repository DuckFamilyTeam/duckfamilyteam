import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'SEO u 2026: Da li su ključne reči i dalje bitne?',
  description:
    'Google algoritam se menja. Fokus se pomera sa "kucanja reči" na "nameru korisnika". Saznajte kako da dominirate u SEO-u.',
  alternates: {
    canonical: 'https://www.duckfamilyteam.online/blog/seo-2026',
  },
  openGraph: {
    title: 'SEO u 2026: Da li su ključne reči i dalje bitne? | Duck Family Team',
    description: 'Google algoritam se menja. Fokus se pomera na nameru korisnika.',
    url: 'https://www.duckfamilyteam.online/blog/seo-2026',
    type: 'article',
    publishedTime: '2026-03-15',
    authors: ['Duck Family Team'],
    images: [
      {
        url: 'https://www.vazoola.com/hs-fs/hubfs/The%20SEO%20Ecosystem%20in%202026.webp?width=1200&height=630&name=The%20SEO%20Ecosystem%20in%202026.webp',
        width: 1200,
        height: 630,
        alt: 'SEO u 2026',
      },
    ],
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'SEO u 2026: Da li su ključne reči i dalje bitne?',
  description:
    'Google algoritam se menja. Fokus se pomera sa "kucanja reči" na "nameru korisnika". Saznajte kako da dominirate.',
  image: 'https://www.vazoola.com/hs-fs/hubfs/The%20SEO%20Ecosystem%20in%202026.webp?width=1200&height=630&name=The%20SEO%20Ecosystem%20in%202026.webp',
  datePublished: '2026-03-15',
  dateModified: '2026-03-15',
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
    '@id': 'https://www.duckfamilyteam.online/blog/seo-2026',
  },
}

export default function SEO2026Page() {
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
            <span className="text-slate-600">SEO u 2026</span>
          </nav>

          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <span className="bg-blue-50 text-blue-700 text-[10px] md:text-[11px] font-extrabold uppercase px-4 py-1.5 md:px-5 md:py-2 rounded-full tracking-wider italic">
              SEO Strategija
            </span>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mt-6 mb-6 md:mb-8 leading-relaxed px-2">
              SEO u 2026:{' '}
              <span className="duck-gradient-text italic">Da li su ključne reči</span> i dalje bitne?
            </h1>
            <p className="text-lg md:text-2xl text-slate-500 italic font-medium max-w-2xl mx-auto leading-relaxed">
              Google se menja. AI preuzima kontrolu. Evo šta to znači za vašu strategiju rangiranja.
            </p>
            <div className="flex items-center justify-center gap-4 mt-6 text-[11px] text-slate-400 font-bold uppercase tracking-widest">
              <span>Duck Family Team</span>
              <span>·</span>
              <time dateTime="2026-03-15">15. Mart 2026.</time>
              <span>·</span>
              <span>7 min čitanja</span>
            </div>
          </div>

          <Image
            src="https://www.vazoola.com/hs-fs/hubfs/The%20SEO%20Ecosystem%20in%202026.webp?width=1200&height=630&name=The%20SEO%20Ecosystem%20in%202026.webp"
            alt="SEO u 2026 — Duck Family Team"
            width={1200}
            height={600}
            className="w-full h-[250px] md:h-[500px] object-cover rounded-[2rem] md:rounded-[3.5rem] mb-12 md:mb-16 shadow-2xl"
            priority
          />

          {/* Content */}
          <div className="bg-white border border-black/5 rounded-[1.5rem] md:rounded-[2.5rem] p-6 md:p-12 lg:p-16 space-y-10 md:space-y-12 text-slate-700 text-base md:text-xl">
            <p className="leading-relaxed">
              Zapamtite ovaj datum: <strong className="text-slate-900 font-bold">15. mart 2026.</strong> Ovo je dan kada je Google AI algoritam konačno oborio mit da je SEO "samo nabacivanje ključnih reči". Ako i dalje mislite da možete da rangirate sa praznim sadržajem prepunim "SEO fraza", kasnite 3 godine.
            </p>

            <div className="space-y-4 md:space-y-6">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 italic uppercase leading-tight">
                Šta se zapravo promenilo?
              </h2>
              <p className="leading-relaxed">
                Google više ne "čita reči" — on <strong className="text-slate-900 font-bold">razume kontekst</strong>. Kada neko ukuca "najbolji sat za planinarenje", Google zna da ta osoba:
              </p>
              <ul className="space-y-3 pl-6 list-none">
                <li className="flex items-start gap-3">
                  <span className="text-teal-500 font-black text-2xl leading-none">→</span>
                  <span>Ne želi luksuzni Rolex.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-500 font-black text-2xl leading-none">→</span>
                  <span>Traži izdržljivost, GPS, vodootpornost.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-500 font-black text-2xl leading-none">→</span>
                  <span>Verovatno je spreman da plati srednju cenu.</span>
                </li>
              </ul>
              <p className="leading-relaxed">
                Dakle, više nije dovoljno napisati "sat za planinarenje" 30 puta u tekstu. Google želi da vidi da razumete <strong className="text-slate-900 font-bold">pravu nameru</strong> iza te pretrage.
              </p>
            </div>

            <div className="space-y-4 md:space-y-6">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 italic uppercase leading-tight">
                Da li to znači da ključne reči više nisu bitne?
              </h2>
              <p className="leading-relaxed text-red-600 font-bold text-2xl md:text-3xl">
                Ne. Ali njihova uloga se drastično promenila.
              </p>
              <p className="leading-relaxed">
                Ranije: Nabacite ključnu reč što više puta → dobijaš rangiranje.<br />
                Sada: Uporedi se sa:<br />
                <strong className="text-slate-900 font-bold">Relevantnost teme → Kvalitet sadržaja → Odgovor na pitanje → E-E-A-T (Expertise, Experience, Authoritativeness, Trustworthiness)</strong>
              </p>
              <div className="bg-slate-50 p-5 md:p-8 border-l-4 border-blue-500 italic rounded-r-xl md:rounded-r-2xl shadow-sm">
                <p className="text-slate-800 m-0">
                  <strong className="text-blue-700 uppercase text-xs md:text-sm tracking-widest not-italic block mb-2">
                    Primer:
                  </strong>
                  Blog koji 50 puta ponavlja "najbolji SEO alat" će biti potučen od strane kvalitetnog članka koji detaljno analizira 3 alata sa stvarnim podacima, slikama, video tutorijalima i komentarima korisnika.
                </p>
              </div>
            </div>

            <div className="space-y-4 md:space-y-6">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 italic uppercase leading-tight">
                Nova strategija: "Tematsko opsedanje"
              </h2>
              <p className="leading-relaxed">
                Umesto da targetujete jednu ključnu reč, vi pravite{' '}
                <strong className="text-slate-900 font-bold">tematski autoritet</strong>. To znači:
              </p>
              <ul className="space-y-3 pl-6 list-none">
                <li className="flex items-start gap-3">
                  <span className="text-teal-500 font-black text-2xl leading-none">1.</span>
                  <span><strong>Cluster strategija</strong> — glavna "pillar" strana (npr. "SEO vodič") + 10-15 pod-tema koje se linkuju međusobno.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-500 font-black text-2xl leading-none">2.</span>
                  <span><strong>Odgovarajte na prava pitanja</strong> — analizirajte šta ljudi pitaju na Google-u, Redditu, Quori. Dajte konkretne odgovore, ne maglu.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-500 font-black text-2xl leading-none">3.</span>
                  <span><strong>Demonstrirajte ekspertizu</strong> — Google zna da li ste samo prepakovali tuđi sadržaj ili zaista posedujete znanje.</span>
                </li>
              </ul>
              <div className="bg-teal-50 p-5 md:p-8 border-l-4 border-teal-500 italic rounded-r-xl md:rounded-r-2xl shadow-sm">
                <p className="text-slate-800 m-0">
                  <strong className="text-teal-700 uppercase text-xs md:text-sm tracking-widest not-italic block mb-2">
                    Zlatno pravilo:
                  </strong>
                  Pišite za ljude, optimizujte za Google. Ne obrnuto.
                </p>
              </div>
            </div>

            <div className="space-y-4 md:space-y-6">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 italic uppercase leading-tight">
                AI pretraga vs. Klasični Google
              </h2>
              <p className="leading-relaxed">
                Google je uveo <strong className="text-slate-900 font-bold">Search Generative Experience (SGE)</strong> — AI sada generiše odgovor direktno u pretrazi. To znači da vas ljudi možda ni neće posetiti, osim ako im ne date razlog.
              </p>
              <p className="leading-relaxed">
                <strong className="text-red-600">Šta raditi?</strong> Fokusirajte se na sadržaj koji AI ne može replicirati:
              </p>
              <ul className="space-y-3 pl-6 list-none">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-black">✓</span>
                  <span>Personalna iskustva i case study-ji</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-black">✓</span>
                  <span>Video i interaktivni sadržaj</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-black">✓</span>
                  <span>Originalni podaci i istraživanja</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-black">✓</span>
                  <span>Lokalni relevantni sadržaj</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4 md:space-y-6">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 italic uppercase leading-tight">
                Tehnički SEO — i dalje kralj
              </h2>
              <p className="leading-relaxed">
                Bez obzira koliko dobar bio vaš sadržaj, ako sajt ne učitava brzo ili nije optimizovan za mobilne, <span className="text-red-600 font-bold">gubite.</span>
              </p>
              <div className="bg-slate-50 p-5 md:p-8 border-l-4 border-slate-500 italic rounded-r-xl md:rounded-r-2xl shadow-sm">
                <p className="text-slate-800 m-0">
                  <strong className="text-slate-700 uppercase text-xs md:text-sm tracking-widest not-italic block mb-2">
                    Obavezno proverite:
                  </strong>
                  Core Web Vitals (LCP, FID, CLS), mobile-first indexing, strukturirane podatke (schema markup), i HTTPS.
                </p>
              </div>
            </div>

            <hr className="border-slate-100 my-8 md:my-12" />

            {/* CTA */}
            <div className="text-center py-4 md:py-6">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 mb-6 leading-tight">
                Vaš sajt nije rangiran kako treba?
              </h3>
              <p className="mb-8 md:mb-10 text-slate-500 text-lg md:text-xl">
                Radimo SEO audit i pokazujemo vam tačno šta treba da se promeni da biste ušli u Top 3.
              </p>
              <Link
                href="/#kontakt"
                className="btn-duck text-white px-8 py-5 md:px-10 md:py-6 rounded-2xl font-black uppercase tracking-widest inline-block shadow-2xl hover:scale-105 transform transition text-sm md:text-base"
              >
                Zakazati SEO Audit
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
