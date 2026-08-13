import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AnimatedSection from '@/components/AnimatedSection'
import FaqAccordion from '@/components/FaqAccordion'
import ClientLogos from '@/components/ClientLogos'
import GoogleRating from '@/components/GoogleRating'
import PhoneCta from '@/components/PhoneCta'
import { getGoogleReviewsSummary } from '@/lib/googleReviews'
import { faqPageSchema, homeFaqs } from '@/lib/faqs'

export const metadata: Metadata = {
  title: 'Google Ads i GBP agencija Beograd | Duck Family Team',
  description:
    'Google Ads kampanje i izrada sajtova sa ugrađenim SEO-om. Fokus na pozivima, ne na klikovima. Besplatna konsultacija za firme u Srbiji.',
  // Bez kose crte na kraju, da se poklopi sa sitemap.ts.
  alternates: { canonical: 'https://www.duckfamilyteam.online' },
}

// FAQPage schema i vidljivi akordion sada dolaze iz istog izvora (lib/faqs.ts),
// pa markup i tekst na stranici ne mogu više da se raziđu.
const faqSchema = faqPageSchema(homeFaqs)

export default async function Home() {
  // Vraća null ako Places API nije podešen — u tom slučaju se ocena ne prikazuje
  // umesto da se izmisli. AggregateRating u JSON-LD-u je uklonjen: Google ne
  // dozvoljava da firma sama sebi dodeljuje zbirnu ocenu na sopstvenom sajtu.
  const reviews = await getGoogleReviewsSummary()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <main id="glavni-sadrzaj" className="pt-24">

        {/* ── HERO ── */}
        <section className="bg-ink-bg text-ink-text px-6 md:px-12 pt-8 pb-20 md:pb-28">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-[1fr_0.92fr] gap-10 lg:gap-14 items-center mb-16 md:mb-20">
              <div>
                <div className="font-mono text-xs uppercase tracking-[0.12em] text-wine-text mb-4">
                  Google Ads i GBP agencija, Beograd
                </div>
                <h1 className="font-display font-medium text-4xl md:text-6xl leading-[1.1] tracking-tight mb-6">
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
                <p className="text-base md:text-lg text-ink-muted leading-relaxed max-w-xl mb-8">
                  Google Ads kampanje, Google Business profil i brzi sajtovi za lokalne biznise koji žele da ih klijenti stvarno pronađu.
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                  <Link
                    href="#kontakt"
                    className="bg-wine hover:bg-wine-bright text-ink-text px-10 py-5 rounded-xl font-semibold text-base text-center transition-colors shadow-lg shadow-wine/20"
                  >
                    Besplatna konsultacija
                  </Link>
                  <PhoneCta location="pocetna_hero" className="px-8 py-5 rounded-xl text-base" />
                </div>

                <div className="mb-8">
                  <Link
                    href="/rezultati"
                    className="text-ink-muted hover:text-ink-text border-b border-ink-border pb-1"
                  >
                    Pogledaj rezultate klijenata
                  </Link>
                </div>

                {reviews && (
                  <div className="mb-8">
                    <GoogleRating summary={reviews} />
                  </div>
                )}

                <Link
                  href="/rezultati/mobilni-vulkanizer-milan"
                  className="flex items-baseline gap-4 border-t border-ink-border pt-5 max-w-md group"
                >
                  <div className="font-display font-semibold text-3xl text-wine-text leading-none">
                    203%
                  </div>
                  <p className="text-xs text-ink-muted leading-relaxed">
                    <strong className="text-ink-text font-medium">Mobilni Vulkanizer Milan.</strong>{' '}
                    Povraćaj na uloženo za tri meseca, provereno, ne procenjeno.{' '}
                    <span className="text-wine-text group-hover:text-ink-text transition">
                      Pogledaj kako →
                    </span>
                  </p>
                </Link>
              </div>

              <div className="relative rounded-3xl overflow-hidden border border-ink-border aspect-[4/5] lg:aspect-auto lg:h-full">
                <Image
                  src="/img/andjela-i-nikola-u-radnoj-sobi-1.png"
                  alt="Anđela i Nikola Stanković, Google Ads stručnjaci, Duck Family Team"
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                  style={{ filter: 'sepia(.35) saturate(1.15) hue-rotate(-8deg) brightness(.72) contrast(1.05)' }}
                  priority
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(160deg, rgba(140,36,56,0.28), rgba(20,16,14,0.55) 65%, rgba(20,16,14,0.85))',
                    mixBlendMode: 'multiply',
                  }}
                />
                <div className="absolute left-5 bottom-5 font-mono text-xs text-ink-text bg-ink-bg/55 backdrop-blur-md border border-ink-text/15 rounded-full px-3.5 py-2">
                  Nikola i Anđela, uživo
                </div>
              </div>
            </div>

            {/* Ovo je h2, a sve tri kartice ispod su h3 — ranije je prva kartica
                bila h2 a druge dve h3, iako su na istom nivou. */}
            <h2 className="font-mono text-xs uppercase tracking-widest text-ink-muted mb-4">
              Izaberite šta vam je potrebno
            </h2>
            <div className="grid md:grid-cols-3 gap-3.5">
              <Link
                href="/usluge/google-ads"
                className="group bg-ink-surface hover:bg-ink-surface-hover border border-ink-border hover:border-wine rounded-2xl p-8 flex flex-col justify-between min-h-[200px] transition-colors"
              >
                <div>
                  <div className="font-mono text-[11px] uppercase tracking-widest text-wine-text mb-3.5">
                    Najtraženije
                  </div>
                  <h3 className="font-display font-medium text-xl mb-2">Google Ads kampanje</h3>
                  <p className="text-sm text-ink-muted leading-relaxed">
                    PPC kampanje fokusirane na konverzije i pozive, ne na broj klikova. Smart Bidding, remarketing, potpuna transparentnost.
                  </p>
                </div>
                <div className="flex items-center gap-2 text-sm font-medium mt-3.5">
                  Pogledaj uslugu →
                </div>
              </Link>
              <Link
                href="/usluge/izrada-sajtova"
                className="group bg-ink-surface hover:bg-ink-surface-hover border border-ink-border hover:border-wine rounded-2xl p-8 flex flex-col justify-between min-h-[200px] transition-colors"
              >
                <div>
                  <div className="font-mono text-[11px] uppercase tracking-widest text-wine-text mb-3.5">
                    Sajtovi
                  </div>
                  <h3 className="font-display font-medium text-xl mb-2">Izrada brzih sajtova</h3>
                  <p className="text-sm text-ink-muted leading-relaxed">
                    Next.js sajtovi optimizovani za Google od prvog dana.
                  </p>
                </div>
                <div className="flex items-center gap-2 text-sm font-medium mt-3.5">
                  Pogledaj uslugu →
                </div>
              </Link>
              <Link
                href="/usluge/google-business-profil"
                className="group bg-ink-surface hover:bg-ink-surface-hover border border-ink-border hover:border-wine rounded-2xl p-8 flex flex-col justify-between min-h-[200px] transition-colors"
              >
                <div>
                  <div className="font-mono text-[11px] uppercase tracking-widest text-wine-text mb-3.5">
                    Google Maps
                  </div>
                  <h3 className="font-display font-medium text-xl mb-2">Google Business profil</h3>
                  <p className="text-sm text-ink-muted leading-relaxed">
                    Postavljanje i optimizacija profila da vas klijenti pronađu lokalno.
                  </p>
                </div>
                <div className="flex items-center gap-2 text-sm font-medium mt-3.5">
                  Pogledaj uslugu →
                </div>
              </Link>
            </div>

            <div className="mt-16 pt-12 border-t border-ink-border">
              <ClientLogos />
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
                    <div className="font-display text-3xl text-wine-text mb-4">{item.n}</div>
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
              <div className="font-mono text-xs uppercase tracking-[0.12em] text-wine-text mb-4">Cene</div>
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
            {/* Ovde je ranije stajala ista fotografija kao u hero sekciji, drugi
                put učitana. Zamenjena je sertifikatima — oni su dokaz za tvrdnju
                „sertifikovana agencija" koja se ponavlja kroz ceo sajt, a do sada
                su se videli samo na stranici O nama. */}
            <AnimatedSection className="grid grid-cols-2 gap-4">
              <Image
                src="/img/nikola-stankovic-slika-sertifikata.png"
                alt="Google sertifikat, Nikola Stanković"
                width={400}
                height={300}
                sizes="(min-width: 768px) 20vw, 45vw"
                className="rounded-2xl border border-ink-border w-full object-cover bg-ink-bg"
              />
              <Image
                src="/img/andjela-slika-sertifikata.png"
                alt="Google sertifikat, Anđela Stanković"
                width={400}
                height={300}
                sizes="(min-width: 768px) 20vw, 45vw"
                className="rounded-2xl border border-ink-border w-full object-cover bg-ink-bg"
              />
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <div className="font-mono text-xs uppercase tracking-[0.12em] text-wine-text mb-4">O nama</div>
              <h2 className="font-display font-medium text-3xl md:text-4xl tracking-tight mb-4">
                Nikola i Anđela, tim iza Duck Family Team
              </h2>
              <p className="text-ink-muted leading-relaxed mb-6">
                Svaku kampanju i svaki sajt radimo nas dvoje lično, ne prosleđujemo vaš nalog nepoznatom timu.
              </p>
              <Link href="/o-nama" className="text-ink-text hover:text-wine-text transition font-medium border-b border-ink-border pb-1">
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
