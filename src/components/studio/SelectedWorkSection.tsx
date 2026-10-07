import { useRef } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { projectsData, ProjectItem } from "@/data/projectsData";
import { MagneticButton } from "@/components/motion/MagneticButton";

interface SelectedWorkSectionProps {
  onOpenCaseStudy: (project: ProjectItem) => void;
  onViewAllWork: () => void;
}

export function SelectedWorkSection({ onOpenCaseStudy, onViewAllWork }: SelectedWorkSectionProps) {
  const shouldReduceMotion = useReducedMotion();

  // All 4 projects
  const featuredProjects = projectsData;

  return (
    <section
      id="work"
      className="py-14 sm:py-20 md:py-32 bg-[#041612] text-white border-t border-[#00D285]/20 relative overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/3 right-10 w-[36rem] h-[36rem] bg-[#00D285]/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Coordinated Staggered Reveal */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.05,
              },
            },
          }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 pb-6 sm:pb-14 border-b border-[#00D285]/15"
        >
          <div className="space-y-2 sm:space-y-4">
            {/* Small label appears first */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 14 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
                },
              }}
              className="inline-block"
            >
              <div className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-[#00D285]/10 px-2.5 sm:px-3.5 py-0.5 sm:py-1 text-[11px] sm:text-xs font-mono uppercase tracking-widest text-[#00D285] border border-[#00D285]/30">
                <span>04 / Selected Work</span>
              </div>
            </motion.div>

            {/* Heading follows */}
            <motion.h2
              variants={{
                hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 18 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
                },
              }}
              className="text-2xl sm:text-3xl md:text-fluid-section font-display font-bold uppercase text-white tracking-tight leading-tight"
            >
              Selected{" "}
              <span className="text-[#00D285] underline decoration-[#00D285] decoration-4 underline-offset-8">
                Work.
              </span>
            </motion.h2>

            {/* Description follows */}
            <motion.p
              variants={{
                hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
                },
              }}
              className="text-xs sm:text-base font-sans text-[#A4CBB7] max-w-xl"
            >
              Authentic systems built for real operations. Direct bookings, memberships, and
              clinical patient flows.
            </motion.p>
          </div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 14 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
              },
            }}
          >
            <button
              type="button"
              onClick={onViewAllWork}
              className="inline-flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-sm font-mono font-bold uppercase tracking-wider text-[#00D285] hover:text-white group self-start md:self-end cursor-pointer transition-colors"
            >
              <span>VIEW COMPLETE ARCHIVE</span>
              <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform" />
            </button>
          </motion.div>
        </motion.div>

        {/* Sticky Stacking Deck of Project Cards */}
        <div className="mt-6 sm:mt-12 space-y-6 sm:space-y-16">
          {featuredProjects.map((project, index) => (
            <StickyProjectCard
              key={project.id}
              project={project}
              index={index}
              total={featuredProjects.length}
              onOpenCaseStudy={onOpenCaseStudy}
            />
          ))}
        </div>

        {/* Bottom CTA to Archive */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 text-center"
        >
          <MagneticButton variant="primary" onClick={onViewAllWork}>
            <span>EXPLORE ALL PROJECTS & CASE STUDIES</span>
            <ArrowRight size={15} />
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}

interface StickyCardProps {
  project: ProjectItem;
  index: number;
  total: number;
  onOpenCaseStudy: (project: ProjectItem) => void;
}

