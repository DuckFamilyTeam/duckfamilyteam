import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AnimatedSection from '@/components/AnimatedSection'
import FaqAccordion from '@/components/FaqAccordion'

export const metadata: Metadata = {
  title: 'Google Ads Agencija Srbija | Duck Family Team',
  description:
    'Google Ads kampanje i izrada sajtova sa ugrađenim SEO-om. Fokus na pozivima, ne na klikovima. Besplatna konsultacija za firme u Srbiji.',
  alternates: { canonical: 'https://www.duckfamilyteam.online/' },
  keywords: [
    'Google Ads Srbija',
    'Google Ads agencija',
    'SEO optimizacija Srbija',
    'izrada sajtova',
    'izrada web sajtova Srbija',
    'Next.js sajt',
    'Astro sajt',
    'Google Business profil',
    'digitalni marketing Srbija',
    'GA4 analitika',
    'PPC stručnjak',
    'povećanje prodaje',
    'remarketing',
    'lokalni SEO',
    'Duck Family Team',
  ],
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
        text: 'Google Ads hvata ljude u momentu namere. Na Google-u se pojavljujete tačno onda kada neko traži vaše rešenje, to je razlika između sviđanja i kupovine.',
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
    {
      '@type': 'Question',
      name: 'Koliko košta vaša usluga?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cena zavisi od obima kampanje, industrije i ciljeva. Nudimo besplatnu analizu budžeta, zakazite konsultacije i dobićete preciznu ponudu bez obaveza.',
      },
    },
    {
      '@type': 'Question',
      name: 'Radite li sa manjim biznisima ili samo sa velikim firmama?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Radimo sa firmama svih veličina, od lokalnih zanatlija i salona do e-commerce brendova i srednjih kompanija. Strategiju i budžet uvek prilagođavamo realnim mogućnostima i ciljevima klijenta.',
      },
    },
    {
      '@type': 'Question',
      name: 'Koliko dugo traje izrada sajta?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Jednostavna landing stranica je gotova za 5–7 radnih dana. Kompletan poslovni sajt sa više stranica traje 2–4 nedelje, u zavisnosti od dostupnosti sadržaja i broja revizija sa vaše strane.',
      },
    },
    {
      '@type': 'Question',
      name: 'Već imam sajt, možete li ga samo poboljšati?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Da. Radimo i audit i optimizaciju postojećih sajtova, brzinu učitavanja, SEO osnove, mobilnu prilagođenost i podešavanje konverzija, bez da morate da krećete ispočetka, osim ako je to zaista neophodno.',
      },
    },
    {
      '@type': 'Question',
      name: 'Da li se vezujem ugovorom na duži period?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ne insistiramo na dugoročnim ugovorima. Radije dokazujemo vrednost rezultatima iz meseca u mesec, saradnju možete prekinuti u svakom trenutku uz razuman otkazni rok.',
      },
    },
    {
      '@type': 'Question',
      name: 'Da li garantujete prvo mesto na Google-u?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nijedna ozbiljna agencija ne može da garantuje tačnu poziciju, jer Google algoritam nije pod nečijom kontrolom. Ono što garantujemo je transparentan rad, primenu proverenih SEO i Google Ads tehnika i mesečno izveštavanje o napretku.',
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
    reviewCount: '6',
  },
}

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
        <section className="bg-ink-bg text-ink-text px-6 md:px-12 pt-8 pb-20 md:pb-28">
          <div className="max-w-7xl mx-auto">
            <div className="font-mono text-xs uppercase tracking-[0.12em] text-wine-bright mb-4">
              Google Ads &amp; SEO agencija, Beograd
            </div>
            <h1 className="font-display font-medium text-4xl md:text-6xl leading-[1.1] tracking-tight max-w-2xl mb-6">
              Klijenti koji{' '}
              <span className="relative inline-block">
                zovu
                <svg
                  viewBox="0 0 120 14"
                  preserveAspectRatio="none"
                  className="absolute left-0 -bottom-1.5 w-full h-[0.4em]"
                  aria-hidden="true"
                >
                  <path
                    d="M2 8C20 2 35 12 55 7C75 2 90 12 118 6"
                    stroke="#8C2438"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              , ne klikovi koji nestaju.
            </h1>
            <p className="text-base md:text-lg text-ink-muted leading-relaxed max-w-xl mb-10">
              Google Ads, SEO i brzi sajtovi za lokalne biznise koji žele da ih klijenti stvarno pronađu, ne samo da ih vide.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-20 md:mb-24">
              <Link
                href="#kontakt"
                className="bg-wine hover:bg-wine-bright text-ink-text px-10 py-5 rounded-xl font-semibold text-base text-center transition-colors shadow-lg shadow-wine/20"
              >
                Besplatna konsultacija
              </Link>
              <Link
                href="/rezultati"
                className="text-ink-muted hover:text-ink-text px-2 py-4 text-center border-b border-ink-border self-start sm:self-auto"
              >
                Pogledaj rezultate klijenata
              </Link>
            </div>

            <div className="font-mono text-xs uppercase tracking-widest text-ink-muted mb-4">
              Izaberite šta vam je potrebno
            </div>
            <div className="grid lg:grid-cols-[1.5fr_1fr] gap-3.5">
              <Link
                href="/usluge/google-ads"
                className="group bg-ink-surface hover:bg-ink-surface-hover border border-ink-border hover:border-wine rounded-2xl p-8 flex flex-col justify-between lg:row-span-2 min-h-[280px] transition-colors"
              >
                <div>
                  <div className="font-mono text-[11px] uppercase tracking-widest text-wine-bright mb-3.5">
                    Najtraženije
                  </div>
                  <h2 className="font-display font-medium text-2xl md:text-3xl mb-3">Google Ads kampanje</h2>
                  <p className="text-sm text-ink-muted leading-relaxed max-w-[340px]">
                    PPC kampanje fokusirane na konverzije i pozive, ne na broj klikova. Smart Bidding, remarketing, potpuna transparentnost.
                  </p>
                </div>
                <div className="flex items-center gap-2 text-sm font-medium mt-5">
                  Pogledaj uslugu →
                </div>
              </Link>
              <Link
                href="/usluge/izrada-sajtova"
                className="group bg-ink-surface hover:bg-ink-surface-hover border border-ink-border hover:border-wine rounded-2xl p-8 flex flex-col justify-between min-h-[133px] transition-colors"
              >
                <div>
                  <div className="font-mono text-[11px] uppercase tracking-widest text-wine-bright mb-3.5">
                    Sajtovi
                  </div>
                  <h3 className="font-display font-medium text-xl mb-2">Izrada brzih sajtova</h3>
                  <p className="text-sm text-ink-muted leading-relaxed max-w-[340px]">
                    Next.js sajtovi optimizovani za Google od prvog dana.
                  </p>
                </div>
                <div className="flex items-center gap-2 text-sm font-medium mt-3.5">
                  Pogledaj uslugu →
                </div>
              </Link>
              <Link
                href="/usluge/google-business-profil"
                className="group bg-ink-surface hover:bg-ink-surface-hover border border-ink-border hover:border-wine rounded-2xl p-8 flex flex-col justify-between min-h-[133px] transition-colors"
              >
                <div>
                  <div className="font-mono text-[11px] uppercase tracking-widest text-wine-bright mb-3.5">
                    Google Maps
                  </div>
                  <h3 className="font-display font-medium text-xl mb-2">Google Business profil</h3>
                  <p className="text-sm text-ink-muted leading-relaxed max-w-[340px]">
                    Postavljanje i optimizacija profila da vas klijenti pronađu lokalno.
                  </p>
                </div>
                <div className="flex items-center gap-2 text-sm font-medium mt-3.5">
                  Pogledaj uslugu →
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* ── NAŠ PROCES ── */}
        <section id="proces" className="py-20 px-6 md:px-12 bg-ink-surface">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-display font-medium text-3xl md:text-5xl text-ink-text tracking-tight mb-6">
                Naš proces
              </h2>
              <p className="text-ink-muted text-lg">
                Transparentan i merljiv. Evo kako funkcionišemo:
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  n: '01',
                  t: 'Dubinska analiza',
                  d: 'Analiziramo vaš biznis model, konkurenciju i ciljnu grupu. Identifikujemo ključne reči sa visokom namerom kupovine i postavljamo nekoliko pitanja da razumemo vaše potrebe.',
                },
                {
                  n: '02',
                  t: 'Strategija i setup',
                  d: 'Kreiramo kampanje sa preciznim targetiranjem. Postavljamo GA4 tracking, konverzije i custom dashboards. Dajemo vam kompletan plan rada pre nego što počnemo.',
                },
                {
                  n: '03',
                  t: 'Lansiranje i testiranje',
                  d: 'Pokrećemo kampanje i vršimo A/B testiranje oglasa, landing stranica i bid strategija. Sve se meri, ništa se ne pretpostavlja.',
                },
                {
                  n: '04',
                  t: 'Optimizacija i skaliranje',
                  d: 'Kontinuirano pratimo performanse i skaliramo ono što radi. Mesečni izveštaji sa konkretnim preporukama za rast.',
                },
              ].map((item) => (
                <AnimatedSection key={item.n}>
                  <div className="bg-ink-bg p-6 rounded-2xl border border-ink-border h-full">
                    <div className="font-display text-3xl text-wine-bright mb-4">{item.n}</div>
                    <h3 className="font-medium text-ink-text mb-3">{item.t}</h3>
                    <p className="text-ink-muted text-sm leading-relaxed">{item.d}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ── CENE ── */}
        <section id="cene" className="py-20 px-6 md:px-12 bg-ink-bg text-ink-text">
          <div className="max-w-5xl mx-auto text-center">
            <AnimatedSection>
              <div className="font-mono text-xs uppercase tracking-[0.12em] text-wine-bright mb-4">Cene</div>
              <h2 className="font-display font-medium text-3xl md:text-5xl tracking-tight mb-6">
                Koliko košta Google Ads, GBP i izrada sajta
              </h2>
              <p className="text-ink-muted text-lg max-w-2xl mx-auto mb-8">
                Pun, transparentan cenovnik, bez skrivenih troškova.
              </p>
              <Link
                href="/cene"
                className="inline-block bg-wine hover:bg-wine-bright text-ink-text px-8 py-4 rounded-xl font-medium transition-colors"
              >
                Pogledaj cenovnik
              </Link>
            </AnimatedSection>
          </div>
        </section>

        {/* ── O NAMA ── */}
        <section id="o-nama" className="py-20 px-6 md:px-12 bg-ink-surface text-ink-text">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection className="relative">
              <Image
                src="/img/andjela-i-nikola-u-radnoj-sobi-1.png"
                alt="Anđela i Nikola Stanković, Google Ads stručnjaci, Duck Family Team"
                width={600}
                height={500}
                className="rounded-2xl border border-ink-border w-full object-cover"
              />
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <div className="font-mono text-xs uppercase tracking-[0.12em] text-wine-bright mb-4">O nama</div>
              <h2 className="font-display font-medium text-3xl md:text-4xl tracking-tight mb-4">
                Nikola i Anđela, tim iza Duck Family Team
              </h2>
              <p className="text-ink-muted leading-relaxed mb-6">
                Svaku kampanju i svaki sajt radimo nas dvoje lično, ne prosleđujemo vaš nalog nepoznatom timu.
              </p>
              <Link href="/o-nama" className="text-ink-text hover:text-wine-bright transition font-medium border-b border-ink-border pb-1">
                Upoznajte nas →
              </Link>
            </AnimatedSection>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section id="pitanja" className="py-20 px-6 md:px-12 bg-ink-bg">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <h2 className="font-display font-medium text-3xl md:text-5xl text-ink-text text-center mb-12">
                Ekspertski odgovori
              </h2>
              <FaqAccordion />
            </AnimatedSection>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
