import { SectionHeader } from "./SectionHeader";
import { Palette, Bot, Briefcase, Code2, Search, Layout } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Website Design",
    desc: "Premium, modern interfaces crafted with attention to every pixel and conversion-focused layouts.",
  },
  {
    icon: Bot,
    title: "Professional Website Building",
    desc: "Lightning-fast delivery using modern tools without compromising on design quality.",
  },
  {
    icon: Briefcase,
    title: "Business Portfolio Sites",
    desc: "Professional portfolios that establish authority and turn visitors into qualified leads.",
  },
  {
    icon: Code2,
    title: "Custom Websites",
    desc: "Tailor-made web experiences built around your unique brand and business workflow.",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    desc: "Technical and on-page SEO baked in so your business gets found on Google from day one.",
  },
  {
    icon: Layout,
    title: "Modern UI/UX",
    desc: "Intuitive, elegant user experiences that feel premium and keep customers coming back.",
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
              What I Build For Your <span className="text-gradient-gold italic">Business</span>
            </>
          }
          description="Everything you need to launch a premium online presence and grow with confidence."
        />

        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="group relative glass rounded-3xl p-8 hover-lift overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gold/0 via-transparent to-gold/0 group-hover:from-gold/10 transition-all duration-500" />
                <div className="relative">
                  <div className="h-14 w-14 rounded-2xl glass-gold flex items-center justify-center text-gold mb-6 group-hover:scale-110 transition-transform">
                    <Icon size={22} />
                  </div>
                  <div className="text-xs text-gold/70 uppercase tracking-wider mb-2">
                    0{i + 1}
                  </div>
                  <h3 className="font-display text-2xl mb-3">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
