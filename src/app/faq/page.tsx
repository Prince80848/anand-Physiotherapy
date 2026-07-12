import type { Metadata } from "next";
import { CLINIC_NAME, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Frequently Asked Questions | ${CLINIC_NAME}`,
  description:
    "Got questions about physiotherapy? Find answers to the most common questions about treatments, booking, costs, and what to expect at Anand Physiotherapy, Patna.",
  alternates: { canonical: `${SITE_URL}/faq` },
};

export default function FAQPage() {
  return (
    <main>
      <h1>Frequently Asked Questions</h1>
      {/* TODO: Render Accordion FAQ list + FAQPage JSON-LD schema */}
    </main>
  );
}
