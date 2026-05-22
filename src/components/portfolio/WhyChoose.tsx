import { SectionHeader } from "./SectionHeader";
import { Crown, Bot, Smartphone, Search, TrendingUp, Wallet } from "lucide-react";

const items = [
  { icon: Crown, title: "Premium Modern Design", desc: "Designs that feel expensive and build instant trust." },
  { icon: Bot, title: "Fast AI Workflow", desc: "AI-accelerated builds without compromising quality." },
  { icon: Smartphone, title: "Mobile Responsive", desc: "Flawless across every screen and device size." },
  { icon: Search, title: "SEO-Friendly Structure", desc: "Built for Google from the first line of code." },
  { icon: TrendingUp, title: "Business Growth Focused", desc: "Every section engineered to convert visitors." },
  { icon: Wallet, title: "Affordable Solutions", desc: "Agency-grade quality without agency-grade pricing." },
];

export function WhyChoose() {
  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6">
        <SectionHeader
          eyebrow="Why Choose Me"
          title={
            <>
              The Nextgen <span className="text-gradient-gold italic">Difference</span>
            </>
          }
        />

        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it) => {
            const Icon = it.icon;
            return (
              <div
                key={it.title}
                className="group flex gap-5 glass rounded-2xl p-7 hover-lift"
              >
                <div className="shrink-0 h-12 w-12 rounded-xl bg-gradient-to-br from-gold to-gold-soft flex items-center justify-center text-primary-foreground shadow-glow-soft">
                  <Icon size={20} />
                </div>
                <div>
                  <h3 className="font-display text-xl mb-1.5">{it.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
