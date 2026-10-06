"use client";

import { useEffect, useState } from "react";

export default function Landing() {
  const [visible, setVisible] = useState(true);
  const [firstLoad, setFirstLoad] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY < 60);
      if (firstLoad && window.scrollY >= 60) setFirstLoad(false);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [firstLoad]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-bg transition-opacity duration-500 ${
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
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
