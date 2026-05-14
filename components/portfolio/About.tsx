import * as React from "react"

import { content as C } from "./content"
import Reveal from "./Reveal"

const renderRich = (text: string) => {
  const parts = text.split(/(\*\*[^*]+\*\*)/g)
  return parts.map((p, i) => {
    const k = `${i}-${p}`
    if (p.startsWith("**")) return <b key={k}>{p.slice(2, -2)}</b>
    return <span key={k}>{p}</span>
  })
}

const About: React.FC = () => (
  <section id="about">
    <div className="wrap">
      <Reveal className="section-head">
        <span className="section-num">/01 — About</span>
        <h2>
          Words
          <br />
          <i style={{ color: "var(--fg-muted)" }}>about her</i>
        </h2>
      </Reveal>
      <div className="about-grid">
        <div className="label-col">
          <Reveal as="span" className="eyebrow">
            Bio · 2026
          </Reveal>
        </div>
        <Reveal className="about-bio">
          {C.about.paragraphs.map((p, i) => (
            <p key={p} style={{ marginTop: i === 0 ? 0 : "1em" }}>
              {renderRich(p)}
            </p>
          ))}
        </Reveal>
        <Reveal as="aside" className="about-side">
          <div className="kv">
            <span className="k">Based</span>
            <div className="v">
              <ul>
                {C.about.facts.based.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="kv">
            <span className="k">Stack</span>
            <div className="v">
              <ul>
                {C.about.facts.stack.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="kv">
            <span className="k">Recognised</span>
            <div className="v">
              <ul>
                {C.about.facts.open.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="kv">
            <span className="k">Working</span>
            <div className="v">
              <ul>
                {C.about.facts.mode.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
)

export default About
