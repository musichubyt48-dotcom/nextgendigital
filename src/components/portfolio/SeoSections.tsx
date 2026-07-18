import { SectionHeader } from "./SectionHeader";
import { Compass, PenTool, Code as Code2, Rocket, LifeBuoy, Store, Dumbbell, Scissors, Stethoscope, Building2, UtensilsCrossed, Gauge, ShieldCheck, Sparkles, TrendingUp, Smartphone, Search, MessageCircle } from "lucide-react";

/* ---------------- Website Development Process ---------------- */

const steps = [
  {
    icon: Compass,
    title: "Discovery & Strategy",
    desc: "We start by understanding your business, customers and goals. Every premium website development project begins with clear positioning, not guesswork.",
  },
  {
    icon: PenTool,
    title: "Design & Prototyping",
    desc: "As a modern website design company, we craft layouts, typography and visual systems tailored to your brand — reviewed together before a single line of code.",
  },
  {
    icon: Code2,
    title: "Development & AI Integration",
    desc: "Hand-coded React builds with clean SEO structure, AI-powered enhancements where they matter, and performance baked in from the first commit.",
  },
  {
    icon: Rocket,
    title: "Launch & Optimization",
    desc: "Careful QA, on-page SEO, Core Web Vitals tuning and a smooth go-live so your business website ships fast and ranks from day one.",
  },
  {
    icon: LifeBuoy,
    title: "Future Support",
    desc: "Post-launch care: content updates, feature additions and honest advice as your website grows with your business.",
  },
];

