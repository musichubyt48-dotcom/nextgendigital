import { useEffect } from "react";

const SITE_URL = "https://nextgendigital.services";
const ORG_NAME = "Nextgen Digital";
const ORG_DESC =
  "Nextgen Digital is a premium website development agency founded by Ashutosh Kumar Srivastava, building modern, SEO-friendly websites for local businesses in India and worldwide.";
const FOUNDER = "Ashutosh Kumar Srivastava";
const PHONE = "+91 8509332038";
const EMAIL = "demoemail@example.com";

const logoUrl = `${SITE_URL}/logo.svg`;
const logoObject = {
  "@type": "ImageObject",
  url: logoUrl,
  contentUrl: logoUrl,
  width: { "@type": "QuantitativeValue", value: 512, unitCode: "PX" },
  height: { "@type": "QuantitativeValue", value: 512, unitCode: "PX" },
  caption: `${ORG_NAME} logo`,
};

const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: ORG_NAME,
  alternateName: "Nextgen Digital Studio",
  url: SITE_URL,
  logo: logoObject,
  image: logoObject,
  description: ORG_DESC,
  foundingDate: "2024",
  founder: {
    "@type": "Person",
    name: FOUNDER,
    jobTitle: "Founder & Web Developer",
    url: `${SITE_URL}/#about`,
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer support",
      telephone: PHONE,
      email: EMAIL,
      areaServed: ["IN", "Global"],
      availableLanguage: ["en"],
    },
  ],
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
    addressRegion: "India",
  },
  sameAs: [
    "https://wa.me/918509332038",
  ],
};

const website = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: ORG_NAME,
  description: ORG_DESC,
  inLanguage: "en",
  publisher: { "@id": `${SITE_URL}/#organization` },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_URL}/?s={search_term_string}`,
      actionPlatform: [
        "https://schema.org/DesktopWebApplication",
        "https://schema.org/MobileWebApplication",
      ],
    },
    "query-input": "required name=search_term_string",
  },
};

const professionalService = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#professional-service`,
  name: ORG_NAME,
  description: ORG_DESC,
  url: SITE_URL,
  image: logoObject,
  priceRange: "₹₹",
  telephone: PHONE,
  email: EMAIL,
  areaServed: ["IN", "Global"],
  serviceType: [
    "Website Design",
    "Website Development",
    "SEO Optimization",
    "UI/UX Design",
    "AI Website Development",
  ],
  provider: { "@id": `${SITE_URL}/#organization` },
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
    addressRegion: "India",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
    ],
    opens: "09:00",
    closes: "18:00",
  },
};

const services = [
  {
    "@type": "Service",
    "@id": `${SITE_URL}/#service-website-design`,
    name: "Website Design",
    description:
      "Premium, modern interfaces designed pixel by pixel — built to convert, not just look pretty.",
    provider: { "@id": `${SITE_URL}/#organization` },
    serviceType: "Website Design",
    areaServed: ["IN", "Global"],
    url: `${SITE_URL}/#services`,
  },
  {
    "@type": "Service",
    "@id": `${SITE_URL}/#service-fast-builds`,
    name: "Fast Builds",
    description:
      "Modern tools, quick turnaround — without cutting corners on quality.",
    provider: { "@id": `${SITE_URL}/#organization` },
    serviceType: "Website Development",
    areaServed: ["IN", "Global"],
    url: `${SITE_URL}/#services`,
  },
  {
    "@type": "Service",
    "@id": `${SITE_URL}/#service-business-portfolios`,
    name: "Business Portfolios",
    description:
      "Professional sites that establish authority and turn visitors into qualified leads.",
    provider: { "@id": `${SITE_URL}/#organization` },
    serviceType: "Business Website Development",
    areaServed: ["IN", "Global"],
    url: `${SITE_URL}/#services`,
  },
  {
    "@type": "Service",
    "@id": `${SITE_URL}/#service-custom-websites`,
    name: "Custom Websites",
    description:
      "Tailored web experiences built around your brand, workflow, and customers.",
    provider: { "@id": `${SITE_URL}/#organization` },
    serviceType: "Custom Website Development",
    areaServed: ["IN", "Global"],
    url: `${SITE_URL}/#services`,
  },
  {
    "@type": "Service",
    "@id": `${SITE_URL}/#service-seo`,
    name: "SEO Optimization",
    description:
      "On-page SEO baked in from day one so Google can actually find you.",
    provider: { "@id": `${SITE_URL}/#organization` },
    serviceType: "Search Engine Optimization",
    areaServed: ["IN", "Global"],
    url: `${SITE_URL}/#services`,
  },
  {
    "@type": "Service",
    "@id": `${SITE_URL}/#service-uiux`,
    name: "Modern UI/UX",
    description:
      "Intuitive experiences that feel premium and keep customers coming back.",
    provider: { "@id": `${SITE_URL}/#organization` },
    serviceType: "UI/UX Design",
    areaServed: ["IN", "Global"],
    url: `${SITE_URL}/#services`,
  },
];

const breadcrumbs = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": `${SITE_URL}/#breadcrumbs`,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: SITE_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "About",
      item: `${SITE_URL}/#about`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Services",
      item: `${SITE_URL}/#services`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Projects",
      item: `${SITE_URL}/#projects`,
    },
    {
      "@type": "ListItem",
      position: 5,
      name: "Contact",
      item: `${SITE_URL}/#contact`,
    },
  ],
};

