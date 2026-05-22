import { ArrowRight, Sparkles, Bot, Search, Zap } from "lucide-react";

const floatingCards = [
  { icon: Sparkles, title: "Premium Design", delay: "0s" },
  { icon: Bot, title: "Modern Designs", delay: "0.4s" },
  { icon: Search, title: "SEO Optimized", delay: "0.8s" },
  { icon: Zap, title: "Fast Delivery", delay: "1.2s" },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden bg-hero"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-32 h-96 w-96 rounded-full bg-gold/10 blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-32 h-96 w-96 rounded-full bg-gold/5 blur-3xl animate-float-delayed" />
      </div>

      <div className="container mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full glass-gold px-4 py-1.5 mb-8 text-xs uppercase tracking-[0.2em]">
            <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
            <span className="text-gold-soft">Helping Local Businesses Go Digital</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.05]">
            Transforming Local Businesses Into{" "}
            <span className="text-gradient-gold italic">Powerful Online Brands</span>
          </h1>

          <p className="mt-8 text-lg text-muted-foreground max-w-xl leading-relaxed">
            I create premium, modern, and AI-powered websites that help businesses build trust,
            attract customers, and grow online.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold to-gold-soft px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-glow-soft hover:shadow-glow transition-all"
            >
              View Projects
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full glass px-7 py-3.5 text-sm font-medium hover:border-gold/40 transition-all"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-12 flex items-center gap-8 text-xs text-muted-foreground">
            <div>
              <div className="font-display text-2xl text-gold">1.5+</div>
              <div className="uppercase tracking-wider">Years</div>
            </div>
            <div className="h-10 w-px bg-border" />
            <div>
              <div className="font-display text-2xl text-gold">AI</div>
              <div className="uppercase tracking-wider">Powered</div>
            </div>
            <div className="h-10 w-px bg-border" />
            <div>
              <div className="font-display text-2xl text-gold">100%</div>
              <div className="uppercase tracking-wider">Responsive</div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 relative h-[520px] hidden lg:block">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-gold/10 via-transparent to-transparent blur-2xl" />
          {floatingCards.map((card, i) => {
            const positions = [
              "top-0 left-8",
              "top-24 right-0",
              "bottom-24 left-0",
              "bottom-0 right-12",
            ];
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className={`absolute ${positions[i]} glass rounded-2xl p-5 w-56 hover-lift animate-float`}
                style={{ animationDelay: card.delay }}
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-gold to-gold-soft flex items-center justify-center text-primary-foreground">
                    <Icon size={18} />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">
                      Feature
                    </div>
                    <div className="text-sm font-medium">{card.title}</div>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-40 w-40 rounded-full glass-gold animate-glow-pulse flex items-center justify-center">
            <div className="font-display text-3xl text-gradient-gold">ND</div>
          </div>
        </div>
      </div>
    </section>
  );
}
