import { useMemo } from "react";
import { ArrowRight, Sparkles, Move3d } from "lucide-react";
import { BooksShowcase, BookCfg } from "@/components/ui/books-showcase";
import gymDemo from "@/assets/project-gym-demo.webp";
import salonDemo from "@/assets/project-salon-demo.webp";
import salonPhoto from "@/assets/project-salon.jpg";
import dentalDemo from "@/assets/project-dental.webp";
import constructionDemo from "@/assets/project-construction.webp";

interface Website3DShowcaseProps {
  onViewWork?: () => void;
  onSelectProject?: (slug: string) => void;
}

export function Website3DShowcase({ onViewWork, onSelectProject }: Website3DShowcaseProps) {
  const showcaseProjects: BookCfg[] = useMemo(() => {
    return [
      {
        id: "sungava-resort",
        title: "Sungava Resort & Spa",
        author: "Hospitality & Boutique Retreat",
        year: "2025",
        stars: 5,
        desc: "A bespoke direct reservation engine, suite showcases, and WhatsApp concierge for a boutique mountain retreat in West Sikkim.",
        images: {
          front: salonPhoto,
        },
        spineBg: "#0B2B26",
        spineInk: "#DAF1DE",
        backBg: "#051F20",
        backInk: "218, 241, 222",
        edge: "#DAF1DE",
        chapters: [
          "Bespoke Hospitality UI/UX",
          "Direct Room Availability System",
          "WhatsApp Concierge Routing",
          "High-Conversion Mobile Speed",
        ],
      },
      {
        id: "rawfit-gym",
        title: "Rawfit Conditioning Club",
        author: "Athletic Conditioning & Gym",
        year: "2025",
        stars: 5,
        desc: "High-octane digital platform with interactive class schedules, membership tiers, a real-time BMI calculator, and instant WhatsApp trial pass claims.",
        images: {
          front: gymDemo,
        },
        spineBg: "#163832",
        spineInk: "#8EB69B",
        backBg: "#051F20",
        backInk: "142, 182, 155",
        edge: "#8EB69B",
        chapters: [
          "Membership Tier Architecture",
          "Interactive BMI Health Calculator",
          "Filterable Class Timetable",
          "Direct WhatsApp Pass Claims",
        ],
      },
      {
        id: "looks-salon",
        title: "Looks Luxury Aesthetic Salon",
        author: "Luxury Unisex Salon & Spa",
        year: "2025",
        stars: 5,
        desc: "Digital service directory with online appointment requests, treatment menus, bridal inquiry funnels, and stylist portfolios.",
        images: {
          front: salonDemo,
        },
        spineBg: "#0B2B26",
        spineInk: "#DAF1DE",
        backBg: "#163832",
        backInk: "218, 241, 222",
        edge: "#DAF1DE",
        chapters: [
          "Curated Treatment Directory",
          "Stylist Portfolio & Booking Flow",
          "Bridal & Grooming Packages",
          "Location & Branch Locator",
        ],
      },
      {
        id: "apex-dental",
        title: "Apex Healthcare & Clinic",
        author: "Specialist Dental & Clinic Portal",
        year: "2025",
        stars: 5,
        desc: "Modern healthcare consultation platform featuring specialist schedules, patient symptom triage, and automated appointment confirmations.",
        images: {
          front: dentalDemo,
        },
        spineBg: "#163832",
        spineInk: "#8EB69B",
        backBg: "#0B2B26",
        backInk: "142, 182, 155",
        edge: "#8EB69B",
        chapters: [
          "Doctor Roster & Specialties",
          "Direct Consultation Scheduler",
          "Patient Triage Intake System",
          "Clear Tariff Transparency",
        ],
      },
      {
        id: "zenith-construction",
        title: "Zenith Infrastructure Systems",
        author: "Engineering & Construction",
        year: "2025",
        stars: 5,
        desc: "Institutional engineering contractor portfolio showcasing civil infrastructure projects, RFP bidding forms, and safety certifications.",
        images: {
          front: constructionDemo,
        },
        spineBg: "#051F20",
        spineInk: "#DAF1DE",
        backBg: "#0B2B26",
        backInk: "218, 241, 222",
        edge: "#DAF1DE",
        chapters: [
          "Heavy Civil Project Showcase",
          "Government & Tender Portals",
          "Equipment Fleet Catalog",
          "Safety & Compliance Audits",
        ],
      },
    ];
  }, []);

  return (
    <section className="py-20 md:py-32 bg-[#FFFFFF] border-t border-[#235347]/15 relative overflow-hidden">
      {/* Ambient glow discs */}
      <div className="absolute top-10 left-1/4 w-[36rem] h-[20rem] bg-[#DAF1DE]/60 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/4 w-[30rem] h-[20rem] bg-[#8EB69B]/15 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[#235347]/15">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#DAF1DE] border border-[#8EB69B]/30 px-3.5 py-1 text-xs font-mono uppercase tracking-widest text-[#0B2B26]">
              <Move3d size={13} className="text-[#235347]" />
              <span>04 / Interactive 3D Showcase</span>
            </div>
            <h2 className="text-fluid-section font-display font-bold uppercase text-[#0B2B26] tracking-tight">
              Explore What <br className="hidden sm:inline" />
              <span className="underline decoration-[#8EB69B] decoration-4 underline-offset-8">
                We Build.
              </span>
            </h2>
            <p className="text-sm sm:text-base font-sans text-[#235347] leading-relaxed">
              Drag, rotate, and explore real digital experiences engineered for commercial
              businesses. Every project is built from scratch with custom workflows and zero generic
              templates.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#235347]/15 text-xs font-mono text-[#0B2B26] shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[#8EB69B] animate-pulse" />
              <span>Click & Drag in 3D</span>
            </div>
            {onViewWork && (
              <button
                type="button"
                onClick={onViewWork}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#235347] text-[#FFFFFF] font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#163832] transition-colors shadow-sm cursor-pointer"
              >
                <span>Full Archive</span>
                <ArrowRight size={14} />
              </button>
            )}
          </div>
        </div>

        {/* 3D Showcase Canvas Container */}
        <div className="mt-8 rounded-3xl bg-white border border-[#235347]/20 shadow-card overflow-hidden relative">
          <div className="h-[620px] sm:h-[680px] w-full relative">
            <BooksShowcase
              books={showcaseProjects}
              heroTitle="JIVDEV"
              navTitle="Selected Platforms"
              showNav={true}
              showDetailPanel={true}
              showCarousel={true}
              className="min-h-0 h-full w-full"
              themeColors={{
                bg: "#FFFFFF",
                bgLight: "#FFFFFF",
                bgDark: "#0B2B26",
                foregroundLight: "#0B2B26",
                foregroundDark: "#DAF1DE",
                navy: "#051F20",
                pink: "#8EB69B",
                cream: "#DAF1DE",
                lav: "#163832",
                peri: "#0B2B26",
              }}
            />
          </div>

          {/* Quick instructions banner underneath */}
          <div className="px-6 py-3 bg-[#DAF1DE]/40 border-t border-[#235347]/15 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#235347]">
            <div className="flex items-center gap-2">
              <Sparkles size={13} className="text-[#235347]" />
              <span>
                Interactive 3D WebGL · Mouse tilt, drag to spin, click to inspect architecture
              </span>
            </div>
            <div className="flex items-center gap-4 text-[0.6875rem] font-bold text-[#0B2B26]">
              <span>01 Sungava Resort</span>
              <span>·</span>
              <span>02 Rawfit Gym</span>
              <span>·</span>
              <span>03 Looks Salon</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Website3DShowcase;
