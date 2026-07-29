import { Link } from 'react-router-dom'
import { Check } from 'lucide-react'
import { PageHeading } from '@/components/shared/page-primitives'
import { craftsmenPricing } from '@/data/craftsmen'
import { track } from '@/lib/analytics'

export function CraftsmenPricing() {
  return (
    <section className="bg-white px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-4xl">
        <PageHeading as="h2" className="mb-6 text-3xl leading-tight sm:text-4xl lg:text-5xl">
          {craftsmenPricing.heading}
        </PageHeading>
        <p className="mb-10 text-lg leading-relaxed text-brand-copy">{craftsmenPricing.intro}</p>

        <ul className="mb-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {craftsmenPricing.factors.map((factor) => (
            <li key={factor} className="flex items-start gap-3 rounded-xl border border-brand-border/60 bg-brand-surface p-4">
              <Check className="mt-0.5 size-5 shrink-0 text-brand-accent" aria-hidden="true" />
              <span className="text-brand-copy">{factor}</span>
            </li>
          ))}
        </ul>

        <Link
          to="/kontakt"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-ink px-8 py-4 font-heading font-bold text-white transition-all duration-300 hover:opacity-90 active:scale-[0.98]"
          onClick={() => track('crafts_cta_midpage_click', { placement: 'pricing_section' })}
        >
          {craftsmenPricing.cta}
        </Link>
      </div>
    </section>
  )
}
