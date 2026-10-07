import { useRef, useState, useEffect, ReactNode, MouseEvent } from "react";
import { motion, useReducedMotion } from "motion/react";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "lime" | "outline-teal";
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export function MagneticButton({
  children,
  className = "",
  onClick,
  variant = "primary",
  type = "button",
  disabled = false,
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const shouldReduceMotion = useReducedMotion();

  const handleMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
    if (shouldReduceMotion || disabled || !ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    // Subtle magnetic strength (~3-4px pull)
    const distanceX = (clientX - centerX) * 0.22;
    const distanceY = (clientY - centerY) * 0.22;
    setPosition({ x: distanceX, y: distanceY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const getVariantStyles = () => {
    switch (variant) {
      case "primary":
        // Forest green #235347 with white text, hovering to deep green #163832
        return "bg-[#235347] text-[#FFFFFF] hover:bg-[#163832] shadow-sm hover:shadow-md border border-transparent";
      case "lime":
        // Light mint background with deep green text, hovering to forest green
        return "bg-[#DAF1DE] text-[#163832] hover:bg-[#235347] hover:text-[#FFFFFF] shadow-sm hover:shadow-md border border-[#8EB69B]/50";
      case "secondary":
        return "bg-[#DAF1DE] text-[#163832] border border-[#8EB69B] hover:border-[#235347] hover:bg-[#235347] hover:text-[#FFFFFF]";
      case "outline-teal":
        return "bg-transparent text-[#163832] border-2 border-[#235347] hover:bg-[#235347] hover:text-[#FFFFFF]";
      default:
        return "bg-[#235347] text-[#FFFFFF]";
    }
  };

  return (
    <motion.button
      ref={ref}
      type={type}
      disabled={disabled}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        x: shouldReduceMotion ? 0 : position.x,
        y: shouldReduceMotion ? 0 : position.y,
      }}
      transition={{
        type: "spring",
        stiffness: 220,
        damping: 18,
        mass: 0.1,
      }}
      className={`relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider transition-colors duration-300 select-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed ${getVariantStyles()} ${className}`}
    >
      {children}
    </motion.button>
  );
}
