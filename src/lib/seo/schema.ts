import {
  CLINIC_NAME,
  CLINIC_ADDRESS,
  CLINIC_PHONE,
  CLINIC_EMAIL,
  CLINIC_GEO,
  CLINIC_HOURS,
  SITE_URL,
} from "@/lib/constants";
import type { Service, Testimonial, FAQ } from "@/types";

/**
 * MedicalClinic / LocalBusiness schema — use on homepage and contact page
 */
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["MedicalClinic", "LocalBusiness"],
    name: CLINIC_NAME,
    url: SITE_URL,
    telephone: CLINIC_PHONE,
    email: CLINIC_EMAIL,
    address: {
      "@type": "PostalAddress",
      streetAddress: CLINIC_ADDRESS,
      addressLocality: "Patna",
      addressRegion: "Bihar",
      postalCode: "800001",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: CLINIC_GEO.latitude,
      longitude: CLINIC_GEO.longitude,
    },
    openingHours: CLINIC_HOURS,
    image: `${SITE_URL}/images/og/default.jpg`,
    priceRange: "₹₹",
  };
}

/**
 * Service / MedicalTherapy schema — use on each service detail page
 */
export function serviceSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalTherapy",
    name: service.name,
    description: service.shortDescription,
    url: `${SITE_URL}/services/${service.slug}`,
    provider: {
      "@type": "MedicalClinic",
      name: CLINIC_NAME,
      url: SITE_URL,
    },
  };
}

/**
 * FAQPage schema — use on FAQ page and service pages with FAQ sections
 */
export function faqPageSchema(faqs: FAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/**
 * AggregateRating + Review schema — use on testimonials page
 */
export function reviewsSchema(testimonials: Testimonial[]) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: CLINIC_NAME,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: testimonials.length,
      bestRating: "5",
    },
    review: testimonials.map((t) => ({
      "@type": "Review",
      author: { "@type": "Person", name: t.name },
      reviewBody: t.quote,
      reviewRating: { "@type": "Rating", ratingValue: t.rating },
    })),
  };
}

/**
 * BreadcrumbList schema — use on all inner pages
 */
export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      ...items.map((item, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: item.name,
        item: item.url,
      })),
    ],
  };
}
