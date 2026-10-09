import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PodvucenaRec from '@/components/PodvucenaRec'
import BrowserFrame from '@/components/BrowserFrame'

export const metadata: Metadata = {
  title: 'Slučaj: Mobilni Vulkanizer Milan',
  description:
    'Milan je za prvih šest meseci saradnje uložio 7.150 evra u Google Ads kampanju i sajt. Neto zarada je bila 21.850 evra, 306 odsto povraćaja po našem obračunu.',
  alternates: {
    canonical: 'https://www.duckfamilyteam.online/rezultati/mobilni-vulkanizer-milan',
  },
  openGraph: {
    title: 'Slučaj: Mobilni Vulkanizer Milan | Duck Family Team',
    description: '306 odsto povraćaja na uloženo za šest meseci, po našem obračunu na osnovu brojki klijenta.',
    url: 'https://www.duckfamilyteam.online/rezultati/mobilni-vulkanizer-milan',
    type: 'article',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Početna', item: 'https://www.duckfamilyteam.online' },
    { '@type': 'ListItem', position: 2, name: 'Rezultati', item: 'https://www.duckfamilyteam.online/rezultati' },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Mobilni Vulkanizer Milan',
      item: 'https://www.duckfamilyteam.online/rezultati/mobilni-vulkanizer-milan',
    },
  ],
}

const brojke = [
  { label: 'Uloženo', value: '7.150 €' },
  { label: 'Period', value: '6 meseci' },
  { label: 'Neto zarada', value: '21.850 €' },
  { label: 'Povraćaj na uloženo', value: '306%' },
]

const dodatneBrojke = [
  { label: 'Primljenih poziva', value: '1.109' },
  { label: 'Potvrđenih terena', value: '706' },
]

