import { ArrowRight, Bot, CheckCircle2, MessageSquare, Settings, Shield, Zap } from 'lucide-react';
import { Header } from '@/components/Header';

export const metadata = {
  title: 'Custom AI Agent Development — Build Intelligent Agents | Nuvora',
  description:
    'Nuvora builds custom AI agents for customer support, sales, lead qualification, document processing, and operations. LLM-powered agents connected to your tools and live in days.',
  metadataBase: new URL('https://www.nuvora.studio'),
  keywords: [
    'custom AI agent development',
    'AI agent builder',
    'AI chatbot development company',
    'build AI customer support agent',
    'AI sales agent development',
    'LLM agent development',
    'autonomous AI agent',
    'AI assistant development',
    'conversational AI development',
    'AI customer service bot',
    'GPT-4 agent development',
    'Claude agent development',
    'AI lead qualification agent',
    'AI helpdesk agent',
    'OpenAI agent development',
  ],
  openGraph: {
    title: 'Custom AI Agent Development — Intelligent Agents for Any Task | Nuvora',
    description: 'We build LLM-powered AI agents for support, sales, operations, and more — connected to your tools and live in days.',
    url: 'https://www.nuvora.studio/services/ai-agents',
    siteName: 'Nuvora',
  },
  alternates: {
    canonical: 'https://www.nuvora.studio/services/ai-agents',
    languages: { 'en-US': '/services/ai-agents' },
  },
  robots: { index: true, follow: true },
};

const agentTypes = [
  {
    icon: MessageSquare,
    title: 'Customer support agents',
    description: 'Handle inbound tickets, answer FAQs from your knowledge base, escalate complex issues, and update your CRM automatically. Works with Intercom, Zendesk, Freshdesk, and email.',
    keywords: ['AI helpdesk', 'AI ticket triage', 'automated customer support'],
  },
  {
    icon: Zap,
    title: 'Sales development agents',
    description: 'Qualify inbound leads, send personalised follow-ups, book meetings into your calendar, and keep your CRM updated — without a human SDR.',
    keywords: ['AI SDR', 'lead qualification bot', 'AI sales automation'],
  },
  {
    icon: Bot,
    title: 'Operations agents',
    description: 'Process documents, extract structured data, update databases, generate reports, and trigger downstream workflows — 24/7, without manual intervention.',
    keywords: ['AI operations bot', 'document processing AI', 'AI data extraction'],
  },
  {
    icon: Settings,
    title: 'Research & analysis agents',
    description: 'Search the web, summarise sources, produce structured briefs, and monitor topics of interest on a scheduled or triggered basis.',
    keywords: ['AI research agent', 'AI web scraper', 'automated research'],
  },
  {
    icon: Shield,
    title: 'Onboarding agents',
    description: 'Guide new users through product setup, answer questions, and personalise the first-run experience based on user inputs and account data.',
    keywords: ['AI onboarding', 'product onboarding bot', 'AI user activation'],
  },
  {
    icon: CheckCircle2,
    title: 'QA & review agents',
    description: 'Review code, check documents for compliance, audit content quality, and flag issues before they reach production or publication.',
    keywords: ['AI code review', 'AI quality agent', 'automated review'],
  },
];

const integrations = [
  'Intercom', 'Zendesk', 'Freshdesk', 'HubSpot', 'Salesforce',
  'Slack', 'Teams', 'Gmail', 'Outlook', 'Notion',
  'Airtable', 'Google Sheets', 'Stripe', 'Shopify', 'Webflow',
  'PostgreSQL', 'Supabase', 'Pinecone', 'REST APIs', 'Webhooks',
];

