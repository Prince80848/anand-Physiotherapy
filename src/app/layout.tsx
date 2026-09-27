import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingActions from "@/components/layout/FloatingActions";
import ContactPopup from "@/components/ui/ContactPopup";
import {
  CLINIC_NAME,
  CLINIC_TAGLINE,
  SITE_URL,
  CLINIC_PHONE,
  CLINIC_ADDRESS,
} from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${CLINIC_NAME} & Rehabilitation Center — Best Physiotherapy in Patna`,
    template: `%s | ${CLINIC_NAME}`,
  },
  description:
    "Anand Physiotherapy and Rehabilitation Center, Patna. Expert home service physiotherapy, neurological therapy, paediatric, and pain management in Patna. Book appointment today.",
  keywords: [
    "physiotherapy in Patna",
    "physiotherapist Patna",
    "best physiotherapist in Patna",
    "home service physiotherapy Patna",
    "home visit physiotherapy Patna",
    "physiotherapy home service",
    "Anand physiotherapy and rehabilitation center",
    "rehabilitation center in Patna",
    "neuro physiotherapy Patna",
    "pain management physiotherapy Patna",
    "paediatric physiotherapy Patna",
    "best physiotherapy clinic Patna",
    "Anand Physiotherapy",
  ],
  authors: [{ name: CLINIC_NAME }],
  creator: CLINIC_NAME,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: CLINIC_NAME,
    title: `${CLINIC_NAME} & Rehabilitation Center — Best Physiotherapy in Patna`,
    description:
      "Anand Physiotherapy and Rehabilitation Center, Patna. Expert home service physiotherapy, neurological therapy, paediatric, and pain management in Patna. Book appointment today.",
    images: [
      {
        url: "/images/og/default.jpg",
        width: 1200,
        height: 630,
        alt: `${CLINIC_NAME} & Rehabilitation Center — Best Physiotherapy in Patna`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${CLINIC_NAME} & Rehabilitation Center — Best Physiotherapy in Patna`,
    description: "Anand Physiotherapy and Rehabilitation Center, Patna. Expert home service physiotherapy, neurological therapy, paediatric, and pain management in Patna.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} h-full scroll-smooth`} data-scroll-behavior="smooth">
      <body className="flex min-h-full flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingActions />
        <ContactPopup />
      </body>
    </html>
  );
}
