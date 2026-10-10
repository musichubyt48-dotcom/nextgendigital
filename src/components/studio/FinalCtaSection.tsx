import { ArrowRight, MessageCircle, Mail, Instagram } from "lucide-react";
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
    <section className="py-14 sm:py-24 md:py-36 bg-gradient-to-b from-[#06211A] to-[#041510] text-[#E8F7EE] relative overflow-hidden border-t border-[#00D285]/20">
      {/* Subtle ambient moving blur discs */}
      <motion.div
        animate={
          shouldReduceMotion
            ? {}
            : {
                scale: [1, 1.15, 1],
                opacity: [0.15, 0.25, 0.15],
              }
        }
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-24 -left-24 w-96 h-96 bg-[#00D285]/20 rounded-full blur-[120px] pointer-events-none"
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
        className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#0E3D30]/40 rounded-full blur-[110px] pointer-events-none"
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
            <div className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-[#00D285]/10 px-3 sm:px-4 py-1 sm:py-1.5 text-[11px] sm:text-xs font-mono uppercase tracking-widest text-[#00D285] border border-[#00D285]/30">
              <span>08 / Direct Studio Consultation</span>
            </div>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-fluid-section font-display font-extrabold uppercase tracking-tight text-[#FFFFFF] max-w-4xl mx-auto leading-tight"
          >
            Ready to Build Your Next <br />
            <span className="text-[#00D285] underline decoration-[#00D285] decoration-4 underline-offset-8">
              Digital Presence?
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xs sm:text-base md:text-xl text-[#A4CBB7] max-w-2xl mx-auto leading-relaxed font-sans"
          >
            Tell us what you're building and let's turn the idea into a professional digital
            experience designed for your business.
          </motion.p>

          {/* Primary CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
          >
            <button
              type="button"
              onClick={onStartProject}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-mono text-xs sm:text-sm font-bold tracking-wider uppercase bg-[#00D285] text-[#041510] hover:bg-[#00e599] shadow-[0_0_28px_rgba(0,210,133,0.45)] transition-all cursor-pointer select-none active:scale-98"
            >
              <span>START A PROJECT →</span>
              <ArrowRight size={16} />
            </button>

            <ExploreWorkButton
              onClick={onExploreWork}
              className="w-full sm:w-auto !py-3.5 sm:!py-4 !px-6 sm:!px-8 !bg-[#06261E]/80 !border-[#00D285]/30 !text-[#E8F7EE] hover:!bg-[#0E3D30] hover:!text-white backdrop-blur-md"
            />
          </motion.div>

          {/* Fast Direct Channels */}
          <motion.div
            variants={itemVariants}
            className="pt-6 sm:pt-8 border-t border-[#8EB69B]/15 flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-6 text-[11px] sm:text-xs font-mono text-[#DAF1DE]/70"
          >
            <a
              href="https://wa.me/918509332038?text=Hello%20ZIVDEV,%20I%20would%20like%20to%20discuss%20a%20website%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[#FFFFFF] transition-colors"
            >
              <MessageCircle size={14} className="text-[#8EB69B]" />
              <span>WhatsApp: +91 85093 32038</span>
            </a>
            <span className="hidden sm:inline">·</span>
            <a
              href="mailto:zivdevofficial@gmail.com"
              className="flex items-center gap-2 hover:text-[#FFFFFF] transition-colors"
            >
              <Mail size={14} className="text-[#8EB69B]" />
              <span>zivdevofficial@gmail.com</span>
            </a>
            <span className="hidden sm:inline">·</span>
            <a
              href="https://www.instagram.com/zivdevofficial?stkn=dDVtNHN6OGVrbHZ4"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[#FFFFFF] transition-colors"
            >
              <Instagram size={14} className="text-[#8EB69B]" />
              <span>Instagram: @zivdevofficial</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default FinalCtaSection;
