import * as React from "react"

import { content as C } from "./content"
import Reveal from "./Reveal"

const Events: React.FC = () => (
  <section id="events">
    <div className="wrap">
      <Reveal className="section-head">
        <span className="section-num">/02 — Events</span>
        <h2>
          Talks &
          <br />
          <i style={{ color: "var(--fg-muted)" }}>appearances</i>
        </h2>
      </Reveal>
      <Reveal className="list-tight">
        {C.events.map((e) => (
          <div
            key={`${e.date}-${e.title}`}
            className="list-row"
            data-cursor="hover"
          >
            <span className="list-date">{e.date}</span>
            <span className="list-kind">{e.kind}</span>
            <span className="list-title">{e.title}</span>
            <span className="list-venue">{e.venue}</span>
            <span className="list-arr">↗</span>
          </div>
        ))}
      </Reveal>
    </div>
  </section>
)

export default Events
