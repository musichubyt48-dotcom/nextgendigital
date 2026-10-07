import { useState, useRef } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Filter,
  CheckCircle2,
  TrendingUp,
  Sparkles,
  Layers,
  ChevronLeft,
  ChevronRight,
  Globe,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { projectsData, ProjectItem } from "@/data/projectsData";
import { MagneticButton } from "@/components/motion/MagneticButton";

interface WorkPageProps {
  onOpenCaseStudy: (project: ProjectItem) => void;
  onNavigate: (path: string) => void;
}

export function WorkPage({ onOpenCaseStudy, onNavigate }: WorkPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [panoramicIndex, setPanoramicIndex] = useState(0);
  const horizontalScrollRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const categories = [
    "All",
    "Hospitality",
    "E-Commerce",
    "Fitness",
    "Construction",
  ];

  const featuredProjects = projectsData.filter((p) => p.featured);

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((p) =>
          p.category.toLowerCase().includes(selectedCategory.toLowerCase()),
        );

  const handleScrollPanoramic = (direction: "left" | "right") => {
    if (!horizontalScrollRef.current) return;
    const scrollAmount = 480;
    horizontalScrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full flex flex-col bg-[#FFFFFF]">
      {/* 1. Hero */}
      <section className="pt-24 pb-10 sm:pt-32 md:pt-40 md:pb-24 border-b border-[#00D285]/15 relative grain-overlay">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="max-w-4xl space-y-4 sm:space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-[#00D285]/10 border border-[#00D285]/25 px-3 sm:px-4 py-1 sm:py-1.5 text-[11px] sm:text-xs font-mono uppercase tracking-widest text-[#00D285]">
                <Layers size={13} className="text-[#00D285]" />
                <span>Production Systems & Client Platforms</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="text-2xl sm:text-4xl md:text-fluid-hero font-display font-extrabold uppercase text-[#041510] tracking-tight leading-tight"
            >
              Commercial <br />
              <span className="underline decoration-[#00D285] decoration-4 underline-offset-8">
                Client Work.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.16, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="text-sm sm:text-xl md:text-2xl font-sans text-[#0A241D]/85 leading-relaxed max-w-3xl"
            >
              Production websites engineered for real businesses. From luxury mountain retreats and
              athletic conditioning clubs to clinical patient portals — explore our live commercial
              deployments.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* 2. Selected Projects Showcase (Horizontal Panoramic Carousel) */}
      <section className="py-10 sm:py-16 md:py-24 border-b border-[#00D285]/20 bg-[#06211A] text-[#FFFFFF] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header & Controls */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 pb-6 sm:pb-10 border-b border-[#00D285]/20">
            <div className="space-y-2 sm:space-y-3">
              <div className="inline-flex items-center gap-1.5 sm:gap-2 font-mono text-[10px] sm:text-xs uppercase tracking-widest text-[#00D285] bg-[#092C22] border border-[#00D285]/30 px-3 sm:px-3.5 py-0.5 sm:py-1 rounded-full font-bold">
                <Sparkles size={12} className="text-[#00D285]" />
                <span>Featured Panoramic Showcase</span>
              </div>
              <h2 className="text-xl sm:text-4xl font-display font-bold uppercase tracking-tight text-[#FFFFFF]">
                Flagship Deployments
              </h2>
              <p className="text-xs sm:text-sm text-[#E8F7EE]/80 font-sans max-w-xl">
                Explore in-depth architectural breakdowns of our selected production systems with
                verified business results.
              </p>
            </div>

            {/* Carousel navigation arrows */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => handleScrollPanoramic("left")}
                aria-label="Scroll left"
                className="h-9 w-9 sm:h-11 sm:w-11 rounded-full border border-[#00D285]/40 flex items-center justify-center text-[#E8F7EE] hover:bg-[#00D285] hover:text-[#041510] transition-colors cursor-pointer"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                onClick={() => handleScrollPanoramic("right")}
                aria-label="Scroll right"
                className="h-9 w-9 sm:h-11 sm:w-11 rounded-full bg-[#00D285] text-[#041510] flex items-center justify-center hover:bg-[#00e599] transition-colors cursor-pointer shadow-[0_0_12px_rgba(0,210,133,0.35)]"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* Panoramic Scroll Track */}
          <div
            ref={horizontalScrollRef}
            className="mt-6 sm:mt-8 flex gap-4 sm:gap-8 overflow-x-auto pb-6 sm:pb-8 pt-2 sm:pt-4 no-scrollbar snap-x snap-mandatory"
          >
            {featuredProjects.map((project, idx) => (
              <div
                key={project.id}
                onClick={() => onOpenCaseStudy(project)}
                className="group shrink-0 w-[88vw] sm:w-[580px] lg:w-[680px] rounded-2xl sm:rounded-3xl bg-[#041510] border border-[#00D285]/20 hover:border-[#00D285]/60 p-4 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-xl hover:shadow-[0_16px_40px_rgba(0,0,0,0.5)] snap-start cursor-pointer select-none"
              >
                {/* Top Row: Meta & Industry */}
                <div className="flex items-center justify-between gap-4 pb-3 sm:pb-4 border-b border-[#00D285]/15">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-[#041510] bg-[#00D285] px-2.5 py-0.5 rounded-md shadow-[0_0_8px_rgba(0,210,133,0.4)]">
                      0{idx + 1}
                    </span>
                    <span className="font-mono text-xs text-[#E8F7EE] font-bold uppercase tracking-wider">
                      {project.industry}
                    </span>
                  </div>

                  <span className="font-mono text-xs text-[#A4CBB7]">{project.year}</span>
                </div>

                {/* Project Panoramic Image Preview with Hover Zoom */}
                <div className="relative aspect-[16/9] rounded-xl sm:rounded-2xl overflow-hidden my-4 sm:my-6 bg-[#041510] border border-[#00D285]/20">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#041510]/90 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {project.liveUrl && (
                    <div className="absolute bottom-2.5 sm:bottom-3 right-2.5 sm:right-3 inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-[#041510]/85 backdrop-blur-md border border-[#00D285]/30 text-[10px] sm:text-[0.6875rem] font-mono text-[#00D285]">
                      <Globe size={11} className="text-[#00D285]" />
                      <span>Live Platform</span>
                    </div>
                  )}
                </div>

                {/* Content Block */}
                <div className="space-y-3 sm:space-y-4">
                  <h3 className="font-display font-extrabold text-xl sm:text-3xl text-[#FFFFFF] group-hover:text-[#00D285] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-base text-[#A4CBB7] font-sans line-clamp-2">
                    {project.shortDesc}
                  </p>

                  {/* Business Results Highlight */}
                  {project.businessResult && (
                    <div className="p-2.5 sm:p-3.5 rounded-xl bg-[#092C22] border border-[#00D285]/30 flex items-center gap-2 text-xs font-mono text-[#00D285]">
                      <TrendingUp size={14} className="shrink-0 text-[#00D285]" />
                      <span className="font-bold truncate">{project.businessResult}</span>
                    </div>
                  )}

                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-1.5 pt-1 sm:pt-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md bg-[#092C22] border border-[#00D285]/20 text-[10px] sm:text-[0.6875rem] font-mono text-[#E8F7EE]/90"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Link */}
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="pt-3 sm:pt-4 border-t border-[#00D285]/15 flex items-center justify-between text-xs font-mono font-bold text-[#00D285] hover:text-white transition-colors"
                  >
                    <span className="flex items-center gap-1.5 text-[11px] sm:text-xs">
                      <span>VISIT WEBSITE</span>
                      <ArrowRight
                        size={13}
                        className="group-hover:translate-x-1.5 transition-transform"
                      />
                    </span>
                    <ArrowUpRight size={15} className="text-[#00D285]" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Filterable Client Portfolio Grid */}
      <section className="py-12 sm:py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Filter Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 pb-6 sm:pb-10 border-b border-[#00D285]/15">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs uppercase tracking-widest text-[#041510] font-bold">
              Directory Archive ({filteredProjects.length})
            </span>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 no-scrollbar">
            <span className="text-xs font-mono font-bold uppercase text-[#041510] mr-1 hidden sm:flex items-center gap-1 shrink-0">
              <Filter size={12} className="text-[#00D285]" />
              <span>Filter:</span>
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-xs font-mono transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                  selectedCategory === cat
                    ? "bg-[#00D285] text-[#041510] font-bold shadow-[0_0_12px_rgba(0,210,133,0.35)] scale-105"
                    : "bg-white text-[#041510] border border-[#00D285]/20 hover:bg-[#00D285]/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 lg:gap-10">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{
                opacity: 0,
                y: shouldReduceMotion ? 0 : 28,
                scale: shouldReduceMotion ? 1 : 0.98,
              }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: idx * 0.07, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => onOpenCaseStudy(project)}
              className="group rounded-2xl sm:rounded-3xl bg-white border border-[#00D285]/20 shadow-card overflow-hidden cursor-pointer hover:shadow-float hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Showcase with Masked Reveal & Hover Zoom */}
              <div className="relative aspect-[16/10] bg-[#041510] overflow-hidden">
                <motion.img
                  initial={{ scale: shouldReduceMotion ? 1 : 1.08 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#041510]/85 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 flex items-center gap-1.5 sm:gap-2">
                  <span className="font-mono text-[11px] sm:text-xs font-bold text-[#041510] bg-[#00D285] px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full uppercase tracking-wider shadow-sm">
                    0{idx + 1}
                  </span>
                  <span className="font-mono text-[10px] sm:text-xs font-semibold text-[#E8F7EE] bg-[#041510]/80 backdrop-blur-md px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full uppercase tracking-wider border border-[#00D285]/30">
                    {project.category}
                  </span>
                </div>

                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 flex items-center justify-between text-[11px] sm:text-xs font-mono text-[#E8F7EE]">
                  <span>{project.location}</span>
                  <span className="h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-[#00D285] group-hover:text-[#041510] transition-all duration-200">
                    <ArrowUpRight
                      size={15}
                      className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                    />
                  </span>
                </div>
              </div>

              {/* Card Meta & Description */}
              <div className="p-4 sm:p-7 md:p-8 flex flex-col justify-between flex-1 space-y-3 sm:space-y-5">
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-[#00D285]">
                    <span className="font-bold uppercase tracking-wider text-[#041510]">
                      {project.industry}
                    </span>
                    <span className="text-[#0A241D]/60">{project.year}</span>
                  </div>

                  <h3 className="font-display font-bold text-xl sm:text-3xl text-[#041510] tracking-tight group-hover:text-[#00D285] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#0A241D]/80 font-sans leading-relaxed line-clamp-3">
                    {project.shortDesc}
                  </p>

                  {/* Business Result pill */}
                  {project.businessResult && (
                    <div className="p-2 sm:p-2.5 rounded-xl bg-[#F4FAF6] border border-[#00D285]/25 flex items-center gap-2 text-[11px] sm:text-xs font-mono text-[#041510]">
                      <TrendingUp size={13} className="shrink-0 text-[#00D285]" />
                      <span className="font-semibold truncate">{project.businessResult}</span>
                    </div>
                  )}

                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-1 sm:gap-1.5 pt-1 sm:pt-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-md bg-[#F4FAF6] border border-[#00D285]/15 text-[10px] sm:text-[0.6875rem] font-mono text-[#041510] group-hover:border-[#00D285]/40 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-3 sm:pt-4 border-t border-[#00D285]/15 flex items-center justify-between">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-xs font-mono font-bold uppercase tracking-wider text-[#041510] hover:text-[#00D285] inline-flex items-center gap-1.5 transition-colors"
                  >
                    <span>VISIT WEBSITE</span>
                    <ArrowRight
                      size={13}
                      className="group-hover:translate-x-1.5 transition-transform"
                    />
                  </a>
                  {project.liveUrl && (
                    <span className="text-[10px] sm:text-[0.6875rem] font-mono text-[#00D285] font-semibold">
                      Live Platform →
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. Bottom CTA */}
      <section className="py-12 sm:py-20 bg-[#041510] text-[#FFFFFF] text-center border-t border-[#00D285]/20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-4 sm:space-y-6">
          <h2 className="text-xl sm:text-3xl md:text-fluid-section font-display font-extrabold uppercase text-[#FFFFFF]">
            Ready to Build Yours?
          </h2>
          <p className="text-xs sm:text-base text-[#E8F7EE]/80 font-sans">
            Every business project is architected from scratch with complete asset ownership. Tell
            us about your goals today.
          </p>
          <div className="pt-1 sm:pt-2">
            <MagneticButton
              variant="primary"
              onClick={() => onNavigate("/start-a-project")}
              className="!py-3.5 !px-6 sm:!py-4 sm:!px-8 text-xs sm:text-sm font-mono tracking-wider font-bold"
            >
              <span>START A PROJECT →</span>
            </MagneticButton>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WorkPage;
