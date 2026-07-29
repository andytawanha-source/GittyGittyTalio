import { Check, X } from 'lucide-react'
import { PageHeading } from '@/components/shared/page-primitives'
import { craftsmenValue } from '@/data/craftsmen'

export function CraftsmenValue() {
  return (
    <section className="bg-brand-surface-muted px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <PageHeading as="h2" className="mb-14 max-w-3xl text-3xl leading-tight sm:text-4xl lg:text-5xl">
          {craftsmenValue.heading}
        </PageHeading>

        <ul className="mb-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {craftsmenValue.points.map((point) => (
            <li key={point} className="rounded-xl bg-white p-5 text-brand-copy shadow-sm border border-brand-border/60">
              {point}
            </li>
          ))}
        </ul>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-brand-border/60 bg-white p-8">
            <h3 className="mb-6 font-heading text-lg font-bold text-brand-ink">{craftsmenValue.before.heading}</h3>
            <ul className="flex flex-col gap-4">
              {craftsmenValue.before.items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-brand-copy">
                  <X className="mt-0.5 size-5 shrink-0 text-brand-copy/40" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-brand-accent/30 bg-white p-8 shadow-[0_20px_40px_rgba(118,74,161,0.08)]">
            <h3 className="mb-6 font-heading text-lg font-bold text-brand-accent-dark">{craftsmenValue.after.heading}</h3>
            <ul className="flex flex-col gap-4">
              {craftsmenValue.after.items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-brand-ink">
                  <Check className="mt-0.5 size-5 shrink-0 text-brand-accent" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
