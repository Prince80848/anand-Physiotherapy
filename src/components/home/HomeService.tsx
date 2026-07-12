import Link from "next/link";
import Image from "next/image";

const HOME_SERVICE_BENEFITS = [
  {
    icon: "🏠",
    title: "Therapy at Your Doorstep",
    desc: "Recover in the safety, privacy, and comfort of your own home with no travel stress.",
  },
  {
    icon: "⚡",
    title: "Portable Equipments",
    desc: "Our therapists bring advanced portable electrotherapy machines (IFT, TENS, Ultrasound) to your home.",
  },
  {
    icon: "👴",
    title: "Ideal for Seniors & Post-Op",
    desc: "Perfect for stroke recovery, joint replacement rehab, senior citizens, and patients with limited mobility.",
  },
  {
    icon: "📅",
    title: "Flexible Scheduling",
    desc: "Book session slots that fit your daily routine. Available across all major locations in Patna.",
  },
];

export default function HomeService() {
  return (
    <section
      className="relative overflow-hidden section-py bg-[#faf7f2] border-t border-b border-[#ede5d8]"
      aria-labelledby="home-service-heading"
    >
      {/* Full Section Background Image with low opacity */}
      <Image
        src="/images/home_physio_bg.png"
        alt="Physiotherapy Home Visit Service Patna Background"
        fill
        sizes="100vw"
        className="absolute inset-0 object-cover opacity-[0.25] pointer-events-none"
        priority
      />

      <div className="container-xl relative z-10">
        
        {/* Top Announcement Badge */}
        <div className="mb-10 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#4a7d67]/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#3d6856] border border-[#4a7d67]/20 shadow-sm animate-pulse">
            🏠 Home Service Available in Patna
          </span>
        </div>

        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* Left Column: High-Contrast Visual Callout Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl bg-[#273c33] p-8 shadow-xl overflow-hidden border border-white/5">
              
              {/* Background Image with less opacity */}
              <Image
                src="/images/home_physio.png"
                alt="Physiotherapy Home Service Patna"
                fill
                sizes="(max-width: 768px) 100vw, 450px"
                className="absolute inset-0 object-cover opacity-15 pointer-events-none"
              />
              {/* Linear gradient overlay to make sure text stands out */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#273c33] via-[#273c33]/90 to-[#273c33]/50 pointer-events-none" />
              
              <div className="relative z-10">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#88b5a0] bg-white/10 px-3 py-1.5 rounded-full inline-block mb-6">
                  🏡 We Also Provide Home Visits
                </span>
                
                <h3 className="text-2xl font-extrabold text-white leading-tight mb-4">
                  Physiotherapy Home Service
                </h3>
                
                <p className="text-sm text-[#b0d4c4]/90 leading-relaxed mb-6">
                  Unable to travel to the clinic? We bring complete clinical physiotherapy treatments directly to your home or residence in Patna.
                </p>

                <div className="space-y-4 border-t border-white/10 pt-6">
                  <div className="flex items-center gap-3">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#4a7d67] text-white text-xs font-bold">✓</span>
                    <span className="text-sm font-semibold text-white">Treatment at Your Home</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#4a7d67] text-white text-xs font-bold">✓</span>
                    <span className="text-sm font-semibold text-white">Verified Senior Therapists</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#4a7d67] text-white text-xs font-bold">✓</span>
                    <span className="text-sm font-semibold text-white">Full Portable Equipment setup</span>
                  </div>
                </div>

                <div className="mt-8 border-t border-white/10 pt-6 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-[#88b5a0] font-semibold tracking-wider uppercase">Book Home Visit</p>
                    <p className="text-lg font-bold text-white mt-1">+91 70041 80590</p>
                  </div>
                  <Link
                    href="tel:+917004180590"
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#273c33] hover:bg-[#b0d4c4] transition-all hover:scale-105 shadow-md"
                    aria-label="Call clinic to book home service"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Title, Intro & Structured Grid (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="section-label">Home Visit Service</span>
              <h2 id="home-service-heading" className="heading-xl mt-1">
                Professional Home Visit Physiotherapy Services
              </h2>
              <p className="mt-4 text-[#555552] leading-relaxed">
                If visiting our clinic is difficult due to mobility issues, severe pain, or recovery stage, we offer full clinical physiotherapy sessions at your doorstep. Our certified physiotherapists bring advanced portable modalities (TENS, IFT, Ultrasound) and exercise gear to ensure premium treatment comfort.
              </p>
            </div>

            {/* Grid of features */}
            <div className="grid gap-4 sm:grid-cols-2">
              {HOME_SERVICE_BENEFITS.map((item) => (
                <div
                  key={item.title}
                  className="group flex gap-4 border border-[#ede5d8] bg-white p-5 rounded-2xl transition-all duration-300 hover:shadow-md hover:border-[#4a7d67]/30"
                >
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-[#faf7f2] text-xl group-hover:bg-[#4a7d67] group-hover:text-white transition-colors" aria-hidden="true">
                    {item.icon}
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-[#1c1c1a]">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-[#8a8a85]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                Request a Home Visit
              </Link>
              <Link href="/services" className="btn-outline">
                View All Services
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
