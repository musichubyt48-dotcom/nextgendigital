import { Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative pt-20 pb-10 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 pb-12">
          <div>
            <div className="flex items-center gap-2">
              <span className="h-8 w-8 rounded-full bg-gradient-to-br from-gold to-gold-soft shadow-glow-soft" />
              <span className="font-display text-xl">
                Nextgen <span className="text-gradient-gold">Digital</span>
              </span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              Helping local businesses go digital with premium websites.
            </p>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Quick Links</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {["About", "Services", "Projects", "Testimonials", "Contact"].map((l) => (
                <li key={l}>
                  <a
                    href={`#${l.toLowerCase()}`}
                    className="hover:text-gold transition-colors"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Connect</div>
            <div className="flex gap-3">
              {[Instagram, Linkedin, Twitter, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="h-10 w-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-gold hover:border-gold/40 transition-all"
                  aria-label="Social link"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              Founded by <span className="text-foreground">Ashutosh Kumar Srivastava</span>
            </p>
          </div>
        </div>

        <div className="gold-divider" />

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Nextgen Digital. All rights reserved.</div>
          <div className="italic font-display">Crafted with precision · Powered by AI</div>
        </div>
      </div>
    </footer>
  );
}
