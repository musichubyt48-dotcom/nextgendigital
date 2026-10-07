import { useState, useEffect } from "react";
import { Menu, X, ArrowRight, Phone, MessageCircle } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { MagneticButton } from "@/components/motion/MagneticButton";

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export function Navbar({ currentPath, onNavigate }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "HOME", path: "/" },
    { label: "ABOUT", path: "/about" },
    { label: "SERVICES", path: "/services" },
    { label: "WORK", path: "/work" },
    { label: "PRICING", path: "/pricing" },
    { label: "CONTACT", path: "/contact" },
  ];

  const handleLinkClick = (path: string) => {
    setMobileMenuOpen(false);
    onNavigate(path);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md border-b border-[#235347]/15 py-3 shadow-[0_4px_24px_rgba(11,43,38,0.06)]"
            : "bg-transparent py-5 sm:py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Studio Logo */}
            <button
              type="button"
              onClick={() => handleLinkClick("/")}
              className="flex items-center gap-2.5 text-left group focus:outline-none cursor-pointer"
            >
              <span className="h-8 w-8 rounded-lg bg-[#0B2B26] flex items-center justify-center text-[#DAF1DE] font-display font-bold text-base transition-transform duration-300 group-hover:scale-105 group-hover:bg-[#235347]">
                N
              </span>
              <div className="flex flex-col">
                <span className="font-display font-bold tracking-tight text-base sm:text-lg text-[#0B2B26] uppercase">
                  NextGen Digital
                </span>
                <span className="font-mono text-[0.625rem] uppercase tracking-widest text-[#163832]/60 -mt-0.5">
                  Studio & Systems
                </span>
              </div>
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-7 lg:gap-9">
              {navLinks.map((link) => {
                const isActive = currentPath === link.path;
                return (
                  <button
                    key={link.path}
                    type="button"
                    onClick={() => handleLinkClick(link.path)}
                    className={`relative text-xs font-mono font-medium uppercase tracking-widest transition-colors duration-200 py-1 cursor-pointer ${
                      isActive
                        ? "text-[#0B2B26] font-bold"
                        : "text-[#163832]/75 hover:text-[#0B2B26]"
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <motion.span
                        layoutId="activeNavIndicator"
                        className="absolute -bottom-0.5 left-0 right-0 h-[2px] bg-[#235347] rounded-full"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 32,
                        }}
                      />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Desktop CTA Button */}
            <div className="hidden md:flex items-center gap-3">
              <MagneticButton
                variant="primary"
                onClick={() => handleLinkClick("/start-a-project")}
                className="!py-2.5 !px-5 text-xs font-mono font-bold tracking-wider hover:shadow-[0_4px_16px_rgba(35,83,71,0.25)] transition-shadow"
              >
                <span>START A PROJECT</span>
                <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
              </MagneticButton>
            </div>

            {/* Mobile Menu Trigger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden h-10 w-10 rounded-full border border-[#235347]/20 bg-white flex items-center justify-center text-[#0B2B26] hover:bg-[#DAF1DE] transition-colors cursor-pointer"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 md:hidden bg-white pt-24 pb-8 px-6 flex flex-col justify-between overflow-y-auto"
          >
            <div className="space-y-6 pt-4">
              <span className="font-mono text-[0.6875rem] uppercase tracking-widest text-[#163832]/50 block">
                Menu Navigation
              </span>
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link, idx) => (
                  <motion.button
                    key={link.path}
                    type="button"
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * idx, duration: 0.25 }}
                    onClick={() => handleLinkClick(link.path)}
                    className={`text-left font-display text-2xl font-bold uppercase tracking-tight flex items-center justify-between py-2 border-b border-[#235347]/10 cursor-pointer ${
                      currentPath === link.path ? "text-[#0B2B26]" : "text-[#163832]/70"
                    }`}
                  >
                    <span>{link.label}</span>
                    <ArrowRight size={18} className="opacity-60" />
                  </motion.button>
                ))}
              </nav>
            </div>

            <div className="pt-8 space-y-4 border-t border-[#235347]/15">
              <MagneticButton
                variant="primary"
                onClick={() => handleLinkClick("/start-a-project")}
                className="w-full !py-4 text-sm"
              >
                <span>START A PROJECT</span>
                <ArrowRight size={16} />
              </MagneticButton>

              <div className="grid grid-cols-2 gap-2 pt-2">
                <a
                  href="https://wa.me/918509332038?text=Hello%20NextGen%20Digital,%20I%20would%20like%20to%20discuss%20a%20website%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl border border-[#235347]/20 text-xs font-mono font-medium text-[#163832] bg-[#DAF1DE]/40 hover:bg-[#DAF1DE]"
                >
                  <MessageCircle size={14} />
                  <span>WhatsApp</span>
                </a>
                <a
                  href="tel:+918509332038"
                  className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl border border-[#235347]/20 text-xs font-mono font-medium text-[#163832] bg-[#DAF1DE]/40 hover:bg-[#DAF1DE]"
                >
                  <Phone size={14} />
                  <span>Call Studio</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
