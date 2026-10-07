export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: "Pricing & Scope" | "Technical & Hosting" | "Process & Delivery" | "Capabilities";
}

export const faqData: FaqItem[] = [
  {
    id: "faq-cost",
    question: "How much does a website cost?",
    answer:
      "Our transparent starter packages begin at ₹4,999 for high-impact 3-page sites, ₹14,999 for our most popular Growth business package (up to 7 pages with full SEO and conversion architecture), and ₹24,999 for comprehensive 15-page dynamic platforms. Advanced e-commerce stores, custom booking engines, or private portals are scoped individually starting from ₹29,999+. We deliver fixed, upfront proposals with zero hidden surcharges.",
    category: "Pricing & Scope",
  },
  {
    id: "faq-time",
    question: "How long does a website take?",
    answer:
      "A Starter landing page is typically completed in 5 to 7 days. Our signature Growth package takes 10 to 14 business days from kickoff to live deployment. Complex platforms featuring bespoke booking systems, custom databases, or e-commerce catalogs generally launch in 3 to 4 weeks. We operate in disciplined weekly sprints with clear milestones.",
    category: "Process & Delivery",
  },
  {
    id: "faq-domain",
    question: "Is the domain included?",
    answer:
      "We strongly recommend that you purchase and hold the legal ownership of your domain name (via Namecheap, GoDaddy, or Cloudflare Registrar) so that you maintain 100% executive control over your brand asset forever. If you need assistance, we provide complete, step-by-step guidance to help you purchase the ideal domain in 5 minutes, and we configure all DNS records, SSL certificates, and nameservers free of charge.",
    category: "Technical & Hosting",
  },
  {
    id: "faq-hosting",
    question: "Is hosting included?",
    answer:
      "Yes. We configure high-speed modern cloud hosting on enterprise global networks (such as Cloudflare Pages or Vercel). For standard business platforms, high-speed tier hosting and global SSL certificates are free and included with zero monthly server bills. For advanced full-stack databases or high-traffic e-commerce backends, we set up reliable infrastructure under your direct account with transparent, predictable costs.",
    category: "Technical & Hosting",
  },
  {
    id: "faq-maintenance",
    question: "Do you provide maintenance?",
    answer:
      "Yes. Every project includes a complimentary post-launch warranty (14 to 60 days depending on your package). Beyond the warranty, we offer ongoing Website Maintenance & Care retainers starting from ₹2,499/month. This covers 24/7 uptime monitoring, regular content updates, security patches, Google Search Console audits, and direct priority WhatsApp support whenever you need something updated.",
    category: "Capabilities",
  },
  {
    id: "faq-ecommerce",
    question: "Can you build e-commerce websites?",
    answer:
      "Yes. We develop high-speed e-commerce platforms tailored for maximum conversion and frictionless mobile checkout. We integrate native Indian payment gateways including Razorpay, Cashfree, and Paytm (enabling 1-tap UPI, cards, and net banking) as well as Stripe for international currencies. Features include automated WhatsApp order notifications, discount rules, GST invoice generation, and intuitive inventory controls.",
    category: "Capabilities",
  },
  {
    id: "faq-booking",
    question: "Can you build booking systems?",
    answer:
      "Yes. We specialize in custom reservation engines for boutique resorts, aesthetic salons, healthcare clinics, and private consultancies. Our booking architectures feature real-time slot availability, calendar synchronization with Google/Outlook, automated WhatsApp reservation confirmations to your front desk, and optional advance deposit collection via UPI.",
    category: "Capabilities",
  },
  {
    id: "faq-revisions",
    question: "How many revisions are included?",
    answer:
      "Our process includes dedicated revision rounds during both the Design Wireframe/Mockup phase and the Pre-Launch Quality Assurance phase. Because we review structural layouts and copy hierarchy together before writing code, major surprises are eliminated. We refine the visual details until you are completely satisfied and proud to represent your brand with the final outcome.",
    category: "Process & Delivery",
  },
  {
    id: "faq-ownership",
    question: "Who owns the website after delivery?",
    answer:
      "You own 100% of your website, code, digital assets, and data upon final project settlement. We do not hold client websites hostage with proprietary builder locks, recurring licensing fees, or hostage contracts. We provide full source code repositories and administrator credentials so your firm maintains absolute commercial autonomy.",
    category: "Pricing & Scope",
  },
];
