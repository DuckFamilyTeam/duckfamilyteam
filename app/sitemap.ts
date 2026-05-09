import { MetadataRoute } from 'next'

const baseUrl = 'https://www.duckfamilyteam.online'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/astro-sajtovi`,
      lastModified: new Date('2026-05-09'),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/blog/google-ads-trosak`,
      lastModified: new Date('2026-04-01'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/seo-2026`,
      lastModified: new Date('2026-03-15'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/ga4-vodic`,
      lastModified: new Date('2026-02-28'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
}
