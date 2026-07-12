import Image from "next/image";
import Link from "next/link";

const BENEFITS = [
  "Pain relief and reduced inflammation",
  "Improved mobility and flexibility",
  "Better posture and alignment",
  "Stress reduction and relaxation",
  "Faster recovery from injury",
  "Long-term wellness maintenance",
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-16 md:py-24 bg-[#fdfcfa] overflow-hidden" id="benefits" aria-labelledby="benefits-heading">
      
      {/* Subtle Background Pattern with Low Opacity */}
      <div className="absolute inset-0 z-0 h-full w-full pointer-events-none opacity-[0.06]">
        <Image
          src="/images/wellness_bg_pattern.png"
          alt="Subtle wellness background pattern"
          fill
          className="object-cover"
        />
      </div>

      <div className="container-xl relative z-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">

          {/* Left Column — Visual Image & Badges (5 cols) */}
          <div className="relative lg:col-span-5 flex justify-center lg:justify-start pr-4 pb-4">
            <div className="relative w-full max-w-[360px]">
              
              {/* Decorative Offset Background Card (creates premium 3D layered depth) */}
              <div className="absolute inset-0 bg-[#d9e8e1] rounded-3xl translate-x-4 translate-y-4 -z-10" />

              {/* Main Rounded Image */}
              <div className="relative overflow-hidden rounded-3xl shadow-xl aspect-[4/5]">
                
                {/* Clean Top-Left Glassmorphism Badge */}
                <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 rounded-full bg-white/90 border border-[#ede5d8] px-3.5 py-1.5 text-xs font-semibold text-[#3d6856] shadow-sm backdrop-blur-sm">
                  <span>🌿</span> 4+ Years Trust
                </div>

                <Image
                  src="/images/benefits.png"
                  alt="Patient receiving expert physiotherapy treatment at Anand Physiotherapy Patna"
                  fill
                  sizes="(max-width: 768px) 90vw, 360px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[#4a7d67]/5" />
              </div>

            </div>
          </div>

          {/* Right Column — Copy & Checklist (7 cols) */}
          <div className="lg:col-span-7 lg:pl-6 text-center lg:text-left">
            <span className="section-label">Benefits</span>
            <h2 id="benefits-heading" className="heading-xl mt-1">
              Why Choose Anand Physiotherapy?
            </h2>
            <p className="mt-4 text-base text-[#555552] leading-relaxed max-w-xl mx-auto lg:mx-0">
              We combine evidence-based treatment protocols with a compassionate,
              patient-first approach — providing care in a calm, healing environment that supports
              your recovery every step of the way.
            </p>

            {/* Structured 2-column checklist with SVG icons */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto lg:mx-0 text-left">
              {BENEFITS.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3">
                  <span className="flex-shrink-0 flex h-6 w-6 items-center justify-center rounded-full bg-[#d9e8e1] text-[#4a7d67]">
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-sm font-semibold text-[#3f3f3c] leading-tight pt-0.5">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            {/* High-contrast solid-color card wrapper for text highlight */}
            <div className="mt-8 rounded-2xl bg-[#273c33] p-6 text-white text-left shadow-md relative overflow-hidden">
              <div className="absolute top-0 right-0 h-16 w-16 bg-white/5 rounded-bl-full pointer-events-none" />
              
              <h3 className="text-base font-bold text-white tracking-wide">
                🏥 Professional Care & Rehabilitation
              </h3>
              <p className="mt-2 text-sm text-[#b0d4c4] leading-relaxed">
                Our treatments are designed around your recovery. We track progress 
                at every session to ensure you reach your physical goals quickly and safely.
              </p>
              
              <div className="mt-4">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-full bg-white hover:bg-[#faf7f2] text-[#273c33] font-semibold text-xs transition-colors duration-200"
                >
                  <span>📅</span> Book Consultation
                </Link>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
