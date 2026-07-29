import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ServiceIcon } from '@/lib/icons'
import { cn } from '@/lib/utils'
import { nav as navCopy } from '@/data/content'
import { services } from '@/data/services'

export function Navbar() {
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const linkClass = (path: string) =>
    cn(
      'text-sm font-semibold transition-colors duration-200 pb-0.5',
      location.pathname === path
        ? 'text-[#764aa1] border-b-2 border-[#764aa1]'
        : 'text-[#001430]/60 hover:text-[#764aa1]',
    )

  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-50 w-full transition-all duration-300 backdrop-blur-xl',
          scrolled ? 'bg-[#f7f9fb]/95 shadow-sm' : 'bg-[#f7f9fb]/70',
        )}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src="/logo.svg" alt="Talio" className="h-10 w-auto" />
          </Link>

          {/* Nav links — desktop */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className={linkClass('/')}>
              {navCopy.home}
            </Link>

            {/* Services — link + hover dropdown */}
            <div className="relative group h-16 flex items-center">
              <Link
                to="/services"
                className="flex items-center gap-1 text-sm font-semibold text-[#001430]/60 hover:text-[#764aa1] transition-colors duration-200"
              >
                {navCopy.services}
                <ChevronDown className="size-3.5 transition-transform duration-200 group-hover:rotate-180" />
              </Link>

              <div className="absolute top-full left-1/2 -translate-x-1/2 w-80 invisible opacity-0 translate-y-1 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 pointer-events-none group-hover:pointer-events-auto">
                <div className="bg-white rounded-xl shadow-2xl border border-[#001430]/5 p-4 flex flex-col gap-1">
                  <div className="px-3 py-2 mb-1">
                    <h3 className="font-heading text-xs font-bold uppercase tracking-widest text-[#001430]/40">
                      Services
                    </h3>
                    <p className="text-[10px] text-[#43474f]/60 mt-0.5">
                      Professionelle løsninger til din virksomhed
                    </p>
                  </div>

                  {services.map((s, i) => (
                    <Link
                      key={s.slug}
                      to={`/services/${s.slug}`}
                      className={cn(
                        'flex items-center gap-4 p-3 rounded-lg transition-all duration-150 hover:translate-x-1 group/item',
                        i === 0
                          ? 'bg-[#764aa1]/10 text-[#764aa1]'
                          : 'text-[#43474f] hover:text-[#001430] hover:bg-[#f2f4f6]',
                      )}
                    >
                      <div
                        className={cn(
                          'w-10 h-10 rounded-lg flex items-center justify-center shrink-0',
                          i === 0 ? 'bg-white shadow-sm' : 'bg-[#eceef0]',
                        )}
                      >
                        <ServiceIcon name={s.iconName} className="size-4" />
                      </div>
                      <div>
                        <div className="font-heading text-sm font-bold">{s.title}</div>
                      </div>
                    </Link>
                  ))}

                  <hr className="my-2 border-[#001430]/5" />

                  <Link
                    to="/services"
                    className="font-heading flex items-center justify-center gap-2 py-2 text-xs font-bold text-[#764aa1] hover:underline"
                  >
                    Se alle services
                    <ArrowRight className="size-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            <Link to="/om-os" className={linkClass('/om-os')}>
              {navCopy.about}
            </Link>

            <Link to="/blog" className={linkClass('/blog')}>
              {navCopy.blog}
            </Link>

            <Link to="/kontakt" className={linkClass('/kontakt')}>
              {navCopy.contact}
            </Link>
          </div>

          {/* Right side — desktop */}
          <div className="hidden md:flex items-center gap-3">
            <Link to="/kontakt">
              <Button className="bg-[#001430] text-white hover:bg-[#001430]/90 rounded-lg px-5 h-9 text-sm font-semibold">
                {navCopy.cta}
              </Button>
            </Link>
          </div>

          {/* Hamburger — mobile only */}
          <button
            className="md:hidden p-2 rounded-lg text-[#001430] hover:bg-[#001430]/5 transition-colors"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-[#001430]/20 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />

          <div className="absolute top-0 left-0 right-0 bg-[#f7f9fb] shadow-2xl pt-20 pb-8 px-6 flex flex-col gap-1">
            <Link
              to="/"
              className="font-heading flex items-center py-3 px-3 rounded-lg text-[#001430] font-semibold hover:bg-[#001430]/5 transition-colors"
            >
              {navCopy.home}
            </Link>

            <div>
              <Link
                to="/services"
                className="font-heading flex items-center py-3 px-3 rounded-lg text-[#001430] font-semibold hover:bg-[#001430]/5 transition-colors"
              >
                {navCopy.services}
              </Link>
              <div className="pl-4 mt-1 flex flex-col gap-1">
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    to={`/services/${s.slug}`}
                    className="flex items-center gap-3 py-2 px-3 rounded-lg text-sm text-[#001430]/70 hover:bg-[#001430]/5 hover:text-[#764aa1] transition-colors"
                  >
                    <ServiceIcon name={s.iconName} className="size-4 text-[#764aa1]" />
                    {s.title}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              to="/om-os"
              className="font-heading flex items-center py-3 px-3 rounded-lg text-[#001430] font-semibold hover:bg-[#001430]/5 transition-colors"
            >
              {navCopy.about}
            </Link>

            <Link
              to="/blog"
              className="font-heading flex items-center py-3 px-3 rounded-lg text-[#001430] font-semibold hover:bg-[#001430]/5 transition-colors"
            >
              {navCopy.blog}
            </Link>

            <Link
              to="/kontakt"
              className="font-heading flex items-center py-3 px-3 rounded-lg text-[#001430] font-semibold hover:bg-[#001430]/5 transition-colors"
            >
              {navCopy.contact}
            </Link>

            <hr className="my-3 border-[#001430]/10" />

            <div className="px-3">
              <Link to="/kontakt">
                <Button className="bg-[#001430] text-white hover:bg-[#001430]/90 rounded-lg px-5 h-9 text-sm font-semibold w-full">
                  {navCopy.cta}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
