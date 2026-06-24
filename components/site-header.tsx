"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Phone, Menu, X, MessageCircle } from "lucide-react"
import { usePathname } from "next/navigation"

const PHONE = "+237 6 76 06 50 61"
const WHATSAPP_LINK = "https://wa.me/237676065061?text=Hello,%20I%20have%20an%20appliance%20repair%20emergency."

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Why Us", href: "/#why-us" },
  { label: "FAQ", href: "/#faq" },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  // Handle scroll event for sticky glassmorphism effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => { document.body.style.overflow = "unset" }
  }, [isMobileMenuOpen])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        scrolled
          ? "bg-white/80 backdrop-blur-lg border-b border-slate-200 shadow-sm py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Logo */}
        <Link href="/" className="flex items-center hover:opacity-90 transition-opacity z-50">
          <Image 
            src="/logo.png" 
            alt="Four States Appliance Repair Logo" 
            width={200} 
            height={60} 
            className="h-10 sm:h-12 w-auto object-contain" 
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[15px] font-semibold text-slate-600 hover:text-blue-600 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-4 z-50">
          <a
            href="tel:+237676065061"
            className="text-[15px] font-bold text-slate-700 hover:text-blue-600 transition-colors flex items-center gap-2"
          >
            <Phone className="h-4 w-4" />
            <span className="hidden xl:inline">{PHONE}</span>
          </a>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-bold text-white transition-all hover:bg-blue-700 hover:shadow-lg hover:-translate-y-0.5 active:scale-95"
          >
            <MessageCircle className="h-4 w-4" />
            Book Now
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden p-2 text-slate-800 hover:text-blue-600 transition-colors z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Full-Screen Overlay */}
      <div 
        className={`fixed inset-0 bg-white/95 backdrop-blur-xl z-40 transition-all duration-300 ease-in-out flex flex-col lg:hidden ${
          isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <div className="flex-1 flex flex-col justify-center items-center gap-8 px-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-3xl font-extrabold text-slate-900 hover:text-blue-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
        
        {/* Mobile Bottom CTAs */}
        <div className="p-6 bg-slate-50 border-t border-slate-200 flex flex-col gap-4">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-4 text-lg font-bold text-white transition-all hover:bg-blue-700 active:scale-95"
          >
            <MessageCircle className="h-5 w-5" />
            Book Repair via WhatsApp
          </a>
          <a
            href="tel:+237676065061"
            className="flex items-center justify-center gap-2 rounded-xl bg-white border border-slate-300 px-5 py-4 text-lg font-bold text-slate-700 transition-all hover:bg-slate-50 active:scale-95"
          >
            <Phone className="h-5 w-5" />
            Call {PHONE}
          </a>
        </div>
      </div>
    </header>
  )
}
