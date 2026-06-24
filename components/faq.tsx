"use client"

import { useState } from "react"
import { Plus, Minus, MessageCircle } from "lucide-react"

const faqs = [
  {
    q: "How quickly can you come out for a repair?",
    a: "We prioritize urgent calls and offer same-day or next-day service across the Joplin area. When you contact us via WhatsApp, we can often give you an immediate ETA.",
  },
  {
    q: "How much is the service call fee?",
    a: "We charge a competitive flat-rate diagnostic fee to identify the issue. However, if you choose us to perform the repair, that diagnostic fee is completely waived.",
  },
  {
    q: "Is it worth repairing, or should I just replace it?",
    a: "We follow the '50% Rule': if the repair costs more than 50% of the price of a new appliance, or if the unit is nearing the end of its expected lifespan, we will honestly advise you to replace it.",
  },
  {
    q: "What brands are your technicians certified to fix?",
    a: "Our Master Technicians are factory-trained for all major brands including Whirlpool, Samsung, LG, GE, Maytag, KitchenAid, Frigidaire, Sub-Zero, and Wolf.",
  },
  {
    q: "Is your work warrantied?",
    a: "Absolutely. We stand by our work with the strongest protection in Southwest Missouri: a 2-Year Parts and Labor Warranty on all completed repairs.",
  },
  {
    q: "Are your technicians background-checked?",
    a: "Yes. Your safety and peace of mind are our top priorities. Every technician undergoes a strict criminal background check and drug screening before they are hired.",
  },
  {
    q: "What forms of payment do you accept?",
    a: "We accept all major credit cards (Visa, MasterCard, Discover, Amex), debit cards, and cash. Payment is only collected after the repair is completed to your satisfaction.",
  },
]

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  // JSON-LD Schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  }

  return (
    <section id="faq" className="bg-white py-20 sm:py-32 overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-8">
          
          {/* Left Column: Context & CTA */}
          <div className="lg:col-span-5">
            <p className="text-sm font-semibold uppercase tracking-wide text-cta">Support</p>
            <h2 className="mt-2 text-balance text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Got Questions?
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              We believe in 100% transparency. Here are the answers to the most common questions our customers ask before booking a repair.
            </p>
            
            <div className="mt-10 rounded-3xl bg-slate-50 p-8 border border-slate-100 shadow-sm">
              <h3 className="font-bold text-slate-900 text-xl">Still need help?</h3>
              <p className="mt-2 text-slate-600 mb-8">Our master technicians are ready to answer your specific questions instantly.</p>
              <a 
                href="https://wa.me/237676065061?text=Hello,%20I%20have%20a%20question%20about%20an%20appliance%20repair." 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 w-full rounded-xl bg-[#25D366] px-4 py-4 text-base font-bold text-white transition-all hover:bg-[#20b858] hover:shadow-lg hover:-translate-y-1"
              >
                <MessageCircle className="h-6 w-6" />
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Right Column: Accordions */}
          <div className="lg:col-span-7 lg:pl-10">
            <dl className="space-y-2">
              {faqs.map((faq, i) => {
                const isOpen = openIndex === i
                return (
                  <div 
                    key={i} 
                    className={`group rounded-2xl border transition-all duration-300 ${isOpen ? 'border-slate-200 bg-white shadow-md' : 'border-transparent hover:bg-slate-50'}`}
                  >
                    <dt>
                      <button
                        onClick={() => setOpenIndex(isOpen ? null : i)}
                        className="flex w-full items-start justify-between px-6 py-5 text-left focus:outline-none"
                      >
                        <span className={`text-base font-semibold transition-colors ${isOpen ? 'text-blue-600' : 'text-slate-900 group-hover:text-blue-600'}`}>
                          {faq.q}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          {isOpen ? (
                            <Minus className="h-5 w-5 text-blue-600" aria-hidden="true" />
                          ) : (
                            <Plus className="h-5 w-5 text-slate-400 group-hover:text-blue-600" aria-hidden="true" />
                          )}
                        </span>
                      </button>
                    </dt>
                    <dd 
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                    >
                      <div className="px-6 pb-6 text-base text-slate-600">
                        {faq.a}
                      </div>
                    </dd>
                  </div>
                )
              })}
            </dl>
          </div>

        </div>
      </div>
    </section>
  )
}
