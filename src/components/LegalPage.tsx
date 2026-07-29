import { Link } from 'react-router-dom'
import { PageHeading } from '@/components/shared/page-primitives'

interface LegalSection {
  heading?: string
  paragraphs: string[]
}

interface LegalPageProps {
  title: string
  badge?: string
  lastUpdated?: string
  version?: string
  sections: LegalSection[]
}

export function LegalPage({ title, badge, lastUpdated, version, sections }: LegalPageProps) {
  return (
    <main className="pt-44 pb-32 px-6 lg:px-8 bg-[#f7f9fb]">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <header className="mb-16 border-b border-[#c4c6d0] pb-12">
          {badge && (
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#f0dbff] text-[#2c0051] rounded-full text-[10px] font-bold tracking-widest uppercase mb-6">
              {badge}
            </div>
          )}
          <PageHeading as="h1" className="mb-8 text-5xl leading-[1.1] tracking-tighter md:text-6xl">
            {title}
          </PageHeading>
          {(lastUpdated || version) && (
            <div className="flex flex-wrap items-center gap-6 text-[#43474f] text-sm">
              {lastUpdated && <span>Sidst opdateret: {lastUpdated}</span>}
              {version && <span>{version}</span>}
            </div>
          )}
        </header>

        {/* Content body */}
        <div className="text-lg">
          {sections.map((section, i) => (
            <div key={i}>
              {section.heading && (
                <h2 className="mt-14 mb-6 text-3xl font-extrabold tracking-tight text-[#001430]">
                  {section.heading}
                </h2>
              )}
              {section.paragraphs.map((p, j) => (
                <p key={j} className="mb-6 leading-relaxed text-[#43474f]">
                  {p}
                </p>
              ))}
            </div>
          ))}
        </div>

        {/* Footer action */}
        <div className="mt-20 pt-10 border-t border-[#c4c6d0] flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-sm text-[#43474f] italic">
            Er du i tvivl om noget? Vi sidder klar til at hjælpe.
          </p>
          <Link
            to="/kontakt"
            className="px-6 py-2.5 text-sm font-bold text-[#764aa1] border border-[#764aa1] rounded-lg hover:bg-[#764aa1] hover:text-white transition-all"
          >
            Kontakt os
          </Link>
        </div>
      </div>
    </main>
  )
}
