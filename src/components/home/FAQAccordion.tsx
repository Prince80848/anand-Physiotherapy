"use client";

import { useState } from "react";
import { faqs } from "@/data/faqs";
import Link from "next/link";

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const display = faqs.slice(0, 5);

  return (
    <section className="section-py bg-section-alt" id="faq" aria-labelledby="faq-home-heading">
      <div className="container-xl">
        <div className="mx-auto mb-10 max-w-xl text-center">
          <span className="section-label">FAQ</span>
          <h2 id="faq-home-heading" className="heading-xl">Common Questions</h2>
          <p className="mt-3 text-[#555552]">
            Everything you need to know before your first visit.
          </p>
        </div>

        <div className="mx-auto max-w-2xl space-y-3">
          {display.map((faq, i) => (
            <div
              key={i}
              className={`rounded-2xl border transition-all duration-200 ${
                openIndex === i
                  ? "border-[#88b5a0] bg-white shadow-sm"
                  : "border-[#ede5d8] bg-white hover:border-[#b4d1c4]"
              }`}
            >
              <button
                aria-expanded={openIndex === i}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left"
              >
                <span className="font-semibold text-sm text-[#1c1c1a]">{faq.question}</span>
                <span
                  className={`flex-shrink-0 flex h-6 w-6 items-center justify-center rounded-full border transition-all duration-200 text-xs ${
                    openIndex === i
                      ? "border-[#4a7d67] bg-[#4a7d67] text-white rotate-180"
                      : "border-[#c9b89f] text-[#8a8a85]"
                  }`}
                >
                  ▾
                </span>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-5 text-sm text-[#555552] leading-relaxed border-t border-[#f0ede8] pt-4">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
