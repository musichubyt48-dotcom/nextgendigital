import { useState, useRef, MouseEvent } from "react";
import { Check, Sparkles, ArrowRight } from "lucide-react";
import { useReducedMotion } from "motion/react";

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  priceNote: string;
  idealFor: string;
  isPopular: boolean;
  badge: string | null;
  scope: string[];
  cta: string;
}

interface PricingCard3DProps {
  plan: PricingPlan;
  onSelect: (planName: string, budgetRange: string) => void;
}

export function PricingCard3D({ plan, onSelect }: PricingCard3DProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Calculate percentage across card (0 to 100)
    const px = (x / rect.width) * 100;
    const py = (y / rect.height) * 100;
    setMousePos({ x: px, y: py });

    // Controlled subtle tilt: max 3-4 degrees to keep usability and typography crisp
    const rX = (y / rect.height - 0.5) * -6;
    const rY = (x / rect.width - 0.5) * 6;
    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  const isGrowth = plan.isPopular;

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 1000 }}
      className={`relative rounded-2xl sm:rounded-3xl transition-all duration-300 ease-out select-none flex flex-col justify-between transform-gpu w-full ${
        isGrowth
          ? isHovered
            ? "bg-[#0B2B26] text-[#DAF1DE] shadow-[0_24px_55px_rgba(5,31,32,0.35),0_0_35px_rgba(142,182,155,0.25)] md:scale-[1.035] -translate-y-1 sm:-translate-y-2 border-2 border-[#8EB69B] z-20"
            : "bg-[#0B2B26] text-[#DAF1DE] shadow-2xl md:scale-[1.02] border-2 border-[#8EB69B]/60 z-10"
          : isHovered
            ? "bg-white text-[#163832] shadow-float md:scale-[1.015] -translate-y-1 sm:-translate-y-1.5 border border-[#235347]/30"
            : "bg-white text-[#163832] shadow-card border border-[#235347]/15"
      }`}
    >
      {/* 3D Moving Wrapper */}
      <div
        style={{
          transform: shouldReduceMotion
            ? "none"
            : `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(${isHovered ? 8 : 0}px)`,
          transformStyle: "preserve-3d",
          transition: isHovered ? "none" : "transform 0.5s ease-out",
        }}
        className="relative p-5 sm:p-9 rounded-2xl sm:rounded-3xl flex flex-col justify-between h-full overflow-hidden"
      >
        {/* Cursor-Following Radial Highlight */}
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl sm:rounded-3xl opacity-0 transition-opacity duration-300"
          style={{
            opacity: isHovered ? (isGrowth ? 0.3 : 0.12) : 0,
            background: `radial-gradient(420px circle at ${mousePos.x}% ${mousePos.y}%, ${
              isGrowth ? "#8EB69B" : "#DAF1DE"
            }, transparent 60%)`,
          }}
        />

        {/* Card Header */}
        <div className="relative z-10 space-y-3 sm:space-y-4">
          <div className="flex items-center justify-between">
            <span
              className={`font-mono text-[11px] sm:text-xs uppercase tracking-widest font-bold px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full ${
                isGrowth
                  ? "bg-[#163832] text-[#DAF1DE] border border-[#8EB69B]/30"
                  : "bg-[#DAF1DE] text-[#163832] border border-[#235347]/15"
              }`}
            >
              {plan.name}
            </span>

            {isGrowth && (
              <span className="inline-flex items-center gap-1 sm:gap-1.5 font-mono text-[10px] sm:text-[0.6875rem] uppercase tracking-wider text-[#0B2B26] bg-[#DAF1DE] px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full font-bold shadow-sm">
                <Sparkles size={11} />
                <span>MOST POPULAR</span>
              </span>
            )}

            {!isGrowth && plan.badge && (
              <span className="font-mono text-[10px] sm:text-[0.6875rem] uppercase tracking-wider text-[#163832]/65 border border-[#235347]/15 px-2 sm:px-2.5 py-0.5 rounded-full">
                {plan.badge}
              </span>
            )}
          </div>

          <div>
            <div className="flex items-baseline gap-2">
              <span className="font-display font-extrabold text-3xl sm:text-5xl tracking-tight text-[#0B2B26]">
                <span className={isGrowth ? "text-[#FFFFFF]" : "text-[#0B2B26]"}>{plan.price}</span>
              </span>
            </div>
            <p
              className={`font-mono text-[11px] sm:text-xs mt-1 ${
                isGrowth ? "text-[#DAF1DE]/70" : "text-[#163832]/65"
              }`}
            >
              {plan.priceNote} · {plan.idealFor}
            </p>
          </div>

          {/* Scope Checklist */}
          <div className="pt-4 space-y-2.5 border-t border-current/10">
            <span
              className={`font-mono text-[0.6875rem] uppercase tracking-widest block font-bold ${
                isGrowth ? "text-[#8EB69B]" : "text-[#235347]"
              }`}
            >
              Included In Scope:
            </span>
            <ul className="space-y-2.5">
              {plan.scope.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm leading-snug">
                  <span
                    className={`h-4 w-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                      isGrowth ? "bg-[#DAF1DE] text-[#0B2B26]" : "bg-[#DAF1DE] text-[#235347]"
                    }`}
                  >
                    <Check size={11} strokeWidth={3} />
                  </span>
                  <span className={isGrowth ? "text-[#DAF1DE]/90" : "text-[#163832]/85"}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA Micro-Animation */}
        <div className="relative z-10 pt-8 mt-6 border-t border-current/10">
          <button
            type="button"
            onClick={() => onSelect(plan.name, plan.price)}
            className={`group w-full py-4 px-6 rounded-2xl font-mono text-xs sm:text-sm font-bold tracking-wider uppercase flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer shadow-sm active:scale-95 ${
              isGrowth
                ? "bg-[#DAF1DE] text-[#0B2B26] hover:bg-[#FFFFFF] hover:shadow-[0_4px_25px_rgba(218,241,222,0.4)]"
                : "bg-[#235347] text-[#FFFFFF] hover:bg-[#163832]"
            }`}
          >
            <span>{plan.cta}</span>
            <ArrowRight
              size={15}
              className="transition-transform duration-300 ease-out group-hover:translate-x-1"
            />
          </button>
          <div
            className={`text-center font-mono text-[0.6875rem] mt-2 ${
              isGrowth ? "text-[#DAF1DE]/60" : "text-[#163832]/50"
            }`}
          >
            Full asset & code ownership included
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricingCard3D;
