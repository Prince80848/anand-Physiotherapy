"use client";

import { useState } from "react";
import Image from "next/image";
import type { GalleryImage } from "@/data/gallery";
import { imageCategoryLabels } from "@/data/gallery";
import GalleryLightbox from "./GalleryLightbox";

interface Props {
  images: GalleryImage[];
}

type ImageFilter = GalleryImage["category"] | "all";

const FILTERS: { value: ImageFilter; label: string }[] = [
  { value: "all", label: "All Photos" },
  { value: "clinic", label: "Clinic" },
  { value: "treatment", label: "Treatment" },
  { value: "equipment", label: "Equipment" },
  { value: "team", label: "Team" },
];

export default function GalleryPhotoGrid({ images }: Props) {
  const [filter, setFilter] = useState<ImageFilter>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = filter === "all" ? images : images.filter((img) => img.category === filter);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const goPrev = () =>
    setLightboxIndex((i) => (i !== null ? (i - 1 + filtered.length) % filtered.length : 0));
  const goNext = () =>
    setLightboxIndex((i) => (i !== null ? (i + 1) % filtered.length : 0));

  return (
    <section aria-labelledby="photos-heading">
      {/* Section header */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="section-label">Our Clinic</p>
          <h2 id="photos-heading" className="heading-lg">
            Photo Gallery
          </h2>
        </div>

        {/* Filter chips */}
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter photos by category">
          {FILTERS.map((f) => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              aria-pressed={filter === f.value}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-all duration-200 ${
                filter === f.value
                  ? "border-[#4a7d67] bg-[#4a7d67] text-white shadow-sm"
                  : "border-[#ede5d8] bg-white text-[#555552] hover:border-[#4a7d67] hover:text-[#4a7d67]"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Masonry-style grid */}
      {filtered.length === 0 ? (
        <p className="py-16 text-center text-[#8a8a85]">No photos in this category.</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((image, index) => (
            <button
              key={image.id}
              onClick={() => openLightbox(index)}
              aria-label={`Open ${image.alt}`}
              className="group relative overflow-hidden rounded-2xl border border-[#ede5d8] bg-[#faf7f2] focus-visible:outline-2 focus-visible:outline-[#4a7d67]"
              style={{ aspectRatio: index % 3 === 0 ? "4/3" : "3/4" }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#1c1c1a]/0 transition-all duration-300 group-hover:bg-[#1c1c1a]/50">
                <span className="translate-y-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <svg
                    className="h-8 w-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </span>
              </div>
              {/* Category badge */}
              <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-2.5 py-0.5 text-[11px] font-semibold text-[#2e2e2c] backdrop-blur-sm">
                {imageCategoryLabels[image.category]}
              </span>
            </button>
          ))}
        </div>
      )}

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <GalleryLightbox
          image={filtered[lightboxIndex]}
          currentIndex={lightboxIndex}
          total={filtered.length}
          onClose={closeLightbox}
          onPrev={goPrev}
          onNext={goNext}
        />
      )}
    </section>
  );
}
