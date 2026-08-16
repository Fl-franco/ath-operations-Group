import { Phone, Mail } from 'lucide-react'
import Image from "next/image";


export function SiteFooter() {
  return (
    <footer className="border-t border-gold/20 bg-charcoal py-12">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
             <a href="#top" className="flex items-center">
          <Image
            src="/images/logo-ath.png"
            alt="ATH Operations Group"
            width={60}
            height={60}
            priority
            className="h-auto"
          />
          <span className="mt-1 text-[0.65rem] font-medium uppercase tracking-[0.2em] text-ivory/80">
            Operations Group
          </span>
        </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ivory/60">
              Professional staffing, training, and operational solutions across
              the DMV region — building excellence through people, training,
              operations, and leadership.
            </p>
          </div>

          <div className="space-y-3 text-sm">
            <a
              href="tel:+17033216859"
              className="flex items-center gap-3 text-ivory/75 transition-colors hover:text-gold"
            >
              <Phone className="h-4 w-4 text-gold" />
              (703) 321-6859
            </a>
            <a
              href="mailto:amir@athoperationsgroup.com"
              className="flex items-center gap-3 text-ivory/75 transition-colors hover:text-gold"
            >
              <Mail className="h-4 w-4 text-gold" />
              amir@athoperationsgroup.com
            </a>
            <a
              href="mailto:franco@operationsgroup.com"
              className="flex items-center gap-3 text-ivory/75 transition-colors hover:text-gold"
            >
              <Mail className="h-4 w-4 text-gold" />
              franco@operationsgroup.com
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-ivory/10 pt-6 text-center text-xs text-ivory/50">
          &copy; {new Date().getFullYear()} ATH Operations Group. All rights
          reserved.
        </div>
      </div>
    </footer>
  )
}
