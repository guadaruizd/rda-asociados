import { Logo } from './Logo'
import { site, whatsappUrl } from '../config/site'

export function Hero() {
  return (
    <section id="inicio" className="hero" aria-labelledby="hero-brand">
      <div className="hero__atmosphere" aria-hidden="true">
        <div className="hero__columns" />
        <div className="hero__veil" />
        <div className="hero__gold-wash" />
      </div>

      <div className="hero__content reveal">
        <div className="hero__identity">
          <div className="hero__logo-block">
            <Logo tone="dark" size="lg" />
          </div>

          <h1 id="hero-brand" className="hero__brand">
            {site.name}
          </h1>
        </div>

        <p className="hero__slogan">{site.tagline.split('\n')[0]}</p>
        <p className="hero__descriptor">
          {site.tagline.split('\n')[1]}
        </p>

        <div className="hero__actions">
          <a
            className="btn btn--primary"
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
          >
            Solicitar asesoramiento
          </a>
        </div>
      </div>
    </section>
  )
}
