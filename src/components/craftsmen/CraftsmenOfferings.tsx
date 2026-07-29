import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { PageHeading } from '@/components/shared/page-primitives'
import { craftsmenOfferings } from '@/data/craftsmen'
import { track } from '@/lib/analytics'

export function CraftsmenOfferings() {
  return (
    <section className="bg-brand-surface-muted px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <PageHeading as="h2" className="mb-16 max-w-2xl text-3xl leading-tight sm:text-4xl lg:text-5xl">
          {craftsmenOfferings.heading}
        </PageHeading>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {craftsmenOfferings.items.map((item) => (
            <div
              key={item.title}
              className="flex flex-col justify-between rounded-2xl border border-brand-border/60 bg-white p-8 shadow-sm"
            >
              <div>
                <h3 className="mb-3 font-heading text-xl font-bold text-brand-ink">{item.title}</h3>
                <p className="text-brand-copy leading-relaxed">{item.body}</p>
              </div>
              {item.serviceSlug && (
                <Link
                  to={`/services/${item.serviceSlug}`}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-brand-accent group"
                  onClick={() => track('crafts_cta_midpage_click', { placement: `offering_${item.serviceSlug}` })}
                >
                  {item.linkLabel ?? 'Læs mere'}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/kontakt"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-ink px-8 py-4 font-heading font-bold text-white transition-all duration-300 hover:opacity-90 active:scale-[0.98]"
            onClick={() => track('crafts_cta_midpage_click', { placement: 'offerings_section' })}
          >
            Få et tilbud på bogføringen
          </Link>
        </div>
      </div>
    </section>
  )
}
