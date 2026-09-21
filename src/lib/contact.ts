import type { Locale } from './i18n'

export interface ContactStep {
  num: string
  title: string
  text: string
}

export interface ContactOption {
  key: 'design' | 'development' | 'devops' | 'unsure'
  label: string
  note: string
  responsible: string
}

export interface ContactFormFields {
  needLabel: string
  nameLabel: string
  namePlaceholder: string
  companyLabel: string
  companyOptionalNote: string
  companyPlaceholder: string
  emailLabel: string
  emailPlaceholder: string
  phoneLabel: string
  phoneOptionalNote: string
  phonePlaceholder: string
  messageLabel: string
  messagePlaceholder: string
  submitLabel: string
  submitNote: string
}

export interface ContactSuccessContent {
  greetingWithName: string
  greetingDefault: string
  bodyBefore: string
  bodyAfter: string
  urgentNote: string
  ctaLabel: string
}

export interface ContactSidebarContent {
  emailLabel: string
  phoneLabel: string
  phonePending: string
  studioLabel: string
  studioAddressLine1: string
  studioAddressLine2: string
  addressPending: string
  scheduleLabel: string
  scheduleValue: string
  scheduleNote: string
  socialLabel: string
}

export interface ContactContent {
  hero: {
    eyebrow: string
    headingBefore: string
    headingEmphasis: string
    intro: string
  }
  next: {
    eyebrow: string
    steps: ContactStep[]
  }
  form: {
    options: ContactOption[]
    defaultOptionIndex: number
    fields: ContactFormFields
  }
  success: ContactSuccessContent
  sidebar: ContactSidebarContent
}

const en: ContactContent = {
  hero: {
    eyebrow: 'Contact · Tijuana, Mexico · PST timezone',
    headingBefore: 'Tell us what you need.',
    headingEmphasis: 'We build it.',
    intro:
      "The operating partner for the discipline you choose responds — not a general inbox. If you're not sure which one yet, we figure it out on the first call.",
  },
  next: {
    eyebrow: 'What happens next',
    steps: [
      {
        num: '01',
        title: 'You get a reply from a person',
        text: 'Within 24 business hours, the discipline lead replies with whatever questions are still needed to scope the work.',
      },
      {
        num: '02',
        title: '30-minute diagnostic call',
        text: 'We review the current operation, the systems involved and the timeline. No commitment.',
      },
      {
        num: '03',
        title: 'Proposal with scope and price',
        text: 'Assigned profile, deliverables, timeline and cost. One version, no fine print.',
      },
    ],
  },
  form: {
    defaultOptionIndex: 3,
    options: [
      { key: 'design', label: 'Design', note: 'Identity, collateral, UX/UI, editorial', responsible: 'Karen Varela, Design Lead' },
      {
        key: 'development',
        label: 'Development & Support',
        note: 'Applications, APIs, integrations, support',
        responsible: 'Israel F., Development & Support Lead',
      },
      { key: 'devops', label: 'DevOps', note: 'AWS, Terraform, CI/CD, costs', responsible: 'Mike B., DevOps Lead' },
      {
        key: 'unsure',
        label: 'Not sure yet',
        note: "We'll figure it out on the first call",
        responsible: 'whichever operating partner fits',
      },
    ],
    fields: {
      needLabel: 'What do you need?',
      nameLabel: 'Name',
      namePlaceholder: 'Full name',
      companyLabel: 'Company',
      companyOptionalNote: '(optional)',
      companyPlaceholder: 'Company name',
      emailLabel: 'Email',
      emailPlaceholder: 'name@company.com',
      phoneLabel: 'Phone',
      phoneOptionalNote: '(optional)',
      phonePlaceholder: '+52 664 000 0000',
      messageLabel: 'What do you need solved',
      messagePlaceholder: "Your current system, what's failing today, and your timeline.",
      submitLabel: 'Send request',
      submitNote: 'Response within 24 business hours',
    },
  },
  success: {
    greetingWithName: 'Thanks, {name}.',
    greetingDefault: 'Thanks for writing.',
    bodyBefore: 'Your request goes straight to ',
    bodyAfter: '. They reply within 24 business hours with whatever questions are still needed to quote it.',
    urgentNote: "If it's urgent, email contacto@tudi.mx and mention you already filled out the form.",
    ctaLabel: 'See the work in the meantime',
  },
  sidebar: {
    emailLabel: 'Email us',
    phoneLabel: 'Phone',
    phonePending: '[ number to be confirmed ]',
    studioLabel: 'Studio',
    studioAddressLine1: 'Tijuana, Baja California',
    studioAddressLine2: 'Mexico',
    addressPending: '[ address to be confirmed ]',
    scheduleLabel: 'Hours',
    scheduleValue: 'Monday to Friday, 9:00 am–6:00 pm PST',
    scheduleNote: 'Full overlap with the West Coast, partial with the East Coast.',
    socialLabel: 'Social',
  },
}

