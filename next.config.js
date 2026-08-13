/** @type {import('next').NextConfig} */
const nextConfig = {
    compress: true,
    poweredByHeader: false,
    images: {
          formats: ['image/avif', 'image/webp'],
          remotePatterns: [
            {
                      protocol: 'https',
                      hostname: 'images.unsplash.com',
            },
                ],
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
                  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ''} https://www.googletagmanager.com https://www.google-analytics.com`,
                  "style-src 'self' 'unsafe-inline'",
                  "img-src 'self' data: blob: https://images.unsplash.com https://www.google.com https://www.gstatic.com",
                  "font-src 'self' data:",
                  "connect-src 'self' https://www.google-analytics.com https://*.google-analytics.com https://*.analytics.google.com https://www.googletagmanager.com",
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
                            ],
        },
            ]
    },
}

module.exports = nextConfig
