import type { Metadata } from "next";
import { CLINIC_NAME, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Patient Testimonials | ${CLINIC_NAME}`,
  description:
    "Read real patient success stories and testimonials from Anand Physiotherapy, Patna. See how our physiotherapy treatments have improved lives.",
  alternates: { canonical: `${SITE_URL}/testimonials` },
};

export default function TestimonialsPage() {
  return (
    <main>
      <h1>Patient Testimonials</h1>
      {/* TODO: Render testimonials grid with schema markup */}
    </main>
  );
}
