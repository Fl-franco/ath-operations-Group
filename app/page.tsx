import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Mission } from '@/components/mission'
import { Services } from '@/components/services'
import { Pillars } from '@/components/pillars'
import { Academy } from '@/components/academy'
import { AboutFounder } from '@/components/about-founder'
import { Values } from '@/components/values'
import { Testimonials } from '@/components/testimonials'
import { Gallery } from '@/components/gallery'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <main>
      <SiteHeader />
      <Hero />
      <Mission />
      <Services />
      <Pillars />
      <Academy />
      <AboutFounder />
      <Values />
      <Testimonials />
      <Gallery />
      <Contact />
      <SiteFooter />
    </main>
  )
}
