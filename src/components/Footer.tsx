import { Link } from 'react-router-dom'
import { socialPlatformIcon, socialPlatformLabel } from '@/lib/icons'
import { footer as footerCopy, socialLinks, contact } from '@/data/content'

export function Footer() {
  const legal = [
    { label: footerCopy.privacy, to: '/privatlivspolitik' },
    { label: footerCopy.terms, to: '/handelsbetingelser' },
    { label: footerCopy.cookies, to: '/cookiepolitik' },
  ]

  return (
    <footer className="bg-[#001430] text-[#f7f9fb] pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="md:col-span-1">
          <div className="mb-6">
            <img src="/logo.svg" alt="Talio" className="h-10 w-auto brightness-0 invert" />
          </div>
          <p className="text-[#f7f9fb]/50 text-sm leading-relaxed">{footerCopy.tagline}</p>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="text-xs uppercase tracking-widest text-white font-bold mb-6">
            {footerCopy.quickLinks}
          </h4>
          <ul className="space-y-4">
            <li>
              <Link
                to="/"
                className="text-[#f7f9fb]/50 hover:text-[#764aa1] transition-all duration-300 inline-block hover:translate-x-1 text-sm"
              >
                {footerCopy.home}
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="text-[#f7f9fb]/50 hover:text-[#764aa1] transition-all duration-300 inline-block hover:translate-x-1 text-sm"
              >
                {footerCopy.services}
              </Link>
            </li>
            <li>
              <Link
                to="/om-os"
                className="text-[#f7f9fb]/50 hover:text-[#764aa1] transition-all duration-300 inline-block hover:translate-x-1 text-sm"
              >
                {footerCopy.about}
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="text-[#f7f9fb]/50 hover:text-[#764aa1] transition-all duration-300 inline-block hover:translate-x-1 text-sm"
              >
                {footerCopy.blog}
              </Link>
            </li>
            <li>
              <Link
                to="/kontakt"
                className="text-[#f7f9fb]/50 hover:text-[#764aa1] transition-all duration-300 inline-block hover:translate-x-1 text-sm"
              >
                {footerCopy.contact}
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="text-xs uppercase tracking-widest text-white font-bold mb-6">
            {footerCopy.legal}
          </h4>
          <ul className="space-y-4">
            {legal.map(({ label, to }) => (
              <li key={label}>
                <Link
                  to={to}
                  className="text-[#f7f9fb]/50 hover:text-[#764aa1] transition-all duration-300 inline-block hover:translate-x-1 text-sm"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social */}
        {socialLinks.length > 0 && (
          <div>
            <h4 className="text-xs uppercase tracking-widest text-white font-bold mb-6">
              {footerCopy.followUs}
            </h4>
            <ul className="space-y-4">
              {socialLinks.map((link) => {
                const Icon = socialPlatformIcon(link.platform)
                return (
                  <li key={link.platform}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#f7f9fb]/50 hover:text-[#764aa1] transition-all duration-300 inline-flex items-center gap-2.5 hover:translate-x-1 text-sm"
                    >
                      <Icon className="size-4 shrink-0" />
                      {socialPlatformLabel(link.platform)}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        )}
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-20 pt-8 border-t border-white/5 text-center">
        <p className="text-white text-xs uppercase tracking-[0.2em]">{footerCopy.copyright}</p>
        {contact.cvr && <p className="text-white text-xs mt-2 tracking-wide">CVR: {contact.cvr}</p>}
      </div>
    </footer>
  )
}
