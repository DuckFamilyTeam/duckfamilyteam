/** @type {import('next').NextConfig} */
const nextConfig = {
    compress: true,
    poweredByHeader: false,
    images: {
          // AVIF vraćen 2026-09-27 na Next.js 16.3.6: ranjivost GHSA-2xp9-vwfh-vxw4
          // (Next.js 14.x Image Optimization API) je zakrpljena u 15.5.24+/16.x.
          // Merenje istog dana (/_next/image, w=828, q=75, lokalno):
          // fotografija (andjela-i-nikola hero) 52.136 → 34.971 B (-33%),
          // Higgsfield ilustracije 9.122→8.180 B i 12.156→8.064 B (-10% / -34%).
          // Lighthouse mobilni na `/` i `/usluge/ai-agenti` bez regresije na
          // LCP/CLS/TBT posle uključivanja (vidi 05_Odrzavanje_Backup/
          // 2026-09-27-cene-pravni-nextjs-vizuali.md, dopuna).
          formats: ['image/avif', 'image/webp'],
          },
    async redirects() {
          return [
            { source: '/google-ads', destination: '/usluge/google-ads', permanent: true },
            { source: '/izrada-sajtova', destination: '/usluge/izrada-sajtova', permanent: true },
            { source: '/seo-optimizacija', destination: '/usluge/izrada-sajtova', permanent: true },
                ]
    },
    async headers() {
          const isDev = process.env.NODE_ENV !== 'production'
          // Napomena o 'unsafe-inline' u script-src: Next.js App Router ubacuje
          // sopstvene inline skripte za streaming payload (self.__next_f.push).
          // Jedina alternativa je nonce preko middleware-a, a nonce mora biti
          // jedinstven po zahtevu — što bi ceo ovaj statični sajt prebacilo iz
          // SSG u dinamičko renderovanje. Za marketinški sajt to je lošija
          // razmena nego zadržati 'unsafe-inline'.
          const csp = [
                  "default-src 'self'",
                  // va.vercel-scripts.com je nedostajao, pa je <Analytics /> iz
                  // @vercel/analytics bio tiho blokiran CSP-om — komponenta je
                  // stajala u layoutu, ali nijedan podatak nikad nije stigao.
                  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ''} https://www.googletagmanager.com https://www.google-analytics.com https://va.vercel-scripts.com`,
                  "style-src 'self' 'unsafe-inline'",
                  "img-src 'self' data: blob: https://www.google.com https://www.gstatic.com",
                  "font-src 'self' data:",
                  "connect-src 'self' https://www.google-analytics.com https://*.google-analytics.com https://*.analytics.google.com https://www.googletagmanager.com https://va.vercel-scripts.com",
                  "frame-src https://www.google.com",
                  // Obe forme idu preko sopstvenih API ruta, pa Formspree više nije potreban.
                  "form-action 'self'",
                  "base-uri 'self'",
                  "object-src 'none'",
                  "frame-ancestors 'none'",
                  'upgrade-insecure-requests',
                ].join('; ')

          const permissionsPolicy = [
                  'camera=()',
                  'microphone=()',
                  'geolocation=()',
                  'browsing-topics=()',
                  'interest-cohort=()',
                  'payment=()',
                  'usb=()',
                ].join(', ')

      return [
        {
                  source: '/(.*)',
                  headers: [
                    { key: 'X-Content-Type-Options', value: 'nosniff' },
                    { key: 'X-Frame-Options', value: 'DENY' },
                    { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
                    { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
                    { key: 'Content-Security-Policy', value: csp },
                    { key: 'Permissions-Policy', value: permissionsPolicy },
                    { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
                    { key: 'Cross-Origin-Resource-Policy', value: 'same-site' },
                            ],
        },
            ]
    },
}

module.exports = nextConfig
