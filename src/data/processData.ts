export interface ProcessStep {
  number: string;
  phase: string;
  name: string;
  tagline: string;
  description: string;
  deliverables: string[];
  duration: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    phase: "Phase 01",
    name: "Discover",
    tagline: "Auditing requirements, audience expectations & commercial goals.",
    description:
      "We begin with a focused discovery consultation to understand your commercial model, ideal buyers, competitive positioning, and core conversion targets. No design begins without strategic clarity.",
    deliverables: [
      "Commercial Objective Assessment",
      "Customer Buying Psychology & Friction Audit",
      "Competitive Positioning Benchmark",
      "Feature Scope & Technology Recommendation",
    ],
    duration: "Day 1 – 2",
  },
  {
    number: "02",
    phase: "Phase 02",
    name: "Plan",
    tagline: "Sitemap architecture, wireframing & value messaging.",
    description:
      "We map the logical information hierarchy, conversion paths, and content requirements. We structure every page to guide prospective clients toward taking decisive action without confusion.",
    deliverables: [
      "Strategic Sitemap & Navigation Architecture",
      "Structural Page Wireframes & Content Outlines",
      "Lead Capture & WhatsApp Action Routing",
      "Asset & Media Collection Plan",
    ],
    duration: "Day 3 – 5",
  },
  {
    number: "03",
    phase: "Phase 03",
    name: "Design",
    tagline: "High-fidelity UI mockups & bespoke visual systems.",
    description:
      "We develop a bespoke digital aesthetic—warm typography, refined negative space, architectural balance, and distinctive brand accents. You review full interactive previews before engineering begins.",
    deliverables: [
      "High-Fidelity Desktop & Mobile Screen Layouts",
      "Color Palette, Typography Pairing & Component Tokens",
      "Interactive Button & Form States",
      "Collaborative Review & Revisions Round",
    ],
    duration: "Day 6 – 9",
  },
  {
    number: "04",
    phase: "Phase 04",
    name: "Develop",
    tagline: "Clean code engineering, fast styling & integrations.",
    description:
      "We write clean, semantic TypeScript and modern frontend code without unstable plugin bloat. We hook up forms, WhatsApp actions, interactive calculators, and third-party APIs.",
    deliverables: [
      "Component-Driven Code Architecture",
      "Form Validation & Webhook Handshakes",
      "Interactive Filter / Booking / Calculation Logic",
      "Production Cloudflare / Vercel Build Pipeline",
    ],
    duration: "Day 10 – 14",
  },
  {
    number: "05",
    phase: "Phase 05",
    name: "Test",
    tagline: "Mobile responsiveness, speed tests & QA verification.",
    description:
      "Rigorous quality assurance across Apple iOS, Android, macOS, and Windows devices. We test sub-second loading speeds, form submissions, link fidelity, and Core Web Vitals.",
    deliverables: [
      "Cross-Device & Cross-Browser Audit",
      "Google PageSpeed 95+ Benchmark Optimization",
      "Form Submission & WhatsApp Routing Verification",
      "Accessibility & Visual Integrity Sign-off",
    ],
    duration: "Day 15 – 17",
  },
  {
    number: "06",
    phase: "Phase 06",
    name: "Launch",
    tagline: "Domain cutover, DNS propagation & live validation.",
    description:
      "Seamless, zero-downtime deployment. We handle custom domain pointing, SSL certificate provisioning, Google Search Console verification, and sitemap submissions.",
    deliverables: [
      "Zero-Downtime Production DNS Cutover",
      "SSL Certificate Provisioning & HTTPS Enforcement",
      "Google Search Console & Google Analytics 4 Setup",
      "Live Production Health Audit",
    ],
    duration: "Day 18 – 19",
  },
  {
    number: "07",
    phase: "Phase 07",
    name: "Support",
    tagline: "Staff onboarding, CMS training & warranty coverage.",
    description:
      "We don't vanish after deployment. We provide step-by-step guidance, recorded video walkthroughs for your team, full source code ownership, and 30 to 60 days of bug-free warranty.",
    deliverables: [
      "Team Handover Walkthrough & Documentation",
      "100% Code & Asset Ownership Transfer",
      "Direct WhatsApp Founder Contact for Queries",
      "Post-Launch Bug Warranty & Ongoing Care Options",
    ],
    duration: "Day 20+",
  },
];
