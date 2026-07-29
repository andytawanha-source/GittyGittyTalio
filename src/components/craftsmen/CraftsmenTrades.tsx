import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { PageHeading } from '@/components/shared/page-primitives'
import { craftsmenTrades } from '@/data/craftsmen'
import { cn } from '@/lib/utils'

export function CraftsmenTrades() {
  const [openSlug, setOpenSlug] = useState<string | undefined>(craftsmenTrades.items[0]?.slug)

  return (
    <section className="bg-white px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-4xl">
        <PageHeading as="h2" className="mb-12 text-3xl leading-tight sm:text-4xl lg:text-5xl">
          {craftsmenTrades.heading}
        </PageHeading>

        <div className="flex flex-col gap-3">
          {craftsmenTrades.items.map((trade) => {
            const isOpen = openSlug === trade.slug
            return (
              <div key={trade.slug} className="rounded-xl border border-brand-border/60 bg-brand-surface overflow-hidden">
                <h3>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    aria-expanded={isOpen}
                    aria-controls={`trade-panel-${trade.slug}`}
                    id={`trade-trigger-${trade.slug}`}
                    onClick={() => setOpenSlug(isOpen ? undefined : trade.slug)}
                  >
                    <span className="font-heading text-lg font-bold text-brand-ink">{trade.title}</span>
                    <ChevronDown
                      className={cn('size-5 shrink-0 text-brand-accent transition-transform duration-200', isOpen && 'rotate-180')}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                <div
                  id={`trade-panel-${trade.slug}`}
                  role="region"
                  aria-labelledby={`trade-trigger-${trade.slug}`}
                  hidden={!isOpen}
                  className="px-6 pb-6"
                >
                  <p className="leading-relaxed text-brand-copy">{trade.body}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
