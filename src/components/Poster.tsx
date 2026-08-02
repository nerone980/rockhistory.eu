import { useId } from 'react'

interface PosterProps {
  title: string
  subtitle: string
  palette: [string, string]
  badge?: string
  imageUrl?: string
  variant?: 'poster' | 'turntable'
}

export default function Poster({ title, subtitle, palette, badge, imageUrl, variant = 'poster' }: PosterProps) {
  const rawId = useId().replace(/[^a-zA-Z0-9]/g, '')

  if (variant === 'turntable') {
    return (
      <div
        className="poster-tilt relative flex aspect-[3/4] w-full flex-col items-center overflow-hidden rounded-lg border border-white/10 bg-gradient-to-b from-neutral-900 to-black p-3 shadow-lg group-hover:border-white/20 group-hover:shadow-[0_24px_48px_-12px_var(--glow)]"
        style={{ '--glow': `${palette[0]}80` } as React.CSSProperties}
      >
        {badge && (
          <span className="absolute left-3 top-3 z-10 rounded-full bg-black/50 px-2 py-0.5 text-xs font-semibold uppercase tracking-wide text-white backdrop-blur">
            {badge}
          </span>
        )}

        <div className="relative flex w-full flex-1 items-center justify-center">
          <svg
            viewBox="0 0 100 100"
            aria-hidden
            className="pointer-events-none absolute right-1 top-1 h-9 w-9 text-white/25 sm:h-11 sm:w-11"
          >
            <circle cx="85" cy="15" r="6" fill="currentColor" />
            <line x1="85" y1="15" x2="48" y2="52" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            <circle cx="48" cy="52" r="4" fill="currentColor" />
          </svg>

          <svg
            viewBox="0 0 200 200"
            aria-hidden
            className="h-[76%] w-[76%] origin-center animate-spin-slow drop-shadow-[0_10px_18px_rgba(0,0,0,0.55)] group-hover:[animation-duration:3s]"
          >
            <defs>
              <radialGradient id={`vinyl-label-${rawId}`} cx="35%" cy="30%" r="80%">
                <stop offset="0%" stopColor={palette[1]} />
                <stop offset="100%" stopColor={palette[0]} />
              </radialGradient>
              <clipPath id={`vinyl-clip-${rawId}`}>
                <circle cx="100" cy="100" r="44" />
              </clipPath>
            </defs>
            <circle cx="100" cy="100" r="98" fill="#0a0a0a" />
            <circle cx="100" cy="100" r="86" fill="none" stroke="#ffffff" strokeOpacity="0.07" strokeWidth="1" />
            <circle cx="100" cy="100" r="72" fill="none" stroke="#ffffff" strokeOpacity="0.07" strokeWidth="1" />
            <circle cx="100" cy="100" r="58" fill="none" stroke="#ffffff" strokeOpacity="0.07" strokeWidth="1" />
            <circle cx="100" cy="100" r="44" fill={`url(#vinyl-label-${rawId})`} />
            {imageUrl && (
              <image
                href={imageUrl}
                x="56"
                y="56"
                width="88"
                height="88"
                preserveAspectRatio="xMidYMid slice"
                clipPath={`url(#vinyl-clip-${rawId})`}
              />
            )}
            <circle cx="100" cy="100" r="44" fill="none" stroke="#000000" strokeOpacity="0.35" strokeWidth="1.5" />
            <circle cx="100" cy="100" r="4" fill="#0a0a0a" />
          </svg>
        </div>

        <div className="relative z-10 w-full pb-1 pt-2 text-center">
          <h3 className="truncate font-display text-xl leading-none tracking-tight text-white drop-shadow-md sm:text-2xl">
            {title}
          </h3>
          <p className="mt-1 truncate font-heading text-xs font-medium uppercase tracking-wide text-white/60">
            {subtitle}
          </p>
        </div>
      </div>
    )
  }

  return (
    <div
      className="poster-tilt relative flex aspect-[3/4] w-full flex-col justify-end overflow-hidden rounded-lg border border-white/10 p-4 shadow-lg group-hover:border-white/20 group-hover:shadow-[0_24px_48px_-12px_var(--glow)]"
      style={{
        '--glow': `${palette[0]}80`,
        ...(imageUrl
          ? {}
          : {
              backgroundImage: `radial-gradient(circle at 30% 20%, ${palette[1]}55, transparent 60%), linear-gradient(160deg, ${palette[0]}, ${palette[1]})`,
            }),
      } as React.CSSProperties}
    >
      {imageUrl && (
        <>
          <img
            src={imageUrl}
            alt={title}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
        </>
      )}
      {!imageUrl && (
        <div
          aria-hidden
          className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full border-8 border-black/20 transition-transform duration-500 group-hover:rotate-12"
        />
      )}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"
      />
      {badge && (
        <span className="absolute left-3 top-3 z-10 rounded-full bg-black/50 px-2 py-0.5 text-xs font-semibold uppercase tracking-wide text-white backdrop-blur">
          {badge}
        </span>
      )}
      <h3 className="relative z-10 font-display text-2xl leading-none tracking-tight text-white drop-shadow-md sm:text-3xl">
        {title}
      </h3>
      <p className="relative z-10 mt-1.5 font-heading text-sm font-medium uppercase tracking-wide text-white/75">
        {subtitle}
      </p>
    </div>
  )
}
