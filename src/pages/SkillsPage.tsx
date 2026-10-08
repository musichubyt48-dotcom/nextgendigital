import {
  Layout,
  Code2,
  Database,
  Share2,
  Zap,
  ShieldCheck,
  Smartphone,
  Calendar,
  ShoppingBag,
  Inbox,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { SectionHeader } from "@/components/studio/SectionHeader";

interface SkillsPageProps {
  onNavigate: (path: string) => void;
}

const skillCategories = [
  {
    category: "01 / Visual & Interaction Design",
    title: "UI / UX Design & Brand Distinction",
    description:
      "We design interfaces that look like serious studios built them. Clear typography hierarchy, high contrast readability, and generous whitespace tailored to your business sector.",
    skills: [
      "Custom UI/UX Wireframing & Prototyping",
      "Editorial & High-Contrast Typography Pairing",
      "Mobile Micro-Ergonomics & Touch Optimization",
      "Bespoke Color & Token Design Systems",
      "Zero Generic Cloned Templates",
    ],
  },
  {
    category: "02 / Frontend Engineering",
    title: "Modern Web Architecture",
    description:
      "Lightning-fast, clean code that loads in fractions of a second. Zero bloat, zero unstable plugin dependencies that break on browser updates.",
    skills: [
      "React 18+ & Modern TypeScript",
      "Tailwind CSS Utility Architecture",
      "Fast Vite & Production Bundling",
      "Semantic, Accessible HTML5 & CSS3",
      "Cross-Browser & Multi-Device Testing",
    ],
  },
  {
    category: "03 / Operational & Lead Systems",
    title: "Practical Business Functionality",
    description:
      "Digital systems that eliminate manual front-desk friction and turn casual visitors into paying customers.",
    skills: [
      "Direct WhatsApp Inquiry & Reservation Routing",
      "Custom Booking Engines & Slot Availability",
      "Interactive Calculators & Diagnostic Assessment Tools",
      "Multi-Branch Directories & Google Maps Geocoding",
      "High-Conversion Lead Capture Funnels",
    ],
  },
  {
    category: "04 / E-commerce & Payments",
    title: "Transaction & Storefront Systems",
    description:
      "Frictionless purchase flows designed to maximize conversion rates on mobile devices.",
    skills: [
      "Lightweight Product Catalogs & Dynamic Filters",
      "1-Tap UPI & Indian Payment Gateways (Razorpay/Cashfree)",
      "Global Currency Checkout (Stripe)",
      "Automated Order Confirmations & WhatsApp Dispatch",
      "Inventory & Order Management Interfaces",
    ],
  },
  {
    category: "05 / Cloud & Infrastructure",
    title: "Global Edge Hosting & Database Systems",
    description:
      "Enterprise hosting networks with continuous uptime, global SSL encryption, and high-availability database connections.",
    skills: [
      "Cloudflare Global Edge CDN Architecture",
      "Serverless Functions & REST API Gateways",
      "Relational & Document Database Schema Design",
      "Zero Monthly Server Fees for Static Deployments",
      "Automated SSL / HTTPS Encryption",
    ],
  },
  {
    category: "06 / Search Engine Optimization & Security",
    title: "Technical SEO & Long-Term Resilience",
    description:
      "Built from day one so Google indexes your pages properly and customers can find you without expensive ad spending.",
    skills: [
      "95+ Google Core Web Vitals Optimization",
      "On-Page Semantic Metadata & OpenGraph Tags",
      "Automated XML Sitemap & Robots.txt Generation",
      "Schema.org Structured Data (LocalBusiness, Organization)",
      "Security Audits & Content Delivery Hardening",
    ],
  },
];

export function SkillsPage({ onNavigate }: SkillsPageProps) {
  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#041510] pt-24 pb-12 sm:pt-32 sm:pb-24 animate-in fade-in duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Page Header */}
        <SectionHeader
          eyebrow="Skills & Technical Capabilities"
          align="center"
          title={
            <>
              Engineered for{" "}
              <span className="underline decoration-[#00D285] decoration-4 underline-offset-8">
                business performance
              </span>
              .
            </>
          }
          description="We do not measure technical skills by buzzwords or trendy frameworks. We measure them by whether your website loads instantly, works reliably, and accomplishes your commercial objectives."
        />

        {/* Skills Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-[#FFFFFF] rounded-3xl p-7 sm:p-8 hover-lift flex flex-col justify-between border border-[#00D285]/20 shadow-sm hover:border-[#00D285]/60 hover:shadow-md transition-all group"
            >
              <div className="space-y-4">
                <span className="font-mono text-xs uppercase tracking-widest text-[#00D285] font-semibold block">
                  {cat.category}
                </span>

                <h3 className="font-display font-bold text-2xl text-[#041510] group-hover:text-[#00D285] transition-colors">
                  {cat.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#0A241D]/75 leading-relaxed font-sans">
                  {cat.description}
                </p>

                <div className="pt-4 space-y-2 border-t border-[#00D285]/15">
                  {cat.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="flex items-start gap-2.5 text-xs text-[#041510]">
                      <CheckCircle2 size={13} className="text-[#00D285] shrink-0 mt-0.5" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Code vs Page Builder Note */}
        <div className="bg-[#FFFFFF] rounded-3xl p-8 sm:p-12 border border-[#00D285]/25 max-w-4xl mx-auto space-y-6 shadow-sm">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#00D285]/10 border border-[#00D285]/25 px-3.5 py-1 text-[0.6875rem] font-mono uppercase tracking-wider text-[#00D285] font-semibold">
            Why Custom Engineering Matters
          </div>

          <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#041510]">
            Custom Code vs. Bloated Template Builders
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-[#0A241D]/80 leading-relaxed font-sans">
            <div className="space-y-2 p-5 rounded-2xl bg-rose-50/50 border border-rose-200">
              <div className="font-mono text-xs text-rose-700 font-semibold uppercase">
                Generic Page Builders (WordPress / Wix)
              </div>
              <p className="text-xs text-rose-900/80 leading-relaxed">
                Slow initial load times, dozens of conflicting plugins, frequent security
                vulnerabilities, and messy monthly licensing costs that slow your website down.
              </p>
            </div>

            <div className="space-y-2 p-5 rounded-2xl bg-[#F8FAF9] border border-[#00D285]/30">
              <div className="font-mono text-xs text-[#00D285] font-bold uppercase">
                JIVDEV Custom Code
              </div>
              <p className="text-xs text-[#041510] leading-relaxed">
                Lightweight, hand-crafted code running on global edge CDNs. Loads in milliseconds,
                has zero monthly plugin subscriptions, and you own 100% of your source code forever.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="text-center pt-8 space-y-4">
          <p className="text-[#0A241D]/75 text-sm font-sans">
            Have a project in mind with unique technical or workflow requirements?
          </p>
          <button
            type="button"
            onClick={() => onNavigate("/contact")}
            className="inline-flex items-center gap-2 rounded-full bg-[#00D285] hover:bg-[#00B873] px-8 py-3.5 text-xs font-mono font-bold uppercase tracking-wider text-[#041510] shadow-md shadow-[#00D285]/20 transition-all cursor-pointer"
          >
            <span>Start a Project</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
