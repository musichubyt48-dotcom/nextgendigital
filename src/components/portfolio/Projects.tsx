import { SectionHeader } from "./SectionHeader";
import { ArrowUpRight } from "lucide-react";
import gymImg from "@/assets/project-gym.jpg";
import salonImg from "@/assets/project-salon.jpg";
import portfolioImg from "@/assets/project-portfolio.jpg";

const projects = [
  {
    img: gymImg,
    category: "Fitness",
    title: "Iron & Oak Gym",
    year: "2025",
    desc: "High-energy fitness brand with class booking, trainer profiles, and a bold landing page.",
    tags: ["Branding", "Booking", "Mobile-first"],
    span: "lg:col-span-2 lg:row-span-2",
    aspect: "aspect-[4/5]",
  },
  {
    img: salonImg,
    category: "Beauty",
    title: "Luxe Salon",
    year: "2025",
    desc: "Elegant salon experience with online appointments and service showcase.",
    tags: ["E-commerce", "SEO"],
    span: "",
    aspect: "aspect-[4/3]",
  },
  {
    img: portfolioImg,
    category: "Business",
    title: "Sterling Group",
    year: "2024",
    desc: "Premium corporate portfolio engineered to establish instant trust.",
    tags: ["Corporate", "Editorial"],
    span: "",
    aspect: "aspect-[4/3]",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-32 relative">
      <div className="container mx-auto px-6">
        <SectionHeader
          eyebrow="Selected Work"
          align="left"
          title={
            <>
              A few recent <span className="text-gradient-gold italic">favorites</span>.
            </>
          }
          description="A small, curated look at the kind of premium experiences I build for local businesses."
        />

        <div className="mt-20 grid lg:grid-cols-3 lg:grid-rows-2 gap-5">
          {projects.map((p) => (
            <article
              key={p.title}
              className={`group relative glass rounded-3xl overflow-hidden hover-lift ${p.span}`}
            >
              <div className={`relative ${p.aspect} overflow-hidden`}>
                <img
                  src={p.img}
                  alt={`${p.title} preview`}
                  className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                <div className="absolute top-5 left-5 right-5 flex items-start justify-between">
                  <span className="inline-flex items-center rounded-full glass-gold px-3 py-1 text-[0.65rem] uppercase tracking-[0.2em] text-gold-soft">
                    {p.category}
                  </span>
                  <span className="text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground">
                    {p.year}
                  </span>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-7">
                <h3 className="font-display text-[1.7rem] mb-2 leading-tight">{p.title}</h3>
                <p className="text-[0.88rem] text-muted-foreground mb-4 leading-relaxed">{p.desc}</p>
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span key={t} className="text-[0.65rem] uppercase tracking-wider text-muted-foreground/70 border border-border rounded-full px-2.5 py-0.5">
                        {t}
                      </span>
                    ))}
                  </div>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1 text-xs text-gold hover:gap-2 transition-all"
                  >
                    View
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
