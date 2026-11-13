import { useEffect, useRef } from 'react'
import { site } from '../config/site'

function ScalesMark() {
  return (
    <svg className="service__mark" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 2.4v16.6" />
      <path d="M8.75 19h6.5" />
      <path d="M7.25 21.4h9.5" />
      <path d="M3.6 7.15h16.8" />
      <path d="M6.15 7.15v3.35" />
      <path d="M17.85 7.15v3.35" />
      <path d="M3.1 11.05c.95 1.9 2.35 2.9 3.9 2.9s2.95-1 3.9-2.9" />
      <path d="M13.1 11.05c.95 1.9 2.35 2.9 3.9 2.9s2.95-1 3.9-2.9" />
    </svg>
  )
}

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
        <div className="rise">
        <p className="section__eyebrow section__eyebrow--gold">Servicios</p>
        <h2 id="services-title" className="section__title section__title--light">
          Áreas de práctica
        </h2>
        <p className="section__lead">
          Defensa penal en Asunción y asesoría en otros fueros cuando el caso lo
          requiere.
        </p>
        </div>

        <ul className="services__list" ref={listRef}>
          {site.services.map((service, index) => (
            <li
              key={service.title}
              className="service"
              style={{ ['--delay' as string]: `${index * 70}ms` }}
            >
              <span className="service__index" aria-hidden="true">
                <ScalesMark />
              </span>
              <h3 className="section__subtitle service__title">{service.title}</h3>
              <p className="service__text">{service.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
