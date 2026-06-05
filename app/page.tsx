import { ArrowRight, Bolt, Code2, Cpu, Layers, Lightbulb, ShieldCheck, Sparkles, Star, Target } from 'lucide-react';
import { AnimatedMockup } from '@/components/AnimatedMockup';
import { FeatureCard } from '@/components/FeatureCard';
import { FaqAccordion } from '@/components/FaqAccordion';
import { Header } from '@/components/Header';
import { SectionHeading } from '@/components/SectionHeading';
import { FloatingOrbs } from '@/components/FloatingOrbs';
import { FadeIn } from '@/components/FadeIn';
import { TiltCard } from '@/components/TiltCard';

export const metadata = {
  title: 'Nuvora — AI Product Studio for Founders | AI MVPs & Custom Agents',
  description:
    'Nuvora is a global AI product studio that ships AI MVPs, custom AI agents, SaaS apps, and workflow automation in weeks. Async-first delivery for founders worldwide.',
  metadataBase: new URL('https://www.nuvora.studio'),
  keywords: [
    'AI product studio',
    'AI MVP development',
    'custom AI agents',
    'workflow automation services',
    'SaaS MVP development',
    'AI development agency',
    'async AI development',
    'startup AI products',
    'AI web apps',
    'AI automation for founders',
    'build AI MVP fast',
    'AI product development company',
  ],
  openGraph: {
    title: 'Nuvora — AI Product Studio | Ship AI MVPs in 2 Weeks',
    description:
      'Build and launch AI MVPs, custom agents, SaaS apps, and automation with Nuvora — async-first, worldwide delivery, 2-week turnaround.',
    type: 'website',
    url: 'https://www.nuvora.studio',
    siteName: 'Nuvora',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@nuvorastudio',
    title: 'Nuvora — AI Product Studio | Ship AI MVPs in 2 Weeks',
    description:
      'Build and launch AI MVPs, custom agents, SaaS apps, and automation with Nuvora — async-first, worldwide delivery, 2-week turnaround.',
  },
  alternates: {
    canonical: 'https://www.nuvora.studio/',
    languages: { 'en-US': '/' },
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  authors: [{ name: 'Nuvora', url: 'https://www.nuvora.studio' }],
};

const stats = [
  { value: '50+', label: 'AI products shipped' },
  { value: '30+', label: 'countries served' },
  { value: '14 days', label: 'average delivery' },
  { value: '100%', label: 'async workflow' },
];

const serviceCards = [
  { icon: Bolt,       title: 'SaaS MVPs',            description: 'Launch product-ready SaaS experiences with AI-native workflows built for real users.' },
  { icon: Code2,      title: 'AI web apps',           description: 'Custom web interfaces that turn AI models into polished, high-converting user experiences.' },
  { icon: Cpu,        title: 'Custom AI agents',      description: 'Task-driven assistants built for customer support, sales, operations, and growth teams.' },
  { icon: Layers,     title: 'Internal tools',        description: 'Internal dashboards and AI automation that speed up teams without adding overhead.' },
  { icon: ShieldCheck,title: 'Support agents',        description: 'Reliable virtual agents that handle tickets, triage issues, and reduce manual support work.' },
  { icon: Target,     title: 'Workflow automation',   description: 'Automations that connect prompts, data sources, and triggers into live business processes.' },
];

const twoPathItems = [
  {
    title: 'Build an AI MVP',
    description: 'Validate demand quickly with a polished AI product designed for early users and investor conversations. We scope, design, and ship in 2 weeks.',
    cta: 'Start MVP project',
    href: '/contact',
  },
  {
    title: 'Automate with AI',
    description: 'Free your team from manual work with custom agents, pipelines, and embedded AI workflows. We identify the bottleneck and automate it.',
    cta: 'Plan automation',
    href: '/contact',
  },
];

const pricingTiers = [
  {
    name: 'Launch',
    price: '$2,999',
    description: 'Best for first-time founders and early validation projects.',
    features: ['Core product strategy', 'Lean UI & UX', '2-week delivery window', 'Async collaboration'],
  },
  {
    name: 'Scale',
    price: '$6,999',
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

const testimonials = [
  {
    quote: 'Nuvora shipped our AI support agent in 10 days. The quality was product-grade and our whole team adopted it from day one.',
    author: 'Sarah M.',
    role: 'Founder · SaaS startup, United States',
  },
  {
    quote: 'We needed an internal AI dashboard fast. Nuvora scoped it clearly, communicated every step, and delivered ahead of schedule.',
    author: 'James T.',
    role: 'Operations Lead · Scale-up, United Kingdom',
  },
  {
    quote: "Best async experience I've had with any agency. Clear updates, fast delivery, and a polished MVP that impressed our investors.",
    author: 'Priya R.',
    role: 'Co-founder · AI startup, India',
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
  {
    question: 'What types of AI products do you build?',
    answer:
      'We build SaaS MVPs, custom AI agents, workflow automation pipelines, internal tools, support bots, and full-stack web apps powered by LLMs.',
  },
  {
    question: 'Do you offer post-launch support?',
    answer:
      'Yes. All plans include a post-launch window for tuning and fixes. The Scale and Enterprise plans include extended post-launch support.',
  },
];

const processSteps = [
  { title: 'Submit your idea', description: 'Share your concept, goals, and constraints so we can scope the right solution.' },
  { title: 'Receive a plan', description: 'Get a tailored proposal with timeline, cost, and defined outcomes within 48 hours.' },
  { title: 'Approve the scope', description: 'Review the approach, ask questions, and confirm the launch path.' },
  { title: 'Build & launch', description: 'We execute, ship, and hand over a polished, production-ready product.' },
];

const benefits = [
  { title: 'Confident delivery', description: 'Clear timelines, defined milestones, and no hidden surprises at any stage.' },
  { title: 'Design-led AI', description: 'Interfaces that make AI feel reliable, fast, and easy to use for every user.' },
  { title: 'Operational readiness', description: 'We build with real workflows, handoffs, and long-term support in mind.' },
  { title: 'Global partnership', description: 'Asynchronous collaboration for distributed founders and remote-first teams.' },
];

export default function HomePage() {
  return (
    <main className="relative overflow-hidden">
      <FloatingOrbs />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-radiance blur-3xl" />

      <Header />

      {/* Hero */}
      <section id="top" aria-label="Hero" className="relative mx-auto max-w-7xl px-6 pb-20 pt-14 lg:px-8 lg:pt-20">
        <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="max-w-2xl">
            <FadeIn delay={0}>
              <p className="mb-6 inline-flex rounded-full border border-slate-600/50 bg-slate-950/70 px-4 py-2 text-sm uppercase tracking-[0.3em] text-slate-300">
                Async-first AI product studio
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl xl:text-7xl">
                Ship your AI product in&nbsp;weeks, not months.
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                Nuvora designs and launches AI MVPs, custom agents, and workflow automation for founders and operators worldwide. Product-grade quality, async delivery, 2-week turnaround.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-glow px-6 py-3 text-sm font-semibold text-slate-950 shadow-soft transition hover:-translate-y-0.5"
                >
                  Book a free brief
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center rounded-full border border-slate-600/40 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-white/60 hover:text-white"
                >
                  See our services
                </a>
              </div>
            </FadeIn>
            <FadeIn delay={0.42}>
              <div className="mt-12 grid gap-3 sm:grid-cols-3">
                {['48h response', 'Async-first', 'Worldwide'].map((item) => (
                  <div key={item} className="rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200">
                    {item}
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.15} direction="right" className="relative">
            <div className="absolute inset-x-0 top-0 h-[420px] bg-gradient-to-br from-slate-900/80 to-slate-950/0 blur-3xl" />
            <AnimatedMockup />
          </FadeIn>
        </div>
      </section>

      {/* Stats */}
      <section aria-label="Social proof" className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <FadeIn>
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-surface2 px-8 py-10 text-center">
                <p className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">{stat.value}</p>
                <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* Services */}
      <section id="services" aria-label="Services" className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow="What we build"
            title="AI development services for every launch stage."
            description="From AI MVPs to enterprise automation, we design and ship the systems your team actually uses every day."
          />
        </FadeIn>
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {serviceCards.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.07} className="h-full">
              <FeatureCard icon={item.icon} title={item.title} description={item.description} />
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Work paths */}
      <section id="work" aria-label="How we work" className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow="How we work"
            title="Two paths to launch your AI product."
            description="Whether you need an MVP or automated workflows, we scope it fast and ship it right."
          />
        </FadeIn>
        <div className="grid gap-8 lg:grid-cols-2">
          {twoPathItems.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.12} className="h-full">
              <TiltCard>
                <article className="group h-full rounded-[2rem] border border-white/10 bg-surface2 p-8 shadow-card transition hover:border-glow/30">
                  <div className="mb-4 inline-flex rounded-full bg-slate-800 px-3 py-1 text-xs uppercase tracking-[0.3em] text-slate-400">
                    {item.title}
                  </div>
                  <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-4 text-slate-300">{item.description}</p>
                  <a
                    href={item.href}
                    className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-glow transition group-hover:text-white"
                  >
                    {item.cta}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </article>
              </TiltCard>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" aria-label="Pricing" className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow="Pricing"
            title="Transparent pricing for focused AI projects."
            description="No hidden fees. Scope-aligned plans designed to help founders move fast and confidently."
          />
        </FadeIn>
        <div className="grid gap-6 xl:grid-cols-3">
          {pricingTiers.map((tier, i) => (
            <FadeIn key={tier.name} delay={i * 0.1} className="h-full">
              <TiltCard>
                <div className={`h-full rounded-[2rem] border p-8 shadow-card transition ${tier.popular ? 'border-glow/40 bg-slate-900/80' : 'border-white/10 bg-surface2'}`}>
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
                        <Sparkles className="mt-1 h-4 w-4 flex-shrink-0 text-glow" />
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
              </TiltCard>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Process */}
      <section id="process" aria-label="Our process" className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow="Process"
            title="From idea to shipped product in four steps."
            description="A transparent, dependable workflow with frequent updates so you're never in the dark."
          />
        </FadeIn>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {processSteps.map((step, index) => (
            <FadeIn key={step.title} delay={index * 0.08} className="h-full">
              <TiltCard>
                <div className="h-full rounded-[2rem] border border-white/10 bg-surface2 p-8 shadow-card">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-800 text-lg font-semibold text-white">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                  <p className="mt-3 text-slate-400">{step.description}</p>
                </div>
              </TiltCard>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Why us */}
      <section aria-label="Why Nuvora" className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow="Why Nuvora"
            title="Built for founders who need speed without compromise."
            description="We combine product discipline, AI engineering, and polished interface design for fast-moving teams."
          />
        </FadeIn>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {benefits.map((benefit, i) => (
            <FadeIn key={benefit.title} delay={i * 0.08} className="h-full">
              <TiltCard>
                <div className="h-full rounded-[2rem] border border-white/10 bg-surface2 p-8 shadow-card transition hover:border-glow/30">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-slate-900 text-glow">
                    <Lightbulb className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{benefit.title}</h3>
                  <p className="mt-3 text-slate-400">{benefit.description}</p>
                </div>
              </TiltCard>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section aria-label="Client testimonials" className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow="Client results"
            title="Founders ship faster with Nuvora."
            description="Real feedback from founders and operators we've partnered with across the world."
          />
        </FadeIn>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <FadeIn key={t.author} delay={i * 0.1} className="h-full">
              <blockquote className="flex h-full flex-col rounded-[2rem] border border-white/10 bg-surface2 p-8 shadow-card">
                <div className="mb-5 flex gap-1">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="flex-1 leading-7 text-slate-300">"{t.quote}"</p>
                <footer className="mt-8 border-t border-white/10 pt-6">
                  <p className="font-semibold text-white">{t.author}</p>
                  <p className="mt-1 text-sm text-slate-400">{t.role}</p>
                </footer>
              </blockquote>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" aria-label="FAQ" className="mx-auto max-w-7xl px-6 pb-28 lg:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow="FAQ"
            title="Common questions about working with Nuvora."
            description="Transparent answers about our process, timelines, capabilities, and pricing."
          />
        </FadeIn>
        <FaqAccordion items={faqItems} />
      </section>

      {/* CTA */}
      <section aria-label="Get started" className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <FadeIn>
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900/95 to-slate-950 p-10 shadow-soft sm:p-12">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Ready to build?</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Let's scope your AI product and ship it with confidence.
                </h2>
              </div>
              <a href="/contact" className="inline-flex shrink-0 items-center justify-center rounded-full bg-glow px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-white/90">
                Book a free brief
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </FadeIn>
      </section>

      <footer className="border-t border-white/10 bg-surface py-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>© {new Date().getFullYear()} Nuvora. Global AI product studio.</p>
          <div className="flex flex-wrap gap-4">
            <a href="/contact" className="transition hover:text-white">Contact</a>
            <a href="#services" className="transition hover:text-white">Services</a>
            <a href="#pricing" className="transition hover:text-white">Pricing</a>
            <a href="#faq" className="transition hover:text-white">FAQ</a>
          </div>
        </div>
      </footer>

      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            '@id': 'https://www.nuvora.studio/#website',
            name: 'Nuvora',
            url: 'https://www.nuvora.studio',
            description: 'Global AI product studio shipping AI MVPs, custom agents, and workflow automation for founders worldwide.',
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': ['Organization', 'ProfessionalService'],
            '@id': 'https://www.nuvora.studio/#org',
            name: 'Nuvora',
            url: 'https://www.nuvora.studio',
            logo: 'https://www.nuvora.studio/nuvora-logo.svg',
            description: 'Global AI product studio that builds AI MVPs, custom agents, SaaS apps, and workflow automation for founders and operators.',
            serviceType: 'AI Product Development',
            areaServed: { '@type': 'Place', name: 'Worldwide' },
            knowsAbout: ['Artificial Intelligence', 'Machine Learning', 'SaaS Development', 'Workflow Automation', 'Large Language Models', 'AI Agents'],
            sameAs: [],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'Nuvora AI Development Services',
            description: 'AI product development services offered by Nuvora for founders and operators.',
            itemListElement: serviceCards.map((svc, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              item: {
                '@type': 'Service',
                name: svc.title,
                description: svc.description,
                provider: { '@type': 'Organization', name: 'Nuvora', url: 'https://www.nuvora.studio' },
              },
            })),
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
              acceptedAnswer: { '@type': 'Answer', text: item.answer },
            })),
          }),
        }}
      />
    </main>
  );
}
