import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion, type HTMLMotionProps } from "motion/react";

interface ExploreWorkButtonProps extends HTMLMotionProps<"button"> {
  onClick?: () => void;
  className?: string;
  label?: string;
}

export function ExploreWorkButton({
  onClick,
  className = "",
  label = "EXPLORE OUR WORK",
  ...props
}: ExploreWorkButtonProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={shouldReduceMotion ? {} : { y: -2, scale: 1.02 }}
      whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
      transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-mono text-xs sm:text-sm font-bold tracking-wider uppercase overflow-hidden cursor-pointer select-none bg-[#235347] text-[#FFFFFF] border border-[#235347] hover:bg-[#163832] hover:border-[#163832] shadow-sm hover:shadow-[0_6px_24px_rgba(35,83,71,0.25)] transition-colors duration-300 ${className}`}
      {...props}
    >
      {/* Soft ambient hover glow behind button */}
      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#8EB69B]/0 via-[#8EB69B]/25 to-[#8EB69B]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      <span className="relative z-10 transition-colors duration-200">{label}</span>
      <ArrowRight
        size={16}
        className="relative z-10 transition-transform duration-300 ease-out group-hover:translate-x-1.5"
      />
    </motion.button>
  );
}

export default ExploreWorkButton;
