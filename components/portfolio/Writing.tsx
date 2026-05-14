import * as React from "react"

import { content as C } from "./content"
import Reveal from "./Reveal"

const Writing: React.FC = () => (
  <section id="writing">
    <div className="wrap">
      <Reveal className="section-head">
        <span className="section-num">/05 — Writing</span>
        <h2>
          From the
          <br />
          <i style={{ color: "var(--fg-muted)" }}>notebook</i>
        </h2>
      </Reveal>
      <Reveal className="list-tight">
        {C.writing.map((w) => (
          <div
            key={`${w.date}-${w.title}`}
            className="list-row"
            data-cursor="hover"
          >
            <span className="list-date">{w.date}</span>
            <span className="list-kind">{w.read}</span>
            <span className="list-title">{w.title}</span>
            <span className="list-venue">{w.venue}</span>
            <span className="list-arr">→</span>
          </div>
        ))}
      </Reveal>
    </div>
  </section>
)

export default Writing
