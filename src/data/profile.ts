// Portfolio content, sourced from Jovan's ATS CV. Edit here to update the site.

export const profile = {
  name: "Jovan Dave",
  handle: "jovan",
  role: "Aspiring Junior Cybersecurity Practitioner",
  tagline:
    "Cybersecurity student at BINUS University with a strong interest in penetration testing, offensive and defensive security.",
  location: "Kembangan Utara, West Jakarta 11610",
  email: "jovan.dv31@gmail.com",
  linkedin: "https://www.linkedin.com/in/jovan-dave-34765a326/",
  github: "https://github.com/drycry1243-art",
  about: [
    "I am a Cybersecurity student at BINUS University and an aspiring Junior Cybersecurity Practitioner with a strong interest in penetration testing, offensive and defensive security. Actively developing hands-on skills through home labs, Hack The Box, and picoCTF.",
    "I'm always eager to explore new domains and continuously expand my knowledge within the cybersecurity landscape.",
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
  approach: string[];
  findings: string[];
  lessons: string[];
};

export const cases: CaseFile[] = [
  {
    id: "CASE-001",
    title: "Guardian, Hack The Box",
    type: "CTF Machine (Hard)",
    period: "Aug – Sep 2025",
    severity: "Critical",
    summary:
      "Completed the Guardian (Hard) machine on Hack The Box as part of a group, studying and following existing writeups to understand each exploitation step. The machine involved a chain of 7 vulnerabilities: default credentials, IDOR, hardcoded credentials in source code, stored XSS (CVE-2025-22131), CSRF, LFI to RCE via PHP filter chains, and privilege escalation to root.",
    scope: "HTB machine \"Guardian\" (Linux, PHP web stack)",
    tools: ["Nmap", "Burp Suite", "PHP filter chains", "Kali Linux"],
    approach: [
      "Default credentials got a foothold in the web app",
      "IDOR exposed data belonging to other users",
      "Hardcoded credentials found in the application source",
      "Stored XSS (CVE-2025-22131) chained with CSRF",
      "LFI escalated to RCE through PHP filter chains",
      "Privilege escalation to root",
    ],
    findings: [
      "Default credentials → IDOR → hardcoded credentials in source",
      "Stored XSS (CVE-2025-22131) and CSRF",
      "LFI escalated to RCE via PHP filter chains, then privesc to root",
    ],
    lessons: [
      "How PHP filter chains can escalate a Local File Inclusion into Remote Code Execution",
      "The importance of thorough enumeration before attempting exploitation",
    ],
  },
  {
    id: "CASE-002",
    title: "Mobile Penetration Testing",
    type: "Government Android App Assessment",
    period: "Feb – Jun 2026",
    severity: "High",
    summary:
      "Conducted penetration testing on a government Android application using Burp Suite, Frida, and Objection, referencing the OWASP MASTG. Compiled a structured vulnerability findings report.",
    scope: "Government Android application",
    tools: ["Burp Suite", "Frida", "Objection", "MobSF", "JADX"],
    approach: [
      "Reviewed source code using JADX and MobSF",
      "Performed dynamic analysis with Frida and Objection",
      "Referenced OWASP MASTG throughout testing",
      "Identified access control weaknesses (IDOR)",
      "Compiled a structured vulnerability findings report",
    ],
    findings: [
      "Identified vulnerabilities in the application",
      "Discovered access control weaknesses (IDOR)",
    ],
    lessons: [
      "Reviewed source code using JADX and MobSF",
      "Performed dynamic analysis with Frida and Objection",
      "Identified access control weaknesses (IDOR)",
    ],
  },
  {
    id: "CASE-003",
    title: "Non-Human Identity Risk Scoring",
    type: "IAM Research Paper",
    period: "Aug – Sep 2025",
    severity: "Research",
    summary:
      "Authored an academic research paper on a framework for automated discovery and risk scoring of non-human identities (service accounts, API keys, OAuth tokens) in enterprise IAM systems. Applied a weighted scoring approach combined with machine learning.",
    scope: "Enterprise Identity & Access Management",
    tools: ["Weighted risk scoring", "Machine learning", "STRIDE", "OAuth / JWT"],
    approach: [
      "Reviewed IAM fundamentals: authentication, authorization and the identity lifecycle",
      "Catalogued non-human identities: service accounts, API keys, OAuth tokens",
      "Designed a weighted risk-scoring model, combined with machine learning",
      "Threat-modeled common IAM attack paths",
      "Proposed a tiered \"Double IAM, Double Backend\" architecture",
    ],
    findings: [
      "Mapped attack vectors: IDOR/BOLA, token hijacking, MFA fatigue, privilege creep",
      "Proposed a \"Double IAM, Double Backend\" tiered architecture for credential isolation",
    ],
    lessons: [
      "IAM fundamentals: authentication, authorization, and identity lifecycle management",
      "Common IAM attack vectors: IDOR/BOLA, token hijacking, MFA fatigue, privilege creep",
      "Proposed a \"Double IAM and Double Backend\" tiered architecture concept for enhanced credential isolation",
    ],
  },
  {
    id: "CASE-004",
    title: "Jakarta Flood Early Warning System",
    type: "PKM-KC National Grant Project",
    period: "Feb – Jun 2026",
    severity: "Medium",
    summary:
      "Built a flood early-warning system for Jakarta with a team, covering 26 subdistricts across 5 Jakarta regions. Designed the solution architecture using a HistGradientBoosting model with a 6-hour prediction lead time. Presented as a PKM-KC project (a national student research/innovation grant program).",
    scope: "26 subdistricts · 5 regions · 6-hour prediction lead time",
    tools: ["HistGradientBoosting", "Python", "ML pipeline", "Dashboard"],
    approach: [
      "Scoped coverage: 26 subdistricts across 5 Jakarta regions",
      "Designed the pipeline from sensor data to flood prediction",
      "Chose a HistGradientBoosting model with a 6-hour prediction lead time",
      "Built a smart dashboard to review and predict weather (dummy data)",
      "Presented the project under PKM-KC",
    ],
    findings: [
      "Designed the solution architecture using a HistGradientBoosting model with a 6-hour prediction lead time",
      "Built a smart dashboard for reviewing and predicting weather data (using dummy data)",
    ],
    lessons: [
      "Building a smart dashboard for reviewing and predicting weather data (using dummy data)",
      "Understanding how sensor data is processed into flood predictions through a machine learning pipeline",
      "Presenting technical work to a non-technical audience",
    ],
  },
];

export const arsenal = [
  {
    group: "Penetration Testing",
    items: ["Burp Suite", "Nmap", "Frida", "Objection", "MobSF", "JADX"],
  },
  {
    group: "Red Teaming",
    items: ["CRTA certified", "Reconnaissance", "Network pivoting", "MITRE ATT&CK"],
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
    group: "Platforms",
    items: ["Kali Linux", "VMware", "Docker", "Hack The Box"],
  },
  {
    group: "Artificial Intelligence",
    items: ["Claude + Claude Code", "Gemini"],
  },
  {
    group: "Soft Skills",
    items: ["Project management", "Team collaboration", "Active listening", "Problem solving"],
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
    "Red Team Methodology and attack lifecycle",
    "MITRE ATT&CK TTPs mapping",
    "External and Internal Reconnaissance",
    "Network pivoting using Ligolo",
    "Lateral movement across segregated networks",
  ],
};

export const experience = [
  {
    role: "Activist",
    org: "HIMTI (BINUS IT Student Association)",
    period: "Jan 2025 – May 2026",
    points: [
      "Developed engaging content for social media marketing, enhancing audience interaction and brand visibility",
      "Coordinated internal events, managing logistics and schedules to ensure successful execution",
      "Part of the Techno staff team, guiding fellow activists and students to their seats",
    ],
    experienceGained: [
      "Content creation and social media marketing strategy",
      "Event planning, logistics coordination, and on-site execution",
      "Cross-team collaboration within a large student organization",
    ],
  },
];
