import type { Metadata } from "next";
import { CLINIC_NAME, SITE_URL } from "@/lib/constants";
import { localBusinessSchema, faqPageSchema } from "@/lib/seo/schema";
import { faqs } from "@/data/faqs";
import JsonLd from "@/components/seo/JsonLd";
import Hero from "@/components/home/Hero";
import ServicesGrid from "@/components/home/ServicesGrid";
import StatsCounter from "@/components/home/StatsCounter";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import TestimonialsSlider from "@/components/home/TestimonialsSlider";
import CTASection from "@/components/home/CTASection";
import FAQAccordion from "@/components/home/FAQAccordion";
import BodyBenefits from "@/components/home/BodyBenefits";
import DoctorProfile from "@/components/home/DoctorProfile";
import HomeService from "@/components/home/HomeService";

// ── SEO Metadata ─────────────────────────────────────────
export const metadata: Metadata = {
  title: `${CLINIC_NAME} & Rehabilitation Center — Best Physiotherapy in Patna`,
  description:
    "Anand Physiotherapy and Rehabilitation Center, Patna. Expert home service physiotherapy, stroke rehab, pain management, and paediatric therapy. Book appointment today.",
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: `${CLINIC_NAME} & Rehabilitation Center — Best Physiotherapy in Patna`,
    description:
      "Anand Physiotherapy and Rehabilitation Center in Patna. Certified home visit physiotherapy, pain relief, and neurological rehab. Book your free consultation today.",
    url: SITE_URL,
    siteName: CLINIC_NAME,
    images: [{ url: "/images/og/home.jpg", width: 1200, height: 630 }],
  },
};

// ── Page ─────────────────────────────────────────────────
export default function HomePage() {
  return (
    <>
      {/* JSON-LD Structured Data — LocalBusiness + FAQPage */}
      <JsonLd schema={localBusinessSchema()} />
      <JsonLd schema={faqPageSchema(faqs.slice(0, 6))} />

      {/* 1. Hero — H1 + primary CTA */}
      <Hero />

      {/* 2. Stats counter — trust signals */}
      <StatsCounter />

      {/* 3. Services grid — internal linking hub */}
      <ServicesGrid />

      {/* 4. Why Choose Us — E-E-A-T signals */}
      <WhyChooseUs />

      {/* 4b. Body Benefits — Anatomy-based target benefits */}
      <BodyBenefits />

      {/* 4bb. Home Service — Doorstep physiotherapy */}
      <HomeService />

      {/* 4c. Doctor Profile — Chief Physiotherapist details */}
      <DoctorProfile />

      {/* 5. Testimonials — social proof + Review schema */}
      <TestimonialsSlider />

      {/* 6. How It Works + CTA — conversion */}
      <CTASection />

      {/* 7. FAQ Accordion — FAQPage schema + People Also Ask */}
      <FAQAccordion />
    </>
  );
}
