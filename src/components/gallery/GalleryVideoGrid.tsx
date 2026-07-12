"use client";

import { useState, useRef } from "react";
import type { GalleryVideo } from "@/data/gallery";

interface Props {
  videos: GalleryVideo[];
}

type VideoFilter = GalleryVideo["category"] | "all";

const FILTERS: { value: VideoFilter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "treatment", label: "Treatment" },
  { value: "exercise", label: "Exercise" },
  { value: "neurological", label: "Neuro" },
  { value: "aquatic", label: "Aquatic" },
  { value: "general", label: "General" },
];

function VideoCard({ video }: { video: GalleryVideo }) {
  const [playing, setPlaying] = useState(false);
  const [errored, setErrored] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play().catch(() => setErrored(true));
      setPlaying(true);
    }
  };

  if (errored) {
    return (
      <div className="aspect-video rounded-xl bg-[#1c1c1a] flex items-center justify-center text-white/30">
        <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
    );
  }

  return (
    <div className="group relative aspect-video overflow-hidden rounded-xl bg-[#0d0d0d]">
      <video
        ref={videoRef}
        src={video.src}
        className="h-full w-full object-cover"
        loop
        muted
        playsInline
        preload="metadata"
        onEnded={() => setPlaying(false)}
        aria-label={video.title}
      />

      {/* Play / Pause overlay — fades out when playing, reappears on hover */}
      <button
        onClick={togglePlay}
        aria-label={playing ? "Pause video" : "Play video"}
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
          playing ? "opacity-0 group-hover:opacity-100" : "opacity-100"
        }`}
      >
        {/* Subtle dark scrim only when paused */}
        {!playing && (
          <span className="absolute inset-0 bg-black/25" aria-hidden="true" />
        )}
        <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-white/80 shadow-lg backdrop-blur-sm transition-transform duration-200 group-hover:scale-110">
          {playing ? (
            <svg className="h-4 w-4 text-[#1c1c1a]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
            </svg>
          ) : (
            <svg className="ml-0.5 h-4 w-4 text-[#1c1c1a]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </span>
      </button>
    </div>
  );
}

export default function GalleryVideoGrid({ videos }: Props) {
  const [filter, setFilter] = useState<VideoFilter>("all");
  const filtered = filter === "all" ? videos : videos.filter((v) => v.category === filter);

  return (
    <section aria-labelledby="videos-heading">
      {/* Header + filters */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="section-label">In Action</p>
          <h2 id="videos-heading" className="heading-lg">
            Video Gallery
          </h2>
        </div>

        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter videos by category">
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

      {/* Grid — video tiles only, no cards */}
      {filtered.length === 0 ? (
        <p className="py-16 text-center text-[#8a8a85]">No videos in this category.</p>
      ) : (
        <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
          {filtered.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      )}
    </section>
  );
}
