import type { Locale } from './i18n'

export interface StudioProcessStep {
  num: string
  title: string
  text: string
}

export interface StudioCard {
  title: string
  text: string
}

export interface StudioTrait {
  num: string
  word: string
  text: string
  background: string
  textColor: string
  accent: string
}

export interface StudioCoverageRow {
  ops: string
  dev: string
}

export interface StudioContent {
  eyebrow: string
  heading: string
  introLead: string
  introBody: string
  process: StudioProcessStep[]
  processCtaLabel: string
  cards: StudioCard[]
  quoteBefore: string
  quoteEmphasis: string
  quoteAfter: string
  traitsEyebrow: string
  traitsHeading: string
  traitsIntro: string
  traits: StudioTrait[]
  coverageEyebrow: string
  coverageHeading: string
  coverageIntro: string
  coverageColumns: { ops: string; dev: string }
  coverageRows: StudioCoverageRow[]
  coverageFootnote: string
  ctaLabel: string
  ctaNote: string
}

const en: StudioContent = {
  eyebrow: '03 · Studio',
  heading: 'Custom-built solutions, not adapted templates',
  introLead:
    "We're a design, software development and custom digital solutions company, focused on businesses that need to modernize, integrate or migrate their systems.",
  introBody:
    "Every project starts by understanding the client's real operation. Scope, architecture and design follow from that — in that order.",
  process: [
    {
      num: '01',
      title: 'Diagnosis before proposal',
      text: 'We map processes, content inventory and technical needs before quoting a single screen.',
    },
    {
      num: '02',
      title: 'One senior lead accountable',
      text: 'Design, development and DevOps each have an operating partner who answers for it technically.',
    },
    {
      num: '03',
      title: 'Documented handoff',
      text: "You receive access, documentation and training. The project doesn't depend on us to keep running.",
    },
  ],
  processCtaLabel: 'See the work',
  cards: [
    { title: 'Modernize', text: 'Systems that still work but already slow the business down.' },
    { title: 'Integrate', text: "Tools that don't talk to each other today and get reconciled by hand." },
    { title: 'Migrate', text: 'Move what already exists to the cloud without stopping the business.' },
  ],
  quoteBefore: 'Every idea, service or product we implement has to ',
  quoteEmphasis: 'earn its place',
  quoteAfter: ', solving a real need or improving a service, a purchase, or an experience.',
  traitsEyebrow: 'How we work',
  traitsHeading: 'Eight ways of working, one brand',
  traitsIntro: "Pick any one. Tudi's variable color system shifts with it.",
  traits: [
    {
      num: '01',
      word: 'Innovative',
      text: 'We try new technology on real projects, not in slide decks.',
      background: '#520B75',
      textColor: '#FFFFFF',
      accent: '#03E0BD',
    },
    {
      num: '02',
      word: 'Dynamic',
      text: 'Scope adjusts when the business changes, without restarting the project.',
      background: '#f15d2a',
      textColor: '#201e1d',
      accent: '#003b45',
    },
    {
      num: '03',
      word: 'Interactive',
      text: 'Clickable prototypes from week one, not static mockups.',
      background: '#056983',
      textColor: '#FFFFFF',
      accent: '#FCF103',
    },
    {
      num: '04',
      word: 'Friendly',
      text: 'You talk to whoever builds it. No middlemen, no unnecessary jargon.',
      background: '#FFB508',
      textColor: '#01366A',
      accent: '#01366A',
    },
    {
      num: '05',
      word: 'Investigative',
      text: 'We map the real operation before proposing a solution.',
      background: '#01366A',
      textColor: '#FFFFFF',
      accent: '#FFB508',
    },
    {
      num: '06',
      word: 'Optimizing',
      text: 'We measure cost, speed and usage, and bring them down with evidence.',
      background: '#203E3C',
      textColor: '#FFFFFF',
      accent: '#F0BD0A',
    },
    {
      num: '07',
      word: 'Creative',
      text: "Design and code get solved together; the result doesn't look like a template.",
      background: '#03E0BD',
      textColor: '#003b45',
      accent: '#520B75',
    },
    {
      num: '08',
      word: 'Intuitive',
      text: "If it needs an explanation, it isn't finished.",
      background: '#003b45',
      textColor: '#FFFFFF',
      accent: '#f15d2a',
    },
  ],
  coverageEyebrow: 'Coverage',
  coverageHeading: 'Where one ends and the other begins',
  coverageIntro:
    "Infrastructure, pipelines and observability are covered by DevOps. Code, defects and integrations are covered by Development & Support. Work isn't duplicated, and it isn't billed twice.",
  coverageColumns: { ops: 'DevOps', dev: 'Development & Support' },
  coverageRows: [
    { ops: 'Cloud Infrastructure (AWS)', dev: 'Applications running on that infrastructure' },
    { ops: 'Infrastructure as Code (Terraform)', dev: 'Application changes per environment (dev / stg / prd)' },
    { ops: 'CI/CD Pipelines', dev: 'Commits, PRs, application artifacts and hotfixes' },
    { ops: 'Containerization on AWS (ECS)', dev: 'App image, task definition and service behavior' },
    { ops: 'Monitoring & Observability', dev: 'Diagnosing application errors and fixing code' },
    { ops: 'FinOps / AWS Cost Optimization', dev: "Queries, jobs and retries that don't waste compute or storage" },
  ],
  coverageFootnote:
    'Application support covers both IIS / ASP.NET systems and AWS workloads. Kubernetes (EKS) joins the catalog in Q1 2027.',
  ctaLabel: "Let's talk about your project",
  ctaNote: 'Response within 24 business hours',
}

