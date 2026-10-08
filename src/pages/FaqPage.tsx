import { useState } from "react";
import { ChevronDown, Search, MessageCircle, HelpCircle } from "lucide-react";
import { faqData, FaqItem } from "@/data/faqData";

interface FaqPageProps {
  onNavigate: (path: string) => void;
}

const categories = [
  "All Questions",
  "Pricing & Scope",
  "Technical & Hosting",
  "Process & Delivery",
  "Capabilities",
];

export function FaqPage({ onNavigate }: FaqPageProps) {
  const [activeCategory, setActiveCategory] = useState("All Questions");
  const [searchTerm, setSearchTerm] = useState("");
  const [openId, setOpenId] = useState<string | null>(faqData[0].id);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const filteredFaqs = faqData.filter((item) => {
    const matchesCat = activeCategory === "All Questions" || item.category === activeCategory;
    const matchesSearch =
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#041510] pt-24 pb-12 sm:pt-32 sm:pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center space-y-3 sm:space-y-4 pb-8 sm:pb-12 border-b border-[#00D285]/15">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-[#00D285]/10 border border-[#00D285]/25 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full">
            <span className="h-1.5 w-1.5 rounded-full bg-[#00D285]" />
            <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#00D285] font-semibold">
              Client Knowledge Base
            </span>
          </div>
          <h1 className="font-display text-2xl sm:text-5xl md:text-6xl text-[#041510] leading-[1.15] font-bold">
            Clear answers to{" "}
            <span className="underline decoration-[#00D285] decoration-4 underline-offset-8">
              common questions.
            </span>
          </h1>
          <p className="text-xs sm:text-base md:text-lg text-[#0A241D]/75 leading-relaxed max-w-xl mx-auto">
            Everything you need to know about pricing, project timelines, code ownership, hosting
            setup, and technical maintenance.
          </p>
        </div>

        {/* Search Input */}
        <div className="pt-6 sm:pt-8">
          <div className="relative">
            <Search
              size={16}
              className="absolute left-3.5 sm:left-4 top-1/2 -translate-y-1/2 text-[#0A241D]/50"
            />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by keyword (e.g., hosting, price, booking)..."
              className="w-full bg-[#F8FAF9] border border-[#00D285]/20 rounded-xl sm:rounded-2xl pl-10 sm:pl-11 pr-4 py-2.5 sm:py-3 text-base sm:text-sm text-[#041510] placeholder-[#0A241D]/45 focus:outline-none focus:ring-2 focus:ring-[#00D285]/40 transition-all"
            />
          </div>
        </div>

        {/* Category Pills */}
        <div className="pt-3 sm:pt-4 pb-4 sm:pb-6 flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar">
          {categories.map((cat) => {
            const isSelected = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-mono font-medium whitespace-nowrap transition-all cursor-pointer ${
                  isSelected
                    ? "bg-[#06211A] text-[#00D285] border border-[#00D285] shadow-xs"
                    : "bg-[#F8FAF9] text-[#0A241D]/80 border border-[#00D285]/15 hover:bg-[#E8F7EE]"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-2.5 sm:space-y-3 pt-1 sm:pt-2">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((item, idx) => {
              const isOpen = openId === item.id;
              return (
                <div
                  key={item.id}
                  className="bg-[#FFFFFF] border border-[#00D285]/20 rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-200 shadow-xs hover:border-[#00D285]/40"
                >
                  <button
                    type="button"
                    onClick={() => toggle(item.id)}
                    className="w-full text-left p-3.5 sm:p-5 md:p-6 flex items-center justify-between gap-3 sm:gap-4 focus:outline-none cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-start sm:items-center gap-2.5 sm:gap-4">
                      <span className="font-mono text-xs text-[#00D285] font-bold shrink-0 pt-0.5 sm:pt-0">
                        0{idx + 1}
                      </span>
                      <div>
                        <h3 className="font-display font-bold text-sm sm:text-lg md:text-xl text-[#041510] leading-snug">
                          {item.question}
                        </h3>
                        <span className="font-mono text-[9px] sm:text-[0.625rem] uppercase text-[#0A241D]/60 tracking-wider mt-0.5 block">
                          {item.category}
                        </span>
                      </div>
                    </div>

                    <div
                      className={`h-6 w-6 sm:h-7 sm:w-7 rounded-full bg-[#00D285]/10 flex items-center justify-center text-[#041510] shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 bg-[#00D285] text-[#041510]" : ""
                      }`}
                    >
                      <ChevronDown size={14} />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-3.5 sm:px-6 pb-4 sm:pb-6 pt-1 text-xs sm:text-sm text-[#0A241D]/80 leading-relaxed border-t border-[#00D285]/15 pl-8 sm:pl-14">
                      <p>{item.answer}</p>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="bg-[#F8FAF9] border border-[#00D285]/20 rounded-2xl p-6 sm:p-8 text-center text-xs sm:text-sm text-[#0A241D]/70">
              No questions matched your search query. Try searching for a different keyword or
              contact Ashutosh directly.
            </div>
          )}
        </div>

        {/* WhatsApp Direct */}
        <div className="mt-8 sm:mt-12 bg-[#F8FAF9] border border-[#00D285]/20 rounded-2xl p-5 sm:p-8 text-center space-y-2.5 sm:space-y-3">
          <h3 className="font-display font-bold text-lg sm:text-xl text-[#041510]">
            Have a question about your specific technical requirements?
          </h3>
          <p className="text-xs sm:text-sm text-[#0A241D]/75 max-w-md mx-auto">
            Ashutosh is available directly on WhatsApp to provide transparent, honest answers
            without sales pressure.
          </p>
          <div className="pt-1 sm:pt-2">
            <a
              href="https://wa.me/918509332038"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#00D285] hover:bg-[#00B873] text-[#041510] px-5 sm:px-6 py-2.5 rounded-full text-xs font-mono font-bold tracking-wide shadow-md shadow-[#00D285]/20"
            >
              <MessageCircle size={15} />
              <span>Ask on WhatsApp: +91 85093 32038</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
