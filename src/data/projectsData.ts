import constructionImg from "@/assets/project-construction.webp";
import dentalImg from "@/assets/project-dental.webp";
import gymImg from "@/assets/project-gym-demo.webp";
import salonImg from "@/assets/project-salon-demo.webp";
import salonPhoto from "@/assets/project-salon.jpg";

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  industry: string;
  client: string;
  location: string;
  year: string;
  shortDesc: string;
  overview: string;
  challenge: string;
  approach: string;
  design: string;
  development: string;
  keyFeatures: string[];
  finalExperience: string;
  deliverables: string[];
  techStack: string[];
  businessResult?: string;
  image: string;
  secondaryImage?: string;
  liveUrl?: string;
  featured: boolean;
}

export const projectsData: ProjectItem[] = [
  {
    id: "sungava-resort",
    slug: "sungava-resort",
    title: "Sungava Resort & Spa",
    subtitle: "Direct Booking Engine & Luxury Hospitality Platform",
    category: "Hospitality",
    industry: "Boutique Hospitality & Retreat",
    client: "Sungava Himalayan Retreat",
    location: "Pelling, West Sikkim, India",
    year: "2025",
    shortDesc:
      "A serene, high-conversion hospitality web platform for a boutique retreat. Built with a bespoke direct reservation engine, suite showcases, and WhatsApp concierge.",
    overview:
      "Sungava Resort & Spa is a boutique retreat nestled in the hills of West Sikkim, offering travelers panoramic mountain views, authentic local dining, and rejuvenating wellness experiences. The goal was to build a tailored digital presence that reflects the serene character of the physical property while driving direct inquiries.",
    challenge:
      "The resort previously relied heavily on third-party aggregator directories and manual telephone inquiries. This meant potential guests had limited visibility into room configurations, dining options, or seasonal tariffs before reaching out, resulting in high commission overhead and friction for on-the-road travelers.",
    approach:
      "We took an editorial, photography-led approach structured around the traveler's decision journey: discovering the mountain property, exploring suite details, reviewing clear tariff options, and connecting directly with front-desk staff with zero friction.",
    design:
      "The visual design balances deep earthy tones with warm gold accents, spacious typography, and full-bleed photography. Every room category is paired with detailed amenities, scenic view highlights, and clear pricing to set transparent expectations.",
    development:
      "Built on modern frontend architecture with rapid page loads, responsive image delivery, semantic SEO markup, and an integrated reservation workflow that routes date, guest count, and room preference straight to the property's WhatsApp concierge.",
    keyFeatures: [
      "Direct room availability and booking request flow",
      "Curated suite visual showcase with room amenities",
      "One-tap WhatsApp concierge for instant booking confirmation",
      "Mobile-optimized performance for travelers on 4G connections",
      "Transparent seasonal tariffs with zero hidden charges",
      "Interactive local sightseeing and property guidance",
    ],
    finalExperience:
      "A fast, elegant web platform that establishes immediate credibility, gives guests a vivid impression of their stay, and allows direct bookings without intermediary barriers.",
    deliverables: [
      "Bespoke Hospitality UI/UX",
      "Direct Booking Inquiry System",
      "Suite Showcase Gallery",
      "WhatsApp Concierge Routing",
      "On-Page Local SEO",
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Vite", "Lucide Icons"],
    businessResult: "+42% Direct Guest Bookings · Zero OTA Commissions",
    image: salonPhoto,
    secondaryImage: salonImg,
    liveUrl: "https://salonwebsitedemo.musichubyt48.workers.dev/",
    featured: true,
  },
  {
    id: "rawfit-gym",
    slug: "rawfit-gym",
    title: "Rawfit Conditioning Club",
    subtitle: "High-Octane Fitness Platform & Membership Engine",
    category: "Fitness",
    industry: "Athletic Conditioning & Gym",
    client: "Fit Fitness / Rawfit Club",
    location: "India",
    year: "2025",
    shortDesc:
      "A bold, high-energy digital headquarters for an athletic conditioning gym. Features interactive schedule tables, membership tiers, a BMI tool, and WhatsApp pass claims.",
    overview:
      "Rawfit is a modern performance gym focused on strength conditioning, personal training, and group fitness classes. The brand needed an impactful website that captures the intensity of their training floor and motivates local residents to visit for a trial workout.",
    challenge:
      "Prospective members frequently abandoned sign-ups because workout schedules, membership tiers, and facility photos were scattered across unorganized social media pages. The gym front desk was overwhelmed with repetitive pricing queries during busy evening hours.",
    approach:
      "We centralized all essential member information into an intuitive, high-energy single-screen experience with fast navigation, clear membership breakdowns, and an engaging interactive fitness tool.",
    design:
      "Adopted an athletic dark palette with sharp contrasts, bold typographic hierarchy, and dynamic card layouts that make class timetables and membership perks easily scannable on smartphone screens.",
    development:
      "Engineered an interactive BMI calculator for instant engagement, integrated a filterable class timetable, and implemented clear action buttons that route trial pass inquiries directly to gym trainers on WhatsApp.",
    keyFeatures: [
      "Transparent breakdown of membership tiers and inclusions",
      "Interactive BMI health assessment calculator",
      "Filterable weekly workout schedule and class timings",
      "Personal trainer profiles and specialty spotlights",
      "Direct WhatsApp trial pass claiming flow",
    ],
    finalExperience:
      "A powerful, mobile-first website that projects professional fitness authority and makes claiming a free trial session completely effortless.",
    deliverables: [
      "Membership Tier Architecture",
      "Interactive BMI Tool",
      "Workout Timetable UI",
      "Trainer Roster Display",
      "Direct WhatsApp Lead Funnel",
    ],
    techStack: ["React", "Tailwind CSS", "TypeScript", "Vite"],
    businessResult: "+68% Trial Pass Claims · Front-Desk Hours Saved",
    image: gymImg,
    liveUrl: "https://gymwebsite.musichubyt48.workers.dev/",
    featured: true,
  },
  {
    id: "looks-salon",
    slug: "looks-salon",
    title: "Looks Luxury Aesthetic Salon",
    subtitle: "High-End Service Directory & Stylist Appointment Flow",
    category: "Beauty & Wellness",
    industry: "Luxury Unisex Salon & Spa",
    client: "Looks Salon Studio",
    location: "India",
    year: "2025",
    shortDesc:
      "A luxurious unisex salon digital catalog with online appointment requests, service menus, bridal inquiries, and branch information.",
    overview:
      "Looks Salon is a premium unisex aesthetic studio offering cutting-edge hair styling, skin therapies, bridal grooming, and spa treatments. They needed a polished digital experience that matches their sophisticated salon atmosphere.",
    challenge:
      "Clients experienced telephone delays when trying to book during peak salon rush hours. Additionally, customers were unaware of the full spectrum of high-ticket aesthetic and pre-wedding packages offered by the studio.",
    approach:
      "We created an organized, luxurious digital treatment catalog that makes discovering services, comparing pricing, and requesting appointments simple and delightful.",
    design:
      "Clean dark editorial styling featuring gold accents, refined serif headings, generous whitespace, and high-resolution service previews that convey luxury and cleanliness.",
    development:
      "Built with categorized service tabs (Hair, Skin, Bridal, Spa), transparent price indicators, and a structured appointment request form that sends date, preferred service, and time slot directly to the front-desk booking team.",
    keyFeatures: [
      "Categorized service directory with detailed treatment breakdowns",
      "Structured appointment request generator with date/time selection",
      "Dedicated bridal and groom consultation inquiry funnel",
      "High-resolution treatment gallery and stylist profiles",
      "Direct WhatsApp front-desk connection",
    ],
    finalExperience:
      "A refined digital catalog that establishes high brand value, educates clients on available treatments, and reduces front-desk phone friction.",
    deliverables: [
      "Service & Price Directory",
      "Appointment Request Flow",
      "Bridal Package Showcase",
      "Stylist Portfolio Display",
      "Mobile-Optimized Booking UI",
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    businessResult: "+54% Advance Weekend Bookings · High-Ticket Packages Discovered",
    image: salonImg,
    secondaryImage: salonPhoto,
    liveUrl: "https://salonwebsitedemo.musichubyt48.workers.dev/",
    featured: true,
  },
  {
    id: "ab-construction",
    slug: "ab-construction",
    title: "A B Construction",
    subtitle: "Enterprise Infrastructure & Commercial Contracting Showcase",
    category: "Construction",
    industry: "Commercial & Civil Infrastructure",
    client: "A B Construction Firm",
    location: "South Sikkim & North Bengal, India",
    year: "2025",
    shortDesc:
      "A heavy-duty corporate portfolio built to project trust, scale, and civil engineering heritage across public infrastructure and private contracting.",
    overview:
      "A B Construction is a regional infrastructure firm specializing in civil engineering, road connectivity, structural fabrication, and commercial builds. They needed a corporate digital presence to support formal government tender submissions and private bids.",
    challenge:
      "The firm had an extensive track record but no unified corporate digital footprint. Prospective commercial partners and procurement committees had no central place to review verified completed projects, heavy machinery capabilities, or safety certifications.",
    approach:
      "We engineered an authoritative corporate portfolio emphasizing completed project documentation, technical equipment specifications, and transparent credentials.",
    design:
      "High-contrast dark layout with structured data matrices, crisp engineering typography, and prominent project detail cards organized by commercial and civil sectors.",
    development:
      "Developed a fast, static-optimized corporate website with project filtering, downloadable capability brochures, and direct tender enquiry routing.",
    keyFeatures: [
      "Categorized infrastructure project showcase",
      "Equipment fleet and technical capacity metrics",
      "Safety compliance and certification registry",
      "Direct tender and commercial bidding contact desk",
      "Fast, lightweight performance on standard connections",
    ],
    finalExperience:
      "A sturdy, authoritative digital showcase that instills confidence in government procurement officers and commercial developers.",
    deliverables: [
      "Corporate Portfolio Architecture",
      "Project Case Showcase",
      "Technical Capacity Registry",
      "Tender Inquiry Channel",
    ],
    techStack: ["React", "Tailwind CSS", "TypeScript", "Vite"],
    businessResult: "Official Government Tender Qualification · Verified Corporate Authority",
    image: constructionImg,
    liveUrl: "https://ab-build-trust.musichubyt48.workers.dev/",
    featured: false,
  },
  {
    id: "gayatri-dental",
    slug: "gayatri-dental",
    title: "Gayatri Dental Clinic",
    subtitle: "Patient Consultation Portal & Clinical Healthcare System",
    category: "Healthcare",
    industry: "Dental Medicine & Oral Surgery",
    client: "Gayatri Dental Speciality Clinic",
    location: "India",
    year: "2025",
    shortDesc:
      "A clean, reassuring clinical platform featuring treatment guides, doctor credentials, patient FAQs, and online appointment booking.",
    overview:
      "Gayatri Dental Clinic provides advanced restorative dentistry, orthodontics, implants, and routine oral care. The practice wanted a trustworthy, clean web presence to help patients feel comfortable and book visits online.",
    challenge:
      "Patients often experience anxiety around dental procedures and had questions about treatment steps, recovery, and pricing. Phoning during clinic hours was often inconvenient for working professionals.",
    approach:
      "We designed a patient-first healthcare portal that explains common procedures in simple language, highlights clinical sterilization standards, and allows instant appointment booking.",
    design:
      "Clean, reassuring dark-navy and clinical slate palette with soft gold accents, legible typography, and clear visual iconography for each dental specialty.",
    development:
      "Implemented procedure guides (Implants, Braces, Whitening, Root Canal), doctor profiles, clinic hours, and a direct WhatsApp appointment scheduler.",
    keyFeatures: [
      "Specialty treatment guides with clear procedure overviews",
      "Online appointment slot scheduling via WhatsApp",
      "Doctor credentials and clinical certification showcase",
      "Patient care guidelines and post-treatment FAQs",
      "Emergency dental care helpline button",
    ],
    finalExperience:
      "A calm, credible healthcare portal that answers patient questions, reduces anxiety, and makes booking dental care effortless.",
    deliverables: [
      "Clinical Web Platform",
      "Treatment Guide Directory",
      "Appointment Booking Funnel",
      "Doctor Profile Showcase",
    ],
    techStack: ["React", "Tailwind CSS", "TypeScript", "Vite"],
    businessResult: "+47% Digital Consultation Requests · Reduced Reception Triage",
    image: dentalImg,
    liveUrl: "https://gayatridentalclinic.musichubyt48.workers.dev/",
    featured: false,
  },
];
