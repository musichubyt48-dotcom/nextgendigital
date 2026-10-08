import { Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import logo from "@/assets/images/jivdev_main_logo_1791467409219.jpg";

export function Footer() {
  return (
    <footer className="relative pt-20 pb-10 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 pb-12">
          <div>
            <div className="flex items-center gap-2">
              <img src={logo} alt="JIVDEV" className="h-10 w-10 rounded-full object-cover" />
              <span className="font-display text-xl">JIVDEV</span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              Premium websites and digital systems built around your business.
            </p>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Quick Links</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {["About", "Services", "Projects", "Testimonials", "Contact"].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} className="hover:text-gold transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Connect</div>
            <div className="flex gap-3">
              {[
                {
                  Icon: Instagram,
                  href: "https://www.instagram.com/zivdevofficial?stkn=dDVtNHN6OGVrbHZ4",
                  label: "Instagram",
                },
                { Icon: Linkedin, href: "#", label: "LinkedIn" },
                { Icon: Twitter, href: "#", label: "Twitter" },
                { Icon: Youtube, href: "#", label: "YouTube" },
              ].map(({ Icon, href, label }, i) => (
                <a
                  key={i}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="h-10 w-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-gold hover:border-gold/40 transition-all"
                  aria-label={label}
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
          <div>© {new Date().getFullYear()} JIVDEV. All rights reserved.</div>
          <div className="italic font-display">JIVDEV Official Page.</div>
        </div>
      </div>
    </footer>
  );
}
