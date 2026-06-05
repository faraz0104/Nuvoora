import { NextResponse } from 'next/server';

const baseUrl = 'https://www.aiagency.studio';

export async function GET() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>${baseUrl}/</loc>
      <priority>1.0</priority>
    </url>
    <url>
      <loc>${baseUrl}/contact</loc>
      <priority>0.8</priority>
    </url>
  </urlset>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
