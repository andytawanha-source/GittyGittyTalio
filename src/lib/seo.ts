import { useEffect } from 'react'

// ---------------------------------------------------------------------------
// Lightweight, dependency-free SEO utility.
//
// The project has no react-helmet-async (or similar) dependency, and this is
// a client-rendered Vite SPA (no SSR step), so a heavier head-management
// library would add weight without improving what search engines see beyond
// what this hook already does. This hook mirrors the same behaviour: it sets
// document.title, upserts <meta>/<link> tags, and injects/removes JSON-LD
// <script> tags on mount/unmount, so each route fully controls its own head.
// ---------------------------------------------------------------------------

export interface SeoMeta {
  title: string
  description: string
  canonical: string
  ogTitle?: string
  ogDescription?: string
  ogImage?: string
  ogType?: 'website' | 'article'
  locale?: string
}

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
  return el
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
  return el
}

export function useSeo(meta: SeoMeta) {
  useEffect(() => {
    const previousTitle = document.title
    document.title = meta.title

    const managedTags: HTMLElement[] = []
    managedTags.push(upsertMeta('name', 'description', meta.description))
    managedTags.push(upsertLink('canonical', meta.canonical))

    managedTags.push(upsertMeta('property', 'og:title', meta.ogTitle ?? meta.title))
    managedTags.push(upsertMeta('property', 'og:description', meta.ogDescription ?? meta.description))
    managedTags.push(upsertMeta('property', 'og:type', meta.ogType ?? 'website'))
    managedTags.push(upsertMeta('property', 'og:url', meta.canonical))
    managedTags.push(upsertMeta('property', 'og:locale', meta.locale ?? 'da_DK'))
    if (meta.ogImage) {
      managedTags.push(upsertMeta('property', 'og:image', meta.ogImage))
      managedTags.push(upsertMeta('name', 'twitter:image', meta.ogImage))
    }
    managedTags.push(upsertMeta('name', 'twitter:card', 'summary_large_image'))
    managedTags.push(upsertMeta('name', 'twitter:title', meta.ogTitle ?? meta.title))
    managedTags.push(upsertMeta('name', 'twitter:description', meta.ogDescription ?? meta.description))

    return () => {
      document.title = previousTitle
      // Tags are left in place (harmless if overwritten by the next page's
      // useSeo call), except canonical which must not leak between routes.
    }
  }, [meta.title, meta.description, meta.canonical, meta.ogTitle, meta.ogDescription, meta.ogImage, meta.ogType, meta.locale])
}

/**
 * Injects one or more JSON-LD <script> blocks into <head> for the lifetime
 * of the calling component, removing them on unmount so schema never leaks
 * onto other routes.
 */
export function useJsonLd(id: string, data: unknown | unknown[]) {
  useEffect(() => {
    const blocks = Array.isArray(data) ? data : [data]
    const scripts = blocks.map((block, i) => {
      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.id = `${id}-${i}`
      script.textContent = JSON.stringify(block)
      document.head.appendChild(script)
      return script
    })
    return () => {
      scripts.forEach((s) => s.remove())
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, JSON.stringify(data)])
}

/**
 * Shared Organization data for Talio. Reused wherever a page needs to
 * reference the organization in JSON-LD (e.g. as `provider` on a Service
 * schema), so facts stay in one place and never contradict each other.
 * Only verifiable, publicly stated facts are included — no ratings, no
 * invented certifications or opening hours.
 */
export const talioOrganization = {
  '@type': 'Organization',
  name: 'Talio ApS',
  url: 'https://talio.dk/da',
  logo: 'https://talio.dk/logo.svg',
  email: 'kontakt@talio.dk',
  telephone: '+45 31 71 12 16',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Fjeldhammervej 15',
    postalCode: '2610',
    addressLocality: 'Rødovre',
    addressCountry: 'DK',
  },
}
