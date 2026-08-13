import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import BackButton from '@/components/BackButton'

export const metadata: Metadata = {
  title: 'Slučaj: Mobilni Vulkanizer Milan',
  description:
    'Milan je uložio 3.550 evra u Google Ads kampanju i sajt. Za tri meseca, neto zarada je iznosila 7.210 evra, 203 odsto povraćaja na uloženo.',
  alternates: {
    canonical: 'https://www.duckfamilyteam.online/rezultati/mobilni-vulkanizer-milan',
  },
  openGraph: {
    title: 'Slučaj: Mobilni Vulkanizer Milan | Duck Family Team',
    description: '203 odsto povraćaja na uloženo za tri meseca.',
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
  { label: 'Uloženo', value: '3.550 €' },
  { label: 'Period', value: '3 meseca' },
  { label: 'Neto zarada', value: '7.210 €' },
  { label: 'Povraćaj na uloženo', value: '203%' },
]

export default function MilanCaseStudyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navbar />
      <main id="glavni-sadrzaj" className="bg-ink-bg text-ink-text pt-28 md:pt-40 pb-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">

          <BackButton />

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
            <h1 className="font-display font-medium text-3xl md:text-5xl leading-[1.15] tracking-tight mb-6 max-w-3xl">
              Mobilni Vulkanizer Milan: 203 odsto povraćaja za tri meseca
            </h1>
          </section>

          {/* ── BROJKE ── */}
          <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
            {brojke.map((item) => (
              <div key={item.label} className="bg-ink-surface border border-ink-border rounded-2xl p-6 text-center">
                <div className="font-display font-medium text-2xl md:text-3xl text-wine-text mb-1">{item.value}</div>
                <div className="text-ink-muted text-xs uppercase tracking-widest font-mono">{item.label}</div>
              </div>
            ))}
          </section>

          {/* ── COPY ── */}
          <section className="mb-16 max-w-3xl">
            <p className="text-lg text-ink-text leading-relaxed">
              Milan vozi mobilni servis za gume u Beogradu. Pre saradnje, telefon mu je zvonio povremeno. Za tri meseca rada sa nama, uložio je 3.550 evra u kampanju i sajt. Neto zarada, kada su plaćeni svi troškovi, iznosila je 7.210 evra. To je 203 odsto povraćaja na uloženo, prema našem obračunu na osnovu ovih brojki. Kampanja se i dalje vodi.
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

          {/* ── SAJT KOJI SMO MU IZRADILI ── */}
          <section className="mb-16 max-w-3xl bg-ink-surface border border-ink-border rounded-2xl p-8 md:p-10">
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
              className="inline-flex items-center gap-2 bg-wine hover:bg-wine-bright text-ink-text px-10 py-5 rounded-xl font-semibold text-base transition-colors shadow-lg shadow-wine/20"
            >
              Posetite sajt
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </section>

          {/* ── CTA ── */}
          <section className="bg-ink-surface border border-ink-border rounded-2xl p-10 md:p-16 text-center">
            <h2 className="font-display font-medium text-3xl md:text-4xl mb-4">
              Želite sličan rezultat?
            </h2>
            <p className="text-ink-muted mb-8 max-w-xl mx-auto">
              Besplatna konsultacija, pogledamo vaš biznis i kažemo iskreno šta je realno da očekujete.
            </p>
            <Link href="/kontakt" className="bg-wine hover:bg-wine-bright text-ink-text px-10 py-5 rounded-xl font-semibold text-base inline-block transition-colors shadow-lg shadow-wine/20">
              Zakažite besplatnu konsultaciju
            </Link>
          </section>

        </div>
      </main>
      <Footer />
    </>
  )
}