const faqs = [
  {
    q: "What makes Nextgen Digital a premium website development agency?",
    a: "Every Nextgen Digital website is hand-crafted rather than templated. We combine premium design, modern frameworks like React and Next.js, AI-powered features and on-page SEO to deliver business websites that feel expensive and perform under real traffic.",
  },
  {
    q: "How much does a business website cost in India?",
    a: "Pricing depends on scope, but most premium business websites we build fall between an affordable starter package and a fully custom multi-page build. We share a clear fixed quote after the first discovery call, with no hidden fees.",
  },
  {
    q: "Do you offer AI website development?",
    a: "Yes. We integrate AI features such as smart chat assistants, content generation, personalised search and workflow automation into websites where they genuinely help your business — never as a gimmick.",
  },
  {
    q: "How long does it take to build a website?",
    a: "A typical premium business website from Nextgen Digital takes two to four weeks from kickoff to launch, depending on how quickly content, images and feedback are shared.",
  },
  {
    q: "Are your websites SEO friendly?",
    a: "Absolutely. As a modern website design company, we ship every project with semantic HTML, structured data, optimised Core Web Vitals, XML sitemaps and clean canonical URLs so search engines can index your pages correctly.",
  },
  {
    q: "Do you work with clients outside India?",
    a: "Yes. While we are proudly a website development agency based in India, most of our work is delivered fully online, and we regularly collaborate with founders across Asia, the Middle East, Europe and North America.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${SITE_URL}/#faq`,
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const webPage = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}/#webpage`,
  url: SITE_URL,
  name: `${ORG_NAME} — Premium Websites for Local Businesses`,
  description: ORG_DESC,
  isPartOf: { "@id": `${SITE_URL}/#website` },
  about: { "@id": `${SITE_URL}/#organization` },
  inLanguage: "en",
  primaryImageOfPage: logoObject,
  breadcrumb: { "@id": `${SITE_URL}/#breadcrumbs` },
};

const aboutPage = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": `${SITE_URL}/#about-page`,
  url: `${SITE_URL}/#about`,
  name: `About ${ORG_NAME}`,
  description: `Meet Ashutosh Kumar Srivastava, founder of ${ORG_NAME}.`,
  isPartOf: { "@id": `${SITE_URL}/#website` },
  mainEntity: { "@id": `${SITE_URL}/#organization` },
  inLanguage: "en",
};

const contactPage = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${SITE_URL}/#contact-page`,
  url: `${SITE_URL}/#contact`,
  name: `Contact ${ORG_NAME}`,
  description: "Reach out to start a premium website project for your business.",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  mainEntity: {
    "@type": "Organization",
    name: ORG_NAME,
    telephone: PHONE,
    email: EMAIL,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      telephone: PHONE,
      email: EMAIL,
      availableLanguage: ["en"],
    },
  },
  inLanguage: "en",
};

const collectionPage = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${SITE_URL}/#projects-page`,
  url: `${SITE_URL}/#projects`,
  name: `Projects by ${ORG_NAME}`,
  description:
    "A collection of premium website projects built by Nextgen Digital for local businesses.",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  inLanguage: "en",
  hasPart: [
    {
      "@type": "CreativeWork",
      name: "Dental Clinic Website",
      url: `${SITE_URL}/#projects`,
    },
    {
      "@type": "CreativeWork",
      name: "Gym & Fitness Website",
      url: `${SITE_URL}/#projects`,
    },
    {
      "@type": "CreativeWork",
      name: "Salon & Spa Website",
      url: `${SITE_URL}/#projects`,
    },
    {
      "@type": "CreativeWork",
      name: "Construction Company Website",
      url: `${SITE_URL}/#projects`,
    },
  ],
};

const imageObject = {
  "@context": "https://schema.org",
  "@type": "ImageObject",
  "@id": `${SITE_URL}/#logo`,
  url: logoUrl,
  contentUrl: logoUrl,
  encodingFormat: "image/svg+xml",
  width: { "@type": "QuantitativeValue", value: 512, unitCode: "PX" },
  height: { "@type": "QuantitativeValue", value: 512, unitCode: "PX" },
  caption: `${ORG_NAME} logo`,
  representativeOfPage: true,
  license: `${SITE_URL}/`,
  acquireLicensePage: `${SITE_URL}/#contact`,
};

const articleTemplate = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": `${SITE_URL}/blog/sample-article#article`,
  headline: "Sample Article",
  description: "Template article schema for future Nextgen Digital blog posts.",
  image: logoObject,
  author: {
    "@type": "Person",
    name: FOUNDER,
    url: `${SITE_URL}/#about`,
  },
  publisher: { "@id": `${SITE_URL}/#organization` },
  datePublished: "2026-01-01",
  dateModified: "2026-01-01",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${SITE_URL}/blog/sample-article`,
  },
  inLanguage: "en",
  articleSection: "Web Development",
  keywords: ["website development", "SEO", "React", "Next.js"],
};

const graph = {
  "@context": "https://schema.org",
  "@graph": [
    organization,
    website,
    professionalService,
    ...services,
    breadcrumbs,
    faqSchema,
    webPage,
    aboutPage,
    contactPage,
    collectionPage,
    imageObject,
    articleTemplate,
  ],
};

export function StructuredData() {
  useEffect(() => {
    const id = "nextgen-structured-data";
    if (document.getElementById(id)) return;
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = id;
    script.textContent = JSON.stringify(graph);
    document.head.appendChild(script);
    return () => {
      const el = document.getElementById(id);
      if (el) el.remove();
    };
  }, []);

  return null;
}
