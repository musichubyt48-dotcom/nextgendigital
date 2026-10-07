import { CheckCircle2, ArrowRight } from "lucide-react";

export function PositioningSection() {
  const pillars = [
    {
      num: "01",
      slug: "DISCOVERY",
      title: "Strategy & Commercial Architecture",
      sub: "Foundation • Economics • Value Framing",
      description:
        "We begin by uncovering your actual customer objections, unit economics, and positioning advantages. No design begins before understanding why your prospects buy and what makes your offer distinctive.",
      tags: ["Target Audience Profiling", "Value Proposition Framing", "Conversion Path Mapping"],
    },
    {
      num: "02",
      slug: "CRAFT",
      title: "Distinctive Visual Craft",
      sub: "Typography • Hierarchy • Brand Distinction",
      description:
        "Clean architectural geometry, warm editorial typography, and disciplined user flows. We build bespoke visual languages that elevate your perceived market value and command respect from high-ticket clients.",
      tags: ["Zero Generic Templates", "Mobile Micro-Ergonomics", "Bespoke Design System"],
    },
    {
      num: "03",
      slug: "CODE",
      title: "Robust Systems Engineering",
      sub: "Speed • Clean Code • Full Autonomy",
      description:
        "Lightweight, lightning-fast code without unstable plugin bloat that breaks down after launch. Engineered for 95+ Core Web Vitals, native payment handshakes, and effortless ongoing autonomy for your staff.",
      tags: ["Sub-Second Execution", "Zero-Bloat Architecture", "100% Client Code Ownership"],
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#F7F3EA] border-t border-[#DED6C8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pb-14 border-b border-[#DED6C8] items-end">
          <div className="lg:col-span-7 space-y-3">
            <div className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C9A45C]" />
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#687078] font-medium">
                01 / Studio Philosophy
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl text-[#17202A] leading-tight font-normal">
              From idea to launch, we build around <span className="italic">your business.</span>
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-sm sm:text-base text-[#687078] leading-relaxed">
              We reject assembly-line templates. Every system is conceived from the ground up to
              establish unassailable market authority and drive measurable commercial response.
            </p>
          </div>
        </div>

        {/* 3 Pillars Editorial Composition */}
        <div className="pt-12 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.slug}
              className="bg-[#FFFDF8] border border-[#DED6C8] rounded-2xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:border-[#C9A45C] hover:shadow-[0_12px_32px_rgba(23,32,42,0.06)] hover:-translate-y-1"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-4 border-b border-[#DED6C8]">
                  <span className="font-mono text-xs uppercase tracking-widest text-[#C9A45C] font-semibold">
                    {pillar.num} / {pillar.slug}
                  </span>
                  <span className="font-mono text-[0.6875rem] text-[#687078]">Phase</span>
                </div>

                <div>
                  <h3 className="font-display text-2xl text-[#17202A] leading-snug">
                    {pillar.title}
                  </h3>
                  <div className="font-mono text-[0.6875rem] text-[#687078] tracking-wider uppercase mt-1">
                    {pillar.sub}
                  </div>
                </div>

                <p className="text-sm text-[#687078] leading-relaxed pt-1">{pillar.description}</p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#DED6C8]/60 space-y-2">
                <div className="font-mono text-[0.625rem] uppercase tracking-wider text-[#687078]">
                  Core Rigor
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {pillar.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-[#EFE8DA] text-[#17202A] text-[0.6875rem] font-mono px-2.5 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
