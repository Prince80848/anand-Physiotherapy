import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { services } from "@/data/services";
import { servicesMeta } from "@/lib/services-meta";
import { CLINIC_NAME, SITE_URL, CLINIC_PHONE_DISPLAY } from "@/lib/constants";

// Components
import ServiceBreadcrumb from "@/components/services/ServiceBreadcrumb";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceConditionsTreated from "@/components/services/ServiceConditionsTreated";
import ServiceBenefits from "@/components/services/ServiceBenefits";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServiceFAQ from "@/components/services/ServiceFAQ";
import RelatedServices from "@/components/services/RelatedServices";
import ServiceSchema from "@/components/seo/ServiceSchema";

interface Props {
  params: Promise<{ slug: string }>;
}

// Pre-generate all 10 service pages at build time (SSG)
export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  const meta = servicesMeta[slug];

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: [
      `${service.name} Patna`,
      `${service.name.toLowerCase()} physiotherapy`,
      "physiotherapy Patna",
      CLINIC_NAME,
      ...(service.conditionsTreated.slice(0, 3).map((c) => `${c} physiotherapy Patna`)),
    ],
    alternates: { canonical: `${SITE_URL}/services/${slug}` },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `${SITE_URL}/services/${slug}`,
      siteName: CLINIC_NAME,
      type: "website",
      images: [
        {
          url: `/images/og/services/${slug}.jpg`,
          width: 1200,
          height: 630,
          alt: `${service.name} at ${CLINIC_NAME}, Patna`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: service.metaTitle,
      description: service.metaDescription,
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const meta = servicesMeta[slug];
  if (!meta) notFound();

  return (
    <>
      {/* JSON-LD structured data */}
      <ServiceSchema service={service} />

      {/* ── Breadcrumb ────────────────────────────────── */}
      <ServiceBreadcrumb service={service} />

      {/* ── Hero (unique per service) ─────────────────── */}
      <ServiceHero service={service} meta={meta} />

      {/* ── Conditions Treated ────────────────────────── */}
      <ServiceConditionsTreated
        conditions={service.conditionsTreated}
        accent={meta.accent}
        accentLight={meta.accentLight}
      />

      {/* ── Benefits ──────────────────────────────────── */}
      <ServiceBenefits
        benefits={service.benefits}
        accent={meta.accent}
        accentLight={meta.accentLight}
      />

      {/* ── Our Process ───────────────────────────────── */}
      <ServiceProcess
        process={service.process}
        accent={meta.accent}
        accentLight={meta.accentLight}
      />

      {/* ── FAQ ───────────────────────────────────────── */}
      <ServiceFAQ faqs={service.faqs} accent={meta.accent} />

      {/* ── Book CTA banner ───────────────────────────── */}
      <section
        className="relative overflow-hidden py-20"
        style={{ background: meta.heroGradient }}
        aria-labelledby="service-cta-heading"
      >
        {/* Subtle overlay pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
          aria-hidden="true"
        />

        <div className="container-xl relative z-10 text-center text-white">
          <span className="mb-3 inline-block text-4xl" aria-hidden="true">{meta.icon}</span>
          <h2
            id="service-cta-heading"
            className="text-3xl font-extrabold tracking-tight md:text-4xl"
          >
            Ready to Start {service.name}?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
            Book a consultation with our expert physiotherapists in Patna.
            We&apos;ll create a personalised treatment plan for your specific condition.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-extrabold shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
              style={{ color: meta.accent }}
            >
              Book Your Appointment
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a
              href={`tel:${CLINIC_PHONE_DISPLAY.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-8 py-4 text-sm font-bold text-white backdrop-blur-sm transition-all hover:bg-white/25"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z" />
              </svg>
              Call Us Now
            </a>
          </div>
        </div>
      </section>

      {/* ── Related Services ──────────────────────────── */}
      <RelatedServices currentSlug={service.slug} services={services} />
    </>
  );
}
