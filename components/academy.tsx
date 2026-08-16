import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const PROGRAMS = [
  'TIPS® Alcohol Certification',
  'Banquet Service',
  'Fine Dining Service',
  'Customer-Service Excellence',
  'Leadership Development',
  'Supervisor Development',
]

export function Academy() {
  return (
    <section id="academy" className="bg-accent/40 py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 md:grid-cols-2 md:px-8">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
          <Image
            src="/images/training.png"
            alt="Instructor-led hospitality training session with professional service staff"
            fill
            className="object-cover"
          />
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-bronze">
            ATH Training Academy
          </p>
          <h2 className="mt-3 text-balance font-serif text-3xl font-bold text-charcoal md:text-4xl">
            Live, Instructor-Led Programs
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Our academy develops confident, certified professionals through
            hands-on instruction — raising service standards and preparing teams
            to deliver excellence.
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {PROGRAMS.map((program) => (
              <li
                key={program}
                className="flex items-center gap-3 rounded-lg border border-gold/30 bg-card px-4 py-3 text-sm font-medium text-charcoal"
              >
                <span className="h-2 w-2 rounded-full bg-gold" />
                {program}
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-charcoal px-6 py-3 text-sm font-semibold uppercase tracking-wide text-ivory transition-colors hover:bg-bronze"
          >
            Enroll or Inquire
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
