import { headers } from "next/headers"
import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { HowItWorks } from "@/components/how-it-works"
import { ServicesBento } from "@/components/services-bento"
import { WhyChooseUs } from "@/components/why-choose-us"
import { MeetTheTeam } from "@/components/meet-the-team"
import { Testimonials } from "@/components/testimonials"
import { Faq } from "@/components/faq"
import { BrandsMarquee } from "@/components/brands-marquee"
import { BookingForm } from "@/components/booking-form"
import { SiteFooter } from "@/components/site-footer"
import { StickyCta } from "@/components/sticky-cta"
import { ServiceAreaMap } from "@/components/service-area-map"

export default async function Page() {
  const headersList = await headers()
  const city = headersList.get("x-user-city") || "The Four States Area"

  const schema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "Four States Appliance Repair",
    "telephone": "+237676065061",
    "url": "https://fourstatesrepair-placeholder.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Joplin",
      "addressRegion": "MO",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "37.0842",
      "longitude": "-94.5133"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "08:00",
      "closes": "18:00"
    },
    "areaServed": [
      { "@type": "City", "name": "Joplin", "sameAs": "https://en.wikipedia.org/wiki/Joplin,_Missouri" },
      { "@type": "City", "name": "Carthage", "sameAs": "https://en.wikipedia.org/wiki/Carthage,_Missouri" },
      { "@type": "City", "name": "Webb City", "sameAs": "https://en.wikipedia.org/wiki/Webb_City,_Missouri" },
      { "@type": "City", "name": "Neosho", "sameAs": "https://en.wikipedia.org/wiki/Neosho,_Missouri" },
      { "@type": "City", "name": "Carl Junction", "sameAs": "https://en.wikipedia.org/wiki/Carl_Junction,_Missouri" },
      { "@type": "State", "name": "Missouri", "sameAs": "https://en.wikipedia.org/wiki/Missouri" }
    ],
    "priceRange": "$$",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "128"
    }
  }

  return (
    <div className="min-h-screen bg-background relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <SiteHeader />
      <main className="pb-0 overflow-x-hidden">
        <Hero city={city} />
        <BrandsMarquee />
        <ServicesBento />
        <WhyChooseUs />
        <HowItWorks />
        <MeetTheTeam />
        <Testimonials />
        <ServiceAreaMap />
        <Faq />
        <BookingForm />
      </main>
      <SiteFooter />
      <StickyCta />
    </div>
  )
}
