import { site, mailtoUrl, whatsappUrl } from '../config/site'

export function Contact() {
  return (
    <section
      id="contacto"
      className="section section--light contact"
      aria-labelledby="contact-title"
    >
      <div className="section__inner">
        <div className="rise">
        <p className="section__eyebrow">Contacto</p>
        <h2 id="contact-title" className="section__title">
          Hablemos de su caso
        </h2>
        <p className="section__lead section__lead--dark">
          Escríbanos por WhatsApp. Responderemos a la brevedad para coordinar
          un asesoramiento.
        </p>
        </div>

        <div className="contact__options rise rise--late">
          <a
            className="contact-option contact-option--accent"
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="contact-option__label">WhatsApp</span>
            <span className="contact-option__value contact-option__value--plain">
              {site.whatsappDisplay}
            </span>
            <span className="contact-option__hint">Envíanos un mensaje</span>
          </a>

          <a className="contact-option" href={mailtoUrl()}>
            <span className="contact-option__label">Correo</span>
            <span className="contact-option__value contact-option__value--plain">
              {site.email}
            </span>
            <span className="contact-option__hint">Envíanos un correo</span>
          </a>
        </div>
      </div>
    </section>
  )
}
