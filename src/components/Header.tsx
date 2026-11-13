import { Logo } from './Logo'
import { site, whatsappUrl } from '../config/site'

const nav = [
  { href: '#estudio', label: 'El estudio' },
  { href: '#profesionales', label: 'Profesionales' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#contacto', label: 'Contacto' },
  { href: '#ubicacion', label: 'Ubicación' },
] as const

export function Header() {
  return (
    <header className="site-header">
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <div className="site-header__inner">
        <a href="#inicio" className="site-header__brand">
          <Logo tone="dark" size="sm" />
        </a>
        <nav className="site-nav" aria-label="Principal">
          {nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <a
          className="btn btn--ghost btn--compact"
          href={whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp
        </a>
      </div>
      <p className="visually-hidden">{site.name}</p>
    </header>
  )
}
