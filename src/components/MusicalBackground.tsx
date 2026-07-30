function GuitarSilhouette({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 400" fill="none" className={className} aria-hidden>
      <path
        d="M100 8c-10 0-18 8-18 18 0 6 3 11 7 15-14 4-24 17-24 32 0 10 5 19 12 25-16 8-27 25-27 45 0 28 23 51 51 51s51-23 51-51c0-20-11-37-27-45 7-6 12-15 12-25 0-15-10-28-24-32 4-4 7-9 7-15 0-10-8-18-18-18h-2z"
        fill="currentColor"
      />
      <rect x="94" y="90" width="12" height="180" fill="currentColor" />
      <path d="M100 268c-30 0-54 24-54 54s24 54 54 54 54-24 54-54-24-54-54-54z" fill="currentColor" />
      <circle cx="100" cy="322" r="16" fill="none" stroke="black" strokeOpacity="0.25" strokeWidth="3" />
      <line x1="86" y1="95" x2="86" y2="270" stroke="black" strokeOpacity="0.15" strokeWidth="1.5" />
      <line x1="100" y1="95" x2="100" y2="270" stroke="black" strokeOpacity="0.15" strokeWidth="1.5" />
      <line x1="114" y1="95" x2="114" y2="270" stroke="black" strokeOpacity="0.15" strokeWidth="1.5" />
    </svg>
  )
}

function VinylRecord({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" className={className} aria-hidden>
      <circle cx="100" cy="100" r="98" fill="currentColor" />
      <circle cx="100" cy="100" r="82" fill="none" stroke="black" strokeOpacity="0.18" strokeWidth="1" />
      <circle cx="100" cy="100" r="64" fill="none" stroke="black" strokeOpacity="0.18" strokeWidth="1" />
      <circle cx="100" cy="100" r="46" fill="none" stroke="black" strokeOpacity="0.18" strokeWidth="1" />
      <circle cx="100" cy="100" r="28" fill="black" fillOpacity="0.25" />
      <circle cx="100" cy="100" r="5" fill="black" fillOpacity="0.4" />
    </svg>
  )
}

function SoundWave({ className }: { className?: string }) {
  const heights = [10, 22, 14, 30, 18, 26, 12, 34, 20, 16, 28, 14, 22, 10]
  return (
    <svg viewBox="0 0 280 40" fill="none" className={className} aria-hidden>
      {heights.map((h, i) => (
        <rect
          key={i}
          x={i * 20}
          y={20 - h / 2}
          width="8"
          height={h}
          rx="4"
          fill="currentColor"
        />
      ))}
    </svg>
  )
}

export default function MusicalBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-neutral-950">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(circle at 15% 20%, rgba(192,57,43,0.12), transparent 40%), radial-gradient(circle at 85% 75%, rgba(142,68,173,0.10), transparent 45%)',
        }}
      />
      <GuitarSilhouette className="absolute -left-16 -bottom-10 h-[520px] w-[260px] rotate-[18deg] text-white/[0.04]" />
      <VinylRecord className="absolute -right-20 top-16 h-72 w-72 text-white/[0.05]" />
      <VinylRecord className="absolute right-1/3 -bottom-24 h-56 w-56 text-white/[0.03]" />
      <SoundWave className="absolute left-1/2 top-1/3 h-10 w-72 -translate-x-1/2 text-white/[0.05]" />
    </div>
  )
}
