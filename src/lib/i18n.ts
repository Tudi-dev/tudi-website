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
      imageAlt: string
      colorSystemLabel: string
      stats: { value: string; label: string }[]
    }
  }
  about: {
    title: string
    description: string
  }
  services: {
    title: string
    description: string
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
    eyebrow: string
    heading: string
    intro: string
    columns: { num: string; project: string; disciplines: string; preview: string }
    viewCase: string
    ctaLabel: string
    ctaNote: string
  }
  clients: {
    heading: string
    intro: string
    situations: { sector: string; detail: string }[]
  }
  projectDetail: {
    backLink: string
    metaLabels: { client: string; concept: string; designer: string }
    applicationsLabel: string
    closingQuestion: string
    ctaLabel: string
    ctaSecondary: string
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
      imageAlt: 'Laptop with a code editor open, a notebook, a pen and a coffee mug on a desk.',
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
    title: 'Studio',
    description:
      'Custom design, software development and digital solutions for businesses that need to modernize, integrate or migrate their systems.',
  },
  services: {
    title: 'Services',
    description: 'Design, development and cloud infrastructure services, organized into three catalogs.',
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
    eyebrow: '02 · Portfolio',
    heading: 'Work in production, not mockups',
    intro: "Each case shows which disciplines were involved and what was delivered.",
    columns: { num: 'No.', project: 'Project', disciplines: 'Disciplines', preview: 'Preview' },
    viewCase: 'View case →',
    ctaLabel: "Let's talk about your project",
    ctaNote: "Two published cases. Each case opens on its own page; more are added as they're authorized.",
  },
  clients: {
    heading: 'Who we work with',
    intro: "Six situations where Tudi comes in, handled in projects since 2014.",
    situations: [
      {
        sector: 'Brands being born or repositioned',
        detail: 'Identity, brand manual and application across every channel.',
      },
      {
        sector: 'Companies with an ongoing need for sales material',
        detail: 'Brochures, catalogs, presentations and POP material.',
      },
      {
        sector: "Teams whose systems are already slowing the business down",
        detail: 'Backoffice modernization and evolutionary maintenance.',
      },
      {
        sector: 'Businesses migrating to the cloud',
        detail: 'AWS infrastructure, Terraform and containers on ECS.',
      },
      {
        sector: 'Teams with manual or slow deploys',
        detail: 'Continuous integration and delivery pipelines.',
      },
      {
        sector: 'Production systems with no one to support them',
        detail: 'Application support, diagnostics and hotfixes.',
      },
    ],
  },
  projectDetail: {
    backLink: '← Portfolio',
    metaLabels: { client: 'Client', concept: 'Concept', designer: 'Design' },
    applicationsLabel: 'Applications',
    closingQuestion: 'Does your brand need the same treatment?',
    ctaLabel: "Let's talk about your project",
    ctaSecondary: 'View portfolio',
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
      imageAlt: 'Laptop con un editor de código abierto, una libreta, una pluma y una taza de café sobre un escritorio.',
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
    title: 'Estudio',
    description:
      'Diseño, desarrollo de software y soluciones digitales a la medida para empresas que necesitan modernizar, integrar o migrar sus sistemas.',
  },
  services: {
    title: 'Servicios',
    description: 'Servicios de diseño, desarrollo e infraestructura cloud, organizados en tres catálogos.',
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
    eyebrow: '02 · Portafolio',
    heading: 'Trabajo en operación, no maquetas',
    intro: 'Cada caso indica qué disciplinas participaron y qué quedó entregado.',
    columns: { num: 'Núm.', project: 'Proyecto', disciplines: 'Disciplinas', preview: 'Vista' },
    viewCase: 'Ver caso →',
    ctaLabel: 'Hablemos de tu proyecto',
    ctaNote: 'Dos casos publicados. Cada caso abre en su propia página; los siguientes se agregan conforme se autorizan.',
  },
  clients: {
    heading: 'Con quién trabajamos',
    intro: 'Seis situaciones en las que entra Tudi, atendidas en proyectos desde 2014.',
    situations: [
      {
        sector: 'Marcas que nacen o se reposicionan',
        detail: 'Identidad, manual de marca y aplicación en todos los canales.',
      },
      {
        sector: 'Empresas con material de ventas constante',
        detail: 'Brochures, catálogos, presentaciones y material POP.',
      },
      {
        sector: 'Equipos con sistemas que ya frenan la operación',
        detail: 'Modernización de backoffice y mantenimiento evolutivo.',
      },
      {
        sector: 'Negocios que migran a la nube',
        detail: 'Infraestructura AWS, Terraform y contenedores en ECS.',
      },
      {
        sector: 'Equipos con deploys manuales o lentos',
        detail: 'Pipelines de integración y entrega continua.',
      },
      {
        sector: 'Sistemas en producción sin quién los sostenga',
        detail: 'Soporte de aplicación, diagnóstico y hotfixes.',
      },
    ],
  },
  projectDetail: {
    backLink: '← Portafolio',
    metaLabels: { client: 'Cliente', concept: 'Concepto', designer: 'Diseño' },
    applicationsLabel: 'Aplicaciones',
    closingQuestion: '¿Tu marca necesita el mismo tratamiento?',
    ctaLabel: 'Hablemos de tu proyecto',
    ctaSecondary: 'Ver portafolio',
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
