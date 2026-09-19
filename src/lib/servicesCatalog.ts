import type { Locale } from './i18n'

export interface ServiceItem {
  num: string
  title: string
  text: string
  profile: string
  stack: string[]
  idealFor: string
  note?: string
}

export interface ServiceDiscipline {
  key: 'design' | 'development' | 'devops'
  name: string
  lead: string
  accent: string
  items: ServiceItem[]
}

export interface ServicesCatalog {
  eyebrow: string
  heading: string
  intro: string
  countSuffix: string
  metaLabels: { levels: string; location: string; languages: string }
  fieldLabels: { profile: string; stack: string; idealFor: string }
  sharedMeta: { levels: string; location: string; languages: string }
  ctaLabel: string
  ctaNote: string
  disciplines: ServiceDiscipline[]
}

const en: ServicesCatalog = {
  eyebrow: '01 · Services',
  heading: 'Three catalogs, one shared structure',
  intro:
    "Each service states who executes it, which tools it uses, and who it's built for. They can be hired separately or combined.",
  countSuffix: 'services',
  metaLabels: { levels: 'Levels', location: 'Location', languages: 'Languages' },
  fieldLabels: { profile: 'Profile', stack: 'Stack', idealFor: 'Ideal for' },
  sharedMeta: {
    levels: 'Mid (2–4 years) and Senior (5+ years)',
    location: 'Tijuana, Mexico',
    languages: 'Spanish and English, advanced level',
  },
  ctaLabel: 'Request a quote',
  ctaNote: 'Or email us at contacto@tudi.mx',
  disciplines: [
    {
      key: 'design',
      name: 'Design',
      lead: 'Karen Varela · Design Lead & Operating Partner',
      accent: '#f15d2a',
      items: [
        {
          num: '01',
          title: 'Corporate Identity Design',
          text: 'Conceptualizing and building brands: color palettes, typefaces and brand manuals.',
          profile: 'Senior',
          stack: ['Illustrator', 'Photoshop', 'InDesign'],
          idealFor: 'Companies launching a new brand or repositioning their visual identity.',
        },
        {
          num: '02',
          title: 'Institutional and Commercial Graphic Design',
          text: 'Flyers, brochures, catalogs, presentations, banners and POP material.',
          profile: 'Mid – Senior',
          stack: ['Illustrator', 'Photoshop', 'InDesign', 'PowerPoint'],
          idealFor: 'Companies with an ongoing need for sales and institutional communication material.',
        },
        {
          num: '03',
          title: 'Social Media Design',
          text: 'Templates, visual content, monthly artwork and campaign designs.',
          profile: 'Mid',
          stack: ['Illustrator', 'Photoshop', 'Canva', 'Figma'],
          idealFor: 'Brands that need a constant, consistent presence on social media.',
        },
        {
          num: '04',
          title: 'Web Design & Layout (UXD)',
          text: 'UX/UI design: information architecture, wireframes, high-fidelity prototypes and interface visual design. Also covers redesigning sections, banners, sliders and UX optimization on existing sites.',
          profile: 'Mid – Senior',
          stack: ['Figma', 'Adobe XD', 'Photoshop'],
          idealFor:
            'Companies that need a new website focused on user experience (UX), or that want to improve the usability and look of their current site without a full redesign.',
          note: 'Does not include development/implementation (front-end); see the Development & Support catalog.',
        },
        {
          num: '05',
          title: 'Editorial Design',
          text: 'Layout for documents, magazines, corporate reports and professional presentations.',
          profile: 'Mid – Senior',
          stack: ['InDesign', 'Illustrator', 'PowerPoint'],
          idealFor: 'Companies that publish reports, magazines or documents on a recurring basis.',
        },
        {
          num: '06',
          title: 'Brand Management',
          text: 'Oversight of correct brand usage across every channel and piece of communication.',
          profile: 'Senior',
          stack: ['Brand manuals', 'Style guides', 'Deliverable review'],
          idealFor: 'Companies with multiple collaborators or vendors producing communication material.',
        },
        {
          num: '07',
          title: 'Product & Packaging Design',
          text: 'Labels, packaging and visual material for physical products.',
          profile: 'Senior',
          stack: ['Illustrator', 'Photoshop', '3D mockups'],
          idealFor: 'Brands launching physical products or renewing their packaging line.',
        },
        {
          num: '08',
          title: 'Creative Advisory & Strategic Support',
          text: 'Guidance on image, visual style, brand presence, trends and graphic consistency.',
          profile: 'Senior',
          stack: ['Consulting'],
          idealFor: 'Companies looking for ongoing creative direction, not just one-off deliverables.',
        },
      ],
    },
    {
      key: 'development',
      name: 'Development & Support',
      lead: 'Israel F. · Development & Support Lead',
      accent: '#03E0BD',
      items: [
        {
          num: '01',
          title: 'Web Application Development',
          text: 'Design and implementation of web applications: ASP.NET MVC backoffice, React PWA portals, and new AWS-based products (ECS, S3, CloudFront) when DevOps already operates that infrastructure.',
          profile: 'Mid – Senior',
          stack: ['ASP.NET MVC 5', 'jQuery', 'React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'IIS', 'Git'],
          idealFor:
            'Products that already have — or will have — a pipeline and infrastructure, but need the business software built on top.',
        },
        {
          num: '02',
          title: 'Backend, APIs & Data',
          text: 'Application services, APIs and persistence: authentication, records, online billing and REST contracts. On .NET systems the backend runs on ASP.NET over IIS; on AWS clients, in ECS containers with RDS / S3.',
          profile: 'Mid – Senior',
          stack: ['ASP.NET MVC', 'C#', 'Node.js', 'REST', 'SQL', 'IIS', 'RDS', 'S3'],
          idealFor:
            'Applications whose frontend or mobile app depend on APIs, authentication and data that must stay consistent across environments.',
        },
        {
          num: '03',
          title: 'Production Application Support',
          text: "Handling application-level incidents and tickets: access, requests, records, billing and login on web or app. Reproduction, root cause in code, hotfix and closure. Coordinates with DevOps when the symptom is IIS, network, certificate or pipeline related — that work isn't duplicated.",
          profile: 'Mid – Senior',
          stack: ['IIS', 'ASP.NET', 'Application logs', 'CloudWatch', 'Gitea', 'Jenkins', 'Tickets'],
          idealFor:
            "Clients with production systems that can't wait for the next sprint to fix a defect already impacting users.",
        },
        {
          num: '04',
          title: 'System Integrations',
          text: 'Connecting the application with internal or third-party services: payroll, billing, per-organization instances and APIs or webhooks. Error handling, retries, idempotency and traceability so a failure never goes unnoticed.',
          profile: 'Senior',
          stack: ['REST', 'JSON', 'Webhooks', 'Payroll', 'Billing', 'Token / IAM'],
          idealFor: 'Business flows that cross more than one system and currently fail without visibility.',
        },
        {
          num: '05',
          title: 'Evolutionary Maintenance',
          text: 'Functional changes, patches and improvements on existing code: ASP.NET backoffice, PWA portals and related services. Change control in Git and deployment per instance or, when applicable, through the dev / stg / prd pipelines DevOps operates.',
          profile: 'Mid – Senior',
          stack: ['Git', 'ASP.NET MVC', 'React PWA', 'Gitea', 'GitHub', 'Jenkins', 'IIS', 'Docker'],
          idealFor: 'Applications already in production that need continuous evolution without rewriting the product.',
        },
        {
          num: '06',
          title: 'QA, Diagnostics & Hotfixes',
          text: 'Investigating regressions, smoke tests on critical flows and urgent defect fixes. Every closure includes evidence: reproduction, cause, fix and verification.',
          profile: 'Mid',
          stack: ['Debugging', 'Tests', 'IIS', 'React Native', 'Jenkins', 'CloudWatch Logs', 'Browser'],
          idealFor:
            'Teams that spot the problem in production — login, requests, PWA or app — but lack the in-house capacity to isolate and close it.',
        },
        {
          num: '07',
          title: 'Mobile Applications',
          text: 'Development and support of mobile apps aligned with the web backoffice: authentication, requests, notifications and status lookup. React Native or native Android / iOS, alongside PWA portals when the client already has a web presence.',
          profile: 'Mid – Senior',
          stack: ['React Native', 'Native Android', 'Native iOS', 'REST APIs', 'Notifications'],
          idealFor: 'Systems that already have a web presence and need the same flow on the phone.',
        },
      ],
    },
    {
      key: 'devops',
      name: 'DevOps',
      lead: 'Mike B. · DevOps Lead & Operating Partner',
      accent: '#FFB508',
      items: [
        {
          num: '01',
          title: 'Cloud Infrastructure (AWS)',
          text: 'Design, configuration and administration of AWS infrastructure. Includes VPC, subnet, security group and IAM architecture, plus ECS, RDS, S3, CloudFront and related services.',
          profile: 'Mid – Senior',
          stack: ['AWS Console', 'CLI', 'SDK'],
          idealFor: 'Companies migrating to the cloud or needing to stabilize their existing infrastructure.',
        },
        {
          num: '02',
          title: 'Infrastructure as Code (Terraform)',
          text: 'Automating and versioning infrastructure with Terraform. Managing modules, state files, environments (dev/stg/prd) and provisioning pipelines.',
          profile: 'Senior',
          stack: ['Terraform', 'HCL', 'AWS Provider'],
          idealFor: 'Teams that want reproducibility and change control over their infrastructure.',
        },
        {
          num: '03',
          title: 'CI/CD Pipelines',
          text: 'Designing and implementing continuous integration and delivery pipelines. From commit to automated deployment.',
          profile: 'Mid – Senior',
          stack: ['Jenkins', 'Gitea', 'GitHub Actions', 'Nexus'],
          idealFor: 'Development teams doing manual deploys or working with slow release cycles.',
        },
        {
          num: '04',
          title: 'Containerization on AWS (ECS)',
          text: 'Designing and operating containerized workloads on Amazon ECS (EC2 and Fargate). Managing task definitions, services, load balancers and networking.',
          profile: 'Mid – Senior',
          stack: ['Docker', 'ECS', 'ECR', 'ALB'],
          idealFor: 'Applications that need to scale without managing servers.',
          note: 'Kubernetes (EKS) available as a service starting Q1 2027.',
        },
        {
          num: '05',
          title: 'Monitoring & Observability',
          text: 'Setting up alerts, dashboards and log retention. Full visibility into the state of infrastructure and applications.',
          profile: 'Mid',
          stack: ['CloudWatch', 'Log Groups', 'Metrics', 'Alarms'],
          idealFor: 'Teams operating without visibility, or that react to production problems too late.',
        },
        {
          num: '06',
          title: 'FinOps / AWS Cost Optimization',
          text: 'Auditing and reducing costs across AWS accounts. Tag normalization, rightsizing, Savings Plans, removing idle resources and reporting by client or project.',
          profile: 'Senior',
          stack: ['AWS Cost Explorer', 'boto3', 'Python', 'Excel'],
          idealFor: "Companies with AWS accounts lacking cost governance, or with bills they don't understand.",
        },
      ],
    },
  ],
}

const es: ServicesCatalog = {
  eyebrow: '01 · Servicios',
  heading: 'Tres catálogos con el mismo esquema',
  intro:
    'Cada servicio declara el perfil que lo ejecuta, las herramientas con las que trabaja y para quién está pensado. Se contratan por separado o combinados.',
  countSuffix: 'servicios',
  metaLabels: { levels: 'Niveles', location: 'Ubicación', languages: 'Idiomas' },
  fieldLabels: { profile: 'Perfil', stack: 'Stack', idealFor: 'Ideal para' },
  sharedMeta: {
    levels: 'Mid (2–4 años) y Senior (5+ años)',
    location: 'Tijuana, México',
    languages: 'Español e inglés, nivel alto',
  },
  ctaLabel: 'Cotizar un servicio',
  ctaNote: 'O escríbenos a contacto@tudi.mx',
  disciplines: [
    {
      key: 'design',
      name: 'Diseño',
      lead: 'Karen Varela · Diseño Lead & Socia Operativa',
      accent: '#f15d2a',
      items: [
        {
          num: '01',
          title: 'Diseño de Identidad Corporativa',
          text: 'Conceptualización y creación de marcas, paletas de color, tipografías y manuales de marca.',
          profile: 'Senior',
          stack: ['Illustrator', 'Photoshop', 'InDesign'],
          idealFor: 'Empresas que lanzan una marca nueva o necesitan reposicionar su identidad visual.',
        },
        {
          num: '02',
          title: 'Diseño de Piezas Gráficas Institucionales y Comerciales',
          text: 'Desarrollo de flyers, brochures, catálogos, presentaciones, banners y material POP.',
          profile: 'Mid – Senior',
          stack: ['Illustrator', 'Photoshop', 'InDesign', 'PowerPoint'],
          idealFor: 'Empresas con necesidad constante de material de ventas y comunicación institucional.',
        },
        {
          num: '03',
          title: 'Diseño para Redes Sociales',
          text: 'Creación de plantillas, contenido visual, artes mensuales y diseños para campañas.',
          profile: 'Mid',
          stack: ['Illustrator', 'Photoshop', 'Canva', 'Figma'],
          idealFor: 'Marcas que requieren presencia constante y consistente en redes sociales.',
        },
        {
          num: '04',
          title: 'Diseño y Maquetación Web (UXD)',
          text: 'Diseño UX/UI: arquitectura de información, wireframes, prototipos de alta fidelidad y diseño visual de interfaz. Incluye también rediseño de secciones, banners, sliders y optimización de UX en sitios existentes.',
          profile: 'Mid – Senior',
          stack: ['Figma', 'Adobe XD', 'Photoshop'],
          idealFor:
            'Empresas que necesitan un sitio web nuevo con enfoque en experiencia de usuario (UX), o que buscan mejorar la usabilidad y estética de su sitio actual sin rediseñarlo por completo.',
          note: 'No incluye desarrollo/implementación (front-end); ver catálogo de Desarrollo y Soporte.',
        },
        {
          num: '05',
          title: 'Diseño Editorial',
          text: 'Maquetación de documentos, revistas, informes corporativos y presentaciones profesionales.',
          profile: 'Mid – Senior',
          stack: ['InDesign', 'Illustrator', 'PowerPoint'],
          idealFor: 'Empresas que publican reportes, revistas o documentos con periodicidad.',
        },
        {
          num: '06',
          title: 'Gestión de Marca (Brand Management)',
          text: 'Supervisión del uso correcto de la marca en todos los canales y piezas de comunicación.',
          profile: 'Senior',
          stack: ['Manuales de marca', 'Guías de estilo', 'Revisión de entregables'],
          idealFor: 'Empresas con múltiples colaboradores o proveedores que generan piezas de comunicación.',
        },
        {
          num: '07',
          title: 'Diseño para Productos y Empaque',
          text: 'Desarrollo de etiquetas, packaging y material visual para productos.',
          profile: 'Senior',
          stack: ['Illustrator', 'Photoshop', 'Mockups 3D'],
          idealFor: 'Marcas que lanzan productos físicos o renuevan su línea de empaque.',
        },
        {
          num: '08',
          title: 'Asesoría Creativa y Acompañamiento Estratégico',
          text: 'Recomendaciones sobre imagen, estilo visual, presencia de marca, tendencias y coherencia gráfica.',
          profile: 'Senior',
          stack: ['Consultoría'],
          idealFor: 'Empresas que buscan dirección creativa continua, no solo entregables puntuales.',
        },
      ],
    },
    {
      key: 'development',
      name: 'Desarrollo & Soporte',
      lead: 'Israel F. · Lead de Desarrollo & Soporte',
      accent: '#03E0BD',
      items: [
        {
          num: '01',
          title: 'Desarrollo de Aplicaciones Web',
          text: 'Diseño e implementación de aplicaciones web: backoffice en ASP.NET MVC, portales en React PWA, y productos nuevos sobre AWS (ECS, S3, CloudFront) cuando DevOps ya opera esa infra.',
          profile: 'Mid – Senior',
          stack: ['ASP.NET MVC 5', 'jQuery', 'React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'IIS', 'Git'],
          idealFor:
            'Productos que ya tienen — o van a tener — pipeline e infraestructura, pero necesitan el software de negocio.',
        },
        {
          num: '02',
          title: 'Backend, APIs y Datos',
          text: 'Servicios de aplicación, APIs y persistencia: autenticación, expedientes, facturación en línea y contratos REST. En sistemas .NET el backend vive en ASP.NET sobre IIS; en clientes AWS, en contenedores ECS con RDS / S3.',
          profile: 'Mid – Senior',
          stack: ['ASP.NET MVC', 'C#', 'Node.js', 'REST', 'SQL', 'IIS', 'RDS', 'S3'],
          idealFor:
            'Aplicaciones cuyo frontend o app móvil dependen de APIs, autenticación y datos que deben mantenerse consistentes entre ambientes.',
        },
        {
          num: '03',
          title: 'Soporte de Aplicaciones en Producción',
          text: 'Atención de incidentes y tickets a nivel de aplicación: acceso, solicitudes, expedientes, facturación y login en web o app. Reproducción, causa raíz en código, hotfix y cierre. Coordinación con DevOps cuando el síntoma es de IIS, red, certificado o pipeline — no se duplica ese trabajo.',
          profile: 'Mid – Senior',
          stack: ['IIS', 'ASP.NET', 'Logs de aplicación', 'CloudWatch', 'Gitea', 'Jenkins', 'Tickets'],
          idealFor:
            'Clientes con sistemas en producción que no pueden esperar al siguiente sprint para un defecto que ya impacta usuarios.',
        },
        {
          num: '04',
          title: 'Integraciones entre Sistemas',
          text: 'Conexión de la aplicación con servicios internos o de terceros: nómina, facturación, instancias por organización y APIs o webhooks. Manejo de errores, reintentos, idempotencia y trazabilidad para que un fallo no se pierda en silencio.',
          profile: 'Senior',
          stack: ['REST', 'JSON', 'Webhooks', 'Nómina', 'Facturación', 'Token / IAM'],
          idealFor: 'Flujos de negocio que cruzan más de un sistema y hoy fallan sin visibilidad.',
        },
        {
          num: '05',
          title: 'Mantenimiento Evolutivo',
          text: 'Cambios funcionales, parches y mejoras sobre código existente: backoffice ASP.NET, portales PWA y servicios asociados. Control de cambios en Git y despliegue por instancia o, cuando aplica, por los pipelines dev / stg / prd que opera DevOps.',
          profile: 'Mid – Senior',
          stack: ['Git', 'ASP.NET MVC', 'React PWA', 'Gitea', 'GitHub', 'Jenkins', 'IIS', 'Docker'],
          idealFor: 'Aplicaciones que ya están en producción y necesitan evolución continua sin reescribir el producto.',
        },
        {
          num: '06',
          title: 'Calidad, Diagnóstico y Hotfixes',
          text: 'Investigación de regresiones, pruebas de humo sobre los flujos críticos y corrección urgente de defectos. Cada cierre incluye evidencia: reproducción, causa, fix y verificación.',
          profile: 'Mid',
          stack: ['Debugging', 'Tests', 'IIS', 'React Native', 'Jenkins', 'CloudWatch Logs', 'Navegador'],
          idealFor:
            'Equipos que detectan el problema en producción — login, solicitudes, PWA o app — pero no tienen capacidad interna para aislarlo y cerrarlo.',
        },
        {
          num: '07',
          title: 'Aplicaciones Móviles',
          text: 'Desarrollo y soporte de apps móviles alineadas al backoffice web: autenticación, solicitudes, notificaciones y consulta de estado. React Native o nativo Android / iOS, en paralelo a portales PWA cuando el cliente ya tiene web.',
          profile: 'Mid – Senior',
          stack: ['React Native', 'Android nativo', 'iOS nativo', 'APIs REST', 'Notificaciones'],
          idealFor: 'Sistemas que ya tienen web y necesitan el mismo flujo en el teléfono.',
        },
      ],
    },
    {
      key: 'devops',
      name: 'DevOps',
      lead: 'Mike B. · DevOps Lead & Socio Operativo',
      accent: '#FFB508',
      items: [
        {
          num: '01',
          title: 'Cloud Infrastructure (AWS)',
          text: 'Diseño, configuración y administración de infraestructura en AWS. Incluye arquitectura de VPCs, subnets, security groups, IAM, ECS, RDS, S3, CloudFront y servicios relacionados.',
          profile: 'Mid – Senior',
          stack: ['AWS Console', 'CLI', 'SDK'],
          idealFor: 'Empresas que migran a la nube o necesitan estabilizar su infraestructura existente.',
        },
        {
          num: '02',
          title: 'Infrastructure as Code (Terraform)',
          text: 'Automatización y versionado de infraestructura mediante Terraform. Gestión de módulos, state files, ambientes (dev/stg/prd) y pipelines de aprovisionamiento.',
          profile: 'Senior',
          stack: ['Terraform', 'HCL', 'AWS Provider'],
          idealFor: 'Equipos que quieren reproducibilidad y control de cambios en su infraestructura.',
        },
        {
          num: '03',
          title: 'CI/CD Pipelines',
          text: 'Diseño e implementación de pipelines de integración y entrega continua. Desde el commit hasta el despliegue automatizado.',
          profile: 'Mid – Senior',
          stack: ['Jenkins', 'Gitea', 'GitHub Actions', 'Nexus'],
          idealFor: 'Equipos de desarrollo que hacen deploys manuales o con ciclos lentos.',
        },
        {
          num: '04',
          title: 'Containerización en AWS (ECS)',
          text: 'Diseño y operación de workloads contenerizados en Amazon ECS (EC2 y Fargate). Gestión de task definitions, services, load balancers y networking.',
          profile: 'Mid – Senior',
          stack: ['Docker', 'ECS', 'ECR', 'ALB'],
          idealFor: 'Aplicaciones que necesitan escalar sin gestionar servidores.',
          note: 'Kubernetes (EKS) disponible como servicio a partir de Q1 2027.',
        },
        {
          num: '05',
          title: 'Monitoreo & Observabilidad',
          text: 'Configuración de alertas, dashboards y retención de logs. Visibilidad completa del estado de la infraestructura y aplicaciones.',
          profile: 'Mid',
          stack: ['CloudWatch', 'Log Groups', 'Metrics', 'Alarms'],
          idealFor: 'Equipos que operan sin visibilidad o que reaccionan a problemas en producción de forma tardía.',
        },
        {
          num: '06',
          title: 'FinOps / Optimización de Costos AWS',
          text: 'Auditoría y reducción de costos en cuentas AWS. Tag normalization, rightsizing, Savings Plans, eliminación de recursos ociosos y reportes por cliente o proyecto.',
          profile: 'Senior',
          stack: ['AWS Cost Explorer', 'boto3', 'Python', 'Excel'],
          idealFor: 'Empresas con cuentas AWS sin gobernanza de costos o con facturas que no comprenden.',
        },
      ],
    },
  ],
}

const catalogs: Record<Locale, ServicesCatalog> = { en, es }

export function getServicesCatalog(locale: Locale): ServicesCatalog {
  return catalogs[locale]
}
