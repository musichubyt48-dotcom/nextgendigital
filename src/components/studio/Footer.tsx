import { ArrowUpRight, MessageCircle, Mail, Instagram, ArrowUp } from "lucide-react";

interface FooterProps {
  onNavigate: (path: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#051F20] text-[#DAF1DE] border-t border-[#8EB69B]/20 pt-10 sm:pt-16 pb-8 sm:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 pb-8 sm:pb-14 border-b border-[#8EB69B]/15">
          {/* Col 1: Studio Brand & Positioning (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="h-9 w-9 rounded-xl bg-[#235347] text-[#FFFFFF] flex items-center justify-center font-display font-extrabold text-lg">
                N
              </span>
              <span className="font-display font-bold text-xl uppercase tracking-tight text-[#FFFFFF]">
                NextGen Digital
              </span>
            </div>
            <p className="text-sm text-[#DAF1DE]/75 max-w-sm leading-relaxed font-sans">
              We build professional websites and digital systems around your business. Custom
              architecture, direct lead flows, and zero vendor lock-in.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs font-mono text-[#8EB69B]">
              <span className="h-2 w-2 rounded-full bg-[#8EB69B] animate-pulse" />
              <span>Operating Worldwide · Studio HQ India</span>
            </div>
          </div>

          {/* Col 2: Navigation Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#8EB69B] font-bold block">
              Navigation
            </span>
            <ul className="space-y-2 text-sm font-sans">
              {[
                { label: "Home", path: "/" },
                { label: "About Studio", path: "/about" },
                { label: "Services & Scope", path: "/services" },
                { label: "Selected Work", path: "/work" },
                { label: "Pricing Packages", path: "/pricing" },
                { label: "Contact Us", path: "/contact" },
                { label: "Start a Project", path: "/start-a-project" },
              ].map((link) => (
                <li key={link.path}>
                  <button
                    type="button"
                    onClick={() => onNavigate(link.path)}
                    className="text-[#DAF1DE]/80 hover:text-[#FFFFFF] transition-colors py-0.5"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Legal & Governance (2 cols) */}
          <div className="md:col-span-2 space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#8EB69B] font-bold block">
              Legal & Terms
            </span>
            <ul className="space-y-2 text-xs font-sans text-[#DAF1DE]/70">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate("/privacy-policy")}
                  className="hover:text-[#FFFFFF] transition-colors text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate("/terms-and-conditions")}
                  className="hover:text-[#FFFFFF] transition-colors text-left"
                >
                  Terms & Conditions
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate("/cancellation-refund")}
                  className="hover:text-[#FFFFFF] transition-colors text-left"
                >
                  Cancellation / Refund
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Social (2 cols) */}
          <div className="md:col-span-2 space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#8EB69B] font-bold block">
              Connect
            </span>
            <ul className="space-y-2.5 text-xs font-mono">
              <li>
                <a
                  href="https://wa.me/918509332038"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#DAF1DE]/80 hover:text-[#FFFFFF] transition-colors"
                >
                  <MessageCircle size={14} />
                  <span>WhatsApp</span>
                  <ArrowUpRight size={11} className="opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href="mailto:nextgendigitalofficial2026@gmail.com"
                  className="flex items-center gap-2 text-[#DAF1DE]/80 hover:text-[#FFFFFF] transition-colors"
                >
                  <Mail size={14} />
                  <span>Email</span>
                  <ArrowUpRight size={11} className="opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#DAF1DE]/80 hover:text-[#FFFFFF] transition-colors"
                >
                  <Instagram size={14} />
                  <span>Instagram</span>
                  <ArrowUpRight size={11} className="opacity-60" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Sub-footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#DAF1DE]/60">
          <p>© {new Date().getFullYear()} NextGen Digital. All rights reserved.</p>
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-[#DAF1DE] hover:text-[#FFFFFF] transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp size={13} />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
