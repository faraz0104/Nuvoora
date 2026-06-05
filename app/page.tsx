import { ArrowRight, Bolt, Code2, Cpu, Layers, Lightbulb, ShieldCheck, Sparkles, Target } from 'lucide-react';
import { AnimatedMockup } from '@/components/AnimatedMockup';
import { FeatureCard } from '@/components/FeatureCard';
import { FaqAccordion } from '@/components/FaqAccordion';
import { Header } from '@/components/Header';
import { SectionHeading } from '@/components/SectionHeading';

export const metadata = {
  title: 'Aiagency — Global AI product studio for founders and operators',
  description:
    'Aiagency helps founders worldwide launch AI MVPs, web apps, custom agents, and automation with async-first delivery and product-grade execution.',
  metadataBase: new URL('https://www.aiagency.studio'),
  keywords: [
    'AI product studio',
    'AI MVPs',
    'custom AI agents',
    'workflow automation',
    'global AI development',
    'async-first delivery',
    'startup AI products',
    'AI web apps',
  ],
  openGraph: {
    title: 'Aiagency — Global AI product studio',
    description:
      'Aiagency helps founders worldwide launch AI MVPs, web apps, custom agents, and automation with async-first delivery and product-grade execution.',
    type: 'website',
    url: 'https://www.aiagency.studio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aiagency — Global AI product studio',
    description:
      'Aiagency helps founders worldwide launch AI MVPs, web apps, custom agents, and automation with async-first delivery and product-grade execution.',
  },
  alternates: {
    canonical: 'https://www.aiagency.studio/',
    languages: {
      'en-US': '/',
    },
  },
};

const serviceCards = [
  { icon: Bolt, title: 'SaaS MVPs', description: 'Launch product-ready SaaS experiences with AI-native workflows.' },
  { icon: Code2, title: 'AI web apps', description: 'Custom web interfaces that turn AI models into polished user experiences.' },
  { icon: Cpu, title: 'Custom AI agents', description: 'Task-driven assistants built for customer support, sales, operations, and growth.' },
  { icon: Layers, title: 'Internal tools', description: 'Internal dashboards and automation that speed up teams without adding overhead.' },
  { icon: ShieldCheck, title: 'Support agents', description: 'Reliable virtual agents that handle tickets, triage, and repetitive work.' },
  { icon: Target, title: 'Workflow automation', description: 'Automations that connect prompts, data, and triggers into live business processes.' },
];

const twoPathItems = [
  {
    title: 'Build an MVP',
    description: 'Validate demand quickly with a polished AI product designed for early users and investor conversations.',
    cta: 'Start MVP project',
    href: '/contact',
  },
  {
    title: 'Automate with AI',
    description: 'Free your team from manual work with custom agents, pipelines, and embedded AI workflows.',
    cta: 'Plan automation',
    href: '/contact',
  },
];

const pricingTiers = [
  {
    name: 'Launch',
    price: '$12k',
    description: 'Best for first-time founders and early validation projects.',
    features: ['Core product strategy', 'Lean UI & UX', '2-week delivery window', 'Async collaboration'],
  },
  {
    name: 'Scale',
    price: '$22k',
    popular: true,
    description: 'For scaling teams that need custom AI apps and integrations.',
    features: ['Advanced AI workflows', 'API & database integration', 'Detailed QA', 'Post-launch tuning'],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For complex AI systems, internal automation, and multi-step launches.',
    features: ['Dedicated delivery lane', 'Custom security reviews', 'Extended support', 'Tailored architecture'],
  },
];

const faqItems = [
  {
    question: 'How quickly can you start my project?',
    answer:
      'We begin with a scoped proposal within 48 hours and typically ship MVPs or pilot automation within 1–3 weeks, depending on scope.',
  },
  {
    question: 'What does async-first delivery mean?',
    answer:
      'We use Loom updates, written briefs, and Slack to move fast without forced meetings. You stay informed and in control on your own schedule.',
  },
  {
    question: 'Can you integrate with our existing tools?',
    answer:
      'Yes — we connect to modern APIs, databases, CRMs, and productivity platforms to make your AI system fit your existing work stack.',
  },
  {
    question: 'Do you help with model selection and prompt engineering?',
    answer:
      'Absolutely. We recommend the right model, build prompt structures, and ensure the AI behavior aligns with your business goals.',
  },
];

