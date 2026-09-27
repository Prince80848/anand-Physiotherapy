import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/forms/ContactForm";
import {
  CLINIC_NAME,
  SITE_URL,
  CLINIC_ADDRESS,
  CLINIC_PHONE_DISPLAY,
  CLINIC_EMAIL,
  CLINIC_HOURS,
  GOOGLE_MAPS_EMBED_URL,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: `Contact Us | Book Appointment | ${CLINIC_NAME}`,
  description:
    `Get in touch with ${CLINIC_NAME} in Patna. Call us at ${CLINIC_PHONE_DISPLAY}, email us at ${CLINIC_EMAIL}, or visit our clinic at Bhootnath, Kankarbagh. Book your physiotherapy consultation today.`,
  alternates: { canonical: `${SITE_URL}/contact` },
  openGraph: {
    title: `Contact Us | Book Appointment | ${CLINIC_NAME}`,
    description: `Contact ${CLINIC_NAME} in Patna. Reach us at ${CLINIC_PHONE_DISPLAY} or visit us in Bhootnath, Kankarbagh.`,
    url: `${SITE_URL}/contact`,
    type: "website",
  },
};

const CONTACT_INFO = [
  {
    icon: (
      <svg className="h-6 w-6 text-[#4a7d67]" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25s-7.5-4.108-7.5-11.25A7.5 7.5 0 1119.5 10.5z" />
      </svg>
    ),
    title: "Clinic Location",
    value: CLINIC_ADDRESS,
    actionLabel: "Get Directions",
    actionHref: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CLINIC_ADDRESS)}`,
  },
  {
    icon: (
      <svg className="h-6 w-6 text-[#4a7d67]" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.557-5.127-3.86-6.683-6.683l1.293-.97c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    title: "Phone Support",
    value: CLINIC_PHONE_DISPLAY,
    actionLabel: "Call Clinic",
    actionHref: `tel:${CLINIC_PHONE_DISPLAY.replace(/\s/g, "")}`,
  },
  {
    icon: (
      <svg className="h-6 w-6 text-[#4a7d67]" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    title: "Email Support",
    value: CLINIC_EMAIL,
    actionLabel: "Send Email",
    actionHref: `mailto:${CLINIC_EMAIL}`,
  },
];

export default function ContactPage() {
  return (
    <>
      {/* ── Breadcrumb ── */}
      <nav aria-label="Breadcrumb" className="border-b border-[#ede5d8] bg-[#faf7f2]">
        <div className="container-xl">
          <ol className="flex items-center gap-1.5 py-3.5 text-sm">
            <li>
              <Link href="/" className="text-[#8a8a85] transition-colors hover:text-[#4a7d67]">
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="text-[#c9b89f]">›</li>
            <li className="font-medium text-[#2e2e2c]" aria-current="page">
              Contact
            </li>
          </ol>
        </div>
      </nav>

      {/* ── Hero Section ── */}
      <section className="bg-gradient-to-b from-[#faf7f2] to-white py-14" aria-labelledby="contact-heading">
        <div className="container-xl text-center">
          <span className="section-label">Get in Touch</span>
          <h1 id="contact-heading" className="heading-xl mt-1">
            Let&apos;s Start Your Recovery
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-[#555552] text-[0.95rem] leading-relaxed">
            Have questions about our treatments or want to book an appointment? Reach out to us —
            we&apos;re here to help you get back to your pain-free life.
          </p>
        </div>
      </section>

      {/* ── Contact Content ── */}
      <section className="bg-white pb-20">
        <div className="container-xl">
          <div className="grid gap-12 lg:grid-cols-12">
            
            {/* Left: Contact Info & Map (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              
              {/* NAP Cards */}
              <div className="space-y-4">
                {CONTACT_INFO.map((item) => (
                  <div
                    key={item.title}
                    className="flex items-start gap-4 rounded-2xl border border-[#ede5d8] bg-white p-5 transition-shadow hover:shadow-sm"
                  >
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-[#f0f4f2]">
                      {item.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h2 className="text-sm font-bold text-[#1c1c1a]">{item.title}</h2>
                      <p className="mt-1 text-sm leading-relaxed text-[#555552] break-words">
                        {item.value}
                      </p>
                      <a
                        href={item.actionHref}
                        target={item.actionHref.startsWith("http") ? "_blank" : undefined}
                        rel={item.actionHref.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="mt-2.5 inline-flex items-center gap-1 text-xs font-bold text-[#4a7d67] hover:underline"
                      >
                        {item.actionLabel}
                        <svg className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                        </svg>
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Opening Hours Card */}
              <div className="rounded-2xl border border-[#ede5d8] bg-[#faf7f2] p-6">
                <h3 className="text-sm font-bold text-[#1c1c1a] uppercase tracking-wider mb-3">
                  Clinic Hours
                </h3>
                <ul className="space-y-2 text-sm text-[#555552]">
                  {CLINIC_HOURS.map((hour) => (
                    <li key={hour} className="flex justify-between border-b border-[#ede5d8]/60 pb-1.5 last:border-0 last:pb-0">
                      <span>{hour.split(":")[0]}</span>
                      <span className="font-semibold text-[#2e2e2c]">{hour.substring(hour.indexOf(":") + 1).trim()}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: Contact Form & Map embed (7 cols) */}
            <div className="lg:col-span-7 space-y-8">
              {/* Form Card */}
              <div className="rounded-2xl border border-[#ede5d8] bg-white p-6 sm:p-8 shadow-sm">
                <h2 className="text-[1.125rem] font-bold text-[#1c1c1a] mb-6">
                  Send Us a Message
                </h2>
                <ContactForm />
              </div>

              {/* Map embed */}
              <div className="overflow-hidden rounded-2xl border border-[#ede5d8] shadow-sm">
                <iframe
                  title="Anand Physiotherapy Location Map"
                  src={GOOGLE_MAPS_EMBED_URL}
                  width="100%"
                  height="320"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="bg-[#faf7f2]"
                />
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
