'use client';

import { useMemo, useState } from 'react';
import { ChevronDown } from 'lucide-react';

type FaqItem = {
  question: string;
  answer: string;
};

type FaqAccordionProps = {
  items: FaqItem[];
};

export function FaqAccordion({ items }: FaqAccordionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const processedItems = useMemo(
    () => items.map((item, index) => ({ ...item, index })),
    [items],
  );

  return (
    <div className="space-y-4">
      {processedItems.map((item) => {
        const isOpen = item.index === activeIndex;
        return (
          <div key={item.question} className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-surface2 shadow-card">
            <button
              type="button"
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 p-6 text-left"
              onClick={() => handleToggle(item.index)}
            >
              <span className="text-lg font-semibold text-white">{item.question}</span>
              <ChevronDown className={`h-5 w-5 text-slate-400 transition ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`px-6 pb-6 transition-[max-height] duration-300 ${isOpen ? 'max-h-80' : 'max-h-0'} overflow-hidden`}>
              <p className="text-slate-400">{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
