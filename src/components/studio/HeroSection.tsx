import { ArrowRight, CheckCircle2, Shield, Zap, Code2, Clock } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { ExploreWorkButton } from "@/components/studio/ExploreWorkButton";

interface HeroSectionProps {
  onStartProject?: () => void;
  onViewWork: () => void;
}

export function HeroSection({ onStartProject, onViewWork }: HeroSectionProps) {
  const shouldReduceMotion = useReducedMotion();

  // Staggered container for page load
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const headlineWords = [
    { text: "WEBSITES", highlight: false },
    { text: "BUILT", highlight: false },
    { text: "AROUND", highlight: false },
    { text: "YOUR BUSINESS.", highlight: true },
  ];

  const wordVariants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 24,
      filter: shouldReduceMotion ? "none" : "blur(6px)",
      scale: shouldReduceMotion ? 1 : 0.98,
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const statItems = [
    {
      metric: "< 1.2s",
      label: "Core Web Vitals",
      sub: "Instant mobile loading",
      icon: Zap,
    },
    {
      metric: "100%",
      label: "Code Ownership",
      sub: "Zero vendor lock-in",
      icon: Code2,
    },
    {
      metric: "Direct",
      label: "Lead & Booking Funnels",
      sub: "No aggregator commissions",
      icon: Shield,
    },
    {
      metric: "14–60d",
      label: "Technical Warranty",
      sub: "Dedicated post-launch care",
      icon: Clock,
    },
  ];

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center items-center pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#FFFFFF] grain-overlay">
      {/* Subtle ambient moving glow fields */}
      <motion.div
        animate={
          shouldReduceMotion
            ? {}
            : {
                x: [-15, 15, -15],
                y: [-10, 10, -10],
                scale: [1, 1.08, 1],
              }
        }
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-16 left-1/2 -translate-x-1/2 w-[46rem] h-[24rem] bg-[#DAF1DE]/70 rounded-full blur-[130px] pointer-events-none -z-10"
      />
      <motion.div
        animate={
          shouldReduceMotion
            ? {}
            : {
                x: [10, -10, 10],
                y: [12, -12, 12],
              }
        }
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-10 right-1/4 w-[30rem] h-[26rem] bg-[#235347]/8 rounded-full blur-[120px] pointer-events-none -z-10"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-4 sm:space-y-8"
        >
          {/* 1. Eyebrow badge */}
          <motion.div variants={itemVariants} className="inline-block">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#DAF1DE]/60 backdrop-blur-md px-3 sm:px-4 py-1 sm:py-1.5 border border-[#235347]/15 shadow-xs">
              <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-[#235347] animate-pulse" />
              <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-[#163832] font-semibold">
                NextGen Digital · Digital Studio & Systems
              </span>
            </div>
          </motion.div>

          {/* 2. Large Centered Animated Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-fluid-hero font-display font-extrabold uppercase text-[#0B2B26] tracking-tight leading-[0.98] max-w-5xl mx-auto"
          >
            <span className="flex flex-wrap items-center justify-center gap-x-2 sm:gap-x-5 gap-y-1 sm:gap-y-2">
              {headlineWords.map((word, idx) => (
                <motion.span
                  key={idx}
                  variants={wordVariants}
                  className={
                    word.highlight
                      ? "inline-block bg-[#0B2B26] text-[#DAF1DE] px-2.5 sm:px-4 py-0.5 sm:py-1 rounded-xl sm:rounded-2xl shadow-sm transition-transform duration-300 hover:scale-[1.02]"
                      : "inline-block"
                  }
                >
                  {word.text}
                </motion.span>
              ))}
            </span>
          </motion.h1>

          {/* 3. Supporting Description */}
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-lg md:text-xl font-sans text-[#163832]/85 leading-relaxed max-w-2xl sm:max-w-3xl mx-auto font-normal px-2 sm:px-0"
          >
            We architect high-converting business websites, direct WhatsApp booking engines, and
            bespoke digital systems engineered for authentic commercial growth — with complete
            source code ownership and zero lock-in.
          </motion.p>

          {/* 4. Centered CTA Arrangement (Primary + Secondary) */}
          <motion.div
            variants={itemVariants}
            className="pt-1 sm:pt-2 flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-4 w-full"
          >
            <div className="w-full sm:w-auto">
              <ExploreWorkButton onClick={onViewWork} />
            </div>

            {onStartProject && (
              <button
                type="button"
                onClick={onStartProject}
                className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full font-mono text-xs sm:text-sm font-bold tracking-wider uppercase cursor-pointer select-none bg-[#DAF1DE] text-[#163832] border border-[#8EB69B] hover:bg-[#235347] hover:text-[#FFFFFF] hover:border-[#235347] hover:shadow-xs transition-all duration-200 active:scale-98"
              >
                <span>START A PROJECT</span>
                <ArrowRight
                  size={15}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </button>
            )}
          </motion.div>

          {/* 5. Reassurance tags */}
          <motion.div
            variants={itemVariants}
            className="pt-1 sm:pt-2 flex flex-wrap items-center justify-center gap-2.5 sm:gap-6 text-[10px] sm:text-[0.6875rem] font-mono text-[#163832]/75"
          >
            <div className="flex items-center gap-1.5">
              <CheckCircle2 size={12} className="text-[#235347]" />
              <span>Full Code Ownership</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 size={12} className="text-[#235347]" />
              <span>Zero Monthly Platform Fees</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 size={12} className="text-[#235347]" />
              <span>Institutional TypeScript</span>
            </div>
          </motion.div>

          {/* 6. Supporting Statistics / Features Row */}
          <motion.div
            variants={itemVariants}
            className="pt-6 sm:pt-14 mt-6 sm:mt-12 border-t border-[#235347]/15"
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6 max-w-5xl mx-auto">
              {statItems.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + idx * 0.08, duration: 0.5 }}
                    className="p-3 sm:p-5 rounded-xl sm:rounded-2xl bg-white/80 backdrop-blur-sm border border-[#235347]/12 text-left transition-all duration-300 hover:bg-[#DAF1DE]/30 hover:border-[#235347]/25 hover:shadow-xs group"
                  >
                    <div className="flex items-center justify-between mb-1.5 sm:mb-3">
                      <span className="font-display font-black text-lg sm:text-3xl text-[#0B2B26] tracking-tight tabular-nums">
                        {item.metric}
                      </span>
                      <div className="h-6 w-6 sm:h-8 sm:w-8 rounded-lg sm:rounded-xl bg-[#DAF1DE] flex items-center justify-center text-[#235347] group-hover:bg-[#235347] group-hover:text-[#FFFFFF] transition-colors">
                        <IconComponent size={13} />
                      </div>
                    </div>
                    <div className="font-display font-bold text-[11px] sm:text-sm text-[#0B2B26] tracking-tight">
                      {item.label}
                    </div>
                    <div className="font-sans text-[10px] sm:text-[0.6875rem] text-[#163832]/65 mt-0.5">
                      {item.sub}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
