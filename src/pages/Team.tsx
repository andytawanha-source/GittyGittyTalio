import { Navigate, Link, useParams } from 'react-router-dom'
import { ArrowLeft, Mail, Linkedin, Quote } from 'lucide-react'
import { PageHeading } from '@/components/shared/page-primitives'
import { getTeamMemberBySlug } from '@/data/team'

export function Team() {
  const { slug } = useParams<{ slug: string }>()
  const member = slug ? getTeamMemberBySlug(slug) : undefined

  if (!member) {
    return <Navigate to="/404" replace />
  }

  return (
    <main className="pt-44 pb-32 px-6 lg:px-8 bg-[#f7f9fb]">
      <div className="max-w-3xl mx-auto">
        <Link
          to="/om-os"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#764aa1] mb-10 hover:underline"
        >
          <ArrowLeft className="size-4" />
          Om os
        </Link>

        <div className="flex flex-col sm:flex-row gap-8 items-start mb-10">
          <img
            src={member.photo}
            alt={member.name}
            className="w-40 h-40 rounded-2xl object-cover shrink-0 shadow-lg"
          />
          <div>
            <PageHeading className="mb-2 text-4xl md:text-5xl">{member.name}</PageHeading>
            <p className="text-lg font-semibold text-[#764aa1] mb-4">{member.role}</p>
            <div className="flex flex-col gap-2 text-sm text-[#43474f]">
              <a
                href={`mailto:${member.email}`}
                className="inline-flex items-center gap-2 hover:text-[#764aa1] transition-colors"
              >
                <Mail className="size-4" />
                {member.email}
              </a>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-[#764aa1] transition-colors"
              >
                <Linkedin className="size-4" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <p className="text-lg text-[#43474f] leading-relaxed mb-10">{member.bio}</p>

        {member.specialty && (
          <div className="mb-10 bg-white rounded-xl p-6 border border-[#e0e3e5]/60 shadow-sm">
            <h3 className="font-heading text-lg font-bold text-[#001430] mb-2">
              {member.specialty.title}
            </h3>
            <p className="text-[#43474f] leading-relaxed">{member.specialty.body}</p>
          </div>
        )}

        <blockquote className="border-l-4 border-[#764aa1] pl-6 py-2 mb-10">
          <Quote className="text-[#764aa1] size-8 mb-3" strokeWidth={1.5} />
          <p className="text-xl italic text-[#001430] leading-relaxed">{member.quote}</p>
        </blockquote>

        {member.secondaryImage && (
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img src={member.secondaryImage} alt="" className="w-full h-auto object-cover" />
          </div>
        )}
      </div>
    </main>
  )
}
