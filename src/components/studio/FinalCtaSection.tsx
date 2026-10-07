import { ArrowRight, MessageCircle, Mail } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { ExploreWorkButton } from "@/components/studio/ExploreWorkButton";

interface FinalCtaSectionProps {
  onStartProject: () => void;
  onExploreWork: () => void;
}

export function FinalCtaSection({ onStartProject, onExploreWork }: FinalCtaSectionProps) {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.14,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="py-14 sm:py-24 md:py-36 bg-gradient-to-b from-[#0B2B26] to-[#051F20] text-[#DAF1DE] relative overflow-hidden border-t border-[#8EB69B]/20">
      {/* Subtle ambient moving blur discs */}
      <motion.div
        animate={
          shouldReduceMotion
            ? {}
            : {
                scale: [1, 1.15, 1],
                opacity: [0.12, 0.22, 0.12],
              }
        }
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-24 -left-24 w-96 h-96 bg-[#235347] rounded-full blur-[110px] pointer-events-none"
      />
      <motion.div
        animate={
          shouldReduceMotion
            ? {}
            : {
                scale: [1, 1.1, 1],
                opacity: [0.1, 0.2, 0.1],
              }
        }
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#163832] rounded-full blur-[110px] pointer-events-none"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-4 sm:space-y-8"
        >
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-[#DAF1DE]/10 px-3 sm:px-4 py-1 sm:py-1.5 text-[11px] sm:text-xs font-mono uppercase tracking-widest text-[#8EB69B] border border-[#8EB69B]/25">
              <span>08 / Direct Studio Consultation</span>
            </div>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-fluid-section font-display font-extrabold uppercase tracking-tight text-[#FFFFFF] max-w-4xl mx-auto leading-tight"
          >
            Ready to Build Your Next <br />
            <span className="text-[#DAF1DE] underline decoration-[#8EB69B] decoration-4 underline-offset-8">
              Digital Presence?
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xs sm:text-base md:text-xl text-[#DAF1DE]/80 max-w-2xl mx-auto leading-relaxed font-sans"
          >
            Tell us what you're building and let's turn the idea into a professional digital
            experience designed for your business.
          </motion.p>

          {/* Primary CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
          >
            <MagneticButton
              variant="lime"
              onClick={onStartProject}
              className="w-full sm:w-auto !py-3.5 sm:!py-4 !px-6 sm:!px-8 text-xs sm:text-sm font-mono tracking-wider font-bold shadow-[0_4px_20px_rgba(5,31,32,0.3)] transition-shadow"
            >
              <span>START A PROJECT →</span>
              <ArrowRight size={16} />
            </MagneticButton>

            <ExploreWorkButton
              onClick={onExploreWork}
              className="w-full sm:w-auto !py-3.5 sm:!py-4 !px-6 sm:!px-8 !bg-[#163832] !border-[#8EB69B]/30 !text-[#DAF1DE] hover:!bg-[#235347] hover:!text-[#FFFFFF]"
            />
          </motion.div>

          {/* Fast Direct Channels */}
          <motion.div
            variants={itemVariants}
            className="pt-6 sm:pt-8 border-t border-[#8EB69B]/15 flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-6 text-[11px] sm:text-xs font-mono text-[#DAF1DE]/70"
          >
            <a
              href="https://wa.me/918509332038?text=Hello%20NextGen%20Digital,%20I%20would%20like%20to%20discuss%20a%20website%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[#FFFFFF] transition-colors"
            >
              <MessageCircle size={14} className="text-[#8EB69B]" />
              <span>WhatsApp: +91 85093 32038</span>
            </a>
            <span className="hidden sm:inline">·</span>
            <a
              href="mailto:nextgendigitalofficial2026@gmail.com"
              className="flex items-center gap-2 hover:text-[#FFFFFF] transition-colors"
            >
              <Mail size={14} className="text-[#8EB69B]" />
              <span>nextgendigitalofficial2026@gmail.com</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default FinalCtaSection;
