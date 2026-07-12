"use client";

import { CLINIC_PHONE_DISPLAY } from "@/lib/constants";

export default function FloatingActions() {
  const phoneNumberClean = CLINIC_PHONE_DISPLAY.replace(/\s/g, "");
  // Standard WhatsApp API link format (can be changed to custom chat link later)
  const whatsappUrl = `https://wa.me/917004180590`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3.5">
      {/* WhatsApp Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-[#20ba5a]"
        style={{
          boxShadow: "0 4px 10px rgba(37, 211, 102, 0.4), 0 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        {/* WhatsApp SVG Icon */}
        <svg
          className="h-6 w-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.463h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>

      {/* Call Floating Action Button */}
      <a
        href={`tel:${phoneNumberClean}`}
        aria-label="Call Anand Physiotherapy"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#4a7d67] text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-[#3d6856]"
        style={{
          boxShadow: "0 4px 10px rgba(74, 125, 103, 0.4), 0 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        {/* Phone SVG Icon */}
        <svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.2}
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.557-5.127-3.86-6.683-6.683l1.293-.97c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
          />
        </svg>
      </a>
    </div>
  );
}
