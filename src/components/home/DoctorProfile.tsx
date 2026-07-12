import Image from "next/image";
import Link from "next/link";

export default function DoctorProfile() {
  const qualifications = [
    "BPT (Bachelor of Physiotherapy)",
    "MPT (Musculoskeletal & Sports)",
    "Registered IAP Member",
    "Certified Manual Therapist",
  ];

  const expertises = [
    "Orthopaedic & Spine Rehabilitation",
    "Sports Injury Recovery & Prevention",
    "Post-Surgical Joint Rehabilitation",
    "Advanced Dry Needling & Taping",
  ];

  return (
    <section className="relative py-16 md:py-24 bg-[#faf7f2] overflow-hidden" id="about-doctor" aria-labelledby="doctor-heading">
      
      {/* Background soft design pattern (subtle watermark overlay) */}
      <div className="absolute inset-0 z-0 h-full w-full pointer-events-none opacity-[0.04]">
        <Image
          src="/images/wellness_bg_pattern.png"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <div className="container-xl relative z-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          
          {/* Left Column: Image with offset card (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start pr-4 pb-4">
            <div className="relative w-full max-w-[360px]">
              
              {/* Decorative Offset Background Card (creates premium 3D layered depth) */}
              <div className="absolute inset-0 bg-[#d9e8e1] rounded-3xl translate-x-4 translate-y-4 -z-10" />

              {/* Main Rounded Image */}
              <div className="relative overflow-hidden rounded-3xl shadow-xl aspect-[4/5]">
                
                {/* Clean Top-Left Glassmorphism Badge */}
                <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 rounded-full bg-white/90 border border-[#ede5d8] px-3.5 py-1.5 text-xs font-semibold text-[#3d6856] shadow-sm backdrop-blur-sm">
                  <span>🌿</span> Chief Physiotherapist
                </div>

                <Image
                  src="/images/aniket.jpeg"
                  alt="Dr. Aniket Anand, Chief Physiotherapist at Anand Physiotherapy Patna"
                  fill
                  sizes="(max-width: 768px) 90vw, 360px"
                  className="object-cover object-top"
                  priority
                />
                <div className="absolute inset-0 bg-[#4a7d67]/5" />
              </div>

            </div>
          </div>

          {/* Right Column: Bio Copy & Details (7 cols) */}
          <div className="lg:col-span-7 lg:pl-6 text-center lg:text-left">
            <span className="section-label">Meet Our Expert</span>
            <h2 id="doctor-heading" className="heading-xl mt-1">
              Dr. Aniket Anand
            </h2>
            <p className="text-sm font-semibold text-[#4a7d67] uppercase tracking-wider mt-1.5">
              Chief Physiotherapist & Clinical Director
            </p>

            {/* Qualifications badges */}
            <div className="mt-4 flex flex-wrap gap-2 justify-center lg:justify-start">
              {qualifications.map((q) => (
                <span 
                  key={q} 
                  className="bg-white border border-[#ede5d8] text-[#3f3f3c] font-semibold text-xs px-3 py-1 rounded-full shadow-sm"
                >
                  {q}
                </span>
              ))}
            </div>

            <p className="mt-6 text-base text-[#555552] leading-relaxed max-w-xl mx-auto lg:mx-0">
              Dr. Aniket Anand is a dedicated, highly skilled physiotherapist specializing in advanced musculoskeletal rehabilitation, sports injury recovery, and pain management. With over a decade of clinical experience, he combines hands-on manual therapy techniques, targeted dry needling, and custom movement programs to help patients recover quickly and permanently.
            </p>

            <div className="mt-6 border-l-4 border-[#88b5a0] pl-4 italic text-sm text-[#3f3f3c] max-w-xl mx-auto lg:mx-0 text-left">
              "My goal is not just to relieve your pain temporarily, but to restore your natural movement, build structural strength, and empower you to live a healthy, active life."
              <span className="block font-bold text-xs uppercase tracking-wider text-[#4a7d67] mt-2 not-italic">
                — Dr. Aniket Anand
              </span>
            </div>

            {/* Area of Expertise Checklist */}
            <div className="mt-8 text-left max-w-xl mx-auto lg:mx-0">
              <h3 className="text-sm font-bold text-[#1c1c1a] uppercase tracking-wider mb-4">
                Clinical Focus & Expertise
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {expertises.map((exp) => (
                  <div key={exp} className="flex items-center gap-2.5 text-sm text-[#3f3f3c] font-medium">
                    <span className="flex-shrink-0 flex h-5 w-5 items-center justify-center rounded-full bg-[#d9e8e1] text-[#4a7d67] text-[10px] font-bold">
                      ✓
                    </span>
                    {exp}
                  </div>
                ))}
              </div>
            </div>

            {/* CTA button */}
            <div className="mt-8 flex justify-center lg:justify-start">
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-[#4a7d67] hover:bg-[#3d6856] text-white font-semibold text-sm transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                <span>📅</span> Book Consultation with Dr. Aniket
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
