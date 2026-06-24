"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Phone, Menu, X, MessageCircle, ChevronDown } from "lucide-react"
import { usePathname } from "next/navigation"

const PHONE = "+237 6 76 06 50 61"
const WHATSAPP_LINK = "https://wa.me/237676065061?text=Hello,%20I%20have%20an%20appliance%20repair%20emergency."

const serviceLinks = [
  { label: "Refrigerator Repair", href: "/services/refrigerator" },
  { label: "Washer Repair", href: "/services/washer" },
  { label: "Dryer Repair", href: "/services/dryer" },
  { label: "Oven & Stove Repair", href: "/services/oven" },
  { label: "Dishwasher Repair", href: "/services/dishwasher" },
  { label: "Freezer Repair", href: "/services/freezer" },
  { label: "Microwave Repair", href: "/services/microwave" },
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
          : "bg-white/50 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none border-b border-slate-200/50 md:border-transparent py-3 md:py-4"
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
          <Link href="/" className="text-[15px] font-semibold text-slate-700 hover:text-blue-600 transition-colors">
            Home
          </Link>
          
          {/* Services Dropdown */}
          <div className="relative group">
            <Link href="/#services" className="flex items-center gap-1 text-[15px] font-semibold text-slate-700 hover:text-blue-600 transition-colors py-6">
              Services <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
            </Link>
            
            <div className="absolute top-[80%] left-1/2 -translate-x-1/2 pt-4 opacity-0 translate-y-4 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-300 ease-out z-50">
              <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-2 w-[260px] flex flex-col relative">
                {/* Decorative top arrow */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-t border-l border-slate-100 rotate-45" />
                
                {serviceLinks.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="relative z-10 px-4 py-3 rounded-xl hover:bg-blue-50 text-slate-600 hover:text-blue-700 font-medium transition-colors"
                  >
                    {service.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link href="/#why-us" className="text-[15px] font-semibold text-slate-700 hover:text-blue-600 transition-colors">
            Why Us
          </Link>
          <Link href="/#faq" className="text-[15px] font-semibold text-slate-700 hover:text-blue-600 transition-colors">
            FAQ
          </Link>
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-4 z-50">
          <a
            href="tel:+237676065061"
            className="text-[15px] font-bold text-slate-800 hover:text-blue-600 transition-colors flex items-center gap-2"
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
        className={`fixed inset-0 bg-white/98 backdrop-blur-xl z-40 transition-all duration-300 ease-in-out flex flex-col lg:hidden overflow-y-auto ${
          isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <div className="flex-1 flex flex-col justify-start items-center pt-32 pb-8 gap-8 px-6 w-full">
          <Link href="/" className="text-3xl font-extrabold text-slate-900 hover:text-blue-600 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
            Home
          </Link>
          
          <div className="flex flex-col items-center w-full">
            <span className="text-xl font-bold text-slate-400 uppercase tracking-widest mb-6">Our Services</span>
            <div className="flex flex-col items-center gap-5 w-full">
              {serviceLinks.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="text-2xl font-bold text-slate-700 hover:text-blue-600 transition-colors text-center w-full"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {service.label}
                </Link>
              ))}
            </div>
          </div>

          <Link href="/#why-us" className="text-3xl font-extrabold text-slate-900 hover:text-blue-600 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
            Why Us
          </Link>
          <Link href="/#faq" className="text-3xl font-extrabold text-slate-900 hover:text-blue-600 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
            FAQ
          </Link>
        </div>
        
        {/* Mobile Bottom CTAs */}
        <div className="p-6 bg-slate-50 border-t border-slate-200 flex flex-col gap-4 shrink-0">
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
