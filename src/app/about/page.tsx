import type { Metadata } from "next";
import Link from "next/link";
import { CLINIC_NAME, SITE_URL, CLINIC_ADDRESS, CLINIC_PHONE } from "@/lib/constants";

// ── SEO ──────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: `About Us — Our Story & Mission | ${CLINIC_NAME}`,
  description:
    "Learn the story behind Anand Physiotherapy, Patna — our founding mission, expert team, core values, and our commitment to evidence-based physiotherapy care.",
  keywords: [
    "about Anand Physiotherapy",
    "physiotherapy clinic Patna story",
    "Dr Anand Kumar physiotherapist Patna",
    "best physiotherapy clinic Patna",
    "physiotherapy mission Patna",
  ],
  alternates: { canonical: `${SITE_URL}/about` },
  openGraph: {
    title: `About Us | ${CLINIC_NAME}`,
    description:
      "Our story, mission and expert team — Anand Physiotherapy, Patna's trusted physiotherapy clinic.",
    url: `${SITE_URL}/about`,
    type: "website",
  },
};

// ── JSON-LD ───────────────────────────────────────────────────
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: CLINIC_NAME,
  description:
    "Anand Physiotherapy is Patna's leading physiotherapy clinic offering 10 specialist treatments with evidence-based, patient-centred care.",
  url: SITE_URL,
  address: {
    "@type": "PostalAddress",
    streetAddress: CLINIC_ADDRESS,
    addressLocality: "Patna",
    addressRegion: "Bihar",
    postalCode: "800001",
    addressCountry: "IN",
  },
  telephone: CLINIC_PHONE,
  medicalSpecialty: "PhysicalTherapy",
  priceRange: "₹₹",
};

// ── Static data ───────────────────────────────────────────────
const STATS = [
  { value: "4+", label: "Years of Excellence" },
  { value: "5,000+", label: "Patients Recovered" },
  { value: "10", label: "Specialist Services" },
  { value: "98%", label: "Satisfaction Rate" },
];

const TIMELINE = [
  {
    year: "2021",
    title: "The Beginning",
    desc: "Dr. Anand Kumar founded the clinic in 2021 with a single treatment room and a mission to bring evidence-based physiotherapy to Patna.",
  },
  {
    year: "2023",
    title: "Advanced Rehabilitation",
    desc: "Launched dedicated neurological and paediatric care, expanding treatment options for patient recovery.",
  },
  {
    year: "2026",
    title: "Full Spectrum Clinic",
    desc: "Expanded to 10 specialist services, serving patients with modern facilities across Patna.",
  },
];

const VALUES = [
  {
    icon: "🎯",
    title: "Evidence-Based Care",
    desc: "Every treatment protocol is grounded in the latest clinical research — not tradition.",
  },
  {
    icon: "🤝",
    title: "Patient-Centred",
    desc: "Your goals drive your treatment plan. We listen first, then prescribe.",
  },
  {
    icon: "🔬",
    title: "Continual Learning",
    desc: "Our team attends regular CPD workshops to stay at the forefront of physiotherapy.",
  },
  {
    icon: "❤️",
    title: "Compassionate Care",
    desc: "Healing is more than physical — we treat the whole person, not just the condition.",
  },
];