export default function MilanCaseStudyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navbar />
      <main id="glavni-sadrzaj" className="bg-ink-bg text-ink-text pt-28 md:pt-40 pb-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">

          {/* ── BREADCRUMB ── */}
          <nav className="mb-8 font-mono text-xs text-ink-muted flex items-center gap-2 uppercase tracking-widest flex-wrap" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-ink-text transition">Početna</Link>
            <span>/</span>
            <Link href="/rezultati" className="hover:text-ink-text transition">Rezultati</Link>
            <span>/</span>
            <span className="text-ink-text">Mobilni Vulkanizer Milan</span>
          </nav>

          {/* ── HERO ── */}
          <section className="mb-14">
            <div className="font-mono text-xs uppercase tracking-[0.12em] text-wine-text mb-4">
              Google Ads &amp; SEO, mobilni servis za gume
            </div>
            {/* md:text-6xl, ne text-5xl: isti razlog kao na o-nama — najmanji
                H1 na sajtu je bio prebliz veličini Footer CTA naslova
                (vizuelna provera, krug 8). */}
            {/* text-4xl na mobilnom (ne text-3xl): dosledno ostalim H1
                na sajtu. text-balance i širi max-w sprečavaju usamljenu reč
                u poslednjem redu ("meseca" samo, krug 9). */}
            <h1 className="font-display font-medium text-4xl md:text-6xl leading-[1.1] tracking-tight mb-6 max-w-4xl text-balance">
              Mobilni Vulkanizer Milan: <PodvucenaRec>306 odsto</PodvucenaRec> povraćaja za šest meseci
            </h1>
          </section>

          {/* ── BROJKE ──
              grid-cols-2 sve do lg (ne md): na 600-1023px je mreža 2x4 kartice
              premale za "7.150 €" i "6 meseci" u jednom redu, pa se broj lomi
              u dva reda (vizuelna provera, krug 7, ispravka 4c). */}
          <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {brojke.map((item) => (
              <div key={item.label} className="bg-ink-surface border border-ink-border rounded-2xl p-6 text-center">
                <div className="font-display font-medium text-2xl md:text-3xl text-wine-text mb-1 whitespace-nowrap">{item.value}</div>
                <div className="text-ink-muted text-xs uppercase tracking-widest font-mono">{item.label}</div>
              </div>
            ))}
          </section>

          {/* Pozivi i tereni: zaseban, manji red ispod glavne trake od 4
              brojke. Ne u istoj mreži — "306%" i "1.109" nisu uporedive
              veličine i ne zaslužuju isti vizuelni naglasak. */}
          <section className="grid grid-cols-2 gap-4 mb-14 max-w-md">
            {dodatneBrojke.map((item) => (
              <div key={item.label} className="border border-ink-border rounded-xl p-4 text-center">
                <div className="font-display font-medium text-lg text-ink-text mb-0.5 whitespace-nowrap">{item.value}</div>
                <div className="text-ink-muted text-[11px] uppercase tracking-widest font-mono">{item.label}</div>
              </div>
            ))}
          </section>

          {/* ── COPY ── */}
          <section className="mb-16 max-w-3xl">
            <p className="text-lg text-ink-text leading-relaxed mb-4">
              Milan vozi mobilni servis za gume u Beogradu. Pre saradnje, telefon mu je zvonio povremeno. Sarađujemo od maja 2026. U prvih šest meseci (maj–oktobar 2026) uložio je 7.150 evra u kampanju i sajt, primio 1.109 poziva i potvrdio 706 terena. Neto zarada, kada su plaćeni svi troškovi, radnici i popravke, iznosila je 21.850 evra. To je 306 odsto povraćaja na uloženo, prema našem obračunu na osnovu ovih brojki. Kampanja se i dalje vodi.
            </p>
            <p className="text-ink-muted text-sm leading-relaxed">
              Uloženo je dato u dinarima (839.000 RSD) i preračunato u evre po srednjem kursu
              NBS iz oktobra 2026 (oko 117,3 RSD za 1 €), da brojke budu uporedive sa ostatkom
              ovog prikaza.
            </p>
          </section>

          {/* ── ŠTA MU VODIMO ── */}
          <section className="mb-16 max-w-3xl">
            <h2 className="font-display font-medium text-2xl md:text-3xl mb-6">
              Šta trenutno vodimo za Milana
            </h2>
            <ul className="space-y-4">
              <li className="flex gap-4 items-start">
                <span className="mt-1 w-2 h-2 rounded-full bg-wine-bright flex-shrink-0" />
                <p className="text-ink-text leading-relaxed">
                  <Link href="/usluge/google-business-profil" className="font-medium text-wine-text hover:text-ink-text">Google Business profil</Link>, vodimo i optimizujemo profil, objave, fotografije i odgovaranje na recenzije, da ga klijenti pronađu prvo na Google mapi.
                </p>
              </li>
              <li className="flex gap-4 items-start">
                <span className="mt-1 w-2 h-2 rounded-full bg-wine-bright flex-shrink-0" />
                <p className="text-ink-text leading-relaxed">
                  <Link href="/usluge/google-ads" className="font-medium text-wine-text hover:text-ink-text">Google Ads kampanje</Link>, svakodnevno pratimo i optimizujemo kampanju, budžet i ključne reči.
                </p>
              </li>
              <li className="flex gap-4 items-start">
                <span className="mt-1 w-2 h-2 rounded-full bg-wine-bright flex-shrink-0" />
                <p className="text-ink-text leading-relaxed">
                  <span className="font-medium">Održavanje sajta</span>, redovno ažuriranje sadržaja, cena i tehnička podrška.
                </p>
              </li>
            </ul>
          </section>

          {/* ── SAJT KOJI SMO MU IZRADILI ──
              Snimak Milanovog sajta stoji OVDE, uz karticu "Izrada sajta",
              a ne odmah ispod trake sa 4 brojke — na staroj poziciji je
              izgledao kao dokaz za 306%, a dokazuje samo da sajt postoji
              (vizuelna provera, krug 7, ispravka 5e). */}
          <section className="mb-16">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              <div className="lg:col-span-5 bg-ink-surface border border-ink-border rounded-2xl p-8 md:p-10">
                <div className="font-mono text-xs uppercase tracking-widest text-wine-text mb-3">
                  Izrada sajta
                </div>
                <h2 className="font-display font-medium text-2xl md:text-3xl mb-4">
                  Moderan, brz i SEO, AEO i GEO optimizovan sajt
                </h2>
                <p className="text-ink-text leading-relaxed mb-8">
                  Pored kampanje i profila, izradili smo Milanu potpuno nov sajt: brzo učitavanje na mobilnom, čista struktura za Google pretragu (SEO), sadržaj pripremljen da ga citiraju AI asistenti poput Google AI Overviews i ChatGPT-a (AEO i GEO), i jasan poziv na akciju za svakog posetioca.
                </p>
                <a
                  href="https://www.mobilnivulkanizermilan.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 whitespace-nowrap border border-ink-border-strong hover:border-wine text-ink-text px-8 py-4 rounded-xl font-medium transition-colors text-sm md:text-base"
                >
                  Posetite sajt
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>

              <div className="lg:col-span-7">
                {/* Desktop/tablet: pun okvir pretraživača */}
                <BrowserFrame
                  url="mobilnivulkanizermilan.com"
                  caption="mobilnivulkanizermilan.com · sajt koji smo izradili · snimak septembar 2026."
                  className="hidden sm:block"
                >
                  <Image
                    src="/img/milan-vulkanizer-sajt-screenshot.webp"
                    alt="Naslovna strana sajta mobilnivulkanizermilan.com koji smo izradili za Milana"
                    width={1264}
                    height={800}
                    sizes="(min-width: 1024px) 55vw, 90vw"
                    priority
                    fetchPriority="high"
                    className="w-full h-auto"
                  />
                </BrowserFrame>

                {/* Mobilni: uzak okvir sa stvarnim mobilnim prikazom sajta, ne umanjen desktop */}
                <figure className="sm:hidden">
                  <div className="max-w-[260px] mx-auto rounded-2xl overflow-hidden border border-ink-border bg-ink-surface">
                    <Image
                      src="/img/milan-vulkanizer-sajt-mobilni.webp"
                      alt="Mobilni prikaz sajta mobilnivulkanizermilan.com koji smo izradili za Milana"
                      width={382}
                      height={760}
                      sizes="260px"
                      priority
                      fetchPriority="high"
                      className="w-full h-auto"
                    />
                  </div>
                  <figcaption className="font-mono text-[11px] text-ink-muted mt-3 uppercase tracking-widest text-center">
                    mobilnivulkanizermilan.com · snimak septembar 2026.
                  </figcaption>
                </figure>
              </div>
            </div>
          </section>

        </div>
      </main>
      <Footer
        ctaHeading="Želite sličan rezultat?"
        ctaDescription="Besplatna konsultacija, pogledamo vaš biznis i kažemo iskreno šta je realno da očekujete."
      />
    </>
  )
}
