export interface PricingPackage {
  id: string;
  name: string;
  price: string;
  priceNote: string;
  idealFor: string;
  badge: string | null;
  isPopular: boolean;
  scope: string[];
  handover: string;
}

export const packages: PricingPackage[] = [
  {
    id: "starter",
    name: "STARTER",
    price: "₹4,999+",
    priceNote: "Starting investment",
    idealFor: "Single page / simple business website",
    badge: null,
    isPopular: false,
    scope: [
      "High-conversion single-page architecture",
      "Clean mobile-first responsive layout",
      "Direct WhatsApp & phone call integration",
      "Essential on-page local SEO setup",
      "Domain & hosting connection assistance",
      "14 days complimentary handover support",
    ],
    handover: "Full code & asset ownership",
  },
  {
    id: "growth",
    name: "GROWTH",
    price: "₹14,999+",
    priceNote: "Starting investment",
    idealFor: "Multi-page business website",
    badge: "MOST POPULAR",
    isPopular: true,
    scope: [
      "Up to 5 bespoke pages (Home, About, Services, Work, Contact)",
      "Tailored editorial design & refined micro-interactions",
      "Advanced lead capture & WhatsApp inquiry funnel",
      "Full technical SEO & Google indexing setup",
      "Social media preview tags (OpenGraph)",
      "30 days dedicated post-launch support",
    ],
    handover: "Full code ownership + walkthrough tutorial",
  },
  {
    id: "premium",
    name: "PREMIUM",
    price: "₹24,999+",
    priceNote: "Starting investment",
    idealFor: "Advanced website / system / booking / e-commerce",
    badge: "ENTERPRISE GRADE",
    isPopular: false,
    scope: [
      "Complete custom web platform or booking engine",
      "E-commerce storefront or dynamic service catalog",
      "Interactive tools (calculators, schedules, portals)",
      "Database & third-party API integrations",
      "Performance optimization (95+ Core Web Vitals)",
      "60 days priority technical support & updates",
    ],
    handover: "Full architectural ownership + admin guide",
  },
];
