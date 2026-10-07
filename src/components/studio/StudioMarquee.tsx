export function StudioMarquee() {
  const items = [
    "WEBSITE DESIGN",
    "DIGITAL SYSTEMS",
    "BUSINESS WEBSITES",
    "UI/UX",
    "BOOKING SYSTEMS",
    "E-COMMERCE",
    "CUSTOM DEVELOPMENT",
    "NEXTGEN DIGITAL",
    "HIGH PERFORMANCE",
    "LEAD ENGINES",
  ];

  return (
    <div className="relative w-full overflow-hidden border-y border-[#8EB69B]/20 bg-[#0B2B26] text-[#DAF1DE] py-3 select-none">
      <div className="animate-marquee flex items-center whitespace-nowrap">
        {[...items, ...items].map((item, idx) => (
          <div key={idx} className="flex items-center mx-4 sm:mx-6 group cursor-default">
            <span className="font-display font-bold text-xs sm:text-sm uppercase tracking-[0.2em] text-[#DAF1DE] group-hover:text-[#FFFFFF] transition-colors">
              {item}
            </span>
            <span className="mx-4 sm:mx-6 h-1.5 w-1.5 rounded-full bg-[#8EB69B]" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default StudioMarquee;
