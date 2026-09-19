export interface NavLink {
  key: 'home' | 'projects' | 'about' | 'contact'
  path: string
}

export const navLinks: NavLink[] = [
  { key: 'home', path: '/' },
  { key: 'projects', path: '/projects' },
  { key: 'about', path: '/about' },
  { key: 'contact', path: '/contact' },
]
