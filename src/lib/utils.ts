/**
 * Utility helpers for Anand Physiotherapy
 */

/**
 * Convert a slug to a human-readable title
 * e.g. "neurological-therapy" → "Neurological Therapy"
 */
export function slugToTitle(slug: string): string {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

/**
 * Convert a title to a URL-safe slug
 * e.g. "Neurological Therapy" → "neurological-therapy"
 */
export function titleToSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

/**
 * Clamp text to a maximum number of words
 */
export function truncate(text: string, maxWords: number): string {
  const words = text.split(" ");
  if (words.length <= maxWords) return text;
  return words.slice(0, maxWords).join(" ") + "...";
}

/**
 * Format phone number for tel: links
 */
export function formatPhoneLink(phone: string): string {
  return "tel:" + phone.replace(/[^+0-9]/g, "");
}

/**
 * Get the base URL — server-safe
 */
export function getBaseUrl(): string {
  return process.env.NEXT_PUBLIC_SITE_URL || "https://anandphysiotherapy.com";
}
