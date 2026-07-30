interface PosterProps {
  title: string
  subtitle: string
  palette: [string, string]
  badge?: string
}

export default function Poster({ title, subtitle, palette, badge }: PosterProps) {
  return (
    <div
      className="relative flex aspect-[3/4] w-full flex-col justify-end overflow-hidden rounded-lg border border-white/10 p-4 shadow-lg transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-2xl"
      style={{
        backgroundImage: `radial-gradient(circle at 30% 20%, ${palette[1]}55, transparent 60%), linear-gradient(160deg, ${palette[0]}, ${palette[1]})`,
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full border-8 border-black/20"
      />
      {badge && (
        <span className="absolute left-3 top-3 rounded-full bg-black/50 px-2 py-0.5 text-xs font-semibold uppercase tracking-wide text-white backdrop-blur">
          {badge}
        </span>
      )}
      <h3 className="font-display text-xl font-bold leading-tight text-white drop-shadow-md sm:text-2xl">
        {title}
      </h3>
      <p className="mt-1 text-sm font-medium text-white/80">{subtitle}</p>
    </div>
  )
}
