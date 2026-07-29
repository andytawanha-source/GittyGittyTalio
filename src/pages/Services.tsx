import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { ServiceIcon } from '@/lib/icons'
import { PageHeading, SectionBadge } from '@/components/shared/page-primitives'
import { services } from '@/data/services'
import { servicesTeaser } from '@/data/content'

export function Services() {
  return (
    <main className="pt-44 pb-32 px-6 lg:px-8 bg-[#f7f9fb]">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-20">
          <SectionBadge className="mb-6">Services</SectionBadge>
          <PageHeading className="mb-6 text-5xl leading-[1.1] md:text-6xl">
            {servicesTeaser.heading}
          </PageHeading>
          <p className="text-lg text-[#43474f] leading-relaxed">{servicesTeaser.subheading}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.slug}
              className="bg-white p-10 rounded-2xl shadow-sm border border-[#e0e3e5]/60 flex flex-col justify-between"
            >
              <div>
                <ServiceIcon name={service.iconName} className="text-[#764aa1] size-9 mb-6" />
                <PageHeading as="h2" className="mb-4 text-2xl font-bold">
                  {service.title}
                </PageHeading>
                <p className="text-[#43474f]">{service.shortDescription}</p>
              </div>
              <div className="mt-8">
                <Link
                  to={`/services/${service.slug}`}
                  className="text-[#764aa1] font-bold inline-flex items-center gap-2 group text-sm"
                >
                  {servicesTeaser.readMoreLabel}
                  <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
