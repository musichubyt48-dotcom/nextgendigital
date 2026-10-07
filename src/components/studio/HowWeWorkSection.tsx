import { useState } from "react";
import { ArrowRight, ArrowLeft, CheckCircle2, Sparkles, Layers } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";

export function HowWeWorkSection() {
  const [activeStep, setActiveStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const shouldReduceMotion = useReducedMotion();

  const steps = [
    {
      num: "01",
      title: "Discovery & Alignment",
      subtitle: "Strategic Architecture",
      timeframe: "Days 1–2",
      desc: "We analyze your target market, competitors, and conversion pathways to establish exact project specifications before a single line of code is written.",
      deliverables: [
        "Brand Identity & Positioning Audit",
        "Conversion Funnel Architecture",
        "Technical Stack Selection",
        "Signed Scope & Launch Roadmap",
      ],
    },
    {
      num: "02",
      title: "UI Architecture",
      subtitle: "Design Engineering",
      timeframe: "Days 3–5",
      desc: "Crafting bespoke layouts with strict typographic hierarchy, responsive fluid geometry, and commercial brand positioning tailored to your customers.",
      deliverables: [
        "High-Fidelity Desktop & Mobile Mocks",
        "Interactive Prototype Validation",
        "Micro-Interaction & Motion Specs",
        "Asset & Typography Standardization",
      ],
    },
    {
      num: "03",
      title: "Frontend Engineering",
      subtitle: "Component Construction",
      timeframe: "Days 6–10",
      desc: "Building clean, componentized code with React, TypeScript, and modern CSS — optimized for sub-1.2 second load times and 95+ Core Web Vitals.",
      deliverables: [
        "Clean TypeScript Component Architecture",
        "Responsive Fluid Breakpoints",
        "Smooth Motion & Micro-Interactions",
        "Cross-Browser Rigorous QA",
      ],
    },
    {
      num: "04",
      title: "Funnel & Integrations",
      subtitle: "Revenue Systems",
      timeframe: "Days 11–14",
      desc: "Connecting WhatsApp lead conduits, CRM endpoints, payment gateways, or booking systems directly into your streamlined interface.",
      deliverables: [
        "Direct WhatsApp Click-to-Chat Funnels",
        "Custom Lead Qualification Forms",
        "Payment Gateway Setup (Razorpay/Stripe)",
        "Automated Email / SMS Confirmations",
      ],
    },
    {
      num: "05",
      title: "Technical SEO & Speed",
      subtitle: "Search Infrastructure",
      timeframe: "Days 15–16",
      desc: "Configuring schema metadata, search console verification, sitemaps, image optimization, and semantic HTML for natural discoverability.",
      deliverables: [
        "Schema.org JSON-LD Structured Data",
        "OpenGraph Social Preview Cards",
        "Google Search Console Verification",
        "Image Compression & WebP Pipeline",
      ],
    },
    {
      num: "06",
      title: "Review & Refinement",
      subtitle: "Client Validation",
      timeframe: "Days 17–19",
      desc: "Collaborative staging review ensuring every micro-interaction, copy block, and conversion button reflects your exact commercial intent.",
      deliverables: [
        "Interactive Staging Environment",
        "Client Revisions Execution",
        "Mobile Device Testing Matrix",
        "Pre-Launch Comprehensive Checklist",
      ],
    },
    {
      num: "07",
      title: "Deployment & Handover",
      subtitle: "Turnkey Ownership",
      timeframe: "Day 20+",
      desc: "Production DNS deployment, 100% full source code transfer, video training documentation, and activation of your post-launch warranty.",
      deliverables: [
        "Zero-Downtime Custom Domain Launch",
        "100% GitHub Codebase Transfer",
        "Loom Walkthrough Documentation",
        "Active Post-Launch Support Window",
      ],
    },
  ];

  const current = steps[activeStep];
  const progressRatio = ((activeStep + 1) / steps.length) * 100;

  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setDirection(1);
      setActiveStep((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (activeStep > 0) {
      setDirection(-1);
      setActiveStep((prev) => prev - 1);
    }
  };

  const handleSelect = (idx: number) => {
    setDirection(idx > activeStep ? 1 : -1);
    setActiveStep(idx);
  };

  const slideVariants = {
    enter: (dir: number) => ({
      x: shouldReduceMotion ? 0 : dir > 0 ? 24 : -24,
      opacity: 0,
      scale: 0.98,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
    },
    exit: (dir: number) => ({
      x: shouldReduceMotion ? 0 : dir > 0 ? -24 : 24,
      opacity: 0,
      scale: 0.98,
      transition: { duration: 0.28, ease: [0.16, 1, 0.3, 1] },
    }),
  };

  return (
    <section
      id="how-we-work"
      className="py-12 sm:py-20 md:py-32 bg-[#F8FAF9] border-t border-[#00D285]/15 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 pb-6 sm:pb-12 border-b border-[#00D285]/15"
        >
          <div className="space-y-2 sm:space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-[#00D285]/10 px-2.5 py-0.5 sm:px-3.5 sm:py-1 text-[11px] sm:text-xs font-mono uppercase tracking-widest text-[#00D285] border border-[#00D285]/25">
              <Layers size={12} className="text-[#00D285]" />
              <span>05 / Development Lifecycle</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-fluid-section font-display font-bold uppercase text-[#041510] tracking-tight leading-tight">
              From Idea <br className="hidden sm:inline" />
              <span className="underline decoration-[#00D285] decoration-4 underline-offset-8">
                To Launch.
              </span>
            </h2>
            <p className="text-xs sm:text-sm md:text-base font-sans text-[#0A241D]/80 leading-relaxed">
              A disciplined, transparent seven-phase roadmap ensuring every project delivers on
              schedule, on budget, and to institutional software standards.
            </p>
          </div>

          {/* Progress Indication & Navigation Controls */}
          <div className="flex items-center justify-between sm:justify-start gap-2.5 sm:gap-4 pt-1 sm:pt-0">
            <div className="flex items-center gap-1.5 sm:gap-2 font-mono text-xs sm:text-sm font-bold text-[#041510] bg-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-[#00D285]/20 shadow-xs">
              <span className="text-[#041510]">{current.num}</span>
              <span className="text-[#0A241D]/40">/</span>
              <span className="text-[#0A241D]/60">07</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                disabled={activeStep === 0}
                aria-label="Previous lifecycle phase"
                className="flex items-center gap-1 px-3 sm:px-4 py-1.5 sm:py-2.5 rounded-full font-mono text-[11px] sm:text-xs uppercase tracking-wider font-bold transition-all border border-[#00D285]/25 text-[#041510] bg-white hover:bg-[#00D285]/15 disabled:opacity-30 disabled:pointer-events-none cursor-pointer active:scale-95"
              >
                <ArrowLeft size={13} />
                <span>Prev</span>
              </button>

              <button
                type="button"
                onClick={handleNext}
                disabled={activeStep === steps.length - 1}
                aria-label="Next lifecycle phase"
                className="flex items-center gap-1 px-3 sm:px-4 py-1.5 sm:py-2.5 rounded-full font-mono text-[11px] sm:text-xs uppercase tracking-wider font-bold transition-all bg-[#00D285] text-[#041510] hover:bg-[#00e599] disabled:opacity-30 disabled:pointer-events-none cursor-pointer active:scale-95 shadow-[0_0_15px_rgba(0,210,133,0.3)]"
              >
                <span>Next</span>
                <ArrowRight size={13} />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Progress Bar Track with Smooth Draw */}
        <div className="mt-3 sm:mt-6 w-full h-1 sm:h-1.5 bg-[#00D285]/15 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-[#00D285]"
            initial={{ width: 0 }}
            whileInView={{ width: `${progressRatio}%` }}
            viewport={{ once: true }}
            animate={{ width: `${progressRatio}%` }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>

        {/* Step Navigation Pill Bar - Horizontal touch scroll on mobile, responsive grid on sm+ */}
        <div className="flex overflow-x-auto no-scrollbar sm:grid sm:grid-cols-4 lg:grid-cols-7 gap-1.5 sm:gap-2 pt-3 sm:pt-6 pb-4 sm:pb-8 -mx-4 px-4 sm:mx-0 sm:px-0">
          {steps.map((step, idx) => {
            const isSelected = activeStep === idx;
            return (
              <motion.button
                key={step.num}
                type="button"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.04, duration: 0.35 }}
                onClick={() => handleSelect(idx)}
                className={`shrink-0 min-w-[100px] sm:min-w-0 p-2 sm:p-3 rounded-xl sm:rounded-2xl border transition-all text-left group cursor-pointer ${
                  isSelected
                    ? "bg-[#041510] text-white border-[#00D285] shadow-[0_0_15px_rgba(0,210,133,0.25)] scale-[1.02]"
                    : "bg-white text-[#041510] border-[#00D285]/20 hover:bg-[#00D285]/10 hover:border-[#00D285]/40"
                }`}
              >
                <div className="flex items-center justify-between font-mono text-[10px] sm:text-xs mb-0.5 sm:mb-1.5">
                  <span className={isSelected ? "text-[#00D285] font-bold" : "text-[#0A241D]/60"}>
                    {step.num}
                  </span>
                  {isSelected && (
                    <motion.span
                      layoutId="active-dot"
                      className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-[#00D285] shadow-[0_0_6px_#00D285]"
                    />
                  )}
                </div>
                <div className="font-display font-bold text-[11px] sm:text-sm tracking-tight truncate">
                  {step.title}
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Active Stage Interactive Card with Animated Transition - Compact on mobile */}
        <div className="relative bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 md:p-12 border border-[#00D285]/20 shadow-[0_4px_24px_rgba(4,21,16,0.06)] overflow-hidden">
          {/* Watermark number */}
          <div className="absolute top-1 right-3 sm:top-2 sm:right-6 font-mono text-5xl sm:text-8xl md:text-9xl font-black text-[#00D285]/5 select-none pointer-events-none">
            {current.num}
          </div>

          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current.num}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 items-start relative z-10"
            >
              {/* Left Column: Number & Header */}
              <div className="lg:col-span-4 space-y-2 sm:space-y-3.5">
                <div className="inline-flex items-center gap-1.5 font-mono text-[10px] sm:text-xs uppercase tracking-wider text-[#041510] bg-[#00D285]/15 px-2.5 py-0.5 sm:px-3.5 sm:py-1 rounded-full font-bold border border-[#00D285]/30">
                  <Sparkles size={11} className="shrink-0 text-[#00D285]" />
                  <span>Phase {current.num} of 07</span>
                </div>

                <h3 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-[#041510] tracking-tight uppercase leading-tight">
                  {current.title}
                </h3>

                <p className="font-mono text-[11px] sm:text-xs uppercase tracking-wider text-[#0A241D]/70 font-semibold">
                  {current.subtitle} · {current.timeframe}
                </p>

                <p className="text-xs sm:text-sm md:text-base text-[#0A241D]/85 font-sans leading-relaxed pt-0.5 sm:pt-1">
                  {current.desc}
                </p>
              </div>

              {/* Right Column: Key Deliverables Checklist - Compact items */}
              <div className="lg:col-span-8 bg-[#F4FAF6] rounded-xl sm:rounded-2xl p-3.5 sm:p-6 md:p-8 border border-[#00D285]/15">
                <div className="flex items-center justify-between pb-2.5 mb-2.5 sm:pb-4 sm:mb-4 border-b border-[#00D285]/15">
                  <span className="font-mono text-[10px] sm:text-xs uppercase tracking-wider text-[#041510] font-bold">
                    Key Deliverables & Milestones
                  </span>
                  <span className="font-mono text-[10px] sm:text-xs text-[#0A241D]/60 hidden xs:inline">
                    Verified Production Output
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3.5">
                  {current.deliverables.map((item, idx) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.05, duration: 0.25 }}
                      className="flex items-center gap-2 sm:gap-3 bg-white p-2.5 sm:p-3.5 rounded-lg sm:rounded-xl border border-[#00D285]/15 shadow-xs"
                    >
                      <CheckCircle2 size={14} className="text-[#00D285] shrink-0" />
                      <span className="text-xs sm:text-sm font-sans font-medium text-[#0A241D] leading-snug">
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Bottom Card Navigation Row */}
          <div className="mt-4 pt-3.5 sm:mt-8 sm:pt-6 border-t border-[#00D285]/15 flex flex-wrap items-center justify-between gap-2.5">
            <div className="font-mono text-[10px] sm:text-xs text-[#0A241D]/60">
              Phase {current.num}: {current.title} · {current.timeframe}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                disabled={activeStep === 0}
                className="px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-lg sm:rounded-xl border border-[#00D285]/25 text-[11px] sm:text-xs font-mono text-[#041510] hover:bg-[#00D285]/15 disabled:opacity-30 cursor-pointer active:scale-95"
              >
                ← Prev
              </button>
              <button
                type="button"
                onClick={handleNext}
                disabled={activeStep === steps.length - 1}
                className="px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-lg sm:rounded-xl bg-[#00D285] text-[#041510] font-bold text-[11px] sm:text-xs font-mono hover:bg-[#00e599] disabled:opacity-30 cursor-pointer active:scale-95 shadow-[0_0_12px_rgba(0,210,133,0.25)]"
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowWeWorkSection;
