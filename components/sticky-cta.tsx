import { MessageCircle } from "lucide-react"

const WHATSAPP_NUMBER = "237676065061"
const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_NUMBER}?text=Hello,%20I%20need%20appliance%20repair%20services.`

export function StickyCta() {
  return (
    <div className="fixed bottom-6 right-6 z-50 lg:hidden">
      <a
        href={WHATSAPP_HREF}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-4 text-base font-extrabold text-white shadow-2xl shadow-[#25D366]/50 transition-all hover:scale-105 active:scale-95 relative group"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30"></span>
        <MessageCircle className="h-6 w-6 animate-pulse" aria-hidden="true" />
        <span className="relative z-10 tracking-wide uppercase">WhatsApp Us</span>
      </a>
    </div>
  )
}
