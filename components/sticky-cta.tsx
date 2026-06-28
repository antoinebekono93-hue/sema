"use client"

import { MessageCircle } from "lucide-react"
import { useState, useEffect } from "react"

const WHATSAPP_NUMBER = "237676065061"
const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_NUMBER}?text=Hello,%20I%20need%20appliance%20repair%20services.`

export function StickyCta() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show button when scrolled down past the hero section (around 500px)
      if (window.scrollY > 500) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    
    // Check initial position on load
    handleScroll()
    
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div 
      className={`fixed bottom-6 right-6 z-50 lg:hidden transition-all duration-500 ease-in-out ${
        isVisible 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 translate-y-10 pointer-events-none"
      }`}
    >
      <a
        href={WHATSAPP_HREF}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-4 text-base font-extrabold text-white shadow-2xl shadow-[#25D366]/50 transition-all hover:scale-105 active:scale-95 relative group"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30"></span>
        <MessageCircle className="h-6 w-6 animate-pulse" aria-hidden="true" />
        <span className="relative z-10 tracking-wide uppercase">Book Now</span>
      </a>
    </div>
  )
}
