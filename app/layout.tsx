import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
  display: 'swap',
})

const siteUrl = 'https://www.duckfamilyteam.online'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Google Ads Agencija Srbija | SEO & GA4 Analitika | Duck Family Team',
    template: '%s | Duck Family Team',
  },
  description:
    'Sertifikovani Google Ads stručnjaci iz Srbije. Povećajte prodaju uz precizno targetiranje, istraživanje ključnih reči i naprednu GA4 analitiku. Duck Family Team — Vaš partner za ROI.',
  keywords: [
    'Google Ads agencija',
    'Google Ads Srbija',
    'Google oglasi',
    'SEO optimizacija Srbija',
    'digitalni marketing Srbija',
    'GA4 analitika',
    'PPC stručnjak',
    'povećanje prodaje',
    'remarketing',
    'Duck Family Team',
  ],
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
  openGraph: {
    type: 'website',
    locale: 'sr_RS',
    url: siteUrl,
    siteName: 'Duck Family Team',
    title: 'Duck Family Team | Eksperti za Google Ads i SEO u Srbiji',
    description:
      'Pretvaramo klikove u kupce. Sertifikovana agencija fokusirana na profitabilne Google Ads kampanje i SEO optimizaciju.',
    images: [
      {
        url: '/img/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Duck Family Team — Google Ads & SEO Agencija',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Duck Family Team | Google Ads & SEO Agencija',
    description: 'Pretvaramo klikove u kupce. Sertifikovana agencija za Google Ads i SEO.',
    images: ['/img/og-image.png'],
  },
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    google: 'c13b37c4c11f0b33',
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Duck Family Team',
  url: siteUrl,
  logo: `${siteUrl}/img/logo-za-nasu-agenciju.png`,
  description:
    'Sertifikovana Google Ads agencija u Srbiji. Specijalizovani za PPC, SEO i GA4 analitiku.',
  telephone: '+381643877524',
  email: 'stankovic.s.nikola@gmail.com',
  areaServed: 'RS',
  sameAs: ['https://www.instagram.com/duckfamilyteam/'],
  priceRange: '$$',
  serviceType: ['Google Ads', 'SEO Optimizacija', 'GA4 Analitika', 'Digitalni Marketing'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sr" className={jakarta.variable}>
      <head>
        <link rel="icon" type="image/png" href="/img/logo-za-nasu-agenciju.png" />
        <link rel="apple-touch-icon" href="/img/logo-za-nasu-agenciju.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="font-jakarta antialiased bg-[#fafafa] text-slate-900 overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
