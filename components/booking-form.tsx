"use client"

import { useState } from "react"
import { Send, CheckCircle, MessageCircle } from "lucide-react"

const WHATSAPP_NUMBER = "237676065061"
const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_NUMBER}?text=Hello,%20I%20need%20appliance%20repair%20services.`

export function BookingForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    
    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      appliance: formData.get("appliance"),
      zip: formData.get("zip"),
      issue: formData.get("issue"),
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error("Failed to send request")
      }

      setSubmitted(true)
    } catch (err) {
      setError("An error occurred while sending your request. Please call us instead.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="py-24 bg-slate-50" id="booking">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            Request Service
          </h2>
          <p className="text-lg text-slate-600">
            Fill out the form below to request a service appointment.
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

              <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700">Full Name</label>
                  <input required type="text" id="name" name="name" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700">Phone Number</label>
                  <input required type="tel" id="phone" name="phone" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" placeholder="(555) 123-4567" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="appliance" className="block text-sm font-medium text-slate-700">Appliance Type</label>
                  <select required id="appliance" name="appliance" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all bg-white">
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
                  <input required type="text" id="zip" name="zip" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" placeholder="e.g. 64801" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="issue" className="block text-sm font-medium text-slate-700">Briefly describe the issue</label>
                <textarea id="issue" name="issue" rows={3} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all resize-none" placeholder="E.g. The fridge is not cooling..."></textarea>
              </div>

              {error && (
                <div className="p-4 bg-red-50 text-red-700 border border-red-200 rounded-lg text-sm text-center">
                  {error}
                </div>
              )}

              <button disabled={loading} type="submit" className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-70 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 group">
                {loading ? (
                  <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                )}
                {loading ? "Sending Request..." : "Send Request"}
              </button>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
