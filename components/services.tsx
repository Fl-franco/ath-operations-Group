import { Users, GraduationCap, Building2, Briefcase } from 'lucide-react'

const SERVICES = [
  {
    icon: Users,
    title: 'Professional Staffing',
    body: 'Every placed professional passes our rigorous 8-step recruitment, vetting, and quality-assurance process — so you get the right people, ready to perform.',
  },
  {
    icon: Building2,
    title: 'On-Site Workforce Management',
    body: 'Vendor-on-premises management for ongoing staffing needs, giving you dedicated oversight and consistent service standards on the ground.',
  },
  {
    icon: GraduationCap,
    title: 'ATH Training Academy',
    body: 'Live, instructor-led programs covering TIPS® certification, banquet and fine dining service, customer-service excellence, leadership, and supervisor development.',
  },
  {
    icon: Briefcase,
    title: 'Career Development',
    body: 'Resume help, mock interviews, and coaching that improve candidate quality and retention — strengthening the teams we build with you.',
  },
]

export function Services() {
  return (
    <section id="services" className="bg-charcoal py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            What We Do
          </p>
          <h2 className="mt-3 text-balance font-serif text-3xl font-bold text-ivory md:text-4xl">
            Solutions Built for Performance
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {SERVICES.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="group flex gap-5 rounded-xl border border-gold/15 bg-ivory/[0.03] p-8 transition-colors hover:border-gold/40"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gold">
                  <Icon className="h-6 w-6 text-charcoal" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-ivory">
                    {service.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-ivory/70">
                    {service.body}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
