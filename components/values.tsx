import { Award, ShieldCheck, HeartHandshake, Target, Lightbulb, Compass } from 'lucide-react'

const VALUES = [
  {
    icon: Award,
    title: 'Excellence',
    body: 'We pursue high standards in every service, interaction, and deliverable.',
  },
  {
    icon: ShieldCheck,
    title: 'Integrity',
    body: 'We communicate honestly, act responsibly, and protect client trust.',
  },
  {
    icon: HeartHandshake,
    title: 'Service',
    body: 'We put clients, guests, teams, and communities at the center of our work.',
  },
  {
    icon: Target,
    title: 'Accountability',
    body: 'We take ownership of commitments, performance, and results.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    body: 'We use practical ideas, systems, and technology to improve operations.',
  },
  {
    icon: Compass,
    title: 'Leadership',
    body: 'We lead by example, develop people, and create confidence through action.',
  },
]

export function Values() {
  return (
    <section id="values" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-bronze">
            What We Stand For
          </p>
          <h2 className="mt-3 text-balance font-serif text-3xl font-bold text-charcoal md:text-4xl">
            Core Values
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {VALUES.map((value) => {
            const Icon = value.icon
            return (
              <div
                key={value.title}
                className="group rounded-xl border border-border bg-card p-8 shadow-sm transition-colors hover:border-gold"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-charcoal">
                  <Icon className="h-6 w-6 text-gold" />
                </div>
                <h3 className="mt-5 font-serif text-xl font-bold text-charcoal">
                  {value.title}
                </h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">
                  {value.body}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
