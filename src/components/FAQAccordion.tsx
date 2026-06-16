"use client";

import { useState } from "react";

export type FAQItem = { question: string; answer: string };
export function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const open = openIndex === index;
        const panelId = `faq-panel-${index}`;
        return (
          <div key={item.question} className="rounded-2xl border border-navy/10 bg-white">
            <button
              className="flex w-full items-center justify-between gap-4 p-5 text-left font-heading font-bold text-navy"
              aria-expanded={open}
              aria-controls={panelId}
              onClick={() => setOpenIndex(open ? null : index)}
            >
              <span>{item.question}</span>
              <span aria-hidden>{open ? "\u2212" : "+"}</span>
            </button>
            <div
              id={panelId}
              role="region"
              className="overflow-hidden transition-[max-height] duration-300 ease-in-out"
              style={{ maxHeight: open ? "40rem" : "0" }}
            >
              <div className="px-5 pb-5 text-text-secondary">{item.answer}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
