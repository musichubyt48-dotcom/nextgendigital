import { useState, useEffect } from "react";
import { Menu, X, ArrowRight, Phone, MessageCircle, Instagram } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { MagneticButton } from "@/components/motion/MagneticButton";
import logo from "@/assets/images/zivdev_main_logo.png";

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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out bg-[#041510]/95 backdrop-blur-md border-b border-[#00D285]/20 ${
          isScrolled
            ? "py-3 shadow-[0_4px_28px_rgba(0,0,0,0.5)]"
            : "py-4 sm:py-4.5 shadow-[0_2px_20px_rgba(0,0,0,0.35)]"
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
              <img
                src={logo}
                alt="ZIVDEV"
                className="h-8 w-8 object-contain rounded-lg transition-transform duration-300 group-hover:scale-105 shadow-[0_0_15px_rgba(0,210,133,0.35)]"
              />
              <div className="flex flex-col">
                <span className="font-display font-bold tracking-tight text-base sm:text-lg text-white uppercase">
                  ZIVDEV
                </span>
                <span className="font-mono text-[0.625rem] uppercase tracking-widest text-[#00D285]/80 -mt-0.5">
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
                      isActive ? "text-white font-bold" : "text-white/75 hover:text-white"
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <motion.span
                        layoutId="activeNavIndicator"
                        className="absolute -bottom-0.5 left-0 right-0 h-[2px] bg-[#00D285] rounded-full shadow-[0_0_8px_rgba(0,210,133,0.8)]"
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
                className="!py-2.5 !px-5 text-xs font-mono font-bold tracking-wider !bg-[#00D285] !text-[#041510] hover:!bg-[#00e599] !border-[#00D285] hover:shadow-[0_0_24px_rgba(0,210,133,0.45)] transition-all"
              >
                <span>START A PROJECT</span>
                <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
              </MagneticButton>
            </div>

            {/* Mobile Menu Trigger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden h-10 w-10 rounded-full border border-[#00D285]/30 bg-[#06211a]/80 backdrop-blur-md flex items-center justify-center text-white hover:bg-[#00D285] hover:text-[#041510] transition-colors cursor-pointer shadow-[0_0_12px_rgba(0,210,133,0.15)]"
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
            className="fixed inset-0 z-40 md:hidden bg-[#041510]/95 backdrop-blur-xl pt-24 pb-8 px-6 flex flex-col justify-between overflow-y-auto text-white"
          >
            <div className="space-y-6 pt-4">
              <span className="font-mono text-[0.6875rem] uppercase tracking-widest text-[#00D285]/80 block">
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
                    className={`text-left font-display text-2xl font-bold uppercase tracking-tight flex items-center justify-between py-2 border-b border-[#00D285]/15 cursor-pointer ${
                      currentPath === link.path ? "text-[#00D285]" : "text-white/85"
                    }`}
                  >
                    <span>{link.label}</span>
                    <ArrowRight size={18} className="opacity-60 text-[#00D285]" />
                  </motion.button>
                ))}
              </nav>
            </div>

            <div className="pt-8 space-y-4 border-t border-[#00D285]/15">
              <button
                type="button"
                onClick={() => handleLinkClick("/start-a-project")}
                className="w-full py-4 rounded-full font-mono text-sm font-bold tracking-wider uppercase bg-[#00D285] text-[#041510] hover:bg-[#00e599] flex items-center justify-center gap-2 shadow-[0_0_24px_rgba(0,210,133,0.4)] transition-all cursor-pointer"
              >
                <span>START A PROJECT</span>
                <ArrowRight size={16} />
              </button>

              <div className="grid grid-cols-3 gap-2 pt-2">
                <a
                  href="https://wa.me/918509332038?text=Hello%20ZIVDEV,%20I%20would%20like%20to%20discuss%20a%20website%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-3 px-2 rounded-xl border border-[#00D285]/30 text-xs font-mono font-medium text-[#E8F7EE] bg-[#06211a] hover:bg-[#00D285] hover:text-[#041510] transition-colors"
                >
                  <MessageCircle size={13} />
                  <span>WhatsApp</span>
                </a>
                <a
                  href="https://www.instagram.com/zivdevofficial?stkn=dDVtNHN6OGVrbHZ4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-3 px-2 rounded-xl border border-[#00D285]/30 text-xs font-mono font-medium text-[#E8F7EE] bg-[#06211a] hover:bg-[#00D285] hover:text-[#041510] transition-colors"
                >
                  <Instagram size={13} />
                  <span>Instagram</span>
                </a>
                <a
                  href="tel:+918509332038"
                  className="flex items-center justify-center gap-1.5 py-3 px-2 rounded-xl border border-[#00D285]/30 text-xs font-mono font-medium text-[#E8F7EE] bg-[#06211a] hover:bg-[#00D285] hover:text-[#041510] transition-colors"
                >
                  <Phone size={13} />
                  <span>Call</span>
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
