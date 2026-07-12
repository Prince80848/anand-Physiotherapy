interface Props {
  benefits: string[];
  accent?: string;
  accentLight?: string;
}

export default function ServiceBenefits({
  benefits,
  accent = "#4a7d67",
  accentLight = "#f0f4f2",
}: Props) {
  if (!benefits || benefits.length === 0) return null;

  return (
    <section
      className="section-py"
      style={{ background: accentLight }}
      aria-labelledby="benefits-heading"
    >
      <div className="container-xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="section-label" style={{ color: accent }}>
            Why Choose This Treatment
          </p>
          <h2 id="benefits-heading" className="heading-xl">
            Key Benefits
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[#555552]">
            Our evidence-based approach delivers measurable results for each patient.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, i) => (
            <div
              key={i}
              className="group flex items-start gap-4 rounded-2xl border border-white bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              {/* Number */}
              <span
                className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl text-sm font-extrabold text-white shadow-sm"
                style={{ background: accent }}
                aria-hidden="true"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-[0.9375rem] font-medium leading-snug text-[#2e2e2c]">
                {benefit}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
