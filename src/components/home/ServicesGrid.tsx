import Link from "next/link";
import Image from "next/image";
import { services } from "@/data/services";

const SERVICE_ICONS: Record<string, string> = {
  "neurological-therapy": "🧠",
  "aquatic-therapy": "💧",
  "paediatric-therapy": "👶",
  "occupational-therapy": "🤝",
  "balance-exercise-therapy": "⚖️",
  "physical-therapy": "💪",
  "heat-therapy": "🌡️",
  "exercise-therapy": "🏃",
  "pain-management": "🎯",
  "electrotherapy": "⚡",
};

export default function ServicesGrid() {
  return (
    <section
      className="pt-10 pb-20 md:pt-12 md:pb-28 bg-section-alt"
      id="services"
      aria-labelledby="services-heading"
    >
      <div className="container-xl">
        {/* Header */}
        <div className="mx-auto mb-14 max-w-xl text-center">
          <span className="section-label">Services</span>
          <h2 id="services-heading" className="heading-xl mt-1">
            How We Help You
          </h2>
          <p className="mt-3 text-[#555552] leading-relaxed">
            Evidence-based physiotherapy tailored to your condition from acute
            injuries to long-term chronic care.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {services.map((service) => {
            const icon = SERVICE_ICONS[service.slug] ?? "🏥";
            const imagePath = `/images/services/${service.slug}.png`;

            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group relative flex h-[340px] w-full flex-col justify-end overflow-hidden rounded-2xl border border-[#ede5d8] bg-charcoal-900 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Background Image */}
                <div className="absolute inset-0 z-0 h-full w-full transition-transform duration-500 ease-out group-hover:scale-105">
                  <Image
                    src={imagePath}
                    alt={service.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover object-center"
                  />
                  {/* Default Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent transition-opacity duration-300 group-hover:opacity-0" />
                  {/* Hover Solid Dark Green Overlay */}
                  <div className="absolute inset-0 bg-[#273c33]/90 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>

                {/* Card Content Wrapper */}
                <div className="relative z-10 p-6 text-white w-full">

                  {/* Default State: Icon & Title */}
                  <div className="flex items-center gap-3 transition-transform duration-300 group-hover:-translate-y-2">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-xl backdrop-blur-md">
                      {icon}
                    </span>
                    <h3 className="text-lg font-bold tracking-tight text-white leading-tight">
                      {service.name}
                    </h3>
                  </div>

                  {/* Hover State: Description & Button (hidden/slid down by default) */}
                  <div className="max-h-0 overflow-hidden opacity-0 transition-all duration-300 ease-out group-hover:max-h-40 group-hover:opacity-100 group-hover:mt-3">
                    <p className="text-sm text-[#b0d4c4] leading-relaxed line-clamp-3">
                      {service.shortDescription}
                    </p>

                    <div className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-white">
                      <span>Learn more</span>
                      <svg
                        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2.5}
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>

                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <Link href="/services" className="btn-primary">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
