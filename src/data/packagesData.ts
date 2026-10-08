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
      "1 Clean single-page website",
      "Works smoothly on all mobile phones & computers",
      "Direct WhatsApp & phone call buttons",
      "Domain & fast hosting setup assistance",
      "14 days free support after launch",
    ],
    handover: "Full code & website ownership",
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
      "Up to 5 custom pages (Home, About, Services, Work, Contact)",
      "Modern professional design made for your business",
      "Inquiry form & instant WhatsApp chat buttons",
      "Social media preview links & cards",
      "30 days free support after launch",
    ],
    handover: "Full code ownership + walkthrough tutorial",
  },
  {
    id: "premium",
    name: "PREMIUM",
    price: "₹24,999+",
    priceNote: "Starting investment",
    idealFor: "Advanced website / booking / online store",
    badge: "ENTERPRISE GRADE",
    isPopular: false,
    scope: [
      "Complete custom website with online booking or store",
      "Product catalog or service menus",
      "Online payment gateway integration",
      "Customer database & WhatsApp notifications",
      "Super fast loading speed on all devices",
      "60 days priority free support after launch",
    ],
    handover: "Full code ownership + admin guide",
  },
];
