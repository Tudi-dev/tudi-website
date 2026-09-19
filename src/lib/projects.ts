import { getCollection, type CollectionEntry } from 'astro:content'
import { locales, type Locale } from './i18n'

/** Project entries are stored under a per-locale folder (e.g. `en/example-project.md`); the route slug is the id without that folder segment. */
export function getProjectSlug(entry: CollectionEntry<'projects'>): string {
  return entry.id.split('/').slice(1).join('/')
}

export function getProjectsByLocale(locale: Locale, onlyFeatured = false): Promise<CollectionEntry<'projects'>[]> {
  return getCollection('projects', ({ data }) => data.lang === locale && (!onlyFeatured || data.featured))
}

/**
 * A translated project only shares a URL slug with its sibling when both files were named the same.
 * The SEO hreflang alternates must only list locales that actually publish this slug, otherwise they'd 404.
 */
export async function getAvailableLocalesForSlug(slug: string): Promise<Locale[]> {
  const allProjects = await getCollection('projects')
  return locales.filter((locale) =>
    allProjects.some((project) => project.data.lang === locale && getProjectSlug(project) === slug),
  )
}
