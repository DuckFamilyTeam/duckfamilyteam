import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PodvucenaRec from '@/components/PodvucenaRec'

export const metadata: Metadata = {
  title: 'O nama',
  description:
    'Nikola i Anđela, tim iza Duck Family Team. Sertifikovani Google Ads stručnjaci koji lično rade na svakoj kampanji i sajtu.',
  alternates: {
    canonical: 'https://www.duckfamilyteam.online/o-nama',
  },
  openGraph: {
    title: 'O nama | Duck Family Team',
    description: 'Nikola i Anđela, tim iza Duck Family Team.',
    url: 'https://www.duckfamilyteam.online/o-nama',
    type: 'profile',
  },
}

const aboutPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'O nama',
  url: 'https://www.duckfamilyteam.online/o-nama',
  mainEntity: {
    '@type': 'Organization',
    name: 'Duck Family Team',
    founder: [
      { '@type': 'Person', name: 'Nikola Stanković' },
      { '@type': 'Person', name: 'Anđela Stanković' },
    ],
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Početna', item: 'https://www.duckfamilyteam.online' },
    { '@type': 'ListItem', position: 2, name: 'O nama', item: 'https://www.duckfamilyteam.online/o-nama' },
  ],
}

export default function ONamaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navbar />
      <main id="glavni-sadrzaj" className="bg-ink-bg text-ink-text pt-28 md:pt-40 pb-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">

          {/* ── BREADCRUMB ── */}
          <nav className="mb-8 font-mono text-xs text-ink-muted flex items-center gap-2 uppercase tracking-widest" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-ink-text transition">Početna</Link>
            <span>/</span>
            <span className="text-ink-text">O nama</span>
          </nav>

          {/* ── HERO ── */}
          <section className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.12em] text-wine-text mb-4">
                Upoznajte tim
              </div>
              {/* md:text-6xl, ne text-5xl: o-nama je imalo najmanji H1 na
                  sajtu (48px), gotovo isti kao završni CTA naslov u Footer-u
                  (44px) — odnos 1,09:1 umesto traženih 1,3:1 (vizuelna
                  provera, krug 8). Sad je 60px, isto kao ostale podstranice. */}
              {/* Zarez je NAMERNO unutar PodvucenaRec (ne odmah posle
                  zatvorenog span-a): sa text-balance je granica elementa
                  brojana kao mesto preloma, pa je zarez znao da ostane sam
                  na početku sledećeg reda (krug 10, nova greška). Zarez
                  zalepljen uz "Anđela" to sprečava — potez ispod ide i
                  ispod zareza, neprimetno. */}
              <h1 className="font-display font-medium text-4xl md:text-6xl leading-[1.1] tracking-tight mb-6 text-balance">
                <PodvucenaRec>Nikola i Anđela,</PodvucenaRec> tim iza Duck Family Team
              </h1>
              <p className="text-lg text-ink-muted leading-relaxed mb-4">
                „Duck“ nije samo nadimak naše porodice, to je obećanje o lojalnosti. Svaku kampanju i svaki sajt radimo nas dvoje lično, ne prosleđujemo vaš nalog nepoznatom timu.
              </p>
              <p className="text-lg text-ink-muted leading-relaxed">
                Radimo sa firmama svih veličina, od lokalnih zanatlija i salona do srednjih kompanija, spremni smo i za e-commerce projekte, i budžet uvek prilagođavamo realnim mogućnostima i ciljevima klijenta.
              </p>
            </div>
            <div className="relative">
              {/* Namerno DRUGI kadar iste radne sesije, ne ista fotografija kao
                  na početnoj (koja koristi širi, zatamnjeni ambijentalni kadar
                  za hero pozadinu). Ovde je kadar iz istog snimka, ali blizu
                  na ruke, notes i tastaturu — vizuelna provera krug 7, stavka
                  Vizuali, ispravka 7. */}
              <Image
                src="/img/andjela-i-nikola-detalj-rada.webp"
                alt="Anđela i Nikola Stanković rade zajedno, beleške i analitika na laptopu, Duck Family Team"
                width={1085}
                height={600}
                priority
                fetchPriority="high"
                className="rounded-2xl border border-ink-border w-full aspect-[6/5] object-cover"
              />
            </div>
          </section>

          {/* ── KAKO RADIMO ──
              Popunjava prazninu koju je vizuelna provera tri puta primetila
              (krug 8, 9, 10, preostala ispravka 2): o-nama nije imalo ništa
              osim heroja i sertifikata. Namerno DRUGAČIJA kompozicija od
              vertikalne linije sa tačkama „Naš proces" na početnoj i od ravne
              liste kartica „Kako vodimo kampanju" na /usluge/google-ads:
              horizontalna traka od 4 koraka, veliki serifni broj i sitna
              ručno iscrtana wine linija (isti potez kao PodvucenaRec) kao
              razdelnik — signature element ovde prvi put služi kao razdelnik
              unutar sekcije, ne samo ispod naslova (stavka 8). Koraci su isti
              koje sajt već obećava drugde (kontakt CTA-ovi, cene, Footer). */}
          <section className="mb-16">
            <h2 className="font-display font-medium text-2xl md:text-3xl tracking-tight mb-3">
              Kako radimo
            </h2>
            <p className="text-ink-muted mb-10 max-w-2xl">
              Isti tok za svakog klijenta, bez obzira na uslugu.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
              {[
                {
                  n: '01',
                  t: 'Poziv ili poruka',
                  d: 'Javite se telefonom, mejlom ili preko forme za besplatnu konsultaciju, bez obaveze.',
                },
                {
                  n: '02',
                  t: 'Predlog i cena',
                  d: 'Pregledamo vaš biznis i predlažemo tačno ono što vam treba, sa jasnom cenom unapred.',
                },
                {
                  n: '03',
                  t: 'Radimo',
                  d: 'Svaku kampanju, sajt ili GBP profil radimo nas dvoje lično, ne prosleđujemo nalog nepoznatom timu.',
                },
                {
                  n: '04',
                  t: 'Rezultati i izveštaj',
                  d: 'Pratimo performanse i šaljemo mesečne izveštaje sa konkretnim brojkama, ne uopštenim frazama.',
                },
              ].map((item) => (
                <div key={item.n}>
                  <div className="font-display font-medium text-4xl md:text-5xl text-wine-text mb-2">
                    {item.n}
                  </div>
                  <svg viewBox="0 0 60 10" className="w-12 h-2.5 mb-4" aria-hidden="true" focusable="false">
                    <path
                      d="M2 6C10 2 16 8 26 5C36 2 42 8 58 4"
                      stroke="#8C2438"
                      strokeWidth="2.2"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                  <h3 className="font-display font-medium text-lg mb-2">{item.t}</h3>
                  <p className="text-ink-muted text-sm leading-relaxed">{item.d}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── SERTIFIKATI ── */}
          <section className="mb-16">
            <h2 className="font-display font-medium text-2xl md:text-3xl tracking-tight mb-6">
              Sertifikati
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-ink-surface border border-ink-border rounded-2xl p-6">
                <div className="w-12 h-12 rounded-full bg-wine/15 border border-wine flex items-center justify-center mb-4">
                  <span className="font-mono text-wine-text text-xs font-semibold tracking-wide">GA</span>
                </div>
                <h3 className="font-medium">Nikola Stanković</h3>
                <p className="text-ink-muted text-sm mb-4">Sertifikovani Google Ads stručnjak</p>
                <a
                  href="/img/nikola-stankovic-slika-sertifikata.png"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-wine-text text-xs font-mono uppercase tracking-widest hover:text-ink-text transition"
                >
                  Pogledaj sertifikat →
                </a>
              </div>
              <div className="bg-ink-surface border border-ink-border rounded-2xl p-6">
                <div className="w-12 h-12 rounded-full bg-wine/15 border border-wine flex items-center justify-center mb-4">
                  <span className="font-mono text-wine-text text-xs font-semibold tracking-wide">GA</span>
                </div>
                <h3 className="font-medium">Anđela Stanković</h3>
                <p className="text-ink-muted text-sm mb-4">Sertifikovani Google Ads stručnjak</p>
                <a
                  href="/img/andjela-slika-sertifikata.png"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-wine-text text-xs font-mono uppercase tracking-widest hover:text-ink-text transition"
                >
                  Pogledaj sertifikat →
                </a>
              </div>
            </div>
          </section>

        </div>
      </main>
      <Footer
        ctaHeading="Upoznajmo se"
        ctaDescription="Besplatna konsultacija, bez obaveze."
      />
    </>
  )
}
