export type Locale = 'en' | 'es'

export const locales: Locale[] = ['en', 'es']
export const defaultLocale: Locale = 'en'

interface Dictionary {
  nav: Record<'services' | 'projects' | 'about' | 'contact', string>
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
    hero: {
      eyebrow: string
      headingBefore: string
      headingEmphasis: string
      paragraph: string
      ctaLabel: string
      ctaNote: string
      imagePlaceholder: string
      colorSystemLabel: string
      stats: { value: string; label: string }[]
    }
  }
  about: {
    title: string
    description: string
    heading: string
    body: string
  }
  services: {
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
    services: 'Services',
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
    hero: {
      eyebrow: 'Tijuana, Mexico · PST timezone · Studio since 2014',
      headingBefore: 'Three disciplines, one studio, the same ',
      headingEmphasis: 'conversation',
      paragraph:
        'Design, application development and cloud infrastructure, with Mid and Senior-level designers and engineers. Each discipline answers to an operating partner, and you speak directly with whoever leads it.',
      ctaLabel: 'Schedule a call',
      ctaNote: 'Response within 24 business hours',
      imagePlaceholder: '[ studio photo — 1600×1100, black and white ]',
      colorSystemLabel: 'Variable color system',
      stats: [
        { value: '21', label: 'Services in catalog' },
        { value: '3', label: 'Operating partners' },
        { value: 'Mid · Senior', label: 'No junior profiles' },
        { value: 'PST', label: 'Overlap with West Coast' },
      ],
    },
  },
  about: {
    title: 'About',
    description: 'Who I am and what I do.',
    heading: 'About',
    body: 'Content coming soon.',
  },
  services: {
    title: 'Services',
    description: 'Design, development and cloud infrastructure services.',
    heading: 'Services',
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
    services: 'Servicios',
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
    hero: {
      eyebrow: 'Tijuana, México · Zona horaria PST · Estudio desde 2014',
      headingBefore: 'Tres disciplinas, un estudio, la misma ',
      headingEmphasis: 'conversación',
      paragraph:
        'Diseño, desarrollo de aplicaciones e infraestructura cloud, con diseñadores e ingenieros de nivel Mid y Senior. Cada disciplina responde ante un socio operativo, y hablas directo con quien la lidera.',
      ctaLabel: 'Agendar una llamada',
      ctaNote: 'Respuesta en 24 h hábiles',
      imagePlaceholder: '[ foto del estudio — 1600×1100, blanco y negro ]',
      colorSystemLabel: 'Sistema de color variable',
      stats: [
        { value: '21', label: 'Servicios en catálogo' },
        { value: '3', label: 'Socios operativos' },
        { value: 'Mid · Senior', label: 'Sin perfiles junior' },
        { value: 'PST', label: 'Overlap con West Coast' },
      ],
    },
  },
  about: {
    title: 'Sobre mí',
    description: 'Quién soy y qué hago.',
    heading: 'Sobre mí',
    body: 'Contenido pendiente.',
  },
  services: {
    title: 'Servicios',
    description: 'Servicios de diseño, desarrollo e infraestructura cloud.',
    heading: 'Servicios',
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
