import { SectionHeader } from "./SectionHeader";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Professional work and modern design. Our business now looks premium online.",
    name: "Rohan M.",
    role: "Business Owner",
  },
  {
    quote:
      "Fast delivery and smooth communication throughout the project.",
    name: "Priya S.",
    role: "Salon Founder",
  },
  {
    quote:
      "Excellent website quality with modern UI and responsive design.",
    name: "Aman K.",
    role: "Gym Owner",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-32 relative">
      <div className="container mx-auto px-6">
        <SectionHeader
          eyebrow="Testimonials"
          title={
            <>
              Words From <span className="text-gradient-gold italic">Clients</span>
            </>
          }
        />

        <div className="mt-20 grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="relative glass rounded-3xl p-8 hover-lift"
            >
              <Quote className="text-gold/40 mb-6" size={32} />
              <blockquote className="text-lg leading-relaxed font-display italic">
                "{t.quote}"
              </blockquote>
              <div className="mt-8 flex items-center justify-between">
                <figcaption>
                  <div className="text-sm font-medium">{t.name}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">
                    {t.role}
                  </div>
                </figcaption>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} className="fill-gold text-gold" />
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
