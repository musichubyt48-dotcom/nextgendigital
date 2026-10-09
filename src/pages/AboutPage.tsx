import {
  Compass,
  Palette,
  Code2,
  Cpu,
  Rocket,
  Headphones,
  ArrowRight,
  Sparkles,
  Instagram,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { HowWeWorkSection } from "@/components/studio/HowWeWorkSection";
import { FinalCtaSection } from "@/components/studio/FinalCtaSection";
import studioWorkspaceImg from "@/assets/images/studio_workspace_1790249387030.jpg";
import studioEngineeringImg from "@/assets/images/studio_engineering_1790249401297.jpg";
import founderImg from "@/assets/images/founder_ashutosh_1791398636715.jpg";

interface AboutPageProps {
  onNavigate: (path: string) => void;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const studioPrinciples = [
    {
      num: "01",
      title: "Strategy Before Code",
      icon: Compass,
      desc: "We analyze your customer journey, pricing model, and direct enquiry channels before writing a single line of code.",
    },
    {
      num: "02",
      title: "No Bloated Templates",
      icon: Palette,
      desc: "Every website is engineered from scratch with clean TypeScript, high Core Web Vitals, and zero slow drag-and-drop builders.",
    },
    {
      num: "03",
      title: "Direct Commercial Utility",
      icon: Code2,
      desc: "Built to generate real phone calls, direct WhatsApp bookings, and qualified sales leads for your physical or digital business.",
    },
    {
      num: "04",
      title: "Bespoke System Logic",
      icon: Cpu,
      desc: "Custom booking engines, interactive calculators, client dashboards, and frictionless payment checkouts.",
    },
    {
      num: "05",
      title: "Institutional Delivery",
      icon: Rocket,
      desc: "Staged milestones, zero-downtime DNS deployment, SSL certification, and Google Search Console indexing.",
    },
    {
      num: "06",
      title: "Guaranteed Support",
      icon: Headphones,
      desc: "14 to 60 days of complimentary engineering warranty, complete source code handover, and ongoing reliability.",
    },
  ];

  const techStack = [
    "React 18",
    "TypeScript",
    "Tailwind CSS",
    "Vite Engine",
    "Next.js",
    "Node.js",
    "Supabase SQL",
    "Vercel Edge",
  ];

  return (
    <div className="w-full flex flex-col bg-[#FAF9F6]">
      {/* 1. Hero & Storytelling Header */}
      <section className="pt-24 pb-10 sm:pt-32 md:pt-40 md:pb-24 border-b border-[#00D285]/15 grain-overlay">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl space-y-4 sm:space-y-6"
          >
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-[#00D285]/10 px-3 sm:px-4 py-1 sm:py-1.5 text-[11px] sm:text-xs font-mono uppercase tracking-widest text-[#00D285] border border-[#00D285]/25">
                <span>01 / Studio Philosophy & Architecture</span>
              </div>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-2xl sm:text-4xl md:text-fluid-hero font-display font-extrabold uppercase text-[#041510] tracking-tight leading-tight"
            >
              Engineered Around <br />
              <span className="underline decoration-[#00D285] decoration-4 underline-offset-8">
                Your Business.
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-xl md:text-2xl font-sans text-[#0A241D]/85 leading-relaxed max-w-3xl"
            >
              Most websites fail because they are built from rigid generic templates that force
              businesses into pre-made boxes. At JIVDEV, we architect direct booking engines,
              high-converting product pages, and digital systems tailored to how your business
              actually operates.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* 2. Modern Bento Grid (Visuals, Metrics & Narrative Blocks) */}
      <section className="py-10 sm:py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-8 items-stretch">
          {/* Bento Card 1: Large Visual Studio Showcase (8 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="md:col-span-8 rounded-2xl sm:rounded-3xl overflow-hidden border border-[#00D285]/20 relative min-h-[260px] sm:min-h-[440px] group shadow-card"
          >
            <img
              src={studioWorkspaceImg}
              alt="JIVDEV Creative Studio Environment"
              className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#041510]/95 via-[#06211A]/40 to-transparent" />

            <div className="absolute top-4 sm:top-6 left-4 sm:left-6 flex items-center gap-2">
              <span className="bg-[#00D285] text-[#041510] px-3 py-0.5 sm:px-3.5 sm:py-1 rounded-full text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider shadow-[0_0_10px_rgba(0,210,133,0.35)]">
                Our Foundation
              </span>
            </div>

            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 space-y-1.5 sm:space-y-2 text-[#E8F7EE]">
              <span className="font-mono text-[10px] sm:text-xs text-[#00D285] uppercase tracking-wider font-semibold">
                Studio Thesis
              </span>
              <h3 className="font-display font-bold text-xl sm:text-3xl tracking-tight text-white leading-tight">
                Clean TypeScript frontends. Direct commercial conversion.
              </h3>
              <p className="text-xs sm:text-sm text-[#E8F7EE]/80 font-sans max-w-xl">
                We believe websites should be durable assets, not subscription expenses. Every
                client receives full source code ownership, zero monthly builder fees, and
                custom-crafted components.
              </p>
            </div>
          </motion.div>

          {/* Bento Card 2: Concrete Verifiable Metrics (4 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.65 }}
            className="md:col-span-4 rounded-2xl sm:rounded-3xl p-5 sm:p-8 bg-white border border-[#00D285]/20 shadow-card flex flex-col justify-between space-y-4 sm:space-y-6"
          >
            <div className="space-y-1.5 sm:space-y-2">
              <div className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-[#00D285]/10 px-2.5 sm:px-3 py-0.5 sm:py-1 text-[11px] sm:text-xs font-mono text-[#00D285] font-bold uppercase border border-[#00D285]/25">
                <Sparkles size={12} className="text-[#00D285]" />
                <span>Performance Benchmarks</span>
              </div>
              <h3 className="font-display font-bold text-lg sm:text-2xl text-[#041510]">
                Institutional Engineering
              </h3>
              <p className="text-xs sm:text-sm text-[#0A241D]/75 font-sans leading-relaxed">
                Measurable speed and reliability indicators built into every production release.
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4 pt-2 border-t border-[#00D285]/15">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-[#0A241D]/70">Target Load Speed</span>
                <span className="font-mono font-bold text-sm sm:text-base text-[#041510] tabular-nums">
                  &lt; 1.2s
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-[#0A241D]/70">Code Ownership</span>
                <span className="font-mono font-bold text-sm sm:text-base text-[#041510] tabular-nums">
                  100%
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-[#0A241D]/70">Monthly Platform Fees</span>
                <span className="font-mono font-bold text-sm sm:text-base text-[#041510] tabular-nums">
                  ₹0 / mo
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-[#0A241D]/70">Technical Warranty</span>
                <span className="font-mono font-bold text-sm sm:text-base text-[#041510] tabular-nums">
                  14–60 Days
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => onNavigate("/start-a-project")}
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full font-mono text-xs font-bold uppercase tracking-wider text-[#041510] bg-[#00D285] hover:bg-[#00e599] transition-all cursor-pointer shadow-[0_0_15px_rgba(0,210,133,0.25)]"
            >
              <span>DISCUSS YOUR SYSTEM</span>
              <ArrowRight size={13} />
            </button>
          </motion.div>

          {/* Bento Card 3: Secondary Visual Detail (4 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.65 }}
            className="md:col-span-4 rounded-2xl sm:rounded-3xl overflow-hidden border border-[#00D285]/20 relative min-h-[220px] sm:min-h-[300px] group shadow-card"
          >
            <img
              src={studioEngineeringImg}
              alt="Engineering Precision and Code Quality"
              className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#041510]/95 via-[#06211A]/50 to-transparent" />

            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 space-y-1 sm:space-y-1.5 text-[#E8F7EE]">
              <span className="font-mono text-[10px] sm:text-xs text-[#00D285] uppercase font-bold tracking-wider">
                Precision
              </span>
              <h4 className="font-display font-bold text-lg sm:text-xl text-white">
                Zero Heavy Plugin Bloat
              </h4>
              <p className="text-xs text-[#E8F7EE]/80 font-sans">
                No fragile third-party page builders that break after updates. Clean, maintainable
                architecture.
              </p>
            </div>
          </motion.div>

          {/* Bento Card 4: Modern Production Stack (8 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.65 }}
            className="md:col-span-8 rounded-2xl sm:rounded-3xl p-5 sm:p-8 bg-white border border-[#00D285]/20 shadow-card flex flex-col justify-between space-y-4 sm:space-y-6"
          >
            <div className="space-y-1.5 sm:space-y-2">
              <div className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-[#00D285]/10 px-2.5 sm:px-3 py-0.5 sm:py-1 text-[11px] sm:text-xs font-mono uppercase tracking-widest text-[#00D285] border border-[#00D285]/25">
                <span>Modern Technology Stack</span>
              </div>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-[#041510]">
                Built with Institutional Software Technologies
              </h3>
              <p className="text-xs sm:text-sm text-[#0A241D]/75 font-sans leading-relaxed">
                We select technologies that guarantee instant mobile rendering, bulletproof uptime,
                and simple future scalability for your internal team.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 pt-1 sm:pt-2">
              {techStack.map((tech) => (
                <div
                  key={tech}
                  className="p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-[#F4FAF6] border border-[#00D285]/15 text-center flex flex-col items-center justify-center gap-1 hover:bg-[#00D285]/10 hover:border-[#00D285]/40 transition-colors"
                >
                  <span className="font-mono text-xs font-bold text-[#041510]">{tech}</span>
                  <span className="text-[10px] sm:text-[0.625rem] font-sans text-[#0A241D]/60">
                    Verified Production
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-2 border-t border-[#00D285]/15 flex items-center justify-between text-[11px] sm:text-xs font-mono text-[#0A241D]/70">
              <span>95+ PageSpeed Optimization</span>
              <span>100% Cross-Browser Tested</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Core Studio Pillars (Editorial Split Section) */}
      <section className="py-12 sm:py-20 md:py-28 bg-[#F8FAF9] border-t border-[#00D285]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-5 space-y-3 sm:space-y-5 lg:sticky lg:top-32">
              <div className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-[#00D285]/10 px-3 sm:px-3.5 py-0.5 sm:py-1 text-[11px] sm:text-xs font-mono uppercase tracking-widest text-[#00D285] border border-[#00D285]/25">
                <span>Our Principles</span>
              </div>
              <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-[#041510] tracking-tight uppercase leading-tight">
                How We Differ From <br />
                <span className="underline decoration-[#00D285] decoration-4 underline-offset-8">
                  Generic Agencies.
                </span>
              </h2>
              <p className="text-xs sm:text-base text-[#0A241D]/80 font-sans leading-relaxed">
                Traditional agencies mark up low-grade WordPress templates and leave clients with
                recurring monthly retainer dependencies. JIVDEV operates like an in-house product
                engineering team.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-5">
              {studioPrinciples.map((pillar) => {
                const IconComponent = pillar.icon;
                return (
                  <div
                    key={pillar.num}
                    className="p-4 sm:p-6 rounded-2xl bg-white border border-[#00D285]/15 space-y-2 sm:space-y-3 hover:bg-[#F4FAF6] hover:border-[#00D285]/40 transition-all duration-200"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-[#041510] bg-[#00D285]/15 border border-[#00D285]/25 px-2 py-0.5 rounded">
                        {pillar.num}
                      </span>
                      <IconComponent size={17} className="text-[#00D285]" />
                    </div>
                    <h3 className="font-display font-bold text-base sm:text-lg text-[#041510]">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#0A241D]/75 font-sans leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-12 sm:py-20 bg-[#FAF9F6] border-t border-[#00D285]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto bg-[#F8FAF9] rounded-3xl p-6 sm:p-10 border border-[#00D285]/20 shadow-card flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
            <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-2xl overflow-hidden shrink-0 border-2 border-[#00D285]/30 shadow-md bg-[#041510]">
              <img
                src={founderImg}
                alt="Ashutosh Kumar Srivastava - Founder"
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="text-center sm:text-left space-y-2 flex-1">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-[#00D285]/10 px-3 py-1 text-[11px] sm:text-xs font-mono uppercase tracking-widest text-[#00D285] font-bold border border-[#00D285]/25">
                Leadership
              </div>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#041510] tracking-tight">
                Ashutosh Kumar Srivastava
              </h3>
              <p className="text-sm sm:text-base font-mono text-[#00D285] font-bold uppercase tracking-wider">
                Founder
              </p>
              <div className="pt-2">
                <a
                  href="https://www.instagram.com/zivdevofficial?stkn=dDVtNHN6OGVrbHZ4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-mono text-[#0A241D]/80 hover:text-[#00D285] transition-colors py-1 px-3 rounded-full bg-[#00D285]/10 border border-[#00D285]/20 hover:border-[#00D285]/50"
                >
                  <Instagram size={13} className="text-[#00D285]" />
                  <span>@zivdevofficial</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. How We Work Lifecycle */}
      <HowWeWorkSection />

      {/* 5. Final CTA */}
      <FinalCtaSection
        onStartProject={() => onNavigate("/start-a-project")}
        onExploreWork={() => onNavigate("/work")}
      />
    </div>
  );
}

export default AboutPage;
