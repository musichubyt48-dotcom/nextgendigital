import { useState } from "react";
import { SectionHeader } from "./SectionHeader";
import { Phone, Mail, MessageCircle, Send } from "lucide-react";

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-5 sm:px-6">
        <SectionHeader
          eyebrow="Contact"
          title={
            <>
              Ready to grow your <span className="text-gradient-gold italic">business online?</span>
            </>
          }
          description="Working with clients worldwide. Share a few details about your project — you'll usually hear back within 24 hours, in your time zone."
        />

        <div className="mt-14 md:mt-20 grid lg:grid-cols-5 gap-6">
          <div className="lg:col-span-2 space-y-4">
            <a
              href="tel:+918509332038"
              className="flex items-center gap-4 glass rounded-2xl p-6 hover-lift group"
            >
              <div className="h-12 w-12 rounded-xl glass-gold flex items-center justify-center text-gold group-hover:scale-110 transition-transform">
                <Phone size={18} />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Call / WhatsApp</div>
                <div className="font-medium">+91 85093 32038</div>
                <div className="text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground mt-1">Available worldwide · Mon–Fri</div>
              </div>
            </a>

            <a
              href="mailto:nextgendigitalofficial2026@gmail.com"
              className="flex items-center gap-4 glass rounded-2xl p-5 sm:p-6 hover-lift group min-w-0"
            >
              <div className="h-12 w-12 shrink-0 rounded-xl glass-gold flex items-center justify-center text-gold group-hover:scale-110 transition-transform">
                <Mail size={18} />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Email</div>
                <div className="font-medium text-sm sm:text-base break-all">nextgendigitalofficial2026@gmail.com</div>
              </div>
            </a>

            <a
              href="https://wa.me/918509332038"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-gold to-gold-soft text-primary-foreground p-5 font-medium shadow-glow-soft hover:shadow-glow transition-all animate-glow-pulse"
            >
              <MessageCircle size={18} />
              Chat on WhatsApp
            </a>
          </div>

          <form
            onSubmit={onSubmit}
            className="lg:col-span-3 glass-gold rounded-3xl p-6 sm:p-8 md:p-10 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-xs uppercase tracking-wider text-muted-foreground">Name</label>
                <input
                  required
                  className="mt-2 w-full bg-transparent border-b border-border focus:border-gold outline-none py-2 text-foreground transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-wider text-muted-foreground">Email</label>
                <input
                  required
                  type="email"
                  className="mt-2 w-full bg-transparent border-b border-border focus:border-gold outline-none py-2 text-foreground transition-colors"
                  placeholder="you@business.com"
                />
              </div>
            </div>
            <div>
              <label className="text-xs uppercase tracking-wider text-muted-foreground">Business</label>
              <input
                className="mt-2 w-full bg-transparent border-b border-border focus:border-gold outline-none py-2 text-foreground transition-colors"
                placeholder="Your business name"
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-wider text-muted-foreground">Project Details</label>
              <textarea
                required
                rows={4}
                className="mt-2 w-full bg-transparent border-b border-border focus:border-gold outline-none py-2 text-foreground transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold to-gold-soft px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-glow-soft hover:shadow-glow transition-all"
            >
              {sent ? "Message Sent ✦" : "Send Message"}
              <Send size={15} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
