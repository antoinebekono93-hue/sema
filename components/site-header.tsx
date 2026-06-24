"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Phone } from "lucide-react"

const PHONE = "+1 (417) XXX-XXXX"
const PHONE_HREF = "tel:+1417XXXXXXX"

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Service Areas", href: "#areas" },
  { label: "Why Us", href: "#why-us" },
  { label: "FAQ", href: "#faq" },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors duration-300 ${
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center hover:opacity-90 transition-opacity py-2">
          <Image 
            src="/logo.png" 
            alt="Four States Appliance Repair Logo" 
            width={200} 
            height={60} 
            className="h-12 w-auto object-contain" 
            priority
          />
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={PHONE_HREF}
          className="inline-flex items-center gap-2 rounded-xl bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 sm:px-4"
        >
          <Phone className="h-4 w-4" aria-hidden="true" />
          <span className="hidden sm:inline">Call Now: </span>
          {PHONE}
        </a>
      </div>
    </header>
  )
}
