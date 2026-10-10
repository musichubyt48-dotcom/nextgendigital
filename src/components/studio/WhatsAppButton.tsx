import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <aside aria-label="Direct WhatsApp Contact" className="fixed bottom-6 right-6 z-40">
      <a
        href="https://wa.me/918509332038"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 py-2.5 rounded-full shadow-[0_8px_24px_rgba(37,211,102,0.35)] transition-all hover:scale-105 active:scale-95 group"
        aria-label="Direct WhatsApp message to ZIVDEV"
      >
        <MessageCircle size={20} className="fill-current" />
        <span className="font-sans text-xs font-semibold tracking-wide hidden sm:inline-block">
          WhatsApp Studio
        </span>
      </a>
    </aside>
  );
}
