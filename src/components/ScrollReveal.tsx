"use client";

import { useEffect, useRef } from "react";

export default function ScrollReveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.style.opacity = "1";
      el.style.transform = "none";
      return;
    }

    const update = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;

      // How far the element's top is into the viewport (0 = at bottom edge, 1 = at top)
      const progress = 1 - rect.top / vh;

      if (progress < 0.15) {
        // Below viewport or barely visible — hidden
        el.style.opacity = "0";
        el.style.transform = "translateY(40px)";
      } else if (progress > 0.15 && progress < 0.5) {
        // Fading in
        const t = (progress - 0.15) / 0.35;
        el.style.opacity = String(Math.min(t, 1));
        el.style.transform = `translateY(${40 * (1 - Math.min(t, 1))}px)`;
      } else {
        // Fully visible
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{ opacity: 0, transform: "translateY(40px)", transition: "opacity 0.15s ease-out, transform 0.15s ease-out", willChange: "opacity, transform" }}
    >
      {children}
    </div>
  );
}
