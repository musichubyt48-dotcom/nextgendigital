import { UserCheck, CheckCircle2 } from "lucide-react";

export function WhyJivdevSection() {
  const points = [
    {
      code: "01 // REVENUE",
      title: "Business-Focused",
      desc: "Every layout hierarchy, visual cue, and interactive element is weighted specifically to convert visitors and serve your actual sales funnel, not win meaningless design awards.",
    },
    {
      code: "02 // ORIGINAL",
      title: "Custom Design",
      desc: "Zero recycled templates or generic theme builders. We construct bespoke digital identities tailored to your industry prestige, competitive context, and market positioning.",
    },
    {
      code: "03 // CANDOR",
      title: "Direct Communication",
      desc: "Collaborate directly with the founder and senior developer via private WhatsApp channels and weekly reviews. Fast decisions with zero bureaucratic telephone games.",
    },
    {
      code: "04 // MOMENTUM",
      title: "Rapid Development",
      desc: "Disciplined weekly milestones deliver fully functional, launch-ready web systems in 2 to 4 weeks, completely avoiding months of agency inertia.",
    },
    {
      code: "05 // UTILITY",
      title: "Practical Functionality",
      desc: "Instant 1-tap WhatsApp gateways, real-time appointment reservation flows, and frictionless UPI & card payment checkouts that operate without customer friction.",
    },
    {
      code: "06 // LONGEVITY",
      title: "Post-Launch Support",
      desc: "We remain your technical partner long after delivery. Complete warranty, recorded video walkthroughs for your staff, and proactive system maintenance retainers.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#FFFFFF] border-t border-[#235347]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 pb-12 border-b border-[#235347]/15">
          <div className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#235347]" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#163832]/70 font-medium">
              04 / The Difference
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl text-[#0B2B26] leading-tight font-bold uppercase tracking-tight">
            Built for business,{" "}
            <span className="underline decoration-[#8EB69B] decoration-4 underline-offset-8">
              not just for display.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#163832]/75 leading-relaxed">
            Most web agencies deliver bloated templates that break within months. We engineer
            high-speed, durable digital assets designed to convert visitors into signed clients.
          </p>
        </div>

        {/* Founder's Guarantee Callout */}
        <div className="mt-10 bg-[#DAF1DE]/40 border border-[#235347]/15 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-6 shadow-sm">
          <div className="h-12 w-12 rounded-xl bg-[#0B2B26] text-[#DAF1DE] flex items-center justify-center shrink-0">
            <UserCheck size={22} className="text-[#8EB69B]" />
          </div>
          <div className="space-y-1">
            <div className="font-mono text-xs uppercase tracking-widest text-[#235347] font-semibold">
              The Founder's Direct Guarantee
            </div>
            <p className="text-sm sm:text-base text-[#0B2B26] font-medium leading-relaxed">
              "You work directly with the senior designers and engineers executing your project.
              Zero junior intermediaries, no bureaucratic account managers, and complete financial
              and technical transparency."
            </p>
            <div className="text-xs text-[#163832]/70 pt-1">
              — Ashutosh Kumar Srivastava, Founder
            </div>
          </div>
        </div>

        {/* 6-Point Matrix */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((pt) => (
            <div
              key={pt.code}
              className="bg-white border border-[#235347]/15 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:border-[#8EB69B] hover:bg-[#DAF1DE]/20 shadow-card"
            >
              <div className="space-y-3">
                <span className="font-mono text-xs uppercase tracking-wider text-[#235347] font-bold block">
                  {pt.code}
                </span>
                <h3 className="font-display font-bold text-xl text-[#0B2B26]">{pt.title}</h3>
                <p className="text-xs sm:text-sm text-[#163832]/75 leading-relaxed">{pt.desc}</p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#235347]/10 flex items-center gap-1.5 text-xs text-[#163832] font-mono">
                <CheckCircle2 size={13} className="text-[#235347]" />
                <span>JIVDEV Standard</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyJivdevSection;
