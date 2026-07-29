import { Link } from 'react-router-dom'
import { Phone } from 'lucide-react'
import { PageHeading } from '@/components/shared/page-primitives'
import { craftsmenFinalCta } from '@/data/craftsmen'
import { contact } from '@/data/content'
import { track } from '@/lib/analytics'

export function CraftsmenFinalCta() {
  return (
    <section className="bg-brand-ink px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <PageHeading as="h2" className="mb-6 text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
          {craftsmenFinalCta.heading}
        </PageHeading>
        <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white/60">{craftsmenFinalCta.body}</p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/kontakt"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-accent px-8 py-4 font-heading font-bold text-white transition-all duration-300 hover:opacity-90 active:scale-[0.98]"
            onClick={() => track('crafts_cta_midpage_click', { placement: 'final_cta' })}
          >
            {craftsmenFinalCta.ctaPrimary}
          </Link>
          <a
            href={`tel:${contact.phone.replace(/\s+/g, '')}`}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-8 py-4 font-heading font-bold text-white transition-all duration-300 hover:bg-white/10 active:scale-[0.98]"
            onClick={() => track('crafts_phone_click', { placement: 'final_cta' })}
          >
            <Phone className="size-4" aria-hidden="true" />
            {craftsmenFinalCta.ctaSecondary}
          </a>
        </div>

        <p className="mt-6 text-sm text-white/40">{craftsmenFinalCta.microcopy}</p>
      </div>
    </section>
  )
}
