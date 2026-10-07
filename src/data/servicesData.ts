export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  deliverables: string[];
  idealFor: string;
  timeline: string;
  pricingStart: string;
  features: string[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "business-websites",
    number: "01",
    title: "Business Corporate Websites",
    shortTitle: "Business Websites",
    tagline: "Institutional authority, bespoke visual distinction, and commercial credibility.",
    description:
      "Authoritative web platforms designed to showcase your enterprise, establish immediate institutional trust, and generate high-intent inquiries from qualified clients and business partners.",
    deliverables: [
      "Custom Brand Architecture & Layout",
      "Executive & Team Leadership Profiles",
      "Interactive Services & Solutions Directory",
      "Corporate Credential & Portfolio Showcase",
      "Structured Inquiries & Lead Routing",
      "Search Engine Schema & On-Page SEO",
    ],
    idealFor:
      "Consultancies, law firms, manufacturers, engineering firms, and growing B2B enterprises.",
    timeline: "2 – 3 Weeks",
    pricingStart: "Starting at ₹14,999",
    features: [
      "Zero generic WordPress templates or theme bloat",
      "Mobile micro-ergonomics tested across 20+ screen widths",
      "Sub-second page transitions and lightning-fast asset delivery",
      "Google Search Console verified with clean XML sitemaps",
    ],
  },
  {
    id: "landing-pages",
    number: "02",
    title: "High-Impact Landing Pages",
    shortTitle: "Landing Pages",
    tagline: "Laser-focused conversion architecture for paid ad traffic and product rollouts.",
    description:
      "Single-purpose campaign platforms engineered to turn paid clicks into signed inquiries. Built with ruthless clarity, persuasive visual hierarchy, and sub-second mobile loading speeds.",
    deliverables: [
      "Strategic Value Proposition & Hook Design",
      "Frictionless Lead Capture Form",
      "Direct WhatsApp Conversion Action",
      "Social Proof & Proof-of-Work Grid",
      "Ad Tracking & Pixel Compatibility",
      "High-Converting Mobile Layout",
    ],
    idealFor:
      "Product launches, Google/Meta ad campaigns, webinars, real estate developments, and high-ticket service offers.",
    timeline: "5 – 7 Days",
    pricingStart: "Starting at ₹4,999",
    features: [
      "Single goal conversion funnel with zero distracting escape links",
      "99/100 Google PageSpeed mobile score for minimal ad bounce",
      "Instant WhatsApp click-to-chat with pre-filled campaign tags",
      "Tested form fields for maximum completion rates",
    ],
  },
  {
    id: "booking-systems",
    number: "03",
    title: "Reservation & Booking Systems",
    shortTitle: "Booking Websites",
    tagline: "Automate appointment requests, room reservations, and consultation schedules.",
    description:
      "Tailored reservation engines for boutique resorts, aesthetic clinics, and professional consultancies. Eliminates phone tag and replaces manual front-desk friction with direct, automated booking flows.",
    deliverables: [
      "Real-Time Slot & Date Selection Interface",
      "Automated WhatsApp Confirmation Routing",
      "Calendar Sync (Google / Outlook / Apple)",
      "Deposit / Advance Payment Rail (UPI & Cards)",
      "Client Reminder & Follow-Up Workflows",
      "Front-Desk Management Dashboard Integration",
    ],
    idealFor:
      "Hotels, resorts, salons, dental and wellness clinics, and private coaching practices.",
    timeline: "2 – 4 Weeks",
    pricingStart: "Starting at ₹24,999",
    features: [
      "Zero monthly SaaS commissions or third-party booking fees",
      "Direct room, stylist, or doctor selection with photo previews",
      "WhatsApp automated booking confirmations sent to client and staff",
      "Seamless UPI QR code & credit card tokenized payments",
    ],
  },
  {
    id: "ecommerce",
    number: "04",
    title: "High-Speed E-commerce",
    shortTitle: "E-commerce",
    tagline: "Fast catalog storefronts with frictionless checkout and high mobile completion.",
    description:
      "Modern transactional storefronts engineered for sub-second catalog browsing and zero buyer hesitation. Complete with native UPI and card payment gateways, inventory management, and automated shipping hooks.",
    deliverables: [
      "Fast Visual Product Catalog & Filters",
      "Frictionless 2-Step Mobile Checkout",
      "Native Payment Gateway (Razorpay, Cashfree, Stripe)",
      "Automated WhatsApp Order Notification",
      "Inventory & Order Management Portal",
      "Discount, Coupon, and Bundle Engine",
    ],
    idealFor:
      "Direct-to-consumer (D2C) brands, boutique artisans, lifestyle retailers, and specialized equipment suppliers.",
    timeline: "3 – 4 Weeks",
    pricingStart: "Starting at ₹29,999",
    features: [
      "Instant 1-tap UPI payment directly on mobile phones",
      "Fast product image zooms and interactive variant selectors",
      "Automated GST invoice generation and order confirmation receipts",
      "Real-time shipment tracking status notifications",
    ],
  },
  {
    id: "custom-systems",
    number: "05",
    title: "Custom Web Systems",
    shortTitle: "Custom Web Systems",
    tagline: "Tailored client portals, automated quote generators, and internal business tools.",
    description:
      "Bespoke digital software modules created to automate clerical bottlenecks in your daily operations. From interactive cost calculators to private customer portals, we digitize your unique business workflows.",
    deliverables: [
      "Bespoke Interactive Cost & Quote Calculators",
      "Secure Client Authentication & Document Portals",
      "Custom Lead Triage & CRM Webhooks",
      "Database Modeling (PostgreSQL, Supabase, Sheets)",
      "Role-Based Access Controls for Staff",
      "Custom Operational Dashboards",
    ],
    idealFor:
      "Contractors, logistics companies, specialized service providers, and firms with non-standard pricing formulas.",
    timeline: "3 – 6 Weeks",
    pricingStart: "Custom Quote",
    features: [
      "Tailored strictly to your exact operational workflow",
      "Integrates with Google Sheets, email, and internal accounting systems",
      "Bank-grade SSL encryption and secure session handling",
      "100% intellectual property and full code ownership for your firm",
    ],
  },
  {
    id: "maintenance-care",
    number: "06",
    title: "Website Maintenance & Care",
    shortTitle: "Maintenance & Care",
    tagline: "Proactive technical stewardship, continuous security, and dedicated support.",
    description:
      "Worry-free maintenance for businesses that cannot afford website downtime or sluggish performance. We monitor security, run daily backups, handle content updates, and fix technical issues before they affect sales.",
    deliverables: [
      "24/7 Uptime & Performance Monitoring",
      "Daily Automated Cloud Backups",
      "Monthly Content, Text & Visual Updates",
      "Security Patches & Vulnerability Audits",
      "Search Console & Core Web Vitals Audits",
      "Direct WhatsApp Priority Developer Support",
    ],
    idealFor:
      "Any active business relying on their website for ongoing inquiries, leads, and brand reputation.",
    timeline: "Ongoing Retainer",
    pricingStart: "From ₹2,499 / month",
    features: [
      "Zero bureaucratic ticketing systems — message us directly on WhatsApp",
      "Guaranteed priority same-day resolution for critical issues",
      "Monthly performance and Google ranking visibility report",
      "Domain and SSL certificate auto-renewal monitoring",
    ],
  },
];
