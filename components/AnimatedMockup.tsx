'use client';

import { motion } from 'framer-motion';

export function AnimatedMockup() {
  return (
    <div style={{ perspective: '1200px' }}>
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, ease: 'easeOut' }}
      >
        <motion.div
          animate={{
            y: [0, -14, 0],
            rotateX: [0, 3, 0, -2, 0],
            rotateY: [0, -4, 2, 3, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
          style={{ transformStyle: 'preserve-3d' }}
          className="relative mx-auto max-w-md rounded-[3rem] border border-white/10 bg-gradient-to-br from-slate-900/80 to-slate-950/90 p-8 shadow-soft"
        >
          <div className="absolute inset-0 rounded-[3rem] border border-white/5" />
          <div className="relative overflow-hidden rounded-[2.5rem] bg-slate-950/95 p-6 shadow-card">
            <div className="mb-6 flex items-center justify-between rounded-[1.75rem] bg-slate-900/80 p-4">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Pilot dashboard</p>
                <p className="mt-2 text-base font-semibold text-white">Product launch flow</p>
              </div>
              <div className="h-10 w-10 rounded-3xl bg-glow/20" />
            </div>

            <div className="space-y-5">
              <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-5">
                <div className="mb-3 flex items-center justify-between text-sm text-slate-400">
                  <span>Onboarding</span>
                  <span>84%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-slate-800">
                  <motion.div
                    className="h-2 rounded-full bg-glow"
                    initial={{ width: 0 }}
                    animate={{ width: '84%' }}
                    transition={{ duration: 1.2, ease: 'easeOut', delay: 1.2 }}
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-3 rounded-3xl border border-white/10 bg-slate-900/80 p-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500">AI agent</p>
                  <p className="text-sm font-semibold text-white">Support assistant</p>
                  <p className="text-sm text-slate-400">Auto-triages tickets and drafts replies in Slack.</p>
                </div>
                <div className="space-y-3 rounded-3xl border border-white/10 bg-slate-900/80 p-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Integration</p>
                  <p className="text-sm font-semibold text-white">CRM sync</p>
                  <p className="text-sm text-slate-400">Keeps customer details updated in real time.</p>
                </div>
              </div>

              <div className="rounded-[2rem] bg-slate-850/90 p-5">
                <div className="mb-3 flex items-center gap-3 text-sm text-slate-500">
                  <motion.span
                    className="inline-flex h-2.5 w-2.5 rounded-full bg-glow"
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                  />
                  Live release readiness
                </div>
                <div className="flex items-center justify-between text-sm text-white">
                  <span>Product quality</span>
                  <span>Ready</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
