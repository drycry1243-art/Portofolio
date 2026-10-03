"use client";

import { useEffect, useState } from "react";

type Line = { cmd: string; out: string[] };

const SCRIPT: Line[] = [
  { cmd: "whoami", out: ["jovan_dave · offensive security student @ BINUS"] },
  {
    cmd: "cat certs.txt",
    out: ["[+] CRTA  Certified Red Team Analyst  (CyberWarfare Labs)"],
  },
  {
    cmd: "ls ./case-files",
    out: ["htb-guardian/  flood-ews/"],
  },
  { cmd: "echo $STATUS", out: ["open to internships & collaboration"] },
];

const TYPE_MS = 45;
const PAUSE_MS = 450;

export default function HeroTerminal() {
  // How many lines are fully shown, and how many chars of the current command are typed.
  const [done, setDone] = useState(0);
  const [chars, setChars] = useState(0);

  useEffect(() => {
    if (done >= SCRIPT.length) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cmd = SCRIPT[done].cmd;
    const t = reduced
      ? setTimeout(() => setDone(SCRIPT.length), 0)
      : chars < cmd.length
        ? setTimeout(() => setChars((c) => c + 1), TYPE_MS)
        : setTimeout(() => {
            setDone((d) => d + 1);
            setChars(0);
          }, PAUSE_MS);
    return () => clearTimeout(t);
  }, [done, chars]);

  return (
    <div className="scanlines relative overflow-hidden rounded-xl border border-line bg-panel/90 shadow-[0_0_80px_-20px_rgb(61_255_154/0.25)] backdrop-blur">
      <div className="flex items-center gap-2 border-b border-line px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red/80" />
        <span className="h-3 w-3 rounded-full bg-amber/80" />
        <span className="h-3 w-3 rounded-full bg-accent/80" />
        <span className="ml-3 font-mono text-xs text-muted">jovan@kali: ~</span>
      </div>
      <div className="min-h-[248px] space-y-3 p-5 font-mono text-[13px] leading-relaxed sm:text-sm">
        {SCRIPT.slice(0, done).map((l) => (
          <div key={l.cmd}>
            <Prompt>{l.cmd}</Prompt>
            {l.out.map((o) => (
              <p key={o} className="text-fg/80">
                {o}
              </p>
            ))}
          </div>
        ))}
        {done < SCRIPT.length ? (
          <Prompt>
            {SCRIPT[done].cmd.slice(0, chars)}
            <span className="cursor text-accent">▋</span>
          </Prompt>
        ) : (
          <Prompt>
            <span className="cursor text-accent">▋</span>
          </Prompt>
        )}
      </div>
    </div>
  );
}

function Prompt({ children }: { children: React.ReactNode }) {
  return (
    <p className="break-all">
      <span className="text-accent">➜</span> <span className="text-amber">~</span>{" "}
      <span className="text-fg">{children}</span>
    </p>
  );
}