function StickyProjectCard({ project, index, total, onOpenCaseStudy }: StickyCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"],
  });

  // Scale down slightly as user scrolls down: 1 -> 0.97 -> 0.94
  const targetScale = 1 - (total - index - 1) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [0.98, targetScale]);

  return (
    <div
      ref={containerRef}
      className="sticky top-20 sm:top-28 md:top-32"
      style={{
        zIndex: index + 10,
      }}
    >
      <motion.div
        style={{
          scale: shouldReduceMotion ? 1 : scale,
        }}
        initial={{
          opacity: 0,
          y: shouldReduceMotion ? 0 : 24,
          scale: shouldReduceMotion ? 1 : 0.98,
        }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        className="rounded-2xl sm:rounded-3xl bg-[#06261E]/95 border border-[#00D285]/25 shadow-[0_20px_50px_rgba(0,0,0,0.65)] overflow-hidden transition-all duration-300 hover:border-[#00D285]/55 group/card backdrop-blur-md"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          {/* Visual Showcase (7 Cols) with Masked Image Reveal */}
          <div
            onClick={() => onOpenCaseStudy(project)}
            className="lg:col-span-7 relative min-h-[200px] sm:min-h-[420px] bg-[#041510] overflow-hidden cursor-pointer group"
          >
            <motion.img
              initial={{ scale: shouldReduceMotion ? 1 : 1.08 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#041510] via-[#041510]/30 to-transparent" />

            <div className="absolute top-3 left-3 sm:top-4 sm:left-4 flex items-center gap-1.5 sm:gap-2">
              <span className="font-mono text-[11px] sm:text-xs font-bold text-[#041510] bg-[#00D285] px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full uppercase tracking-wider shadow-[0_0_8px_rgba(0,210,133,0.4)]">
                0{index + 1}
              </span>
              <span className="font-mono text-[11px] sm:text-xs font-semibold text-[#E8F7EE] bg-[#041510]/85 backdrop-blur-md px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full uppercase tracking-wider border border-[#00D285]/30">
                {project.category}
              </span>
            </div>

            <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex items-center justify-between text-[11px] sm:text-xs font-mono text-[#E8F7EE]">
              <span>{project.location}</span>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-1 text-[#00D285] hover:text-white font-semibold hover:translate-x-1.5 transition-all"
              >
                <span>Visit Website</span>
                <ArrowRight size={12} />
              </a>
            </div>
          </div>

          {/* Details & Inclusions (5 Cols) appearing slightly after image */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 p-4 sm:p-7 md:p-10 flex flex-col justify-between space-y-3.5 sm:space-y-6 bg-[#06211A] text-white border-t lg:border-t-0 lg:border-l border-[#00D285]/15"
          >
            <div className="space-y-2.5 sm:space-y-4">
              <div className="flex items-center justify-between border-b border-[#00D285]/15 pb-2.5">
                <span className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-[#00D285]">
                  {project.industry}
                </span>
                <span className="text-[11px] sm:text-xs font-mono text-[#A4CBB7] font-semibold">
                  {project.year}
                </span>
              </div>

              <h3 className="font-display font-bold text-xl sm:text-2xl md:text-3xl text-white tracking-tight">
                {project.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#A4CBB7] leading-relaxed font-sans">
                {project.shortDesc}
              </p>

              {/* Commercial Result highlight if available */}
              {project.businessResult && (
                <div className="p-2.5 sm:p-3 rounded-xl bg-[#0A3326]/70 border border-[#00D285]/25">
                  <span className="block font-mono text-[10px] sm:text-[0.6875rem] uppercase tracking-wider font-bold text-[#00D285]">
                    Commercial Impact:
                  </span>
                  <p className="text-xs font-sans text-white font-medium mt-0.5">
                    {project.businessResult}
                  </p>
                </div>
              )}

              {/* Key Functionality */}
              <div className="pt-1 space-y-1.5">
                <span className="text-[11px] sm:text-xs font-mono uppercase tracking-wider font-bold text-white">
                  Key Deliverables:
                </span>
                <ul className="space-y-1 sm:space-y-1.5">
                  {project.keyFeatures.slice(0, 3).map((feat, fIdx) => (
                    <li
                      key={fIdx}
                      className="text-xs text-[#E8F7EE] flex items-start gap-1.5 sm:gap-2"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-[#00D285] mt-1 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-3 sm:pt-5 border-t border-[#00D285]/15 flex flex-wrap items-center justify-between gap-2.5">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-[#041510] bg-[#00D285] hover:bg-[#00e599] px-5 py-2.5 rounded-full transition-all group/btn cursor-pointer shadow-[0_0_12px_rgba(0,210,133,0.3)]"
              >
                <span>VISIT WEBSITE</span>
                <ArrowRight
                  size={12}
                  className="group-hover/btn:translate-x-1.5 transition-transform"
                />
              </a>

              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-mono text-[#00D285] hover:text-white transition-colors"
              >
                <span>OPEN PROJECT</span>
                <ArrowUpRight size={12} />
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default SelectedWorkSection;
