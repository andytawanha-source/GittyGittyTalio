import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import { CraftsmenHero } from '@/components/craftsmen/CraftsmenHero'
import { CraftsmenProblem } from '@/components/craftsmen/CraftsmenProblem'
import { CraftsmenOfferings } from '@/components/craftsmen/CraftsmenOfferings'
import { CraftsmenTrades } from '@/components/craftsmen/CraftsmenTrades'
import { CraftsmenValue } from '@/components/craftsmen/CraftsmenValue'
import { CraftsmenProcess } from '@/components/craftsmen/CraftsmenProcess'
import { CraftsmenExpert } from '@/components/craftsmen/CraftsmenExpert'
import { CraftsmenPricing } from '@/components/craftsmen/CraftsmenPricing'
import { CraftsmenFormSection } from '@/components/craftsmen/CraftsmenForm'
import { CraftsmenFaq } from '@/components/craftsmen/CraftsmenFaq'
import { CraftsmenFinalCta } from '@/components/craftsmen/CraftsmenFinalCta'
import { StickyMobileCta } from '@/components/craftsmen/StickyMobileCta'
import { useSeo, useJsonLd, talioOrganization } from '@/lib/seo'
import { craftsmenHero, craftsmenFaq } from '@/data/craftsmen'
import { track } from '@/lib/analytics'

const CANONICAL_URL = 'https://talio.dk/da/services/bogholder-til-haandvaerkere'
const OG_IMAGE = craftsmenHero.image

export function CraftsmenLanding() {
  useSeo({
    title: 'Bogholder til håndværkere | Bogføring og regnskab | Talio',
    description:
      'Få styr på bilag, moms, løn og regnskab i dit håndværkerfirma. Talio giver personlig hjælp, klart overblik og et konkret tilbud.',
    canonical: CANONICAL_URL,
    ogTitle: 'Bogholder til håndværkere | Talio',
    ogDescription:
      'Bogføring, moms, løn og regnskab til tømrere, murere, elektrikere, malere og VVS\'ere. Få et konkret, uforpligtende tilbud.',
    ogImage: OG_IMAGE,
    ogType: 'website',
    locale: 'da_DK',
  })

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Forside', item: 'https://talio.dk/da' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://talio.dk/da/services' },
      { '@type': 'ListItem', position: 3, name: 'Bogholder til håndværkere', item: CANONICAL_URL },
    ],
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Bogholderi og regnskab for håndværkervirksomheder',
    name: 'Bogholder til håndværkere',
    description:
      'Løbende bogføring, bilag, moms, lønadministration og regnskab til tømrere, murere, elektrikere, malere, VVS\'ere og andre håndværkerfirmaer.',
    provider: talioOrganization,
    areaServed: 'DK',
    url: CANONICAL_URL,
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: craftsmenFaq.items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }

  useJsonLd('craftsmen-landing-schema', [breadcrumbSchema, serviceSchema, faqSchema])

  useEffect(() => {
    track('crafts_landing_view')
  }, [])

  return (
    <main className="bg-white pb-20 md:pb-0">
      <nav aria-label="Brødkrumme" className="border-b border-brand-border/60 bg-brand-surface px-6 pt-28 pb-4 text-sm lg:px-8 lg:pt-32">
        <ol className="mx-auto flex max-w-7xl flex-wrap items-center gap-1 text-brand-copy/70">
          <li>
            <Link to="/" className="hover:text-brand-accent">
              Forside
            </Link>
          </li>
          <ChevronRight className="size-3.5" aria-hidden="true" />
          <li>
            <Link to="/services" className="hover:text-brand-accent">
              Services
            </Link>
          </li>
          <ChevronRight className="size-3.5" aria-hidden="true" />
          <li aria-current="page" className="font-semibold text-brand-ink">
            Bogholder til håndværkere
          </li>
        </ol>
      </nav>

      <CraftsmenHero />
      <CraftsmenProblem />
      <CraftsmenOfferings />
      <CraftsmenTrades />
      <CraftsmenValue />
      <CraftsmenProcess />
      <CraftsmenExpert />
      <CraftsmenPricing />
      <CraftsmenFormSection />
      <CraftsmenFaq />
      <CraftsmenFinalCta />

      <StickyMobileCta />
    </main>
  )
}
