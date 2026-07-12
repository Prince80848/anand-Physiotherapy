interface ProcessStep {
  step: string;
  description: string;
}

interface Props {
  process: ProcessStep[];
  accent?: string;
  accentLight?: string;
}

export default function ServiceProcess({
  process,
  accent = "#4a7d67",
  accentLight = "#f0f4f2",
}: Props) {
  if (!process || process.length === 0) return null;

  return (
    <section className="section-py bg-[#fdfcfa]" aria-labelledby="process-heading">
      <div className="container-xl">
        {/* Header */}
        <div className="mb-14 text-center">
          <p className="section-label" style={{ color: accent }}>
            Our Approach
          </p>
          <h2 id="process-heading" className="heading-xl">
            How We Treat You
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[#555552]">
            A structured, patient-centred process from assessment to long-term results.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mx-auto max-w-3xl">
          {/* Vertical line */}
          <div
            className="absolute left-6 top-0 bottom-0 w-px md:left-1/2"
            style={{ background: `linear-gradient(to bottom, ${accent}44, ${accent}11)` }}
            aria-hidden="true"
          />

          <ol className="space-y-10">
            {process.map((item, i) => {
              const isEven = i % 2 === 0;
              return (
                <li
                  key={i}
                  className={`relative flex items-start gap-6 md:gap-0 ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content card */}
                  <div
                    className={`ml-16 flex-1 rounded-2xl border border-[#ede5d8] bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md md:ml-0 ${
                      isEven ? "md:mr-10" : "md:ml-10"
                    }`}
                  >
                    <h3
                      className="mb-2 text-[1rem] font-bold"
                      style={{ color: accent }}
                    >
                      {item.step}
                    </h3>
                    <p className="text-[0.9375rem] leading-relaxed text-[#555552]">
                      {item.description}
                    </p>
                  </div>

                  {/* Step bubble — absolutely positioned on the line */}
                  <div
                    className="absolute left-0 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border-4 border-white text-sm font-extrabold text-white shadow-lg md:left-1/2 md:-translate-x-1/2"
                    style={{ background: accent }}
                    aria-label={`Step ${i + 1}`}
                  >
                    {i + 1}
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
