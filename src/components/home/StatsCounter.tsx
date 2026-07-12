"use client";

import { useEffect, useRef, useState } from "react";

interface Stat { value: number; suffix: string; label: string; }

const STATS: Stat[] = [
  { value: 5000, suffix: "+", label: "Patients Treated" },
  { value: 4, suffix: "+", label: "Years of Experience" },
  { value: 10, suffix: "", label: "Specialist Services" },
  { value: 95, suffix: "%", label: "Patient Satisfaction" },
];

function useCountUp(target: number, started: boolean, duration = 1800) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    let current = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      current += step;
      if (current >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(current));
    }, 16);
    return () => clearInterval(timer);
  }, [started, target, duration]);
  return count;
}

function StatItem({ stat, started }: { stat: Stat; started: boolean }) {
  const count = useCountUp(stat.value, started);
  return (
    <div className="text-center">
      <p className="text-4xl font-extrabold text-[#1c1c1a]">
        {count.toLocaleString()}{stat.suffix}
      </p>
      <p className="mt-1.5 text-sm text-[#8a8a85]">{stat.label}</p>
    </div>
  );
}

export default function StatsCounter() {
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-white border-y border-[#ede5d8] py-12" aria-label="Clinic statistics">
      <div className="container-xl">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 divide-x divide-[#ede5d8]">
          {STATS.map((stat) => (
            <StatItem key={stat.label} stat={stat} started={started} />
          ))}
        </div>
      </div>
    </section>
  );
}
