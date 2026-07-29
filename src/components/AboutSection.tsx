import { Link } from 'react-router-dom'
import { Users } from 'lucide-react'
import { PageHeading } from '@/components/shared/page-primitives'
import { aboutTeaser } from '@/data/content'

export function AboutSection() {
  return (
    <section id="about" className="py-32 px-6 lg:px-8 overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Visual — shows second on mobile */}
        <div className="relative order-2 lg:order-1">
          <div className="rounded-2xl shadow-lg w-full aspect-square overflow-hidden">
            <img
              src={aboutTeaser.image}
              alt="Talio"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Text — shows first on mobile */}
        <div className="order-1 lg:order-2">
          <span className="text-[#764aa1] font-bold tracking-widest uppercase text-xs">
            {aboutTeaser.eyebrow}
          </span>
          <PageHeading as="h2" className="mt-4 mb-8 text-4xl leading-tight lg:text-5xl">
            {aboutTeaser.heading}
          </PageHeading>
          <p className="text-lg text-[#43474f] mb-10 leading-relaxed">{aboutTeaser.body}</p>
          <Link to="/om-os">
            <div className="flex items-center gap-4 cursor-pointer group">
              <div className="w-12 h-12 rounded-full bg-[#cf9ffe]/30 flex items-center justify-center shrink-0 group-hover:bg-[#cf9ffe]/50 transition-colors">
                <Users className="text-[#764aa1] size-6" strokeWidth={1.5} />
              </div>
              <div>
                <p className="font-bold text-[#001430]">{aboutTeaser.teamLinkLabel}</p>
                <p className="text-sm text-[#43474f]">{aboutTeaser.teamLinkSubtitle}</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
