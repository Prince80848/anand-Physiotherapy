interface Props {
  conditions: string[];
  accent?: string;
  accentLight?: string;
}

export default function ServiceConditionsTreated({
  conditions,
  accent = "#4a7d67",
  accentLight = "#f0f4f2",
}: Props) {
  if (!conditions || conditions.length === 0) return null;

  return (
    <section
      id="conditions"
      className="section-py bg-[#faf7f2]"
      aria-labelledby="conditions-heading"
    >
      <div className="container-xl">
        <div className="lg:flex lg:items-start lg:gap-16">
          {/* Left: header */}
          <div className="mb-10 lg:mb-0 lg:w-72 lg:flex-shrink-0">
            <p className="section-label" style={{ color: accent }}>
              Conditions We Treat
            </p>
            <h2 id="conditions-heading" className="heading-lg mt-1">
              Who Can Benefit?
            </h2>
            <p className="mt-4 text-[0.9375rem] leading-relaxed text-[#8a8a85]">
              This therapy is effective for a wide range of conditions. Our physiotherapists
              will tailor treatment to your specific diagnosis.
            </p>

            {/* Decorative pill count */}
            <div
              className="mt-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold"
              style={{ background: accentLight, color: accent }}
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {conditions.length} conditions treated
            </div>
          </div>

          {/* Right: chips */}
          <div className="flex flex-wrap gap-3">
            {conditions.map((condition, i) => (
              <span
                key={i}
                className="flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm"
                style={{
                  borderColor: accent + "33",
                  background: accentLight,
                  color: "#2e2e2c",
                }}
              >
                <span
                  className="h-1.5 w-1.5 flex-shrink-0 rounded-full"
                  style={{ background: accent }}
                  aria-hidden="true"
                />
                {condition}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
