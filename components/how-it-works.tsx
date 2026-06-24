import { PhoneCall, Wrench, ShieldCheck } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      id: "01",
      title: "Call or Book Online",
      description: "Reach out to us 24/7. We often have same-day appointments available for emergencies.",
      icon: <PhoneCall className="w-8 h-8 text-blue-600" />,
    },
    {
      id: "02",
      title: "Fast Diagnosis",
      description: "Our expert technician arrives on time, inspects your appliance, and provides a clear, upfront quote.",
      icon: <Wrench className="w-8 h-8 text-blue-600" />,
    },
    {
      id: "03",
      title: "Guaranteed Repair",
      description: "We fix the issue right then and there. Plus, the diagnostic fee is completely waived with the repair!",
      icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
    },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We've streamlined our repair process to get your home running smoothly again in no time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector Line (Desktop only) */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-slate-100 z-0"></div>

          {steps.map((step) => (
            <div key={step.id} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mb-6 shadow-sm border border-blue-100 relative group">
                <div className="absolute inset-0 bg-blue-100 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 ease-out origin-center"></div>
                <div className="relative z-10">{step.icon}</div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md">
                  {step.id}
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
              <p className="text-slate-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
