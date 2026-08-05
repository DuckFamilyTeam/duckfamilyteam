import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // ─── GOOGLE ───────────────────────────────────────
      { userAgent: 'Googlebot', allow: '/' },
      { userAgent: 'Google-Extended', allow: '/' },
      // ─── OPENAI / CHATGPT ─────────────────────────────
      { userAgent: 'GPTBot', allow: '/' },
      { userAgent: 'OAI-SearchBot', allow: '/' },
      { userAgent: 'ChatGPT-User', allow: '/' },
      // ─── ANTHROPIC / CLAUDE ───────────────────────────
      { userAgent: 'ClaudeBot', allow: '/' },
      { userAgent: 'Claude-SearchBot', allow: '/' },
      // ─── PERPLEXITY ───────────────────────────────────
      { userAgent: 'PerplexityBot', allow: '/' },
      { userAgent: 'Perplexity-User', allow: '/' },
      // ─── xAI / GROK ───────────────────────────────────
      { userAgent: 'xAI-Bot', allow: '/' },
      // ─── META / LLAMA ─────────────────────────────────
      { userAgent: 'Meta-ExternalAgent', allow: '/' },
      { userAgent: 'Meta-ExternalFetcher', allow: '/' },
      // ─── MICROSOFT / BING / COPILOT ───────────────────
      { userAgent: 'Bingbot', allow: '/' },
      { userAgent: 'BingPreview', allow: '/' },
      // ─── APPLE ────────────────────────────────────────
      { userAgent: 'Applebot', allow: '/' },
      { userAgent: 'Applebot-Extended', allow: '/' },
      // ─── OSTALI AI CRAWLERI ───────────────────────────
      { userAgent: 'cohere-ai', allow: '/' },
      { userAgent: 'YouBot', allow: '/' },
      { userAgent: 'DuckAssistBot', allow: '/' },
      { userAgent: 'Bytespider', allow: '/' },
      // ─── FALLBACK ─────────────────────────────────────
      { userAgent: '*', allow: '/', disallow: '/api/' },
    ],
    sitemap: 'https://www.duckfamilyteam.online/sitemap.xml',
  }
}
