import type { Metadata } from 'next'
import { Fraunces, IBM_Plex_Sans } from 'next/font/google'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/next'
import CookieConsent from '@/components/CookieConsent'
import Aurora from '@/components/Aurora'
import MotionRuntime from '@/components/MotionRuntime'
import { GA_MEASUREMENT_ID } from '@/lib/analytics'
import './globals.css'

// latin-ext nosi č, ć, š, ž, đ — praktično svaka srpska rečenica ima bar jedno
// od tih slova, pa je taj podskup na ovom sajtu kritičan, ne opcioni.
//
// Težina 400 je 2026-09-27 uklonjena radi LCP-a (manje font fajlova za preuzimanje
// pre prvog prikaza). Provereno pre uklanjanja: `font-display` bez eksplicitne
// `font-medium`/`font-semibold` klase (dakle na 400) postoji samo na par sitnih,
// dekorativnih mesta (brojevi numerisanih listi u blogu, cifra u „step-dot“ na
// početnoj, ogroman upola providan navodnik u Testimonials) — tamo će sad pasti
// na najbližu učitanu težinu (500), vizuelno gotovo neprimetno.
const fraunces = Fraunces({
  subsets: ['latin', 'latin-ext'],
  weight: ['500', '600'],
  variable: '--font-display',
  display: 'swap',
  preload: true,
})

// 600 je dodat 2026-09-27: dugmad (`font-semibold`), `font-bold` i <strong> su
// tražili težinu koja nije bila učitana, pa ih je browser „podebljavao“ sam
// (lažni bold, razmazana slova na CTA dugmadima). Sada postoji prava 600 težina.
// Sve tri težine (400/500/600) su i dalje potrebne: 600 nosi SVE primarne CTA
// dugmad na sajtu (`font-semibold`, ~25 mesta), 500 je najčešća težina teksta na
// sajtu, a 400 je podrazumevana težina pasusa. Nijedna se nije mogla ukloniti bez
// vidljive štete, za razliku od Fraunces 400 i cele porodice IBM Plex Mono iznad.
const plexSans = IBM_Plex_Sans({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600'],
  variable: '--font-sans',
  display: 'swap',
  preload: true,
})

// IBM Plex Mono je 2026-09-27 uklonjen u celini radi LCP-a (treća samohostovana
// porodica fontova, dodatni network zahtevi za sitne oznake/brojeve/cene koje se
// pojavljuju odmah iznad preloma na svakoj stranici — breadcrumb, eyebrow, cene).
// `font-mono` u tailwind.config.js sad vodi na sistemski monospace stek umesto na
// ovu porodicu: brojevi i cene ostaju monospace (poravnati, fiksne širine cifara),
// samo bez Plex Mono-ovih specifičnih slovnih oblika.

const siteUrl = 'https://www.duckfamilyteam.online'

// Jedan @id za firmu, da Google ne vidi dva nepovezana poslovna entiteta
// (ProfessionalService ovde i LocalBusiness na početnoj).
// Namerno bez `export`: Next dozvoljava da layout izvozi samo poznati skup
// imena (default, metadata, viewport…), pa je `export const ORGANIZATION_ID`
// obarao `tsc --noEmit` na generisanim tipovima u .next/types. Konstanta se
// ionako koristi samo u ovom fajlu.
const ORGANIZATION_ID = `${siteUrl}/#organizacija`

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Google Ads i Google Business profil | Duck Family Team',
    template: '%s | Duck Family Team',
  },
  description:
    'Google Ads kampanje, Google Business profil, sajtovi i AI agenti za firme u Srbiji. Merimo pozive i upite, ne klikove. Besplatna konsultacija.',
  authors: [{ name: 'Duck Family Team', url: siteUrl }],
  creator: 'Duck Family Team',
  publisher: 'Duck Family Team',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // openGraph.images i twitter.images namerno nisu navedeni — sliku isporučuje
  // app/opengraph-image.tsx, pa se generiše iz koda i ne može da nedostaje.
  openGraph: {
    type: 'website',
    locale: 'sr_RS',
    url: siteUrl,
    siteName: 'Duck Family Team',
    title: 'Duck Family Team | Google Ads i Google Business profil',
    description:
      'Pretvaramo klikove u kupce. Google Ads kampanje, Google Business profil i brzi sajtovi, sa merenjem koje pokazuje šta donosi upite.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Duck Family Team | Google Ads i Google Business profil',
    description:
      'Google Ads kampanje, Google Business profil i brzi sajtovi. Merljivi rezultati, bez skrivenih troškova.',
  },
  // Namerno bez `alternates.canonical` na nivou layouta: taj canonical nasleđuje
  // SVAKA stranica koja ne postavi sopstveni, pa je npr. 404 stranica tvrdila da
  // je kanonska adresa početna. Svaka stranica postavlja svoj canonical sama.
  verification: {
    google: 'c13b37c4c11f0b33',
  },
}

const webSiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${siteUrl}/#sajt`,
  name: 'Duck Family Team',
  url: siteUrl,
  description: 'Agencija za Google Ads, Google Business profil, izradu sajtova i AI agente za firme u Srbiji.',
  inLanguage: 'sr-Latn-RS',
  publisher: { '@id': ORGANIZATION_ID },
}

const googleMapsUrl = 'https://www.google.com/maps?cid=13771670212645560743'

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': ORGANIZATION_ID,
  name: 'Duck Family Team - Online Marketing',
  alternateName: 'Duck Family Team',
  url: siteUrl,
  logo: `${siteUrl}/img/logo-za-nasu-agenciju.png`,
  image: `${siteUrl}/img/logo-za-nasu-agenciju.png`,
  description: 'Agencija za Google Ads, Google Business profil, izradu sajtova i AI agente za firme u Srbiji.',
  telephone: '+381643877524',
  email: 'stankovic.s.nikola@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Porodice Josipović 2',
    addressLocality: 'Sremčica',
    addressRegion: 'Beograd',
    postalCode: '11253',
    addressCountry: 'RS',
  },
  hasMap: googleMapsUrl,
  areaServed: 'RS',
  sameAs: ['https://www.instagram.com/duckfamilyteam/', googleMapsUrl],
  priceRange: '$$',
  serviceType: ['Google Ads', 'Google Business profil', 'Izrada sajtova', 'AI agenti'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // suppressHydrationWarning je ovde obavezan: inline skripta u <head> doda
    // klasu `js` na <html> pre nego što React krene da hidratira, pa se server
    // i klijent nužno razlikuju baš u tom atributu. Isti obrazac koriste i
    // biblioteke za temu (next-themes). Ne utiče na decu, samo na ovaj element.
    <html
      lang="sr-Latn-RS"
      suppressHydrationWarning
      className={`${fraunces.variable} ${plexSans.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {/* Sve što se skriva pre ulazne animacije skriveno je pod `.js` klasom.
            Ova skripta je jedini način da se klasa postavi PRE prvog paint-a —
            zato je inline i blokirajuća, a ne `next/script`. Ako JavaScript ne
            radi, klase nema, ništa se ne skriva i ceo sadržaj je odmah vidljiv.
            Time je i stari <noscript> blok postao nepotreban. */}
        {/* Ista skripta odlučuje i da li se baner za kolačiće prikazuje: ako u
            localStorage nema izbora, doda klasu `cc-open` pre prvog paint-a, pa
            se baner iscrta zajedno sa sadržajem umesto posle hidracije (vidi
            components/CookieConsent.tsx — to je ranije bio LCP element). */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(d){d.classList.add('js');try{if(!localStorage.getItem('cookie_consent'))d.classList.add('cc-open')}catch(e){d.classList.add('cc-open')}})(document.documentElement)`,
          }}
        />
      </head>
      <body className="font-sans antialiased bg-ink-bg text-ink-text">
        {/* Consent Mode v2, osnovni režim. Ovde se samo pripremi `gtag` red i
            podrazumevano stanje `denied`; sam gtag.js se učitava TEK posle
            pristanka (loadGoogleAnalytics u CookieConsent.tsx), pa Google pre
            izbora posetioca ne dobija nijedan zahtev. Reklamni tagovi su
            uklonjeni sa sajta, pa se ad_* nikad ne odobrava. */}
        <Script id="consent-default" strategy="beforeInteractive">
          {`
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('consent', 'default', {
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  analytics_storage: 'denied',
  wait_for_update: 500
});
gtag('js', new Date());
gtag('config', '${GA_MEASUREMENT_ID}');
try {
  if (localStorage.getItem('cookie_consent') === 'granted') {
    gtag('consent', 'update', { analytics_storage: 'granted' });
    var s = document.createElement('script');
    s.id = 'ga4-gtag';
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}';
    document.head.appendChild(s);
  }
} catch (e) {}
          `}
        </Script>

        {/* Traka napretka skrola i pozadinski slojevi stoje ispod sadržaja. */}
        <div className="scroll-progress" data-scroll-progress aria-hidden="true" />
        <Aurora />

        {/* Baner je prvi u redosledu tastature: ko ga vidi, do njega stiže prvim
            Tab-om, a ne tek posle cele stranice. Kad je skriven, ne postoji za Tab. */}
        <CookieConsent />

        {children}

        {/* Custom cursor je uklonjen: sa svetlom koje prati miša i magnetnim
            dugmadima prsten je postao vizuelni šum, `mix-blend-mode: difference`
            je skup za GPU, a skrivanje sistemskog kursora smeta posetiocima
            kojima ovaj sajt prodaje — vlasnicima lokalnih firmi. */}
        <MotionRuntime />
        {/* Vercel Web Analytics — bez kolačića i bez ličnih podataka. */}
        <Analytics />
      </body>
    </html>
  )
}
