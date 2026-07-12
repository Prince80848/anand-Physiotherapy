import type { Metadata } from "next";
import Link from "next/link";
import { CLINIC_NAME, SITE_URL } from "@/lib/constants";
import { galleryImages, galleryVideos } from "@/data/gallery";
import GalleryPhotoGrid from "@/components/gallery/GalleryPhotoGrid";
import GalleryVideoGrid from "@/components/gallery/GalleryVideoGrid";

// ── SEO Metadata ─────────────────────────────────────────────
export const metadata: Metadata = {
  title: `Gallery — Clinic Photos & Treatment Videos | ${CLINIC_NAME}`,
  description:
    "Explore the Anand Physiotherapy gallery — photos of our modern clinic in Patna and videos of our specialist treatments including neurological therapy, aquatic therapy, exercise therapy and more.",
  keywords: [
    "physiotherapy clinic gallery Patna",
    "Anand Physiotherapy photos",
    "physiotherapy treatment videos",
    "rehabilitation clinic Patna",
    "physiotherapy clinic interior Patna",
  ],
  alternates: { canonical: `${SITE_URL}/gallery` },
  openGraph: {
    title: `Gallery — Clinic Photos & Treatment Videos | ${CLINIC_NAME}`,
    description:
      "See inside Anand Physiotherapy, Patna — 6 clinic photos and 16 expert treatment videos showcasing our facilities and care.",
    url: `${SITE_URL}/gallery`,
    type: "website",
    images: [
      {
        url: `/gallery-image/gallery-1.jpeg`,
        width: 1200,
        height: 800,
        alt: `${CLINIC_NAME} — Clinic gallery`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Gallery | ${CLINIC_NAME}`,
    description: "Explore our clinic photos and 16 expert treatment videos at Anand Physiotherapy, Patna.",
  },
};

// ── JSON-LD ───────────────────────────────────────────────────
const gallerySchema = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  name: `${CLINIC_NAME} — Photo Gallery`,
  description: "Photos and videos from Anand Physiotherapy, Patna",
  url: `${SITE_URL}/gallery`,
  image: galleryImages.map((img) => ({
    "@type": "ImageObject",
    url: `${SITE_URL}${img.src}`,
    description: img.alt,
  })),
};

// ── Page Stats ────────────────────────────────────────────────
const STATS = [
  { value: `${galleryImages.length}`, label: "Clinic Photos" },
  { value: `${galleryVideos.length}`, label: "Treatment Videos" },
  { value: "10+", label: "Specialist Services" },
  { value: "500+", label: "Happy Patients" },
];

export default function GalleryPage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(gallerySchema) }}
      />

      {/* ── Hero ─────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #1c1c1a 0%, #2e2e2c 40%, #345748 100%)",
        }}
        aria-label="Gallery hero"
      >
        {/* Dot pattern */}
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.06]"
          aria-hidden="true"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <pattern id="gallery-dots" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
              <circle cx="16" cy="16" r="1.5" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#gallery-dots)" />
        </svg>
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#4a7d67]/20" aria-hidden="true" />
        <div className="absolute -bottom-20 -left-16 h-64 w-64 rounded-full bg-white/5" aria-hidden="true" />

        <div className="container-xl relative z-10 py-20 md:py-28">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-white/50">
              <li><Link href="/" className="transition-colors hover:text-white">Home</Link></li>
              <li aria-hidden="true" className="text-white/30">›</li>
              <li className="font-medium text-white" aria-current="page">Gallery</li>
            </ol>
          </nav>

          <div className="max-w-2xl">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white">
              📸 Photos & Videos
            </span>
            <h1 className="mt-2 text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl">
              Our Gallery
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/75">
              Take a look inside Anand Physiotherapy — our state-of-the-art facilities in Patna
              and a showcase of our expert treatment sessions.
            </p>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-2 gap-6 border-t border-white/10 pt-8 sm:grid-cols-4">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-extrabold text-white">{stat.value}</p>
                <p className="mt-0.5 text-xs font-medium uppercase tracking-wider text-white/50">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Photo Gallery ─────────────────────────────────── */}
      <section className="section-py bg-[#fdfcfa]">
        <div className="container-xl">
          <GalleryPhotoGrid images={galleryImages} />
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-[#ede5d8] bg-[#faf7f2]">
        <div className="container-xl py-4">
          <div className="flex items-center gap-4">
            <span className="h-px flex-1 bg-[#ede5d8]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#8a8a85]">
              Treatment Videos
            </span>
            <span className="h-px flex-1 bg-[#ede5d8]" />
          </div>
        </div>
      </div>

      {/* ── Video Gallery ─────────────────────────────────── */}
      <section className="section-py bg-[#faf7f2]">
        <div className="container-xl">
          <GalleryVideoGrid videos={galleryVideos} />
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <section
        className="section-py bg-dark-section"
        aria-labelledby="gallery-cta-heading"
      >
        <div className="container-xl">
          <div className="mx-auto max-w-2xl text-center text-white">
            <p className="section-label" style={{ color: "#88b5a0" }}>
              Ready to Visit?
            </p>
            <h2 id="gallery-cta-heading" className="heading-xl !text-white">
              Experience Our Clinic in Person
            </h2>
            <p className="mt-4 text-white/70">
              Book a consultation today and experience our welcoming, state-of-the-art
              physiotherapy facility in Patna for yourself.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-white !font-bold">
                Book an Appointment
              </Link>
              <Link href="/services" className="btn-outline !border-white/30 !text-white hover:!bg-white/10 hover:!border-white/50">
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
