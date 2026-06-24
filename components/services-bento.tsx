import Image from "next/image"
import Link from "next/link"

const services = [
  {
    title: "Refrigerator Repair",
    description:
      "Stop food spoilage with our rapid cooling diagnostics and Master Certified compressor repairs.",
    image: "/fridge.jpg",
    className: "lg:col-span-2",
    href: "/services/refrigerator",
  },
  {
    title: "Washer Repair",
    description: "Restore your laundry routine with expert fixes for drainage issues and spin cycle failures.",
    image: "/washer.jpg",
    className: "",
    href: "/services/washer",
  },
  {
    title: "Dryer Repair",
    description: "Ensure home safety and efficiency with precision heating element and sensor replacements.",
    image: "/dryer.jpg",
    className: "",
    href: "/services/dryer",
  },
  {
    title: "Dishwasher Repair",
    description:
      "From stubborn leaks to poor cleaning performance, we restore your dishwasher's sparkling results.",
    image: "/dishwasher.jpg",
    className: "",
    href: "/services/dishwasher",
  },
  {
    title: "Oven & Range Repair",
    description: "Back to cooking with precise temperature calibration and heating element fixes.",
    image: "/oven.jpg",
    className: "",
    href: "/services/oven",
  },
  {
    title: "Microwave Repair",
    description: "Fast, reliable fixes for touchpad errors and magnetron failures.",
    image: "/microwave.jpg",
    className: "",
    href: "/services/microwave",
  },
  {
    title: "Freezer Repair",
    description: "Protect your frozen investments with emergency diagnostics for chest and upright freezers.",
    image: "/freezer.jpg",
    className: "lg:col-span-2",
    href: "/services/freezer",
  },
]

export function ServicesBento() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-cta">Our Services</p>
        <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Professional Resolution for Every Major Household Appliance
        </h2>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Link
            href={service.href}
            key={service.title}
            className={`group relative h-64 cursor-pointer overflow-hidden rounded-2xl lg:h-72 ${service.className}`}
          >
            {/* Background Image */}
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes={
                service.className.includes("col-span-2")
                  ? "(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 66vw"
                  : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              }
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />

            {/* Content at Bottom */}
            <div className="absolute inset-x-0 bottom-0 p-6">
              <h3 className="text-lg font-semibold text-white">{service.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-white/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {service.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
