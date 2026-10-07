import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { ScrollRevealText } from "@/components/motion/ScrollRevealText";

interface WhoWeAreSectionProps {
  onExploreAbout: () => void;
}

export function WhoWeAreSection({ onExploreAbout }: WhoWeAreSectionProps) {
  const shouldReduceMotion = useReducedMotion();

  const principles = [
    {
      num: "01",
      title: "Strategy Before Code",
      desc: "We analyze your customer journey, pricing model, and direct enquiry channels before writing a single line of code.",
    },
    {
      num: "02",
      title: "No Bloated Templates",
      desc: "Every website is engineered from scratch with clean TypeScript, high Core Web Vitals, and zero unnecessary plugins.",
    },
    {
      num: "03",
      title: "Commercial Utility",
      desc: "Built to generate real phone calls, direct WhatsApp bookings, and qualified sales leads for your physical or digital business.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="py-20 md:py-32 bg-[#DAF1DE]/30 border-t border-[#235347]/15 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
        >
          {/* Left Column: Editorial Heading */}
          <div className="lg:col-span-6 space-y-6">
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 rounded-full bg-[#DAF1DE] px-3.5 py-1 text-xs font-mono uppercase tracking-widest text-[#163832] border border-[#235347]/15">
                <span>02 / Who We Are</span>
              </div>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-fluid-section font-display font-bold uppercase text-[#0B2B26] tracking-tight"
            >
              We Build Around <br />
              <span className="text-[#0B2B26] underline decoration-[#8EB69B] decoration-4 underline-offset-8">
                The Business.
              </span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl font-medium text-[#163832]/90 leading-relaxed max-w-xl"
            >
              Every project starts with understanding the business, its customers and the goal
              behind the website.
            </motion.p>

            <motion.div variants={itemVariants}>
              <button
                type="button"
                onClick={onExploreAbout}
                className="inline-flex items-center gap-2 text-sm font-mono font-bold uppercase tracking-wider text-[#163832] hover:text-[#0B2B26] group pt-2 cursor-pointer"
              >
                <span>EXPLORE ABOUT</span>
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1.5 transition-transform"
                />
              </button>
            </motion.div>
          </div>

          {/* Right Column: Editorial Pillars */}
          <motion.div variants={itemVariants} className="lg:col-span-6 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#235347]/15 shadow-subtle space-y-8 transition-shadow duration-300 hover:shadow-card">
              <ScrollRevealText className="text-base sm:text-lg text-[#163832]/80 leading-relaxed">
                Most websites fail because they are built from generic templates that force
                businesses into rigid boxes. At NextGen Digital, we architect direct booking flows,
                high-converting product pages, and digital systems that reflect how your business
                actually operates.
              </ScrollRevealText>

              <div className="space-y-5 pt-4 border-t border-[#235347]/10">
                {principles.map((item, idx) => (
                  <motion.div
                    key={item.num}
                    initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 + idx * 0.1, duration: 0.5 }}
                    className="flex items-start gap-4 group"
                  >
                    <span className="font-mono text-xs font-bold text-[#0B2B26] bg-[#DAF1DE] border border-[#235347]/15 px-2.5 py-1 rounded-md shrink-0 transition-transform duration-300 group-hover:scale-105">
                      {item.num}
                    </span>
                    <div className="space-y-1">
                      <h4 className="font-display font-bold text-base sm:text-lg text-[#0B2B26]">
                        {item.title}
                      </h4>
                      <p className="text-sm text-[#163832]/75 leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default WhoWeAreSection;
