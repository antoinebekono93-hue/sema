import { Metadata } from "next"
import { notFound } from "next/navigation"
import { appliances } from "@/lib/services-data"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { StickyCta } from "@/components/sticky-cta"
import { Testimonials } from "@/components/testimonials"
import { Button, buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"
import Image from "next/image"
import {
  Phone, CheckCircle2, ShieldCheck, Star, Clock, Wrench,
  AlertTriangle, ChevronRight, ArrowRight, Zap, BadgeCheck,
  Thermometer, Droplets, Snowflake, Volume2, Flame, RotateCw,
  Lock, AlertCircle, GlassWater, BoxIcon, MessageCircle,
  Plus, Minus
} from "lucide-react"

// Icon mapping for symptoms
const iconMap: Record<string, React.ElementType> = {
  thermometer: Thermometer,
  droplets: Droplets,
  snowflake: Snowflake,
  volume: Volume2,
  flame: Flame,
  rotate: RotateCw,
  lock: Lock,
  alert: AlertCircle,
  glass: GlassWater,
  cube: BoxIcon,
}

// Generate static pages at build time
export function generateStaticParams() {
  return Object.keys(appliances).map((appliance) => ({ appliance }))
}

// Generate dynamic metadata (SEO)
export async function generateMetadata({ params }: { params: Promise<{ appliance: string }> }): Promise<Metadata> {
  const { appliance } = await params
  const data = appliances[appliance]
  if (!data) return { title: "Service Not Found" }
  return {
    title: data.seoTitle,
    description: data.seoDescription,
    alternates: { canonical: `https://fourstatesrepair-placeholder.com/services/${appliance}` },
  }
}

export default async function ServicePage({ params }: { params: Promise<{ appliance: string }> }) {
  const { appliance } = await params
  const data = appliances[appliance]
  if (!data) notFound()

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqs.map((faq) => ({
      "@type": "Question", name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: `${data.name} Repair`,
    provider: { "@type": "LocalBusiness", name: "Four States Appliance Repair" },
    areaServed: { "@type": "City", name: "Joplin" },
  }

  const WHATSAPP_NUMBER = "+237676065061"
  const WHATSAPP_MESSAGE = encodeURIComponent(`Hi, I need help with my ${data.name}. It's urgent.`)
  const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <SiteHeader />

      <main>
        {/* ════════════════════════════════════════════════════════════════════
            SECTION 1 — HERO (Split Layout, Dark, Cinematic)
        ════════════════════════════════════════════════════════════════════ */}
        <section className="relative min-h-[90vh] overflow-hidden bg-slate-950 text-white flex items-center">
          {/* Background Image */}
          <Image
            src={data.image}
            alt={`${data.name} Repair`}
            fill
            className="object-cover opacity-50"
            priority
          />
          
          {/* Dark gradient overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/80 to-slate-950/90" />

          {/* Background mesh gradients on top of image */}
          <div className="absolute -top-1/3 -left-1/4 w-[60%] h-[60%] bg-blue-500/20 rounded-full blur-[120px]" />
          <div className="absolute -bottom-1/4 -right-[10%] w-[50%] h-[50%] bg-indigo-500/20 rounded-full blur-[100px]" />
          
          {/* Grid pattern overlay */}
          <div 
            className="absolute inset-0 mix-blend-overlay" 
            style={{ 
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
              backgroundSize: '64px 64px'
            }} 
          />

          <div className="container relative z-10 px-6 lg:px-20 mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-16 items-center">
              
              {/* Left — Text */}
              <div className="space-y-8">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Master Certified Technicians
                </div>

                {/* Heading */}
                <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.05]">
                  <span className="bg-gradient-to-br from-white to-white/60 bg-clip-text text-transparent block">
                    {data.heroHeadline.split(' ').slice(0, -1).join(' ')}
                  </span>
                  <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent block">
                    {data.heroHeadline.split(' ').slice(-1).join(' ')}
                  </span>
                </h1>

                {/* Description */}
                <p className="text-lg text-slate-400 leading-relaxed max-w-[480px]">
                  {data.heroSubheadline}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <Link href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ size: "lg" }), "h-14 px-8 text-lg font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white rounded-xl shadow-lg shadow-blue-600/30 transition-all hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-0.5")}>
                    <Phone className="mr-2 h-5 w-5" /> 
                    Book {data.name} Repair
                  </Link>
                  <Link href="#symptoms" className={cn(buttonVariants({ size: "lg", variant: "outline" }), "h-14 px-8 text-lg font-medium border border-white/15 text-white bg-transparent hover:bg-white/5 transition-all rounded-xl")}>
                    View Symptoms
                  </Link>
                </div>
                
                {/* Trust badges */}
                <div className="flex flex-wrap gap-5 text-sm font-medium text-slate-400">
                  <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> Same-Day Available</span>
                  <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> Upfront Pricing</span>
                </div>
              </div>

              {/* Right — Stats Card (Glassmorphism) */}
              <div className="hidden lg:block relative group">
                {/* Main glass card */}
                <div className="bg-white/[0.05] backdrop-blur-2xl border border-white/[0.08] rounded-3xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.12),0_2px_8px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.2),0_4px_16px_rgba(0,0,0,0.1)] hover:border-white/[0.15]">
                  
                  {/* Card header */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-2">
                      <div className="flex -space-x-1">
                        <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                        <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                        <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                        <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                        <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                      </div>
                      <span className="text-white font-semibold ml-2">5.0 Rating</span>
                    </div>
                    <span className="text-xs text-emerald-400 font-medium bg-emerald-400/10 px-3 py-1 rounded-full border border-emerald-400/20">Verified</span>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-8">
                    <div className="space-y-1 relative">
                      <div className="absolute right-0 top-0 bottom-0 w-px bg-white/5" />
                      <p className="text-4xl font-extrabold text-white">{data.statFixed}+</p>
                      <p className="text-sm text-slate-500 font-medium">{data.name}s Fixed</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-4xl font-extrabold text-white">{data.statFirstVisit}%</p>
                      <p className="text-sm text-slate-500 font-medium">First-Visit Resolution</p>
                    </div>
                    <div className="space-y-1 relative">
                      <div className="absolute right-0 top-0 bottom-0 w-px bg-white/5" />
                      <div className="absolute left-0 right-0 -top-4 h-px bg-white/5" />
                      <p className="text-4xl font-extrabold text-emerald-400">$0</p>
                      <p className="text-sm text-slate-500 font-medium">Service Fee w/ Repair</p>
                    </div>
                    <div className="space-y-1 relative">
                      <div className="absolute left-0 right-0 -top-4 h-px bg-white/5" />
                      <p className="text-4xl font-extrabold text-white">&lt;2h</p>
                      <p className="text-sm text-slate-500 font-medium">Avg Response Time</p>
                    </div>
                  </div>
                </div>

                {/* Floating badge */}
                <div className="absolute -top-4 -right-4 px-4 py-1.5 bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-xs font-semibold rounded-full shadow-lg shadow-blue-500/40 animate-bounce">
                  Available Today
                </div>

                {/* Floating inline review */}
                <div className="absolute -bottom-8 -left-8 w-72 rounded-2xl border border-white/10 bg-[#0F172A]/90 backdrop-blur-xl p-5 shadow-2xl transition-transform duration-500 hover:scale-105">
                  <div className="flex items-center gap-1 text-amber-400 mb-2">
                    {[...Array(data.inlineReview.stars)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-sm text-slate-300 italic mb-3 leading-snug">&ldquo;{data.inlineReview.text}&rdquo;</p>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">— {data.inlineReview.name}</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════════
            SECTION 2 — URGENCY BANNER (Premium Trust - Desktop/Tablet)
        ════════════════════════════════════════════════════════════════════ */}
        <section className="relative overflow-hidden bg-slate-900 py-6 border-b border-white/5">
          {/* Subtle gradient glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-slate-900/40" />
          
          <div className="container relative z-10 px-6 lg:px-20 mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-5 text-white">
              {/* Icon Container */}
              <div className="flex-shrink-0 rounded-2xl bg-white/5 p-3.5 backdrop-blur-md border border-white/10 shadow-inner">
                <Clock className="h-6 w-6 text-emerald-400" />
              </div>
              
              <div className="space-y-0.5">
                <div className="flex items-center gap-3">
                  {/* Pulsing Live Dot */}
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                  </span>
                  <p className="font-extrabold text-lg sm:text-xl tracking-tight text-white">{data.urgencyMessage}</p>
                </div>
                <p className="text-sm sm:text-base text-slate-400 font-medium">{data.urgencyDetail}</p>
              </div>
            </div>
            
            {/* Desktop CTA */}
            <Link href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ size: "lg" }), "hidden md:flex w-full md:w-auto bg-emerald-500 text-slate-950 hover:bg-emerald-400 hover:-translate-y-0.5 transition-all duration-300 font-bold shadow-[0_0_20px_rgba(16,185,129,0.3)] rounded-xl h-14 px-8")}>
              <Phone className="mr-2 h-5 w-5" /> 
              Call Now for {data.name} Repair
            </Link>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════════
            MOBILE STICKY BOTTOM BAR (High-Converting)
        ════════════════════════════════════════════════════════════════════ */}
        <div className="fixed bottom-0 left-0 z-50 w-full bg-slate-900 border-t border-slate-800 shadow-[0_-8px_30px_rgba(0,0,0,0.5)] p-3 md:hidden">
          <div className="flex flex-col items-center justify-center space-y-2.5">
            <p className="text-xs text-slate-300 font-medium flex items-center">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Dispatching now in Joplin Area
            </p>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center bg-emerald-500 active:bg-emerald-600 text-slate-950 font-bold py-3.5 px-4 rounded-xl text-lg shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-transform transform active:scale-[0.98]">
              <Phone className="mr-2 h-5 w-5" />
              Call (417) XXX-XXXX
            </a>
          </div>
        </div>

        {/* ════════════════════════════════════════════════════════════════════
            SECTION 3 — SYMPTOMS (Interactive Cards)
        ════════════════════════════════════════════════════════════════════ */}
        <section id="symptoms" className="py-24 bg-slate-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 mb-3">Diagnostic</p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                Is Your {data.name} Showing These Signs?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Don&apos;t ignore the warning signs. Identify your issue below — we fix all of these, often on the same day.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
              {data.symptoms.map((symptom, i) => {
                const Icon = iconMap[symptom.icon] || AlertCircle
                
                // Create a pre-filled WhatsApp message for this specific symptom
                const symptomMessage = encodeURIComponent(`Hi, my ${data.name} is experiencing this issue: ${symptom.text}. Can you help?`);
                const symptomHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${symptomMessage}`;

                return (
                  <Link
                    href={symptomHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={i}
                    className="group relative flex flex-col items-center justify-center p-6 bg-white border-2 border-transparent rounded-2xl shadow-sm hover:shadow-xl hover:border-blue-600 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-100 text-center w-full overflow-hidden"
                  >
                    {/* Icon with subtle scale on hover */}
                    <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-blue-100 transition-all duration-300">
                      <Icon className="h-8 w-8" />
                    </div>
                    
                    {/* Voice of Customer Copy */}
                    <h3 className="font-semibold text-slate-900 text-base md:text-lg mb-1 group-hover:text-blue-700 transition-colors">{symptom.text}</h3>
                    
                    {/* Hidden validation message revealed on hover/focus */}
                    <div className="absolute bottom-0 left-0 right-0 bg-emerald-500 text-slate-950 text-sm font-bold py-2.5 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out flex items-center justify-center">
                      <CheckCircle2 className="h-4 w-4 mr-1.5" /> We fix this today!
                    </div>
                  </Link>
                )
              })}
            </div>

            {/* Inline micro-review */}
            <div className="mt-12 flex justify-center">
              <div className="inline-flex items-center gap-4 rounded-full bg-white border border-slate-200 px-6 py-3 shadow-sm">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(data.inlineReview.stars)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-slate-600">
                  <span className="italic">&ldquo;{data.inlineReview.text}&rdquo;</span>
                  <span className="ml-2 font-semibold text-slate-800">— {data.inlineReview.name}</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════════
            SECTION 4 — REPAIR vs REPLACE (Anchoring Effect)
        ════════════════════════════════════════════════════════════════════ */}
        <section className="py-24 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 mb-3">Smart Decision</p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                Repair vs. Replace: The Numbers Don&apos;t Lie
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Before spending thousands on a new {data.name.toLowerCase()}, see why repair is the smarter choice for most homeowners.
              </p>
            </div>

            <div className="max-w-5xl mx-auto mt-12">
              <div className="flex flex-col md:flex-row gap-6 md:gap-8 justify-center items-stretch">
                
                {/* REPAIR CARD (Primary/Dominant) */}
                <div className="flex-1 bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border-2 border-emerald-500 overflow-hidden relative transform md:-translate-y-4 flex flex-col">
                  <div className="bg-emerald-500 text-white text-center py-2.5 text-xs font-bold uppercase tracking-widest">
                    The Smart Choice
                  </div>
                  <div className="p-8 md:p-10 flex-1 flex flex-col">
                    <h3 className="text-2xl font-extrabold text-slate-900 mb-2">Repair Your {data.name}</h3>
                    <p className="text-slate-500 mb-6 font-medium">Restore your appliance today.</p>
                    
                    <div className="mb-8">
                      <span className="text-5xl font-black text-emerald-600">{data.repairCostRange}</span>
                      <span className="text-slate-400 font-semibold ml-2">/ avg.</span>
                    </div>
                    
                    <ul className="space-y-4 mb-8 flex-1">
                      <li className="flex items-start">
                        <CheckCircle2 className="h-6 w-6 text-emerald-500 mr-3 shrink-0" />
                        <span className="text-slate-700 font-medium"><strong>Same-day fix:</strong> No waiting days for delivery</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-6 w-6 text-emerald-500 mr-3 shrink-0" />
                        <span className="text-slate-700 font-medium"><strong>Zero hidden fees:</strong> Upfront pricing guaranteed</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-6 w-6 text-emerald-500 mr-3 shrink-0" />
                        <span className="text-slate-700 font-medium"><strong>Eco-friendly:</strong> Keep it out of the landfill</span>
                      </li>
                    </ul>
                    
                    <Link href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ size: "lg" }), "w-full h-14 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all rounded-xl flex items-center justify-center")}>
                      Schedule Repair Now
                    </Link>
                  </div>
                </div>

                {/* REPLACE CARD (Secondary/Receded) */}
                <div className="flex-1 bg-slate-50 rounded-3xl border border-slate-200 overflow-hidden relative opacity-95 flex flex-col">
                  <div className="p-8 md:p-10 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-slate-600 mb-2">Buy New {data.name}</h3>
                    <p className="text-slate-400 mb-6 font-medium">Starting over from scratch.</p>
                    
                    <div className="mb-8">
                      <span className="text-4xl font-bold text-slate-400">{data.replaceCostRange}</span>
                    </div>
                    
                    <ul className="space-y-4 mb-8 flex-1 opacity-80">
                      <li className="flex items-start">
                        <AlertCircle className="h-5 w-5 text-slate-400 mr-3 shrink-0" />
                        <span className="text-slate-500"><strong>Hidden Costs:</strong> Delivery, installation & haul-away fees</span>
                      </li>
                      <li className="flex items-start">
                        <AlertCircle className="h-5 w-5 text-slate-400 mr-3 shrink-0" />
                        <span className="text-slate-500"><strong>Time Consuming:</strong> Research, shopping, and waiting</span>
                      </li>
                      <li className="flex items-start">
                        <AlertCircle className="h-5 w-5 text-slate-400 mr-3 shrink-0" />
                        <span className="text-slate-500"><strong>Quality Drop:</strong> Newer models often have shorter lifespans</span>
                      </li>
                    </ul>
                    
                    <Button variant="outline" size="lg" className="w-full h-14 border-slate-300 text-slate-500 hover:bg-slate-100 font-semibold text-base rounded-xl" disabled>
                      Expensive Option
                    </Button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════════
            SECTION 5 — 3-STEP PROCESS
        ════════════════════════════════════════════════════════════════════ */}
        <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="container px-4 md:px-6 mx-auto relative z-10">
            <div className="text-center mb-16 md:mb-24">
              <p className="text-sm font-semibold uppercase tracking-widest text-emerald-400 mb-3">Simple Process</p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                3 Steps to a Working {data.name}
              </h2>
            </div>

            <div className="relative max-w-5xl mx-auto">
              {/* Desktop Dashed Connector Line */}
              <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 border-t-2 border-dashed border-blue-500/30 z-0" aria-hidden="true"></div>

              <div className="flex flex-col md:flex-row justify-between relative z-10 space-y-16 md:space-y-0 md:space-x-8">
                
                {/* Step 1 */}
                <div className="flex-1 flex flex-col items-center text-center group">
                  <div className="flex items-center justify-center w-20 h-20 rounded-full bg-slate-900 border-4 border-slate-800 text-blue-400 font-black text-3xl mb-6 shadow-[0_0_30px_rgba(59,130,246,0.15)] group-hover:scale-110 group-hover:border-blue-500 transition-all duration-300 relative z-10">
                    1
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Book Your Time</h3>
                  <p className="text-slate-400 leading-relaxed text-lg">
                    Call or message us on WhatsApp 24/7. We&apos;ll schedule a convenient window that works for you.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="flex-1 flex flex-col items-center text-center group">
                  <div className="flex items-center justify-center w-20 h-20 rounded-full bg-slate-900 border-4 border-slate-800 text-blue-400 font-black text-3xl mb-6 shadow-[0_0_30px_rgba(59,130,246,0.15)] group-hover:scale-110 group-hover:border-blue-500 transition-all duration-300 relative z-10">
                    2
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Upfront Pricing</h3>
                  <p className="text-slate-400 leading-relaxed text-lg">
                    Our technician diagnoses the issue and provides a flat-rate quote before any work begins. No surprises.
                  </p>
                </div>

                {/* Step 3 */}
                <div className="flex-1 flex flex-col items-center text-center group">
                  <div className="flex items-center justify-center w-20 h-20 rounded-full bg-slate-900 border-4 border-slate-800 text-emerald-400 font-black text-3xl mb-6 shadow-[0_0_30px_rgba(16,185,129,0.15)] group-hover:scale-110 group-hover:border-emerald-500 transition-all duration-300 relative z-10">
                    3
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Fixed Right, Today</h3>
                  <p className="text-slate-400 leading-relaxed text-lg">
                    We complete most repairs on the spot. Backed by our 1-year parts and labor guarantee.
                  </p>
                </div>

              </div>
            </div>
            
            <div className="mt-16 text-center flex justify-center">
              <Link href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ size: "lg" }), "h-14 bg-blue-600 hover:bg-blue-500 text-white font-bold text-lg shadow-[0_0_20px_rgba(37,99,235,0.4)] rounded-xl px-10 transition-all hover:-translate-y-1 flex items-center justify-center")}>
                Schedule Service Now
              </Link>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════════
            SECTION 6 — BRANDS WE SERVICE
        ════════════════════════════════════════════════════════════════════ */}
        <section className="py-24 bg-slate-50 border-t border-slate-100 overflow-hidden">
          <div className="container px-4 md:px-6 mx-auto mb-10">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 mb-3">Trusted Expertise</p>
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                {data.name} Brands We Service
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Our technicians are factory-trained to repair all major brands and models.
              </p>
            </div>
          </div>

          {/* Marquee Carousel Container */}
          <div className="relative w-full overflow-hidden bg-white py-10 border-y border-slate-100">
            {/* Gradient Mask for fading edges */}
            <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-white via-transparent to-white w-full" />
            
            {/* Scrolling track */}
            <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
              {/* Duplicate the array 4 times to ensure seamless infinite scroll */}
              {[...data.brands, ...data.brands, ...data.brands, ...data.brands].map((brand, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 mx-4 md:mx-6 flex items-center justify-center px-8 py-4 bg-slate-50 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 cursor-default"
                >
                  <span className="text-xl font-bold text-slate-700 tracking-wide">
                    {brand}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center mt-10">
             <p className="text-sm font-semibold text-blue-700">
               Don&apos;t see your brand? <span className="font-normal text-slate-600">We service 50+ makes & models. <Link href={WHATSAPP_LINK} target="_blank" className="font-semibold text-blue-600 hover:underline">Call to confirm →</Link></span>
             </p>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════════
            SECTION 6.5 — MEET THE EXPERT
        ════════════════════════════════════════════════════════════════════ */}
        <section className="py-24 bg-white border-t border-slate-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-blue-50 rounded-full blur-3xl opacity-60 pointer-events-none" />
          <div className="container px-4 md:px-6 mx-auto max-w-5xl relative z-10">
            <div className="flex flex-col md:flex-row gap-12 items-center bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-200 shadow-sm hover:shadow-lg transition-shadow duration-300">
              {/* Expert Image */}
              <div className="relative w-48 h-48 md:w-64 md:h-64 flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-indigo-500 rounded-full shadow-xl transform -rotate-6 scale-105" />
                <div className="absolute inset-0 bg-white rounded-full overflow-hidden shadow-inner border-4 border-white">
                  <Image
                    src={data.expert.image}
                    alt={data.expert.name}
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Verified Badge */}
                <div className="absolute bottom-2 right-2 bg-white rounded-full p-1 shadow-lg">
                  <BadgeCheck className="w-8 h-8 text-blue-600" />
                </div>
              </div>

              {/* Expert Details */}
              <div className="flex-1 text-center md:text-left">
                <p className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-2">Meet Your Expert</p>
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-2">{data.expert.name}</h2>
                <p className="text-lg font-medium text-slate-600 mb-6">{data.expert.role}</p>
                
                <p className="text-slate-600 leading-relaxed mb-8">
                  {data.expert.bio}
                </p>

                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-slate-200 shadow-sm">
                    <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                    <span className="text-sm font-bold text-slate-700">Top Rated Tech</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-slate-200 shadow-sm">
                    <Wrench className="w-5 h-5 text-slate-500" />
                    <span className="text-sm font-bold text-slate-700">{data.expert.experience}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-slate-200 shadow-sm">
                    <ShieldCheck className="w-5 h-5 text-emerald-500" />
                    <span className="text-sm font-bold text-slate-700">Background Checked</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════════
            SECTION 7 — TESTIMONIALS (Reused Global Component)
        ════════════════════════════════════════════════════════════════════ */}
        <Testimonials />

        <section className="bg-white py-24 sm:py-32 overflow-hidden border-t border-slate-100 relative">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: data.faqs.map((faq) => ({
                  "@type": "Question",
                  name: faq.q,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: faq.a,
                  },
                })),
              }),
            }}
          />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-8">
              
              {/* Left Column: Context & CTA */}
              <div className="lg:col-span-5">
                <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">Support</p>
                <h2 className="mt-2 text-balance text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                  Got Questions About Your {data.name}?
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-slate-600">
                  We believe in 100% transparency. Here are the answers to the most common questions our customers ask before booking a {data.name.toLowerCase()} repair.
                </p>
                
                <div className="mt-10 rounded-3xl bg-slate-50 p-8 border border-slate-100 shadow-sm">
                  <h3 className="font-bold text-slate-900 text-xl">Still need help?</h3>
                  <p className="mt-2 text-slate-600 mb-8">Our master technicians are ready to answer your specific {data.name.toLowerCase()} questions instantly.</p>
                  <Link 
                    href={WHATSAPP_LINK} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 w-full rounded-xl bg-[#25D366] px-4 py-4 text-base font-bold text-white transition-all hover:bg-[#20b858] hover:shadow-lg hover:-translate-y-1"
                  >
                    <MessageCircle className="h-6 w-6" />
                    Chat on WhatsApp
                  </Link>
                </div>
              </div>

              {/* Right Column: Accordions */}
              <div className="lg:col-span-7 lg:pl-10">
                <div className="space-y-2">
                  {data.faqs.map((faq, i) => (
                    <details 
                      key={i} 
                      className="group rounded-2xl border border-transparent hover:bg-slate-50 open:border-slate-200 open:bg-white open:shadow-md transition-all duration-300"
                    >
                      <summary className="flex cursor-pointer items-start justify-between px-6 py-5 text-left focus:outline-none [&::-webkit-details-marker]:hidden">
                        <span className="text-base font-semibold text-slate-900 group-hover:text-blue-600 group-open:text-blue-600 transition-colors">
                          {faq.q}
                        </span>
                        <span className="ml-6 flex h-7 items-center flex-shrink-0">
                          {/* Plus icon when closed */}
                          <Plus className="h-5 w-5 text-slate-400 group-hover:text-blue-600 group-open:hidden" aria-hidden="true" />
                          {/* Minus icon when open */}
                          <Minus className="h-5 w-5 text-blue-600 hidden group-open:block" aria-hidden="true" />
                        </span>
                      </summary>
                      <div className="px-6 pb-6 text-base text-slate-600 leading-relaxed">
                        {faq.a}
                      </div>
                    </details>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════════
            SECTION 9 — FINAL CTA (Ultra-Premium Card)
        ════════════════════════════════════════════════════════════════════ */}
        <section className="relative py-24 bg-slate-950 overflow-hidden">
          {/* Background Glows */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="container relative z-10 px-4 md:px-6 mx-auto">
            <div className="max-w-5xl mx-auto bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-16 text-center shadow-2xl relative overflow-hidden">
              {/* Subtle grid pattern overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
              
              <div className="relative z-10">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold mb-6">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  Technicians available in Joplin
                </span>
                
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
                  Ready to Fix Your {data.name} Today?
                </h2>
                
                <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
                  Join {data.statFixed}+ homeowners who trusted us. <span className="text-white font-semibold">Same-day service, upfront pricing, 1-year warranty.</span>
                </p>
                
                <div className="flex flex-col items-center justify-center gap-6">
                  <Link 
                    href={WHATSAPP_LINK} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="group relative inline-flex items-center justify-center h-16 px-10 text-xl font-bold text-white bg-blue-600 rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(37,99,235,0.4)]"
                  >
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative flex items-center gap-3">
                      <MessageCircle className="h-6 w-6" />
                      Get a Free Quote via WhatsApp
                    </span>
                  </Link>
                  
                  <div className="flex items-center gap-2 text-slate-400">
                    <span>Or call us directly:</span>
                    <a href="tel:+237676065061" className="text-white font-bold hover:text-blue-400 transition-colors">
                      +237 6 76 06 50 61
                    </a>
                  </div>
                </div>
                
                {/* Trust Badges bottom */}
                <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap justify-center gap-6 md:gap-12 text-sm font-medium text-slate-400">
                  <span className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-emerald-400" /> 
                    Response in &lt;2 hours
                  </span>
                  <span className="flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5 text-blue-400" /> 
                    1-Year Warranty
                  </span>
                  <span className="flex items-center gap-2">
                    <BadgeCheck className="h-5 w-5 text-purple-400" /> 
                    $0 Service Fee w/ Repair
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
      <StickyCta />
    </div>
  )
}
