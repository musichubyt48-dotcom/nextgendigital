import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { ScrollRevealText } from "@/components/motion/ScrollRevealText";
import founderImg from "@/assets/images/founder_ashutosh_1791398636715.jpg";

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
    <section className="py-20 md:py-32 bg-[#F8FAF9] border-t border-[#00D285]/15 relative overflow-hidden">
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
              <div className="inline-flex items-center gap-2 rounded-full bg-[#00D285]/10 px-3.5 py-1 text-xs font-mono uppercase tracking-widest text-[#00D285] border border-[#00D285]/25">
                <span>02 / Who We Are</span>
              </div>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-fluid-section font-display font-bold uppercase text-[#041510] tracking-tight"
            >
              We Build Around <br />
              <span className="text-[#041510] underline decoration-[#00D285] decoration-4 underline-offset-8">
                The Business.
              </span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl font-medium text-[#0A241D]/90 leading-relaxed max-w-xl"
            >
              Every project starts with understanding the business, its customers and the goal
              behind the website.
            </motion.p>

            <motion.div variants={itemVariants}>
              <button
                type="button"
                onClick={onExploreAbout}
                className="inline-flex items-center gap-2 text-sm font-mono font-bold uppercase tracking-wider text-[#041510] hover:text-[#00D285] group pt-2 cursor-pointer transition-colors"
              >
                <span>EXPLORE ABOUT</span>
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1.5 transition-transform text-[#00D285]"
                />
              </button>
            </motion.div>

            {/* Founder Card */}
            <motion.div
              variants={itemVariants}
              className="pt-6 border-t border-[#00D285]/15 flex items-center gap-4"
            >
              <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-[#00D285]/35 shrink-0 bg-[#041510] shadow-sm">
                <img
                  src={founderImg}
                  alt="Ashutosh Kumar Srivastava - Founder"
                  className="w-full h-full object-cover object-top"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="space-y-0.5">
                <h4 className="font-display font-bold text-base sm:text-lg text-[#041510] tracking-tight">
                  Ashutosh Kumar Srivastava
                </h4>
                <p className="font-mono text-xs text-[#00D285] font-bold uppercase tracking-wider">
                  Founder
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Editorial Pillars */}
          <motion.div variants={itemVariants} className="lg:col-span-6 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#00D285]/20 shadow-[0_4px_24px_rgba(4,21,16,0.06)] space-y-8 transition-shadow duration-300 hover:shadow-[0_8px_32px_rgba(4,21,16,0.1)]">
              <ScrollRevealText className="text-base sm:text-lg text-[#0A241D]/80 leading-relaxed">
                Most websites fail because they are built from generic templates that force
                businesses into rigid boxes. At JIVDEV, we architect direct booking flows,
                high-converting product pages, and digital systems that reflect how your business
                actually operates.
              </ScrollRevealText>

              <div className="space-y-5 pt-4 border-t border-[#00D285]/15">
                {principles.map((item, idx) => (
                  <motion.div
                    key={item.num}
                    initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 + idx * 0.1, duration: 0.5 }}
                    className="flex items-start gap-4 group"
                  >
                    <span className="font-mono text-xs font-bold text-[#041510] bg-[#00D285]/15 border border-[#00D285]/30 px-2.5 py-1 rounded-md shrink-0 transition-transform duration-300 group-hover:scale-105">
                      {item.num}
                    </span>
                    <div className="space-y-1">
                      <h4 className="font-display font-bold text-base sm:text-lg text-[#041510]">
                        {item.title}
                      </h4>
                      <p className="text-sm text-[#0A241D]/75 leading-relaxed">{item.desc}</p>
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
