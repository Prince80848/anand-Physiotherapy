"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { services } from "@/data/services";
import { servicesMeta } from "@/lib/services-meta";

const TOP_NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const isServicesActive = pathname.startsWith("/services");

  return (
    <div className="md:hidden">
      {/* Hamburger */}
      <button
        id="mobile-menu-toggle"
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        className="flex h-9 w-9 items-center justify-center rounded-lg text-[#3f3f3c] hover:bg-[#f0f4f2] transition-colors"
      >
        {open ? (
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Drawer */}
      <nav
        aria-label="Mobile navigation"
        className={`fixed right-0 top-0 z-50 flex h-full w-80 flex-col bg-white shadow-2xl transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#ede5d8] px-6 py-5">
          <span className="text-base font-bold text-[#1c1c1a]">Menu</span>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close"
            className="flex h-8 w-8 items-center justify-center rounded-lg hover:bg-[#f0f4f2] text-[#8a8a85]"
          >
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto py-2">

          {/* Home */}
          <Link
            href="/"
            className={`block px-6 py-3.5 text-sm font-medium transition-colors ${
              pathname === "/"
                ? "bg-[#f0f4f2] text-[#4a7d67] border-r-2 border-[#4a7d67]"
                : "text-[#3f3f3c] hover:bg-[#faf7f2] hover:text-[#4a7d67]"
            }`}
          >
            Home
          </Link>

          {/* Services accordion */}
          <div>
            <button
              id="mobile-services-toggle"
              aria-expanded={servicesOpen}
              aria-controls="mobile-services-panel"
              onClick={() => setServicesOpen((o) => !o)}
              className={`flex w-full items-center justify-between px-6 py-3.5 text-sm font-medium transition-colors ${
                isServicesActive
                  ? "bg-[#f0f4f2] text-[#4a7d67] border-r-2 border-[#4a7d67]"
                  : "text-[#3f3f3c] hover:bg-[#faf7f2] hover:text-[#4a7d67]"
              }`}
            >
              <span>Services</span>
              <svg
                className={`h-4 w-4 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Sub-links panel */}
            <div
              id="mobile-services-panel"
              className="grid transition-all duration-300 ease-in-out"
              style={{ gridTemplateRows: servicesOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                {/* "All Services" link */}
                <Link
                  href="/services"
                  className={`flex items-center gap-2 border-b border-[#f5f0e8] px-6 py-3 text-xs font-semibold uppercase tracking-wider transition-colors ${
                    pathname === "/services"
                      ? "text-[#4a7d67]"
                      : "text-[#8a8a85] hover:text-[#4a7d67]"
                  }`}
                >
                  <svg className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                  All Services
                </Link>

                {/* Individual service links */}
                {services.map((service) => {
                  const meta = servicesMeta[service.slug];
                  if (!meta) return null;
                  const isActive = pathname === `/services/${service.slug}`;
                  return (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className={`flex items-center gap-3 px-6 py-3 text-sm transition-colors ${
                        isActive
                          ? "bg-[#f0f4f2] text-[#4a7d67] font-semibold"
                          : "text-[#555552] hover:bg-[#faf7f2] hover:text-[#4a7d67]"
                      }`}
                    >
                      <span
                        className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg text-sm"
                        style={{ background: meta.accentLight }}
                        aria-hidden="true"
                      >
                        {meta.icon}
                      </span>
                      <span className="leading-tight">{service.name}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Other nav links */}
          {TOP_NAV_LINKS.filter((l) => l.href !== "/").map((link) => {
            const isActive = pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-6 py-3.5 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-[#f0f4f2] text-[#4a7d67] border-r-2 border-[#4a7d67]"
                    : "text-[#3f3f3c] hover:bg-[#faf7f2] hover:text-[#4a7d67]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Footer CTA */}
        <div className="border-t border-[#ede5d8] p-6">
          <Link href="/contact" className="btn-primary w-full justify-center">
            Book Consultation
          </Link>
        </div>
      </nav>
    </div>
  );
}
