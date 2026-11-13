type LogoProps = {
  /** Variante visual según el fondo de la sección */
  tone?: 'light' | 'dark'
  /** Tamaño relativo */
  size?: 'sm' | 'lg'
  className?: string
}

/**
 * Espacio reservado para el logo principal del estudio.
 * Reemplazar el monograma SVG por `/public/logo.svg` o una imagen cuando esté listo.
 */
export function Logo({ tone = 'dark', size = 'sm', className = '' }: LogoProps) {
  const markClass = [
    'logo-mark',
    tone === 'light' ? 'logo-mark--on-light' : 'logo-mark--on-dark',
    size === 'lg' ? 'logo-mark--lg' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={markClass} aria-label="RDA & Asociados — logo">
      <div className="logo-frame" data-logo-slot>
        {/* Sustituir este bloque por: <img src="/logo.svg" alt="RDA & Asociados" /> */}
        <svg
          className="logo-monogram"
          viewBox="0 0 120 120"
          role="img"
          aria-hidden="true"
        >
          <circle cx="60" cy="60" r="56" className="logo-ring" />
          <text
            x="60"
            y="68"
            textAnchor="middle"
            className="logo-letters"
          >
            RDA
          </text>
        </svg>
      </div>
      {size === 'lg' ? null : (
        <span className="logo-wordmark">
          RDA <span className="logo-amp">&</span> Asociados
        </span>
      )}
    </div>
  )
}
