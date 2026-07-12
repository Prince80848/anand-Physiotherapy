"use client";

import Link from "next/link";
import { CLINIC_PHONE_DISPLAY } from "@/lib/constants";

export default function CTASection() {
  return (
    <section className="section-py bg-hero" id="booking" aria-labelledby="booking-heading">
      <div className="container-xl">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 items-center">

          {/* Left — heading */}
          <div>
            <span className="section-label">Booking</span>
            <h2 id="booking-heading" className="heading-xl mt-1">
              Start Your Healing Journey
            </h2>
            <p className="mt-4 text-[#555552] leading-relaxed max-w-md">
              Take the first step towards a pain-free life. Book your initial
              consultation with our expert physiotherapists — no referral needed,
              same-week appointments available.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary">
                Book Appointment
              </Link>
              <a href={`tel:${CLINIC_PHONE_DISPLAY.replace(/\s/g, "")}`} className="btn-outline">
                📞 {CLINIC_PHONE_DISPLAY}
              </a>
            </div>

            <p className="mt-5 text-sm text-[#8a8a85]">
              ✓ No referral needed &nbsp;·&nbsp; ✓ Same-week slots &nbsp;·&nbsp; ✓ Free first consultation
            </p>
          </div>

          {/* Right — mini booking card */}
          <div className="rounded-3xl border border-[#ede5d8] bg-white p-8 shadow-sm">
            <div className="mb-1 inline-block rounded-full bg-[#d9e8e1] px-3 py-1 text-xs font-semibold text-[#4a7d67]">
              Highlighted
            </div>
            <h3 className="mt-3 text-lg font-bold text-[#1c1c1a]">
              Start Your Healing Journey
            </h3>
            <p className="mt-1 text-sm text-[#8a8a85]">
              What your healing journey starts with is a conversation. Fill the form to begin.
            </p>

            <form className="mt-6 space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder="Name"
                className="w-full rounded-xl border border-[#ede5d8] bg-[#faf7f2] px-4 py-3 text-sm text-[#2e2e2c] placeholder:text-[#b0b0aa] focus:border-[#4a7d67] focus:outline-none focus:ring-1 focus:ring-[#4a7d67] transition-colors"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-xl border border-[#ede5d8] bg-[#faf7f2] px-4 py-3 text-sm text-[#2e2e2c] placeholder:text-[#b0b0aa] focus:border-[#4a7d67] focus:outline-none focus:ring-1 focus:ring-[#4a7d67] transition-colors"
              />
              <textarea
                placeholder="Message"
                rows={3}
                className="w-full resize-none rounded-xl border border-[#ede5d8] bg-[#faf7f2] px-4 py-3 text-sm text-[#2e2e2c] placeholder:text-[#b0b0aa] focus:border-[#4a7d67] focus:outline-none focus:ring-1 focus:ring-[#4a7d67] transition-colors"
              />
              <Link href="/contact" className="btn-primary w-full justify-center !rounded-xl">
                Book It →
              </Link>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
