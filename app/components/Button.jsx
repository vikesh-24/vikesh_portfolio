import Link from 'next/link'

export default function Button({
  href,
  onClick,
  variant = 'primary',
  className = '',
  children,
  ...props
}) {
  const base = 'inline-flex items-center justify-center rounded-full text-sm font-medium tracking-wide transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black'
  const variants = {
    primary: 'bg-black text-white hover:bg-zinc-800',
    secondary: 'border border-black text-black hover:bg-black hover:text-white',
    ghost: 'text-black hover:bg-zinc-100'
  }
  const classes = `${base} px-6 py-3 ${variants[variant]} ${className}`

  if (href) {
    const isExternal = href.startsWith('http')
    if (isExternal) {
      return (
        <a href={href} className={classes} {...props} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      )
    }

    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    )
  }

  return (
    <button onClick={onClick} className={classes} {...props}>
      {children}
    </button>
  )
}
