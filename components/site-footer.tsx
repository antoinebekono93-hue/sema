import { Wrench, Phone, MapPin } from "lucide-react"

const PHONE = "+1 (417) XXX-XXXX"
const PHONE_HREF = "tel:+1417XXXXXXX"

const areasMo = ["Joplin", "Webb City", "Carthage", "Neosho", "Carl Junction", "Carterville", "Oronogo", "Seneca"]
const areasKsOk = ["Galena", "Baxter Springs", "Columbus", "Pittsburg", "Frontenac", "Girard", "Riverton", "Quapaw"]

export function SiteFooter() {
  return (
    <footer id="areas" className="bg-navy text-navy-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-navy-foreground/10">
                <Wrench className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="text-base font-semibold leading-tight">Four States Appliance Repair</span>
            </div>
            <a
              href={PHONE_HREF}
              className="mt-5 inline-flex items-center gap-2 text-lg font-semibold text-cta"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              {PHONE}
            </a>
            <p className="mt-4 flex items-start gap-2 text-sm text-navy-foreground/70">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              [Physical Address], Joplin, MO 64801
            </p>
          </div>

          <div id="contact">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-navy-foreground/60">
              Service Areas — Missouri
            </h3>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-navy-foreground/80">
              {areasMo.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-navy-foreground/60">
              Service Areas — Kansas &amp; Oklahoma
            </h3>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-navy-foreground/80">
              {areasKsOk.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-navy-foreground/60">
              Authorized Service Brands
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-navy-foreground/80">
              Whirlpool • Samsung • LG • GE Monogram • Maytag • KitchenAid • Frigidaire • Kenmore • Bosch • Sub-Zero
              • Wolf • Viking • Amana • Speed Queen.
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-navy-foreground/10 pt-6 text-center text-sm text-navy-foreground/60">
          &copy; {new Date().getFullYear()} Four States Appliance Repair. Locally owned &amp; operated in Joplin, MO.
        </div>
      </div>
    </footer>
  )
}
