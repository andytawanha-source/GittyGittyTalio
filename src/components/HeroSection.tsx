import { Link } from 'react-router-dom'
import { ctaButtonClasses } from '@/components/shared/page-classes'
import { SectionBadge, PageHeading } from '@/components/shared/page-primitives'
import { hero } from '@/data/content'

export function HeroSection() {
  return (
    <section className="relative flex min-h-[820px] items-center overflow-hidden bg-[#f7f9fb] py-24 px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: copy */}
        <div className="z-10">
          {hero.badge && <SectionBadge className="mb-6">{hero.badge}</SectionBadge>}

          <PageHeading className="mb-8 text-5xl leading-[1.1] text-[#001430] lg:text-7xl">
            {hero.heading}
          </PageHeading>

          <p className="text-lg text-[#43474f] max-w-lg mb-10 leading-relaxed">{hero.sub}</p>

          <div className="flex flex-wrap gap-4">
            <Link to="/kontakt" className={ctaButtonClasses.primary}>
              {hero.cta1}
            </Link>
            <Link to="/services" className={ctaButtonClasses.secondary}>
              {hero.cta2}
            </Link>
          </div>
        </div>

        {/* Right: brand visual */}
        <div className="relative">
          <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative z-10 transform lg:translate-x-12 lg:-rotate-2">
            <img
              src="https://cdn.sanity.io/images/mofuirr6/production/c442c2b6fd7737ad722c1a8f4ae305bcecc1c23e-1086x1448.png?w=900&q=85&auto=format"
              alt="Talio medarbejder ved skrivebord"
              className="h-full w-full object-cover"
            />
          </div>
          {/* Decorative blurs */}
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-[#764aa1]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-[#001430]/5 rounded-full blur-3xl pointer-events-none" />
        </div>
      </div>
    </section>
  )
}
