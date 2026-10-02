// Portfolio content, sourced from Jovan's ATS CV. Edit here to update the site.

export const profile = {
  name: "Jovan Dave",
  handle: "jovan",
  role: "Offensive Security Student",
  tagline:
    "I break into systems so they can be built back stronger. Cybersecurity student at BINUS University, focused on penetration testing and red teaming.",
  location: "West Jakarta, Indonesia",
  email: "jovan.dv31@gmail.com",
  linkedin: "https://www.linkedin.com/in/jovan-dave-34765a326/",
  github: "https://github.com/drycry1243-art",
  about: [
    "I'm a Cybersecurity student at BINUS University and an aspiring junior security practitioner with a strong pull toward offensive security. Most of my learning happens hands-on: home labs, Hack The Box machines and picoCTF challenges.",
    "I like understanding how things fail. That means mobile app pentests, chaining small bugs into full compromise, and researching how identities (human and non-human) get abused inside enterprise systems.",
  ],
  education: {
    school: "Bina Nusantara University",
    program: "B.Sc. Cyber Security",
    campus: "Kemanggisan, West Jakarta",
    period: "Aug 2024 – Aug 2028",
    gpa: "3.12",
  },
  languages: ["Bahasa Indonesia (native)", "English (upper intermediate)"],
};

export const stats = [
  { value: "4", label: "case files closed" },
  { value: "CRTA", label: "red team certified" },
  { value: "7", label: "vuln chain to root" },
  { value: "26", label: "subdistricts covered" },
];

export type CaseFile = {
  id: string;
  title: string;
  type: string;
  period: string;
  severity: "Critical" | "High" | "Medium" | "Research";
  summary: string;
  scope: string;
  tools: string[];
  findings: string[];
  lessons: string[];
};

export const cases: CaseFile[] = [
  {
    id: "CASE-001",
    title: "Mobile Penetration Testing",
    type: "Android App Pentest",
    period: "Feb – Jun 2026",
    severity: "High",
    summary:
      "Penetration test of a government Android application following the OWASP MASTG, delivered as a structured vulnerability findings report.",
    scope: "Government Android application (static + dynamic analysis)",
    tools: ["Burp Suite", "Frida", "Objection", "JADX", "MobSF", "OWASP MASTG"],
    findings: [
      "Broken access control (IDOR) exposing other users' data",
      "Source review of the decompiled APK with JADX and MobSF",
      "Runtime instrumentation with Frida and Objection",
    ],
    lessons: [
      "Reading decompiled source to map attack surface fast",
      "Turning raw findings into a report stakeholders can act on",
    ],
  },
  {
    id: "CASE-002",
    title: "Guardian, Hack The Box",
    type: "CTF Machine (Hard)",
    period: "Aug – Sep 2025",
    severity: "Critical",
    summary:
      "Team walkthrough of a Hard-rated machine that required chaining seven vulnerabilities from a login page all the way to root.",
    scope: "HTB machine \"Guardian\" (Linux, PHP web stack)",
    tools: ["Nmap", "Burp Suite", "PHP filter chains", "Kali Linux"],
    findings: [
      "Default credentials → IDOR → hardcoded credentials in source",
      "Stored XSS (CVE-2025-22131) and CSRF",
      "LFI escalated to RCE via PHP filter chains, then privesc to root",
    ],
    lessons: [
      "How PHP filter chains turn a file include into code execution",
      "Thorough enumeration beats rushing the exploit",
    ],
  },
  {
    id: "CASE-003",
    title: "Non-Human Identity Risk Scoring",
    type: "IAM Research Paper",
    period: "Feb – Jun 2026",
    severity: "Research",
    summary:
      "Academic paper proposing a framework to automatically discover and risk-score non-human identities (service accounts, API keys, OAuth tokens) in enterprise IAM.",
    scope: "Enterprise Identity & Access Management",
    tools: ["Weighted risk scoring", "Machine learning", "STRIDE", "OAuth / JWT"],
    findings: [
      "Mapped attack vectors: IDOR/BOLA, token hijacking, MFA fatigue, privilege creep",
      "Proposed a \"Double IAM, Double Backend\" tiered architecture for credential isolation",
    ],
    lessons: [
      "IAM fundamentals: authN, authZ and the identity lifecycle",
      "Spotting gaps before they become breaches",
    ],
  },
  {
    id: "CASE-004",
    title: "Jakarta Flood Early Warning System",
    type: "PKM-KC National Grant Project",
    period: "Feb – Jun 2026",
    severity: "Medium",
    summary:
      "Team-built flood early-warning system covering 26 subdistricts across 5 Jakarta regions, presented under PKM-KC, Indonesia's national student innovation program.",
    scope: "26 subdistricts · 5 regions · 6-hour prediction lead time",
    tools: ["HistGradientBoosting", "Python", "ML pipeline", "Dashboard"],
    findings: [
      "Designed the solution architecture around a HistGradientBoosting model",
      "Built a smart dashboard to review and predict weather data (dummy data)",
    ],
    lessons: [
      "How sensor data flows into flood predictions through an ML pipeline",
      "Presenting technical work to a non-technical audience",
    ],
  },
];

export const arsenal = [
  {
    group: "Penetration Testing",
    items: ["Burp Suite", "Frida", "Objection", "MobSF", "JADX", "Nmap"],
  },
  {
    group: "Red Teaming",
    items: ["Recon", "Network pivoting (Ligolo)", "MITRE ATT&CK", "Active Directory", "Kerberos attacks"],
  },
  {
    group: "IAM & Threat Modeling",
    items: ["OAuth", "JWT", "SSO", "IDOR / BOLA", "STRIDE"],
  },
  {
    group: "Networking",
    items: ["IP addressing", "Subnetting", "Routing", "Cisco Packet Tracer"],
  },
  {
    group: "Platforms & Code",
    items: ["Kali Linux", "VMware", "Docker", "Hack The Box", "Python", "PHP"],
  },
  {
    group: "Soft Skills",
    items: ["Project management", "Team collaboration", "Active listening"],
  },
];

export const certification = {
  name: "Certified Red Team Analyst (CRTA)",
  issuer: "CyberWarfare Labs",
  issued: "Sep 26, 2026",
  credentialId: "6ab79c8f65159096baebc5ba",
  verifyUrl:
    "https://labs.cyberwarfare.live/credential/achievement/6ab79c8f65159096baebc5ba",
  covers: [
    "Red team methodology & attack lifecycle",
    "MITRE ATT&CK TTP mapping",
    "External & internal reconnaissance",
    "Kerberos-based attacks in Active Directory",
    "Network pivoting with Ligolo",
    "Lateral movement across segregated networks",
  ],
};

export const experience = [
  {
    role: "Activist",
    org: "HIMTI (BINUS IT Student Association)",
    period: "Jan 2025 – May 2026",
    points: [
      "Created social media content that grew audience interaction",
      "Coordinated internal events: logistics, schedules, execution",
      "Techno staff team, guiding activists and students on event days",
    ],
  },
];
