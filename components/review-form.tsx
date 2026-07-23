"use client"

import { useState } from "react"
import { Star, Send, CheckCircle } from "lucide-react"

export function ReviewForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [rating, setRating] = useState(5)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name"),
      appliance: formData.get("appliance"),
      text: formData.get("text"),
      rating: rating,
    }

    try {
      const response = await fetch("/api/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      const result = await response.json().catch(() => ({ error: `Server error (${response.status})` }))

      if (!response.ok) {
        throw new Error(result.error || `Server error (${response.status})`)
      }

      setSubmitted(true)
    } catch (err: any) {
      setError(err.message || "An error occurred while sending your review. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 text-center animate-in fade-in zoom-in duration-500">
        <div className="flex justify-center mb-4">
          <CheckCircle className="h-12 w-12 text-emerald-500" />
        </div>
        <h3 className="text-xl font-semibold text-slate-900 mb-2">Thank you for your review!</h3>
        <p className="text-slate-600">Your feedback helps us improve and helps others find great service.</p>
        <button 
          onClick={() => setSubmitted(false)}
          className="mt-6 text-blue-600 hover:underline font-medium"
        >
          Submit another review
        </button>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
      <h3 className="text-xl font-semibold text-slate-900 mb-6">Leave a Review</h3>
      
      {error && (
        <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-xl text-sm border border-red-100">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-slate-700">Rating</label>
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setRating(star)}
                className="focus:outline-none transition-transform hover:scale-110"
              >
                <Star className={`w-8 h-8 ${star <= rating ? 'fill-amber-400 text-amber-400' : 'text-slate-200'}`} />
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium text-slate-700">Name</label>
            <input required type="text" id="name" name="name" className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" placeholder="John D." />
          </div>
          <div className="space-y-2">
            <label htmlFor="appliance" className="block text-sm font-medium text-slate-700">Service Type (Optional)</label>
            <input type="text" id="appliance" name="appliance" className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" placeholder="Refrigerator Repair" />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="text" className="block text-sm font-medium text-slate-700">Your Review</label>
          <textarea required id="text" name="text" rows={4} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all resize-none" placeholder="How was our service?"></textarea>
        </div>

        <button disabled={loading} type="submit" className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-70 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 group">
          {loading ? (
            <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          ) : (
            <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          )}
          {loading ? "Submitting..." : "Submit Review"}
        </button>
      </form>
    </div>
  )
}