const es: StudioContent = {
  eyebrow: '03 · Estudio',
  heading: 'Soluciones a la medida, no plantillas adaptadas',
  introLead:
    'Somos una empresa de diseño, desarrollo de software y soluciones digitales a la medida, enfocada en empresas que necesitan modernizar, integrar o migrar sus sistemas.',
  introBody:
    'Cada proyecto empieza por entender la operación real del cliente. De ahí sale el alcance, la arquitectura y el diseño — en ese orden.',
  process: [
    {
      num: '01',
      title: 'Diagnóstico antes de propuesta',
      text: 'Levantamos procesos, inventario de contenido y necesidades técnicas antes de cotizar una sola pantalla.',
    },
    {
      num: '02',
      title: 'Un lead senior responsable',
      text: 'Diseño, desarrollo y DevOps tienen cada uno un socio operativo que responde técnicamente ante el cliente.',
    },
    {
      num: '03',
      title: 'Entrega documentada',
      text: 'El cliente recibe accesos, documentación y capacitación. El proyecto no depende de nosotros para seguir vivo.',
    },
  ],
  processCtaLabel: 'Ver el trabajo',
  cards: [
    { title: 'Modernizar', text: 'Sistemas que siguen funcionando pero ya frenan la operación.' },
    { title: 'Integrar', text: 'Herramientas que hoy no se hablan entre sí y se reconcilian a mano.' },
    { title: 'Migrar', text: 'Mover lo que ya existe a la nube sin detener el negocio.' },
  ],
  quoteBefore: 'Cada idea, servicio o producto que se implemente debe tener su ',
  quoteEmphasis: 'razón de ser',
  quoteAfter: ', solucionando una necesidad, ayudando a mejorar un servicio, compra o experiencia.',
  traitsEyebrow: 'Cómo trabajamos',
  traitsHeading: 'Ocho maneras de trabajar, una sola marca',
  traitsIntro: 'Elige cualquiera. El sistema de color variable de Tudi cambia con ella.',
  traits: [
    {
      num: '01',
      word: 'Innovador',
      text: 'Probamos tecnología nueva en proyectos reales, no en presentaciones.',
      background: '#520B75',
      textColor: '#FFFFFF',
      accent: '#03E0BD',
    },
    {
      num: '02',
      word: 'Dinámico',
      text: 'El alcance se ajusta cuando el negocio cambia, sin reiniciar el proyecto.',
      background: '#f15d2a',
      textColor: '#201e1d',
      accent: '#003b45',
    },
    {
      num: '03',
      word: 'Interactivo',
      text: 'Prototipos navegables desde la primera semana, no maquetas estáticas.',
      background: '#056983',
      textColor: '#FFFFFF',
      accent: '#FCF103',
    },
    {
      num: '04',
      word: 'Amigable',
      text: 'Hablas con quien construye. Sin intermediarios ni jerga innecesaria.',
      background: '#FFB508',
      textColor: '#01366A',
      accent: '#01366A',
    },
    {
      num: '05',
      word: 'Investigador',
      text: 'Levantamos la operación real antes de proponer una solución.',
      background: '#01366A',
      textColor: '#FFFFFF',
      accent: '#FFB508',
    },
    {
      num: '06',
      word: 'Optimizador',
      text: 'Medimos costo, velocidad y consumo, y los bajamos con evidencia.',
      background: '#203E3C',
      textColor: '#FFFFFF',
      accent: '#F0BD0A',
    },
    {
      num: '07',
      word: 'Creativo',
      text: 'Diseño y código se resuelven juntos; el resultado no se parece a una plantilla.',
      background: '#03E0BD',
      textColor: '#003b45',
      accent: '#520B75',
    },
    {
      num: '08',
      word: 'Intuitivo',
      text: 'Si necesita explicación, no está terminado.',
      background: '#003b45',
      textColor: '#FFFFFF',
      accent: '#f15d2a',
    },
  ],
  coverageEyebrow: 'Cobertura',
  coverageHeading: 'Dónde termina uno y empieza el otro',
  coverageIntro:
    'Infraestructura, pipelines y observabilidad los cubre DevOps. Código, defectos e integraciones los cubre Desarrollo & Soporte. No se duplica el trabajo ni se factura dos veces.',
  coverageColumns: { ops: 'DevOps', dev: 'Desarrollo & Soporte' },
  coverageRows: [
    { ops: 'Cloud Infrastructure (AWS)', dev: 'Aplicaciones que corren en esa infraestructura' },
    { ops: 'Infrastructure as Code (Terraform)', dev: 'Cambios de aplicación por ambiente (dev / stg / prd)' },
    { ops: 'CI/CD Pipelines', dev: 'Commits, PRs, artefactos de aplicación y hotfixes' },
    { ops: 'Containerización en AWS (ECS)', dev: 'Imagen, task definition de app y comportamiento del servicio' },
    { ops: 'Monitoreo & Observabilidad', dev: 'Diagnóstico de errores de aplicación y corrección en código' },
    {
      ops: 'FinOps / Optimización de Costos AWS',
      dev: 'Queries, jobs y reintentos que no desperdician compute ni storage',
    },
  ],
  coverageFootnote:
    'El soporte de aplicación cubre tanto sistemas en IIS / ASP.NET como workloads en AWS. Kubernetes (EKS) se incorpora al catálogo en Q1 2027.',
  ctaLabel: 'Hablemos de tu proyecto',
  ctaNote: 'Respuesta en 24 h hábiles',
}

const content: Record<Locale, StudioContent> = { en, es }

export function getStudioContent(locale: Locale): StudioContent {
  return content[locale]
}
