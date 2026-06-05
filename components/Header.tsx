'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from '@/components/Logo';

const links = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-surface/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-300 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-white">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="/contact"
            className="hidden rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-slate-100 md:inline-flex"
          >
            Start Your Project
          </a>
          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={open}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-slate-900 text-slate-200 transition hover:border-white/20 hover:text-white md:hidden"
            onClick={() => setOpen((current) => !current)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-slate-950/95 md:hidden">
          <div className="space-y-1 px-6 py-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block rounded-2xl px-4 py-3 text-sm font-medium text-slate-100 transition hover:bg-white/5"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="/contact"
              className="block rounded-2xl bg-glow px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-glow/90"
              onClick={() => setOpen(false)}
            >
              Start Your Project
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
