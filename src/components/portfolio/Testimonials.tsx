import { SectionHeader } from "./SectionHeader";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Honestly didn't expect this level of polish. Site went live in under two weeks and we started getting inquiries the same week.",
    name: "Rohan M.",
    role: "Founder, Local Retail Co.",
    location: "Patna",
    span: "md:col-span-2",
  },
  {
    quote:
      "Smooth from brief to launch. Felt like working with a small agency, not a freelancer.",
    name: "Priya S.",
    role: "Salon Owner",
    location: "Delhi",
    span: "",
  },
  {
    quote:
      "Loved the design taste. Looks expensive without being loud.",
    name: "Aman K.",
    role: "Gym Owner",
    location: "Lucknow",
    span: "",
  },
  {
    quote:
      "Responsive, organized, and patient with the back and forth. Recommended.",
    name: "Neha R.",
    role: "Boutique Founder",
    location: "Mumbai",
    span: "md:col-span-2",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-32 relative">
      <div className="container mx-auto px-6">
        <SectionHeader
          eyebrow="Kind Words"
          title={
            <>
              What clients <span className="text-gradient-gold italic">say</span>
            </>
          }
        />

        <div className="mt-20 grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <figure
              key={t.name}
              className={`relative glass rounded-3xl p-8 hover-lift ${t.span} ${i % 2 === 1 ? "md:translate-y-6" : ""}`}
            >
              <Quote className="text-gold/40 mb-5" size={28} />
              <blockquote className="text-[1.05rem] leading-[1.7] font-display italic">
                "{t.quote}"
              </blockquote>
              <div className="mt-8 flex items-center justify-between">
                <figcaption>
                  <div className="text-sm font-medium">{t.name}</div>
                  <div className="text-[0.7rem] text-muted-foreground uppercase tracking-[0.18em] mt-1">
                    {t.role} · {t.location}
                  </div>
                </figcaption>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} size={12} className="fill-gold text-gold" />
                  ))}
                </div>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
