import { useState } from 'react'
import { Link } from 'react-router-dom'
import { cookieConsent } from '@/data/content'

type ConsentState = 'accepted' | 'rejected' | null

function readStoredConsent(): ConsentState {
  if (typeof window === 'undefined') return null
  try {
    const stored = window.localStorage.getItem('cookie_consent')
    return stored === 'accepted' || stored === 'rejected' ? stored : null
  } catch {
    return null
  }
}

function storeConsent(value: Exclude<ConsentState, null>) {
  try {
    window.localStorage.setItem('cookie_consent', value)
  } catch {
    // Consent state still updates for this session if storage is unavailable.
  }
}

export function CookieBanner() {
  const [consent, setConsent] = useState<ConsentState>(readStoredConsent)

  const accept = () => {
    storeConsent('accepted')
    setConsent('accepted')
    window.dispatchEvent(new Event('talio:cookie-consent-changed'))
  }

  const reject = () => {
    storeConsent('rejected')
    setConsent('rejected')
    window.dispatchEvent(new Event('talio:cookie-consent-changed'))
  }

  if (consent !== null) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 pointer-events-none">
      <div className="max-w-2xl mx-auto bg-[#001430] rounded-xl shadow-2xl border border-white/10 p-5 md:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 pointer-events-auto">
        <div className="flex-1 min-w-0">
          <p className="font-heading text-white font-bold text-sm mb-1">{cookieConsent.heading}</p>
          <p className="text-slate-300 text-sm leading-relaxed">
            {cookieConsent.body}{' '}
            <Link
              to="/cookiepolitik"
              className="text-[#cf9ffe] underline hover:text-white transition-colors"
            >
              Læs mere
            </Link>
          </p>
        </div>
        <div className="flex gap-2 shrink-0">
          <button
            onClick={reject}
            className="px-4 py-2 rounded-lg border border-white/20 text-white text-sm font-medium hover:bg-white/10 transition-colors"
          >
            {cookieConsent.rejectLabel}
          </button>
          <button
            onClick={accept}
            className="px-4 py-2 rounded-lg bg-[#764aa1] text-white text-sm font-bold hover:bg-[#6b3f94] transition-colors"
          >
            {cookieConsent.acceptLabel}
          </button>
        </div>
      </div>
    </div>
  )
}
