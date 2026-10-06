"use client";

import { useEffect, useRef, useState } from "react";
import type { CaseFile } from "@/data/profile";

const SEVERITY: Record<CaseFile["severity"], string> = {
  Critical: "border-red/50 text-red",
  High: "border-amber/50 text-amber",
  Medium: "border-sky-400/50 text-sky-300",
  Research: "border-accent/50 text-accent",
};

export default function CaseFiles({ cases }: { cases: CaseFile[] }) {
  const [open, setOpen] = useState<CaseFile | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const d = dialog.current;
    if (!d) return;
    if (open && !d.open) d.showModal();
    if (!open && d.open) d.close();
  }, [open]);

  return (
    <>
      <div className="grid gap-6 md:grid-cols-2">
        {cases.map((c) => (
          <button
            key={c.id}
            type="button"
            onClick={() => setOpen(c)}
            className="group card-glow relative flex flex-col overflow-hidden p-6 text-left focus-visible:border-accent focus-visible:outline-none"
          >
            {/* scan line that sweeps down on hover */}
            <span className="scan pointer-events-none absolute inset-x-0 top-0 h-16 -translate-y-full bg-gradient-to-b from-transparent via-accent/10 to-transparent opacity-0 group-hover:opacity-100" />

            <span className="flex flex-wrap items-center justify-between gap-3 font-mono text-xs">
              <span className="text-muted">
                {c.id} · {c.period}
              </span>
              <span className={`rounded border px-2 py-0.5 uppercase tracking-wider ${SEVERITY[c.severity]}`}>
                {c.severity}
              </span>
            </span>

            <span className="mt-4 text-xl font-semibold text-fg transition group-hover:text-accent">
              {c.title}
            </span>
            <span className="font-mono text-xs text-muted">{c.type}</span>
            <span className="mt-3 text-sm leading-relaxed text-fg/80">{c.summary}</span>

            {/* teaser that only appears on hover */}
            <span className="mt-0 grid grid-rows-[0fr] transition-all duration-300 group-hover:mt-4 group-hover:grid-rows-[1fr] group-focus-visible:mt-4 group-focus-visible:grid-rows-[1fr]">
              <span className="overflow-hidden">
                <span className="block border-l-2 border-red/60 pl-3 font-mono text-xs text-fg/70">
                  <span className="text-red">[!]</span> {c.findings[0]}
                </span>
              </span>
            </span>

            <span className="mt-auto flex flex-wrap gap-2 pt-6">
              {c.tools.slice(0, 4).map((t) => (
                <span key={t} className="rounded bg-line/60 px-2 py-1 font-mono text-[11px] text-fg/70">
                  {t}
                </span>
              ))}
              {c.tools.length > 4 && (
                <span className="px-1 py-1 font-mono text-[11px] text-muted">+{c.tools.length - 4}</span>
              )}
            </span>

            <span className="mt-5 flex items-center justify-between border-t border-dashed border-line pt-4 font-mono text-xs">
              <span className="text-muted transition group-hover:text-accent">
                <span className="text-accent">➜</span> open case file
              </span>
              <span className="text-muted transition group-hover:translate-x-1 group-hover:text-accent">→</span>
            </span>
          </button>
        ))}
      </div>

      <dialog
        ref={dialog}
        onClose={() => setOpen(null)}
        onClick={(e) => e.target === e.currentTarget && setOpen(null)}
        aria-labelledby="case-title"
        className="m-auto max-h-[90vh] w-[min(760px,calc(100vw-2rem))] overflow-hidden rounded-xl border border-accent/40 bg-panel p-0 text-fg shadow-[0_0_80px_-10px_rgb(0_212_255/0.35)] backdrop:bg-black/70 backdrop:backdrop-blur-sm"
      >
        {open && <Dossier c={open} onClose={() => setOpen(null)} />}
      </dialog>
    </>
  );
}

function Dossier({ c, onClose }: { c: CaseFile; onClose: () => void }) {
  return (
    <div className="dossier flex max-h-[90vh] flex-col">
      <div className="flex items-center gap-2 border-b border-line px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red/80" />
        <span className="h-3 w-3 rounded-full bg-amber/80" />
        <span className="h-3 w-3 rounded-full bg-accent/80" />
        <span className="ml-3 truncate font-mono text-xs text-muted">
          cat ./case-files/{c.id.toLowerCase()}.report
        </span>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close case file"
          className="ml-auto rounded px-2 py-0.5 font-mono text-xs text-muted transition hover:bg-line hover:text-fg"
        >
          [esc]
        </button>
      </div>

      <div className="overflow-y-auto p-6 sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-xs">
          <span className="text-muted">
            {c.id} · {c.period} · {c.type}
          </span>
          <span className={`rounded border px-2 py-0.5 uppercase tracking-wider ${SEVERITY[c.severity]}`}>
            {c.severity}
          </span>
        </div>
        <h3 id="case-title" className="mt-3 text-2xl font-semibold text-fg sm:text-3xl">
          {c.title}
        </h3>
        <p className="mt-3 leading-relaxed text-fg/80">{c.summary}</p>

        <Block label="scope">
          <p className="text-fg/80">{c.scope}</p>
        </Block>

        <Block label="attack path">
          <ol className="relative space-y-3 border-l border-line pl-5">
            {c.approach.map((step, i) => (
              <li key={step} className="relative text-sm text-fg/80">
                <span className="absolute -left-[27px] top-0.5 flex h-3.5 w-3.5 items-center justify-center rounded-full border border-accent/60 bg-panel">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                </span>
                <span className="mr-2 font-mono text-xs text-muted">{String(i + 1).padStart(2, "0")}</span>
                {step}
              </li>
            ))}
          </ol>
        </Block>

        <div className="grid gap-6 sm:grid-cols-2">
          <Block label="findings">
            <ul className="space-y-2">
              {c.findings.map((f) => (
                <li key={f} className="flex gap-2 text-sm text-fg/80">
                  <span className="font-mono text-red">[!]</span>
                  {f}
                </li>
              ))}
            </ul>
          </Block>
          <Block label="lessons">
            <ul className="space-y-2">
              {c.lessons.map((l) => (
                <li key={l} className="flex gap-2 text-sm text-fg/80">
                  <span className="font-mono text-accent">[+]</span>
                  {l}
                </li>
              ))}
            </ul>
          </Block>
        </div>

        <Block label="tooling">
          <ul className="flex flex-wrap gap-2">
            {c.tools.map((t) => (
              <li key={t} className="tag-pill rounded-full border border-line px-3 py-1 font-mono text-xs text-fg/80">
                {t}
              </li>
            ))}
          </ul>
        </Block>
      </div>
    </div>
  );
}

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <section className="mt-7">
      <p className="mb-3 font-mono text-xs uppercase tracking-wider text-accent">
        <span className="text-muted">##</span> {label}
      </p>
      {children}
    </section>
  );
}
