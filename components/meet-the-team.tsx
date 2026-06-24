import Image from "next/image"
import { CheckCircle2, Award, Clock } from "lucide-react"

export function MeetTheTeam() {
  return (
    <section className="bg-muted overflow-hidden py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none">
            {/* Image Container with decorative elements */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="/technician.png"
                alt="Professional Appliance Repair Technician"
                fill
                className="object-cover"
                sizes="(max-w-768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl" />
            </div>
            
            {/* Floating Trust Badge */}
            <div className="absolute -bottom-6 -right-6 rounded-2xl bg-background p-4 shadow-xl sm:-bottom-8 sm:-right-8 sm:p-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-muted-foreground">Status</p>
                  <p className="text-lg font-bold text-foreground">Background Checked</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:py-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-cta">Meet Your Local Expert</p>
            <h2 className="mt-2 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
              Don&apos;t let a stranger into your home.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              When you call Four States Appliance Repair, you aren&apos;t getting a random contractor from a faceless national franchise. You&apos;re getting a highly trained, master-certified technician who lives and works right here in the Joplin area.
            </p>

            <ul className="mt-8 space-y-5">
              <li className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cta/10 text-cta">
                  <Award className="h-4 w-4" />
                </span>
                <span className="text-base font-medium text-foreground">Fully Licensed & Insured</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cta/10 text-cta">
                  <CheckCircle2 className="h-4 w-4" />
                </span>
                <span className="text-base font-medium text-foreground">Strict Criminal Background Checks</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cta/10 text-cta">
                  <Clock className="h-4 w-4" />
                </span>
                <span className="text-base font-medium text-foreground">Respectful of Your Time & Property</span>
              </li>
            </ul>

            <div className="mt-10">
              <p className="font-medium italic text-muted-foreground border-l-4 border-cta pl-4">
                &quot;My goal isn&apos;t just to fix your appliance today. It&apos;s to do such an incredible job that you never hesitate to call me the next time something breaks.&quot;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