const faqs = [
  {
    q: 'What is a custom AI agent?',
    a: 'A custom AI agent is a software system powered by a large language model (like GPT-4o or Claude) that can understand natural language, reason about tasks, use external tools, and take actions — like updating databases, sending messages, or processing documents — autonomously.',
  },
  {
    q: 'How is an AI agent different from a chatbot?',
    a: 'A chatbot follows predefined scripts and flows. An AI agent reasons about context, plans multi-step actions, uses tools (APIs, databases, search), and adapts to novel situations — making it far more capable for real business tasks.',
  },
  {
    q: 'Which tools and systems can you connect the agent to?',
    a: 'Any system with an API. We regularly integrate with Intercom, Zendesk, HubSpot, Salesforce, Slack, Gmail, Google Sheets, Airtable, Notion, Stripe, Supabase, PostgreSQL, and custom REST APIs.',
  },
  {
    q: 'How long does it take to build a custom AI agent?',
    a: 'Simple agents (FAQ responders, lead qualifiers) can be live in 5–7 days. Complex multi-step agents with many tool integrations typically take 2–3 weeks.',
  },
  {
    q: 'How do you handle accuracy and hallucination risk?',
    a: 'We use RAG (retrieval-augmented generation) to ground the agent in your specific knowledge base, implement guardrails for off-topic queries, and add human escalation paths for edge cases.',
  },
  {
    q: 'What AI models power the agents?',
    a: 'We choose based on your needs — typically OpenAI GPT-4o for reasoning-heavy tasks, Anthropic Claude 3.5 Sonnet for long-context work, or fine-tuned smaller models for cost efficiency at scale.',
  },
];

export default function AiAgentsPage() {
  return (
    <main className="min-h-screen bg-surface">
      <Header />

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-16 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Custom AI Agent Development</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Build intelligent AI agents that work for your business 24/7.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Nuvora builds custom AI agents powered by GPT-4o, Claude, and Gemini — connected to your real tools and
            processes. Whether you need an AI customer support agent, a sales development agent, or an operations
            automation agent, we scope, build, and deploy it fast.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a href="/contact" className="inline-flex items-center justify-center rounded-full bg-glow px-6 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5">
              Start building your agent
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a href="#agent-types" className="inline-flex items-center justify-center rounded-full border border-slate-600/40 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-white/60">
              See agent types
            </a>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            {['GPT-4o & Claude', 'RAG-grounded', 'Tool-use enabled', 'API integrations', 'Live in days'].map((tag) => (
              <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-slate-300">{tag}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Agent types */}
      <section id="agent-types" aria-label="AI agent types" className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Agent types</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
            What kind of AI agent do you need?
          </h2>
          <p className="mt-4 max-w-2xl text-slate-300">
            We build agents for every business function — from customer-facing support and sales to internal operations
            and research. Each agent is trained on your data, connected to your tools, and tailored to your workflow.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {agentTypes.map((agent) => {
            const Icon = agent.icon;
            return (
              <article key={agent.title} className="rounded-[2rem] border border-white/10 bg-surface2 p-8 shadow-card">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-slate-900 text-glow">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold text-white">{agent.title}</h3>
                <p className="mt-3 text-slate-400">{agent.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {agent.keywords.map((kw) => (
                    <span key={kw} className="rounded-full border border-white/10 bg-slate-900/60 px-3 py-1 text-xs text-slate-400">{kw}</span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Integrations */}
      <section aria-label="Integrations" className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-surface2 p-10">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Integrations</p>
          <h2 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">
            Connected to your existing tools from day one.
          </h2>
          <p className="mt-4 max-w-2xl text-slate-300">
            Your AI agent integrates with the platforms your team already uses — CRMs, helpdesks, communication tools,
            databases, and custom APIs. No migration needed.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {integrations.map((item) => (
              <span key={item} className="rounded-full border border-white/10 bg-slate-900/60 px-4 py-2 text-sm text-slate-300">{item}</span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section aria-label="FAQ" className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">FAQ</p>
          <h2 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">Questions about custom AI agents.</h2>
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
                Ready to build your AI agent?
              </h2>
              <p className="mt-3 text-slate-300">Tell us what you need to automate. We'll scope the agent and have it live in days.</p>
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
          { '@type': 'ListItem', position: 3, name: 'Custom AI Agents', item: 'https://www.nuvora.studio/services/ai-agents' },
        ],
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Custom AI Agent Development',
        description: 'Nuvora builds custom LLM-powered AI agents for customer support, sales, operations, and research — connected to your existing tools.',
        provider: { '@type': 'Organization', name: 'Nuvora', url: 'https://www.nuvora.studio' },
        areaServed: { '@type': 'Place', name: 'Worldwide' },
        serviceType: 'AI Agent Development',
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
