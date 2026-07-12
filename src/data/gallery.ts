// ============================================================
// Gallery data — single source of truth for all gallery items.
// Images from /public/gallery-image/
// Videos from /public/gallery-video/
// ============================================================

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: "clinic" | "treatment" | "equipment" | "team";
  width: number;
  height: number;
}

export interface GalleryVideo {
  id: string;
  src: string;
  poster?: string;
  title: string;
  description: string;
  category: "treatment" | "exercise" | "aquatic" | "neurological" | "general";
  duration?: string;
}

export const galleryImages: GalleryImage[] = [
  {
    id: "img-1",
    src: "/gallery-image/gallery-1.jpeg",
    alt: "Anand Physiotherapy clinic interior — modern, welcoming treatment space in Patna",
    category: "clinic",
    width: 1200,
    height: 800,
  },
  {
    id: "img-2",
    src: "/gallery-image/gallery-2.jpeg",
    alt: "Physiotherapy treatment session at Anand Physiotherapy, Patna",
    category: "treatment",
    width: 1200,
    height: 800,
  },
  {
    id: "img-3",
    src: "/gallery-image/gallery-3.jpeg",
    alt: "Advanced physiotherapy equipment at Anand Physiotherapy clinic",
    category: "equipment",
    width: 1200,
    height: 800,
  },
  {
    id: "img-4",
    src: "/gallery-image/gallery-4.jpeg",
    alt: "Expert physiotherapist providing hands-on treatment to a patient",
    category: "treatment",
    width: 1200,
    height: 800,
  },
  {
    id: "img-5",
    src: "/gallery-image/gallery-5.jpeg",
    alt: "Rehabilitation and exercise therapy area at Anand Physiotherapy",
    category: "clinic",
    width: 1200,
    height: 800,
  },
  {
    id: "img-6",
    src: "/gallery-image/gallery-6.jpeg",
    alt: "Physiotherapy team at Anand Physiotherapy, Patna — expert clinicians",
    category: "team",
    width: 1200,
    height: 800,
  },
];

export const galleryVideos: GalleryVideo[] = [
  {
    id: "vid-1",
    src: "/gallery-video/video-1.mp4",
    title: "Neurological Rehabilitation Session",
    description: "Watch our expert physiotherapists performing neurological rehabilitation therapy for stroke recovery.",
    category: "neurological",
  },
  {
    id: "vid-2",
    src: "/gallery-video/video-2.mp4",
    title: "Exercise Therapy Demonstration",
    description: "Guided therapeutic exercise programme tailored for joint pain and mobility restoration.",
    category: "exercise",
  },
  {
    id: "vid-3",
    src: "/gallery-video/video-3.mp4",
    title: "Aquatic Therapy Session",
    description: "Hydrotherapy session showcasing water-based rehabilitation for arthritis and post-surgical recovery.",
    category: "aquatic",
  },
  {
    id: "vid-4",
    src: "/gallery-video/video-4.mp4",
    title: "Manual Therapy Techniques",
    description: "Hands-on manual therapy and joint mobilisation techniques for musculoskeletal pain.",
    category: "treatment",
  },
  {
    id: "vid-5",
    src: "/gallery-video/video-5.mp4",
    title: "Balance & Coordination Training",
    description: "Balance therapy exercises designed to reduce fall risk and improve stability.",
    category: "exercise",
  },
  {
    id: "vid-6",
    src: "/gallery-video/video-6.mp4",
    title: "Electrotherapy (TENS & IFT)",
    description: "Demonstration of TENS and interferential therapy for effective pain relief.",
    category: "treatment",
  },
  {
    id: "vid-7",
    src: "/gallery-video/video-7.mp4",
    title: "Paediatric Physiotherapy",
    description: "Play-based physiotherapy session for children with developmental conditions.",
    category: "general",
  },
  {
    id: "vid-8",
    src: "/gallery-video/video-8.mp4",
    title: "Gait & Walking Rehabilitation",
    description: "Gait retraining session helping patients regain normal walking patterns after neurological events.",
    category: "neurological",
  },
  {
    id: "vid-9",
    src: "/gallery-video/video-9.mp4",
    title: "Shoulder Rehabilitation",
    description: "Targeted shoulder exercises for rotator cuff injuries and frozen shoulder recovery.",
    category: "exercise",
  },
  {
    id: "vid-10",
    src: "/gallery-video/video-10.mp4",
    title: "Post-Surgical Recovery Programme",
    description: "Structured post-surgical rehabilitation to restore strength, mobility and confidence.",
    category: "treatment",
  },
  {
    id: "vid-11",
    src: "/gallery-video/video-11.mp4",
    title: "Heat Therapy Application",
    description: "Therapeutic heat application for muscle relaxation and chronic pain relief.",
    category: "treatment",
  },
  {
    id: "vid-12",
    src: "/gallery-video/video-12.mp4",
    title: "Core Strengthening Exercises",
    description: "Core and back strengthening exercises to address lumbar pain and instability.",
    category: "exercise",
  },
  {
    id: "vid-13",
    src: "/gallery-video/video-13.mp4",
    title: "Spinal Mobilisation",
    description: "Spinal mobilisation techniques for disc-related back pain and stiffness.",
    category: "treatment",
  },
  {
    id: "vid-14",
    src: "/gallery-video/video-14.mp4",
    title: "Occupational Therapy Activities",
    description: "Occupational therapy session helping patients regain independence in daily living activities.",
    category: "general",
  },
  {
    id: "vid-15",
    src: "/gallery-video/video-15.mp4",
    title: "Ultrasound Therapy",
    description: "Therapeutic ultrasound for deep tissue healing and inflammation reduction.",
    category: "treatment",
  },
  {
    id: "vid-16",
    src: "/gallery-video/video-16.mp4",
    title: "Full Clinic Tour",
    description: "Take a tour of Anand Physiotherapy — our state-of-the-art facilities and welcoming environment in Patna.",
    category: "general",
  },
];

export const videoCategoryLabels: Record<GalleryVideo["category"], string> = {
  treatment: "Treatment",
  exercise: "Exercise",
  aquatic: "Aquatic",
  neurological: "Neuro",
  general: "General",
};

export const imageCategoryLabels: Record<GalleryImage["category"], string> = {
  clinic: "Clinic",
  treatment: "Treatment",
  equipment: "Equipment",
  team: "Team",
};
