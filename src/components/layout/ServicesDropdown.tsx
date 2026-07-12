"use client";

import Link from "next/link";
import { useState, useRef, useCallback } from "react";
import { usePathname } from "next/navigation";
import { services } from "@/data/services";
import { servicesMeta } from "@/lib/services-meta";

export default function ServicesDropdown() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isServicesActive = pathname.startsWith("/services");

  const handleMouseEnter = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    timeoutRef.current = setTimeout(() => setOpen(false), 150);
  }, []);

  // Split into 2 columns
  const col1 = services.slice(0, 5);
  const col2 = services.slice(5);

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Trigger */}
      <button
        id="services-menu-trigger"
        aria-haspopup="true"
        aria-expanded={open}
        aria-controls="services-dropdown"
        className={`nav-link flex items-center gap-1.5 transition-colors ${
          isServicesActive ? "active font-semibold text-[#4a7d67]" : ""
        }`}
        onClick={() => setOpen((o) => !o)}
      >
        Services
        <svg
          className={`h-3 w-3 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          strokeWidth={2.5}
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown panel */}
      <div
        id="services-dropdown"
        role="menu"
        aria-labelledby="services-menu-trigger"
        className={`absolute left-1/2 top-full z-50 mt-2.5 w-[380px] -translate-x-1/2 overflow-hidden rounded-xl border border-[#e8e0d5] bg-white transition-all duration-200 ${
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-1.5 opacity-0"
        }`}
        style={{
          boxShadow:
            "0 4px 6px -1px rgba(0,0,0,0.06), 0 16px 40px -8px rgba(0,0,0,0.14)",
        }}
      >
        {/* 2-column grid */}
        <div className="grid grid-cols-2 divide-x divide-[#f0ebe3] py-1.5">
          {/* Column 1 */}
          <ul role="none">
            {col1.map((service) => {
              const meta = servicesMeta[service.slug];
              const isActive = pathname === `/services/${service.slug}`;
              return (
                <li key={service.slug} role="none">
                  <Link
                    href={`/services/${service.slug}`}
                    role="menuitem"
                    onClick={() => setOpen(false)}
                    className={`flex items-center gap-2.5 px-4 py-2.5 text-[0.8125rem] transition-colors duration-150 ${
                      isActive
                        ? "bg-[#f0f4f2] font-semibold text-[#4a7d67]"
                        : "text-[#3f3f3c] hover:bg-[#faf7f2] hover:text-[#4a7d67]"
                    }`}
                  >
                    <span
                      className="h-1.5 w-1.5 flex-shrink-0 rounded-full"
                      style={{ background: meta?.accent ?? "#4a7d67" }}
                      aria-hidden="true"
                    />
                    {service.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Column 2 */}
          <ul role="none">
            {col2.map((service) => {
              const meta = servicesMeta[service.slug];
              const isActive = pathname === `/services/${service.slug}`;
              return (
                <li key={service.slug} role="none">
                  <Link
                    href={`/services/${service.slug}`}
                    role="menuitem"
                    onClick={() => setOpen(false)}
                    className={`flex items-center gap-2.5 px-4 py-2.5 text-[0.8125rem] transition-colors duration-150 ${
                      isActive
                        ? "bg-[#f0f4f2] font-semibold text-[#4a7d67]"
                        : "text-[#3f3f3c] hover:bg-[#faf7f2] hover:text-[#4a7d67]"
                    }`}
                  >
                    <span
                      className="h-1.5 w-1.5 flex-shrink-0 rounded-full"
                      style={{ background: meta?.accent ?? "#4a7d67" }}
                      aria-hidden="true"
                    />
                    {service.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-[#ede5d8] bg-[#faf7f2] px-4 py-2.5">
          <Link
            href="/services"
            onClick={() => setOpen(false)}
            className="flex items-center gap-1 text-xs font-semibold text-[#4a7d67] transition-colors hover:text-[#3d6856]"
          >
            View all services
            <svg
              className="h-3 w-3"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="btn-primary !py-1.5 !px-3.5 !text-xs"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
}
