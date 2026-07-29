import { Link } from 'react-router-dom'
import { PageHeading } from '@/components/shared/page-primitives'
import { craftsmenProcess } from '@/data/craftsmen'
import { track } from '@/lib/analytics'

export function CraftsmenProcess() {
  return (
    <section className="bg-white px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-4xl">
        <PageHeading as="h2" className="mb-14 text-3xl leading-tight sm:text-4xl lg:text-5xl">
          {craftsmenProcess.heading}
        </PageHeading>

        <div className="flex flex-col gap-10">
          {craftsmenProcess.steps.map((step) => (
            <div key={step.number} className="flex gap-6">
              <span className="shrink-0 font-heading text-3xl font-extrabold text-brand-accent">{step.number}</span>
              <div>
                <h3 className="mb-2 font-heading text-lg font-bold text-brand-ink">{step.title}</h3>
                <p className="leading-relaxed text-brand-copy">{step.body}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14">
          <Link
            to="/kontakt"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-accent px-8 py-4 font-heading font-bold text-white transition-all duration-300 hover:opacity-90 active:scale-[0.98]"
            onClick={() => track('crafts_cta_midpage_click', { placement: 'process_section' })}
          >
            {craftsmenProcess.cta}
          </Link>
        </div>
      </div>
    </section>
  )
}
