import { Target, Eye, Compass } from 'lucide-react'

const ITEMS = [
  {
    icon: Target,
    title: 'Mission',
    body: 'ATH Operations Group delivers professional staffing, training, and operational solutions that help organizations improve performance, strengthen service standards, and build exceptional teams.',
  },
  {
    icon: Eye,
    title: 'Vision',
    body: 'To become a trusted leader in hospitality, operations, staffing, and training by building exceptional organizations through people, systems, and leadership throughout the DMV region.',
  },
  {
    icon: Compass,
    title: 'Purpose',
    body: 'To help organizations strengthen their people, service standards, training programs, staffing operations, leadership, and overall operational performance.',
  },
]

export function Mission() {
  return (
    <section id="about" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-bronze">
            Who We Are
          </p>
          <h2 className="mt-3 text-balance font-serif text-3xl font-bold text-charcoal md:text-4xl">
            Mission, Vision &amp; Purpose
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {ITEMS.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="flex flex-col rounded-xl border border-border bg-card p-8 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-charcoal">
                  <Icon className="h-6 w-6 text-gold" />
                </div>
                <h3 className="font-serif text-xl font-bold text-charcoal">
                  {item.title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
