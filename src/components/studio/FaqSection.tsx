import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface FaqSectionProps {
  onContactClick?: () => void;
}

export function FaqSection({ onContactClick }: FaqSectionProps) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "How much does a website cost?",
      a: "Our standard pricing starts at ₹4,999+ for a single-page conversion website, ₹14,999+ for a multi-page business platform (up to 5 pages), and ₹24,999+ for bespoke web systems, booking engines, or e-commerce storefronts. Advanced custom portals with custom databases or third-party APIs are quoted based on exact feature scope.",
    },
    {
      q: "How long does a website take?",
      a: "Single-page starter websites are typically delivered within 4 to 7 business days. Standard multi-page corporate sites require 10 to 18 business days. Complex custom booking platforms and e-commerce stores take 3 to 5 weeks depending on asset readiness and milestone feedback speed.",
    },
    {
      q: "Is hosting included?",
      a: "We assist in setting up high-performance, cost-effective hosting tailored to your traffic (e.g. Vercel, Cloudflare, AWS, or your preferred server provider). We configure DNS, SSL certificates, and deployment pipelines directly under your account so you maintain full billing control.",
    },
    {
      q: "Is the domain included?",
      a: "Domain names are registered directly in your business's legal name through registrars like Cloudflare, GoDaddy, or Namecheap. We guide you through the purchase (usually ₹800–₹1,200/year) and handle the full technical DNS setup at zero extra charge.",
    },
    {
      q: "Do you provide maintenance?",
      a: "Yes. Every engagement includes complimentary post-launch warranty support (14 to 60 days based on package). After that, we offer proactive monthly maintenance retainers covering security audits, content updates, uptime monitoring, and Core Web Vitals checks.",
    },
    {
      q: "Can you build e-commerce websites?",
      a: "Yes. We build custom e-commerce storefronts integrated with Razorpay, Cashfree, or Stripe, complete with automated WhatsApp order notifications, product filtering, discount coupons, and lightweight administrative dashboards.",
    },
    {
      q: "Can you build booking systems?",
      a: "Yes. Direct booking and appointment scheduling are core JIVDEV specialties. We build custom booking workflows for hotels, wellness resorts, dental clinics, fitness studios, and salons that route bookings directly to your staff's WhatsApp or calendar without third-party commission overhead.",
    },
    {
      q: "How many revisions are included?",
      a: "All projects include structured revision rounds during the design and staging phases (typically 2 to 3 comprehensive review rounds). Our collaborative process ensures you sign off on wireframes and staging demos before live production deployment.",
    },
    {
      q: "Who owns the website after delivery?",
      a: "You do — 100%. Upon final project milestone settlement, all frontend code, assets, graphics, and deployment keys belong entirely to your business. We never trap clients in proprietary hosting lockdowns or charge hostage licensing fees.",
    },
  ];

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 md:py-32 bg-[#FAF9F6] border-t border-[#00D285]/15 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 pb-14 border-b border-[#00D285]/15">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#00D285]/10 px-3.5 py-1 text-xs font-mono uppercase tracking-widest text-[#00D285] border border-[#00D285]/25">
            <span>07 / Common Queries</span>
          </div>
          <h2 className="text-fluid-section font-display font-bold uppercase text-[#041510] tracking-tight">
            Frequently Asked <br />
            <span className="underline decoration-[#00D285] decoration-4 underline-offset-8">
              Questions.
            </span>
          </h2>
          <p className="text-sm sm:text-base font-sans text-[#0A241D]/75 max-w-lg mx-auto">
            Honest answers about costs, timelines, hosting, code ownership, and technical scope.
          </p>
        </div>

        {/* Accordion List */}
        <div className="mt-10 space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-white border-[#00D285]/40 shadow-card"
                    : "bg-[#F8FAF9] border-[#00D285]/15 hover:bg-white"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full py-5 px-6 sm:px-8 flex items-center justify-between text-left gap-4 focus:outline-none cursor-pointer"
                >
                  <span className="font-display font-bold text-base sm:text-lg text-[#041510] tracking-tight">
                    {faq.q}
                  </span>
                  <span
                    className={`h-8 w-8 rounded-full border border-[#00D285]/20 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-[#00D285] text-[#041510]" : "text-[#0A241D]/60"
                    }`}
                  >
                    <ChevronDown size={16} />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 sm:px-8 pb-6 pt-1 text-sm sm:text-base text-[#0A241D]/85 leading-relaxed border-t border-[#00D285]/15">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Contact reassurance */}
        {onContactClick && (
          <div className="mt-12 text-center text-xs font-mono text-[#0A241D]/70">
            Have a different question?{" "}
            <button
              type="button"
              onClick={onContactClick}
              className="text-[#041510] font-bold underline underline-offset-4 hover:text-[#00D285] cursor-pointer transition-colors"
            >
              Ask our studio directly →
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default FaqSection;
