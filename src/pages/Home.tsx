import { HeroSection } from '@/components/HeroSection'
import { ServicesSection } from '@/components/ServicesSection'
import { MidCtaSection } from '@/components/MidCtaSection'
import { AboutSection } from '@/components/AboutSection'
import { FinalCtaSection } from '@/components/FinalCtaSection'

export function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <MidCtaSection />
      <AboutSection />
      <FinalCtaSection />
    </main>
  )
}
