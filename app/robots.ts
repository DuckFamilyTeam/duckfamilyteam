import { MetadataRoute } from 'next'

// Svaka imenovana grupa nosi sopstveni `disallow: '/api/'`: crawler koji
// pronađe grupu sa svojim imenom čita SAMO nju, a ne i fallback `*`, pa bi
// bez toga imenovani botovi smeli na /api/ rute.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // ─── GOOGLE ───────────────────────────────────────
      { userAgent: 'Googlebot', allow: '/', disallow: '/api/' },
      { userAgent: 'Google-Extended', allow: '/', disallow: '/api/' },
      // ─── OPENAI / CHATGPT ─────────────────────────────
      { userAgent: 'GPTBot', allow: '/', disallow: '/api/' },
      { userAgent: 'OAI-SearchBot', allow: '/', disallow: '/api/' },
      { userAgent: 'ChatGPT-User', allow: '/', disallow: '/api/' },
      // ─── ANTHROPIC / CLAUDE ───────────────────────────
      { userAgent: 'ClaudeBot', allow: '/', disallow: '/api/' },
      { userAgent: 'Claude-SearchBot', allow: '/', disallow: '/api/' },
      // ─── PERPLEXITY ───────────────────────────────────
      { userAgent: 'PerplexityBot', allow: '/', disallow: '/api/' },
      { userAgent: 'Perplexity-User', allow: '/', disallow: '/api/' },
      // ─── xAI / GROK ───────────────────────────────────
      { userAgent: 'xAI-Bot', allow: '/', disallow: '/api/' },
      // ─── META / LLAMA ─────────────────────────────────
      { userAgent: 'Meta-ExternalAgent', allow: '/', disallow: '/api/' },
      { userAgent: 'Meta-ExternalFetcher', allow: '/', disallow: '/api/' },
      // ─── MICROSOFT / BING / COPILOT ───────────────────
      { userAgent: 'Bingbot', allow: '/', disallow: '/api/' },
      { userAgent: 'BingPreview', allow: '/', disallow: '/api/' },
      // ─── APPLE ────────────────────────────────────────
      { userAgent: 'Applebot', allow: '/', disallow: '/api/' },
      { userAgent: 'Applebot-Extended', allow: '/', disallow: '/api/' },
      // ─── OSTALI AI CRAWLERI ───────────────────────────
      { userAgent: 'cohere-ai', allow: '/', disallow: '/api/' },
      { userAgent: 'YouBot', allow: '/', disallow: '/api/' },
      { userAgent: 'DuckAssistBot', allow: '/', disallow: '/api/' },
      { userAgent: 'Bytespider', allow: '/', disallow: '/api/' },
      // ─── FALLBACK ─────────────────────────────────────
      { userAgent: '*', allow: '/', disallow: '/api/' },
    ],
    sitemap: 'https://www.duckfamilyteam.online/sitemap.xml',
  }
}
