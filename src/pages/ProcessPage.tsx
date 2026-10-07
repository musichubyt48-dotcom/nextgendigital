import { CheckCircle2, ArrowUpRight, Clock, ShieldCheck, FileCheck, Layers } from "lucide-react";
import { processSteps } from "@/data/processData";

interface ProcessPageProps {
  onNavigate: (path: string) => void;
}

export function ProcessPage({ onNavigate }: ProcessPageProps) {
  return (
    <div className="min-h-screen bg-[#F7F3EA] text-[#17202A] pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="max-w-4xl space-y-4 pb-12 border-b border-[#DED6C8]">
          <div className="inline-flex items-center gap-2 bg-[#FFFDF8] border border-[#DED6C8] px-3.5 py-1.5 rounded-full">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C9A45C]" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#687078] font-medium">
              The 7-Stage Engineering Roadmap
            </span>
          </div>
          <h1 className="font-display text-4xl sm:text-6xl text-[#17202A] leading-[1.1] font-normal">
            Disciplined execution with <span className="italic">zero guesswork.</span>
          </h1>
          <p className="text-base sm:text-lg text-[#687078] leading-relaxed max-w-2xl">
            We follow an architectural framework refined over dozens of commercial deployments.
            Every step has defined milestones, review dates, and tangible deliverables.
          </p>
        </div>

        {/* 7 Phases Deep Dive */}
        <div className="pt-14 space-y-10">
          {processSteps.map((step, idx) => (
            <div
              key={step.number}
              className="bg-[#FFFDF8] border border-[#DED6C8] rounded-3xl p-8 sm:p-10 shadow-[0_8px_24px_rgba(23,32,42,0.04)] hover:border-[#C9A45C] transition-all"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Step number badge */}
                <div className="lg:col-span-3 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-3xl sm:text-4xl text-[#C9A45C] font-semibold">
                      {step.number}
                    </span>
                    <span className="font-mono text-xs text-[#687078] uppercase bg-[#EFE8DA] px-2.5 py-1 rounded">
                      {step.phase}
                    </span>
                  </div>
                  <div className="font-mono text-xs text-[#17202A] font-medium flex items-center gap-1.5 pt-1">
                    <Clock size={13} className="text-[#C9A45C]" />
                    <span>Timeline: {step.duration}</span>
                  </div>
                </div>

                {/* Content description */}
                <div className="lg:col-span-5 space-y-3">
                  <h2 className="font-display text-2xl sm:text-3xl text-[#17202A]">{step.name}</h2>
                  <p className="font-mono text-xs text-[#C9A45C] tracking-wide">{step.tagline}</p>
                  <p className="text-sm text-[#687078] leading-relaxed">{step.description}</p>
                </div>

                {/* Deliverables Checklist */}
                <div className="lg:col-span-4 bg-[#F7F3EA] border border-[#DED6C8] rounded-2xl p-5 space-y-2.5">
                  <div className="font-mono text-[0.6875rem] uppercase tracking-wider text-[#17202A] font-semibold">
                    Phase Deliverables:
                  </div>
                  <ul className="space-y-1.5 text-xs text-[#17202A]">
                    {step.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle2 size={13} className="text-[#C9A45C] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 bg-[#17202A] text-[#FFFDF8] rounded-3xl p-8 sm:p-12 text-center space-y-4">
          <span className="font-mono text-xs uppercase tracking-widest text-[#E4C98D] font-medium">
            Ready to initiate Phase 01?
          </span>
          <h2 className="font-display text-3xl sm:text-4xl">
            Book your free discovery consultation today.
          </h2>
          <p className="text-sm text-[#FFFDF8]/75 max-w-xl mx-auto">
            We'll evaluate your goals, review your current presence, and map an actionable roadmap
            tailored for your business.
          </p>
          <div className="pt-2">
            <button
              type="button"
              onClick={() => onNavigate("/contact")}
              className="inline-flex items-center gap-2 bg-[#C9A45C] hover:bg-[#E4C98D] text-[#17202A] px-7 py-3 rounded-full text-xs font-semibold tracking-wider uppercase transition-all shadow-md"
            >
              <span>Schedule Discovery Brief</span>
              <ArrowUpRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
