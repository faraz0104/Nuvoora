import { ArrowRight, CheckCircle2, Database, FileText, Mail, RefreshCw, Users, Zap } from 'lucide-react';
import { Header } from '@/components/Header';

export const metadata = {
  title: 'AI Workflow Automation Services — Replace Manual Work with AI | Nuvora',
  description:
    'Nuvora builds custom AI workflow automation for startups and operators. We automate CRM updates, document processing, lead qualification, onboarding, reporting, and more using AI pipelines.',
  metadataBase: new URL('https://www.nuvora.studio'),
  keywords: [
    'AI workflow automation',
    'business process automation AI',
    'AI automation services',
    'automate business operations AI',
    'AI pipeline development',
    'intelligent process automation',
    'AI RPA',
    'no-code AI automation',
    'n8n development agency',
    'make.com AI automation',
    'workflow automation for startups',
    'AI operations automation',
    'AI CRM automation',
    'AI document processing',
    'AI lead automation',
  ],
  openGraph: {
    title: 'AI Workflow Automation Services — Automate Operations with AI | Nuvora',
    description: 'Custom AI automation pipelines that replace manual work across CRM, documents, onboarding, support, and reporting.',
    url: 'https://www.nuvora.studio/services/automation',
    siteName: 'Nuvora',
  },
  alternates: {
    canonical: 'https://www.nuvora.studio/services/automation',
    languages: { 'en-US': '/services/automation' },
  },
  robots: { index: true, follow: true },
};

const automationTypes = [
  {
    icon: Users,
    title: 'Lead qualification & CRM automation',
    description: 'AI reads inbound leads, scores them by fit, enriches with external data, and updates your CRM automatically. No more manual SDR data entry.',
    saves: 'Saves ~10h/week per sales rep',
  },
  {
    icon: FileText,
    title: 'Document processing & data extraction',
    description: 'Extract structured data from invoices, contracts, PDFs, and forms using AI — then route it into your database, ERP, or spreadsheet automatically.',
    saves: 'Saves ~20h/week per operations team',
  },
  {
    icon: Mail,
    title: 'Email & outreach automation',
    description: 'AI writes personalised outreach based on prospect data, schedules follow-ups, and logs all interactions to your CRM with zero manual input.',
    saves: 'Saves ~8h/week per marketer',
  },
  {
    icon: RefreshCw,
    title: 'Reporting & insight generation',
    description: 'Automated reports generated and delivered on schedule — pulling live data from your tools, summarised by AI into clean weekly or monthly briefs.',
    saves: 'Saves ~5h/week per manager',
  },
  {
    icon: Database,
    title: 'Data sync & enrichment pipelines',
    description: 'Keep data consistent across tools automatically — CRM, database, spreadsheet, and communication platforms all stay in sync without manual effort.',
    saves: 'Eliminates data drift entirely',
  },
  {
    icon: Zap,
    title: 'Customer onboarding automation',
    description: 'Trigger personalised onboarding flows, send the right resources, check activation steps, and alert your team when users get stuck — all automatically.',
    saves: 'Increases activation rates by 30–50%',
  },
];

const tools = [
  { category: 'Automation platforms', items: ['n8n', 'Make.com', 'Zapier', 'Pipedream', 'Activepieces'] },
  { category: 'AI models', items: ['OpenAI GPT-4o', 'Anthropic Claude', 'Google Gemini', 'Mistral'] },
  { category: 'CRMs & sales', items: ['HubSpot', 'Salesforce', 'Pipedrive', 'Apollo', 'Instantly'] },
  { category: 'Communication', items: ['Slack', 'Teams', 'Gmail', 'Outlook', 'Intercom'] },
  { category: 'Data & storage', items: ['PostgreSQL', 'Supabase', 'Airtable', 'Google Sheets', 'Notion'] },
  { category: 'Documents & files', items: ['Google Drive', 'Dropbox', 'PDF parsing', 'DocuSign', 'S3'] },
];

const faqs = [
  {
    q: 'What is AI workflow automation?',
    a: 'AI workflow automation uses large language models and AI APIs to handle tasks that previously required human judgment — like reading documents, writing emails, qualifying leads, or generating reports — within automated pipelines that run continuously.',
  },
  {
    q: 'How is AI automation different from regular automation (Zapier etc.)?',
    a: 'Traditional automation (Zapier, Make.com) can only handle rule-based, structured data flows. AI automation handles unstructured inputs like natural language, PDFs, emails, and images — making decisions and taking actions that require understanding, not just rules.',
  },
  {
    q: 'Do I need existing automation tools like n8n or Make?',
    a: 'No. We choose the right tooling for your use case — sometimes that\'s n8n or Make, sometimes it\'s a custom Python pipeline or Vercel serverless function. We recommend based on your needs, not our preferences.',
  },
  {
    q: 'How long does it take to build an automation pipeline?',
    a: 'Simple automations (single trigger, single action) can be live in 3–5 days. Complex multi-step pipelines with AI decisions and multiple integrations typically take 1–2 weeks.',
  },
  {
    q: 'Will automation break when my tools update or change?',
    a: 'We build with official APIs and webhooks, not brittle screen-scraping. We also provide documentation so your team can maintain the automation over time — and we offer ongoing support retainers.',
  },
  {
    q: 'Can you automate processes that involve sensitive data?',
    a: 'Yes. We follow secure-by-default practices: minimal data retention, encrypted transit, environment-specific access controls, and audit logging. We can also scope automation to run in your own cloud environment.',
  },
];

