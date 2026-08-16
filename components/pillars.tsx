import { CheckCircle2 } from 'lucide-react'

const PILLARS = [
  '17+ years of founder experience across hospitality, operations, staffing, customer service, and leadership.',
  '8-step recruitment, vetting, and quality-assurance process for every placed professional.',
  'On-site (vendor-on-premises) workforce management for ongoing staffing needs.',
  'ATH Training Academy: TIPS® Alcohol Certification, banquet and fine dining service, and more.',
  'Leadership and supervisor development programs that build lasting organizational strength.',
  'Career development services that improve retention and candidate quality.',
]

export function Pillars() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-bronze">
            Why ATH
          </p>
          <h2 className="mt-3 text-balance font-serif text-3xl font-bold text-charcoal md:text-4xl">
            Our Key Pillars
          </h2>
        </div>

        <div className="mt-14 grid gap-x-10 gap-y-6 md:grid-cols-2">
          {PILLARS.map((pillar) => (
            <div
              key={pillar}
              className="flex items-start gap-4 border-b border-border pb-6"
            >
              <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-gold" />
              <p className="leading-relaxed text-charcoal">{pillar}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
