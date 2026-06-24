import { Phone, CalendarCheck, Star } from "lucide-react"

const PHONE = "+1 (417) XXX-XXXX"
const PHONE_HREF = "tel:+1417XXXXXXX"

export function Hero({ city }: { city: string }) {
  return (
    <section id="top" className="relative flex min-h-[90vh] items-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/hero-poster.jpg"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/background-video.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-16 pt-24 sm:px-6 sm:pt-32 lg:px-8 lg:pb-24">
        <div className="max-w-3xl text-left">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-white/90 backdrop-blur-sm">
            <span className="flex h-2 w-2 animate-pulse rounded-full bg-cta" aria-hidden="true" />
            Emergency Service Available
          </p>

          <h1 className="text-balance text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Same-Day Appliance Repair in <span className="text-cta">{city}</span>.
          </h1>

          <p className="mt-6 max-w-2xl text-pretty text-xl leading-relaxed text-white/90 font-medium">
            Master Certified technicians. No hidden fees. Diagnostic fee waived with repair.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-cta px-8 py-4 text-lg font-extrabold text-cta-foreground shadow-[0_0_30px_-5px_var(--color-cta)] transition-all hover:-translate-y-1 hover:shadow-[0_0_40px_0px_var(--color-cta)] active:scale-95 sm:w-auto"
            >
              <CalendarCheck className="h-6 w-6" aria-hidden="true" />
              Schedule Your Repair
            </a>
            <a
              href={PHONE_HREF}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border-2 border-white/30 bg-white/5 px-8 py-4 text-lg font-bold text-white backdrop-blur-sm transition-colors hover:bg-white/20 active:scale-95 sm:w-auto"
            >
              <Phone className="h-6 w-6" aria-hidden="true" />
              Call Now
            </a>
          </div>

          {/* Social Proof Heuristic */}
          <div className="mt-8 flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 w-fit backdrop-blur-sm">
            <div className="flex gap-1 text-amber-400">
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
            </div>
            <p className="text-sm font-semibold text-white/90">5-Star Local Service Guarantee</p>
          </div>
        </div>
      </div>
    </section>
  )
}
