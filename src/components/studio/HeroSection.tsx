import { ArrowRight, Sparkles, Clock, ShieldCheck, Headphones, Zap } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import heroDevicesImg from "@/assets/images/regenerated_image_1791527216389.png";
import heroMountainsImg from "@/assets/images/hero_misty_mountains_1791390846280.jpg";

interface HeroSectionProps {
  onStartProject?: () => void;
  onViewWork: () => void;
}

export function HeroSection({ onStartProject, onViewWork }: HeroSectionProps) {
  const shouldReduceMotion = useReducedMotion();

  // 4 Bottom Dock Feature Cards matching reference
  const featureCards = [
    {
      title: "Modern Design",
      subtitle: "Clean & Professional",
      icon: Sparkles,
    },
    {
      title: "Fast Delivery",
      subtitle: "On Time, Always",
      icon: Clock,
    },
    {
      title: "Affordable Price",
      subtitle: "Best Value, Always",
      icon: ShieldCheck,
    },
    {
      title: "24/7 Support",
      subtitle: "We're Always Here",
      icon: Headphones,
    },
  ];

  const handlePrimaryClick = () => {
    if (onStartProject) {
      onStartProject();
    } else {
      onViewWork();
    }
  };

  return (
    <section className="relative min-h-[95vh] lg:min-h-screen flex flex-col justify-between pt-28 pb-10 md:pt-36 md:pb-14 overflow-hidden bg-[#041510] text-white selection:bg-[#00D285] selection:text-[#041510]">
      {/* 1. Cinematic Background Mountain Silhouettes & Deep Emerald Atmosphere */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        {/* Misty Mountain Background */}
        <img
          src={heroMountainsImg}
          alt="Atmospheric Mountain Backdrop"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-30 mix-blend-luminosity scale-105"
        />

        {/* Ambient Emerald Volumetric Glow Fields */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#041510]/80 via-[#041510]/60 to-[#041510]" />

        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  x: [-20, 20, -20],
                  y: [-15, 15, -15],
                  scale: [1, 1.1, 1],
                }
          }
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 right-10 lg:right-1/4 w-[28rem] sm:w-[38rem] h-[28rem] bg-[#00D285]/12 rounded-full blur-[140px] pointer-events-none"
        />

        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  x: [15, -15, 15],
                  y: [10, -10, 10],
                }
          }
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-10 left-10 w-[24rem] h-[24rem] bg-[#0E3D30]/35 rounded-full blur-[130px] pointer-events-none"
        />

        {/* Subtle grid texture overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(0,210,133,0.06)_1px,transparent_1px)] [background-size:28px_28px] opacity-60" />
      </div>

      {/* 2. Main Hero Container (Desktop 2-Col / Mobile Stacked) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-2 sm:pt-6">
          {/* Left Column: Value Proposition & CTAs (7 cols on desktop) */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-4 sm:space-y-6 text-left"
          >
            {/* Eyebrow Pill Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-[#06261E]/85 border border-[#00D285]/35 px-3.5 py-1 sm:px-4 sm:py-1.5 shadow-[0_0_20px_rgba(0,210,133,0.18)] backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-[#00D285] animate-pulse shadow-[0_0_8px_#00D285]" />
              <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-[#00D285] font-semibold">
                ✦ YOUR GROWTH PARTNER
              </span>
            </div>

            {/* Main Headline with Glowing Green Highlight */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-display font-extrabold uppercase tracking-tight leading-[1.03] text-white">
              WEBSITES BUILT{" "}
              <span className="block text-[#00D285] drop-shadow-[0_0_35px_rgba(0,210,133,0.4)]">
                AROUND YOUR BUSINESS.
              </span>
            </h1>

            {/* Supporting Description */}
            <p className="text-sm sm:text-base md:text-lg font-sans text-[#A4CBB7] leading-relaxed max-w-xl font-normal">
              We create fast, modern and high-performing websites, custom web applications and
              digital solutions to help your business grow. Simple process, clear communication and
              real support — always.
            </p>

            {/* Action Buttons Row */}
            <div className="pt-2 sm:pt-3 flex flex-row flex-wrap items-center gap-3 sm:gap-4">
              {/* Primary Glowing Capsule Button */}
              <button
                type="button"
                onClick={handlePrimaryClick}
                className="group relative inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-mono text-xs sm:text-sm font-bold uppercase tracking-wider bg-[#00D285] text-[#041510] hover:bg-[#00e599] hover:shadow-[0_0_32px_rgba(0,210,133,0.55)] transition-all duration-300 active:scale-98 cursor-pointer select-none"
              >
                <span>Get Started</span>
                <ArrowRight
                  size={16}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </button>

              {/* Secondary Dark Frosted Glass Capsule Button */}
              <button
                type="button"
                onClick={onViewWork}
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 rounded-full font-mono text-xs sm:text-sm font-medium uppercase tracking-wider bg-[#06261E]/75 hover:bg-[#0a382c] text-[#E8F7EE] border border-[#00D285]/30 hover:border-[#00D285]/60 hover:text-white backdrop-blur-md transition-all duration-300 active:scale-98 cursor-pointer select-none"
              >
                <span>View Our Work</span>
              </button>
            </div>
          </motion.div>

          {/* Right Column: 3D Laptop & Smartphone Showcase Render (5 cols on desktop) */}
          <motion.div
            initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative mt-4 lg:mt-0 flex items-center justify-center"
          >
            <div className="relative w-full max-w-[540px] group">
              {/* Soft atmospheric emerald back-glow with breathing pulse */}
              <motion.div
                animate={
                  shouldReduceMotion
                    ? {}
                    : {
                        opacity: [0.4, 0.75, 0.4],
                        scale: [0.97, 1.04, 0.97],
                      }
                }
                transition={
                  shouldReduceMotion
                    ? {}
                    : {
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }
                }
                className="absolute inset-0 bg-[#00D285]/25 rounded-3xl blur-[60px] pointer-events-none"
              />

              {/* High-Fidelity 3D Devices Showcase Card with smooth floating animation */}
              <motion.div
                animate={
                  shouldReduceMotion
                    ? {}
                    : {
                        y: [-7, 7, -7],
                      }
                }
                transition={
                  shouldReduceMotion
                    ? {}
                    : {
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }
                }
                className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-[#00D285]/30 bg-[#06211A]/70 shadow-[0_20px_50px_rgba(0,0,0,0.7),0_0_35px_rgba(0,210,133,0.18)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.85),0_0_50px_rgba(0,210,133,0.3)] transition-shadow duration-500 backdrop-blur-sm will-change-transform"
              >
                <img
                  src={heroDevicesImg}
                  alt="ZIVDEV 3D Website Showcase"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-[1.02] filter drop-shadow-[0_10px_25px_rgba(0,210,133,0.12)]"
                />

                {/* Subtle dark gradient overlay at bottom edge */}
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#041510]/80 to-transparent pointer-events-none" />
              </motion.div>

              {/* Floating Frosted Glass Feature Pill (⚡ Modern · Fast · Secure) */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={
                  shouldReduceMotion
                    ? { opacity: 1, y: 0 }
                    : {
                        opacity: 1,
                        y: [-3, 7, -3],
                      }
                }
                transition={{
                  opacity: { delay: 0.45, duration: 0.6 },
                  y: shouldReduceMotion
                    ? undefined
                    : {
                        duration: 5.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.3,
                      },
                }}
                className="absolute -top-3 sm:-top-4 -right-2 sm:-right-4 bg-[#06261E]/90 border border-[#00D285]/40 rounded-xl px-3 sm:px-4 py-1.5 sm:py-2 backdrop-blur-xl shadow-[0_8px_24px_rgba(0,0,0,0.6),0_0_15px_rgba(0,210,133,0.2)] flex items-center gap-2 will-change-transform"
              >
                <div className="h-6 w-6 rounded-lg bg-[#00D285]/20 flex items-center justify-center text-[#00D285]">
                  <Zap size={13} className="fill-[#00D285]" />
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-[9px] sm:text-[10px] text-[#00D285] font-bold uppercase tracking-wider">
                    ZIVDEV Performance
                  </span>
                  <span className="font-sans text-[10px] sm:text-xs text-white font-medium">
                    Modern · Fast · Secure
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 3. Bottom Docked Feature Cards Bar (Frosted Glass Container with 4 Cards) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-8 sm:mt-12 lg:mt-14">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#06211A]/80 backdrop-blur-xl border border-[#00D285]/25 rounded-2xl sm:rounded-3xl p-3 sm:p-5 lg:p-6 shadow-[0_16px_40px_rgba(0,0,0,0.55)]"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {featureCards.map((card, idx) => {
              const IconComp = card.icon;
              return (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 sm:gap-4 p-2 sm:p-3 rounded-xl sm:rounded-2xl transition-all duration-300 hover:bg-[#00D285]/10 group"
                >
                  {/* Icon Circle */}
                  <div className="h-9 w-9 sm:h-11 sm:w-11 rounded-xl bg-[#0A3326] flex items-center justify-center shrink-0 border border-[#00D285]/30 group-hover:border-[#00D285] group-hover:bg-[#00D285] group-hover:text-[#041510] text-[#00D285] transition-all duration-300 shadow-[0_0_12px_rgba(0,210,133,0.15)]">
                    <IconComp className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:scale-110" />
                  </div>

                  {/* Text Details */}
                  <div className="min-w-0 flex-1">
                    <div className="font-display font-bold text-xs sm:text-sm text-white tracking-tight truncate group-hover:text-[#00D285] transition-colors">
                      {card.title}
                    </div>
                    <div className="font-sans text-[10px] sm:text-xs text-[#8DB8A2] truncate">
                      {card.subtitle}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
