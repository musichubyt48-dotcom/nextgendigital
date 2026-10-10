export function StudioMarquee() {
  const items = [
    "WEBSITE DESIGN",
    "DIGITAL SYSTEMS",
    "BUSINESS WEBSITES",
    "UI/UX",
    "BOOKING SYSTEMS",
    "E-COMMERCE",
    "CUSTOM DEVELOPMENT",
    "ZIVDEV",
    "HIGH PERFORMANCE",
    "LEAD ENGINES",
  ];

  return (
    <div className="relative w-full overflow-hidden border-y border-[#00D285]/20 bg-[#06211A] text-[#E8F7EE] py-3.5 select-none shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
      <div className="animate-marquee flex items-center whitespace-nowrap">
        {[...items, ...items].map((item, idx) => (
          <div key={idx} className="flex items-center mx-4 sm:mx-6 group cursor-default">
            <span className="font-display font-bold text-xs sm:text-sm uppercase tracking-[0.2em] text-[#E8F7EE] group-hover:text-[#00D285] transition-colors">
              {item}
            </span>
            <span className="mx-4 sm:mx-6 h-1.5 w-1.5 rounded-full bg-[#00D285] shadow-[0_0_6px_#00D285]" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default StudioMarquee;
