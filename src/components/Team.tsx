import { site, whatsappUrl } from '../config/site'

export function Team() {
  const { lawyer } = site

  return (
    <section
      id="profesionales"
      className="section section--light team"
      aria-labelledby="team-title"
    >
      <div className="section__inner">
        <div className="rise">
          <p className="section__eyebrow">Profesionales</p>
          <h2 id="team-title" className="section__title">
            {lawyer.role}
          </h2>
        </div>

        <article className="team__profile">
          <figure className="team__portrait rise">
            <img
              src={lawyer.portrait}
              alt={lawyer.portraitAlt}
              width={768}
              height={1024}
            />
          </figure>
          <div className="team__copy rise rise--late">
            <h3 className="section__subtitle">{lawyer.name}</h3>
            <p className="team__bio">{lawyer.bio}</p>
          </div>
        </article>

        <p className="team__join rise rise--late">
          ¿Querés formar parte del equipo?{' '}
          <a
            href={whatsappUrl(
              `Hola, quiero formar parte del equipo de ${site.name}. Adjunto mi CV.`,
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
            ¡Contactanos y adjuntá tu CV!
          </a>
        </p>
      </div>
    </section>
  )
}
