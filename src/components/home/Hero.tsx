import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-68px)] flex items-center overflow-hidden" aria-label="Hero">
      
      {/* Full-screen Background Image */}
      <div className="absolute inset-0 z-0 h-full w-full">
        <Image
          src="/images/hero_bg.png"
          alt="Modern, bright physiotherapy clinic interior"
          fill
          priority
          unoptimized={true}
          sizes="100vw"
          className="object-cover object-right"
        />
        {/* Elegant Left-to-Right Gradient Overlay: Dark on left (for text), transparent on right (to show image clearly) */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent" />
      </div>

      <div className="container-xl relative z-10 py-16 lg:py-24 -mt-6 lg:-mt-10">
        <div className="max-w-2xl text-left text-white animate-fade-in-up">

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Expert <span className="text-[#b4d1c4]">Physiotherapy</span><br />
            To Restore Movement &<br />
            Relieve Pain.
          </h1>

          {/* Subheading Description */}
          <p className="mt-6 text-base sm:text-lg leading-relaxed text-[#ede5d8] max-w-xl">
            Personalized, evidence-based rehabilitation for neurological, paediatric,
            orthopaedic, and chronic pain conditions. Reclaim your mobility and live pain-free.
          </p>

          {/* Quick clinical checkmarks */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3.5 max-w-lg">
            {[
              "Certified & Registered Therapists",
              "Advanced Electrotherapy & Gym",
              "Neurological & Paediatric Experts",
              "Post-Surgery & Sports Rehab",
            ].map((point) => (
              <div key={point} className="flex items-center gap-2.5 text-sm text-[#d4d4ce] font-medium">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#88b5a0] text-[#172520] text-[10px] font-bold">
                  ✓
                </span>
                {point}
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
            <Link 
              href="/contact" 
              className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#4a7d67] hover:bg-[#3d6856] text-white font-semibold text-sm transition-all duration-250 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              Book Appointment
            </Link>
            <Link 
              href="/services" 
              className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full border border-white/40 hover:border-white text-white hover:bg-white hover:text-[#1c2e26] font-semibold text-sm transition-all duration-250 backdrop-blur-sm"
            >
              Explore Treatments
            </Link>
          </div>

        </div>
      </div>
      
    </section>
  );
}
