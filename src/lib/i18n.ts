export type Locale = 'en' | 'es'

export const locales: Locale[] = ['en', 'es']
export const defaultLocale: Locale = 'en'

interface Dictionary {
  nav: Record<'home' | 'projects' | 'about' | 'contact', string>
  header: {
    logoAria: string
    logoMarkAria: string
    menuToggleAria: string
    primaryNavAria: string
    ctaLabel: string
  }
  footer: {
    footerNavAria: string
    facebookAria: string
    linkedinAria: string
    youtubeAria: string
    instagramAria: string
    location: string
    tagline: { before: string; after: string }
  }
  languageSwitcher: {
    label: string
    code: string
  }
  home: {
    title: string
    description: string
    intro: string
    featuredHeading: string
  }
  about: {
    title: string
    description: string
    heading: string
    body: string
  }
  contact: {
    title: string
    description: string
    heading: string
    intro: string
  }
  projects: {
    title: string
    description: string
    heading: string
  }
}

const en: Dictionary = {
  nav: {
    home: 'Home',
    projects: 'Portfolio',
    about: 'Studio',
    contact: 'Contact',
  },
  header: {
    logoAria: 'Tudi — home',
    logoMarkAria: 'Tudi — Development & Design',
    menuToggleAria: 'Open navigation menu',
    primaryNavAria: 'Primary',
    ctaLabel: 'Start a project',
  },
  footer: {
    footerNavAria: 'Footer',
    facebookAria: 'Facebook',
    linkedinAria: 'LinkedIn',
    youtubeAria: 'YouTube',
    instagramAria: 'Instagram',
    location: 'Tijuana, Mexico · PST timezone',
    tagline: { before: 'Development', after: 'Design' },
  },
  languageSwitcher: {
    label: 'Switch to Spanish',
    code: 'ES',
  },
  home: {
    title: 'Home',
    description: 'tudi portfolio: projects, experience and contact.',
    intro: 'Project portfolio.',
    featuredHeading: 'Featured projects',
  },
  about: {
    title: 'About',
    description: 'Who I am and what I do.',
    heading: 'About',
    body: 'Content coming soon.',
  },
  contact: {
    title: 'Contact',
    description: 'How to reach me.',
    heading: 'Contact',
    intro: 'Write to me at',
  },
  projects: {
    title: 'Projects',
    description: 'List of portfolio projects.',
    heading: 'Projects',
  },
}

const es: Dictionary = {
  nav: {
    home: 'Inicio',
    projects: 'Portafolio',
    about: 'Estudio',
    contact: 'Contacto',
  },
  header: {
    logoAria: 'Tudi — inicio',
    logoMarkAria: 'Tudi — Desarrollo & Diseño',
    menuToggleAria: 'Abrir menú de navegación',
    primaryNavAria: 'Principal',
    ctaLabel: 'Iniciar un proyecto',
  },
  footer: {
    footerNavAria: 'Pie de página',
    facebookAria: 'Facebook',
    linkedinAria: 'LinkedIn',
    youtubeAria: 'YouTube',
    instagramAria: 'Instagram',
    location: 'Tijuana, México · Zona horaria PST',
    tagline: { before: 'Desarrollo', after: 'Diseño' },
  },
  languageSwitcher: {
    label: 'Cambiar a inglés',
    code: 'EN',
  },
  home: {
    title: 'Inicio',
    description: 'Portafolio de tudi: proyectos, experiencia y contacto.',
    intro: 'Portafolio de proyectos.',
    featuredHeading: 'Proyectos destacados',
  },
  about: {
    title: 'Sobre mí',
    description: 'Quién soy y qué hago.',
    heading: 'Sobre mí',
    body: 'Contenido pendiente.',
  },
  contact: {
    title: 'Contacto',
    description: 'Cómo contactarme.',
    heading: 'Contacto',
    intro: 'Escríbeme a',
  },
  projects: {
    title: 'Proyectos',
    description: 'Listado de proyectos del portafolio.',
    heading: 'Proyectos',
  },
}

const dictionaries: Record<Locale, Dictionary> = { en, es }

export function getLocale(astroLocale: string | undefined): Locale {
  return astroLocale === 'es' ? 'es' : 'en'
}

export function otherLocale(locale: Locale): Locale {
  return locale === 'en' ? 'es' : 'en'
}

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale]
}

/** Strips the current locale's URL prefix, returning the locale-neutral path used to build links to other locales. */
export function getRelativePath(pathname: string, locale: Locale): string {
  if (locale === defaultLocale) {
    return pathname || '/'
  }
  const prefix = `/${locale}`
  if (pathname === prefix) return '/'
  if (pathname.startsWith(`${prefix}/`)) return pathname.slice(prefix.length) || '/'
  return pathname
}
