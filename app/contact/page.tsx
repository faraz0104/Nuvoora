import { Mail, MapPin, Sparkles } from 'lucide-react';
import { ContactForm } from '@/components/ContactForm';
import { Header } from '@/components/Header';

export const metadata = {
  title: 'Contact — Aiagency',
  description:
    'Get in touch with Aiagency to launch AI MVPs, custom agents, and automation for teams around the world. Request a fast proposal today.',
  keywords: [
    'AI contact',
    'AI project inquiry',
    'startup AI agency',
    'global AI studio',
    'AI proposal request',
  ],
  alternates: {
    canonical: 'https://www.aiagency.studio/contact',
    languages: {
      'en-US': '/contact',
    },
  },
};

const contactHighlights = [
  { icon: Mail, title: 'Fast responses', description: 'We typically reply within 48 hours and keep next steps clear.' },
  { icon: Sparkles, title: 'Focused scope', description: 'You get a lean launch plan, not a long list of vague deliverables.' },
  { icon: MapPin, title: 'Global collaboration', description: 'Work async-first from anywhere, using Loom, Slack, and shared docs.' },
];

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
      <Header />
      <section className="rounded-[2rem] border border-white/10 bg-surface2 p-10 shadow-soft sm:p-12">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Contact</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Start your project with a plan that moves fast.
            </h1>
            <p className="mt-6 text-slate-300 sm:text-lg">
              Share the details of your idea and we’ll send a scoped proposal built around your timeline, audience, and growth goals.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {contactHighlights.map((item) => (
                <div key={item.title} className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
                  <item.icon className="h-5 w-5 text-glow" />
                  <h2 className="mt-4 text-lg font-semibold text-white">{item.title}</h2>
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
    </main>
  );
}
