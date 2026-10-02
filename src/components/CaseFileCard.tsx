import type { CaseFile } from "@/data/profile";

const SEVERITY: Record<CaseFile["severity"], string> = {
  Critical: "border-red/50 text-red",
  High: "border-amber/50 text-amber",
  Medium: "border-sky-400/50 text-sky-300",
  Research: "border-accent/50 text-accent",
};

export default function CaseFileCard({ c }: { c: CaseFile }) {
  return (
    <article className="group relative flex flex-col rounded-xl border border-line bg-panel p-6 transition hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_0_40px_-12px_rgb(61_255_154/0.35)]">
      <header className="flex flex-wrap items-center justify-between gap-3 font-mono text-xs">
        <span className="text-muted">
          {c.id} · {c.period}
        </span>
        <span className={`rounded border px-2 py-0.5 uppercase tracking-wider ${SEVERITY[c.severity]}`}>
          {c.severity}
        </span>
      </header>

      <h3 className="mt-4 text-xl font-semibold text-fg group-hover:text-accent">{c.title}</h3>
      <p className="font-mono text-xs text-muted">{c.type}</p>
      <p className="mt-3 text-sm leading-relaxed text-fg/80">{c.summary}</p>

      <dl className="mt-5 space-y-4 border-t border-dashed border-line pt-5 text-sm">
        <div>
          <dt className="font-mono text-xs uppercase tracking-wider text-muted">Scope</dt>
          <dd className="mt-1 text-fg/80">{c.scope}</dd>
        </div>
        <div>
          <dt className="font-mono text-xs uppercase tracking-wider text-muted">Findings</dt>
          <dd className="mt-1">
            <ul className="space-y-1">
              {c.findings.map((f) => (
                <li key={f} className="flex gap-2 text-fg/80">
                  <span className="font-mono text-red">[!]</span>
                  {f}
                </li>
              ))}
            </ul>
          </dd>
        </div>
        <div>
          <dt className="font-mono text-xs uppercase tracking-wider text-muted">Lessons</dt>
          <dd className="mt-1">
            <ul className="space-y-1">
              {c.lessons.map((l) => (
                <li key={l} className="flex gap-2 text-fg/80">
                  <span className="font-mono text-accent">[+]</span>
                  {l}
                </li>
              ))}
            </ul>
          </dd>
        </div>
      </dl>

      <ul className="mt-auto flex flex-wrap gap-2 pt-6">
        {c.tools.map((t) => (
          <li key={t} className="rounded bg-line/60 px-2 py-1 font-mono text-[11px] text-fg/70">
            {t}
          </li>
        ))}
      </ul>
    </article>
  );
}
