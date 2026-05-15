import * as React from "react"

interface ChipProps {
  cx: number
  cy: number
  n: number
}

const EventChip: React.FC<ChipProps> = ({ cx, cy, n }) => (
  <g>
    <circle cx={cx} cy={cy} r={10.5} fill="var(--accent)" />
    <text
      x={cx}
      y={cy + 3.5}
      textAnchor="middle"
      className="ss-arch-chip"
      fill="var(--accent-ink)"
    >
      {n}
    </text>
  </g>
)

const Architecture: React.FC = () => (
  <figure className="ss-arch">
    <svg
      viewBox="0 0 720 440"
      className="ss-arch-svg"
      role="img"
      aria-label="Singularity Shell architecture — message flow between the shell, its navigation, and the iframed apps."
    >
      {/* SHELL APP outer frame */}
      <rect
        x={8}
        y={8}
        width={704}
        height={424}
        rx={10}
        fill="none"
        stroke="var(--border)"
      />
      <text x={24} y={28} className="ss-arch-eyebrow">
        SHELL APP
      </text>

      {/* address bar */}
      <rect
        x={40}
        y={48}
        width={640}
        height={28}
        rx={14}
        fill="none"
        stroke="var(--border)"
      />
      <circle cx={56} cy={62} r={2.5} fill="var(--fg-dim)" />
      <circle cx={66} cy={62} r={2.5} fill="var(--fg-dim)" />
      <circle cx={76} cy={62} r={2.5} fill="var(--fg-dim)" />
      <text
        x={360}
        y={66}
        textAnchor="middle"
        className="ss-arch-mono ss-arch-mono-dim"
      >
        biboswanroy / console / attivo
      </text>

      {/* NAVIGATION */}
      <text x={40} y={104} className="ss-arch-eyebrow">
        NAVIGATION
      </text>
      <rect
        x={40}
        y={112}
        width={180}
        height={200}
        rx={8}
        fill="none"
        stroke="var(--border)"
      />
      <text x={60} y={148} className="ss-arch-item">
        Console
      </text>
      {/* active nav item background */}
      <rect
        x={48}
        y={166}
        width={164}
        height={32}
        rx={6}
        fill="var(--bg-soft)"
        stroke="var(--fg)"
      />
      <text x={60} y={186} className="ss-arch-item ss-arch-item-active">
        Attivo
      </text>
      <text x={60} y={224} className="ss-arch-item">
        Skylight
      </text>

      {/* IFRAMES container */}
      <text x={240} y={104} className="ss-arch-eyebrow">
        IFRAMES · 1 VISIBLE · 2 HIDDEN
      </text>
      <rect
        x={240}
        y={112}
        width={440}
        height={200}
        rx={8}
        fill="none"
        stroke="var(--border)"
      />

      {/* Console iframe — hidden */}
      <rect
        x={252}
        y={124}
        width={416}
        height={52}
        rx={6}
        fill="none"
        stroke="var(--border)"
        strokeDasharray="3 4"
      />
      <text x={266} y={154} className="ss-arch-mono">
        console iframe
      </text>
      <text
        x={654}
        y={154}
        textAnchor="end"
        className="ss-arch-mono ss-arch-mono-dim"
      >
        hidden
      </text>

      {/* Attivo iframe — active */}
      <rect
        x={252}
        y={184}
        width={416}
        height={56}
        rx={6}
        fill="var(--bg-soft)"
        stroke="var(--fg)"
      />
      <text x={266} y={216} className="ss-arch-mono ss-arch-mono-strong">
        attivo iframe
      </text>
      <text
        x={654}
        y={216}
        textAnchor="end"
        className="ss-arch-mono ss-arch-mono-strong"
      >
        visible
      </text>

      {/* Skylight iframe — hidden */}
      <rect
        x={252}
        y={248}
        width={416}
        height={52}
        rx={6}
        fill="none"
        stroke="var(--border)"
        strokeDasharray="3 4"
      />
      <text x={266} y={278} className="ss-arch-mono">
        skylight iframe
      </text>
      <text
        x={654}
        y={278}
        textAnchor="end"
        className="ss-arch-mono ss-arch-mono-dim"
      >
        hidden
      </text>

      {/* postMessage flow nav → active iframe (event 1) */}
      <line
        x1={220}
        y1={212}
        x2={252}
        y2={212}
        stroke="var(--fg-muted)"
        strokeWidth={1}
      />
      <polygon points="252,212 246,209 246,215" fill="var(--fg-muted)" />
      <EventChip cx={236} cy={194} n={1} />

      {/* show / hide indicator on active iframe (event 2) */}
      <EventChip cx={628} cy={184} n={2} />

      {/* iframe → address bar URL sync (event 3) */}
      <path
        d="M 600 184 L 600 90"
        stroke="var(--fg-muted)"
        strokeWidth={1}
        strokeDasharray="3 4"
        fill="none"
      />
      <polygon points="600,82 597,90 603,90" fill="var(--fg-muted)" />
      <EventChip cx={600} cy={140} n={3} />

      {/* DIALOGS overlay */}
      <text x={40} y={342} className="ss-arch-eyebrow">
        CONSOLE DIALOGS IFRAME · TRANSPARENT OVERLAY
      </text>
      <rect
        x={40}
        y={350}
        width={640}
        height={56}
        rx={8}
        fill="none"
        stroke="var(--fg-muted)"
        strokeDasharray="4 5"
      />
      <text
        x={360}
        y={384}
        textAnchor="middle"
        className="ss-arch-mono ss-arch-mono-dim"
      >
        spans the entire shell when active · postMessage-driven
      </text>
      <EventChip cx={648} cy={378} n={4} />
    </svg>

    <ol className="ss-arch-events">
      <li>
        <span className="ss-arch-evt">01</span>
        <span>
          User clicks a nav link → shell posts a message to the relevant iframe;
          the iframe switches its internal route.
        </span>
      </li>
      <li>
        <span className="ss-arch-evt">02</span>
        <span>
          Shell shows the requested iframe and hides the others — no full
          reload, instant switch.
        </span>
      </li>
      <li>
        <span className="ss-arch-evt">03</span>
        <span>
          When an iframe changes route, it posts the new URL up to the shell;
          the shell updates the address bar so deep links keep working.
        </span>
      </li>
      <li>
        <span className="ss-arch-evt">04</span>
        <span>
          Dialogs iframe becomes a transparent overlay spanning the shell; the
          user interacts with it as if it lives in the host app.
        </span>
      </li>
    </ol>
  </figure>
)

export default Architecture
