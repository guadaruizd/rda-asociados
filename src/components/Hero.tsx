import { Logo } from './Logo'
import { site, mailtoUrl, whatsappUrl } from '../config/site'

export function Hero() {
  return (
    <section id="inicio" className="hero" aria-labelledby="hero-brand">
      <div className="hero__atmosphere" aria-hidden="true">
        <div className="hero__columns" />
        <div className="hero__veil" />
        <div className="hero__gold-wash" />
      </div>

      <div className="hero__content">
        <div className="hero__logo-block reveal reveal--1">
          <Logo tone="dark" size="lg" />
        </div>

        <h1 id="hero-brand" className="hero__brand reveal reveal--2">
          {site.name}
        </h1>
        <p className="hero__legal reveal reveal--2">{site.legalName}</p>

        <p className="hero__lead reveal reveal--3">{site.tagline}</p>

        <div className="hero__actions reveal reveal--4">
          <a className="btn btn--primary" href="#contacto">
            Solicitar consulta
          </a>
          <a
            className="btn btn--ghost"
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
          >
            Escribir por WhatsApp
          </a>
          <a className="btn btn--text" href={mailtoUrl()}>
            Enviar correo
          </a>
        </div>
      </div>
    </section>
  )
}
