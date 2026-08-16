import { Quote } from 'lucide-react'

const TESTIMONIALS = [
  {
    quote:
      'ATH placed a team that understood fine dining service from day one. Their vetting process is unlike anything we had experienced with other staffing partners.',
    name: 'Hotel Operations Director',
    detail: 'Luxury Property, Tysons',
  },
  {
    quote:
      'The Training Academy elevated our banquet team\u2019s standards immediately. Our guest feedback scores improved within the first quarter.',
    name: 'Banquet Manager',
    detail: 'Event Venue, Bethesda',
  },
  {
    quote:
      'On-site workforce management took the staffing burden off our plate entirely. Reliable people, consistent standards, real accountability.',
    name: 'General Manager',
    detail: 'Hospitality Group, Arlington',
  },
]

export function Testimonials() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-bronze">
            Trusted Partners
          </p>
          <h2 className="mt-3 text-balance font-serif text-3xl font-bold text-charcoal md:text-4xl">
            What Our Clients Say
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-xl border border-border bg-card p-8 shadow-sm"
            >
              <Quote className="h-8 w-8 text-gold" />
              <blockquote className="mt-4 flex-1 leading-relaxed text-charcoal">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-4">
                <p className="font-semibold text-charcoal">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.detail}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
