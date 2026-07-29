import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Phone } from 'lucide-react'
import { contact } from '@/data/content'
import { track } from '@/lib/analytics'

function readConsent(): boolean {
  if (typeof window === 'undefined') return false
  try {
    return window.localStorage.getItem('cookie_consent') !== null
  } catch {
    return true
  }
}

/**
 * Discreet mobile-only sticky CTA bar. Stays hidden while the cookie
 * consent banner is on screen (both are fixed to the bottom edge), so it
 * never covers the banner. It listens for the `talio:cookie-consent-changed`
 * event dispatched by ConsentBanner once the user makes a choice.
 */
export function StickyMobileCta() {
  const [consentResolved, setConsentResolved] = useState(readConsent)

  useEffect(() => {
    const onChange = () => setConsentResolved(true)
    window.addEventListener('talio:cookie-consent-changed', onChange)
    return () => window.removeEventListener('talio:cookie-consent-changed', onChange)
  }, [])

  if (!consentResolved) return null

  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-brand-border bg-white/95 p-3 backdrop-blur-sm md:hidden">
      <div className="flex items-center gap-2">
        <Link
          to="/kontakt"
          className="flex-1 inline-flex items-center justify-center rounded-lg bg-brand-ink px-4 py-3 text-sm font-heading font-bold text-white active:scale-[0.98] transition-transform"
          onClick={() => track('crafts_cta_sticky_click', { placement: 'sticky_primary' })}
        >
          Få et tilbud
        </Link>
        <a
          href={`tel:${contact.phone.replace(/\s+/g, '')}`}
          aria-label={`Ring til Talio på ${contact.phone}`}
          className="inline-flex items-center justify-center rounded-lg border border-brand-border p-3 text-brand-ink active:scale-[0.98] transition-transform"
          onClick={() => track('crafts_phone_click', { placement: 'sticky' })}
        >
          <Phone className="size-5" aria-hidden="true" />
        </a>
      </div>
    </div>
  )
}
