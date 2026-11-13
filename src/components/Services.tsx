import { useEffect, useRef } from 'react'
import { site } from '../config/site'

export function Services() {
  const listRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    const root = listRef.current
    if (!root) return

    const items = root.querySelectorAll<HTMLElement>('.service')
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -8% 0px' },
    )

    items.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="servicios"
      className="section section--dark services"
      aria-labelledby="services-title"
    >
      <div className="section__inner">
        <p className="section__eyebrow section__eyebrow--gold">Servicios</p>
        <h2 id="services-title" className="section__title section__title--light">
          Áreas de práctica
        </h2>
        <p className="section__lead">
          Defensa penal en Asunción y asesoría en otros fueros cuando el caso lo
          requiere.
        </p>

        <ul className="services__list" ref={listRef}>
          {site.services.map((service, index) => (
            <li
              key={service.title}
              className="service"
              style={{ ['--delay' as string]: `${index * 70}ms` }}
            >
              <span className="service__index" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="service__title">{service.title}</h3>
              <p className="service__text">{service.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
