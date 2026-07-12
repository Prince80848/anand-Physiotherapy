import type { Metadata } from "next";
import Link from "next/link";
import { CLINIC_NAME, SITE_URL } from "@/lib/constants";
import { services } from "@/data/services";
import ServiceCard from "@/components/services/ServiceCard";

export const metadata: Metadata = {
  title: `Physiotherapy & Rehabilitation Services in Patna | ${CLINIC_NAME}`,
  description:
    "Explore 10 specialist physiotherapy treatments at Anand Physiotherapy and Rehabilitation Center, Patna. We offer expert home service physiotherapy, stroke rehab, paediatric therapy, and pain relief.",
  keywords: [
    "physiotherapy services Patna",
    "best physiotherapist in Patna",
    "home service physiotherapy Patna",
    "home visit physiotherapy Patna",
    "Anand physiotherapy and rehabilitation center",
    "rehabilitation center in Patna",
    "neurological therapy Patna",
    "aquatic therapy Patna",
    "paediatric physiotherapy Patna",
    "pain management physiotherapy Patna",
    "electrotherapy Patna",
    "best physiotherapy clinic Patna",
  ],
  alternates: { canonical: `${SITE_URL}/services` },
  openGraph: {
    title: `Physiotherapy & Rehabilitation Services in Patna | ${CLINIC_NAME}`,
    description:
      "Certified physiotherapy treatments including neurological rehab, paediatric, and home visits. Discover same-day scheduling at Anand Physiotherapy & Rehabilitation Center, Patna.",
    url: `${SITE_URL}/services`,
    type: "website",
  },
};

// Service category groups for the page structure
const SERVICE_STATS = [
  { value: "10+", label: "Specialist Services" },
  { value: "500+", label: "Patients Treated" },
  { value: "4+", label: "Years Experience" },
  { value: "98%", label: "Patient Satisfaction" },
];

export default function ServicesPage() {
  return (
    <>
      {/* ─── Hero ─────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #273c33 0%, #345748 50%, #4a7d67 100%)",
        }}
        aria-label="Services hero"
      >
        {/* Background pattern */}
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.07]"
          aria-hidden="true"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <pattern id="hero-dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1.5" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-dots)" />
        </svg>

        {/* Decorative blobs */}
        <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-white/5" aria-hidden="true" />
        <div className="absolute -bottom-24 -left-10 h-64 w-64 rounded-full bg-white/5" aria-hidden="true" />

        <div className="container-xl relative z-10 py-20 md:py-28">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-white/60">
              <li>
                <Link href="/" className="transition-colors hover:text-white">Home</Link>
              </li>
              <li aria-hidden="true" className="text-white/30">›</li>
              <li className="font-medium text-white" aria-current="page">Services</li>
            </ol>
          </nav>

          <div className="max-w-2xl">
            <span className="mb-4 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white backdrop-blur-sm">
              🌿 Expert Physiotherapy
            </span>
            <h1 className="mt-2 text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl">
              Our Physiotherapy Services
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-white/80">
              At Anand Physiotherapy, we offer 10 specialist treatments — each evidence-based,
              patient-centred, and delivered by experienced physiotherapists in Patna.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-white !font-bold">
                Book a Consultation
              </Link>
              <a
                href="#services-grid"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
              >
                Browse Services
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-14 grid grid-cols-2 gap-6 border-t border-white/15 pt-10 sm:grid-cols-4">
            {SERVICE_STATS.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-extrabold text-white">{stat.value}</p>
                <p className="mt-0.5 text-xs font-medium uppercase tracking-wider text-white/60">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Services grid ────────────────────────────────────── */}
      <section
        id="services-grid"
        className="section-py bg-[#fdfcfa]"
        aria-labelledby="services-grid-heading"
      >
        <div className="container-xl">
          <div className="mb-12 text-center">
            <p className="section-label">What We Offer</p>
            <h2 id="services-grid-heading" className="heading-xl">
              10 Specialist Treatments
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[#555552]">
              From cutting-edge electrotherapy to gentle paediatric care — we treat a wide
              range of conditions with personalised, evidence-based programmes.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA banner ───────────────────────────────────────── */}
      <section
        className="section-py bg-dark-section"
        aria-labelledby="services-cta-heading"
      >
        <div className="container-xl">
          <div className="mx-auto max-w-2xl text-center text-white">
            <p className="section-label" style={{ color: "#88b5a0" }}>
              Ready to Start?
            </p>
            <h2 id="services-cta-heading" className="heading-xl !text-white">
              Not Sure Which Service Is Right for You?
            </h2>
            <p className="mt-4 text-white/75">
              Book a free 15-minute discovery call. Our physiotherapist will assess your
              condition and recommend the most effective treatment pathway.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-white !font-bold">
                Get a Free Consultation
              </Link>
              <Link href="/about" className="btn-outline !border-white/30 !text-white hover:!bg-white/10 hover:!border-white/50">
                Meet Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
