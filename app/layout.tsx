import type { Metadata } from 'next';
import { Inter, Space_Grotesk, Syne } from 'next/font/google';
import './globals.css';

const syneFont = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
  weight: ['800'],
});

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
  metadataBase: new URL('https://www.nuvora.studio'),
  title: {
    default: 'Nuvora — Global AI product studio',
    template: '%s | Nuvora',
  },
  description:
    'Nuvora delivers AI MVPs, web apps, custom agents, and automation for founders worldwide with async-first delivery and rapid launch timelines.',
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
    title: 'Nuvora — Global AI product studio',
    description:
      'Nuvora delivers AI MVPs, web apps, custom agents, and automation for founders worldwide with async-first delivery and rapid launch timelines.',
    type: 'website',
    url: 'https://www.nuvora.studio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nuvora — Global AI product studio',
    description:
      'Nuvora delivers AI MVPs, web apps, custom agents, and automation for founders worldwide with async-first delivery and rapid launch timelines.',
  },
  authors: [{ name: 'Nuvora', url: 'https://www.nuvora.studio' }],
  other: {
    distribution: 'global',
  },
  alternates: {
    canonical: 'https://www.nuvora.studio/',
    languages: {
      'en-US': '/',
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${headingFont.variable} ${bodyFont.variable} ${syneFont.variable} font-sans bg-surface text-slate-100`}>{children}</body>
    </html>
  );
}
