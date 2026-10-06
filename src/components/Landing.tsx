"use client";

import { useEffect, useState } from "react";

export default function Landing() {
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const dismiss = () => setGone(true);
    const t = setTimeout(dismiss, 3200);
    window.addEventListener("scroll", dismiss, { once: true });
    return () => {
      clearTimeout(t);
      window.removeEventListener("scroll", dismiss);
    };
  }, []);

  if (gone) return null;

  return (
    <div className="landing fixed inset-0 z-50 flex flex-col items-center justify-center bg-bg">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgb(0_212_255/0.08),transparent_70%)]" />
      <div className="relative text-center px-4">
        <p className="landing-text font-mono text-sm text-accent tracking-widest uppercase">
          initializing secure connection...
        </p>
        <h1 className="landing-sub mt-6 text-5xl font-bold tracking-tight text-fg sm:text-7xl lg:text-8xl">
          JOVAN<span className="text-accent">.</span>DAVE
        </h1>
        <p className="landing-sub mt-4 font-mono text-muted text-sm sm:text-base">
          cybersecurity · penetration testing · red team
        </p>
        <p className="landing-hint mt-8 font-mono text-xs text-muted/50 animate-pulse">
          ▼ scroll to enter ▼
        </p>
      </div>
    </div>
  );
}
