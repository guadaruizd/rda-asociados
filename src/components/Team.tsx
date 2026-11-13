import { site } from '../config/site'

export function Team() {
  const { lawyer } = site

  return (
    <section
      id="quienes-somos"
      className="section section--light team"
      aria-labelledby="team-title"
    >
      <div className="section__inner">
        <p className="section__eyebrow">Quiénes somos</p>
        <h2 id="team-title" className="section__title">
          El abogado del estudio
        </h2>

        <article className="team__profile">
          <figure className="team__portrait">
            <img
              src={lawyer.portrait}
              alt={lawyer.portraitAlt}
              width={768}
              height={1024}
            />
          </figure>
          <div className="team__copy">
            <p className="team__role">{lawyer.role}</p>
            <h3 className="team__name">{lawyer.name}</h3>
            <p className="team__bio">{lawyer.bio}</p>
          </div>
        </article>
      </div>
    </section>
  )
}
