import { SectionHeader } from "./SectionHeader";
import { Palette, Rocket, Briefcase, Code2, Search, Layout, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Website Design",
    desc: "Premium, modern interfaces designed pixel by pixel — built to convert, not just look pretty.",
    span: "md:col-span-2",
  },
  {
    icon: Rocket,
    title: "Fast Builds",
    desc: "Modern tools, quick turnaround — without cutting corners on quality.",
    span: "",
  },
  {
    icon: Briefcase,
    title: "Business Portfolios",
    desc: "Professional sites that establish authority and turn visitors into qualified leads.",
    span: "",
  },
  {
    icon: Code2,
    title: "Custom Websites",
    desc: "Tailored web experiences built around your brand, workflow, and customers.",
    span: "md:col-span-2",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    desc: "On-page SEO baked in from day one so Google can actually find you.",
    span: "",
  },
  {
    icon: Layout,
    title: "Modern UI/UX",
    desc: "Intuitive experiences that feel premium and keep customers coming back.",
    span: "",
  },
];

export function Services() {
  return (
    <section id="services" className="py-32 relative">
      <div className="container mx-auto px-6">
        <SectionHeader
          eyebrow="Services"
          title={
            <>
              What I build for your <span className="text-gradient-gold italic">business</span>
            </>
          }
          description="Everything you need to launch a premium online presence — and grow with confidence."
        />

        <div className="mt-20 grid md:grid-cols-3 gap-5 auto-rows-fr">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className={`group relative glass rounded-3xl p-8 hover-lift overflow-hidden ${s.span}`}
              >
                <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-gold/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative flex flex-col h-full">
                  <div className="flex items-start justify-between mb-6">
                    <div className="h-14 w-14 rounded-2xl glass-gold flex items-center justify-center text-gold group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                      <Icon size={22} />
                    </div>
                    <ArrowUpRight
                      size={18}
                      className="text-muted-foreground/40 group-hover:text-gold group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
                    />
                  </div>
                  <div className="text-[0.65rem] text-gold/70 uppercase tracking-[0.25em] mb-2">
                    0{i + 1}
                  </div>
                  <h3 className="font-display text-[1.6rem] mb-3 leading-tight">{s.title}</h3>
                  <p className="text-[0.92rem] text-muted-foreground leading-[1.7]">{s.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
