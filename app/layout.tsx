import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

const headingFont = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const bodyFont = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.aiagency.studio'),
  title: {
    default: 'Aiagency — Global AI product studio',
    template: '%s | Aiagency',
  },
  description:
    'Aiagency delivers AI MVPs, web apps, custom agents, and automation for founders worldwide with async-first delivery and rapid launch timelines.',
  keywords: [
    'AI product studio',
    'AI MVP development',
    'custom AI agents',
    'automation for startups',
    'async-first delivery',
    'global AI development',
    'AI web apps',
    'founder-focused AI products',
  ],
  openGraph: {
    title: 'Aiagency — Global AI product studio',
    description:
      'Aiagency delivers AI MVPs, web apps, custom agents, and automation for founders worldwide with async-first delivery and rapid launch timelines.',
    type: 'website',
    url: 'https://www.aiagency.studio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aiagency — Global AI product studio',
    description:
      'Aiagency delivers AI MVPs, web apps, custom agents, and automation for founders worldwide with async-first delivery and rapid launch timelines.',
  },
  authors: [{ name: 'Aiagency', url: 'https://www.aiagency.studio' }],
  other: {
    distribution: 'global',
  },
  alternates: {
    canonical: 'https://www.aiagency.studio/',
    languages: {
      'en-US': '/',
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${headingFont.variable} ${bodyFont.variable} font-sans bg-surface text-slate-100`}>{children}</body>
    </html>
  );
}
