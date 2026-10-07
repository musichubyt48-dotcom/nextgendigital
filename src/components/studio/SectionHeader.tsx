import React from "react";

interface SectionHeaderProps {
  number?: string;
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: "center" | "left";
  className?: string;
}

export function SectionHeader({
  number,
  eyebrow,
  title,
  description,
  align = "center",
  className = "",
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <div className={`${isCenter ? "max-w-2xl mx-auto text-center" : "max-w-3xl"} ${className}`}>
      {/* Eyebrow with gold gradient accent lines */}
      <div
        className={`inline-flex items-center gap-3 text-[0.6875rem] uppercase tracking-[0.28em] text-gold/90 mb-4 ${
          isCenter ? "justify-center" : ""
        }`}
      >
        <span className="h-px w-6 bg-gradient-to-r from-transparent to-gold" />
        {number && <span className="font-mono text-gold/70">{number} — </span>}
        <span className="font-medium">{eyebrow}</span>
        {isCenter && <span className="h-px w-6 bg-gradient-to-l from-transparent to-gold" />}
      </div>

      {/* Main Heading */}
      <h2 className="font-display text-[2rem] sm:text-4xl md:text-5xl lg:text-[3.4rem] leading-[1.08] tracking-tight text-foreground font-normal">
        {title}
      </h2>

      {/* Description */}
      {description && (
        <p
          className={`mt-5 text-sm sm:text-base text-muted-foreground leading-relaxed ${
            isCenter ? "max-w-xl mx-auto" : "max-w-xl"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
