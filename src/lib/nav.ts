export interface NavLink {
  key: 'services' | 'projects' | 'about' | 'contact'
  path: string
}

export const navLinks: NavLink[] = [
  { key: 'services', path: '/services' },
  { key: 'projects', path: '/projects' },
  { key: 'about', path: '/about' },
  { key: 'contact', path: '/contact' },
]
