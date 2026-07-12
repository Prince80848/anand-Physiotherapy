import Link from "next/link";
import type { Service } from "@/types";
import { servicesMeta } from "@/lib/services-meta";

interface Props {
  currentSlug: string;
  services: Service[];
}

export default function RelatedServices({ currentSlug, services }: Props) {
  const related = services.filter((s) => s.slug !== currentSlug).slice(0, 3);

  if (related.length === 0) return null;

  return (
    <section className="section-py bg-[#faf7f2]" aria-labelledby="related-heading">
      <div className="container-xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="section-label">Explore More</p>
          <h2 id="related-heading" className="heading-xl">
            Related Services
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[#555552]">
            Our clinic offers a full spectrum of physiotherapy treatments — each tailored to your condition.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((service) => {
            const meta = servicesMeta[service.slug];
            if (!meta) return null;
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                aria-label={`Learn about ${service.name}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-[#ede5d8] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Icon + category */}
                <div className="mb-4 flex items-center gap-3">
                  <span
                    className="flex h-11 w-11 items-center justify-center rounded-xl text-xl"
                    style={{ background: meta.accentLight }}
                    aria-hidden="true"
                  >
                    {meta.icon}
                  </span>
                  <span
                    className="text-xs font-semibold uppercase tracking-wider"
                    style={{ color: meta.accent }}
                  >
                    {meta.category}
                  </span>
                </div>

                <h3 className="text-[1rem] font-bold text-[#1c1c1a] leading-snug transition-colors duration-200 group-hover:text-[var(--accent)]"
                  style={{ "--accent": meta.accent } as React.CSSProperties}
                >
                  {service.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-[#8a8a85]">
                  {service.shortDescription}
                </p>

                <div
                  className="mt-5 flex items-center gap-1 text-sm font-semibold transition-colors duration-200"
                  style={{ color: meta.accent }}
                >
                  Learn more
                  <svg
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            );
          })}
        </div>

        {/* View all CTA */}
        <div className="mt-12 text-center">
          <Link href="/services" className="btn-outline">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
