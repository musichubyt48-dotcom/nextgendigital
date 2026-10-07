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
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#17202A]/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6">
      <div className="relative w-full max-w-4xl bg-[#FFFDF8] border border-[#DED6C8] rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header Bar */}
        <div className="sticky top-0 z-10 bg-[#FFFDF8]/95 backdrop-blur-md border-b border-[#DED6C8] px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#C9A45C] font-semibold">
              Case Archive // {project.id.toUpperCase()}
            </span>
            <span className="hidden sm:inline-block h-1 w-1 rounded-full bg-[#DED6C8]" />
            <span className="hidden sm:inline-block text-xs text-[#687078]">
              {project.category}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="h-8 w-8 rounded-full bg-[#EFE8DA] hover:bg-[#DED6C8] text-[#17202A] flex items-center justify-center transition-colors focus:outline-none"
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
              <span className="bg-[#EFE8DA] text-[#17202A] px-2.5 py-1 rounded-full font-mono text-[0.6875rem]">
                {project.industry}
              </span>
              <span className="flex items-center gap-1 text-[#687078]">
                <MapPin size={12} className="text-[#C9A45C]" /> {project.location}
              </span>
              <span className="flex items-center gap-1 text-[#687078]">
                <Calendar size={12} className="text-[#C9A45C]" /> {project.year}
              </span>
              {project.score && (
                <span className="bg-emerald-50 text-emerald-800 border border-emerald-200 px-2 py-0.5 rounded-full font-mono text-[0.6875rem] font-medium">
                  {project.score}
                </span>
              )}
            </div>

            <h2 className="font-display text-3xl sm:text-4xl text-[#17202A] leading-tight">
              {project.title}
            </h2>
            <p className="text-base text-[#687078] leading-relaxed">{project.subtitle}</p>
          </div>

          {/* Project Preview Image */}
          <div className="rounded-2xl overflow-hidden border border-[#DED6C8] bg-[#EFE8DA] aspect-[16/9] relative group">
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            {project.liveUrl && (
              <div className="absolute bottom-4 right-4">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-[#17202A]/90 hover:bg-[#17202A] text-[#FFFDF8] px-4 py-2 rounded-full text-xs font-medium backdrop-blur-md shadow-lg transition-all"
                >
                  <span>Launch Live Demo</span>
                  <ExternalLink size={13} className="text-[#E4C98D]" />
                </a>
              </div>
            )}
          </div>

          {/* Overview & Core Summary */}
          <div className="bg-[#F7F3EA] border border-[#DED6C8] rounded-2xl p-6 sm:p-7 space-y-4">
            <h3 className="font-mono text-xs uppercase tracking-widest text-[#17202A] font-semibold flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#C9A45C]" />
              Executive Case Summary
            </h3>
            <p className="text-sm sm:text-base text-[#17202A] leading-relaxed">{project.summary}</p>
          </div>

          {/* The Challenge & The Studio Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-[#DED6C8] rounded-2xl p-6 bg-[#FFFDF8] space-y-2">
              <div className="font-mono text-xs uppercase tracking-wider text-red-700 font-semibold">
                The Commercial Challenge
              </div>
              <p className="text-sm text-[#687078] leading-relaxed">{project.challenge}</p>
            </div>

            <div className="border border-[#DED6C8] rounded-2xl p-6 bg-[#FFFDF8] space-y-2">
              <div className="font-mono text-xs uppercase tracking-wider text-[#C9A45C] font-semibold">
                NextGen Studio Architecture
              </div>
              <p className="text-sm text-[#17202A] leading-relaxed">{project.solution}</p>
            </div>
          </div>

          {/* Commercial Impact Callout */}
          <div className="border-l-2 border-[#C9A45C] pl-5 py-2 bg-[#FAF5EB] rounded-r-xl">
            <div className="font-mono text-xs uppercase tracking-wider text-[#C9A45C] font-semibold">
              Commercial Impact & Results
            </div>
            <p className="text-sm text-[#17202A] mt-1 font-medium leading-relaxed">
              {project.commercialImpact}
            </p>
          </div>

          {/* Deliverables Checklist */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-widest text-[#17202A] font-semibold">
              Engineered Deliverables
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.deliverables.map((deliv) => (
                <div
                  key={deliv}
                  className="flex items-center gap-2.5 text-xs text-[#17202A] bg-[#F7F3EA] border border-[#DED6C8] rounded-xl px-3.5 py-2"
                >
                  <Check size={14} className="text-[#C9A45C] shrink-0" />
                  <span>{deliv}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="pt-2 border-t border-[#DED6C8] flex flex-wrap items-center gap-2">
            <span className="font-mono text-xs text-[#687078]">Technology Stack:</span>
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="bg-[#EFE8DA] text-[#17202A] text-xs px-2.5 py-1 rounded-md font-mono"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Footer CTA */}
        <div className="sticky bottom-0 bg-[#EFE8DA] border-t border-[#DED6C8] px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-[#687078] text-center sm:text-left">
            Need similar custom web architecture for your business?
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 bg-[#FFFDF8] border border-[#DED6C8] text-[#17202A] px-4 py-2 rounded-full text-xs font-medium hover:border-[#C9A45C] transition-colors"
              >
                <span>Live Demo</span>
                <ExternalLink size={12} />
              </a>
            )}

            <button
              type="button"
              onClick={() => {
                onClose();
                onStartProject(project.category);
              }}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 bg-[#17202A] hover:bg-[#222E3C] text-[#FFFDF8] px-5 py-2 rounded-full text-xs font-medium tracking-wide shadow-sm transition-all"
            >
              <span>Build Something Similar</span>
              <ArrowUpRight size={13} className="text-[#E4C98D]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
