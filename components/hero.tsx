import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-charcoal">
      <Image
        src="/images/hero.png"
        alt="Professional hospitality staff setting an elegant fine dining table"
        fill
        priority
        className="object-cover object-center opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/80 to-charcoal/40" />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center px-4 py-28 text-center md:py-40">
        <span className="mb-6 inline-block rounded-full border border-gold/40 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-champagne">
          Serving the DMV Region
        </span>
        <h1 className="text-balance font-serif text-4xl font-bold leading-tight text-ivory md:text-6xl">
          Building Excellence Through People, Training, Operations, and
          Leadership.
        </h1>
        <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-ivory/75">
          Professional staffing, training, and operational solutions that help
          organizations improve performance, strengthen service standards, and
          build exceptional teams.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-gold px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-charcoal transition-colors hover:bg-champagne"
          >
            Request Staffing
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#academy"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-gold/50 px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-ivory transition-colors hover:border-gold hover:text-gold"
          >
            Explore the Academy
          </a>
        </div>
      </div>
    </section>
  )
}
