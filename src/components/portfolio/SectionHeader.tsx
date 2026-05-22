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
  return (
    <div
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      <div
        className={`inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-gold mb-4 ${
          align === "center" ? "" : ""
        }`}
      >
        <span className="h-px w-8 bg-gold" />
        {eyebrow}
        <span className="h-px w-8 bg-gold" />
      </div>
      <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-muted-foreground leading-relaxed">{description}</p>
      )}
    </div>
  );
}
