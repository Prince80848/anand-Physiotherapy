// ============================================================
// Per-service visual config — Single source of truth for
// icons, accent colours, taglines, and hero theme per service.
// Used by: ServiceCard, ServicesDropdown, ServiceHero, etc.
// ============================================================

export interface ServiceMeta {
  /** Emoji icon shown in nav dropdown + cards */
  icon: string;
  /** Short nav description (1 line) */
  tagline: string;
  /** CSS hex accent colour (unique per service) */
  accent: string;
  /** Lighter shade of accent for backgrounds */
  accentLight: string;
  /** Gradient for hero section */
  heroGradient: string;
  /** Tailwind-like pattern class applied on hero */
  heroPattern: "neural" | "wave" | "bubbles" | "geometric" | "rings" | "grid" | "glow" | "lines" | "calm" | "electric";
  /** Category badge text */
  category: string;
}

export const servicesMeta: Record<string, ServiceMeta> = {
  "neurological-therapy": {
    icon: "🧠",
    tagline: "Stroke, Parkinson's & nerve rehabilitation",
    accent: "#7C5CFC",
    accentLight: "#EDE8FF",
    heroGradient: "linear-gradient(135deg, #4B3491 0%, #7C5CFC 50%, #9B7DFD 100%)",
    heroPattern: "neural",
    category: "Neuro Rehab",
  },
  "aquatic-therapy": {
    icon: "🌊",
    tagline: "Water-based healing for joints & mobility",
    accent: "#0E8FCB",
    accentLight: "#E0F4FC",
    heroGradient: "linear-gradient(135deg, #0A5A82 0%, #0E8FCB 50%, #3BB4E5 100%)",
    heroPattern: "wave",
    category: "Hydrotherapy",
  },
  "paediatric-therapy": {
    icon: "🧸",
    tagline: "Play-based care for children's development",
    accent: "#F0612E",
    accentLight: "#FEF0EB",
    heroGradient: "linear-gradient(135deg, #C03B10 0%, #F0612E 50%, #F99070 100%)",
    heroPattern: "bubbles",
    category: "Child Care",
  },
  "occupational-therapy": {
    icon: "🤲",
    tagline: "Regain independence in everyday activities",
    accent: "#D47A2A",
    accentLight: "#FDF4E7",
    heroGradient: "linear-gradient(135deg, #9B5210 0%, #D47A2A 50%, #E8A660 100%)",
    heroPattern: "geometric",
    category: "Daily Living",
  },
  "balance-exercise-therapy": {
    icon: "⚖️",
    tagline: "Stability training & fall prevention",
    accent: "#2A9B6E",
    accentLight: "#E3F7F0",
    heroGradient: "linear-gradient(135deg, #1A6646 0%, #2A9B6E 50%, #55C397 100%)",
    heroPattern: "rings",
    category: "Fall Prevention",
  },
  "physical-therapy": {
    icon: "💪",
    tagline: "Musculoskeletal & sports injury recovery",
    accent: "#3A6EA5",
    accentLight: "#E5EEF8",
    heroGradient: "linear-gradient(135deg, #1E3F6A 0%, #3A6EA5 50%, #6499CC 100%)",
    heroPattern: "grid",
    category: "Musculoskeletal",
  },
  "heat-therapy": {
    icon: "🔥",
    tagline: "Therapeutic heat for muscle pain relief",
    accent: "#C44E2A",
    accentLight: "#FDEEE9",
    heroGradient: "linear-gradient(135deg, #8C2A0A 0%, #C44E2A 50%, #E8845A 100%)",
    heroPattern: "glow",
    category: "Thermal Therapy",
  },
  "exercise-therapy": {
    icon: "🏃",
    tagline: "Prescribed exercise for long-term health",
    accent: "#5A9B35",
    accentLight: "#EDF7E6",
    heroGradient: "linear-gradient(135deg, #366320 0%, #5A9B35 50%, #85C75A 100%)",
    heroPattern: "lines",
    category: "Active Rehab",
  },
  "pain-management": {
    icon: "✨",
    tagline: "Evidence-based chronic pain reduction",
    accent: "#5868D4",
    accentLight: "#ECEFFE",
    heroGradient: "linear-gradient(135deg, #2D3A9E 0%, #5868D4 50%, #8A95E5 100%)",
    heroPattern: "calm",
    category: "Pain Relief",
  },
  electrotherapy: {
    icon: "⚡",
    tagline: "TENS, IFT & ultrasound for rapid healing",
    accent: "#0BAAD4",
    accentLight: "#E0F7FC",
    heroGradient: "linear-gradient(135deg, #05607A 0%, #0BAAD4 50%, #3DCBEE 100%)",
    heroPattern: "electric",
    category: "Electro Rehab",
  },
};

/** Ordered array matching the services data order */
export const servicesMetaList = [
  "neurological-therapy",
  "aquatic-therapy",
  "paediatric-therapy",
  "occupational-therapy",
  "balance-exercise-therapy",
  "physical-therapy",
  "heat-therapy",
  "exercise-therapy",
  "pain-management",
  "electrotherapy",
] as const;