const es: ContactContent = {
  hero: {
    eyebrow: 'Contacto · Tijuana, México · Zona horaria PST',
    headingBefore: 'Tu-Di que necesitas.',
    headingEmphasis: 'Nosotros lo hacemos.',
    intro:
      'Responde el socio operativo de la disciplina que elijas, no un buzón general. Si todavía no sabes cuál es, lo definimos en la primera llamada.',
  },
  next: {
    eyebrow: 'Qué pasa después',
    steps: [
      {
        num: '01',
        title: 'Lees una respuesta de una persona',
        text: 'En 24 h hábiles contesta el lead de la disciplina, con las preguntas que falten para entender el alcance.',
      },
      {
        num: '02',
        title: 'Llamada de diagnóstico, 30 minutos',
        text: 'Revisamos la operación actual, los sistemas involucrados y el plazo. Sin compromiso.',
      },
      {
        num: '03',
        title: 'Propuesta con alcance y precio',
        text: 'Perfil asignado, entregables, tiempos y costo. Una sola versión, sin letras chicas.',
      },
    ],
  },
  form: {
    defaultOptionIndex: 3,
    options: [
      { key: 'design', label: 'Diseño', note: 'Identidad, piezas, UX/UI, editorial', responsible: 'Karen Varela, Diseño Lead' },
      {
        key: 'development',
        label: 'Desarrollo & Soporte',
        note: 'Aplicaciones, APIs, integraciones, soporte',
        responsible: 'Israel F., Lead de Desarrollo & Soporte',
      },
      { key: 'devops', label: 'DevOps', note: 'AWS, Terraform, CI/CD, costos', responsible: 'Mike B., DevOps Lead' },
      {
        key: 'unsure',
        label: 'Todavía no lo sé',
        note: 'Lo definimos en la primera llamada',
        responsible: 'el socio operativo que corresponda',
      },
    ],
    fields: {
      needLabel: '¿Qué necesitas?',
      nameLabel: 'Nombre',
      namePlaceholder: 'Nombre y apellido',
      companyLabel: 'Empresa',
      companyOptionalNote: '(opcional)',
      companyPlaceholder: 'Nombre de la empresa',
      emailLabel: 'Correo',
      emailPlaceholder: 'nombre@empresa.com',
      phoneLabel: 'Teléfono',
      phoneOptionalNote: '(opcional)',
      phonePlaceholder: '+52 664 000 0000',
      messageLabel: 'Qué quieres resolver',
      messagePlaceholder: 'El sistema actual, qué falla hoy y en qué plazo lo necesitas.',
      submitLabel: 'Enviar solicitud',
      submitNote: 'Respuesta en 24 h hábiles',
    },
  },
  success: {
    greetingWithName: 'Gracias, {name}.',
    greetingDefault: 'Gracias por escribir.',
    bodyBefore: 'Tu solicitud va directo a ',
    bodyAfter: '. Te contesta en 24 h hábiles con las preguntas que falten para poder cotizar.',
    urgentNote: 'Si es urgente, escribe a contacto@tudi.mx y menciona que ya llenaste el formulario.',
    ctaLabel: 'Ver el trabajo mientras',
  },
  sidebar: {
    emailLabel: 'Escríbenos',
    phoneLabel: 'Teléfono',
    phonePending: '[ número por confirmar ]',
    studioLabel: 'Estudio',
    studioAddressLine1: 'Tijuana, Baja California',
    studioAddressLine2: 'México',
    addressPending: '[ dirección por confirmar ]',
    scheduleLabel: 'Horario',
    scheduleValue: 'Lunes a viernes, 9:00 a 18:00 PST',
    scheduleNote: 'Overlap completo con la costa oeste, parcial con la costa este.',
    socialLabel: 'Redes',
  },
}

const content: Record<Locale, ContactContent> = { en, es }

export function getContactContent(locale: Locale): ContactContent {
  return content[locale]
}
