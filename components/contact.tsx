'use client'

import { useActionState, useRef, useState } from 'react'
import { useFormStatus } from 'react-dom'
import { Phone, Mail, MapPin, UploadCloud, CheckCircle2, Loader2 } from 'lucide-react'
import { submitContact, type ContactState } from '@/app/actions'

const initialState: ContactState = { status: 'idle', message: '' }

const INTERESTS = [
  'Staffing Request',
  'On-Site Workforce Management',
  'Training Academy Enrollment',
  'Career Development / Job Seeker',
  'General Inquiry',
]

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-gold px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-charcoal transition-colors hover:bg-champagne disabled:opacity-60"
    >
      {pending ? (
        <>
          <Loader2 className="h-4 w-4 animate-spin" />
          Sending...
        </>
      ) : (
        'Send Message'
      )}
    </button>
  )
}

export function Contact() {
  const [state, formAction] = useActionState(submitContact, initialState)
  const [fileName, setFileName] = useState<string | null>(null)
  const formRef = useRef<HTMLFormElement>(null)

  if (state.status === 'success' && formRef.current) {
    formRef.current.reset()
  }

  return (
    <section id="contact" className="bg-charcoal py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 md:grid-cols-2 md:px-8">
        {/* Info */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            Get in Touch
          </p>
          <h2 className="mt-3 text-balance font-serif text-3xl font-bold text-ivory md:text-4xl">
            Let&apos;s Build Your Team
          </h2>
          <p className="mt-4 leading-relaxed text-ivory/75">
            Whether you need staffing, training, or on-site management — or
            you&apos;re a professional looking to grow — we&apos;d love to hear
            from you.
          </p>

          <div className="mt-10 space-y-5">
            <a
              href="tel:+17033216859"
              className="flex items-center gap-4 text-ivory/85 transition-colors hover:text-gold"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-ivory/[0.06]">
                <Phone className="h-5 w-5 text-gold" />
              </span>
              (703) 321-6859
            </a>
            <a
              href="mailto:amir@athoperationsgroup.com"
              className="flex items-center gap-4 text-ivory/85 transition-colors hover:text-gold"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-ivory/[0.06]">
                <Mail className="h-5 w-5 text-gold" />
              </span>
              amir@athoperationsgroup.com
            </a>
            <a
              href="mailto:franco@operationsgroup.com"
              className="flex items-center gap-4 text-ivory/85 transition-colors hover:text-gold"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-ivory/[0.06]">
                <Mail className="h-5 w-5 text-gold" />
              </span>
              franco@operationsgroup.com
            </a>
            <div className="flex items-start gap-4 text-ivory/85">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-ivory/[0.06]">
                <MapPin className="h-5 w-5 text-gold" />
              </span>
              <span className="leading-relaxed">
                Serving the DMV region — D.C., Northern Virginia &amp; Maryland.
                Falls Church, Arlington, Alexandria, Tysons, Fairfax, Loudoun
                County &amp; Bethesda.
              </span>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="rounded-2xl border border-gold/20 bg-ivory p-6 shadow-xl md:p-8">
          {state.status === 'success' ? (
            <div className="flex h-full flex-col items-center justify-center py-10 text-center">
              <CheckCircle2 className="h-14 w-14 text-gold" />
              <h3 className="mt-4 font-serif text-2xl font-bold text-charcoal">
                Message Received
              </h3>
              <p className="mt-2 max-w-sm leading-relaxed text-muted-foreground">
                {state.message}
              </p>
            </div>
          ) : (
            <form ref={formRef} action={formAction} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Full Name" htmlFor="name">
                  <input
                    id="name"
                    name="name"
                    required
                    maxLength={200}
                    className="input-base"
                    placeholder="Jane Doe"
                  />
                </Field>
                <Field label="Email" htmlFor="email">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="input-base"
                    placeholder="you@email.com"
                  />
                </Field>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Phone" htmlFor="phone">
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    maxLength={50}
                    className="input-base"
                    placeholder="(555) 555-5555"
                  />
                </Field>
                <Field label="I'm interested in" htmlFor="interest">
                  <select id="interest" name="interest" className="input-base" defaultValue="">
                    <option value="" disabled>
                      Select an option
                    </option>
                    {INTERESTS.map((i) => (
                      <option key={i} value={i}>
                        {i}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>

              <Field label="Message" htmlFor="message">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  maxLength={5000}
                  className="input-base resize-none"
                  placeholder="Tell us about your staffing, training, or career needs..."
                />
              </Field>

             

              {state.status === 'error' && (
                <p className="text-sm font-medium text-destructive">
                  {state.message}
                </p>
              )}

              <SubmitButton />
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string
  htmlFor: string
  children: React.ReactNode
}) {
  return (
    <label htmlFor={htmlFor} className="block">
      <span className="mb-1.5 block text-sm font-medium text-charcoal">
        {label}
      </span>
      {children}
    </label>
  )
}
