"use client";

import { useEffect, useRef, useState } from "react";

export default function Landing() {
  const [firstLoad, setFirstLoad] = useState(true);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const update = () => {
      const scrollY = window.scrollY;
      const vh = window.innerHeight;
      const fadeStart = vh * 0.3;
      const fadeEnd = vh * 0.85;

      if (scrollY <= fadeStart) {
        el.style.opacity = "1";
        el.style.pointerEvents = "auto";
      } else if (scrollY < fadeEnd) {
        const t = (scrollY - fadeStart) / (fadeEnd - fadeStart);
        el.style.opacity = String(1 - t);
        el.style.pointerEvents = "none";
      } else {
        el.style.opacity = "0";
        el.style.pointerEvents = "none";
      }

      if (firstLoad && scrollY >= fadeEnd) setFirstLoad(false);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [firstLoad]);

  return (
    <div
      ref={ref}
      className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-bg"
      style={{ transition: "opacity 0.15s ease-out", willChange: "opacity" }}
    >
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgb(0_212_255/0.08),transparent_70%)]" />
      <div className="relative text-center px-4">
        <p className={`font-mono text-sm text-accent tracking-widest uppercase ${firstLoad ? "landing-text" : ""}`}>
          initializing secure connection...
        </p>
        <h1 className={`mt-6 text-5xl font-bold tracking-tight text-fg sm:text-7xl lg:text-8xl ${firstLoad ? "landing-sub" : ""}`}>
          JOVAN<span className="text-accent">.</span>DAVE
        </h1>
        <p className={`mt-4 font-mono text-muted text-sm sm:text-base ${firstLoad ? "landing-sub" : ""}`}>
          cybersecurity · penetration testing · red team
        </p>
        <p className={`mt-8 font-mono text-xs text-muted/50 animate-pulse ${firstLoad ? "landing-hint" : ""}`}>
          ▼ scroll to enter ▼
        </p>
      </div>
    </div>
  );
}
