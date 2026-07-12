"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";
import ServicesDropdown from "./ServicesDropdown";
import { CLINIC_NAME, CLINIC_PHONE_DISPLAY, CLINIC_EMAIL } from "@/lib/constants";

const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ── Top info bar ─────────────────────────────── */}
      <div className="w-full border-b border-[#e8e0d5] bg-[#f5f2ed]">
        <div className="container-xl">
          <div className="flex items-center justify-between py-2 text-[11px] sm:text-xs">

            {/* Left — tagline */}
            <p className="text-[#8a8a85] font-medium">
              Mon – Sat &nbsp;·&nbsp; 8 AM – 8 PM
            </p>

            {/* Right — phone + email */}
            <div className="flex items-center gap-4">
              <a
                href={`tel:${CLINIC_PHONE_DISPLAY.replace(/\s/g, "")}`}
                className="flex items-center gap-1.5 font-bold text-[#4a7d67] transition-colors hover:text-[#3d6856]"
                aria-label="Call us"
              >
                {/* Phone icon */}
                <svg
                  className="h-3.5 w-3.5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z" />
                </svg>
                {CLINIC_PHONE_DISPLAY}
              </a>

              <span className="hidden sm:inline h-3 w-px bg-[#d4d4ce]" aria-hidden="true" />

              <a
                href={`mailto:${CLINIC_EMAIL}`}
                className="hidden sm:flex items-center gap-1.5 font-medium text-[#555552] transition-colors hover:text-[#4a7d67]"
                aria-label="Email us"
              >
                {/* Mail icon */}
                <svg
                  className="h-3.5 w-3.5 text-[#4a7d67]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.8}
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {CLINIC_EMAIL}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main header ───────────────────────────────── */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-sm border-b border-[#e8e0d5]"
            : "bg-white border-b border-[#ede5d8]"
        }`}
      >
        <div className="container-xl">
          <div className="flex h-[68px] items-center justify-between gap-6">

            {/* Logo */}
            <Link
              href="/"
              aria-label={`${CLINIC_NAME} — Home`}
              className="flex items-center gap-2.5 flex-shrink-0"
            >
              <Image
                src="/images/aniket-logo.png"
                alt={`${CLINIC_NAME} Logo`}
                width={48}
                height={48}
                priority
                className="h-12 w-12 object-contain"
              />
              <div className="leading-tight">
                <span className="block text-[15px] font-bold text-[#1c1c1a]">Anand</span>
                <span className="block text-[9px] font-semibold uppercase tracking-[0.15em] text-[#4a7d67]">
                  Physiotherapy
                </span>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden items-center gap-7 md:flex" aria-label="Main navigation">
              {/* Home */}
              <Link
                href="/"
                className={`nav-link transition-colors ${pathname === "/" ? "active font-semibold" : ""}`}
                aria-current={pathname === "/" ? "page" : undefined}
              >
                Home
              </Link>

              {/* Services — mega dropdown */}
              <ServicesDropdown />

              {/* Remaining links */}
              {NAV_LINKS.map((link) => {
                const isActive = pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`nav-link transition-colors ${isActive ? "active font-semibold" : ""}`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* CTA + Mobile */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <Link
                href="/contact"
                className="btn-primary !hidden md:!inline-flex !py-2.5 !px-5 !text-sm"
              >
                Book Consultation
              </Link>
              <MobileMenu />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
