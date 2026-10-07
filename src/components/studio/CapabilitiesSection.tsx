import {
  ArrowRight,
  Layout,
  Smartphone,
  Globe,
  Calendar,
  ShoppingBag,
  Sliders,
  Database,
  Share2,
  Inbox,
  Wrench,
} from "lucide-react";
import { SectionHeader } from "./SectionHeader";

interface CapabilitiesSectionProps {
  onExploreSkills: () => void;
}

const capabilities = [
  {
    icon: Layout,
    title: "UI / UX Design",
    desc: "Bespoke digital design systems with high contrast, editorial typography, and intuitive customer paths.",
  },
  {
    icon: Smartphone,
    title: "Responsive Web Development",
    desc: "Mobile-first, touch-friendly engineering tested thoroughly across phones, tablets, and wide monitors.",
  },
  {
    icon: Globe,
    title: "Business Websites",
    desc: "Corporate brand headquarters that establish regional authority and educate high-intent prospects.",
  },
  {
    icon: Calendar,
    title: "Booking Systems",
    desc: "Bespoke appointment and reservation flows with live date selection and WhatsApp routing.",
  },
  {
    icon: ShoppingBag,
    title: "E-commerce",
    desc: "Streamlined storefronts with lightweight catalogs, instant cart states, and seamless payment gateways.",
  },
  {
    icon: Sliders,
    title: "Admin Dashboards",
    desc: "Intuitive internal portals that let non-technical staff manage inquiries, content, and updates easily.",
  },
  {
    icon: Database,
    title: "Database Systems",
    desc: "Structured data storage for leads, member accounts, customer records, and product inventories.",
  },
  {
    icon: Share2,
    title: "API & Third-party Integrations",
    desc: "Direct connections with WhatsApp, payment processors, Google Maps, CRMs, and email tools.",
  },
  {
    icon: Inbox,
    title: "Lead & Enquiry Systems",
    desc: "High-conversion lead forms with automated validation, instant phone notifications, and zero spam.",
  },
  {
    icon: Wrench,
    title: "Website Maintenance",
    desc: "Regular performance checks, security hardening, CDN caching, and continuous technical support.",
  },
];

export function CapabilitiesSection({ onExploreSkills }: CapabilitiesSectionProps) {
  return (
    <section id="skills" className="py-20 md:py-32 relative bg-background border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-14 border-b border-white/10">
          <SectionHeader
            number="05"
            eyebrow="Skills & Capabilities"
            align="left"
            title={
              <>
                What we can <span className="text-gradient-gold italic">build</span>.
              </>
            }
            description="We focus on practical business capabilities rather than buzzwords. Every system we build is designed to serve a tangible operational or commercial purpose."
          />

          <button
            type="button"
            onClick={onExploreSkills}
            className="inline-flex items-center gap-2 text-sm font-mono uppercase tracking-wider text-gold hover:text-gold-soft transition-colors self-start md:self-end group"
          >
            <span>Explore Our Capabilities</span>
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 10 Capabilities Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {capabilities.map((c) => {
            const Icon = c.icon;
            return (
              <div
                key={c.title}
                className="glass rounded-2xl p-5 hover-lift group flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="h-10 w-10 rounded-xl glass-gold flex items-center justify-center text-gold group-hover:scale-105 transition-transform">
                    <Icon size={18} />
                  </div>

                  <h3 className="font-display text-lg text-foreground group-hover:text-gold transition-colors leading-snug">
                    {c.title}
                  </h3>

                  <p className="text-xs text-muted-foreground leading-relaxed">{c.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
