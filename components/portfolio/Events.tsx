import * as React from "react"

import { content as C } from "./content"
import Reveal from "./Reveal"

const Events: React.FC = () => (
  <section id="events">
    <div className="wrap">
      <Reveal className="section-head">
        <h2>Talks &amp; appearances</h2>
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
          </div>
        ))}
      </Reveal>
    </div>
  </section>
)

export default Events