export function Process() {
  return (
    <section id="process" className="py-20 md:py-32 relative">
      <div className="absolute top-32 left-0 h-64 w-64 rounded-full bg-gold/5 blur-3xl -z-10" />
      <div className="container mx-auto px-5 sm:px-6">
        <SectionHeader
          eyebrow="Website Development Process"
          title={
            <>
              A calm, considered way to <span className="text-gradient-gold italic">build your website</span>
            </>
          }
          description="A proven five-step process used on every Nextgen Digital website development project — from first call to future support."
        />

        <div className="mt-14 md:mt-20 grid md:grid-cols-2 lg:grid-cols-5 gap-5">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className={`group glass rounded-3xl p-6 sm:p-7 hover-lift ${
                  i % 2 === 1 ? "lg:translate-y-6" : ""
                }`}
              >
                <div className="text-[0.65rem] text-gold/70 uppercase tracking-[0.25em] mb-3">
                  Step 0{i + 1}
                </div>
                <div className="h-12 w-12 rounded-xl glass-gold flex items-center justify-center text-gold mb-5 group-hover:scale-110 transition-transform">
                  <Icon size={20} />
                </div>
                <h3 className="font-display text-[1.25rem] mb-2 leading-tight">{s.title}</h3>
                <p className="text-[0.9rem] text-muted-foreground leading-[1.7]">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Industries We Serve ---------------- */

const industries = [
  { icon: Store, title: "Local Retail & Shops", desc: "Boutique stores and neighbourhood businesses that need a premium online face." },
  { icon: Dumbbell, title: "Gyms & Fitness Studios", desc: "Conversion-focused websites that turn walk-bys into signed-up members." },
  { icon: Scissors, title: "Salons & Spas", desc: "Elegant business websites with online booking and gallery-style visuals." },
  { icon: Stethoscope, title: "Clinics & Healthcare", desc: "Trustworthy, accessible websites for dentists, doctors and wellness brands." },
  { icon: Building2, title: "Real Estate & Construction", desc: "Authority-driven websites that showcase projects and generate qualified leads." },
  { icon: UtensilsCrossed, title: "Restaurants & Cafés", desc: "Menu-first, mobile-first designs that keep tables full and reviews glowing." },
];

export function Industries() {
  return (
    <section id="industries" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-5 sm:px-6">
        <SectionHeader
          eyebrow="Industries We Serve"
          title={
            <>
              Websites built for <span className="text-gradient-gold italic">real businesses</span>
            </>
          }
          description="As a website development agency serving businesses across India, Nextgen Digital works with founders across service, retail and lifestyle industries."
        />

        <div className="mt-14 md:mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {industries.map((it, i) => {
            const Icon = it.icon;
            return (
              <div
                key={it.title}
                className={`group glass rounded-2xl p-6 sm:p-7 hover-lift ${
                  i === 1 || i === 4 ? "lg:translate-y-4" : ""
                }`}
              >
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-gold to-gold-soft flex items-center justify-center text-primary-foreground shadow-glow-soft mb-5 group-hover:scale-105 transition-transform">
                  <Icon size={20} />
                </div>
                <h3 className="font-display text-[1.2rem] mb-1.5 leading-tight">{it.title}</h3>
                <p className="text-[0.9rem] text-muted-foreground leading-[1.65]">{it.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Technologies We Use ---------------- */

const techGroups = [
  {
    title: "Frontend & Design",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Figma"],
  },
  {
    title: "Backend & Infrastructure",
    items: ["Node.js", "Supabase", "PostgreSQL", "Cloudflare", "Vercel", "REST & GraphQL APIs"],
  },
  {
    title: "AI & Automation",
    items: ["OpenAI", "Gemini", "Vector Search", "Custom Chatbots", "Content Automation", "AI SEO Tools"],
  },
  {
    title: "SEO & Performance",
    items: ["Core Web Vitals", "Schema Markup", "Semantic HTML", "Sitemap & Robots", "Lighthouse", "GSC & GA4"],
  },
];

export function Technologies() {
  return (
    <section id="technologies" className="py-20 md:py-32 relative">
      <div className="absolute bottom-10 right-0 h-72 w-72 rounded-full bg-gold/5 blur-3xl -z-10" />
      <div className="container mx-auto px-5 sm:px-6">
        <SectionHeader
          eyebrow="Technologies We Use"
          title={
            <>
              A modern stack for <span className="text-gradient-gold italic">premium websites</span>
            </>
          }
          description="Every Nextgen Digital business website is built on a proven set of tools chosen for speed, scalability and long-term maintainability."
        />

        <div className="mt-14 md:mt-20 grid md:grid-cols-2 gap-5">
          {techGroups.map((g, i) => (
            <div
              key={g.title}
              className={`glass rounded-3xl p-6 sm:p-8 hover-lift ${i % 2 === 1 ? "md:translate-y-6" : ""}`}
            >
              <div className="text-[0.65rem] text-gold/70 uppercase tracking-[0.25em] mb-3">
                Stack 0{i + 1}
              </div>
              <h3 className="font-display text-[1.4rem] mb-5 leading-tight">{g.title}</h3>
              <div className="flex flex-wrap gap-2">
                {g.items.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1.5 rounded-full glass-gold text-gold-soft"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Benefits ---------------- */

const benefits = [
  { icon: Gauge, title: "Faster loading speeds", desc: "Optimised assets, clean code and modern hosting mean your website loads in under two seconds on real devices." },
  { icon: TrendingUp, title: "Higher search rankings", desc: "Structured data, semantic HTML and on-page SEO are baked into every business website we ship." },
  { icon: Smartphone, title: "Mobile-first design", desc: "Every layout is designed on mobile first, because that is where most of your customers actually find you." },
  { icon: ShieldCheck, title: "Trust & credibility", desc: "A premium website design instantly signals professionalism and separates you from templated competitors." },
  { icon: Sparkles, title: "AI-powered enhancements", desc: "From smart chat to content automation, we add AI website development features that quietly save you hours." },
  { icon: Search, title: "Ready to be found", desc: "Sitemaps, canonical tags and Search Console setup are handled — so Google can index your pages from day one." },
];

export function Benefits() {
  return (
    <section id="benefits" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-5 sm:px-6">
        <SectionHeader
          eyebrow="Benefits"
          title={
            <>
              Real outcomes from a <span className="text-gradient-gold italic">premium website</span>
            </>
          }
          description="Working with a focused website developer in India means every decision is made to protect your speed, rankings and reputation."
        />

        <div className="mt-14 md:mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <div
                key={b.title}
                className={`group flex gap-4 sm:gap-5 glass rounded-2xl p-5 sm:p-7 hover-lift ${
                  i === 1 || i === 4 ? "lg:translate-y-4" : ""
                }`}
              >
                <div className="shrink-0 h-12 w-12 rounded-xl glass-gold flex items-center justify-center text-gold group-hover:scale-105 transition-transform">
                  <Icon size={20} />
                </div>
                <div>
                  <h3 className="font-display text-[1.2rem] mb-1.5 leading-tight">{b.title}</h3>
                  <p className="text-[0.9rem] text-muted-foreground leading-[1.65]">{b.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Client Experience ---------------- */

export function ClientExperience() {
  return (
    <section id="client-experience" className="py-20 md:py-32 relative">
      <div className="absolute top-20 left-1/3 h-64 w-64 rounded-full bg-gold/5 blur-3xl -z-10" />
      <div className="container mx-auto px-5 sm:px-6">
        <SectionHeader
          eyebrow="Client Experience"
          title={
            <>
              A calm, transparent way to <span className="text-gradient-gold italic">work together</span>
            </>
          }
          description="Working with Nextgen Digital should feel like hiring a trusted in-house team — not chasing an agency."
        />

        <div className="mt-14 md:mt-20 grid lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-7 glass rounded-3xl p-7 sm:p-10 hover-lift">
            <h3 className="font-display text-[1.5rem] sm:text-[1.8rem] mb-4 leading-tight">
              Clear conversations, honest timelines
            </h3>
            <p className="text-[0.95rem] text-muted-foreground leading-[1.8]">
              Every project starts with a real conversation about your business, budget and
              timeline. You are always talking directly to the person building your website —
              never a rotating account manager. Milestones are shared openly, revisions are
              welcomed, and you approve every major step before it ships.
            </p>
            <p className="mt-5 text-[0.95rem] text-muted-foreground leading-[1.8]">
              As a boutique website development agency, we deliberately take on a small number
              of projects each month so every client gets senior attention from first sketch to
              final launch.
            </p>
          </div>

          <div className="lg:col-span-5 space-y-5">
            <div className="glass-gold rounded-3xl p-6 sm:p-7 hover-lift">
              <div className="text-[0.65rem] text-gold uppercase tracking-[0.3em] mb-2">Response</div>
              <div className="font-display text-3xl text-gradient-gold leading-none">Under 24h</div>
              <p className="mt-3 text-[0.9rem] text-muted-foreground leading-[1.65]">
                Replies to every enquiry and update, on weekdays.
              </p>
            </div>
            <div className="glass rounded-3xl p-6 sm:p-7 hover-lift lg:translate-y-4">
              <div className="text-[0.65rem] text-gold uppercase tracking-[0.3em] mb-2">Delivery</div>
              <div className="font-display text-3xl text-gradient-gold leading-none">2–4 Weeks</div>
              <p className="mt-3 text-[0.9rem] text-muted-foreground leading-[1.65]">
                Typical turnaround for a premium business website.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Future Support ---------------- */

export function FutureSupport() {
  const points = [
    "Content updates, new pages and small feature additions handled quickly.",
    "Ongoing SEO checks, schema tuning and Search Console monitoring.",
    "Performance audits so your website stays fast as it grows.",
    "Honest advice on when to expand, redesign or leave things as they are.",
  ];
  return (
    <section id="support" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-5 sm:px-6">
        <SectionHeader
          eyebrow="Future Support"
          title={
            <>
              We are here <span className="text-gradient-gold italic">after launch</span>, too
            </>
          }
          description="A website is a living asset. Nextgen Digital offers ongoing support plans so your business website keeps improving long after go-live."
        />

        <div className="mt-14 md:mt-20 grid lg:grid-cols-2 gap-6 items-start">
          <div className="glass rounded-3xl p-7 sm:p-10 hover-lift">
            <h3 className="font-display text-[1.5rem] sm:text-[1.8rem] mb-4 leading-tight">
              Long-term care, not a handover and goodbye
            </h3>
            <p className="text-[0.95rem] text-muted-foreground leading-[1.8]">
              Many website design companies disappear once the invoice is paid. We do the
              opposite. Every Nextgen Digital client gets access to flexible monthly support so
              their website evolves with the business — new offers, new pages, seasonal
              campaigns and ongoing SEO refinements included.
            </p>
          </div>
          <ul className="space-y-4">
            {points.map((p, i) => (
              <li
                key={p}
                className={`glass rounded-2xl p-5 sm:p-6 flex gap-4 hover-lift ${
                  i % 2 === 1 ? "lg:translate-x-4" : ""
                }`}
              >
                <div className="shrink-0 h-10 w-10 rounded-lg bg-gradient-to-br from-gold to-gold-soft flex items-center justify-center text-primary-foreground shadow-glow-soft font-display">
                  {i + 1}
                </div>
                <p className="text-[0.95rem] text-muted-foreground leading-[1.7]">{p}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */

const faqs = [
  {
    q: "What makes Nextgen Digital a premium website development agency?",
    a: "Every Nextgen Digital website is hand-crafted rather than templated. We combine premium design, modern frameworks like React and Next.js, AI-powered features and on-page SEO to deliver business websites that feel expensive and perform under real traffic.",
  },
  {
    q: "How much does a business website cost in India?",
    a: "Pricing depends on scope, but most premium business websites we build fall between an affordable starter package and a fully custom multi-page build. We share a clear fixed quote after the first discovery call, with no hidden fees.",
  },
  {
    q: "Do you offer AI website development?",
    a: "Yes. We integrate AI features such as smart chat assistants, content generation, personalised search and workflow automation into websites where they genuinely help your business — never as a gimmick.",
  },
  {
    q: "How long does it take to build a website?",
    a: "A typical premium business website from Nextgen Digital takes two to four weeks from kickoff to launch, depending on how quickly content, images and feedback are shared.",
  },
  {
    q: "Are your websites SEO friendly?",
    a: "Absolutely. As a modern website design company, we ship every project with semantic HTML, structured data, optimised Core Web Vitals, XML sitemaps and clean canonical URLs so search engines can index your pages correctly.",
  },
  {
    q: "Do you work with clients outside India?",
    a: "Yes. While we are proudly a website development agency based in India, most of our work is delivered fully online, and we regularly collaborate with founders across Asia, the Middle East, Europe and North America.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-32 relative">
      <div className="absolute top-40 right-0 h-72 w-72 rounded-full bg-gold/5 blur-3xl -z-10" />
      <div className="container mx-auto px-5 sm:px-6">
        <SectionHeader
          eyebrow="FAQ"
          title={
            <>
              Common questions about our <span className="text-gradient-gold italic">website development</span>
            </>
          }
          description="Quick answers about pricing, timelines, SEO and AI website development at Nextgen Digital."
        />

        <div className="mt-14 md:mt-20 grid md:grid-cols-2 gap-5">
          {faqs.map((f, i) => (
            <details
              key={f.q}
              className={`group glass rounded-2xl p-6 sm:p-7 hover-lift ${
                i % 2 === 1 ? "md:translate-y-4" : ""
              }`}
            >
              <summary className="flex items-start gap-4 cursor-pointer list-none">
                <div className="shrink-0 h-10 w-10 rounded-lg glass-gold flex items-center justify-center text-gold">
                  <MessageCircle size={18} />
                </div>
                <h3 className="font-display text-[1.1rem] sm:text-[1.2rem] leading-tight">
                  {f.q}
                </h3>
              </summary>
              <p className="mt-4 pl-14 text-[0.92rem] text-muted-foreground leading-[1.75]">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
