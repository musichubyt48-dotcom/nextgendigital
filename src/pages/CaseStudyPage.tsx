import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Globe,
  MapPin,
  Calendar,
  Building2,
} from "lucide-react";
import { ProjectItem, projectsData } from "@/data/projectsData";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { ImageReveal } from "@/components/motion/ImageReveal";

interface CaseStudyPageProps {
  project?: ProjectItem;
  slug?: string;
  onNavigate: (path: string) => void;
  onOpenNextProject?: (nextProject: ProjectItem) => void;
}

export function CaseStudyPage({
  project,
  slug,
  onNavigate,
  onOpenNextProject,
}: CaseStudyPageProps) {
  const currentProject =
    project || projectsData.find((p) => p.slug === slug || p.id === slug) || projectsData[0];

  // Find next project in array
  const currentIndex = projectsData.findIndex((p) => p.id === currentProject.id);
  const nextProject = projectsData[(currentIndex + 1) % projectsData.length];

  const handleNextClick = (next: ProjectItem) => {
    if (onOpenNextProject) {
      onOpenNextProject(next);
    } else {
      onNavigate(`/work/${next.slug}`);
    }
  };

  return (
    <div className="w-full flex flex-col bg-[#FFFFFF]">
      {/* Top Breadcrumb Header */}
      <div className="pt-20 pb-3.5 sm:pt-28 sm:pb-6 border-b border-[#235347]/15 bg-white/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-2">
          <button
            type="button"
            onClick={() => onNavigate("/work")}
            className="inline-flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-[#235347] hover:text-[#0B2B26] cursor-pointer"
          >
            <ArrowLeft size={13} />
            <span>All Projects</span>
          </button>

          {currentProject.liveUrl && (
            <a
              href={currentProject.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-mono font-bold text-[#FFFFFF] bg-[#235347] px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full hover:bg-[#163832] transition-colors shadow-sm"
            >
              <span>Live Platform</span>
              <ArrowUpRight size={13} />
            </a>
          )}
        </div>
      </div>

      {/* Case Study Hero */}
      <section className="pt-8 pb-10 sm:pt-12 sm:pb-16 md:pt-16 md:pb-24 border-b border-[#235347]/15 grain-overlay">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
          <div className="space-y-3 sm:space-y-4 max-w-4xl">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <span className="font-mono text-[10px] sm:text-xs font-bold text-[#FFFFFF] bg-[#235347] px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full uppercase tracking-wider">
                Case Study
              </span>
              <span className="font-mono text-[10px] sm:text-xs font-semibold text-[#235347] uppercase tracking-wider">
                {currentProject.category} · {currentProject.industry}
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl md:text-fluid-section font-display font-extrabold uppercase text-[#0B2B26] tracking-tight leading-tight">
              {currentProject.title}
            </h1>

            <p className="text-sm sm:text-xl md:text-2xl font-sans text-[#235347] leading-relaxed max-w-3xl">
              {currentProject.subtitle}
            </p>
          </div>

          {/* Project Metadata Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-white border border-[#235347]/15 shadow-subtle text-xs font-mono text-[#0B2B26]">
            <div className="space-y-0.5 sm:space-y-1">
              <span className="text-[#235347]/60 uppercase tracking-wider block text-[10px] sm:text-xs">
                Client
              </span>
              <span className="font-bold text-xs sm:text-sm block truncate">
                {currentProject.client}
              </span>
            </div>
            <div className="space-y-0.5 sm:space-y-1">
              <span className="text-[#235347]/60 uppercase tracking-wider block text-[10px] sm:text-xs">
                Location
              </span>
              <span className="font-bold text-xs sm:text-sm block truncate">
                {currentProject.location}
              </span>
            </div>
            <div className="space-y-0.5 sm:space-y-1">
              <span className="text-[#235347]/60 uppercase tracking-wider block text-[10px] sm:text-xs">
                Year
              </span>
              <span className="font-bold text-xs sm:text-sm block">{currentProject.year}</span>
            </div>
            <div className="space-y-0.5 sm:space-y-1">
              <span className="text-[#235347]/60 uppercase tracking-wider block text-[10px] sm:text-xs">
                Discipline
              </span>
              <span className="font-bold text-xs sm:text-sm block truncate">
                {currentProject.category}
              </span>
            </div>
          </div>

          {/* Main Visual */}
          <div className="rounded-2xl sm:rounded-3xl overflow-hidden border border-[#235347]/20 shadow-card bg-[#0B2B26]">
            <ImageReveal
              src={currentProject.image}
              alt={currentProject.title}
              aspectRatio="aspect-[16/9]"
              priority
            />
          </div>
        </div>
      </section>

      {/* 9-Part Case Study Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-20 md:py-28 space-y-10 sm:space-y-20">
        {/* 01. Overview */}
        <div className="space-y-2.5 sm:space-y-4">
          <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-[#235347] font-bold block">
            01 / Executive Overview
          </span>
          <h2 className="text-xl sm:text-3xl font-display font-bold text-[#0B2B26]">
            Project Purpose & Mandate
          </h2>
          <p className="text-xs sm:text-lg text-[#235347] leading-relaxed font-sans">
            {currentProject.overview}
          </p>
        </div>

        {/* 02. Business & Project Context */}
        <div className="space-y-3 sm:space-y-4 p-4 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-[#235347]/15 shadow-subtle">
          <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-[#235347] font-bold block">
            02 / Business Context
          </span>
          <h2 className="text-lg sm:text-2xl font-display font-bold text-[#0B2B26]">
            Operating Environment
          </h2>
          <p className="text-xs sm:text-base text-[#235347] leading-relaxed font-sans">
            {currentProject.client} needed a reliable, modern web presence that speaks directly to
            their local market and potential customers, providing instant access to service pricing,
            schedules, and direct booking mechanisms.
          </p>
        </div>

        {/* 03. Challenge */}
        <div className="space-y-2.5 sm:space-y-4">
          <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-[#235347] font-bold block">
            03 / The Challenge
          </span>
          <h2 className="text-xl sm:text-3xl font-display font-bold text-[#0B2B26]">
            Operational Friction & Inefficiencies
          </h2>
          <p className="text-xs sm:text-lg text-[#235347] leading-relaxed font-sans">
            {currentProject.challenge}
          </p>
        </div>

        {/* 04. Approach */}
        <div className="space-y-2.5 sm:space-y-4">
          <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-[#235347] font-bold block">
            04 / Strategic Approach
          </span>
          <h2 className="text-xl sm:text-3xl font-display font-bold text-[#0B2B26]">
            Engineering Around The User Journey
          </h2>
          <p className="text-xs sm:text-lg text-[#235347] leading-relaxed font-sans">
            {currentProject.approach}
          </p>
        </div>

        {/* 05. Design & 06. Development */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
          <div className="p-4 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-[#235347]/15 shadow-subtle space-y-2 sm:space-y-3">
            <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-[#235347] font-bold block">
              05 / Design Architecture
            </span>
            <h3 className="font-display font-bold text-lg sm:text-xl text-[#0B2B26]">
              Visual Hierarchy
            </h3>
            <p className="text-xs sm:text-sm text-[#235347] leading-relaxed font-sans">
              {currentProject.design}
            </p>
          </div>

          <div className="p-4 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-[#235347]/15 shadow-subtle space-y-2 sm:space-y-3">
            <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-[#235347] font-bold block">
              06 / Code & Engineering
            </span>
            <h3 className="font-display font-bold text-lg sm:text-xl text-[#0B2B26]">
              Technical Implementation
            </h3>
            <p className="text-xs sm:text-sm text-[#235347] leading-relaxed font-sans">
              {currentProject.development}
            </p>
          </div>
        </div>

        {/* 07. Key Features */}
        <div className="space-y-3 sm:space-y-6">
          <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-[#235347] font-bold block">
            07 / Key Functionality
          </span>
          <h2 className="text-xl sm:text-3xl font-display font-bold text-[#0B2B26]">
            Engineered Capabilities
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {currentProject.keyFeatures.map((feat, idx) => (
              <div
                key={idx}
                className="p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-white border border-[#235347]/15 flex items-start gap-2.5 sm:gap-3"
              >
                <CheckCircle2 size={16} className="text-[#235347] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-sans text-[#0B2B26] font-medium">
                  {feat}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 08. Final Experience */}
        <div className="p-5 sm:p-10 rounded-2xl sm:rounded-3xl bg-[#051F20] text-[#FFFFFF] border border-[#8EB69B]/20 space-y-3 sm:space-y-4">
          <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-[#DAF1DE] font-bold block">
            08 / Delivered Experience
          </span>
          <h2 className="text-xl sm:text-3xl font-display font-bold text-[#FFFFFF]">
            Operational Result
          </h2>
          <p className="text-xs sm:text-lg text-[#DAF1DE]/90 leading-relaxed font-sans">
            {currentProject.finalExperience}
          </p>

          <div className="pt-2 sm:pt-4 flex flex-wrap gap-1.5 sm:gap-2">
            {currentProject.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="font-mono text-[10px] sm:text-xs px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-[#163832] border border-[#8EB69B]/25 text-[#DAF1DE]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* 09. Next Project Navigation */}
        <div className="pt-8 sm:pt-12 border-t border-[#235347]/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6">
          <div>
            <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-[#235347]/70 font-bold block mb-1">
              09 / Next Project
            </span>
            <span className="font-display font-bold text-lg sm:text-2xl text-[#0B2B26]">
              {nextProject.title} ({nextProject.category})
            </span>
          </div>

          <button
            type="button"
            onClick={() => handleNextClick(nextProject)}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 py-3 sm:py-3.5 px-5 sm:px-6 rounded-full bg-[#235347] text-[#FFFFFF] hover:bg-[#163832] font-mono text-xs uppercase tracking-wider font-bold transition-colors cursor-pointer shadow-sm"
          >
            <span>VIEW NEXT CASE STUDY</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CaseStudyPage;
