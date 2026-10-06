"use client";

import { useEffect, useRef, useState } from "react";

export default function Landing() {
  const [firstLoad, setFirstLoad] = useState(true);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const update = () => {
      const scrollY = window.scrollY;
      const fadeEnd = window.innerHeight * 0.35;

      if (scrollY <= 0) {
        el.style.opacity = "1";
        el.style.transform = "scale(1)";
        el.style.pointerEvents = "auto";
        el.style.filter = "blur(0px)";
      } else if (scrollY < fadeEnd) {
        const t = scrollY / fadeEnd;
        el.style.opacity = String(1 - t);
        el.style.transform = `scale(${1 + t * 0.05})`;
        el.style.pointerEvents = "none";
        el.style.filter = `blur(${t * 6}px)`;
      } else {
        el.style.opacity = "0";
        el.style.transform = "scale(1.05)";
        el.style.pointerEvents = "none";
        el.style.filter = "blur(6px)";
      }

      if (firstLoad && scrollY >= fadeEnd) setFirstLoad(false);
    };

    if (reduced) {
      el.style.transition = "opacity 0.3s";
    }

    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [firstLoad]);

  return (
    <div
      ref={ref}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-bg"
      style={{ willChange: "opacity, transform, filter" }}
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
