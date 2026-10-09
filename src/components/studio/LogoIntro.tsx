import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import logo from "@/assets/images/zivdev_main_logo.png";

interface LogoIntroProps {
  onComplete?: () => void;
}

export function LogoIntro({ onComplete }: LogoIntroProps) {
  const [isVisible, setIsVisible] = useState(true);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    // Check if animation already ran in this session
    const hasSeenIntro = sessionStorage.getItem("zivdev_intro_seen");
    if (hasSeenIntro) {
      setIsVisible(false);
      onComplete?.();
      return;
    }

    // Auto-complete after 1.4s (or 0.3s if reduced motion)
    const timeout = setTimeout(
      () => {
        setIsVisible(false);
        sessionStorage.setItem("zivdev_intro_seen", "true");
        onComplete?.();
      },
      shouldReduceMotion ? 400 : 1450,
    );

    return () => clearTimeout(timeout);
  }, [onComplete, shouldReduceMotion]);

  const handleSkip = () => {
    setIsVisible(false);
    sessionStorage.setItem("zivdev_intro_seen", "true");
    onComplete?.();
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="logo-intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] as const } }}
          onClick={handleSkip}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#FAF9F6] select-none cursor-pointer overflow-hidden grain-overlay"
        >
          {/* Subtle ambient blur glow */}
          <div className="absolute w-80 h-80 rounded-full bg-[#DAF1DE]/70 blur-3xl pointer-events-none" />

          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.94 }}
            animate={
              shouldReduceMotion
                ? { opacity: 1 }
                : {
                    opacity: 1,
                    scale: [0.94, 1, 0.98],
                    transition: { duration: 1.35, ease: [0.16, 1, 0.3, 1] as const },
                  }
            }
            className="relative flex flex-col sm:flex-row items-center gap-4 sm:gap-5 px-6 text-center sm:text-left"
          >
            {/* 1. ZIVDEV Logo Mark reveals first */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.7, rotate: -8 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] as const }}
              className="relative h-16 w-16 sm:h-20 sm:w-20 rounded-2xl bg-[#041510] flex items-center justify-center shadow-xl border border-[#00D285]/35 p-2.5"
            >
              <img src={logo} alt="ZIVDEV" className="w-full h-full object-contain" />
              <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-[#00D285] shadow-[0_0_10px_rgba(0,210,133,0.6)]" />
            </motion.div>

            {/* Typography Stagger */}
            <div className="flex flex-col">
              {/* 2. "ZIVDEV" reveals */}
              <motion.div
                initial={
                  shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: -16, filter: "blur(4px)" }
                }
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.45, delay: 0.25, ease: [0.16, 1, 0.3, 1] as const }}
                className="font-display font-extrabold text-3xl sm:text-5xl tracking-tight uppercase text-[#041510] leading-none"
              >
                ZIVDEV
              </motion.div>

              {/* 3. "STUDIO & SYSTEMS" follows */}
              <motion.div
                initial={
                  shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: 16, filter: "blur(4px)" }
                }
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.45, delay: 0.48, ease: [0.16, 1, 0.3, 1] as const }}
                className="font-mono text-xs sm:text-sm font-bold uppercase tracking-[0.38em] text-[#00D285] mt-1"
              >
                STUDIO & SYSTEMS
              </motion.div>
            </div>
          </motion.div>

          {/* Skip hint */}
          <div className="absolute bottom-8 font-mono text-[0.6875rem] uppercase tracking-widest text-[#235347]/50">
            Click anywhere to enter
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
