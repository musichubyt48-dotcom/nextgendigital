import { ArrowRight, Sparkles, Bot, Search, Zap } from "lucide-react";
import logoAsset from "@/assets/nextgen-logo.png.asset.json";

const floatingCards = [
  { icon: Sparkles, title: "Premium Design", delay: "0s" },
  { icon: Bot, title: "Professional Builds", delay: "0.4s" },
  { icon: Search, title: "SEO Optimized", delay: "0.8s" },
  { icon: Zap, title: "Fast Delivery", delay: "1.2s" },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-32 pb-24 overflow-hidden bg-hero grain"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-32 h-[28rem] w-[28rem] rounded-full bg-gold/10 blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-40 h-[26rem] w-[26rem] rounded-full bg-gold/5 blur-3xl animate-float-delayed" />
        <div className="absolute top-1/3 left-1/2 h-px w-72 bg-gradient-to-r from-transparent via-gold/30 to-transparent rotate-12" />
      </div>

      <div className="container mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full glass-gold px-4 py-1.5 mb-8 text-[0.68rem] uppercase tracking-[0.25em]">
            <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
            <span className="text-gold-soft">Available for new projects · 2026</span>
          </div>

          <h1 className="text-[2.7rem] md:text-6xl lg:text-[4.6rem] font-normal leading-[1.02] tracking-tight">
            Turning local shops into{" "}
            <span className="relative inline-block">
              <span className="text-gradient-gold italic">trusted online brands</span>
              <span className="absolute -bottom-2 left-0 h-px w-2/3 bg-gradient-to-r from-gold/60 to-transparent" />
            </span>
            .
          </h1>

          <p className="mt-8 text-[1.05rem] text-muted-foreground max-w-[34rem] leading-[1.75]">
            I design and build modern websites that look premium, load fast, and actually
            bring customers in — without the agency price tag.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold to-gold-soft px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-glow-soft hover:shadow-glow hover:-translate-y-0.5 transition-all duration-500"
            >
              See recent work
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full glass px-7 py-3.5 text-sm font-medium hover:border-gold/40 hover:-translate-y-0.5 transition-all duration-500"
            >
              Start a conversation
            </a>
          </div>

          <div className="mt-14 flex items-center gap-8 text-xs text-muted-foreground">
            <div>
              <div className="font-display text-[1.7rem] text-gold leading-none">1.5+</div>
              <div className="uppercase tracking-[0.2em] mt-2">Years</div>
            </div>
            <div className="h-10 w-px bg-border" />
            <div>
              <div className="font-display text-[1.7rem] text-gold leading-none">12+</div>
              <div className="uppercase tracking-[0.2em] mt-2">Projects</div>
            </div>
            <div className="h-10 w-px bg-border" />
            <div>
              <div className="font-display text-[1.7rem] text-gold leading-none">100%</div>
              <div className="uppercase tracking-[0.2em] mt-2">Responsive</div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 relative h-[540px] hidden lg:block">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-gold/12 via-transparent to-transparent blur-2xl" />
          {floatingCards.map((card, i) => {
            const positions = [
              "top-2 left-10 rotate-[-3deg]",
              "top-28 right-2 rotate-[2deg]",
              "bottom-28 left-0 rotate-[1deg]",
              "bottom-4 right-16 rotate-[-2deg]",
            ];
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className={`absolute ${positions[i]} glass rounded-2xl p-5 w-56 hover-lift animate-float`}
                style={{ animationDelay: card.delay }}
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-gold to-gold-soft flex items-center justify-center text-primary-foreground shadow-glow-soft">
                    <Icon size={18} />
                  </div>
                  <div>
                    <div className="text-[0.65rem] text-muted-foreground uppercase tracking-[0.2em]">
                      0{i + 1}
                    </div>
                    <div className="text-sm font-medium">{card.title}</div>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-44 w-44 rounded-full glass-gold animate-glow-pulse flex items-center justify-center overflow-hidden p-3">
            <img
              src={logoAsset.url}
              alt="Nextgen Digital"
              className="h-full w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
