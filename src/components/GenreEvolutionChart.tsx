import { useState } from 'react'
import { computeGenreEvolution, GENRE_SERIES } from '../data/genreEvolution'

const WIDTH = 800
const HEIGHT = 420
const MARGIN = { top: 28, right: 16, bottom: 34, left: 36 }
const PLOT_W = WIDTH - MARGIN.left - MARGIN.right
const PLOT_H = HEIGHT - MARGIN.top - MARGIN.bottom
const BAR_W = 24
const GAP = 2
const SURFACE = '#0a0a0a'

interface Hovered {
  decade: string
  genre: string
  count: number
  x: number
  y: number
}

export default function GenreEvolutionChart() {
  const data = computeGenreEvolution()
  const yMax = Math.ceil(Math.max(...data.map((d) => d.total)) / 10) * 10 || 10
  const yTicks = [0, yMax / 3, (yMax * 2) / 3, yMax].map((v) => Math.round(v / 5) * 5)
  const slotW = PLOT_W / data.length
  const [hovered, setHovered] = useState<Hovered | null>(null)

  function scaleY(value: number) {
    return MARGIN.top + PLOT_H - (value / yMax) * PLOT_H
  }

  return (
    <div className="relative">
      <svg
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        className="w-full"
        role="img"
        aria-label="Numero di band formate per decennio, suddivise per genere principale"
      >
        {/* Gridlines + y-axis labels */}
        {yTicks.map((tick) => (
          <g key={tick}>
            <line
              x1={MARGIN.left}
              x2={WIDTH - MARGIN.right}
              y1={scaleY(tick)}
              y2={scaleY(tick)}
              stroke="#2c2c2a"
              strokeWidth={1}
            />
            <text x={MARGIN.left - 8} y={scaleY(tick) + 4} textAnchor="end" fontSize={11} fill="#898781">
              {tick}
            </text>
          </g>
        ))}
        {/* Baseline */}
        <line
          x1={MARGIN.left}
          x2={WIDTH - MARGIN.right}
          y1={scaleY(0)}
          y2={scaleY(0)}
          stroke="#383835"
          strokeWidth={1}
        />

        {data.map((d, i) => {
          const slotX = MARGIN.left + i * slotW
          const barX = slotX + (slotW - BAR_W) / 2
          const series = GENRE_SERIES.filter((s) => (d.counts[s.name] ?? 0) > 0)

          let cumulative = 0
          const segments = series.map((s) => {
            const count = d.counts[s.name] ?? 0
            const yTop = scaleY(cumulative + count)
            const yBottom = scaleY(cumulative)
            cumulative += count
            return { series: s, count, yTop, yBottom }
          })

          return (
            <g key={d.decade}>
              {segments.map((seg, segIdx) => {
                const isHovered = hovered?.decade === d.decade && hovered.genre === seg.series.name
                const hasGapAbove = segIdx < segments.length - 1
                return (
                  <g key={seg.series.name}>
                    <rect
                      x={barX}
                      y={seg.yTop}
                      width={BAR_W}
                      height={Math.max(seg.yBottom - seg.yTop, 0)}
                      fill={seg.series.color}
                      opacity={isHovered ? 1 : 0.92}
                      tabIndex={0}
                      role="img"
                      aria-label={`${d.decade}, ${seg.series.name}: ${seg.count} band`}
                      onPointerEnter={(e) =>
                        setHovered({
                          decade: d.decade,
                          genre: seg.series.name,
                          count: seg.count,
                          x: e.clientX,
                          y: e.clientY,
                        })
                      }
                      onPointerMove={(e) =>
                        setHovered({
                          decade: d.decade,
                          genre: seg.series.name,
                          count: seg.count,
                          x: e.clientX,
                          y: e.clientY,
                        })
                      }
                      onFocus={() =>
                        setHovered({ decade: d.decade, genre: seg.series.name, count: seg.count, x: 0, y: 0 })
                      }
                      onPointerLeave={() => setHovered(null)}
                      onBlur={() => setHovered(null)}
                      style={{ cursor: 'pointer', outline: 'none' }}
                    />
                    {hasGapAbove && (
                      <rect x={barX} y={seg.yTop - GAP} width={BAR_W} height={GAP} fill={SURFACE} />
                    )}
                  </g>
                )
              })}
              {/* Valore totale sulla cima della colonna */}
              <text
                x={barX + BAR_W / 2}
                y={scaleY(d.total) - 8}
                textAnchor="middle"
                fontSize={12}
                fontWeight={600}
                fill="#ffffff"
              >
                {d.total}
              </text>
              {/* Etichetta decennio */}
              <text
                x={slotX + slotW / 2}
                y={HEIGHT - MARGIN.bottom + 20}
                textAnchor="middle"
                fontSize={12}
                fill="#c3c2b7"
              >
                {d.decade}
              </text>
            </g>
          )
        })}
      </svg>

      {hovered && (
        <div
          className="pointer-events-none fixed z-50 -translate-x-1/2 -translate-y-full rounded-md border border-white/10 bg-black/95 px-3 py-2 text-xs shadow-lg"
          style={{ left: hovered.x, top: hovered.y - 10 }}
        >
          <p className="font-heading font-semibold text-white">{hovered.count} band</p>
          <p className="text-white/60">
            {hovered.genre} · {hovered.decade}
          </p>
        </div>
      )}

      <div className="mt-4 flex flex-wrap justify-center gap-x-4 gap-y-2">
        {GENRE_SERIES.map((s) => (
          <span key={s.name} className="flex items-center gap-1.5 text-xs text-white/60">
            <span className="inline-block h-2 w-4 shrink-0 rounded-sm" style={{ backgroundColor: s.color }} />
            {s.name}
          </span>
        ))}
      </div>

      <details className="mx-auto mt-4 max-w-md text-center">
        <summary className="cursor-pointer font-heading text-xs uppercase tracking-wide text-white/40 hover:text-white/70">
          Vedi i dati in tabella
        </summary>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full border-collapse text-left text-xs text-white/70">
            <thead>
              <tr className="border-b border-white/10">
                <th className="py-1.5 pr-3 font-heading font-medium uppercase tracking-wide text-white/40">
                  Decennio
                </th>
                <th className="py-1.5 pr-3 font-heading font-medium uppercase tracking-wide text-white/40">
                  Genere principale
                </th>
                <th className="py-1.5 font-heading font-medium uppercase tracking-wide text-white/40">Band</th>
              </tr>
            </thead>
            <tbody>
              {data.flatMap((d) =>
                GENRE_SERIES.filter((s) => (d.counts[s.name] ?? 0) > 0).map((s) => (
                  <tr key={`${d.decade}-${s.name}`} className="border-b border-white/5">
                    <td className="py-1.5 pr-3">{d.decade}</td>
                    <td className="py-1.5 pr-3">{s.name}</td>
                    <td className="py-1.5">{d.counts[s.name]}</td>
                  </tr>
                )),
              )}
            </tbody>
          </table>
        </div>
      </details>
    </div>
  )
}