const TEAM = [
  {
    name: "Dr. Anand Kumar",
    role: "Chief Physiotherapist & Founder",
    quals: ["BPT", "MPT (Neurology)", "4+ Years"],
    bio: "Specialist in neurological rehabilitation — stroke, Parkinson's, and spinal conditions. Trained at AIIMS and the National Institute of Mental Health.",
    initial: "A",
    accent: "#4a7d67",
  },
  {
    name: "Dr. Priya Sharma",
    role: "Paediatric Physiotherapist",
    quals: ["BPT", "MPT (Paediatrics)", "8 Years"],
    bio: "Expert in play-based therapy for children with cerebral palsy, developmental delay, and autism spectrum disorder.",
    initial: "P",
    accent: "#7C5CFC",
  },
  {
    name: "Dr. Rahul Verma",
    role: "Musculoskeletal Specialist",
    quals: ["BPT", "MPT (Orthopaedics)", "10 Years"],
    bio: "Specialist in sports injuries, post-surgical rehab, and manual therapy for back, knee, and shoulder conditions.",
    initial: "R",
    accent: "#3A6EA5",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      {/* ══════════════════════════════════════════════════════════
          HERO — Full-bleed dark split with diagonal clip
      ══════════════════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden bg-[#111410]"
        aria-label="About hero"
      >
        {/* Large decorative numeral */}
        <span
          className="pointer-events-none absolute -right-8 top-0 select-none text-[20rem] font-extrabold leading-none text-white/[0.03]"
          aria-hidden="true"
        >
          4
        </span>

        <div className="container-xl relative z-10">
          <div className="grid min-h-[520px] items-center gap-12 py-20 md:grid-cols-2 md:py-28">
            {/* Left — text */}
            <div>
              {/* Breadcrumb */}
              <nav aria-label="Breadcrumb" className="mb-8">
                <ol className="flex items-center gap-2 text-sm text-white/40">
                  <li><Link href="/" className="transition-colors hover:text-white">Home</Link></li>
                  <li aria-hidden="true">›</li>
                  <li className="text-white/70">About</li>
                </ol>
              </nav>

              <span className="inline-flex items-center gap-2 rounded-full border border-[#4a7d67]/40 bg-[#4a7d67]/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[#88b5a0]">
                🌿 Our Story
              </span>
              <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl lg:text-[3rem]">
                Healing Patna,{" "}
                <span className="text-[#4a7d67]">One Patient</span>{" "}
                at a Time.
              </h1>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-white/60">
                Founded in 2021, Anand Physiotherapy was built on a single belief — every
                person deserves access to expert, evidence-based physiotherapy, no matter
                their condition.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary">
                  Book a Consultation
                </Link>
                <a
                  href="#our-story"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white/40 hover:bg-white/5"
                >
                  Read Our Story
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right — stat grid */}
            <div className="grid grid-cols-2 gap-4">
              {STATS.map((stat, i) => (
                <div
                  key={stat.label}
                  className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
                  style={{ borderColor: i === 0 ? "#4a7d67" : undefined }}
                >
                  <p className="text-[2.5rem] font-extrabold leading-none text-white">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-xs font-medium uppercase tracking-wider text-white/40">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Diagonal bottom clip */}
        <div
          className="absolute bottom-0 left-0 right-0 h-16 bg-[#fdfcfa]"
          style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }}
          aria-hidden="true"
        />
      </section>

      {/* ══════════════════════════════════════════════════════════
          OUR STORY TIMELINE — cream bg, offset timeline
      ══════════════════════════════════════════════════════════ */}
      <section id="our-story" className="section-py bg-[#fdfcfa]" aria-labelledby="story-heading">
        <div className="container-xl">
          <div className="mb-16 max-w-xl">
            <p className="section-label">Since 2021</p>
            <h2 id="story-heading" className="heading-xl">
              Our Journey
            </h2>
            <p className="mt-4 text-[#555552]">
              From a single treatment room to Patna&apos;s most comprehensive physiotherapy centre —
              here are the milestones that shaped who we are.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative pl-8 md:pl-0">
            {/* Vertical line (desktop: centred, mobile: left) */}
            <div
              className="absolute left-2.5 top-0 bottom-0 w-px bg-gradient-to-b from-[#4a7d67] via-[#4a7d67]/30 to-transparent md:left-1/2"
              aria-hidden="true"
            />

            <ol className="space-y-12">
              {TIMELINE.map((item, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <li key={item.year} className="relative md:flex md:items-start md:gap-0">
                    {/* Left side content (desktop only, even items) */}
                    <div className={`hidden md:flex md:flex-1 md:justify-end md:pr-12 ${isLeft ? "" : "invisible"}`}>
                      <div className="max-w-xs text-right">
                        <span className="text-3xl font-extrabold text-[#4a7d67]">{item.year}</span>
                        <h3 className="mt-1 text-lg font-bold text-[#1c1c1a]">{item.title}</h3>
                        <p className="mt-2 text-[0.9rem] leading-relaxed text-[#8a8a85]">{item.desc}</p>
                      </div>
                    </div>

                    {/* Timeline dot */}
                    <div className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full border-4 border-white bg-[#4a7d67] shadow-md md:relative md:left-auto md:flex-shrink-0 md:-translate-y-0.5">
                      <span className="h-2 w-2 rounded-full bg-white" aria-hidden="true" />
                    </div>

                    {/* Right side content */}
                    <div className={`md:flex-1 md:pl-12 ${!isLeft ? "" : "md:invisible"}`}>
                      {/* Mobile: always show; desktop: only odd items */}
                      <div className="max-w-xs md:hidden">
                        <span className="text-2xl font-extrabold text-[#4a7d67]">{item.year}</span>
                        <h3 className="mt-1 font-bold text-[#1c1c1a]">{item.title}</h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-[#8a8a85]">{item.desc}</p>
                      </div>
                      <div className={`hidden max-w-xs md:block ${isLeft ? "invisible" : ""}`}>
                        <span className="text-3xl font-extrabold text-[#4a7d67]">{item.year}</span>
                        <h3 className="mt-1 text-lg font-bold text-[#1c1c1a]">{item.title}</h3>
                        <p className="mt-2 text-[0.9rem] leading-relaxed text-[#8a8a85]">{item.desc}</p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          MISSION — dark green diagonal stripe
      ══════════════════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden py-24"
        style={{ background: "linear-gradient(135deg, #273c33 0%, #345748 100%)" }}
        aria-labelledby="mission-heading"
      >
        {/* Top clip */}
        <div
          className="absolute left-0 right-0 top-0 h-14 bg-[#fdfcfa]"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}
          aria-hidden="true"
        />
        {/* Bottom clip */}
        <div
          className="absolute bottom-0 left-0 right-0 h-14 bg-[#fdfcfa]"
          style={{ clipPath: "polygon(0 0, 100% 100%, 0 100%)" }}
          aria-hidden="true"
        />

        <div className="container-xl relative z-10">
          <div className="mx-auto max-w-3xl text-center text-white">
            <p className="section-label" style={{ color: "#88b5a0" }}>
              Why We Exist
            </p>
            <h2 id="mission-heading" className="heading-xl !text-white">
              Our Mission
            </h2>
            <blockquote className="mt-8 border-l-4 border-[#4a7d67] pl-6 text-left">
              <p className="text-xl font-semibold italic leading-relaxed text-white/90">
                &ldquo;To restore movement, reduce pain, and improve quality of life for every
                patient in Patna — through expert, compassionate, evidence-based physiotherapy.&rdquo;
              </p>
              <footer className="mt-4 text-sm text-white/50">— Dr. Anand Kumar, Founder</footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          TEAM — light bg, horizontal card with accent sidebar
      ══════════════════════════════════════════════════════════ */}
      <section className="section-py bg-[#fdfcfa]" aria-labelledby="team-heading">
        <div className="container-xl">
          <div className="mb-14 text-center">
            <p className="section-label">The People Behind It</p>
            <h2 id="team-heading" className="heading-xl">
              Meet Our Experts
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[#555552]">
              Our credentialled physiotherapists bring decades of combined experience across
              every speciality we offer.
            </p>
          </div>

          <div className="space-y-6">
            {TEAM.map((member, i) => (
              <div
                key={member.name}
                className="flex overflow-hidden rounded-2xl border border-[#ede5d8] bg-white shadow-sm transition-all duration-300 hover:shadow-md"
              >
                {/* Accent sidebar */}
                <div
                  className="w-2 flex-shrink-0"
                  style={{ background: member.accent }}
                  aria-hidden="true"
                />

                {/* Avatar initial */}
                <div
                  className="flex w-20 flex-shrink-0 items-center justify-center text-2xl font-extrabold text-white sm:w-24"
                  style={{ background: member.accent + "22", color: member.accent }}
                >
                  {member.initial}
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col justify-center px-6 py-5 sm:flex-row sm:items-center sm:gap-8">
                  <div className="flex-1">
                    <h3 className="text-[1rem] font-extrabold text-[#1c1c1a]">{member.name}</h3>
                    <p className="mt-0.5 text-sm font-medium" style={{ color: member.accent }}>
                      {member.role}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-[#8a8a85]">{member.bio}</p>
                  </div>

                  {/* Qualifications */}
                  <div className="mt-3 flex flex-wrap gap-2 sm:mt-0 sm:flex-col sm:items-end sm:gap-1.5">
                    {member.quals.map((q) => (
                      <span
                        key={q}
                        className="rounded-full px-3 py-1 text-xs font-semibold"
                        style={{ background: member.accent + "15", color: member.accent }}
                      >
                        {q}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          VALUES — alternating icon cards on dark bg
      ══════════════════════════════════════════════════════════ */}
      <section className="section-py bg-[#111410]" aria-labelledby="values-heading">
        <div className="container-xl">
          <div className="mb-14 text-center">
            <p className="section-label" style={{ color: "#4a7d67" }}>What Drives Us</p>
            <h2 id="values-heading" className="heading-xl !text-white">
              Our Core Values
            </h2>
          </div>

          <div className="grid gap-px rounded-2xl overflow-hidden border border-white/10 sm:grid-cols-2">
            {VALUES.map((value, i) => (
              <div
                key={value.title}
                className="flex items-start gap-5 bg-[#1a1a17] p-8 transition-colors duration-200 hover:bg-[#1e2019]"
              >
                <span
                  className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[#4a7d67]/15 text-2xl"
                  aria-hidden="true"
                >
                  {value.icon}
                </span>
                <div>
                  <h3 className="text-[1rem] font-bold text-white">{value.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/50">{value.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          CTA — sage gradient strip
      ══════════════════════════════════════════════════════════ */}
      <section
        className="py-20"
        style={{ background: "linear-gradient(135deg, #4a7d67 0%, #2A9B6E 100%)" }}
        aria-labelledby="about-cta-heading"
      >
        <div className="container-xl text-center text-white">
          <h2 id="about-cta-heading" className="text-3xl font-extrabold md:text-4xl">
            Ready to Start Your Recovery?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-white/80">
            Meet our team in person. Book a consultation and let us create a personalised
            treatment plan built around your goals.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-extrabold text-[#4a7d67] shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
            >
              Book an Appointment
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 py-4 text-sm font-bold text-white backdrop-blur-sm transition-all hover:bg-white/20"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
