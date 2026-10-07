import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { PricingCard3D, PricingPlan } from "@/components/studio/PricingCard3D";

interface PricingSectionProps {
  onSelectPlan: (planName: string, budgetRange: string) => void;
  onExploreFullPricing: () => void;
}

export function PricingSection({ onSelectPlan, onExploreFullPricing }: PricingSectionProps) {
  const shouldReduceMotion = useReducedMotion();

  const packages: PricingPlan[] = [
    {
      id: "starter",
      name: "STARTER",
      price: "₹4,999+",
      priceNote: "Starting investment",
      idealFor: "Single page / simple business website",
      isPopular: false,
      badge: null,
      scope: [
        "High-conversion single-page architecture",
        "Mobile-first responsive fluid layout",
        "Direct WhatsApp & phone click integration",
        "Essential on-page local SEO setup",
        "Domain & cloud hosting setup assistance",
        "14 days post-launch technical warranty",
      ],
      cta: "SELECT STARTER",
    },
    {
      id: "growth",
      name: "GROWTH",
      price: "₹14,999+",
      priceNote: "Starting investment",
      idealFor: "Multi-page business website",
      isPopular: true,
      badge: "MOST POPULAR",
      scope: [
        "Up to 5 bespoke pages (Home, About, Services, Work, Contact)",
        "Tailored editorial design & refined micro-interactions",
        "Advanced lead capture & WhatsApp enquiry funnel",
        "Full technical SEO & Google indexing setup",
        "Social media preview cards (OpenGraph)",
        "30 days dedicated post-launch support",
      ],
      cta: "SELECT GROWTH",
    },
    {
      id: "premium",
      name: "PREMIUM",
      price: "₹24,999+",
      priceNote: "Starting investment",
      idealFor: "Advanced website / system / booking / e-commerce",
      isPopular: false,
      badge: "ENTERPRISE GRADE",
      scope: [
        "Complete bespoke platform or booking engine",
        "E-commerce storefront or dynamic service catalog",
        "Interactive tools (calculators, schedules, portals)",
        "Database & third-party API integrations",
        "Performance engineering (95+ Core Web Vitals)",
        "60 days priority technical support & updates",
      ],
      cta: "SELECT PREMIUM",
    },
  ];

  return (
    <section
      id="pricing"
      className="py-14 sm:py-20 md:py-32 bg-[#FFFFFF] border-t border-[#00D285]/15 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Coordinated Staggered Reveal */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.05,
              },
            },
          }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 pb-6 sm:pb-14 border-b border-[#00D285]/15"
        >
          <div className="space-y-2 sm:space-y-4">
            <motion.div
              variants={{
                hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 12 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
                },
              }}
              className="inline-block"
            >
              <div className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-[#00D285]/10 px-2.5 sm:px-3.5 py-0.5 sm:py-1 text-[11px] sm:text-xs font-mono uppercase tracking-widest text-[#00D285] border border-[#00D285]/25">
                <span>06 / Pricing & Scope</span>
              </div>
            </motion.div>

            <motion.h2
              variants={{
                hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 18 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
                },
              }}
              className="text-2xl sm:text-3xl md:text-fluid-section font-display font-bold uppercase text-[#041510] tracking-tight leading-tight"
            >
              Choose Your <br className="hidden sm:inline" />
              <span className="underline decoration-[#00D285] decoration-4 underline-offset-8">
                Starting Point.
              </span>
            </motion.h2>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
                },
              }}
              className="text-xs sm:text-base font-sans text-[#0A241D]/75 max-w-xl"
            >
              Transparent baseline packages with subtle 3D interactive tilt cards. All contracts
              include full code ownership, zero monthly licensing hostages, and guaranteed launch
              milestones.
            </motion.p>
          </div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 14 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
              },
            }}
          >
            <button
              type="button"
              onClick={onExploreFullPricing}
              className="inline-flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-sm font-mono font-bold uppercase tracking-wider text-[#041510] hover:text-[#00D285] group self-start md:self-end cursor-pointer transition-colors"
            >
              <span>VIEW DETAILED MATRIX</span>
              <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform text-[#00D285]" />
            </button>
          </motion.div>
        </motion.div>

        {/* 3 Interactive 3D Pricing Cards with Staggered Entrance */}
        <div className="mt-6 sm:mt-12 grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8 items-stretch">
          {packages.map((pkg, idx) => (
            <motion.div
              key={pkg.id}
              initial={{
                opacity: 0,
                y: shouldReduceMotion ? 0 : 32,
                scale: shouldReduceMotion ? 1 : 0.97,
              }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: idx * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex"
            >
              <PricingCard3D plan={pkg} onSelect={onSelectPlan} />
            </motion.div>
          ))}
        </div>

        {/* Custom requirements note */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 bg-[#F4FAF6] rounded-2xl p-6 border border-[#00D285]/20 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-display font-bold text-base text-[#041510]">
              Have bespoke enterprise or custom requirements?
            </h4>
            <p className="text-xs sm:text-sm text-[#0A241D]/75">
              Custom web portals, high-volume database integrations, and complex business
              architectures are quoted directly after a brief scoping call.
            </p>
          </div>
          <button
            type="button"
            onClick={onExploreFullPricing}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-mono text-xs font-bold uppercase tracking-wider bg-[#06211A] text-white hover:bg-[#00D285] hover:text-[#041510] transition-all shrink-0 cursor-pointer shadow-sm"
          >
            <span>VIEW FULL PRICING & MATRIX</span>
            <ArrowRight size={13} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default PricingSection;
