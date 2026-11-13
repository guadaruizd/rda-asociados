import { Logo } from './Logo'
import { site } from '../config/site'

const COPYRIGHT_YEAR = 2026

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <Logo tone="dark" size="sm" />
        <p className="site-footer__copy">
          © {COPYRIGHT_YEAR} {site.name}. Asunción, Paraguay.
        </p>
      </div>
    </footer>
  )
}
