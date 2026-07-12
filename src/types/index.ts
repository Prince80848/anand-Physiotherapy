// ============================================================
// Global TypeScript types for Anand Physiotherapy
// ============================================================

export interface Service {
  slug: string;
  name: string;
  shortDescription: string;
  metaTitle: string;
  metaDescription: string;
  heroImage: string;
  conditionsTreated: string[];
  benefits: string[];
  process: {
    step: string;
    description: string;
  }[];
  faqs: FAQ[];
}

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  quote: string;
  service: string;
  rating: number;
  image?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  qualifications: string[];
  bio: string;
  image: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  coverImage: string;
  tags: string[];
}

export interface BreadcrumbItem {
  label: string;
  href: string;
}
