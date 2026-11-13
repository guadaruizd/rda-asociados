import { site } from '../config/site'

export function About() {
  return (
    <section id="estudio" className="section about" aria-labelledby="about-title">
      <div className="about__bg" aria-hidden="true">
        <img src="/justicia.jpg" alt="" width={768} height={1024} />
      </div>
      <div className="section__inner">
        <div className="rise">
          <p className="section__eyebrow section__eyebrow--gold">El estudio</p>
          <h2 id="about-title" className="section__title section__title--light">
            Compromiso con una defensa seria y técnica
          </h2>
          <p className="about__text">{site.description}</p>
          <p className="about__text">
            En Asunción acompañamos a personas y familias frente a procesos penales:
            desde las primeras actuaciones hasta el juicio oral y público, con
            claridad sobre cada etapa y respeto por las garantías del debido proceso
            en el ordenamiento paraguayo.
          </p>
        </div>
      </div>
    </section>
  )
}
