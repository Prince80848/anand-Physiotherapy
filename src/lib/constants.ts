// ============================================================
// Clinic NAP (Name, Address, Phone) — Single source of truth
// Update these values and they propagate to schema, footer,
// contact page, and sitemap automatically.
// ============================================================

export const CLINIC_NAME = "Anand Physiotherapy";
export const CLINIC_TAGLINE = "Restoring Movement. Reducing Pain. Improving Lives.";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://anandphysiotherapy.com";

// NAP — must match Google Business Profile exactly for local SEO
export const CLINIC_PHONE = "+917004180590";
export const CLINIC_PHONE_DISPLAY = "+91 70041 80590";
export const CLINIC_EMAIL = "info@anandphysiotherapy.com";
export const CLINIC_ADDRESS = "Bhootnath, Kankarbagh, Patna, Bihar 800026, India";
export const CLINIC_CITY = "Patna";
export const CLINIC_STATE = "Bihar";
export const CLINIC_PINCODE = "800026";
export const CLINIC_COUNTRY = "IN";

// Geo-coordinates — get from Google Maps for LocalBusiness schema
export const CLINIC_GEO = {
  latitude: 25.5941,
  longitude: 85.1376,
};

// Opening hours
export const CLINIC_HOURS = [
  "Monday-Saturday: 8:00 AM – 8:00 PM",
  "Sunday: 9:00 AM – 1:00 PM",
];

// Social profiles
export const SOCIAL_LINKS = {
  facebook: "https://facebook.com/anandphysiotherapy",
  instagram: "https://instagram.com/anandphysiotherapy",
  youtube: "",
  whatsapp: "https://wa.me/91XXXXXXXXXX",
};

// Google Maps embed URL
export const GOOGLE_MAPS_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.0583715102555!2d85.16335197597379!3d25.594614014902127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed58f000000001%3A0x867de76495dbbd39!2sBhootnath%20Rd%2C%20Patna%2C%20Bihar!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin";
