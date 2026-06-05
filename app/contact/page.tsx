import { Mail, MapPin, Sparkles } from 'lucide-react';
import { ContactForm } from '@/components/ContactForm';
import { Header } from '@/components/Header';

export const metadata = {
  title: 'Contact Nuvora — Start Your AI Project Today',
  description:
    'Get in touch with Nuvora to launch your AI MVP, custom AI agent, or workflow automation. Submit your idea and receive a scoped proposal within 48 hours.',
  metadataBase: new URL('https://www.nuvora.studio'),
  keywords: [
    'hire AI development studio',
    'AI project inquiry',
    'start AI MVP',
    'AI agency contact',
    'AI proposal request',
    'build AI product',
    'custom AI agent development',
    'workflow automation agency',
  ],
  openGraph: {
    title: 'Contact Nuvora — Start Your AI Project',
    description: 'Submit your idea and get a scoped AI product proposal from Nuvora within 48 hours.',
    url: 'https://www.nuvora.studio/contact',
    siteName: 'Nuvora',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Nuvora — Start Your AI Project',
    description: 'Submit your idea and get a scoped AI product proposal from Nuvora within 48 hours.',
  },
  alternates: {
    canonical: 'https://www.nuvora.studio/contact',
    languages: { 'en-US': '/contact' },
  },
  robots: { index: true, follow: true },
};

const contactHighlights = [
  { icon: Mail,    title: 'Fast responses',        description: 'We reply within 48 hours with clear next steps and a scoped proposal.' },
  { icon: Sparkles,title: 'Focused scope',          description: 'You get a lean, actionable plan — not a long list of vague deliverables.' },
  { icon: MapPin,  title: 'Global collaboration',   description: 'Work async-first from anywhere using Loom, Slack, and shared docs.' },
];

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
      <Header />
      <section aria-label="Contact Nuvora" className="rounded-[2rem] border border-white/10 bg-surface2 p-10 shadow-soft sm:p-12">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Get in touch</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Start your AI project with a plan that moves fast.
            </h1>
            <p className="mt-6 text-slate-300 sm:text-lg">
              Share the details of your idea and we'll send a scoped proposal built around your timeline, users, and growth goals — within 48 hours.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {contactHighlights.map((item) => (
                <div key={item.title} className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
                  <item.icon className="h-5 w-5 text-glow" />
                  <h3 className="mt-4 text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-slate-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-card">
            <ContactForm />
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.nuvora.studio' },
              { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://www.nuvora.studio/contact' },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            name: 'Contact Nuvora',
            description: 'Start your AI project with Nuvora. Get a scoped proposal within 48 hours.',
            url: 'https://www.nuvora.studio/contact',
            mainEntity: {
              '@type': 'Organization',
              name: 'Nuvora',
              url: 'https://www.nuvora.studio',
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'sales',
                availableLanguage: 'English',
              },
            },
          }),
        }}
      />
    </main>
  );
}
