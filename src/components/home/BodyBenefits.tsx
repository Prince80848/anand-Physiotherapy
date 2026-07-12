import Image from "next/image";

interface BenefitItem {
  id: number;
  title: string;
  description: string;
  target: string;
  icon: string;
}

const LEFT_BENEFITS: BenefitItem[] = [
  {
    id: 1,
    title: "Head & Neck Relief",
    description: "Alleviates neck stiffness, tension headaches, migraines, and cervical spondylosis pain.",
    target: "Cervical Spine",
    icon: "💆",
  },
  {
    id: 2,
    title: "Spine & Core Strength",
    description: "Corrects posture, aligns vertebrae, and relieves chronic upper and lower back pain.",
    target: "Thoracic & Lumbar Spine",
    icon: "🦴",
  },
  {
    id: 3,
    title: "Joint & Hip Mobility",
    description: "Restores range of motion, reduces friction, and relieves stiffness in the hips and pelvis.",
    target: "Pelvic Joints",
    icon: "⚖️",
  },
];

const RIGHT_BENEFITS: BenefitItem[] = [
  {
    id: 4,
    title: "Nerve & Motor Function",
    description: "Stimulates nervous pathing for stroke recovery, balance, coordination, and reflexes.",
    target: "Nervous System",
    icon: "🧠",
  },
  {
    id: 5,
    title: "Muscle Recovery",
    description: "Speeds up muscle fiber repair, reduces chronic spasms, and treats strains and tears.",
    target: "Musculoskeletal System",
    icon: "💪",
  },
  {
    id: 6,
    title: "Knee & Joint Stability",
    description: "Strengthens surrounding muscles, ligaments, and patellar tracking to prevent falls.",
    target: "Lower Limbs",
    icon: "🏃",
  },
];

export default function BodyBenefits() {
  return (
    <section className="relative py-20 md:py-28 bg-[#14221d] overflow-hidden" id="body-benefits" aria-labelledby="body-benefits-heading">
      
      {/* Background soft design pattern (subtle watermark overlay) */}
      <div className="absolute inset-0 z-0 h-full w-full pointer-events-none opacity-[0.02] mix-blend-overlay">
        <Image
          src="/images/wellness_bg_pattern.png"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <div className="container-xl relative z-10">
        
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="section-label !text-[#88b5a0]">How It Works</span>
          <h2 id="body-benefits-heading" className="heading-xl mt-1 !text-white">
            How Physiotherapy <span className="text-[#b4d1c4]">Transforms</span> Your Body
          </h2>
          <p className="mt-4 text-base text-[#b0d4c4]/80 leading-relaxed">
            Targeted clinical rehabilitation designed to restore alignment, eliminate chronic pain, 
            and rebuild motor pathways from head to toe.
          </p>
        </div>

        {/* 3-Column Layout: Left Text | Center Body Image | Right Text */}
        <div className="grid grid-cols-1 gap-8 items-center lg:grid-cols-12 lg:gap-6">
          
          {/* Column 1: Left Benefits (4 cols) — Aligned Right on Desktop */}
          <div className="order-2 lg:order-1 lg:col-span-4 space-y-6">
            {LEFT_BENEFITS.map((item) => (
              <div 
                key={item.id} 
                className="group flex gap-4 text-left lg:text-right lg:flex-row-reverse bg-white/[0.02] border border-white/[0.05] p-5 rounded-2xl transition-all duration-300 hover:bg-white/[0.06] hover:border-[#4a7d67]/30 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(20,34,29,0.3)]"
              >
                {/* Icon wrapper */}
                <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-xl bg-white/[0.03] text-xl transition-all duration-300 group-hover:bg-[#4a7d67] group-hover:scale-105">
                  {item.icon}
                </div>
                {/* Content */}
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#88b5a0]">
                    {item.target}
                  </span>
                  <h3 className="text-base font-bold text-white mt-1">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#b0d4c4]/70 group-hover:text-[#b0d4c4]/90 transition-colors">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Column 2: Center Body Image (4 cols) — Increased Size */}
          <div className="order-1 lg:order-2 lg:col-span-4 flex justify-center relative py-6">
            
            {/* Soft green circle backdrop glow behind the body */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[420px] w-[420px] rounded-full bg-[#d9e8e1]/10 blur-3xl -z-10" />

            <div className="relative w-full max-w-[340px] h-[520px] transition-transform duration-500 hover:scale-[1.02]">
              <Image
                src="/images/body-removebg-preview.png"
                alt="Diagram of human muscles and anatomy for physiotherapy targets"
                fill
                sizes="(max-width: 768px) 300px, 400px"
                className="object-contain object-center filter drop-shadow-[0_12px_24px_rgba(74,125,103,0.25)]"
                priority
              />
            </div>
          </div>

          {/* Column 3: Right Benefits (4 cols) — Aligned Left */}
          <div className="order-3 lg:col-span-4 space-y-6">
            {RIGHT_BENEFITS.map((item) => (
              <div 
                key={item.id} 
                className="group flex gap-4 text-left bg-white/[0.02] border border-white/[0.05] p-5 rounded-2xl transition-all duration-300 hover:bg-white/[0.06] hover:border-[#4a7d67]/30 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(20,34,29,0.3)]"
              >
                {/* Icon wrapper */}
                <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-xl bg-white/[0.03] text-xl transition-all duration-300 group-hover:bg-[#4a7d67] group-hover:scale-105">
                  {item.icon}
                </div>
                {/* Content */}
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#88b5a0]">
                    {item.target}
                  </span>
                  <h3 className="text-base font-bold text-white mt-1">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#b0d4c4]/70 group-hover:text-[#b0d4c4]/90 transition-colors">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
