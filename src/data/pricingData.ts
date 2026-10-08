export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  savings?: string;
  billing: string;
  badge?: string;
  highlighted?: boolean;
  description: string;
  turnaround: string;
  pages: string;
  features: string[];
  notIncluded?: string[];
  ctaText: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    price: "₹4,999",
    originalPrice: "₹7,999",
    savings: "Save ₹3,000",
    billing: "One-time investment",
    description:
      "For emerging businesses needing an authoritative, trustworthy digital presence delivered quickly and cleanly.",
    turnaround: "5 – 7 Days Delivery",
    pages: "Up to 3 Custom Pages",
    features: [
      "Up to 3 Core Custom Pages (Home, About/Services, Contact)",
      "Mobile Responsive Ergonomics (tested on phone & tablet)",
      "Instant 1-Click WhatsApp Lead Action Button",
      "Clean Lead Capture Contact & Enquiry Form",
      "Speed Optimized Architecture (Loads in under 1.5s)",
      "Social Media & Google Maps Integration",
      "SSL Security Certificate & Free Hosting Setup",
      "14 Days Post-Launch Bug Warranty",
    ],
    ctaText: "Select Starter Plan",
  },
  {
    id: "growth",
    name: "Growth",
    price: "₹14,999",
    originalPrice: "₹22,999",
    savings: "Save ₹8,000",
    billing: "One-time investment",
    badge: "MOST POPULAR FOR BUSINESSES",
    highlighted: true,
    description:
      "For ambitious companies seeking high-conversion authority, organic search visibility, and measurable commercial impact.",
    turnaround: "10 – 14 Days Delivery",
    pages: "Up to 7 Bespoke System Pages",
    features: [
      "Up to 7 Bespoke System Pages with Custom Layouts",
      "Conversion Architecture & High-Intent Copywriting Guidance",
      "Speed & Core Web Vitals Optimization (95+ Lighthouse Score)",
      "Interactive Product / Service Showcases & Visual Filtering",
      "Lead Capture Form with Auto-Format for WhatsApp / Email",
      "30 Days Priority Technical Care & Staff Onboarding",
    ],
    ctaText: "Select Growth Plan",
  },
  {
    id: "premium",
    name: "Premium",
    price: "₹24,999",
    originalPrice: "₹34,999",
    savings: "Save ₹10,000",
    billing: "One-time investment",
    badge: "MAXIMUM IMPACT & SCALE",
    description:
      "For established organizations demanding tailored digital experiences, multi-tier CMS, or custom customer workflows.",
    turnaround: "2 – 3 Weeks Delivery",
    pages: "Up to 15 Pages & Dynamic CMS",
    features: [
      "Up to 15 Pages & Dynamic Content Management System (CMS)",
      "Custom UI Micro-Interactions & Refined Animation Craft",
      "Direct Booking Engine or Product Catalog Architecture",
      "CRM & Webhook Lead Flow Routing (Sheets / Email / WhatsApp)",
      "Advanced Multilingual or Multi-Location Readiness",
      "Complete Brand Digital Asset & Iconography Architecture",
      "Full Intellectual Property & Source Code Handover",
      "60 Days Post-Launch Concierge Service & Dedicated Support",
    ],
    ctaText: "Select Premium Plan",
  },
  {
    id: "custom",
    name: "Custom Enterprise",
    price: "From ₹29,999",
    billing: "Bespoke scope & milestones",
    badge: "BESPOKE SYSTEMS",
    description:
      "Advanced transactional e-commerce, reservation booking engines, private client portals, and custom web applications.",
    turnaround: "3 – 6 Weeks (Milestone Based)",
    pages: "Unlimited / Modular Architecture",
    features: [
      "Full E-commerce Storefront with Native UPI & Card Gateways",
      "Real-Time Booking & Reservation Calendar Systems",
      "Private Customer / Employee Authentication Portals",
      "Database Architecture & API Third-Party Integrations",
      "Custom Pricing Calculators & Interactive Quotation Funnels",
      "Dedicated Senior Engineering & Weekly Video Sprints",
      "Complete Technical Documentation & Staff Training Videos",
      "Tailored SLA & Ongoing Technical Stewardship Retainer",
    ],
    ctaText: "Request Custom Scope",
  },
];
