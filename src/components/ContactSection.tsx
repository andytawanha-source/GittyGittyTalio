import { useState } from 'react'
import { Mail, Phone, MapPin, FileBadge, Send } from 'lucide-react'
import { ctaButtonClasses } from '@/components/shared/page-classes'
import { PageHeading, SectionBadge } from '@/components/shared/page-primitives'
import { contactPage, contact } from '@/data/content'

export function ContactSection() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const subject = encodeURIComponent(`Henvendelse fra ${name || 'hjemmesiden'}`)
    const body = encodeURIComponent(`Navn: ${name}\nEmail: ${email}\n\nBesked:\n${message}`)
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="py-32 px-6 lg:px-8 bg-[#f7f9fb]">
      <div className="mx-auto max-w-3xl text-center mb-16">
        <SectionBadge className="mb-6">{contactPage.eyebrow}</SectionBadge>
        <PageHeading className="mb-6 text-5xl leading-[1.1] md:text-6xl">
          {contactPage.heading}
        </PageHeading>
        <p className="text-lg text-[#43474f] leading-relaxed">{contactPage.body}</p>
        <div className="inline-flex items-center gap-2 mt-8 px-4 py-2 rounded-full bg-[#cf9ffe]/20 text-[#5b2f86] text-sm font-semibold">
          {contactPage.responseBadge}
        </div>
      </div>

      <div className="mx-auto max-w-5xl bg-white rounded-3xl overflow-hidden shadow-[0_20px_40px_rgba(0,20,48,0.06)] grid grid-cols-1 md:grid-cols-2">
        {/* Form */}
        <div className="p-12 lg:p-16 flex flex-col justify-center">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              required
              type="text"
              placeholder={contactPage.formNameLabel}
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="rounded-lg border border-[#e0e3e5] px-4 py-3 text-sm text-[#001430] focus:outline-none focus:ring-2 focus:ring-[#764aa1]"
            />
            <input
              required
              type="email"
              placeholder={contactPage.formEmailLabel}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-lg border border-[#e0e3e5] px-4 py-3 text-sm text-[#001430] focus:outline-none focus:ring-2 focus:ring-[#764aa1]"
            />
            <textarea
              required
              placeholder={contactPage.formMessageLabel}
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="rounded-lg border border-[#e0e3e5] px-4 py-3 text-sm text-[#001430] focus:outline-none focus:ring-2 focus:ring-[#764aa1]"
            />
            <button type="submit" className={`${ctaButtonClasses.accent} w-full`}>
              <Send className="size-4" />
              {contactPage.formSubmitLabel}
            </button>
          </form>
        </div>

        {/* Office info */}
        <div className="relative bg-gradient-to-br from-[#001430] to-[#764aa1] p-12 lg:p-16 flex flex-col justify-center text-white">
          <h3 className="font-heading text-2xl font-bold mb-8">{contactPage.officeHeading}</h3>
          <div className="flex flex-col gap-5 text-sm">
            <div className="flex items-start gap-3">
              <MapPin className="size-4 mt-0.5 shrink-0" />
              <span>{contact.address}</span>
            </div>
            <a href={`tel:${contact.phone.replace(/\s+/g, '')}`} className="flex items-center gap-3 hover:text-[#cf9ffe] transition-colors">
              <Phone className="size-4 shrink-0" />
              {contact.phone}
            </a>
            <a href={`mailto:${contact.email}`} className="flex items-center gap-3 hover:text-[#cf9ffe] transition-colors">
              <Mail className="size-4 shrink-0" />
              {contact.email}
            </a>
            <div className="flex items-center gap-3">
              <FileBadge className="size-4 shrink-0" />
              CVR: {contact.cvr}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
