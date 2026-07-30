interface PosterProps {
  title: string
  subtitle: string
  palette: [string, string]
  badge?: string
  imageUrl?: string
}

export default function Poster({ title, subtitle, palette, badge, imageUrl }: PosterProps) {
  return (
    <div
      className="relative flex aspect-[3/4] w-full flex-col justify-end overflow-hidden rounded-lg border border-white/10 p-4 shadow-lg transition-all duration-300 ease-out group-hover:-translate-y-1.5 group-hover:scale-[1.02] group-hover:border-white/20 group-hover:shadow-[0_24px_48px_-12px_var(--glow)]"
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
