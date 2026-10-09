import { ArrowUpRight, MessageCircle, Mail, Instagram, ArrowUp } from "lucide-react";
import logo from "@/assets/images/zivdev_main_logo.png";

interface FooterProps {
  onNavigate: (path: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#041510] text-[#E8F7EE] border-t border-[#00D285]/20 pt-10 sm:pt-16 pb-8 sm:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 pb-8 sm:pb-14 border-b border-[#00D285]/15">
          {/* Col 1: Studio Brand & Positioning (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <img
                src={logo}
                alt="ZIVDEV"
                className="h-9 w-9 object-contain rounded-xl shadow-[0_0_15px_rgba(0,210,133,0.35)]"
              />
              <span className="font-display font-bold text-xl uppercase tracking-tight text-[#FFFFFF]">
                ZIVDEV
              </span>
            </div>
            <p className="text-sm text-[#A4CBB7] max-w-sm leading-relaxed font-sans">
              We build professional websites and digital systems around your business. Custom
              architecture, direct lead flows, and zero vendor lock-in.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs font-mono text-[#00D285]">
              <span className="h-2 w-2 rounded-full bg-[#00D285] animate-pulse shadow-[0_0_6px_#00D285]" />
              <span>Operating Worldwide · Studio HQ India</span>
            </div>
          </div>

          {/* Col 2: Navigation Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#00D285] font-bold block">
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
                    className="text-[#E8F7EE]/80 hover:text-[#00D285] transition-colors py-0.5 cursor-pointer text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Legal & Governance (2 cols) */}
          <div className="md:col-span-2 space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#00D285] font-bold block">
              Legal & Terms
            </span>
            <ul className="space-y-2 text-xs font-sans text-[#A4CBB7]">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate("/privacy-policy")}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate("/terms-and-conditions")}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Terms & Conditions
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate("/cancellation-refund")}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Cancellation / Refund
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Social (2 cols) */}
          <div className="md:col-span-2 space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#00D285] font-bold block">
              Connect
            </span>
            <ul className="space-y-2.5 text-xs font-mono">
              <li>
                <a
                  href="https://wa.me/918509332038"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#E8F7EE]/80 hover:text-[#00D285] transition-colors"
                >
                  <MessageCircle size={14} />
                  <span>WhatsApp</span>
                  <ArrowUpRight size={11} className="opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href="mailto:zivdevofficial@gmail.com"
                  className="flex items-center gap-2 text-[#E8F7EE]/80 hover:text-[#00D285] transition-colors"
                >
                  <Mail size={14} />
                  <span>Email</span>
                  <ArrowUpRight size={11} className="opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/zivdevofficial?stkn=dDVtNHN6OGVrbHZ4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#E8F7EE]/80 hover:text-[#00D285] transition-colors"
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
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#A4CBB7]/60">
          <p>© {new Date().getFullYear()} ZIVDEV. All rights reserved.</p>
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-[#E8F7EE] hover:text-[#00D285] transition-colors cursor-pointer"
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
