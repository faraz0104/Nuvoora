import { ArrowRight, CheckCircle2, Clock, Code2, Layers, Sparkles, Zap } from 'lucide-react';
import { Header } from '@/components/Header';

export const metadata = {
  title: 'AI MVP Development Service — Launch Your AI Product in 2 Weeks | Nuvora',
  description:
    'Nuvora builds AI MVPs in 2 weeks. We design, develop, and deploy polished AI products — SaaS apps, LLM tools, agent-powered dashboards — for founders and startups worldwide. Get a proposal in 48h.',
  metadataBase: new URL('https://www.nuvora.studio'),
  keywords: [
    'AI MVP development',
    'build AI MVP',
    'AI MVP development company',
    'minimum viable product AI',
    'rapid AI prototyping',
    'AI startup MVP',
    'hire AI MVP developer',
    'LLM app development',
    'AI product development for startups',
    'build AI product fast',
    'AI development agency for founders',
    'ship AI product in 2 weeks',
    'GPT-4 app development',
    'Claude API development',
    'AI SaaS MVP',
  ],
  openGraph: {
    title: 'AI MVP Development — Launch in 2 Weeks | Nuvora',
    description: 'We build polished AI MVPs in 14 days. Strategy, design, LLM integration, and deployment — all included.',
    url: 'https://www.nuvora.studio/services/ai-mvp',
    siteName: 'Nuvora',
  },
  alternates: {
    canonical: 'https://www.nuvora.studio/services/ai-mvp',
    languages: { 'en-US': '/services/ai-mvp' },
  },
  robots: { index: true, follow: true },
};

const included = [
  { icon: Layers,   title: 'Product strategy & scoping',        description: 'We define the core user flow, feature set, and success criteria before writing a line of code.' },
  { icon: Sparkles, title: 'UI/UX design',                      description: 'Polished, modern interfaces built for real users — not developer templates.' },
  { icon: Code2,    title: 'LLM integration & AI logic',        description: 'We connect GPT-4o, Claude, Gemini, or your preferred model with the right prompt architecture.' },
  { icon: Zap,      title: 'API & database connections',        description: 'Integrate with your existing tools, CRMs, databases, or third-party APIs.' },
  { icon: Clock,    title: '2-week delivery window',            description: 'Scoped, shipped, and handed over in 14 days. Tracked with daily async updates.' },
  { icon: CheckCircle2, title: 'Deployment & handover',         description: 'We deploy to production and hand over a clean, documented codebase your team can maintain.' },
];

const useCases = [
  'AI-powered SaaS dashboard for B2B customers',
  'Internal AI tool to summarise meetings or documents',
  'LLM chatbot embedded in your product or website',
  'AI writing assistant or content generation tool',
  'RAG-powered knowledge base or search tool',
  'Investor demo or early-user validation prototype',
  'AI image or media generation application',
  'GPT-powered lead qualification or onboarding flow',
];

const techStack = [
  'OpenAI GPT-4o / GPT-4', 'Anthropic Claude 3.5', 'Google Gemini',
  'LangChain', 'Vercel AI SDK', 'LlamaIndex',
  'Next.js 14', 'React', 'TypeScript', 'Tailwind CSS',
  'Supabase', 'PostgreSQL', 'Pinecone', 'Redis',
  'Vercel', 'AWS', 'Cloudflare Workers',
];

const faqs = [
  {
    q: 'What exactly is an AI MVP?',
    a: 'An AI MVP (Minimum Viable Product) is a functional, deployable product that demonstrates your AI concept to real users or investors. It includes working AI features, a user interface, and basic backend logic — enough to test demand without building everything.',
  },
  {
    q: 'Can you really ship in 2 weeks?',
    a: "Yes, for clearly scoped projects. Our 2-week timeline applies to focused MVPs with a defined core flow. Larger projects may take 3–4 weeks. We'll confirm the timeline before you commit.",
  },
  {
    q: 'Do I need to provide technical specifications?',
    a: "No. We work from a plain English brief. We'll ask the right questions, scope the solution, and propose the architecture. You don't need a technical background.",
  },
  {
    q: 'Which AI models do you use?',
    a: 'We recommend the right model for your use case — typically OpenAI GPT-4o, Anthropic Claude 3.5 Sonnet, or Google Gemini 1.5 Pro. We handle model selection, prompt engineering, and API integration.',
  },
  {
    q: 'Will I own the code?',
    a: 'Yes. Full source code ownership is included in every project. We hand over a clean, documented codebase that your team can maintain and extend.',
  },
  {
    q: 'What if I need changes after launch?',
    a: 'All plans include a post-launch window for fixes and tuning. For ongoing development, we offer retainer engagements.',
  },
];

