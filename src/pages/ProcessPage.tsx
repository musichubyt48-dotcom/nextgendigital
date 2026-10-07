import { CheckCircle2, ArrowUpRight, Clock, ShieldCheck, FileCheck, Layers } from "lucide-react";
import { processSteps } from "@/data/processData";

interface ProcessPageProps {
  onNavigate: (path: string) => void;
}

export function ProcessPage({ onNavigate }: ProcessPageProps) {
  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#041510] pt-24 pb-12 sm:pt-32 sm:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="max-w-4xl space-y-4 pb-12 border-b border-[#00D285]/15">
          <div className="inline-flex items-center gap-2 bg-[#00D285]/10 border border-[#00D285]/25 px-3.5 py-1.5 rounded-full">
            <span className="h-1.5 w-1.5 rounded-full bg-[#00D285]" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#00D285] font-semibold">
              The 7-Stage Engineering Roadmap
            </span>
          </div>
          <h1 className="font-display text-4xl sm:text-6xl text-[#041510] leading-[1.1] font-bold">
            Disciplined execution with <span className="underline decoration-[#00D285] decoration-4 underline-offset-8">zero guesswork.</span>
          </h1>
          <p className="text-base sm:text-lg text-[#0A241D]/75 leading-relaxed max-w-2xl font-sans">
            We follow an architectural framework refined over dozens of commercial deployments.
            Every step has defined milestones, review dates, and tangible deliverables.
          </p>
        </div>

        {/* 7 Phases Deep Dive */}
        <div className="pt-14 space-y-10">
          {processSteps.map((step) => (
            <div
              key={step.number}
              className="bg-[#FFFFFF] border border-[#00D285]/20 rounded-3xl p-8 sm:p-10 shadow-sm hover:border-[#00D285]/60 hover:shadow-md transition-all"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Step number badge */}
                <div className="lg:col-span-3 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-3xl sm:text-4xl text-[#00D285] font-bold">
                      {step.number}
                    </span>
                    <span className="font-mono text-xs text-[#041510] uppercase bg-[#00D285]/10 px-2.5 py-1 rounded border border-[#00D285]/20 font-semibold">
                      {step.phase}
                    </span>
                  </div>
                  <div className="font-mono text-xs text-[#041510] font-medium flex items-center gap-1.5 pt-1">
                    <Clock size={13} className="text-[#00D285]" />
                    <span>Timeline: {step.duration}</span>
                  </div>
                </div>

                {/* Content description */}
                <div className="lg:col-span-5 space-y-3">
                  <h2 className="font-display text-2xl sm:text-3xl text-[#041510] font-bold">{step.name}</h2>
                  <p className="font-mono text-xs text-[#00D285] font-semibold tracking-wide">{step.tagline}</p>
                  <p className="text-sm text-[#0A241D]/80 leading-relaxed font-sans">{step.description}</p>
                </div>

                {/* Deliverables Checklist */}
                <div className="lg:col-span-4 bg-[#F8FAF9] border border-[#00D285]/20 rounded-2xl p-5 space-y-2.5">
                  <div className="font-mono text-[0.6875rem] uppercase tracking-wider text-[#041510] font-bold">
                    Phase Deliverables:
                  </div>
                  <ul className="space-y-1.5 text-xs text-[#041510]">
                    {step.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle2 size={13} className="text-[#00D285] shrink-0 mt-0.5" />
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
        <div className="mt-16 bg-[#041510] text-[#FFFFFF] rounded-3xl p-8 sm:p-12 text-center space-y-4 border border-[#00D285]/20 shadow-2xl">
          <span className="font-mono text-xs uppercase tracking-widest text-[#00D285] font-bold">
            Ready to initiate Phase 01?
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#FFFFFF]">
            Book your free discovery consultation today.
          </h2>
          <p className="text-sm text-[#E8F7EE]/80 max-w-xl mx-auto font-sans">
            We'll evaluate your goals, review your current presence, and map an actionable roadmap
            tailored for your business.
          </p>
          <div className="pt-2">
            <button
              type="button"
              onClick={() => onNavigate("/contact")}
              className="inline-flex items-center gap-2 bg-[#00D285] hover:bg-[#00B873] text-[#041510] px-7 py-3 rounded-full text-xs font-mono font-bold tracking-wider uppercase transition-all shadow-md shadow-[#00D285]/20 cursor-pointer"
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
