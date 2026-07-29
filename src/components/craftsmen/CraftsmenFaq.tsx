import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { PageHeading } from '@/components/shared/page-primitives'
import { craftsmenFaq } from '@/data/craftsmen'
import { cn } from '@/lib/utils'

export function CraftsmenFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="bg-brand-surface-muted px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-3xl">
        <PageHeading as="h2" className="mb-12 text-3xl leading-tight sm:text-4xl lg:text-5xl">
          {craftsmenFaq.heading}
        </PageHeading>

        <div className="flex flex-col gap-3">
          {craftsmenFaq.items.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <div key={item.question} className="rounded-xl border border-brand-border/60 bg-white overflow-hidden">
                <h3>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                    id={`faq-trigger-${index}`}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    <span className="font-heading text-base font-bold text-brand-ink">{item.question}</span>
                    <ChevronDown
                      className={cn('size-5 shrink-0 text-brand-accent transition-transform duration-200', isOpen && 'rotate-180')}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                <div
                  id={`faq-panel-${index}`}
                  role="region"
                  aria-labelledby={`faq-trigger-${index}`}
                  hidden={!isOpen}
                  className="px-6 pb-6"
                >
                  <p className="leading-relaxed text-brand-copy">{item.answer}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
