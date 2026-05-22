export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: "center" | "left";
}) {
  const isCenter = align === "center";
  return (
    <div
      className={`${isCenter ? "max-w-2xl mx-auto text-center" : "max-w-3xl"}`}
    >
      <div
        className={`inline-flex items-center gap-3 text-[0.7rem] uppercase tracking-[0.32em] text-gold/90 mb-5`}
      >
        <span className="h-px w-6 bg-gradient-to-r from-transparent to-gold" />
        <span className="font-medium">{eyebrow}</span>
        {isCenter && (
          <span className="h-px w-6 bg-gradient-to-l from-transparent to-gold" />
        )}
      </div>
      <h2 className="font-display text-[2.4rem] md:text-5xl lg:text-[3.6rem] leading-[1.05] tracking-tight">
        {title}
      </h2>
      {description && (
        <p className={`mt-6 text-[0.98rem] text-muted-foreground leading-[1.75] ${isCenter ? "max-w-xl mx-auto" : "max-w-lg"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
