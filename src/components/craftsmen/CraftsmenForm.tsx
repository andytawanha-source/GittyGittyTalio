import { useRef, useState, type FormEvent } from 'react'
import { Send, ArrowLeft, CheckCircle2, AlertCircle } from 'lucide-react'
import { PageHeading, SectionBadge } from '@/components/shared/page-primitives'
import { craftsmenFormCopy } from '@/data/craftsmen'
import { contact } from '@/data/content'
import { track } from '@/lib/analytics'
import { cn } from '@/lib/utils'

type Step = 1 | 2
type Status = 'idle' | 'submitting' | 'success' | 'error'

interface FormState {
  trade: string
  employees: string
  needs: string[]
  name: string
  company: string
  phone: string
  email: string
  note: string
}

const initialState: FormState = {
  trade: '',
  employees: '',
  needs: [],
  name: '',
  company: '',
  phone: '',
  email: '',
  note: '',
}

function buildMailto(state: FormState) {
  const subject = encodeURIComponent(`Tilbud på bogføring – ${state.company || state.name || 'håndværkerfirma'}`)
  const lines = [
    `Navn: ${state.name}`,
    `Virksomhed: ${state.company}`,
    `Telefon: ${state.phone}`,
    `E-mail: ${state.email}`,
    `Fag: ${state.trade}`,
    `Antal ansatte: ${state.employees}`,
    `Hjælp til: ${state.needs.join(', ') || 'Ikke angivet'}`,
    '',
    'Besked:',
    state.note || '(ingen yderligere besked)',
  ]
  const body = encodeURIComponent(lines.join('\n'))
  return `mailto:${contact.email}?subject=${subject}&body=${body}`
}

