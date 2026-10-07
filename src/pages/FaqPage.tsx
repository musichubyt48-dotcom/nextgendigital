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
    <div className="min-h-screen bg-[#F7F3EA] text-[#17202A] pt-24 pb-12 sm:pt-32 sm:pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center space-y-3 sm:space-y-4 pb-8 sm:pb-12 border-b border-[#DED6C8]">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-[#FFFDF8] border border-[#DED6C8] px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C9A45C]" />
            <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#687078] font-medium">
              Client Knowledge Base
            </span>
          </div>
          <h1 className="font-display text-2xl sm:text-5xl md:text-6xl text-[#17202A] leading-[1.15] font-normal">
            Clear answers to <span className="italic">common questions.</span>
          </h1>
          <p className="text-xs sm:text-base md:text-lg text-[#687078] leading-relaxed max-w-xl mx-auto">
            Everything you need to know about pricing, project timelines, code ownership, hosting
            setup, and technical maintenance.
          </p>
        </div>

        {/* Search Input */}
        <div className="pt-6 sm:pt-8">
          <div className="relative">
            <Search
              size={16}
              className="absolute left-3.5 sm:left-4 top-1/2 -translate-y-1/2 text-[#687078]"
            />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by keyword (e.g., hosting, price, booking)..."
              className="w-full bg-[#FFFDF8] border border-[#DED6C8] rounded-xl sm:rounded-2xl pl-10 sm:pl-11 pr-4 py-2.5 sm:py-3 text-base sm:text-sm text-[#17202A] placeholder-[#687078]/60 focus:outline-none focus:ring-1 focus:ring-[#C9A45C] transition-all"
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
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                  isSelected
                    ? "bg-[#17202A] text-[#FFFDF8] shadow-sm"
                    : "bg-[#FFFDF8] text-[#687078] border border-[#DED6C8] hover:text-[#17202A]"
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
                  className="bg-[#FFFDF8] border border-[#DED6C8] rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-200"
                >
                  <button
                    type="button"
                    onClick={() => toggle(item.id)}
                    className="w-full text-left p-3.5 sm:p-5 md:p-6 flex items-center justify-between gap-3 sm:gap-4 focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-start sm:items-center gap-2.5 sm:gap-4">
                      <span className="font-mono text-xs text-[#C9A45C] font-semibold shrink-0 pt-0.5 sm:pt-0">
                        0{idx + 1}
                      </span>
                      <div>
                        <h3 className="font-display text-sm sm:text-lg md:text-xl text-[#17202A] leading-snug">
                          {item.question}
                        </h3>
                        <span className="font-mono text-[9px] sm:text-[0.625rem] uppercase text-[#687078] tracking-wider mt-0.5 block">
                          {item.category}
                        </span>
                      </div>
                    </div>

                    <div
                      className={`h-6 w-6 sm:h-7 sm:w-7 rounded-full bg-[#EFE8DA] flex items-center justify-center text-[#17202A] shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 bg-[#C9A45C] text-[#17202A]" : ""
                      }`}
                    >
                      <ChevronDown size={14} />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-3.5 sm:px-6 pb-4 sm:pb-6 pt-1 text-xs sm:text-sm text-[#687078] leading-relaxed border-t border-[#DED6C8]/60 pl-8 sm:pl-14">
                      <p>{item.answer}</p>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="bg-[#FFFDF8] border border-[#DED6C8] rounded-2xl p-6 sm:p-8 text-center text-xs sm:text-sm text-[#687078]">
              No questions matched your search query. Try searching for a different keyword or
              contact Ashutosh directly.
            </div>
          )}
        </div>

        {/* WhatsApp Direct */}
        <div className="mt-8 sm:mt-12 bg-[#EFE8DA] border border-[#DED6C8] rounded-2xl p-5 sm:p-8 text-center space-y-2.5 sm:space-y-3">
          <h3 className="font-display text-lg sm:text-xl text-[#17202A]">
            Have a question about your specific technical requirements?
          </h3>
          <p className="text-xs sm:text-sm text-[#687078] max-w-md mx-auto">
            Ashutosh is available directly on WhatsApp to provide transparent, honest answers
            without sales pressure.
          </p>
          <div className="pt-1 sm:pt-2">
            <a
              href="https://wa.me/918509332038"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-5 sm:px-6 py-2.5 rounded-full text-xs font-medium tracking-wide shadow-sm"
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
