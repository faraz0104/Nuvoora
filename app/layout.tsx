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
    default: 'Nuvora — AI Product Studio | Ship AI MVPs in 2 Weeks',
    template: '%s | Nuvora',
  },
  description:
    'Nuvora is a global AI product studio that builds AI MVPs, custom AI agents, SaaS apps, and workflow automation for founders and operators — async-first, shipped in weeks.',
  keywords: [
    'AI product studio',
    'AI MVP development',
    'custom AI agents',
    'workflow automation',
    'SaaS MVP',
    'AI development agency',
    'async AI development',
    'AI web apps',
    'AI automation for startups',
  ],
  authors: [{ name: 'Nuvora', url: 'https://www.nuvora.studio' }],
  creator: 'Nuvora',
  publisher: 'Nuvora',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  openGraph: {
    type: 'website',
    siteName: 'Nuvora',
    title: 'Nuvora — AI Product Studio | Ship AI MVPs in 2 Weeks',
    description: 'Build and launch AI MVPs, custom agents, and automation with Nuvora — async-first, worldwide delivery.',
    url: 'https://www.nuvora.studio',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@nuvorastudio',
    creator: '@nuvorastudio',
    title: 'Nuvora — AI Product Studio | Ship AI MVPs in 2 Weeks',
    description: 'Build and launch AI MVPs, custom agents, and automation with Nuvora — async-first, worldwide delivery.',
  },
  alternates: {
    canonical: 'https://www.nuvora.studio/',
    languages: { 'en-US': '/' },
  },
  category: 'technology',
  other: { distribution: 'global' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${headingFont.variable} ${bodyFont.variable} ${syneFont.variable} font-sans bg-surface text-slate-100`}>
        {children}
      </body>
    </html>
  );
}
