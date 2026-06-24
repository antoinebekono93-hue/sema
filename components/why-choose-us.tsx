import { ShieldCheck, DollarSign, TrendingUp, Award, Wallet, ArrowRight } from "lucide-react"

export function WhyChooseUs() {
  return (
    <section id="why-us" className="relative bg-slate-950 py-24 sm:py-32 overflow-hidden">
      {/* Background Glowing Orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-emerald-600/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-400">The Logical Choice</p>
          <h2 className="mt-3 text-balance text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Why Repair Instead of Replace?
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-400">
            Don&apos;t throw away a $2,000 appliance over a $20 part. We save our customers thousands of dollars every year with honest, guaranteed repairs.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
          
          {/* Card 1: Cost Comparison (Spans 2 columns) */}
          <div className="md:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:bg-white/10 group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/20 text-emerald-400">
                  <Wallet className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-white">The Smart Financial Choice</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center bg-red-500/10 rounded-2xl p-5 border border-red-500/20">
                  <span className="text-red-200 font-medium">Buy New Appliance</span>
                  <span className="text-red-400 font-bold line-through decoration-red-500/50 text-lg">$1,500 - $3,000+</span>
                </div>
                <div className="flex justify-between items-center bg-emerald-500/20 rounded-2xl p-5 border border-emerald-500/30 ring-1 ring-emerald-500/50 shadow-[0_0_30px_rgba(16,185,129,0.2)]">
                  <span className="text-emerald-100 font-bold">Professional Repair</span>
                  <span className="text-emerald-400 font-extrabold text-2xl">~$150 - $250</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: 2-Year Warranty (Spans 2 columns) */}
          <div className="md:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-blue-500/30 hover:bg-white/10 group relative overflow-hidden flex flex-col justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/20 text-blue-400 mb-6 group-hover:scale-110 transition-transform duration-500">
                <ShieldCheck className="h-8 w-8" />
              </div>
              <h3 className="text-3xl font-extrabold text-white mb-4">2-Year &quot;Done Right&quot; Warranty</h3>
              <p className="text-slate-400 text-lg leading-relaxed">
                We don&apos;t just fix it; we guarantee it. While most companies offer 30-90 days, we provide a massive 24-month warranty on parts and labor.
              </p>
            </div>
          </div>

          {/* Card 3: Success Rate (Spans 1 column) */}
          <div className="md:col-span-1 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10 group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 flex flex-col h-full justify-between">
              <TrendingUp className="h-8 w-8 text-amber-400 mb-6" />
              <div>
                <h3 className="text-4xl font-black text-white mb-2">95%</h3>
                <p className="text-slate-400 font-medium">First-Visit Success Rate. Our trucks are fully stocked.</p>
              </div>
            </div>
          </div>

          {/* Card 4: Service Fee (Spans 1 column) */}
          <div className="md:col-span-1 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10 group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 flex flex-col h-full justify-between">
              <DollarSign className="h-8 w-8 text-emerald-400 mb-6" />
              <div>
                <h3 className="text-xl font-bold text-white mb-2">$0 Fee</h3>
                <p className="text-slate-400 font-medium">Diagnostic fee completely waived with any repair.</p>
              </div>
            </div>
          </div>

          {/* Card 5: Master Certified (Spans 2 columns) */}
          <div className="md:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10 group relative overflow-hidden flex items-center justify-between">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-3">
                <Award className="h-6 w-6 text-purple-400" />
                <h3 className="text-xl font-bold text-white">Master Certified Expertise</h3>
              </div>
              <p className="text-slate-400 font-medium">Elite PSA Master Technician & AHAM-NARDA certifications.</p>
            </div>
            <ArrowRight className="h-6 w-6 text-white/20 group-hover:text-white/80 group-hover:translate-x-2 transition-all duration-300 hidden sm:block" />
          </div>

        </div>
      </div>
    </section>
  )
}
