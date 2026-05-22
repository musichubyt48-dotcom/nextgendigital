import { SectionHeader } from "./SectionHeader";
import { Award, Bot, Search, Crown } from "lucide-react";

const stats = [
  { icon: Award, value: "1.5+", label: "Years Experience" },
  { icon: Bot, value: "Premium", label: "Workflow" },
  { icon: Search, value: "SEO", label: "Focused Build" },
  { icon: Crown, value: "Premium", label: "Design Quality" },
];

export function About() {
  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6">
        <SectionHeader
          eyebrow="About"
          title={
            <>
              Meet <span className="text-gradient-gold italic">Ashutosh</span>
              <br /> Founder of Nextgen Digital
            </>
          }
        />

        <div className="mt-20 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-gold/20 to-transparent rounded-3xl blur-2xl" />
            <div className="relative glass-gold rounded-3xl p-10 aspect-square flex flex-col justify-between">
              <div>
                <div className="text-xs uppercase tracking-[0.3em] text-gold">Founder</div>
                <div className="mt-4 font-display text-5xl leading-tight">
                  Ashutosh<br />
                  <span className="text-gradient-gold italic">Kumar Srivastava</span>
                </div>
              </div>
              <div className="flex items-end justify-between">
                <div className="font-display text-7xl text-gradient-gold">ND</div>
                <div className="text-right text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Est. India<br />Digital Studio
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Hi, I'm <span className="text-foreground font-medium">Ashutosh Kumar Srivastava</span>,
              founder of Nextgen Digital. I help local businesses create premium online presence
              through modern websites and premium digital solutions.
            </p>
            <p>
              I started Nextgen Digital with the goal of helping traditional businesses become
              professional online brands — without expensive agency costs.
            </p>
            <p>
              With <span className="text-gold">1.5 years</span> of experience in premium tools and
              website development, I focus on creating modern, responsive, SEO-friendly, and
              high-converting business websites.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-6">
              {stats.map((s) => {
                const Icon = s.icon;
                return (
                  <div
                    key={s.label}
                    className="glass rounded-2xl p-5 hover-lift"
                  >
                    <Icon size={20} className="text-gold mb-3" />
                    <div className="font-display text-2xl text-foreground">{s.value}</div>
                    <div className="text-xs uppercase tracking-wider mt-1">{s.label}</div>
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
