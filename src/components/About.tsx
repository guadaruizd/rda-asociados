import { site } from '../config/site'

export function About() {
  return (
    <section id="estudio" className="section section--light about" aria-labelledby="about-title">
      <div className="section__inner">
        <p className="section__eyebrow">El estudio</p>
        <h2 id="about-title" className="section__title">
          Compromiso con una defensa seria y técnica
        </h2>
        <p className="about__text">{site.description}</p>
        <p className="about__text about__text--secondary">
          En Asunción acompañamos a personas y familias frente a procesos penales:
          desde las primeras actuaciones hasta el juicio oral y público, con
          claridad sobre cada etapa y respeto por las garantías del debido proceso
          en el ordenamiento paraguayo.
        </p>
      </div>
    </section>
  )
}
