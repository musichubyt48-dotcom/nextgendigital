import { Clock, ArrowRight } from "lucide-react";
import { processSteps } from "@/data/processData";
import { SectionHeader } from "./SectionHeader";

interface ProcessSectionProps {
  onNavigateProcess?: () => void;
}

export function ProcessSection({ onNavigateProcess }: ProcessSectionProps) {
  return (
    <section id="process" className="py-20 md:py-32 relative bg-background border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-14 border-b border-white/10">
          <SectionHeader
            number="06"
            eyebrow="How We Work"
            align="left"
            title={
              <>
                From idea to <span className="text-gradient-gold italic">launch</span>.
              </>
            }
            description="Our disciplined seven-stage roadmap guides your project with full transparency from initial strategy to post-launch handover."
          />

          {onNavigateProcess && (
            <button
              type="button"
              onClick={onNavigateProcess}
              className="inline-flex items-center gap-2 text-sm font-mono uppercase tracking-wider text-gold hover:text-gold-soft transition-colors self-start md:self-end group"
            >
              <span>Explore Our Process</span>
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </button>
          )}
        </div>

        {/* 7 Steps Sequence */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4">
          {processSteps.map((step) => (
            <div
              key={step.number}
              className="glass rounded-2xl p-5 hover-lift flex flex-col justify-between group border border-white/10"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-gold font-bold">{step.number}</span>
                  <span className="font-mono text-[0.625rem] uppercase text-muted-foreground glass px-2 py-0.5 rounded-full">
                    {step.duration}
                  </span>
                </div>

                <div>
                  <h3 className="font-display text-xl text-foreground group-hover:text-gold transition-colors leading-tight">
                    {step.name}
                  </h3>
                  <p className="text-[0.6875rem] font-mono text-gold/70 uppercase mt-0.5">
                    {step.phase}
                  </p>
                </div>

                <p className="text-xs text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
