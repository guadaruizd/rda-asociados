type LogoProps = {
  /** Variante visual según el fondo de la sección */
  tone?: 'light' | 'dark'
  /** Tamaño relativo */
  size?: 'sm' | 'lg'
  className?: string
}

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
    <div className={markClass}>
      <img
        className="logo-img"
        src="/logo.png"
        alt={size === 'lg' ? 'RDA & Asociados' : ''}
        width={764}
        height={537}
      />
      {size === 'lg' ? null : (
        <span className="logo-wordmark">
          RDA <span className="logo-amp">&</span> Asociados
        </span>
      )}
    </div>
  )
}
