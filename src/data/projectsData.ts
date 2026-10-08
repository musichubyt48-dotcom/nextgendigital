import constructionImg from "@/assets/project-construction.webp";
import sungavaImg from "@/assets/images/sungava_resort_real_1791467430511.jpg";
import infinityImg from "@/assets/images/infinity_store_real_1791467450432.jpg";
import gymImg from "@/assets/images/fitness_gym_real_1791467464759.jpg";

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
  overview?: string;
  challenge?: string;
  approach?: string;
  design?: string;
  development?: string;
  keyFeatures: string[];
  finalExperience?: string;
  deliverables: string[];
  techStack: string[];
  businessResult?: string;
  image: string;
  secondaryImage?: string;
  liveUrl: string;
  featured: boolean;
}

export const projectsData: ProjectItem[] = [
  {
    id: "sungava-resort",
    slug: "sungava-resort",
    title: "Sungava Resort & Spa",
    subtitle: "Luxury Himalayan Resort & Booking Platform",
    category: "Hospitality",
    industry: "Luxury Hospitality & Spa",
    client: "Sungava Resort & Spa",
    location: "Sikkim, India",
    year: "2026",
    shortDesc:
      "Luxury Himalayan resort website with rooms, experiences, services and booking-focused design.",
    overview:
      "A tailored hospitality digital platform showcasing rooms, suites, wellness spa therapies, and authentic Himalayan experiences with a streamlined direct booking flow.",
    keyFeatures: [
      "Direct room and suite booking flow",
      "Curated dining and wellness spa showcases",
      "Scenic resort photography and guest guides",
      "Direct WhatsApp reservation concierge",
    ],
    deliverables: [
      "Hospitality UI/UX Design",
      "Booking Enquiry System",
      "Rooms & Suites Gallery",
      "Mobile-Optimized Experience",
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    image: sungavaImg,
    liveUrl: "https://sungava-resort-spa.ai.studio/",
    featured: true,
  },
  {
    id: "infinity-store",
    slug: "infinity-store",
    title: "Infinity Store",
    subtitle: "Campus Quick-Commerce Ordering Platform",
    category: "E-Commerce",
    industry: "Quick Commerce & Retail",
    client: "Infinity Store",
    location: "India",
    year: "2026",
    shortDesc:
      "Campus quick-commerce platform designed for fast ordering and delivery of everyday essentials.",
    overview:
      "A fast, modern campus e-commerce experience providing students and residents with immediate ordering of daily snacks, drinks, stationery, and personal essentials.",
    keyFeatures: [
      "Rapid item discovery and category browsing",
      "Frictionless cart and checkout experience",
      "Instant campus delivery coordination",
      "Responsive mobile-first layout",
    ],
    deliverables: [
      "Quick-Commerce UI/UX",
      "Product Catalog System",
      "Cart & Checkout Workflow",
      "Mobile Ordering Portal",
    ],
    techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    image: infinityImg,
    liveUrl: "https://infinitystore-xi.vercel.app/",
    featured: true,
  },
  {
    id: "fitness-gym",
    slug: "fitness-gym",
    title: "Fitness Gym",
    subtitle: "Athletic Training Center & Membership Platform",
    category: "Fitness",
    industry: "Athletic Conditioning & Gym",
    client: "Fitness Gym",
    location: "India",
    year: "2026",
    shortDesc:
      "Modern fitness website focused on gym services, training and membership conversion.",
    overview:
      "A high-energy digital presence for an athletic conditioning gym showcasing workout programs, trainer profiles, membership options, and class timetables.",
    keyFeatures: [
      "Structured gym training and services directory",
      "Clear membership tiers and pricing breakdown",
      "Weekly class timetable and schedule",
      "Direct membership pass enquiry funnel",
    ],
    deliverables: [
      "Fitness Brand UI/UX",
      "Membership Tier Architecture",
      "Class Schedule Display",
      "Direct Lead Routing",
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    image: gymImg,
    liveUrl: "https://gymwebsite.musichubyt48.workers.dev/",
    featured: true,
  },
  {
    id: "ab-construction",
    slug: "ab-construction",
    title: "A B Construction",
    subtitle: "Commercial & Civil Contracting Showcase",
    category: "Construction",
    industry: "Civil & Commercial Contracting",
    client: "A B Construction",
    location: "India",
    year: "2026",
    shortDesc:
      "Professional construction website showcasing projects, services and enquiry-focused experience.",
    overview:
      "An authoritative corporate portfolio highlighting completed civil and commercial contracting projects, equipment capabilities, and direct tender and client enquiries.",
    keyFeatures: [
      "Completed projects and infrastructure showcase",
      "Contracting services and equipment specifications",
      "Safety and engineering compliance credentials",
      "Direct commercial enquiry desk",
    ],
    deliverables: [
      "Corporate Portfolio Design",
      "Projects Showcase Gallery",
      "Equipment & Services Catalog",
      "Enquiry & Tender Gateway",
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    image: constructionImg,
    liveUrl: "https://abconstrution.com/",
    featured: true,
  },
];
