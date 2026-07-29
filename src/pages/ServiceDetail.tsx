import { Navigate, Link, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { ServiceIcon } from '@/lib/icons'
import { PageHeading, SectionBadge } from '@/components/shared/page-primitives'
import { ctaButtonClasses } from '@/components/shared/page-classes'
import { getServiceBySlug } from '@/data/services'

export function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>()
  const service = slug ? getServiceBySlug(slug) : undefined

  if (!service) {
    return <Navigate to="/404" replace />
  }

  return (
    <main className="pt-44 pb-32 px-6 lg:px-8 bg-[#f7f9fb]">
      <div className="max-w-3xl mx-auto">
        <Link
          to="/services"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#764aa1] mb-10 hover:underline"
        >
          <ArrowLeft className="size-4" />
          Alle services
        </Link>

        <ServiceIcon name={service.iconName} className="text-[#764aa1] size-12 mb-8" />
        <SectionBadge className="mb-6">{service.eyebrow}</SectionBadge>
        <PageHeading className="mb-8 text-4xl leading-[1.1] md:text-5xl">
          {service.heading}
        </PageHeading>

        <p className="text-lg leading-relaxed text-[#43474f] mb-10">{service.intro}</p>

        {service.image && (
          <div className="mb-14 rounded-2xl overflow-hidden shadow-lg">
            <img src={service.image} alt={service.title} className="w-full h-auto object-cover" />
          </div>
        )}

        {service.stats && service.stats.length > 0 && (
          <div className="mb-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {service.stats.map((stat, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 border border-[#e0e3e5]/60 shadow-sm"
              >
                <p className="font-heading font-extrabold text-[#764aa1] text-lg mb-1">
                  {stat.title}
                </p>
                {stat.body && <p className="text-sm text-[#43474f]">{stat.body}</p>}
              </div>
            ))}
          </div>
        )}

        {service.features.length > 0 && (
          <div className="mb-14 flex flex-col gap-8">
            {service.features.map((feature, i) => (
              <div key={i}>
                <h3 className="font-heading text-xl font-bold text-[#001430] mb-2">
                  {feature.title}
                </h3>
                <p className="text-[#43474f] leading-relaxed">{feature.body}</p>
              </div>
            ))}
          </div>
        )}

        {service.process.length > 0 && (
          <div className="mb-14">
            <h2 className="font-heading text-2xl font-extrabold text-[#001430] mb-8">Sådan arbejder vi</h2>
            <div className="flex flex-col gap-8">
              {service.process.map((step, i) => (
                <div key={i} className="flex gap-6">
                  <span className="font-heading text-2xl font-extrabold text-[#764aa1] shrink-0">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-[#001430] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-[#43474f] leading-relaxed">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-14 pt-10 border-t border-[#e0e3e5]">
          {service.closing && (
            <div className="mb-8">
              <h2 className="font-heading text-2xl font-extrabold text-[#001430] mb-3">
                {service.closing.heading}
              </h2>
              <p className="text-[#43474f] leading-relaxed">{service.closing.body}</p>
            </div>
          )}
          <div className="flex flex-wrap gap-4">
            <Link to="/kontakt" className={ctaButtonClasses.primary}>
              {service.ctaPrimaryLabel ?? `Kontakt os om ${service.title.toLowerCase()}`}
            </Link>
            {service.ctaSecondaryLabel && (
              <Link to="/services" className={ctaButtonClasses.secondary}>
                {service.ctaSecondaryLabel}
              </Link>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
