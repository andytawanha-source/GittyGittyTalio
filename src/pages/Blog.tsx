import { Mail } from 'lucide-react'
import { PageHeading, SectionBadge } from '@/components/shared/page-primitives'
import { blogPage } from '@/data/content'

export function Blog() {
  return (
    <main className="pt-44 pb-32 px-6 lg:px-8 bg-[#f7f9fb]">
      <div className="max-w-3xl mx-auto text-center mb-24">
        <SectionBadge className="mb-6">{blogPage.eyebrow}</SectionBadge>
        <PageHeading className="mb-8 text-5xl leading-[1.1] md:text-6xl">
          {blogPage.heading}
        </PageHeading>
        <p className="text-lg text-[#43474f] leading-relaxed">{blogPage.body}</p>
      </div>

      <div className="max-w-3xl mx-auto text-center mb-24">
        <p className="text-[#43474f] italic">{blogPage.emptyState}</p>
      </div>

      <div className="mx-auto max-w-3xl bg-[#001430] rounded-3xl p-12 lg:p-16 text-center">
        <h2 className="font-heading text-3xl font-bold text-white mb-4">
          {blogPage.newsletterHeading}
        </h2>
        <p className="text-white/60 mb-10 max-w-xl mx-auto leading-relaxed">
          {blogPage.newsletterBody}
        </p>
        <a
          href={blogPage.newsletterMailto}
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#764aa1] px-8 py-4 font-heading font-bold text-white transition-all duration-300 hover:opacity-90 active:scale-[0.98]"
        >
          <Mail className="size-4" />
          {blogPage.newsletterButton}
        </a>
      </div>
    </main>
  )
}
