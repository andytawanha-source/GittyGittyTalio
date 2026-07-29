import { Check } from 'lucide-react'
import { PageHeading } from '@/components/shared/page-primitives'
import { craftsmenProblem } from '@/data/craftsmen'

export function CraftsmenProblem() {
  return (
    <section className="bg-white px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-4xl">
        <PageHeading as="h2" className="mb-8 text-3xl leading-tight sm:text-4xl lg:text-5xl">
          {craftsmenProblem.heading}
        </PageHeading>

        <p className="mb-6 text-lg leading-relaxed text-brand-copy">{craftsmenProblem.intro}</p>
        <p className="mb-6 text-lg font-semibold text-brand-ink">{craftsmenProblem.subIntro}</p>

        <ul className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {craftsmenProblem.points.map((point) => (
            <li key={point} className="flex items-start gap-3 rounded-xl border border-brand-border/60 bg-brand-surface p-4">
              <Check className="mt-0.5 size-5 shrink-0 text-brand-accent" aria-hidden="true" />
              <span className="text-brand-copy">{point}</span>
            </li>
          ))}
        </ul>

        <p className="text-lg font-semibold leading-relaxed text-brand-ink">{craftsmenProblem.bridge}</p>
      </div>
    </section>
  )
}
