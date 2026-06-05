import type { LucideIcon } from 'lucide-react';

type FeatureCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <article className="rounded-[2rem] border border-white/10 bg-surface2 p-6 shadow-card transition hover:-translate-y-1 hover:border-glow/40">
      <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-slate-900 text-glow">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="mt-3 text-slate-400">{description}</p>
    </article>
  );
}
