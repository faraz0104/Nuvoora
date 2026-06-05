import { NextResponse } from 'next/server';

export async function GET() {
  const text = `User-agent: *
Disallow:
Sitemap: https://www.aiagency.studio/sitemap.xml
`;

  return new NextResponse(text, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
