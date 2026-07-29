import { Link } from 'react-router-dom'
import { PageHeading, SectionBadge } from '@/components/shared/page-primitives'
import { ctaButtonClasses } from '@/components/shared/page-classes'
import { aboutPage } from '@/data/content'
import { team } from '@/data/team'

export function About() {
  return (
    <main className="pt-44 pb-32 px-6 lg:px-8 bg-[#f7f9fb]">
      <div className="max-w-6xl mx-auto mb-28 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <SectionBadge className="mb-6">{aboutPage.eyebrow}</SectionBadge>
          <PageHeading className="mb-8 text-5xl leading-[1.1] md:text-6xl">
            {aboutPage.heading}
          </PageHeading>
          <p className="text-lg text-[#43474f] leading-relaxed">{aboutPage.body}</p>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-lg aspect-[4/5]">
          <img
            src={aboutPage.heroImage}
            alt={aboutPage.heroImageAlt}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="max-w-5xl mx-auto mb-28">
        <span className="text-[#764aa1] font-bold tracking-widest uppercase text-xs">
          {aboutPage.teamEyebrow}
        </span>
        <PageHeading as="h2" className="mt-4 mb-10 text-3xl md:text-4xl">
          {aboutPage.teamHeading}
        </PageHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {team.map((member) => (
            <Link
              key={member.slug}
              to={`/team/${member.slug}`}
              className="bg-white rounded-2xl p-8 shadow-sm border border-[#e0e3e5]/60 hover:shadow-md transition-shadow flex gap-6 items-start"
            >
              <img
                src={member.photo}
                alt={member.name}
                className="w-20 h-20 rounded-xl object-cover shrink-0"
              />
              <div>
                <h3 className="font-heading text-xl font-bold text-[#001430] mb-1">
                  {member.name}
                </h3>
                <p className="text-sm font-semibold text-[#764aa1] mb-4">{member.role}</p>
                <p className="text-sm text-[#43474f] leading-relaxed line-clamp-4">{member.bio}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto text-center">
        <PageHeading as="h2" className="mb-6 text-4xl">
          {aboutPage.closingHeading}
        </PageHeading>
        <p className="text-lg text-[#43474f] mb-10 leading-relaxed max-w-2xl mx-auto">
          {aboutPage.closingBody}
        </p>
        <Link to="/kontakt" className={ctaButtonClasses.primary}>
          {aboutPage.closingButton}
        </Link>
      </div>
    </main>
  )
}
