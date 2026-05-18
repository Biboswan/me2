import * as React from "react"

import { content as C } from "./content"

const Hero: React.FC = () => (
  <section id="top" className="hero wrap">
    <div className="hero-grid-bg" aria-hidden="true" />
    <div className="hero-top">
      <span className="hero-availability">
        <span className="status-dot" /> Open for select 2026 collaborations
      </span>
      <span className="hero-currently">Currently · India (this month)</span>
    </div>

    <div className="hero-main">
      <h1 className="hero-name" aria-label={C.name.join(" ")}>
        <span className="word">
          <span>{C.name[0]}</span>
        </span>
        <span className="word">
          <span>
            {C.name[1]}
            <i className="accent-dot" aria-hidden="true" />
          </span>
        </span>
      </h1>
      <div className="hero-cta-col">
        <a href="#hire" className="hero-cta" data-cursor="hover">
          <span>Hire me</span>
          <span className="hero-cta-arr" aria-hidden="true">
            →
          </span>
        </a>
        <span className="hero-tag">
          Senior Software Engineer building world-class products, with high
          agency and ownership, Remote-first
        </span>
      </div>
    </div>

    <div className="hero-bottom">
      <div className="hero-stack">TypeScript + React + PostgreSQL + GCP</div>
      <div className="hero-stat">
        <span className="label">Projects shipped</span>
        <span className="value">20+, since 2018</span>
      </div>
      <div className="hero-stat">
        <span className="label">Years shipping</span>
        <span className="value">07 fullstack-ish</span>
      </div>
    </div>
  </section>
)

export default Hero
