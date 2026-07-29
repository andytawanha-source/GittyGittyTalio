import { Link } from 'react-router-dom'
import { SectionBadge, PageHeading } from '@/components/shared/page-primitives'
import { craftsmenHero } from '@/data/craftsmen'
import { track } from '@/lib/analytics'

export function CraftsmenHero() {
  return (
    <section className="relative overflow-hidden bg-brand-surface px-6 pt-16 pb-20 lg:px-8 lg:pt-20 lg:pb-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div className="z-10">
          <SectionBadge className="mb-6">{craftsmenHero.eyebrow}</SectionBadge>

          <PageHeading className="mb-6 text-4xl leading-[1.08] sm:text-5xl lg:text-6xl">
            {craftsmenHero.heading}
          </PageHeading>

          <p className="mb-8 max-w-lg text-lg leading-relaxed text-brand-copy">{craftsmenHero.sub}</p>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/kontakt"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-ink px-8 py-4 font-heading font-bold text-white transition-all duration-300 hover:opacity-90 active:scale-[0.98]"
              onClick={() => track('crafts_cta_hero_click', { placement: 'hero_primary' })}
            >
              {craftsmenHero.ctaPrimary}
            </Link>
            <Link
              to="/kontakt"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-surface-strong px-8 py-4 font-heading font-bold text-brand-ink transition-all duration-300 hover:bg-brand-border"
              onClick={() => track('crafts_cta_hero_click', { placement: 'hero_secondary' })}
            >
              {craftsmenHero.ctaSecondary}
            </Link>
          </div>

          <p className="mt-4 text-sm text-brand-copy/70">{craftsmenHero.microcopy}</p>

          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-brand-ink/70">
            {craftsmenHero.trustLine.map((item, i) => (
              <li key={item} className="flex items-center gap-6">
                {item}
                {i < craftsmenHero.trustLine.length - 1 && (
                  <span aria-hidden="true" className="text-brand-border">
                    ·
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="relative z-10 aspect-[4/5] transform overflow-hidden rounded-2xl shadow-2xl lg:translate-x-8 lg:-rotate-1">
            <img
              src={craftsmenHero.image}
              alt={craftsmenHero.imageAlt}
              width={1600}
              height={2154}
              className="h-full w-full object-cover"
              fetchPriority="high"
            />
          </div>
          <div className="pointer-events-none absolute -top-12 -right-12 h-64 w-64 rounded-full bg-brand-accent/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-12 -left-12 h-64 w-64 rounded-full bg-brand-ink/5 blur-3xl" />
        </div>
      </div>
    </section>
  )
}
