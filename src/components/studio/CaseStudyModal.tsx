import {
  X,
  ExternalLink,
  Check,
  ArrowUpRight,
  Sparkles,
  MapPin,
  Calendar,
  Award,
} from "lucide-react";
import { ProjectItem } from "@/data/projectsData";

interface CaseStudyModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onStartProject: (projectType: string) => void;
}

export function CaseStudyModal({ project, onClose, onStartProject }: CaseStudyModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#041510]/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6">
      <div className="relative w-full max-w-4xl bg-[#FAF9F6] border border-[#00D285]/25 rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header Bar */}
        <div className="sticky top-0 z-10 bg-[#FAF9F6]/95 backdrop-blur-md border-b border-[#00D285]/15 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#00D285] font-bold">
              Case Archive // {project.id.toUpperCase()}
            </span>
            <span className="hidden sm:inline-block h-1 w-1 rounded-full bg-[#00D285]/40" />
            <span className="hidden sm:inline-block text-xs text-[#0A241D]/70 font-mono">
              {project.category}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="h-8 w-8 rounded-full bg-[#F4FAF6] hover:bg-[#00D285]/20 text-[#041510] flex items-center justify-center transition-colors focus:outline-none cursor-pointer border border-[#00D285]/20"
            aria-label="Close case study"
          >
            <X size={16} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 lg:p-10 max-h-[80vh] overflow-y-auto space-y-8">
          {/* Main Title & Hero Banner */}
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="bg-[#00D285]/10 text-[#041510] border border-[#00D285]/25 px-2.5 py-1 rounded-full font-mono text-[0.6875rem] font-bold">
                {project.industry}
              </span>
              <span className="flex items-center gap-1 text-[#0A241D]/70 font-mono">
                <MapPin size={12} className="text-[#00D285]" /> {project.location}
              </span>
              <span className="flex items-center gap-1 text-[#0A241D]/70 font-mono">
                <Calendar size={12} className="text-[#00D285]" /> {project.year}
              </span>
              {project.score && (
                <span className="bg-[#00D285]/15 text-[#041510] border border-[#00D285]/35 px-2 py-0.5 rounded-full font-mono text-[0.6875rem] font-bold">
                  {project.score}
                </span>
              )}
            </div>

            <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#041510] leading-tight">
              {project.title}
            </h2>
            <p className="text-base text-[#0A241D]/80 leading-relaxed font-sans">
              {project.subtitle}
            </p>
          </div>

          {/* Project Preview Image */}
          <div className="rounded-2xl overflow-hidden border border-[#00D285]/20 bg-[#06211A] aspect-[16/9] relative group">
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            {project.liveUrl && (
              <div className="absolute bottom-4 right-4">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-[#041510]/90 hover:bg-[#00D285] hover:text-[#041510] text-[#FFFFFF] px-4 py-2 rounded-full text-xs font-mono font-bold backdrop-blur-md shadow-lg transition-all border border-[#00D285]/30"
                >
                  <span>Launch Live Demo</span>
                  <ExternalLink size={13} className="text-[#00D285] group-hover:text-[#041510]" />
                </a>
              </div>
            )}
          </div>

          {/* Overview & Core Summary */}
          <div className="bg-[#F8FAF9] border border-[#00D285]/20 rounded-2xl p-6 sm:p-7 space-y-4">
            <h3 className="font-mono text-xs uppercase tracking-widest text-[#041510] font-bold flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#00D285]" />
              Executive Case Summary
            </h3>
            <p className="text-sm sm:text-base text-[#0A241D]/85 leading-relaxed font-sans">
              {project.summary || project.overview || project.shortDesc}
            </p>
          </div>

          {/* The Challenge & The Studio Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-red-200/60 rounded-2xl p-6 bg-[#FEF2F2]/40 space-y-2">
              <div className="font-mono text-xs uppercase tracking-wider text-red-600 font-bold">
                The Commercial Challenge
              </div>
              <p className="text-sm text-[#0A241D]/75 leading-relaxed font-sans">
                {project.challenge ||
                  "Eliminating bounce rates and friction points across the buyer journey."}
              </p>
            </div>

            <div className="border border-[#00D285]/25 rounded-2xl p-6 bg-[#F8FAF9] space-y-2">
              <div className="font-mono text-xs uppercase tracking-wider text-[#00D285] font-bold">
                ZIVDEV Studio Architecture
              </div>
              <p className="text-sm text-[#0A241D]/85 leading-relaxed font-sans">
                {project.solution ||
                  project.approach ||
                  project.development ||
                  "Custom architectural implementation built with React and TypeScript."}
              </p>
            </div>
          </div>

          {/* Commercial Impact Callout */}
          <div className="border-l-4 border-[#00D285] pl-5 py-3 bg-[#F4FAF6] rounded-r-xl border border-l-0 border-[#00D285]/15">
            <div className="font-mono text-xs uppercase tracking-wider text-[#00D285] font-bold">
              Commercial Impact & Results
            </div>
            <p className="text-sm text-[#041510] mt-1 font-medium leading-relaxed font-sans">
              {project.commercialImpact ||
                project.businessResult ||
                "Significant increase in qualified conversions, user retention, and inbound booking inquiries."}
            </p>
          </div>

          {/* Deliverables Checklist */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-widest text-[#041510] font-bold">
              Engineered Deliverables
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.deliverables.map((deliv) => (
                <div
                  key={deliv}
                  className="flex items-center gap-2.5 text-xs text-[#0A241D] bg-[#F8FAF9] border border-[#00D285]/15 rounded-xl px-3.5 py-2 font-sans"
                >
                  <Check size={14} className="text-[#00D285] shrink-0" strokeWidth={2.5} />
                  <span>{deliv}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="pt-2 border-t border-[#00D285]/15 flex flex-wrap items-center gap-2">
            <span className="font-mono text-xs text-[#0A241D]/70 font-semibold">
              Technology Stack:
            </span>
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="bg-[#00D285]/10 text-[#041510] border border-[#00D285]/20 text-xs px-2.5 py-1 rounded-md font-mono font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Footer CTA */}
        <div className="sticky bottom-0 bg-[#FAF9F6] border-t border-[#00D285]/15 px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-[#0A241D]/70 text-center sm:text-left font-sans">
            Need similar custom web architecture for your business?
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 bg-white border border-[#00D285]/30 text-[#041510] hover:border-[#00D285] px-4 py-2 rounded-full text-xs font-mono font-bold transition-colors shadow-xs"
              >
                <span>Live Demo</span>
                <ExternalLink size={12} className="text-[#00D285]" />
              </a>
            )}

            <button
              type="button"
              onClick={() => {
                onClose();
                onStartProject(project.category);
              }}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 bg-[#06211A] hover:bg-[#00D285] text-white hover:text-[#041510] px-5 py-2 rounded-full text-xs font-mono font-bold tracking-wide shadow-sm transition-all cursor-pointer"
            >
              <span>Build Something Similar</span>
              <ArrowUpRight size={13} className="text-[#00D285]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
