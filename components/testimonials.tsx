import { Star, CheckCircle } from "lucide-react"

export function Testimonials() {
  const reviews = [
    {
      id: 1,
      name: "Sarah Jenkins",
      initials: "SJ",
      color: "bg-blue-500",
      location: "Joplin, MO",
      text: "Incredible service! Our refrigerator stopped cooling on a Friday night with a full load of groceries. They answered the phone immediately and had a technician here Saturday morning. Saved our food and fixed it fast.",
      appliance: "Refrigerator Repair",
      date: "2 weeks ago"
    },
    {
      id: 2,
      name: "Michael T.",
      initials: "MT",
      color: "bg-emerald-500",
      location: "Carthage, MO",
      text: "Very professional and honest. The technician quickly found that my dryer just needed a $20 belt instead of a major motor replacement. It's refreshing to find a company with such high integrity. I will definitely call them again.",
      appliance: "Dryer Repair",
      date: "1 month ago"
    },
    {
      id: 3,
      name: "Amanda Davis",
      initials: "AD",
      color: "bg-purple-500",
      location: "Webb City, MO",
      text: "Booking online was a breeze. They called to confirm within 10 minutes. The technician was polite, wore shoe covers, and left the work area cleaner than he found it. Highly recommend!",
      appliance: "Dishwasher Repair",
      date: "2 months ago"
    },
    {
      id: 4,
      name: "Robert L.",
      initials: "RL",
      color: "bg-amber-500",
      location: "Neosho, MO",
      text: "Our oven decided to quit the day before Thanksgiving. Four States Appliance Repair sent someone out the exact same day. Professional, quick, and reasonably priced. You guys are lifesavers!",
      appliance: "Oven Repair",
      date: "3 weeks ago"
    },
    {
      id: 5,
      name: "Jessica W.",
      initials: "JW",
      color: "bg-rose-500",
      location: "Joplin, MO",
      text: "I appreciated how transparent they were about pricing. The tech explained everything before starting the work so there were no surprises. The washing machine works like new now. Great local company.",
      appliance: "Washer Repair",
      date: "1 week ago"
    }
  ]

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        
        {/* Google Reviews Header */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
          <div className="flex items-center gap-6 mb-6 md:mb-0">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-50">
              {/* SVG Google Logo */}
              <svg viewBox="0 0 24 24" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Excellent</h2>
              <div className="flex items-center gap-2 mt-1">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-slate-600 font-medium">Based on 142 reviews</span>
              </div>
            </div>
          </div>
          
          <a href="#" className="inline-flex items-center justify-center px-6 py-3 border-2 border-blue-600 text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-colors">
            Write a Review
          </a>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {reviews.map((review) => (
            <div key={review.id} className="break-inside-avoid bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              
              {/* User Header */}
              <div className="flex items-center gap-4 mb-4">
                <div className={`flex h-12 w-12 items-center justify-center rounded-full text-white font-bold text-lg ${review.color}`}>
                  {review.initials}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">{review.name}</h3>
                  <p className="text-sm text-slate-500">{review.date}</p>
                </div>
                <div className="ml-auto">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 opacity-80" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                </div>
              </div>

              {/* Stars & Text */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-slate-700 leading-relaxed mb-6">"{review.text}"</p>
              
              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md">
                  <CheckCircle className="w-3.5 h-3.5" />
                  Verified Customer
                </div>
                <div className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded-md">
                  {review.appliance}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
