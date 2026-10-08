import { Check, X, Shield, ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { FaqSection } from "@/components/studio/FaqSection";
import { PricingCard3D, PricingPlan } from "@/components/studio/PricingCard3D";

interface PricingPageProps {
  onNavigate: (path: string) => void;
}

export function PricingPage({ onNavigate }: PricingPageProps) {
  const shouldReduceMotion = useReducedMotion();

  const packages: PricingPlan[] = [
    {
      id: "starter",
      name: "STARTER",
      price: "₹4,999+",
      priceNote: "Starting investment (4–7 Days)",
      idealFor: "Single-page conversion website or landing page",
      isPopular: false,
      badge: null,
      scope: [
        "1 Clean Single-Page Website",
        "Works smoothly on all mobile phones & computers",
        "Direct WhatsApp & phone call buttons",
        "Domain & fast hosting setup assistance",
        "Contact inquiry form connected to your email",
        "14 days free support after launch",
        "2 rounds of design revisions",
      ],
      cta: "SELECT STARTER",
    },
    {
      id: "growth",
      name: "GROWTH",
      price: "₹14,999+",
      priceNote: "Starting investment (10–18 Days)",
      idealFor: "Multi-page business website for growing brands",
      isPopular: true,
      badge: "MOST POPULAR",
      scope: [
        "Up to 5 custom pages (Home, About, Services, Work, Contact)",
        "Modern professional design made for your business",
        "Inquiry form & instant WhatsApp chat buttons",
        "Social media preview links & cards",
        "Direct WhatsApp customer routing",
        "30 days free support after launch",
        "3 rounds of design revisions",
      ],
      cta: "SELECT GROWTH",
    },
    {
      id: "premium",
      name: "PREMIUM",
      price: "₹24,999+",
      priceNote: "Starting investment (3–5 Weeks)",
      idealFor: "Custom booking engine, online store, or web system",
      isPopular: false,
      badge: "ENTERPRISE GRADE",
      scope: [
        "Custom online booking engine or online store",
        "Online payment gateway (UPI, Cards, NetBanking)",
        "Easy-to-use admin panel to manage content",
        "Customer database & WhatsApp notifications",
        "Super fast loading speed on all devices",
        "Instant alerts on WhatsApp or email",
        "60 days priority free support after launch",
        "Unlimited revisions before launch",
      ],
      cta: "SELECT PREMIUM",
    },
  ];

  const comparisonRows = [
    {
      feature: "Target Scope",
      starter: "1 Landing Page",
      growth: "Up to 5 Pages",
      premium: "Complete Platform",
    },
    { feature: "Responsive Fluid Architecture", starter: true, growth: true, premium: true },
    { feature: "Direct WhatsApp Lead Funnel", starter: true, growth: true, premium: true },
    { feature: "Payment Gateway Integration", starter: false, growth: false, premium: true },
    {
      feature: "Calendar / Booking Engine",
      starter: false,
      growth: "Optional Add-on",
      premium: true,
    },
    { feature: "Database & Admin Dashboard", starter: false, growth: false, premium: true },
    {
      feature: "Delivery Timeline",
      starter: "4–7 Days",
      growth: "10–18 Days",
      premium: "3–5 Weeks",
    },
    { feature: "Post-Launch Warranty", starter: "14 Days", growth: "30 Days", premium: "60 Days" },
    { feature: "Code & Domain Ownership", starter: "100%", growth: "100%", premium: "100%" },
  ];

  return (
    <div className="w-full flex flex-col bg-[#FFFFFF]">
      {/* 
        PRICING SECTION AS MAIN FOCUS
        Clean, spacious layout with elegant typographic hierarchy
      */}
      <section className="pt-24 pb-12 sm:pt-28 md:pt-36 sm:pb-20 md:pb-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Subtle Section Header with Staggered Reveal */}
        <motion.div
          initial="hidden"
          animate="visible"
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
          className="text-center max-w-3xl mx-auto mb-8 sm:mb-16 space-y-2.5 sm:space-y-3"
        >
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
            <div className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-[#00D285]/10 px-3 sm:px-3.5 py-0.5 sm:py-1 text-[11px] sm:text-xs font-mono uppercase tracking-widest text-[#00D285] border border-[#00D285]/25">
              <span>Investment & Packages</span>
            </div>
          </motion.div>

          <motion.h1
            variants={{
              hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 18 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
              },
            }}
            className="text-2xl sm:text-4xl md:text-5xl font-display font-extrabold uppercase text-[#041510] tracking-tight leading-tight"
          >
            Transparent Pricing. <br />
            <span className="underline decoration-[#00D285] decoration-4 underline-offset-8">
              Guaranteed Milestones.
            </span>
          </motion.h1>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
              },
            }}
            className="text-xs sm:text-base font-sans text-[#0A241D]/80 max-w-2xl mx-auto"
          >
            Choose your starting investment below. All packages include 100% complete source code
            ownership, zero ongoing vendor lock-in, and guaranteed delivery sprints.
          </motion.p>
        </motion.div>

        {/* 3 Clean Pricing Cards with Stagger & Settling Motion */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8 items-stretch">
          {packages.map((pkg, idx) => (
            <motion.div
              key={pkg.id}
              initial={{
                opacity: 0,
                y: shouldReduceMotion ? 0 : 28,
                scale: shouldReduceMotion ? 1 : 0.98,
              }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: idx * 0.1, duration: 0.58, ease: [0.16, 1, 0.3, 1] }}
              className="flex"
            >
              <PricingCard3D
                plan={pkg}
                onSelect={(planName) =>
                  onNavigate(`/start-a-project?bundle=${encodeURIComponent(planName)}`)
                }
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-8 sm:py-12 md:py-16 max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 md:p-10 border border-[#00D285]/20 shadow-subtle"
        >
          {/* Matrix Header with Subtle Swipe Cue for Mobile */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2.5 mb-4 sm:mb-6 pb-1">
            <div className="space-y-1">
              <h3 className="font-display font-bold text-xl sm:text-2xl text-[#041510]">
                Feature Comparison Matrix
              </h3>
              <p className="text-xs sm:text-sm text-[#0A241D]/70 font-sans">
                Compare architectural deliverables across starter, growth, and premium tiers.
              </p>
            </div>
            {/* Subtle visual indication for mobile touch swipe */}
            <div className="inline-flex items-center gap-1.5 self-start sm:self-auto rounded-full bg-[#00D285]/10 border border-[#00D285]/20 px-2.5 py-1 text-[11px] font-mono font-bold text-[#00D285] md:hidden select-none">
              <span>Swipe to compare</span>
              <ArrowRight size={12} className="text-[#00D285] shrink-0" />
            </div>
          </div>

          {/* Dedicated horizontal scroll container for matrix */}
          <div className="w-full max-w-full overflow-x-auto overscroll-x-contain touch-pan-x rounded-xl pb-2 focus:outline-none">
            <table className="w-full text-left text-xs font-mono min-w-[660px] md:min-w-full border-collapse">
              <thead>
                <tr className="border-b border-[#00D285]/15 text-[#041510] uppercase">
                  <th className="py-3 px-3.5 sm:px-4 font-bold min-w-[210px] sm:min-w-[230px] md:min-w-0 md:w-2/5">
                    Deliverable
                  </th>
                  <th className="py-3 px-3.5 sm:px-4 font-bold min-w-[140px] sm:min-w-[150px] md:min-w-0 md:w-1/5">
                    Starter (₹4,999+)
                  </th>
                  <th className="py-3 px-3.5 sm:px-4 font-bold bg-[#00D285]/15 text-[#041510] rounded-t-lg min-w-[140px] sm:min-w-[150px] md:min-w-0 md:w-1/5">
                    Growth (₹14,999+)
                  </th>
                  <th className="py-3 px-3.5 sm:px-4 font-bold min-w-[140px] sm:min-w-[150px] md:min-w-0 md:w-1/5">
                    Premium (₹24,999+)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#00D285]/10">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#F4FAF6] transition-colors">
                    <td className="py-3 px-3.5 sm:px-4 font-medium text-[#041510] leading-snug">
                      {row.feature}
                    </td>
                    <td className="py-3 px-3.5 sm:px-4 text-[#0A241D]/80">
                      {typeof row.starter === "boolean" ? (
                        row.starter ? (
                          <Check size={16} className="text-[#00D285]" strokeWidth={2.5} />
                        ) : (
                          <X size={16} className="text-[#0A241D]/30" />
                        )
                      ) : (
                        row.starter
                      )}
                    </td>
                    <td className="py-3 px-3.5 sm:px-4 text-[#041510] font-semibold bg-[#00D285]/10">
                      {typeof row.growth === "boolean" ? (
                        row.growth ? (
                          <Check size={16} className="text-[#00D285]" strokeWidth={2.5} />
                        ) : (
                          <X size={16} className="text-[#0A241D]/30" />
                        )
                      ) : (
                        row.growth
                      )}
                    </td>
                    <td className="py-3 px-3.5 sm:px-4 text-[#0A241D]/80">
                      {typeof row.premium === "boolean" ? (
                        row.premium ? (
                          <Check size={16} className="text-[#00D285]" strokeWidth={2.5} />
                        ) : (
                          <X size={16} className="text-[#0A241D]/30" />
                        )
                      ) : (
                        row.premium
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </section>

      {/* Enterprise Custom Note */}
      <section className="pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-[#F4FAF6] rounded-2xl p-6 sm:p-8 border border-[#00D285]/20 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center sm:text-left">
            <div className="flex items-center gap-2 justify-center sm:justify-start">
              <Shield size={16} className="text-[#00D285]" />
              <h4 className="font-display font-bold text-base sm:text-lg text-[#041510]">
                Need custom integrations or bespoke enterprise architecture?
              </h4>
            </div>
            <p className="text-xs sm:text-sm text-[#0A241D]/75 max-w-2xl font-sans">
              For complex booking workflows, high-scale database portals, or internal business
              calculators, we prepare formal line-item proposals following a brief scoping call.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onNavigate("/start-a-project?bundle=Custom")}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-mono text-xs font-bold uppercase tracking-wider text-[#041510] bg-[#00D285] hover:bg-[#00e599] transition-all cursor-pointer shrink-0 shadow-[0_0_12px_rgba(0,210,133,0.3)]"
          >
            <span>CUSTOM SCOPE INQUIRY</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </section>

      {/* FAQ Accordion */}
      <FaqSection onContactClick={() => onNavigate("/contact")} />
    </div>
  );
}

export default PricingPage;
