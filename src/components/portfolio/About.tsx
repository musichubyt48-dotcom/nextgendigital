import { SectionHeader } from "./SectionHeader";
import { Award, Workflow, Search, Crown } from "lucide-react";

const stats = [
  { icon: Award, value: "1.5+", label: "Years Experience" },
  { icon: Workflow, value: "Hands-On", label: "Workflow" },
  { icon: Search, value: "SEO", label: "Focused Build" },
  { icon: Crown, value: "Premium", label: "Design Quality" },
];

export function About() {
  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="absolute top-20 right-10 h-64 w-64 rounded-full bg-gold/5 blur-3xl -z-10" />
      <div className="container mx-auto px-5 sm:px-6">
        <SectionHeader
          eyebrow="About"
          align="left"
          title={
            <>
              Meet <span className="text-gradient-gold italic">Ashutosh</span>,
              <br /> founder of Nextgen Digital.
            </>
          }
        />

        <div className="mt-14 md:mt-20 grid lg:grid-cols-12 gap-10 md:gap-12 items-start">
          <div className="relative lg:col-span-5 lg:sticky lg:top-32">
            <div className="absolute -inset-6 bg-gradient-to-br from-gold/20 to-transparent rounded-[2rem] blur-2xl" />
            <div className="relative glass-gold rounded-[2rem] p-7 sm:p-10 aspect-[4/5] flex flex-col justify-between rotate-[-1deg] hover:rotate-0 transition-transform duration-700">
              <div>
                <div className="text-[0.65rem] uppercase tracking-[0.35em] text-gold">Founder</div>
                <div className="mt-5 font-display text-[2rem] sm:text-[2.7rem] leading-[1.05]">
                  Ashutosh<br />
                  <span className="text-gradient-gold italic">Kumar Srivastava</span>
                </div>
              </div>
              <div className="flex items-end justify-between gap-4">
                <div className="font-display text-6xl sm:text-7xl text-gradient-gold leading-none">ND</div>
                <div className="text-right text-[0.6rem] uppercase tracking-[0.25em] text-muted-foreground">
                  Serving clients<br />worldwide
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 lg:pt-6 space-y-6 text-[1.02rem] text-muted-foreground leading-[1.85]">
            <p className="text-foreground/90 text-[1.15rem] leading-[1.7] font-display italic">
              "I build websites the way I'd want my own business represented online —
              clean, fast, and quietly impressive."
            </p>
            <p>
              I started Nextgen Digital after watching too many small businesses lose
              customers to outdated websites. Most don't need a huge agency — they need
              someone who actually cares about the details.
            </p>
            <p>
              Over the last <span className="text-gold">1.5 years</span>, I've focused on
              one thing: building modern, SEO-friendly websites that feel premium and
              convert visitors into real customers.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-8">
              {stats.map((s, i) => {
                const Icon = s.icon;
                return (
                  <div
                    key={s.label}
                    className={`glass rounded-2xl p-5 hover-lift ${i % 2 === 1 ? "translate-y-3" : ""}`}
                  >
                    <Icon size={20} className="text-gold mb-3" />
                    <div className="font-display text-2xl text-foreground leading-none">{s.value}</div>
                    <div className="text-[0.7rem] uppercase tracking-[0.18em] mt-2">{s.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
