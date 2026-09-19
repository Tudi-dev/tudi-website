export interface NavLink {
  href: string
  label: string
}

export const navLinks: NavLink[] = [
  { href: '/', label: 'Inicio' },
  { href: '/projects', label: 'Portafolio' },
  { href: '/about', label: 'Estudio' },
  { href: '/contact', label: 'Contacto' },
]