export default function AutomationPage() {
  return (
    <main className="min-h-screen bg-surface">
      <Header />

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-16 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">AI Workflow Automation</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Replace manual work with intelligent AI automation pipelines.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Nuvora builds custom AI workflow automation for startups and growing teams. We identify the manual,
            repetitive work slowing your team down — and replace it with AI-powered pipelines connected to your
            existing tools. CRM updates, document processing, lead qualification, reporting, and more — automated
            and running 24/7.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a href="/contact" className="inline-flex items-center justify-center rounded-full bg-glow px-6 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5">
              Plan your automation
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a href="#automations" className="inline-flex items-center justify-center rounded-full border border-slate-600/40 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-white/60">
              See what we automate
            </a>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            {['n8n & Make.com', 'OpenAI & Claude', 'CRM integrations', 'Runs 24/7', 'No manual work'].map((tag) => (
              <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-slate-300">{tag}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Automation types */}
      <section id="automations" aria-label="Automation types" className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">What we automate</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
            Common AI automation use cases we build for teams.
          </h2>
          <p className="mt-4 max-w-2xl text-slate-300">
            Each automation is built around your specific tools, data sources, and team workflows. Nothing generic —
            every pipeline is tailored to how your business actually operates.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {automationTypes.map((auto) => {
            const Icon = auto.icon;
            return (
              <article key={auto.title} className="rounded-[2rem] border border-white/10 bg-surface2 p-8 shadow-card">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-slate-900 text-glow">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold text-white">{auto.title}</h3>
                <p className="mt-3 text-slate-400">{auto.description}</p>
                <p className="mt-5 inline-flex rounded-full bg-glow/10 px-4 py-1.5 text-xs font-medium text-glow">
                  {auto.saves}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      {/* How it works */}
      <section aria-label="Process" className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-surface2 p-10">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Our process</p>
          <h2 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">How we build your AI automation.</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {[
              { step: '1', title: 'Audit your manual processes', desc: 'We map the repetitive tasks costing your team time and identify the highest-ROI automation targets.' },
              { step: '2', title: 'Design the pipeline', desc: 'We blueprint the data flow, tool connections, AI decision points, and error-handling logic.' },
              { step: '3', title: 'Build & test', desc: 'We build the automation using n8n, Make.com, or custom code — testing against real data edge cases.' },
              { step: '4', title: 'Deploy & document', desc: 'We deploy to production and hand over full documentation so your team can monitor and extend it.' },
            ].map((item) => (
              <div key={item.step}>
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-800 text-sm font-bold text-white">
                  {item.step}
                </div>
                <h3 className="font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section aria-label="Tools and integrations" className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Tools we work with</p>
          <h2 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">
            We connect AI to the tools your team already uses.
          </h2>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((group) => (
            <div key={group.category}>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">{group.category}</p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="rounded-full border border-white/10 bg-slate-900/60 px-3 py-1.5 text-sm text-slate-300">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section aria-label="FAQ" className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">FAQ</p>
          <h2 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">Questions about AI workflow automation.</h2>
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
                Ready to automate your operations?
              </h2>
              <p className="mt-3 text-slate-300">Tell us what your team does manually. We'll scope the automation and have it running in days.</p>
            </div>
            <a href="/contact" className="inline-flex shrink-0 items-center justify-center rounded-full bg-glow px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-white/90">
              Plan your automation <ArrowRight className="ml-2 h-4 w-4" />
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
          { '@type': 'ListItem', position: 3, name: 'AI Workflow Automation', item: 'https://www.nuvora.studio/services/automation' },
        ],
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'AI Workflow Automation',
        description: 'Nuvora builds custom AI automation pipelines for CRM updates, document processing, lead qualification, reporting, and operations.',
        provider: { '@type': 'Organization', name: 'Nuvora', url: 'https://www.nuvora.studio' },
        areaServed: { '@type': 'Place', name: 'Worldwide' },
        serviceType: 'AI Workflow Automation',
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
