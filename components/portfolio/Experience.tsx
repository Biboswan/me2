import * as React from "react"

import { content as C } from "./content"
import Reveal from "./Reveal"

const Experience: React.FC = () => (
  <section id="experience">
    <div className="wrap">
      <Reveal className="section-head">
        <h2>Where I have worked</h2>
      </Reveal>
      <Reveal className="exp-list">
        {C.experience.map((e) => (
          <div
            key={`${e.company}-${e.period}`}
            className="exp-row"
            data-cursor="hover"
          >
            <div className="exp-logo" aria-hidden="true">
              {e.logo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={e.logo} alt={e.logoAlt ?? `${e.company} logo`} />
              ) : null}
            </div>
            <div className="company">{e.company}</div>
            <div className="role">{e.role}</div>
            <div className="period">{e.period}</div>
          </div>
        ))}
      </Reveal>
    </div>
  </section>
)

export default Experience
