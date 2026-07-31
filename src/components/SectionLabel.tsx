export default function SectionLabel({ children, accent }: { children: string; accent?: string }) {
  return (
    <h2 className="flex items-center gap-2 font-heading text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
      <span className="h-px w-4" style={{ backgroundColor: accent ?? '#ef4444' }} />
      {children}
    </h2>
  )
}