export function CraftsmenForm() {
  const [step, setStep] = useState<Step>(1)
  const [status, setStatus] = useState<Status>('idle')
  const [state, setState] = useState<FormState>(initialState)
  const hasStarted = useRef(false)

  function markStarted() {
    if (!hasStarted.current) {
      hasStarted.current = true
      track('crafts_form_start')
    }
  }

  function toggleNeed(option: string) {
    markStarted()
    setState((prev) => ({
      ...prev,
      needs: prev.needs.includes(option) ? prev.needs.filter((n) => n !== option) : [...prev.needs, option],
    }))
  }

  function goToStep2(e: FormEvent) {
    e.preventDefault()
    if (!state.trade || !state.employees) return
    track('crafts_form_step_complete', { step: 1 })
    setStep(2)
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!state.name || !state.company || !state.phone || !state.email) return

    setStatus('submitting')
    track('crafts_form_submit')

    try {
      const url = buildMailto(state)
      window.location.href = url
      // We cannot observe whether the user's mail client actually sent the
      // message (no backend endpoint exists in this project — see project
      // README for the safest available contact mechanism). We optimistically
      // show success once the mailto link has been triggered.
      window.setTimeout(() => {
        setStatus('success')
        track('crafts_form_success')
      }, 600)
    } catch {
      setStatus('error')
      track('crafts_form_error')
    }
  }

  if (status === 'success') {
    return (
      <div className="mx-auto max-w-xl rounded-2xl border border-brand-border/60 bg-white p-10 text-center shadow-sm">
        <CheckCircle2 className="mx-auto mb-4 size-12 text-brand-accent" aria-hidden="true" />
        <h3 className="mb-2 font-heading text-2xl font-bold text-brand-ink">{craftsmenFormCopy.successHeading}</h3>
        <p className="text-brand-copy leading-relaxed">{craftsmenFormCopy.successBody}</p>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-xl rounded-2xl border border-brand-border/60 bg-white p-8 shadow-sm sm:p-10">
      {status === 'error' && (
        <div role="alert" className="mb-6 flex items-start gap-3 rounded-xl bg-red-50 p-4 text-sm text-red-800">
          <AlertCircle className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
          <div>
            <p className="font-semibold">{craftsmenFormCopy.errorHeading}</p>
            <p>{craftsmenFormCopy.errorBody}</p>
          </div>
        </div>
      )}

      <div className="mb-8 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-copy/50">
        <span className={cn(step === 1 && 'text-brand-accent')}>1. {craftsmenFormCopy.step1Heading}</span>
        <span aria-hidden="true">—</span>
        <span className={cn(step === 2 && 'text-brand-accent')}>2. {craftsmenFormCopy.step2Heading}</span>
      </div>

      {step === 1 && (
        <form onSubmit={goToStep2} className="flex flex-col gap-6" onFocus={markStarted}>
          <div>
            <label htmlFor="trade" className="mb-2 block text-sm font-semibold text-brand-ink">
              {craftsmenFormCopy.tradeLabel}
            </label>
            <select
              id="trade"
              name="trade"
              required
              value={state.trade}
              onChange={(e) => setState((p) => ({ ...p, trade: e.target.value }))}
              className="w-full rounded-lg border border-brand-border px-4 py-3 text-sm text-brand-ink focus:outline-none focus:ring-2 focus:ring-brand-accent"
            >
              <option value="" disabled>
                Vælg fag
              </option>
              {craftsmenFormCopy.tradeOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div>
            <span className="mb-2 block text-sm font-semibold text-brand-ink">{craftsmenFormCopy.employeesLabel}</span>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {craftsmenFormCopy.employeesOptions.map((option) => (
                <label
                  key={option}
                  className={cn(
                    'flex cursor-pointer items-center justify-center rounded-lg border px-3 py-3 text-sm font-medium transition-colors',
                    state.employees === option
                      ? 'border-brand-accent bg-brand-accent-soft/20 text-brand-accent-dark'
                      : 'border-brand-border text-brand-copy hover:border-brand-accent/50',
                  )}
                >
                  <input
                    type="radio"
                    name="employees"
                    value={option}
                    checked={state.employees === option}
                    onChange={(e) => setState((p) => ({ ...p, employees: e.target.value }))}
                    className="sr-only"
                    required
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>

          <fieldset>
            <legend className="mb-2 block text-sm font-semibold text-brand-ink">{craftsmenFormCopy.needLabel}</legend>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {craftsmenFormCopy.needOptions.map((option) => (
                <label
                  key={option}
                  className={cn(
                    'flex cursor-pointer items-center gap-2 rounded-lg border px-3 py-3 text-sm font-medium transition-colors',
                    state.needs.includes(option)
                      ? 'border-brand-accent bg-brand-accent-soft/20 text-brand-accent-dark'
                      : 'border-brand-border text-brand-copy hover:border-brand-accent/50',
                  )}
                >
                  <input
                    type="checkbox"
                    checked={state.needs.includes(option)}
                    onChange={() => toggleNeed(option)}
                    className="size-4 accent-[#764aa1]"
                  />
                  {option}
                </label>
              ))}
            </div>
          </fieldset>

          <button
            type="submit"
            disabled={!state.trade || !state.employees}
            className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand-ink px-8 py-4 font-heading font-bold text-white transition-all duration-300 hover:opacity-90 active:scale-[0.98] disabled:opacity-40 disabled:active:scale-100"
          >
            {craftsmenFormCopy.nextLabel}
          </button>
        </form>
      )}

      {step === 2 && (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <button
            type="button"
            onClick={() => setStep(1)}
            className="mb-2 inline-flex items-center gap-2 self-start text-sm font-semibold text-brand-accent hover:underline"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            {craftsmenFormCopy.backLabel}
          </button>

          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-semibold text-brand-ink">
              {craftsmenFormCopy.nameLabel}
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              value={state.name}
              onChange={(e) => setState((p) => ({ ...p, name: e.target.value }))}
              className="w-full rounded-lg border border-brand-border px-4 py-3 text-sm text-brand-ink focus:outline-none focus:ring-2 focus:ring-brand-accent"
            />
          </div>

          <div>
            <label htmlFor="company" className="mb-2 block text-sm font-semibold text-brand-ink">
              {craftsmenFormCopy.companyLabel}
            </label>
            <input
              id="company"
              name="company"
              type="text"
              autoComplete="organization"
              required
              value={state.company}
              onChange={(e) => setState((p) => ({ ...p, company: e.target.value }))}
              className="w-full rounded-lg border border-brand-border px-4 py-3 text-sm text-brand-ink focus:outline-none focus:ring-2 focus:ring-brand-accent"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-brand-ink">
                {craftsmenFormCopy.phoneLabel}
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                required
                value={state.phone}
                onChange={(e) => setState((p) => ({ ...p, phone: e.target.value }))}
                className="w-full rounded-lg border border-brand-border px-4 py-3 text-sm text-brand-ink focus:outline-none focus:ring-2 focus:ring-brand-accent"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-semibold text-brand-ink">
                {craftsmenFormCopy.emailLabel}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={state.email}
                onChange={(e) => setState((p) => ({ ...p, email: e.target.value }))}
                className="w-full rounded-lg border border-brand-border px-4 py-3 text-sm text-brand-ink focus:outline-none focus:ring-2 focus:ring-brand-accent"
              />
            </div>
          </div>

          <div>
            <label htmlFor="note" className="mb-2 block text-sm font-semibold text-brand-ink">
              {craftsmenFormCopy.noteLabel}
            </label>
            <textarea
              id="note"
              name="note"
              rows={3}
              value={state.note}
              onChange={(e) => setState((p) => ({ ...p, note: e.target.value }))}
              className="w-full rounded-lg border border-brand-border px-4 py-3 text-sm text-brand-ink focus:outline-none focus:ring-2 focus:ring-brand-accent"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'submitting'}
            className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand-accent px-8 py-4 font-heading font-bold text-white transition-all duration-300 hover:opacity-90 active:scale-[0.98] disabled:opacity-60"
          >
            <Send className="size-4" aria-hidden="true" />
            {status === 'submitting' ? craftsmenFormCopy.submittingLabel : craftsmenFormCopy.submitLabel}
          </button>

          <p className="text-center text-xs text-brand-copy/60">
            {craftsmenFormCopy.microcopy}{' '}
            <a href="/privatlivspolitik" className="underline hover:text-brand-accent">
              Privatlivspolitik
            </a>
            .
          </p>
        </form>
      )}
    </div>
  )
}

export function CraftsmenFormSection() {
  return (
    <section id="tilbud" className="bg-brand-surface px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-3xl text-center mb-12">
        <SectionBadge className="mb-6">Få et tilbud</SectionBadge>
        <PageHeading as="h2" className="mb-4 text-3xl leading-tight sm:text-4xl lg:text-5xl">
          Få et tilbud på bogføringen
        </PageHeading>
        <p className="text-lg text-brand-copy leading-relaxed">
          Udfyld formularen, så vender vi tilbage med et konkret forslag til din virksomhed.
        </p>
      </div>
      <CraftsmenForm />
    </section>
  )
}
