import { SectionHeader } from "./SectionHeader";
import { ArrowUpRight } from "lucide-react";
import constructionImg from "@/assets/project-construction.webp";
import sungavaImg from "@/assets/images/sungava_resort_real_1791467430511.jpg";
import infinityImg from "@/assets/images/infinity_store_real_1791467450432.jpg";
import gymImg from "@/assets/images/fitness_gym_real_1791467464759.jpg";

const projects = [
  {
    img: sungavaImg,
    category: "Hospitality",
    title: "Sungava Resort & Spa",
    year: "2026",
    desc: "Luxury Himalayan resort website with rooms, experiences, wellness spa and direct booking flow.",
    tags: ["Hospitality", "Booking", "Luxury"],
    href: "https://sungava-resort-spa.ai.studio/",
    span: "lg:col-span-2 lg:row-span-2",
    aspect: "aspect-[4/5]",
  },
  {
    img: infinityImg,
    category: "E-Commerce",
    title: "Infinity Store",
    year: "2026",
    desc: "Campus quick-commerce platform designed for fast ordering and delivery of everyday essentials.",
    tags: ["E-Commerce", "Quick-Commerce", "Cart"],
    href: "https://infinitystore-xi.vercel.app/",
    span: "",
    aspect: "aspect-[4/3]",
  },
  {
    img: gymImg,
    category: "Fitness",
    title: "Fitness Gym",
    year: "2026",
    desc: "Modern fitness website focused on gym services, training and membership conversion.",
    tags: ["Fitness", "Memberships", "Training"],
    href: "https://gymwebsite.musichubyt48.workers.dev/",
    span: "",
    aspect: "aspect-[4/3]",
  },
  {
    img: constructionImg,
    category: "Construction",
    title: "A B Construction",
    year: "2026",
    desc: "Professional construction website showcasing projects, contracting services and commercial enquiries.",
    tags: ["Corporate", "Contracting", "Enquiry"],
    href: "https://abconstrution.com/",
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
                <h3 className="font-display text-[1.4rem] sm:text-[1.7rem] mb-2 leading-tight">
                  {p.title}
                </h3>
                <p className="text-[0.82rem] sm:text-[0.88rem] text-muted-foreground mb-4 leading-relaxed line-clamp-3 sm:line-clamp-none">
                  {p.desc}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[0.65rem] uppercase tracking-wider text-muted-foreground/70 border border-border rounded-full px-2.5 py-0.5"
                      >
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
