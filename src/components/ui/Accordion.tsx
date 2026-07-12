"use client";
import { useState } from "react";

interface AccordionItem {
  question: string;
  answer: string;
}

interface Props {
  items: AccordionItem[];
}

export default function Accordion({ items }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div key={i} className="rounded-lg border bg-white shadow-sm">
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="flex w-full items-center justify-between px-6 py-4 text-left font-medium text-gray-900"
            aria-expanded={openIndex === i}
          >
            {item.question}
            <span className="ml-4 flex-shrink-0 text-blue-600">
              {openIndex === i ? "−" : "+"}
            </span>
          </button>
          {openIndex === i && (
            <div className="border-t px-6 py-4 text-sm text-gray-600">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
