import { ArrowRight, Bolt, Code2, Cpu, Layers, ShieldCheck, Target } from 'lucide-react';
import { Header } from '@/components/Header';

export const metadata = {
  title: 'AI Development Services — MVPs, Agents & Automation | Nuvora',
  description:
    'Nuvora offers AI MVP development, custom AI agent building, SaaS development, workflow automation, and internal AI tools for founders and operators worldwide. Delivered in weeks.',
  metadataBase: new URL('https://www.nuvora.studio'),
  keywords: [
    'AI development services',
    'AI MVP development',
    'custom AI agents',
    'AI workflow automation',
    'SaaS AI development',
    'internal AI tools',
    'AI support agent',
    'AI web app development',
    'LLM application development',
    'OpenAI API development',
    'Claude API integration',
    'AI agency services',
  ],
  openGraph: {
    title: 'AI Development Services — MVPs, Agents & Automation | Nuvora',
    description: 'Full-stack AI product development: MVPs, custom agents, automation, SaaS, and internal tools. Delivered async in 2 weeks.',
    url: 'https://www.nuvora.studio/services',
    siteName: 'Nuvora',
  },
  alternates: {
    canonical: 'https://www.nuvora.studio/services',
    languages: { 'en-US': '/services' },
  },
  robots: { index: true, follow: true },
};

const services = [
  {
    icon: Bolt,
    title: 'AI MVP Development',
    slug: 'ai-mvp',
    headline: 'Launch a polished AI product in 2 weeks.',
    description:
      'We take your AI concept from brief to shipped product in 14 days. Strategy, design, LLM integration, and deployment — everything needed to validate demand and impress early users.',
    keywords: ['AI MVP', 'AI prototype', 'rapid AI development', 'launch AI fast'],
  },
  {
    icon: Cpu,
    title: 'Custom AI Agents',
    slug: 'ai-agents',
    headline: 'Agents that support, sell, and operate autonomously.',
    description:
      'We build LLM-powered agents for customer support, sales development, lead qualification, document processing, and operations. Connected to your tools and live in days.',
    keywords: ['AI chatbot', 'AI assistant', 'LLM agent', 'autonomous AI'],
  },
  {
    icon: Target,
    title: 'Workflow Automation',
    slug: 'automation',
    headline: 'Replace manual work with AI-powered pipelines.',
    description:
      'We design and build custom AI automation that connects your data, tools, and triggers — eliminating repetitive tasks across CRM updates, document handling, onboarding, and reporting.',
    keywords: ['AI automation', 'business process automation', 'AI pipeline'],
  },
  {
    icon: Code2,
    title: 'AI Web Apps',
    slug: null,
    headline: 'Full-stack web interfaces powered by AI models.',
    description:
      'Custom web applications built around LLMs, RAG systems, and AI APIs. Production-ready Next.js apps with real users, real data, and polished UX from day one.',
    keywords: ['AI web app', 'RAG application', 'LLM web app', 'Next.js AI app'],
  },
  {
    icon: Layers,
    title: 'Internal AI Tools',
    slug: null,
    headline: 'Dashboards and tools that speed up your team.',
    description:
      'We build internal platforms — AI-powered dashboards, admin tools, and reporting systems — that remove friction from your team\'s day without adding overhead.',
    keywords: ['internal AI tool', 'AI dashboard', 'AI admin panel'],
  },
  {
    icon: ShieldCheck,
    title: 'AI Support Agents',
    slug: null,
    headline: 'Virtual agents that handle your support queue.',
    description:
      'Deploy AI support agents that triage incoming requests, answer FAQs, escalate when needed, and integrate directly with Intercom, Zendesk, Slack, and email.',
    keywords: ['AI customer support', 'AI helpdesk', 'AI ticket triage'],
  },
];

const techStack = [
  { category: 'AI models', items: ['OpenAI GPT-4o', 'Anthropic Claude', 'Google Gemini', 'Mistral', 'Llama 3'] },
  { category: 'Frameworks', items: ['LangChain', 'LlamaIndex', 'Vercel AI SDK', 'Flowise', 'CrewAI'] },
  { category: 'Frontend', items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'] },
  { category: 'Backend & data', items: ['Node.js', 'Python', 'Supabase', 'PostgreSQL', 'Pinecone', 'Redis'] },
  { category: 'Deployment', items: ['Vercel', 'AWS', 'GCP', 'Docker', 'Railway'] },
  { category: 'Automation', items: ['n8n', 'Make.com', 'Zapier', 'Webhooks', 'REST APIs'] },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-surface">
      <Header />

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-16 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Our services</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            AI development services for founders and operators.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            From AI MVPs and custom agents to workflow automation and internal tools — we build production-ready AI products
            using the latest LLMs, frameworks, and APIs. Every project is scoped clearly and delivered async in 2 weeks.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a href="/contact" className="inline-flex items-center justify-center rounded-full bg-glow px-6 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5">
              Start a project
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a href="#services-list" className="inline-flex items-center justify-center rounded-full border border-slate-600/40 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-white/60">
              Browse services
            </a>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section id="services-list" aria-label="All services" className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((svc) => {
            const Icon = svc.icon;
            return (
              <article key={svc.title} className="rounded-[2rem] border border-white/10 bg-surface2 p-8 shadow-card">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-slate-900 text-glow">
                  <Icon className="h-5 w-5" />
                </div>
                <h2 className="text-xl font-semibold text-white">{svc.title}</h2>
                <p className="mt-1 text-sm text-glow">{svc.headline}</p>
                <p className="mt-4 text-slate-400">{svc.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {svc.keywords.map((kw) => (
                    <span key={kw} className="rounded-full border border-white/10 bg-slate-900/60 px-3 py-1 text-xs text-slate-400">
                      {kw}
                    </span>
                  ))}
                </div>
                {svc.slug ? (
                  <a href={`/services/${svc.slug}`} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-glow transition hover:text-white">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </a>
                ) : (
                  <a href="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-400 transition hover:text-white">
                    Get a proposal <ArrowRight className="h-4 w-4" />
                  </a>
                )}
              </article>
            );
          })}
        </div>
      </section>

      {/* Tech stack */}
      <section aria-label="Technology stack" className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-surface2 p-10">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Technology</p>
          <h2 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">
            We build with the best AI tools and frameworks available.
          </h2>
          <p className="mt-4 max-w-2xl text-slate-300">
            Our stack covers OpenAI, Anthropic Claude, LangChain, Vercel AI SDK, Next.js, Supabase, and every major
            automation platform — so your product integrates seamlessly with what you already use.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {techStack.map((group) => (
              <div key={group.category}>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">{group.category}</p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="rounded-full border border-white/10 bg-slate-900/60 px-3 py-1.5 text-sm text-slate-300">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900/95 to-slate-950 p-10 sm:p-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Not sure which service fits your project?
              </h2>
              <p className="mt-3 text-slate-300">Submit your idea and we'll scope the right solution within 48 hours.</p>
            </div>
            <a href="/contact" className="inline-flex shrink-0 items-center justify-center rounded-full bg-glow px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-white/90">
              Book a free brief <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-surface py-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>© {new Date().getFullYear()} Nuvora. Global AI product studio.</p>
          <div className="flex flex-wrap gap-4">
            <a href="/" className="transition hover:text-white">Home</a>
            <a href="/contact" className="transition hover:text-white">Contact</a>
            <a href="/#pricing" className="transition hover:text-white">Pricing</a>
          </div>
        </div>
      </footer>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.nuvora.studio' },
          { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.nuvora.studio/services' },
        ],
      })}} />
    </main>
  );
}
