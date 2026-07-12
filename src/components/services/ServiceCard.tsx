import Link from "next/link";
import type { Service } from "@/types";
import { servicesMeta } from "@/lib/services-meta";

interface Props {
  service: Service;
}

export default function ServiceCard({ service }: Props) {
  const meta = servicesMeta[service.slug];
  if (!meta) return null;

  return (
    <Link
      href={`/services/${service.slug}`}
      aria-label={`Learn about ${service.name}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-[#ede5d8] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:outline-2"
      style={
        {
          "--accent": meta.accent,
          "--accent-light": meta.accentLight,
        } as React.CSSProperties
      }
    >
      {/* Accent border top */}
      <span
        className="absolute inset-x-0 top-0 h-1 rounded-t-2xl transition-all duration-300 group-hover:h-1.5"
        style={{ background: meta.accent }}
        aria-hidden="true"
      />

      {/* Category badge */}
      <span
        className="mb-4 inline-flex w-fit items-center rounded-full px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider"
        style={{ background: meta.accentLight, color: meta.accent }}
      >
        {meta.category}
      </span>

      {/* Icon */}
      <div
        className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl text-2xl shadow-sm transition-transform duration-300 group-hover:scale-105"
        style={{ background: meta.accentLight }}
        aria-hidden="true"
      >
        {meta.icon}
      </div>

      {/* Content */}
      <h3 className="text-[1.0625rem] font-bold text-[#1c1c1a] leading-snug transition-colors duration-200 group-hover:text-[var(--accent)]">
        {service.name}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-[#8a8a85]">
        {service.shortDescription}
      </p>

      {/* Conditions preview */}
      <div className="mt-4 flex flex-wrap gap-1.5">
        {service.conditionsTreated.slice(0, 2).map((c) => (
          <span
            key={c}
            className="rounded-full border border-[#ede5d8] px-2.5 py-0.5 text-[11px] text-[#8a8a85]"
          >
            {c}
          </span>
        ))}
        {service.conditionsTreated.length > 2 && (
          <span className="rounded-full border border-[#ede5d8] px-2.5 py-0.5 text-[11px] text-[#8a8a85]">
            +{service.conditionsTreated.length - 2} more
          </span>
        )}
      </div>

      {/* CTA */}
      <div className="mt-5 flex items-center gap-1.5 text-sm font-semibold transition-colors duration-200" style={{ color: meta.accent }}>
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
}
