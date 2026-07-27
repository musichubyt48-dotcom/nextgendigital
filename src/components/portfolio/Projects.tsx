import { SectionHeader } from "./SectionHeader";
import { ArrowUpRight } from "lucide-react";
import constructionImg from "@/assets/project-construction.webp";
import dentalImg from "@/assets/project-dental.webp";
import gymImg from "@/assets/project-gym-demo.webp";
import salonImg from "@/assets/project-salon-demo.webp";

const projects = [
  {
    img: constructionImg,
    category: "Construction",
    title: "A B Construction",
    year: "2025",
    desc: "Premium dark-theme site for a South Sikkim construction firm — built to project trust, scale, and 25+ years of heritage.",
    tags: ["Branding", "Editorial", "Lead-gen"],
    href: "https://ab-build-trust.musichubyt48.workers.dev/",
    span: "lg:col-span-2 lg:row-span-2",
    aspect: "aspect-[4/5]",
  },
  {
    img: dentalImg,
    category: "Healthcare",
    title: "Gayatri Dental Clinic",
    year: "2025",
    desc: "Clean, calming clinic site with online appointment booking, services, and gallery.",
    tags: ["Booking", "SEO", "Local"],
    href: "https://gayatridentalclinic.musichubyt48.workers.dev/",
    span: "",
    aspect: "aspect-[4/3]",
  },
  {
    img: gymImg,
    category: "Fitness",
    title: "Fit Fitness Gym",
    year: "2025",
    desc: "Bold, high-energy gym website with membership plans, BMI tool, and trainer call-to-actions.",
    tags: ["Conversion", "Mobile-first"],
    href: "https://gymwebsite.musichubyt48.workers.dev/",
    span: "",
    aspect: "aspect-[4/3]",
  },
  {
    img: salonImg,
    category: "Beauty",
    title: "Looks Salon",
    year: "2025",
    desc: "Luxurious unisex salon experience with online appointments, services, and franchise inquiries.",
    tags: ["Luxury", "Booking", "Multi-branch"],
    href: "https://salonwebsitedemo.musichubyt48.workers.dev/",
    span: "lg:col-span-2",
    aspect: "aspect-[16/9]",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-5 sm:px-6">
        <SectionHeader
          eyebrow="Selected Work"
          align="left"
          title={
            <>
              A few recent <span className="text-gradient-gold italic">favorites</span>.
            </>
          }
          description="Look at Our Premium Website Design and Demo's. "
        />

        <div className="mt-14 md:mt-20 grid lg:grid-cols-3 lg:grid-rows-2 gap-5">
          {projects.map((p) => (
            <article
              key={p.title}
              className={`group relative glass rounded-3xl overflow-hidden hover-lift ${p.span}`}
            >
              <div className={`relative ${p.aspect} overflow-hidden`}>
                <img
                  src={p.img}
                  alt={`${p.title} preview`}
                  width={1280}
                  height={960}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
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
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
                <h3 className="font-display text-[1.4rem] sm:text-[1.7rem] mb-2 leading-tight">{p.title}</h3>
                <p className="text-[0.82rem] sm:text-[0.88rem] text-muted-foreground mb-4 leading-relaxed line-clamp-3 sm:line-clamp-none">{p.desc}</p>
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span key={t} className="text-[0.65rem] uppercase tracking-wider text-muted-foreground/70 border border-border rounded-full px-2.5 py-0.5">
                        {t}
                      </span>
                    ))}
                  </div>
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-gold hover:gap-2 transition-all"
                  >
                    Visit
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
