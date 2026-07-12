"use client";

import { useState } from "react";
import { testimonials } from "@/data/testimonials";

const AVATARS = ["👩", "👩‍🦱", "👨", "👩‍🦳", "👨‍🦳", "👩‍🦰"];

export default function TestimonialsSlider() {
  const display = testimonials.slice(0, 3);

  return (
    <section className="section-py bg-section-alt" id="testimonials" aria-labelledby="testimonials-heading">
      <div className="container-xl">

        {/* Header */}
        <div className="mx-auto mb-12 max-w-xl text-center">
          <span className="section-label">Testimonials</span>
          <h2 id="testimonials-heading" className="heading-xl">
            What Our Patients Say
          </h2>
        </div>

        {/* 3 cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {display.map((t, i) => (
            <div key={t.id} className="testimonial-card flex flex-col">
              {/* Avatar */}
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f0f4f2] text-2xl flex-shrink-0">
                  {AVATARS[i % AVATARS.length]}
                </div>
                <div>
                  <p className="font-bold text-[#1c1c1a] text-sm">{t.name}</p>
                  <p className="text-xs text-[#8a8a85]">{t.location}</p>
                </div>
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-3">
                {[...Array(t.rating)].map((_, j) => (
                  <svg key={j} className="h-4 w-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="flex-1 text-sm leading-relaxed text-[#555552]">
                "{t.quote}"
              </p>

              <p className="mt-4 text-xs font-semibold text-[#4a7d67]">
                {t.service}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
