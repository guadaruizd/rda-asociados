import { site } from '../config/site'

const COPYRIGHT_YEAR = 2026

export function Footer() {
  return (
    <footer className="site-footer">
      <p className="site-footer__copy">
        © {COPYRIGHT_YEAR} {site.name}. Asunción, Paraguay.
      </p>
    </footer>
  )
}
