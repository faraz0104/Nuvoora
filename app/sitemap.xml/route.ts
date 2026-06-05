import { NextResponse } from 'next/server';

const baseUrl = 'https://www.nuvora.studio';
const today = new Date().toISOString().split('T')[0];

const urls = [
  { path: '/',                          priority: '1.0', changefreq: 'weekly'  },
  { path: '/services',                  priority: '0.95', changefreq: 'weekly'  },
  { path: '/services/ai-mvp',           priority: '0.9', changefreq: 'monthly' },
  { path: '/services/ai-agents',        priority: '0.9', changefreq: 'monthly' },
  { path: '/services/automation',       priority: '0.9', changefreq: 'monthly' },
  { path: '/contact',                   priority: '0.85', changefreq: 'monthly' },
];

export async function GET() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url>
    <loc>${baseUrl}${u.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400, stale-while-revalidate=43200',
    },
  });
}
