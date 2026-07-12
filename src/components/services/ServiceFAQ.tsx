"use client";

import { useState } from "react";
import type { FAQ } from "@/types";

interface Props {
  faqs: FAQ[];
  accent?: string;
}

export default function ServiceFAQ({ faqs, accent = "#4a7d67" }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="section-py bg-[#fdfcfa]" aria-labelledby="faq-heading">
      <div className="container-xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="section-label">Common Questions</p>
          <h2 id="faq-heading" className="heading-xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[#555552]">
            Everything you need to know before starting your treatment journey.
          </p>
        </div>

        {/* Accordion */}
        <div className="mx-auto max-w-3xl space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="overflow-hidden rounded-2xl border border-[#ede5d8] bg-white transition-all duration-300"
                style={isOpen ? { borderColor: accent + "55" } : {}}
              >
                <button
                  id={`faq-btn-${i}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-[0.9375rem] font-semibold text-[#1c1c1a] leading-snug">
                    {faq.question}
                  </span>
                  <span
                    className="flex-shrink-0 flex h-7 w-7 items-center justify-center rounded-full transition-all duration-300"
                    style={{
                      background: isOpen ? accent : "#f0f4f2",
                      color: isOpen ? "white" : "#4a7d67",
                      transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                    }}
                    aria-hidden="true"
                  >
                    <svg
                      className="h-3.5 w-3.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                  </span>
                </button>

                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-btn-${i}`}
                  className="grid transition-all duration-300 ease-in-out"
                  style={{
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                  }}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-[0.9375rem] leading-relaxed text-[#555552]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
