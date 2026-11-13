import { site, mailtoUrl, whatsappUrl } from '../config/site'

export function Contact() {
  return (
    <section
      id="contacto"
      className="section section--light contact"
      aria-labelledby="contact-title"
    >
      <div className="section__inner">
        <p className="section__eyebrow">Contacto</p>
        <h2 id="contact-title" className="section__title">
          Hablemos de su caso
        </h2>
        <p className="section__lead section__lead--dark">
          Puede escribirnos por correo o WhatsApp. Responderemos a la brevedad
          para coordinar una consulta.
        </p>

        <div className="contact__options">
          <a className="contact-option" href={mailtoUrl()}>
            <span className="contact-option__label">Correo electrónico</span>
            <span className="contact-option__value">{site.email}</span>
            <span className="contact-option__hint">Abrir cliente de correo</span>
          </a>

          <a
            className="contact-option contact-option--accent"
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="contact-option__label">WhatsApp</span>
            <span className="contact-option__value">{site.whatsappDisplay}</span>
            <span className="contact-option__hint">Abrir conversación</span>
          </a>
        </div>
      </div>
    </section>
  )
}
