import { Link } from 'react-router-dom'
import { PageHeading } from '@/components/shared/page-primitives'
import { midCta } from '@/data/content'

export function MidCtaSection() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-[#001430]">
      <div className="mx-auto max-w-4xl text-center">
        <PageHeading as="h2" className="mb-6 text-4xl lg:text-5xl text-white">
          {midCta.heading}
        </PageHeading>
        <p className="text-white/60 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">{midCta.body}</p>
        <Link
          to="/kontakt"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#764aa1] px-8 py-4 font-heading font-bold text-white transition-all duration-300 hover:opacity-90 active:scale-[0.98]"
        >
          {midCta.button}
        </Link>
      </div>
    </section>
  )
}
