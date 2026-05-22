import { SectionHeader } from "./SectionHeader";
import { Bot, Search, Workflow, Video, Smartphone, Sparkles } from "lucide-react";

const skills = [
  { icon: Bot, label: "AI Website Builders" },
  { icon: Search, label: "SEO Optimization" },
  { icon: Workflow, label: "Automation Tools" },
  { icon: Video, label: "Video Editing" },
  { icon: Smartphone, label: "Responsive Design" },
  { icon: Sparkles, label: "Modern UI/UX" },
];

export function Skills() {
  return (
    <section id="skills" className="py-32 relative">
      <div className="container mx-auto px-6">
        <SectionHeader
          eyebrow="Skills"
          title={
            <>
              Tools & <span className="text-gradient-gold italic">Expertise</span>
            </>
          }
          description="A modern toolkit built for the AI-era of web development."
        />

        <div className="mt-16 flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {skills.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.label}
                className="group inline-flex items-center gap-3 rounded-full glass px-6 py-3 hover:border-gold/50 hover:shadow-glow-soft transition-all duration-500"
              >
                <Icon size={16} className="text-gold group-hover:scale-110 transition-transform" />
                <span className="text-sm">{s.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
