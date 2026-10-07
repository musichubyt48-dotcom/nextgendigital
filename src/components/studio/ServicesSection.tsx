import { ArrowRight, Globe, Flame, CalendarCheck, ShoppingBag, Code2, Wrench } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

interface ServicesSectionProps {
  onNavigateServices: () => void;
}

const services = [
  {
    num: "01",
    id: "business-websites",
    icon: Globe,
    title: "Business Websites",
    desc: "Authority-building digital headquarters that tell your brand story and convert visitors into qualified inquiries.",
  },
  {
    num: "02",
    id: "landing-pages",
    icon: Flame,
    title: "Landing Pages",
    desc: "Laser-focused, high-conversion single-page experiences built for product launches, ad campaigns, and lead capture.",
  },
  {
    num: "03",
    id: "booking-websites",
    icon: CalendarCheck,
    title: "Booking Websites",
    desc: "Tailored reservation and appointment flows with instant WhatsApp confirmations for clinics, salons, and hospitality.",
  },
  {
    num: "04",
    id: "ecommerce",
    icon: ShoppingBag,
    title: "E-commerce",
    desc: "Clean product catalogs, cart workflows, and integrated payment gateways optimized for friction-free mobile checkout.",
  },
  {
    num: "05",
    id: "custom-systems",
    icon: Code2,
    title: "Custom Web Systems",
    desc: "Bespoke internal calculators, client portals, directories, and data management workflows crafted around your business operations.",
  },
  {
    num: "06",
    id: "maintenance",
    icon: Wrench,
    title: "Website Maintenance",
    desc: "Ongoing security audits, performance optimization, speed monitoring, and regular content updates so you stay worry-free.",
  },
];

export function ServicesSection({ onNavigateServices }: ServicesSectionProps) {
  return (
    <section
      id="services"
      className="py-20 md:py-32 relative bg-background border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-14 border-b border-white/10">
          <SectionHeader
            number="03"
            eyebrow="What We Do"
            align="left"
            title={
              <>
                Digital solutions for{" "}
                <span className="text-gradient-gold italic">real businesses</span>.
              </>
            }
            description="From high-converting landing pages to specialized booking systems, we build digital infrastructure tailored to your exact business needs."
          />

          <button
            type="button"
            onClick={onNavigateServices}
            className="inline-flex items-center gap-2 text-sm font-mono uppercase tracking-wider text-gold hover:text-gold-soft transition-colors self-start md:self-end group"
          >
            <span>Explore All Services</span>
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 6 Services Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.id}
                onClick={onNavigateServices}
                className="group glass rounded-3xl p-7 hover-lift cursor-pointer relative overflow-hidden flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="h-12 w-12 rounded-2xl glass-gold flex items-center justify-center text-gold group-hover:scale-110 transition-transform">
                      <Icon size={22} />
                    </div>
                    <span className="font-mono text-xs text-gold/60 tracking-widest">{s.num}</span>
                  </div>

                  <h3 className="font-display text-2xl text-foreground group-hover:text-gold transition-colors">
                    {s.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-xs font-mono uppercase tracking-wider text-gold group-hover:text-gold-soft">
                  <span>Explore</span>
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
