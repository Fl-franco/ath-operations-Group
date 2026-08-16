import Image from 'next/image'

const STATS = [
  { value: '17+', label: 'Years of Experience' },
  { value: '8-Step', label: 'Vetting Process' },
  { value: 'DMV', label: 'Regional Focus' },
]

export function AboutFounder() {
  return (
    <section id="about" className="bg-charcoal py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-start gap-12 px-4 md:grid-cols-5 md:px-8">
        <div className="md:col-span-3">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-gold">
            Leadership
          </p>
          <h2 className="mt-3 text-balance font-serif text-3xl font-bold text-ivory md:text-4xl">
            Amir Take
          </h2>
          <p className="mt-1 font-sans text-sm font-medium uppercase tracking-[0.15em] text-champagne">
            Founder &amp; President
          </p>
          <p className="mt-5 leading-relaxed text-ivory/75">
            Amir Take is the Founder and President of ATH Operations Group,
            bringing more than 17 years of combined experience in hospitality,
            operations, staffing, customer service, leadership, training,
            information technology, executive support, audiovisual systems, and
            business development. His background includes supporting senior
            federal executives and VIPs, managing Microsoft 365 and enterprise
            technology environments, training technical and hospitality teams,
            building staffing operations, developing business systems, and
            serving hospitality organizations throughout the DMV region.
          </p>
          <p className="mt-4 leading-relaxed text-ivory/75">
            Amir founded ATH Operations Group to combine practical industry
            experience, professional training, operational systems, technology,
            and leadership into solutions that help organizations build
            exceptional teams and deliver outstanding service.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-6">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <p className="font-serif text-3xl font-bold text-gold md:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-ivory/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto aspect-[3/4] w-full max-w-xs overflow-hidden rounded-2xl shadow-xl md:col-span-2">
          <Image
            src="/images/founder.png"
            alt="Amir Take, Founder and President of ATH Operations Group"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}
