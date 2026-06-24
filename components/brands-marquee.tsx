const brands = [
  { name: "Whirlpool", domain: "whirlpool.com" },
  { name: "Samsung", domain: "samsung.com" },
  { name: "LG", domain: "lg.com" },
  { name: "GE Appliances", domain: "geappliances.com" },
  { name: "Maytag", domain: "maytag.com" },
  { name: "KitchenAid", domain: "kitchenaid.com" },
  { name: "Frigidaire", domain: "frigidaire.com" },
  { name: "Bosch", domain: "bosch-home.com" },
  { name: "Sub-Zero", domain: "subzero-wolf.com" },
  { name: "Viking", domain: "vikingrange.com" },
]

export function BrandsMarquee() {
  return (
    <section className="border-y border-border bg-slate-50 py-16">
      <p className="mb-10 text-center text-sm font-semibold uppercase tracking-wider text-slate-500">
        Authorized Service for Today&apos;s Leading Brands
      </p>
      <div className="group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-marquee items-center gap-16 group-hover:[animation-play-state:paused] px-8">
          {[...brands, ...brands, ...brands].map((brand, i) => (
            <div
              key={`${brand.name}-${i}`}
              className="flex items-center justify-center shrink-0 w-32 h-16 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              aria-hidden={i >= brands.length}
            >
              <img
                src={`https://logo.uplead.com/${brand.domain}`}
                alt={`Logo ${brand.name}`}
                className="object-contain max-w-full max-h-12"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
