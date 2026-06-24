"use client"

import { useState } from "react"
import { Send, CheckCircle, MessageCircle } from "lucide-react"

const WHATSAPP_NUMBER = "237676065061"
const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_NUMBER}?text=Hello,%20I%20need%20appliance%20repair%20services.`

export function BookingForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, send data to an API/CRM here
    setSubmitted(true)
  }

  return (
    <section className="py-24 bg-slate-50" id="booking">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            Request Service
          </h2>
          <p className="text-lg text-slate-600">
            For the fastest response, message us on WhatsApp. Or, fill out the form below.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-slate-100">
          {submitted ? (
            <div className="flex flex-col items-center justify-center text-center py-10 space-y-4 animate-in fade-in zoom-in duration-500">
              <CheckCircle className="h-16 w-16 text-emerald-500" />
              <h3 className="text-2xl font-semibold text-slate-900">Request Received!</h3>
              <p className="text-slate-600">
                A technician will call you shortly to confirm your appointment time.
              </p>
              <button 
                onClick={() => setSubmitted(false)}
                className="mt-6 text-blue-600 hover:underline font-medium"
              >
                Submit another request
              </button>
            </div>
          ) : (
            <>
              {/* Primary WhatsApp CTA */}
              <div className="mb-8">
                <a 
                  href={WHATSAPP_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20b858] text-white font-bold py-5 rounded-xl shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl text-lg group"
                >
                  <MessageCircle className="w-7 h-7 group-hover:scale-110 transition-transform" />
                  Book Instantly via WhatsApp
                </a>
                <p className="text-center text-sm text-slate-500 mt-3">Average response time: &lt; 5 minutes</p>
              </div>

              {/* Separator */}
              <div className="relative flex pb-8 pt-2 items-center">
                <div className="flex-grow border-t border-slate-200"></div>
                <span className="flex-shrink-0 mx-4 text-slate-400 font-semibold text-xs tracking-widest uppercase">Or use our web form</span>
                <div className="flex-grow border-t border-slate-200"></div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700">Full Name</label>
                  <input required type="text" id="name" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700">Phone Number</label>
                  <input required type="tel" id="phone" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" placeholder="(555) 123-4567" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="appliance" className="block text-sm font-medium text-slate-700">Appliance Type</label>
                  <select required id="appliance" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all bg-white">
                    <option value="">Select Appliance...</option>
                    <option value="refrigerator">Refrigerator / Freezer</option>
                    <option value="washer">Washing Machine</option>
                    <option value="dryer">Dryer</option>
                    <option value="oven">Oven / Stove</option>
                    <option value="dishwasher">Dishwasher</option>
                    <option value="microwave">Microwave</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="zip" className="block text-sm font-medium text-slate-700">Zip Code</label>
                  <input required type="text" id="zip" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" placeholder="e.g. 64801" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="issue" className="block text-sm font-medium text-slate-700">Briefly describe the issue</label>
                <textarea id="issue" rows={3} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all resize-none" placeholder="E.g. The fridge is not cooling..."></textarea>
              </div>

              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 group">
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                Send Request
              </button>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
