import Link from "next/link";
import type { Service } from "@/types";
import type { ServiceMeta } from "@/lib/services-meta";

interface Props {
  service: Service;
  meta: ServiceMeta;
}

// SVG patterns for each hero background
function HeroPattern({ pattern, accent }: { pattern: ServiceMeta["heroPattern"]; accent: string }) {
  const opacity = "0.12";

  if (pattern === "neural") {
    return (
      <svg className="absolute inset-0 h-full w-full" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
        <defs>
          <pattern id="neural" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
            <circle cx="40" cy="40" r="3" fill="white" opacity={opacity} />
            <circle cx="10" cy="10" r="2" fill="white" opacity={opacity} />
            <circle cx="70" cy="20" r="2" fill="white" opacity={opacity} />
            <circle cx="20" cy="65" r="2" fill="white" opacity={opacity} />
            <circle cx="60" cy="70" r="2" fill="white" opacity={opacity} />
            <line x1="40" y1="40" x2="10" y2="10" stroke="white" strokeWidth="0.8" opacity={opacity} />
            <line x1="40" y1="40" x2="70" y2="20" stroke="white" strokeWidth="0.8" opacity={opacity} />
            <line x1="40" y1="40" x2="20" y2="65" stroke="white" strokeWidth="0.8" opacity={opacity} />
            <line x1="40" y1="40" x2="60" y2="70" stroke="white" strokeWidth="0.8" opacity={opacity} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#neural)" />
      </svg>
    );
  }

  if (pattern === "wave") {
    return (
      <svg className="absolute inset-0 h-full w-full" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
        <defs>
          <pattern id="wave" x="0" y="0" width="120" height="40" patternUnits="userSpaceOnUse">
            <path d="M0 20 C30 5, 60 35, 120 20" stroke="white" strokeWidth="1.5" fill="none" opacity={opacity} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#wave)" />
      </svg>
    );
  }

  if (pattern === "bubbles") {
    return (
      <svg className="absolute inset-0 h-full w-full" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
        <defs>
          <pattern id="bubbles" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <circle cx="20" cy="20" r="8" stroke="white" strokeWidth="1" fill="none" opacity={opacity} />
            <circle cx="65" cy="45" r="14" stroke="white" strokeWidth="1" fill="none" opacity={opacity} />
            <circle cx="80" cy="80" r="6" stroke="white" strokeWidth="1" fill="none" opacity={opacity} />
            <circle cx="10" cy="75" r="10" stroke="white" strokeWidth="1" fill="none" opacity={opacity} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#bubbles)" />
      </svg>
    );
  }

  if (pattern === "geometric") {
    return (
      <svg className="absolute inset-0 h-full w-full" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
        <defs>
          <pattern id="geo" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <polygon points="30,5 55,45 5,45" stroke="white" strokeWidth="1" fill="none" opacity={opacity} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#geo)" />
      </svg>
    );
  }

  if (pattern === "rings") {
    return (
      <svg className="absolute inset-0 h-full w-full" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
        <defs>
          <pattern id="rings" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
            <circle cx="40" cy="40" r="25" stroke="white" strokeWidth="1" fill="none" opacity={opacity} />
            <circle cx="40" cy="40" r="15" stroke="white" strokeWidth="1" fill="none" opacity={opacity} />
            <circle cx="40" cy="40" r="5" fill="white" opacity={opacity} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#rings)" />
      </svg>
    );
  }

  if (pattern === "grid") {
    return (
      <svg className="absolute inset-0 h-full w-full" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
        <defs>
          <pattern id="grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.8" opacity={opacity} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    );
  }

  if (pattern === "glow") {
    return (
      <svg className="absolute inset-0 h-full w-full" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
        <radialGradient id="glow" cx="30%" cy="50%" r="60%">
          <stop offset="0%" stopColor="white" stopOpacity="0.15" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <rect width="100%" height="100%" fill="url(#glow)" />
      </svg>
    );
  }

  if (pattern === "lines") {
    return (
      <svg className="absolute inset-0 h-full w-full" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
        <defs>
          <pattern id="lines" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
            <line x1="0" y1="30" x2="30" y2="0" stroke="white" strokeWidth="0.8" opacity={opacity} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#lines)" />
      </svg>
    );
  }

  if (pattern === "calm") {
    return (
      <svg className="absolute inset-0 h-full w-full" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
        <defs>
          <pattern id="calm" x="0" y="0" width="200" height="60" patternUnits="userSpaceOnUse">
            <path d="M0 30 Q50 10 100 30 Q150 50 200 30" stroke="white" strokeWidth="1.5" fill="none" opacity={opacity} />
            <path d="M0 45 Q50 25 100 45 Q150 65 200 45" stroke="white" strokeWidth="1" fill="none" opacity="0.07" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#calm)" />
      </svg>
    );
  }

  if (pattern === "electric") {
    return (
      <svg className="absolute inset-0 h-full w-full" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
        <defs>
          <pattern id="elec" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
            <polyline points="10,40 25,20 35,50 50,10 60,40 75,25" stroke="white" strokeWidth="1.2" fill="none" opacity={opacity} strokeLinejoin="round" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#elec)" />
      </svg>
    );
  }

  return null;
}

export default function ServiceHero({ service, meta }: Props) {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: meta.heroGradient }}
      aria-label={`${service.name} hero`}
    >
      <HeroPattern pattern={meta.heroPattern} accent={meta.accent} />

      {/* Decorative blob */}
      <div
        className="absolute -right-24 -top-24 h-96 w-96 rounded-full opacity-10"
        style={{ background: "white" }}
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-32 -left-16 h-80 w-80 rounded-full opacity-10"
        style={{ background: "white" }}
        aria-hidden="true"
      />

      <div className="container-xl relative z-10">
        <div className="flex flex-col gap-8 py-20 md:flex-row md:items-center md:py-28">
          {/* Left: text */}
          <div className="flex-1 text-white">
            {/* Category badge */}
            <span className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-widest backdrop-blur-sm">
              <span className="text-base" aria-hidden="true">{meta.icon}</span>
              {meta.category}
            </span>

            <h1 className="mt-2 text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl lg:text-[3.25rem]">
              {service.name}
            </h1>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/85">
              {service.shortDescription}
            </p>

            {/* Stats row */}
            <div className="mt-8 flex flex-wrap gap-6">
              <Stat label="Conditions Treated" value={`${service.conditionsTreated.length}+`} />
              <Stat label="Key Benefits" value={`${service.benefits.length}`} />
              <Stat label="Treatment Steps" value={`${service.process.length}`} />
            </div>

            {/* CTA buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
                style={{ color: meta.accent }}
              >
                Book a Consultation
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a
                href="#conditions"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/20"
              >
                Explore Treatment
              </a>
            </div>
          </div>

          {/* Right: icon display */}
          <div className="flex-shrink-0 self-center md:self-auto" aria-hidden="true">
            <div className="flex h-48 w-48 items-center justify-center rounded-full border border-white/20 bg-white/10 text-8xl shadow-2xl backdrop-blur-sm md:h-56 md:w-56">
              {meta.icon}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-2xl font-extrabold text-white">{value}</p>
      <p className="text-xs font-medium text-white/70 uppercase tracking-wider">{label}</p>
    </div>
  );
}
