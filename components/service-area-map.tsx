import { Phone, MapPin, Clock, Wrench } from "lucide-react"

const PHONE = "+1 (417) XXX-XXXX"
const PHONE_HREF = "tel:+1417XXXXXXX"

export function ServiceAreaMap() {
  return (
    <section className="bg-secondary/40 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-cta">Our Coverage</p>
          <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Proudly Serving The Four States Area
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground">
            From Joplin to Webb City, Carthage to Neosho and Carl Junction — we bring expert appliance repair right to your door anywhere in Southwest Missouri.
          </p>
        </div>

        <div className="relative mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Google Maps Iframe */}
          <div className="lg:col-span-2">
            <iframe
              title="Four States Appliance Repair Service Area"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103072.38685944386!2d-94.57834815!3d37.08422945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c8630e76742cd3%3A0x6d76dce403ab1225!2sJoplin%2C%20MO%2C%20USA!5e0!3m2!1sen!2sfr!4v1"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-2xl shadow-xl"
            />
          </div>

          {/* Glassmorphism Contact Card */}
          <div className="flex items-center lg:items-start">
            <div className="w-full rounded-2xl border border-white/20 bg-white/70 p-8 shadow-xl backdrop-blur-xl dark:bg-white/10">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-cta text-cta-foreground shadow-md">
                  <Wrench className="h-6 w-6" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-lg font-bold text-foreground">Four States Appliance Repair</h3>
                  <p className="text-sm text-muted-foreground">Locally Owned &amp; Operated</p>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-cta" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Address</p>
                    <p className="text-sm text-muted-foreground">[Physical Address], Joplin, MO 64801</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-cta" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Hours</p>
                    <p className="text-sm text-muted-foreground">Mon–Sat: 8:00 AM – 6:00 PM</p>
                    <p className="text-sm text-muted-foreground">Emergency: 24/7</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-cta" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Phone</p>
                    <p className="text-sm text-muted-foreground">{PHONE}</p>
                  </div>
                </div>
              </div>

              <a
                href={PHONE_HREF}
                className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-cta px-6 py-4 text-base font-bold text-cta-foreground shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
              >
                <Phone className="h-5 w-5" aria-hidden="true" />
                Call Now
              </a>

              <p className="mt-4 text-center text-xs text-muted-foreground">
                Same-day service available • No service fee with repair
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
