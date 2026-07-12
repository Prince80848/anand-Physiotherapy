import Link from "next/link";
import { services } from "@/data/services";
import {
  CLINIC_NAME,
  CLINIC_TAGLINE,
  CLINIC_PHONE_DISPLAY,
  CLINIC_EMAIL,
  CLINIC_ADDRESS,
  CLINIC_HOURS,
} from "@/lib/constants";

const QUICK_LINKS = [
  { href: "/about", label: "About Us" },
  { href: "/services", label: "All Services" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/blog", label: "Blog & Tips" },
  { href: "/faq", label: "FAQs" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#273c33] text-[#b0d4c4]">
      <div className="container-xl py-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-2.5 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#4a7d67] text-white text-base">🌿</div>
              <div className="leading-tight">
                <span className="block text-[15px] font-bold text-white">Anand</span>
                <span className="block text-[9px] font-semibold uppercase tracking-[0.15em] text-[#88b5a0]">Physiotherapy</span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-[#88b5a0]">{CLINIC_TAGLINE}</p>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">Services</h3>
            <ul className="space-y-2">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="text-sm text-[#88b5a0] hover:text-white transition-colors">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">Quick Links</h3>
            <ul className="space-y-2">
              {QUICK_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-[#88b5a0] hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">Contact Info</h3>
            <ul className="space-y-3 text-sm text-[#88b5a0]">
              <li><address className="not-italic">{CLINIC_ADDRESS}</address></li>
              <li><a href={`tel:${CLINIC_PHONE_DISPLAY.replace(/\s/g,"")}`} className="hover:text-white transition-colors">{CLINIC_PHONE_DISPLAY}</a></li>
              <li><a href={`mailto:${CLINIC_EMAIL}`} className="hover:text-white transition-colors">{CLINIC_EMAIL}</a></li>
            </ul>
            <div className="mt-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-2">Clinic Hours</h4>
              {CLINIC_HOURS.map((h) => (
                <p key={h} className="text-sm text-[#88b5a0]">{h}</p>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-xl flex flex-col items-center justify-between gap-3 py-5 sm:flex-row">
          <p className="text-xs text-[#4a7d67]">© {year} {CLINIC_NAME}. All rights reserved.</p>
          <p className="text-xs text-[#345748]">Designed for health, recovery & a pain-free life.</p>
        </div>
      </div>
    </footer>
  );
}
