import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Globe,
  Target,
  CalendarCheck,
  ShoppingBag,
  Cpu,
  Wrench,
  ShieldCheck,
  Zap,
  Lock,
  Headphones,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { FinalCtaSection } from "@/components/studio/FinalCtaSection";
import studioEngineeringImg from "@/assets/images/studio_engineering_1790249401297.jpg";

interface ServicesPageProps {
  onNavigate: (path: string) => void;
  initialService?: string;
}

export function ServicesPage({ onNavigate, initialService }: ServicesPageProps) {
  const [activeFilter, setActiveFilter] = useState<string>(initialService || "all");
  const [highlightedService, setHighlightedService] = useState<string | null>(
    initialService || null,
  );
  const shouldReduceMotion = useReducedMotion();

  const serviceCategories = [
    {
      id: "business-websites",
      num: "01",
      title: "Business Websites",
      tagline: "Corporate Brand Authority & Multi-Page Web Architecture",
      icon: Globe,
      whatItIs:
        "Comprehensive, structured multi-page digital systems engineered for professional firms, consultancies, hospitality brands, and service businesses requiring uncompromising credibility.",
      whoItsFor:
        "Established enterprises, law firms, healthcare centers, architecture studios, and growing regional brands replacing dated templates.",
      included: [
        "Up to 5 Tailored Sprints (Home, About, Services, Case Studies, Contact)",
        "Semantic SEO Hierarchy & Google Search Console indexing setup",
        "OpenGraph Social Card Meta Architecture",
        "Direct WhatsApp & Phone Click Callouts",
        "Sub-1.2s Core Web Vitals Performance Optimization",
        "Domain & High-Speed Edge Hosting Assistance",
        "100% Complete Source Code & Asset Handover",
      ],
      ctaText: "EXPLORE GROWTH PLAN FOR BUSINESS SITES",
      tier: "Growth",
    },
    {
      id: "landing-pages",
      num: "02",
      title: "Landing Pages",
      tagline: "Hyper-Focused Single-Page Conversion Sprints",
      icon: Target,
      whatItIs:
        "Surgical single-page conversion funnels engineered with strict editorial hierarchy, high-speed visual hooks, and zero distraction pathways.",
      whoItsFor:
        "Marketing campaigns, paid search traffic, product pre-orders, real estate ventures, and single-offer businesses.",
      included: [
        "1 High-Conversion Editorial Landing Page",
        "Above-the-Fold Value Proposition & Dual CTAs",
        "Direct WhatsApp Click-to-Chat Funnel",
        "Interactive Feature / FAQ Accordion Modules",
        "Speed-Optimized WebP Graphics Pipeline",
        "Essential Local SEO Meta Tags",
        "Turnkey Deployment in 4 to 7 Business Days",
      ],
      ctaText: "SELECT STARTER SPRINT FOR LANDING PAGES",
      tier: "Starter",
    },
    {
      id: "booking-websites",
      num: "03",
      title: "Booking Websites",
      tagline: "Direct Reservation Engines with Zero Intermediary Fees",
      icon: CalendarCheck,
      whatItIs:
        "Custom booking and appointment reservation engines allowing your customers to check real-time availability and reserve slots directly.",
      whoItsFor:
        "Hotels, boutique resorts, homestays, dental clinics, wellness retreats, and appointment-driven specialists.",
      included: [
        "Custom Direct Booking Engine Interface",
        "Real-Time Room / Slot Availability System",
        "Direct WhatsApp Booking Confirmation Dispatch",
        "Automated Email Receipt & Reservation Ledger",
        "Zero Ongoing Aggregator Commission Fees",
        "Integrated Customer Lead Qualification",
        "30 Days Dedicated Launch Warranty",
      ],
      ctaText: "CUSTOMIZE YOUR BOOKING PLATFORM",
      tier: "Premium",
    },
    {
      id: "ecommerce",
      num: "04",
      title: "E-commerce",
      tagline: "Frictionless Storefronts with Integrated Payment Gateways",
      icon: ShoppingBag,
      whatItIs:
        "Modern, lightweight product storefronts engineered for rapid mobile checkout, frictionless UPI payment flows, and intuitive order processing.",
      whoItsFor:
        "Direct-to-consumer lifestyle brands, physical retail expanding online, specialty food producers, and product makers.",
      included: [
        "Custom Direct Storefront Architecture",
        "Payment Gateway Integration (Razorpay / Stripe / UPI)",
        "Dynamic Product Filtering & High-Res Gallery Views",
        "Automated WhatsApp & Email Order Triggers",
        "Lightweight Inventory Management Dashboard",
        "Zero Monthly SaaS Licensing Hostage Fees",
        "60 Days Priority Engineering Warranty",
      ],
      ctaText: "SELECT PREMIUM FOR STOREFRONTS",
      tier: "Premium",
    },
    {
      id: "custom-web-systems",
      num: "05",
      title: "Custom Web Systems",
      tagline: "Bespoke Portals, Calculators & Internal Business Tools",
      icon: Cpu,
      whatItIs:
        "Custom web applications engineered to solve specific operational bottlenecks — including customer portals, pricing calculators, and database engines.",
      whoItsFor:
        "Financial firms, equipment rental operations, logistics companies, and organizations needing tailored web logic.",
      included: [
        "Interactive Client-Facing Calculation Tools",
        "Secure Database Architecture & Storage",
        "Protected Customer / Internal Staff Login Portals",
        "Third-Party API & Webhook Integrations",
        "Full Administrative Content & Data Dashboard",
        "Scalable Edge Deployment Architecture",
        "Formal Line-Item Milestone Proposal",
      ],
      ctaText: "REQUEST BESPOKE SYSTEM PROPOSAL",
      tier: "Custom",
    },
    {
      id: "website-maintenance",
      num: "06",
      title: "Website Maintenance",
      tagline: "Proactive Security, Core Web Vitals Audits & Sprints",
      icon: Wrench,
      whatItIs:
        "Dedicated technical stewardship ensuring your digital asset remains fast, secure, up-to-date, and completely dependable month after month.",
      whoItsFor:
        "Businesses without an in-house engineering team who want guaranteed uptime, routine content updates, and proactive speed monitoring.",
      included: [
        "24/7 Server & Domain Uptime Monitoring",
        "Proactive Security Patching & SSL Management",
        "Monthly Speed & Core Web Vitals Re-Optimization",
        "Routine Copy, Media & Announcement Updates",
        "Weekly Cloud Database & Code Backups",
        "Direct Founder WhatsApp Priority Support",
        "Flexible Monthly Terms with Zero Lock-In",
      ],
      ctaText: "INQUIRE ABOUT ONGOING MAINTENANCE",
      tier: "Growth",
    },
  ];

  const whyChooseUsPillars = [
    {
      icon: ShieldCheck,
      title: "100% Code Ownership",
      desc: "All frontend source code, design assets, and credentials belong to you upon milestone delivery. No proprietary builder hostage fees.",
    },
    {
      icon: Zap,
      title: "Sub-1.2s Speed Target",
      desc: "Engineered with clean React and TypeScript to consistently achieve 90+ Google Core Web Vitals scores.",
    },
    {
      icon: Lock,
      title: "Direct Lead Conduits",
      desc: "We wire inquiry forms, phone calls, and booking requests straight to your private WhatsApp, CRM, or email inbox.",
    },
    {
      icon: Headphones,
      title: "Post-Launch Warranty",
      desc: "Complimentary engineering warranty on every contract to safeguard your launch against unexpected bugs or regressions.",
    },
  ];

  const filteredServices =
    activeFilter === "all"
      ? serviceCategories
      : serviceCategories.filter((s) => s.id === activeFilter);

  return (
    <div className="w-full flex flex-col bg-[#FAF9F6]">
      {/* 1. Services Header */}
      <section className="pt-24 pb-10 sm:pt-32 md:pt-40 md:pb-24 border-b border-[#00D285]/15 grain-overlay">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="max-w-4xl space-y-4 sm:space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-[#00D285]/10 px-3 sm:px-4 py-1 sm:py-1.5 text-[11px] sm:text-xs font-mono uppercase tracking-widest text-[#00D285] border border-[#00D285]/25">
                <span>01 / Core Capabilities & Deliverables</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="text-2xl sm:text-4xl md:text-fluid-hero font-display font-extrabold uppercase text-[#041510] tracking-tight leading-tight"
            >
              Commercial Web <br />
              <span className="underline decoration-[#00D285] decoration-4 underline-offset-8">
                Disciplines.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.16, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="text-sm sm:text-lg md:text-xl font-sans text-[#0A241D]/85 leading-relaxed max-w-3xl"
            >
              Six specialized engineering tracks designed to capture high-intent inquiries, automate
              bookings, and scale digital revenue — built exclusively with modern TypeScript
              frontends.
            </motion.p>
          </motion.div>

          {/* Interactive Service Switcher Tabs (Swipeable on mobile) */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.24, duration: 0.5 }}
            className="mt-6 sm:mt-10 flex overflow-x-auto no-scrollbar flex-nowrap sm:flex-wrap items-center gap-2 pt-4 sm:pt-6 border-t border-[#00D285]/15 pb-1"
          >
            <button
              type="button"
              onClick={() => {
                setActiveFilter("all");
                setHighlightedService(null);
              }}
              className={`shrink-0 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeFilter === "all"
                  ? "bg-[#041510] text-[#00D285] shadow-xs border border-[#00D285]"
                  : "bg-white text-[#041510] border border-[#00D285]/20 hover:bg-[#00D285]/10"
              }`}
            >
              All Disciplines (06)
            </button>
            {serviceCategories.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => {
                  setActiveFilter(s.id);
                  setHighlightedService(s.id);
                }}
                className={`shrink-0 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeFilter === s.id
                    ? "bg-[#041510] text-[#00D285] shadow-xs border border-[#00D285]"
                    : "bg-white text-[#041510] border border-[#00D285]/20 hover:bg-[#00D285]/10"
                }`}
              >
                {s.title}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 2. Detailed Service Sections with Highlight Support and Depth Directional Motion */}
      <section className="py-10 sm:py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-6 sm:space-y-16">
        {filteredServices.map((service, idx) => {
          const IconComponent = service.icon;
          const isHighlighted = highlightedService === service.id;

          return (
            <motion.div
              key={service.id}
              id={service.id}
              initial={{
                opacity: 0,
                y: shouldReduceMotion ? 0 : 28,
                scale: shouldReduceMotion ? 1 : 0.98,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                delay: idx * 0.06,
                duration: 0.58,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`rounded-2xl sm:rounded-3xl p-4 sm:p-10 md:p-12 border transition-all duration-300 ${
                isHighlighted
                  ? "bg-white border-[#00D285] ring-4 ring-[#00D285]/20 shadow-float"
                  : "bg-white border-[#00D285]/20 shadow-card hover:border-[#00D285]/40"
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 lg:gap-12 items-start">
                {/* Left Column: Number, Title, Tagline & CTA (5 cols) with subtle left-direction motion */}
                <motion.div
                  initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  className="lg:col-span-5 space-y-4 sm:space-y-6"
                >
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <span className="font-mono text-xs font-bold text-[#041510] bg-[#00D285]/15 border border-[#00D285]/25 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-md">
                      {service.num}
                    </span>
                    <div className="h-8 w-8 sm:h-9 sm:w-9 rounded-xl bg-[#00D285]/15 flex items-center justify-center text-[#00D285]">
                      <IconComponent size={17} />
                    </div>
                    {isHighlighted && (
                      <span className="font-mono text-[10px] sm:text-[0.6875rem] font-bold uppercase tracking-wider text-[#041510] bg-[#00D285] px-2.5 py-0.5 rounded-full border border-[#00D285] animate-pulse">
                        Selected Service
                      </span>
                    )}
                  </div>

                  <h2 className="font-display font-extrabold text-xl sm:text-3xl md:text-4xl text-[#041510] tracking-tight">
                    {service.title}
                  </h2>

                  <p className="text-xs sm:text-base font-sans font-medium text-[#0A241D]/90 leading-relaxed">
                    {service.tagline}
                  </p>

                  <div className="space-y-2.5 sm:space-y-3 pt-1 sm:pt-2 text-xs sm:text-sm font-sans text-[#0A241D]/75">
                    <div>
                      <strong className="block font-mono text-[11px] sm:text-xs uppercase tracking-wider text-[#041510]">
                        What It Is:
                      </strong>
                      <p className="mt-0.5 sm:mt-1 leading-relaxed">{service.whatItIs}</p>
                    </div>

                    <div className="pt-1 sm:pt-2">
                      <strong className="block font-mono text-[11px] sm:text-xs uppercase tracking-wider text-[#041510]">
                        Ideal Business Category:
                      </strong>
                      <p className="mt-0.5 sm:mt-1 leading-relaxed">{service.whoItsFor}</p>
                    </div>
                  </div>

                  <div className="pt-2 sm:pt-4">
                    <button
                      type="button"
                      onClick={() =>
                        onNavigate(`/start-a-project?bundle=${encodeURIComponent(service.tier)}`)
                      }
                      className="w-full sm:w-auto justify-center inline-flex items-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-full font-mono text-xs font-bold uppercase tracking-wider text-[#041510] bg-[#00D285] hover:bg-[#00e599] border border-[#00D285]/30 transition-all duration-200 cursor-pointer shadow-[0_0_15px_rgba(0,210,133,0.3)] hover:shadow-md group"
                    >
                      <span>{service.ctaText}</span>
                      <ArrowRight
                        size={14}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </button>
                  </div>
                </motion.div>

                {/* Right Column: Verified Deliverables Checklist (7 cols) with subtle right-direction motion */}
                <motion.div
                  initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: 0.08, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  className="lg:col-span-7 bg-[#F4FAF6] rounded-xl sm:rounded-2xl p-4 sm:p-8 border border-[#00D285]/15 space-y-4 sm:space-y-6"
                >
                  <div className="flex items-center justify-between border-b border-[#00D285]/15 pb-3 sm:pb-4">
                    <span className="font-mono text-[11px] sm:text-xs uppercase tracking-wider font-bold text-[#041510]">
                      Verified Production Inclusions
                    </span>
                    <span className="font-mono text-[11px] sm:text-xs text-[#0A241D]/60 font-semibold">
                      Complete Ownership
                    </span>
                  </div>

                  <div className="space-y-2.5 sm:space-y-4">
                    {service.included.map((item, iIdx) => (
                      <div key={iIdx} className="flex items-start gap-2.5 sm:gap-3.5">
                        <CheckCircle2 size={16} className="text-[#00D285] shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm font-sans font-medium text-[#0A241D] leading-relaxed">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-3 sm:pt-4 border-t border-[#00D285]/15 flex flex-wrap items-center justify-between gap-2.5 sm:gap-3 text-[11px] sm:text-xs font-mono text-[#0A241D]/75">
                    <span>14–60d Warranty Included</span>
                    <span>100% Code Handover</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </section>

      {/* 3. Why Choose Us Section */}
      <section className="py-12 sm:py-20 md:py-28 bg-[#F8FAF9] border-t border-[#00D285]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] as const }}
            className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-8 sm:mb-16"
          >
            <div className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-[#00D285]/10 px-3 sm:px-3.5 py-0.5 sm:py-1 text-[11px] sm:text-xs font-mono uppercase tracking-widest text-[#00D285] border border-[#00D285]/25">
              <span>Why Choose ZIVDEV</span>
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-display font-extrabold uppercase text-[#041510] tracking-tight leading-tight">
              Engineering Value Over <br />
              <span className="underline decoration-[#00D285] decoration-4 underline-offset-8">
                Marketing Fluff.
              </span>
            </h2>
            <p className="text-xs sm:text-base font-sans text-[#0A241D]/80">
              Four fundamental pillars that protect your business from obsolete code, aggregator
              commissions, and unexpected monthly builder fees.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {whyChooseUsPillars.map((pillar, idx) => {
              const IconComponent = pillar.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{
                    opacity: 0,
                    y: shouldReduceMotion ? 0 : 22,
                    scale: shouldReduceMotion ? 1 : 0.98,
                  }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    delay: idx * 0.08,
                    duration: 0.5,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="p-4 sm:p-6 rounded-2xl bg-white border border-[#00D285]/15 space-y-2 sm:space-y-3 hover:bg-[#F4FAF6] hover:border-[#00D285]/40 hover:-translate-y-1 transition-all duration-200 group"
                >
                  <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-xl bg-[#00D285]/10 text-[#00D285] flex items-center justify-center group-hover:bg-[#00D285] group-hover:text-[#041510] transition-colors">
                    <IconComponent size={17} />
                  </div>
                  <h3 className="font-display font-bold text-sm sm:text-lg text-[#041510]">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#0A241D]/75 font-sans leading-relaxed">
                    {pillar.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Image + Text Split Capability Section */}
      <section className="py-12 sm:py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#06211A] text-[#E8F7EE] rounded-2xl sm:rounded-3xl overflow-hidden shadow-card border border-[#00D285]/20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
            {/* Visual (5 cols) with image reveal */}
            <div className="lg:col-span-5 relative min-h-[220px] sm:min-h-[420px] bg-[#041510] overflow-hidden group">
              <motion.img
                initial={{ scale: shouldReduceMotion ? 1 : 1.06 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                src={studioEngineeringImg}
                alt="Precision Code Review"
                className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06211A] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#06211A]" />
            </div>

            {/* Content (7 cols) */}
            <div className="lg:col-span-7 p-5 sm:p-12 md:p-14 space-y-4 sm:space-y-6">
              <div className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-[#00D285]/10 px-3 sm:px-3.5 py-0.5 sm:py-1 text-[11px] sm:text-xs font-mono uppercase tracking-widest text-[#00D285] border border-[#00D285]/25">
                <span>The Engineering Advantage</span>
              </div>
              <h3 className="font-display font-bold text-xl sm:text-3xl md:text-4xl text-white tracking-tight uppercase leading-tight">
                Designed to Increase Direct Calls & Customer Bookings.
              </h3>
              <p className="text-xs sm:text-base font-sans text-[#E8F7EE]/80 leading-relaxed">
                Whether you run a resort, healthcare practice, fitness center, or professional
                consultancy, your website should actively handle client inquiries rather than
                passively sitting on the web. We build high-converting inquiry funnels, instant
                WhatsApp triggers, and streamlined interfaces designed for real revenue.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button
                  type="button"
                  onClick={() => onNavigate("/work")}
                  className="w-full sm:w-auto justify-center inline-flex items-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-full font-mono text-xs font-bold uppercase tracking-wider text-[#041510] bg-[#00D285] hover:bg-[#00e599] transition-all cursor-pointer group shadow-[0_0_15px_rgba(0,210,133,0.3)]"
                >
                  <span>EXPLORE CLIENT WORK</span>
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate("/start-a-project")}
                  className="w-full sm:w-auto justify-center inline-flex items-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-full font-mono text-xs font-bold uppercase tracking-wider text-[#E8F7EE] border border-[#00D285]/35 hover:bg-[#00D285] hover:text-[#041510] transition-colors cursor-pointer group"
                >
                  <span>START A PROJECT</span>
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 5. Final CTA */}
      <FinalCtaSection
        onStartProject={() => onNavigate("/start-a-project")}
        onExploreWork={() => onNavigate("/work")}
      />
    </div>
  );
}

export default ServicesPage;