export default function HomePage() {
  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-radiance blur-3xl" />

      <Header />

      <section id="top" className="relative mx-auto max-w-7xl px-6 pb-20 pt-14 lg:px-8 lg:pt-20">
        <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="max-w-2xl">
            <p className="mb-6 inline-flex rounded-full border border-slate-600/50 bg-slate-950/70 px-4 py-2 text-sm uppercase tracking-[0.3em] text-slate-300">
              Async-first product studio
            </p>
            <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl xl:text-7xl">
              Turn your AI concept into a polished product, fast.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              Aiagency designs and launches AI MVPs, custom agents, and automation for founders and operators across industries. We ship premium products in weeks, not months.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-glow px-6 py-3 text-sm font-semibold text-slate-950 shadow-soft transition hover:-translate-y-0.5"
              >
                Book a brief
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-full border border-slate-600/40 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-white/60 hover:text-white"
              >
                Explore services
              </a>
            </div>

            <div className="mt-12 grid gap-3 sm:grid-cols-3">
              {['48h response', 'Async-first', 'Worldwide'].map((item) => (
                <div key={item} className="rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-x-0 top-0 h-[420px] bg-gradient-to-br from-slate-900/80 to-slate-950/0 blur-3xl" />
            <AnimatedMockup />
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <SectionHeading eyebrow="What we build" title="AI products for every launch stage." description="From MVPs to advanced automation, we design the systems your team uses every day." />
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {serviceCards.map((item) => (
            <FeatureCard key={item.title} icon={item.icon} title={item.title} description={item.description} />
          ))}
        </div>
      </section>

      <section id="work" className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          {twoPathItems.map((item) => (
            <article key={item.title} className="group rounded-[2rem] border border-white/10 bg-surface2 p-8 shadow-card transition hover:-translate-y-1 hover:border-glow/30">
              <div className="mb-4 inline-flex rounded-full bg-slate-800 px-3 py-1 text-xs uppercase tracking-[0.3em] text-slate-400">
                {item.title}
              </div>
              <h2 className="text-2xl font-semibold text-white">{item.title}</h2>
              <p className="mt-4 text-slate-300">{item.description}</p>
              <a
                href={item.href}
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-glow transition group-hover:text-white"
              >
                {item.cta}
                <ArrowRight className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="pricing" className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <SectionHeading eyebrow="Pricing" title="Clear plans for focused projects." description="No hidden fees, just scope-aligned pricing that helps you move quickly and confidently." />
        <div className="grid gap-6 xl:grid-cols-3">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-[2rem] border p-8 shadow-card transition ${tier.popular ? 'border-glow/40 bg-slate-900/80' : 'border-white/10 bg-surface2'}`}
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-400">{tier.name}</p>
                  <p className="mt-2 text-4xl font-semibold text-white">{tier.price}</p>
                </div>
                {tier.popular ? <span className="rounded-full bg-glow/15 px-3 py-1 text-xs font-semibold text-glow">Most popular</span> : null}
              </div>
              <p className="mt-6 text-slate-300">{tier.description}</p>
              <ul className="mt-8 space-y-3 text-sm text-slate-300">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <Sparkles className="mt-1 h-4 w-4 text-glow" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="/contact"
                className="mt-10 inline-flex w-full items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
              >
                Start this plan
              </a>
            </div>
          ))}
        </div>
      </section>

      <section id="process" className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <SectionHeading eyebrow="Process" title="A simple, dependable workflow." description="Four steps from your idea to a shipped product with transparent delivery and frequent updates." />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {[
            { title: 'Submit idea', description: 'Share your concept and goals so we can build the right scope.' },
            { title: 'Get plan', description: 'Receive a tailored proposal with timeline, outcomes, and cost.' },
            { title: 'Approve scope', description: 'Review the approach and confirm the launch path.' },
            { title: 'Build & launch', description: 'We execute, ship, and hand over a polished product.' },
          ].map((step, index) => (
            <div key={step.title} className="rounded-[2rem] border border-white/10 bg-surface2 p-8 shadow-card">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-800 text-lg font-semibold text-white">
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold text-white">{step.title}</h3>
              <p className="mt-3 text-slate-400">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <SectionHeading eyebrow="Why us" title="Built for founders who want speed without compromise." description="We combine product discipline, AI expertise, and polished interface design for fast-moving teams." />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {[
            { title: 'Confident delivery', description: 'Clear timelines, defined milestones, and no hidden surprises.' },
            { title: 'Design-led AI', description: 'Interfaces that make AI feel reliable and easy to use.' },
            { title: 'Operational readiness', description: 'We build with real workflows, handoffs, and support in mind.' },
            { title: 'Global partnership', description: 'Asynchronous collaboration for distributed teams and founders.' },
          ].map((benefit) => (
            <div key={benefit.title} className="rounded-[2rem] border border-white/10 bg-surface2 p-8 shadow-card transition hover:border-glow/30">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-slate-900 text-glow">
                <Lightbulb className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-semibold text-white">{benefit.title}</h3>
              <p className="mt-3 text-slate-400">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-7xl px-6 pb-28 lg:px-8">
        <SectionHeading eyebrow="FAQ" title="Common questions, answered." description="Accessible, honest detail about our process, timing, and capabilities." />
        <FaqAccordion items={faqItems} />
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900/95 to-slate-950 p-10 shadow-soft sm:p-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Ready to move forward?</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Let’s shape your AI product and ship it with confidence.
              </h2>
            </div>
            <a href="/contact" className="inline-flex items-center justify-center rounded-full bg-glow px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-white/90">
              Start the conversation
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-surface py-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>© {new Date().getFullYear()} Aiagency. Built for modern teams.</p>
          <div className="flex flex-wrap gap-4">
            <a href="/contact" className="transition hover:text-white">Contact</a>
            <a href="#pricing" className="transition hover:text-white">Pricing</a>
            <a href="#faq" className="transition hover:text-white">FAQ</a>
          </div>
        </div>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Aiagency',
            url: 'https://www.aiagency.studio',
            logo: 'https://www.aiagency.studio/logo.png',
            sameAs: [],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqItems.map((item) => ({
              '@type': 'Question',
              name: item.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer,
              },
            })),
          }),
        }}
      />
    </main>
  );
}
