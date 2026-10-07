import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";

interface ImageRevealProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
  priority?: boolean;
}

export function ImageReveal({
  src,
  alt,
  className = "",
  aspectRatio = "aspect-[16/10]",
  priority = false,
}: ImageRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div className={`relative overflow-hidden ${aspectRatio} ${className}`}>
        <img
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          className="w-full h-full object-cover"
        />
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden ${aspectRatio} bg-[#235347]/10 ${className}`}
    >
      <motion.div
        initial={{ scale: 1.12, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 1.12, opacity: 0 }}
        transition={{
          duration: 1.1,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="w-full h-full"
      >
        <img
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        />
      </motion.div>
    </div>
  );
}
