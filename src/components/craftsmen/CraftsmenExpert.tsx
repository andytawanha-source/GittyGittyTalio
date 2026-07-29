import { Link } from 'react-router-dom'
import { Mail } from 'lucide-react'
import { PageHeading, SectionBadge } from '@/components/shared/page-primitives'
import { craftsmenExpert } from '@/data/craftsmen'
import { getTeamMemberBySlug } from '@/data/team'
import { track } from '@/lib/analytics'

export function CraftsmenExpert() {
  const members = craftsmenExpert.memberSlugs
    .map((slug) => getTeamMemberBySlug(slug))
    .filter((m): m is NonNullable<typeof m> => Boolean(m))

  if (members.length === 0) return null

  return (
    <section className="bg-brand-surface-muted px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionBadge className="mb-6">Din kontakt hos Talio</SectionBadge>
        <PageHeading as="h2" className="mb-6 max-w-2xl text-3xl leading-tight sm:text-4xl lg:text-5xl">
          {craftsmenExpert.heading}
        </PageHeading>
        <p className="mb-14 max-w-2xl text-lg leading-relaxed text-brand-copy">{craftsmenExpert.body}</p>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {members.map((member) => (
            <div key={member.slug} className="rounded-2xl bg-white p-8 shadow-sm border border-brand-border/60 flex flex-col">
              <div className="mb-6 flex items-center gap-4">
                <img
                  src={member.photo}
                  alt={member.name}
                  width={96}
                  height={96}
                  loading="lazy"
                  className="size-20 rounded-full object-cover"
                />
                <div>
                  <p className="font-heading text-lg font-bold text-brand-ink">{member.name}</p>
                  <p className="text-sm text-brand-copy">{member.role}</p>
                </div>
              </div>

              <p className="mb-6 flex-1 text-brand-copy leading-relaxed line-clamp-4">{member.bio}</p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to={`/team/${member.slug}`}
                  className="text-sm font-bold text-brand-accent hover:underline"
                >
                  Se profil
                </Link>
                <a
                  href="/kontakt"
                  className="inline-flex items-center gap-2 text-sm font-bold text-brand-ink hover:text-brand-accent"
                  onClick={() => track('crafts_cta_midpage_click', { placement: `expert_${member.slug}` })}
                >
                  <Mail className="size-4" aria-hidden="true" />
                  Tal med {member.name.split(' ')[0]}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
