import { MetadataRoute } from 'next'

const baseUrl = 'https://www.duckfamilyteam.online'

/**
 * `lastModified` se piše kao fiksan datum, nikad kao `new Date()`.
 *
 * `new Date()` se izračunava u trenutku build-a, pa je svaki deploy sajtu upisivao nov
 * `lastmod` i za stranice koje se nisu promenile. Provereno 2026-08-19: početna je u
 * sitemap-u imala `2026-08-19T18:56:54.732Z`, tačno vreme build-a, iako je poslednja
 * izmena sadržaja bila znatno ranije.
 *
 * Google uzima `lastmod` u obzir samo dok mu veruje, a datum koji se menja bez izmene
 * sadržaja je upravo signal zbog kog prestane da ga koristi. Kad se stranica stvarno
 * promeni, ovde se ručno upiše nov datum.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified: new Date('2026-08-16'),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/usluge/google-ads`,
      lastModified: new Date('2026-07-28'),
      changeFrequency: 'monthly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/usluge/izrada-sajtova`,
      lastModified: new Date('2026-07-28'),
      changeFrequency: 'monthly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/usluge/google-business-profil`,
      lastModified: new Date('2026-07-28'),
      changeFrequency: 'monthly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/rezultati`,
      lastModified: new Date('2026-07-28'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/rezultati/mobilni-vulkanizer-milan`,
      lastModified: new Date('2026-07-28'),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/cene`,
      lastModified: new Date('2026-07-28'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/o-nama`,
      lastModified: new Date('2026-07-28'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/kontakt`,
      lastModified: new Date('2026-07-28'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      // Datum poslednjeg objavljenog teksta. Menja se kad izađe nov post.
      lastModified: new Date('2026-08-19'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/koliko-kosta-google-ads`,
      lastModified: new Date('2026-08-19'),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/blog/google-business-profil`,
      lastModified: new Date('2026-07-23'),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/blog/astro-sajtovi`,
      lastModified: new Date('2026-05-09'),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/blog/google-ads-trosak`,
      lastModified: new Date('2026-06-23'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/seo-2026`,
      lastModified: new Date('2026-06-23'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/ga4-vodic`,
      lastModified: new Date('2026-02-28'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Pravne stranice — indeksiraju se, ali sa niskim prioritetom, da ne
    // preuzimaju crawl budžet od stranica koje donose upite.
    {
      url: `${baseUrl}/politika-privatnosti`,
      lastModified: new Date('2026-08-13'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/politika-kolacica`,
      lastModified: new Date('2026-08-13'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
}
