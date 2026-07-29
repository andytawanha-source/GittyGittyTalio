import { Link } from 'react-router-dom'
import { PageHeading } from '@/components/shared/page-primitives'
import { finalCta } from '@/data/content'

export function FinalCtaSection() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-[#f2f4f6]">
      <div className="mx-auto max-w-4xl text-center">
        <PageHeading as="h2" className="mb-6 text-4xl lg:text-5xl">
          {finalCta.heading}
        </PageHeading>
        <p className="text-[#43474f] text-lg mb-10 max-w-2xl mx-auto leading-relaxed">{finalCta.body}</p>
        <Link to="/kontakt" className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#001430] px-8 py-4 font-heading font-bold text-white transition-all duration-300 hover:opacity-90 active:scale-[0.98]">
          {finalCta.button}
        </Link>
      </div>
    </section>
  )
}
