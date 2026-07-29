import { Link } from 'react-router-dom'
import { ArrowRight, AtSign } from 'lucide-react'
import { PageHeading } from '@/components/shared/page-primitives'
import { notFound } from '@/data/content'

export function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 lg:px-8 relative overflow-hidden bg-[#f7f9fb]">
      {/* Decorative radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] opacity-10 pointer-events-none select-none">
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#764aa1]/40 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-4xl w-full flex flex-col md:flex-row items-center gap-16 md:gap-24">
        <div className="flex-1 order-2 md:order-1">
          <div className="relative group">
            <h1 className="font-heading font-extrabold text-[10rem] md:text-[14rem] leading-none tracking-tighter text-[#001430]/5 select-none transition-all duration-700 group-hover:text-[#001430]/10">
              404
            </h1>

            <div className="absolute inset-0 flex flex-col justify-center">
              <div className="h-px w-24 bg-[#764aa1] mb-8 opacity-60" />
              <PageHeading as="h2" className="mb-6 text-4xl md:text-6xl">
                {notFound.heading}
              </PageHeading>
              <p className="text-[#43474f] text-lg md:text-xl leading-relaxed max-w-md">
                {notFound.body}
              </p>
            </div>
          </div>

          <div className="mt-12 flex flex-col md:flex-row md:items-center gap-10">
            <Link
              to="/"
              className="font-heading px-8 py-3 bg-[#001430] text-white font-bold rounded-lg shadow-xl shadow-[#001430]/10 hover:bg-[#001430]/90 hover:shadow-2xl hover:shadow-[#001430]/20 transition-all duration-300 active:scale-95 whitespace-nowrap text-center"
            >
              {notFound.goHome}
            </Link>

            <div className="flex flex-row flex-wrap items-center gap-x-10 gap-y-4">
              <Link
                to="/services"
                className="group flex items-center gap-2 text-[#001430] font-semibold hover:text-[#764aa1] transition-colors duration-300"
              >
                <span className="border-b-2 border-transparent group-hover:border-[#764aa1] transition-all">
                  {notFound.viewServices}
                </span>
                <ArrowRight className="size-4 text-[#764aa1] group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/kontakt"
                className="group flex items-center gap-2 text-[#001430] font-semibold hover:text-[#764aa1] transition-colors duration-300"
              >
                <span className="border-b-2 border-transparent group-hover:border-[#764aa1] transition-all">
                  {notFound.contactUs}
                </span>
                <AtSign className="size-4 text-[#764aa1] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Right — decorative visual */}
        <div className="hidden md:block flex-1 order-1 md:order-2">
          <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-2xl shadow-[#001430]/5">
            <div className="w-full h-full bg-gradient-to-br from-[#001430]/10 to-[#764aa1]/10 flex items-center justify-center">
              <span className="font-heading text-[#001430]/20 text-9xl font-black select-none">
                ?
              </span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-tr from-[#001430]/20 to-transparent mix-blend-multiply" />
          </div>
        </div>
      </div>
    </main>
  )
}
