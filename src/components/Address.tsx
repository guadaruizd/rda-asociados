import { mapsUrl, site } from '../config/site'

export function Address() {
  return (
    <section
      id="ubicacion"
      className="section section--ink address"
      aria-labelledby="address-title"
    >
      <div className="section__inner address__inner">
        <div>
          <p className="section__eyebrow section__eyebrow--gold">Ubicación</p>
          <h2 id="address-title" className="section__title section__title--light">
            Estudio en Asunción
          </h2>
          <address className="address__block">
            {site.address.lines.map((line) => (
              <span key={line} className="address__line">
                {line}
              </span>
            ))}
          </address>
          <a
            className="btn btn--ghost"
            href={mapsUrl()}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver en Maps
          </a>
        </div>
        <figure className="address__map">
          <iframe
            title={`Mapa de ${site.legalName}`}
            src={site.address.embedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </figure>
      </div>
    </section>
  )
}
