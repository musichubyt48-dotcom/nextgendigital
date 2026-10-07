import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Globe,
  Target,
  CalendarCheck,
  ShoppingBag,
  Cpu,
  Wrench,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

interface WhatWeDoSectionProps {
  onExploreServices: () => void;
  onSelectService?: (serviceId: string) => void;
}

export function WhatWeDoSection({ onExploreServices, onSelectService }: WhatWeDoSectionProps) {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const services = [
    {
      id: "business-websites",
      num: "01",
      title: "Business Websites",
      desc: "Comprehensive multi-page digital platforms engineered for brand authority, local search indexing, and customer trust.",
      tags: ["Multi-Page", "On-Page SEO", "Fast Hosting"],
      icon: Globe,
    },
    {
      id: "landing-pages",
      num: "02",
      title: "Landing Pages",
      desc: "Hyper-focused single-page conversion funnels engineered for paid ad campaigns, product drops, and high-volume enquiries.",
      tags: ["Sub-1.2s Load", "A/B Ready", "Direct WhatsApp"],
      icon: Target,
    },
    {
      id: "booking-websites",
      num: "03",
      title: "Booking Websites",
      desc: "Custom scheduling and reservation platforms tailored for resorts, clinics, salons, coaches, and appointment businesses.",
      tags: ["Live Calendar", "Zero Fees", "WhatsApp Triggers"],
      icon: CalendarCheck,
    },
    {
      id: "ecommerce",
      num: "04",
      title: "E-commerce",
      desc: "Frictionless storefronts with secure payment gateway integration, inventory synchronization, and streamlined checkout.",
      tags: ["UPI / Razorpay", "Fast Catalog", "Mobile Checkout"],
      icon: ShoppingBag,
    },
    {
      id: "custom-web-systems",
      num: "05",
      title: "Custom Web Systems",
      desc: "Bespoke internal calculators, client portals, quoting engines, and automated lead capture workflows.",
      tags: ["Custom Logic", "Cloud Database", "API Connectors"],
      icon: Cpu,
    },
    {
      id: "website-maintenance",
      num: "06",
      title: "Website Maintenance",
      desc: "Proactive security patching, Core Web Vitals monitoring, routine content updates, and zero-downtime management.",
      tags: ["Daily Backups", "Speed Audits", "Priority Support"],
      icon: Wrench,
    },
  ];

  const handleCardClick = (serviceId: string) => {
    if (onSelectService) {
      onSelectService(serviceId);
    } else {
      onExploreServices();
    }
  };

  // Coordinated header variants
  const headerContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  };

  const headerItemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="services"
      className="py-14 sm:py-20 md:py-32 bg-[#041612] text-white border-t border-[#00D285]/20 relative overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/4 w-[36rem] h-[36rem] bg-[#00D285]/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Coordinated Staggered Reveal */}
        <motion.div
          variants={headerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 pb-6 sm:pb-12 border-b border-[#00D285]/15"
        >
          <div className="space-y-2 sm:space-y-4">
            {/* 1. Small label reveals first */}
            <motion.div variants={headerItemVariants} className="inline-block">
              <div className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-[#00D285]/10 px-2.5 sm:px-3.5 py-0.5 sm:py-1 text-[11px] sm:text-xs font-mono uppercase tracking-widest text-[#00D285] border border-[#00D285]/30">
                <span>03 / What We Do</span>
              </div>
            </motion.div>

            {/* 2. Main heading reveals with smooth upward movement */}
            <motion.h2
              variants={headerItemVariants}
              className="text-2xl sm:text-3xl md:text-fluid-section font-display font-bold uppercase text-white tracking-tight leading-tight"
            >
              What We{" "}
              <span className="text-[#00D285] underline decoration-[#00D285] decoration-4 underline-offset-8">
                Build.
              </span>
            </motion.h2>

            {/* 3. Supporting description follows slightly after */}
            <motion.p
              variants={headerItemVariants}
              className="text-xs sm:text-base font-sans text-[#A4CBB7] max-w-xl"
            >
              Six core digital disciplines engineered for measurable commercial outcomes, not vanity
              metrics. Click any card to explore full specifications.
            </motion.p>
          </div>

          <motion.div variants={headerItemVariants}>
            <button
              type="button"
              onClick={onExploreServices}
              className="inline-flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-sm font-mono font-bold uppercase tracking-wider text-[#00D285] hover:text-white group self-start md:self-end cursor-pointer transition-colors"
            >
              <span>EXPLORE ALL SERVICES</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </motion.div>

        {/* Interactive Service Cards Grid with Stagger & Settling Motion */}
        <div className="mt-6 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {services.map((service, idx) => {
            const IconComponent = service.icon;
            const isHovered = hoveredIdx === idx;

            return (
              <motion.div
                key={service.id}
                initial={{
                  opacity: 0,
                  y: shouldReduceMotion ? 0 : 28,
                  scale: shouldReduceMotion ? 1 : 0.97,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  delay: idx * 0.08,
                  duration: 0.58,
                  ease: [0.16, 1, 0.3, 1],
                }}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                onClick={() => handleCardClick(service.id)}
                className="group relative cursor-pointer"
              >
                {/* Outer Card with Glow and Subtle Hover Lift */}
                <div
                  className={`relative p-[1px] rounded-2xl sm:rounded-3xl transition-all duration-300 transform-gpu ${
                    isHovered
                      ? "-translate-y-1 sm:-translate-y-1.5 shadow-[0_16px_40px_rgba(0,0,0,0.6)]"
                      : "shadow-lg"
                  }`}
                >
                  {/* Inner Card */}
                  <div
                    className={`relative rounded-2xl sm:rounded-3xl p-5 sm:p-7 flex flex-col justify-between min-h-[250px] sm:min-h-[330px] transition-all duration-300 border backdrop-blur-md ${
                      isHovered
                        ? "bg-[#093328]/90 border-[#00D285]/60 shadow-[0_0_24px_rgba(0,210,133,0.15)]"
                        : "bg-[#06261E]/80 border-[#00D285]/20 hover:border-[#00D285]/40"
                    }`}
                  >
                    {/* Top Row: Service Number & Icon */}
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-[#00D285] transition-colors">
                        {service.num}
                      </span>
                      <div
                        className={`h-11 w-11 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                          isHovered
                            ? "bg-[#00D285] text-[#041510] scale-105 shadow-[0_0_16px_rgba(0,210,133,0.4)]"
                            : "bg-[#0A3326] text-[#00D285] border border-[#00D285]/25"
                        }`}
                      >
                        <IconComponent size={20} />
                      </div>
                    </div>

                    {/* Middle: Title & Description */}
                    <div className="my-4 space-y-2.5">
                      <h3 className="font-display font-bold text-xl sm:text-2xl text-white tracking-tight group-hover:text-[#00D285] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#A4CBB7] font-sans leading-relaxed line-clamp-3">
                        {service.desc}
                      </p>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#00D285]/15">
                      {service.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[0.625rem] font-mono px-2 py-0.5 rounded-full bg-[#0A3326]/60 text-[#00D285] border border-[#00D285]/25"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Arrow Footer with Refined Movement */}
                    <div className="mt-5 pt-3 border-t border-[#00D285]/15 flex items-center justify-between">
                      <span className="text-xs font-mono font-bold tracking-wider text-[#00D285] group-hover:underline">
                        VIEW SERVICE SPECS
                      </span>
                      <div
                        className={`h-8 w-8 rounded-full flex items-center justify-center border transition-all duration-300 ${
                          isHovered
                            ? "bg-[#00D285] text-[#041510] border-[#00D285] rotate-45 scale-110 shadow-[0_0_12px_rgba(0,210,133,0.5)] translate-x-1"
                            : "border-[#00D285]/30 text-[#00D285]"
                        }`}
                      >
                        <ArrowUpRight size={15} />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhatWeDoSection;
