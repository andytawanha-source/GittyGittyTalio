import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { ServiceIcon } from '@/lib/icons'
import { PageHeading } from '@/components/shared/page-primitives'
import { servicesTeaser } from '@/data/content'
import { services } from '@/data/services'

export function ServicesSection() {
  return (
    <section id="services" className="py-32 px-6 lg:px-8 bg-[#f2f4f6]">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-20 text-center">
          <PageHeading as="h2" className="mb-4 text-4xl lg:text-5xl">
            {servicesTeaser.heading}
          </PageHeading>
          <p className="text-[#43474f] max-w-2xl mx-auto">{servicesTeaser.subheading}</p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.slug}
              className="bg-white p-10 rounded-2xl hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between shadow-sm border border-[#e0e3e5]/60"
            >
              <div>
                <ServiceIcon name={service.iconName} className="text-[#764aa1] size-9 mb-6" />
                <PageHeading as="h3" className="mb-4 text-2xl font-bold">
                  {service.title}
                </PageHeading>
                <p className="text-[#43474f] line-clamp-4">{service.shortDescription}</p>
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
    </section>
  )
}
