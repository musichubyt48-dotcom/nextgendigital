import { SectionHeader } from "./SectionHeader";
import { Crown, Workflow, Smartphone, Search, TrendingUp, Wallet } from "lucide-react";

const items = [
  { icon: Crown, title: "Premium modern design", desc: "Designs that feel expensive and build instant trust." },
  { icon: Workflow, title: "Fast, considered workflow", desc: "Quick turnaround without sacrificing craft." },
  { icon: Smartphone, title: "Truly responsive", desc: "Flawless across every screen and device size." },
  { icon: Search, title: "SEO-friendly structure", desc: "Built for Google from the first line of code." },
  { icon: TrendingUp, title: "Built to convert", desc: "Every section engineered to turn visitors into customers." },
  { icon: Wallet, title: "Honest pricing", desc: "Agency-grade quality without agency-grade invoices." },
];

export function WhyChoose() {
  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6">
        <SectionHeader
          eyebrow="Why Work With Me"
          title={
            <>
              The Nextgen <span className="text-gradient-gold italic">difference</span>
            </>
          }
        />

        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it, i) => {
            const Icon = it.icon;
            return (
              <div
                key={it.title}
                className={`group flex gap-5 glass rounded-2xl p-7 hover-lift ${i === 1 || i === 4 ? "lg:translate-y-4" : ""}`}
              >
                <div className="shrink-0 h-12 w-12 rounded-xl bg-gradient-to-br from-gold to-gold-soft flex items-center justify-center text-primary-foreground shadow-glow-soft group-hover:scale-105 transition-transform">
                  <Icon size={20} />
                </div>
                <div>
                  <h3 className="font-display text-[1.25rem] mb-1.5 leading-tight">{it.title}</h3>
                  <p className="text-[0.9rem] text-muted-foreground leading-[1.65]">{it.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
