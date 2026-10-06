import Image from "next/image";
import CaseFiles from "@/components/CaseFiles";
import HeroTerminal from "@/components/HeroTerminal";
import Landing from "@/components/Landing";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import {
  arsenal,
  cases,
  certification,
  experience,
  profile,
  stats,
} from "@/data/profile";

const NAV = [
  { href: "#about", label: "about" },
  { href: "#cases", label: "case-files" },
  { href: "#arsenal", label: "arsenal" },
  { href: "#certs", label: "certs" },
  { href: "#contact", label: "contact" },
];

export default function Home() {
  return (
    <>
      <Landing />
      <header className="sticky top-0 z-20 border-b border-line/70 bg-bg/80 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <a href="#top" className="group flex items-center gap-2 font-mono text-sm text-fg">
            <span className="flex h-7 w-7 items-center justify-center rounded border border-accent/50 text-xs font-bold text-accent transition group-hover:bg-accent group-hover:text-bg">
              JD
            </span>
            <span className="hidden sm:inline">
              <span className="text-fg font-semibold">jovan</span>
              <span className="text-accent">_</span>
              <span className="text-muted">dave</span>
            </span>
          </a>
          <ul className="hidden gap-1 font-mono text-sm text-muted md:flex">
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="rounded px-3 py-1.5 transition hover:bg-accent/10 hover:text-accent">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={`mailto:${profile.email}`}
            className="rounded border border-accent/50 px-3 py-1.5 font-mono text-xs text-accent transition hover:bg-accent hover:text-bg"
          >
            ping me
          </a>
        </nav>
      </header>

      <main id="top" className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Spacer for landing title screen */}
        <div className="h-screen" aria-hidden="true" />

        {/* Hero — always visible, not wrapped in ScrollReveal */}
        <section className="grid items-center gap-12 py-16 lg:grid-cols-[1.15fr_1fr] lg:py-24">
          <div className="order-2 lg:order-1">
            <p className="font-mono text-sm text-accent">
              <span className="text-muted">[</span> {profile.role} <span className="text-muted">]</span>
            </p>
            <h1 className="glow mt-4 text-5xl font-bold tracking-tight text-fg sm:text-7xl">
              {profile.name}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-fg/75">{profile.tagline}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#cases"
                className="rounded bg-accent px-5 py-2.5 font-mono text-sm font-semibold text-bg transition hover:brightness-110"
              >
                open case files →
              </a>
              <a
                href={certification.verifyUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded border border-line px-5 py-2.5 font-mono text-sm text-fg transition hover:border-accent hover:text-accent"
              >
                verify CRTA ↗
              </a>
            </div>
            <div className="mt-10">
              <HeroTerminal />
            </div>
          </div>
          <Portrait />
        </section>

        {/* Stats */}
        <ScrollReveal>
          <section className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="stat-card card-glow p-6">
                <p className="font-mono text-3xl font-bold text-accent">{s.value}</p>
                <p className="mt-1 text-sm text-muted">{s.label}</p>
              </div>
            ))}
          </section>
        </ScrollReveal>

        {/* About */}
        <ScrollReveal>
        <section id="about" className="scroll-mt-24 py-24">
          <SectionHeading index="01" label="about" title="Curious about how things break." />
          <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
            <div className="space-y-5 text-lg leading-relaxed text-fg/80">
              {profile.about.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <div className="space-y-4">
              <InfoBlock title="education">
                <p className="text-fg">{profile.education.school}</p>
                <p className="text-sm text-muted">
                  {profile.education.program} · {profile.education.campus}
                </p>
                <p className="mt-1 font-mono text-xs text-muted">
                  {profile.education.period} · GPA {profile.education.gpa}
                </p>
              </InfoBlock>
              {experience.map((e) => (
                <InfoBlock key={e.org} title="experience">
                  <p className="text-fg">
                    {e.role}, {e.org}
                  </p>
                  <p className="font-mono text-xs text-muted">{e.period}</p>
                  <ul className="mt-2 space-y-1 text-sm text-fg/75">
                    {e.points.map((p) => (
                      <li key={p}>· {p}</li>
                    ))}
                  </ul>
                  {e.experienceGained && (
                    <>
                      <p className="mt-3 font-mono text-xs text-accent">Experience Gained:</p>
                      <ul className="mt-1 space-y-1 text-sm text-fg/75">
                        {e.experienceGained.map((g) => (
                          <li key={g}>· {g}</li>
                        ))}
                      </ul>
                    </>
                  )}
                </InfoBlock>
              ))}
              <InfoBlock title="languages">
                <p className="text-sm text-fg/80">{profile.languages.join(" · ")}</p>
              </InfoBlock>
            </div>
          </div>
        </section>
        </ScrollReveal>

        {/* Case files */}
        <ScrollReveal>
        <section id="cases" className="scroll-mt-24 py-24">
          <SectionHeading index="02" label="case-files" title="Work, written up like a report." />
          <p className="-mt-6 mb-8 font-mono text-sm text-muted">hover to preview · click to open the full report</p>
          <CaseFiles cases={cases} />
        </section>
        </ScrollReveal>

        {/* Arsenal */}
        <ScrollReveal>
        <section id="arsenal" className="scroll-mt-24 py-24">
          <SectionHeading index="03" label="arsenal" title="Tools I reach for." />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {arsenal.map((a) => (
              <div key={a.group} className="card-glow p-5">
                <p className="font-mono text-xs uppercase tracking-wider text-accent">{a.group}</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {a.items.map((i) => (
                    <li
                      key={i}
                      className="tag-pill rounded-full border border-line px-3 py-1 text-sm text-fg/80"
                    >
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
        </ScrollReveal>

        {/* Certification */}
        <ScrollReveal>
        <section id="certs" className="scroll-mt-24 py-24">
          <SectionHeading index="04" label="certs" title="Certified to break in." />
          <div className="relative overflow-hidden rounded-xl border border-accent/40 bg-panel p-8 sm:p-10">
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/15 blur-3xl" />
            <div className="grid gap-8 md:grid-cols-[1fr_1.2fr]">
              <div>
                <p className="font-mono text-xs text-muted">
                  issued {certification.issued} · {certification.issuer}
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-fg sm:text-3xl">{certification.name}</h3>
                <p className="mt-4 break-all font-mono text-xs text-muted">
                  credential_id: {certification.credentialId}
                </p>
                <a
                  href={certification.verifyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-block rounded border border-accent/50 px-4 py-2 font-mono text-sm text-accent transition hover:bg-accent hover:text-bg"
                >
                  verify credential ↗
                </a>
              </div>
              <ul className="grid gap-2 sm:grid-cols-2">
                {certification.covers.map((c) => (
                  <li key={c} className="flex gap-2 text-sm text-fg/80">
                    <span className="font-mono text-accent">✓</span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        </ScrollReveal>

        {/* Contact */}
        <ScrollReveal>
        <section id="contact" className="scroll-mt-24 py-24">
          <SectionHeading index="05" label="contact" title="Let's talk security." />
          <div className="card-glow p-6 font-mono text-sm sm:p-8">
            <p>
              <span className="text-accent">➜</span> <span className="text-amber">~</span> ./contact --jovan
            </p>
            <ul className="mt-4 space-y-2">
              <ContactRow label="email" href={`mailto:${profile.email}`} value={profile.email} />
              <ContactRow label="linkedin" href={profile.linkedin} value="in/jovan-dave" />
              <ContactRow label="github" href={profile.github} value="drycry1243-art" />
              <li className="text-muted">
                <span className="inline-block w-24">location</span>
                <span className="text-fg/80">{profile.location}</span>
              </li>
            </ul>
          </div>
        </section>
        </ScrollReveal>
      </main>

      <footer className="border-t border-line py-8 text-center font-mono text-xs text-muted">
        <p>© {new Date().getFullYear()} {profile.name} · built with Next.js · hack responsibly</p>
        <p className="mt-1 text-muted/50 italic">Soli Deo Gloria</p>
      </footer>
    </>
  );
}

function Portrait() {
  return (
    <div className="relative order-1 mx-auto w-full max-w-[250px] sm:max-w-sm lg:order-2 lg:max-w-none">
      {/* glow + grid behind the cutout */}
      <div className="absolute inset-x-[8%] bottom-0 top-[12%] rounded-t-full bg-[radial-gradient(circle_at_50%_35%,rgb(0_212_255/0.28),transparent_65%)]" />
      <div className="absolute inset-x-[8%] bottom-0 top-[12%] rounded-t-full border border-accent/20" />

      {/* HUD corner brackets */}
      <span className="absolute left-0 top-[8%] h-8 w-8 border-l-2 border-t-2 border-accent/70" />
      <span className="absolute right-0 top-[8%] h-8 w-8 border-r-2 border-t-2 border-accent/70" />

      <div className="float relative">
        <Image
          src="/jovan.webp"
          alt={`Portrait of ${profile.name}`}
          width={900}
          height={1618}
          loading="eager"
          fetchPriority="high"
          sizes="(min-width: 1024px) 480px, 384px"
          className="relative mx-auto h-auto max-h-[360px] w-auto sm:max-h-[520px] lg:max-h-[640px] [mask-image:linear-gradient(to_bottom,black_75%,transparent)]"
        />
      </div>

      <div className="absolute bottom-6 left-1/2 w-max -translate-x-1/2 rounded border border-accent/40 bg-bg/85 px-3 py-1.5 font-mono text-[11px] text-fg/80 backdrop-blur sm:text-xs">
        <span className="text-accent">●</span> ID: JOVAN_DAVE <span className="text-muted">{"//"}</span> RED TEAM
      </div>
    </div>
  );
}

function InfoBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="card-glow p-5">
      <p className="mb-2 font-mono text-xs uppercase tracking-wider text-accent">{title}</p>
      {children}
    </div>
  );
}

function ContactRow({ label, href, value }: { label: string; href: string; value: string }) {
  const external = href.startsWith("http");
  return (
    <li className="text-muted">
      <span className="inline-block w-24">{label}</span>
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
        className="text-fg underline decoration-line underline-offset-4 transition hover:text-accent hover:decoration-accent"
      >
        {value}
      </a>
    </li>
  );
}
