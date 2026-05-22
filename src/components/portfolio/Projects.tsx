import { SectionHeader } from "./SectionHeader";
import { ArrowUpRight } from "lucide-react";
import gymImg from "@/assets/project-gym.jpg";
import salonImg from "@/assets/project-salon.jpg";
import portfolioImg from "@/assets/project-portfolio.jpg";

const projects = [
  {
    img: gymImg,
    category: "Fitness",
    title: "Gym Website",
    desc: "High-energy fitness brand site with class booking and trainer profiles.",
  },
  {
    img: salonImg,
    category: "Beauty",
    title: "Salon Website",
    desc: "Elegant salon experience with online bookings and service showcase.",
  },
  {
    img: portfolioImg,
    category: "Business",
    title: "Business Portfolio",
    desc: "Premium corporate portfolio that establishes instant trust and authority.",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-32 relative">
      <div className="container mx-auto px-6">
        <SectionHeader
          eyebrow="Projects"
          title={
            <>
              Selected <span className="text-gradient-gold italic">Work</span>
            </>
          }
          description="A glimpse into the kind of premium experiences I craft for local businesses."
        />

        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group relative glass rounded-3xl overflow-hidden hover-lift"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={p.img}
                  alt={`${p.title} preview`}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <div className="absolute top-5 left-5">
                  <span className="inline-flex items-center rounded-full glass-gold px-3 py-1 text-xs uppercase tracking-wider text-gold-soft">
                    {p.category}
                  </span>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-7">
                <h3 className="font-display text-2xl mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground mb-5">{p.desc}</p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm text-gold hover:gap-3 transition-all"
                >
                  View Project
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