export default function AiMvpPage() {
  return (
    <main className="min-h-screen bg-surface">
      <Header />

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-16 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">AI MVP Development</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Launch your AI product in 2 weeks — polished and production-ready.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Nuvora specialises in AI MVP development for founders who need to move fast. We take your idea from brief to a
            fully deployed, user-tested AI product in 14 days — with product strategy, UI design, LLM integration, and
            deployment all included. No technical co-founder required.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a href="/contact" className="inline-flex items-center justify-center rounded-full bg-glow px-6 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5">
              Get a free proposal
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a href="#whats-included" className="inline-flex items-center justify-center rounded-full border border-slate-600/40 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-white/60">
              What's included
            </a>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            {['14-day delivery', 'Full code ownership', 'GPT-4o & Claude', 'Production-ready', 'Any industry'].map((tag) => (
              <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-slate-300">{tag}</span>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section id="whats-included" aria-label="What's included" className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">What you get</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
            Everything needed to validate and launch your AI idea.
          </h2>
          <p className="mt-4 max-w-2xl text-slate-300">
            Our AI MVP development service covers the full stack — from product thinking and interface design to LLM
            integration, backend logic, and live deployment. One team, one scope, two weeks.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {included.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="rounded-[2rem] border border-white/10 bg-surface2 p-8 shadow-card">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-slate-900 text-glow">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-slate-400">{item.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Use cases */}
      <section aria-label="AI MVP use cases" className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-surface2 p-10">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Use cases</p>
          <h2 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">
            What kinds of AI MVPs do we build?
          </h2>
          <p className="mt-4 max-w-2xl text-slate-300">
            We've built AI products across SaaS, fintech, e-commerce, legal, healthcare, and internal tools. If your idea
            involves an LLM, a data source, and users — we can scope and build it.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {useCases.map((uc) => (
              <li key={uc} className="flex items-start gap-3 text-slate-300">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-glow" />
                {uc}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Tech stack */}
      <section aria-label="Tech stack" className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Tech stack</p>
          <h2 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">
            Built with leading AI models, frameworks, and infrastructure.
          </h2>
          <p className="mt-4 max-w-2xl text-slate-300">
            We use OpenAI GPT-4o, Anthropic Claude, LangChain, Next.js, Supabase, Pinecone, and Vercel — the production-grade
            stack used by the world's best AI startups.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          {techStack.map((item) => (
            <span key={item} className="rounded-full border border-white/10 bg-slate-900/60 px-4 py-2 text-sm text-slate-300">
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section aria-label="FAQ" className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">FAQ</p>
          <h2 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">Questions about AI MVP development.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {faqs.map((faq) => (
            <div key={faq.q} className="rounded-[2rem] border border-white/10 bg-surface2 p-8">
              <h3 className="text-lg font-semibold text-white">{faq.q}</h3>
              <p className="mt-3 text-slate-400">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900/95 to-slate-950 p-10 sm:p-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Ready to build your AI MVP?
              </h2>
              <p className="mt-3 text-slate-300">
                Submit your idea and get a scoped proposal with timeline and cost within 48 hours.
              </p>
            </div>
            <a href="/contact" className="inline-flex shrink-0 items-center justify-center rounded-full bg-glow px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-white/90">
              Get a free proposal <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-surface py-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>© {new Date().getFullYear()} Nuvora. Global AI product studio.</p>
          <div className="flex flex-wrap gap-4">
            <a href="/" className="transition hover:text-white">Home</a>
            <a href="/services" className="transition hover:text-white">Services</a>
            <a href="/contact" className="transition hover:text-white">Contact</a>
          </div>
        </div>
      </footer>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.nuvora.studio' },
          { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.nuvora.studio/services' },
          { '@type': 'ListItem', position: 3, name: 'AI MVP Development', item: 'https://www.nuvora.studio/services/ai-mvp' },
        ],
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'AI MVP Development',
        description: 'Nuvora builds polished AI MVPs in 2 weeks for founders and startups worldwide. Includes product strategy, UI design, LLM integration, and deployment.',
        provider: { '@type': 'Organization', name: 'Nuvora', url: 'https://www.nuvora.studio' },
        areaServed: { '@type': 'Place', name: 'Worldwide' },
        serviceType: 'AI Product Development',
        offers: { '@type': 'Offer', price: '2999', priceCurrency: 'USD', description: 'Launch plan — AI MVP in 2 weeks' },
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      })}} />
    </main>
  );
}
