"use client"

import * as React from "react"

import { content as C } from "./content"

const Hero: React.FC = () => {
  const [roleIdx, setRoleIdx] = React.useState(0)

  React.useEffect(() => {
    const id = setInterval(
      () => setRoleIdx((i) => (i + 1) % C.roles.length),
      2400
    )
    return () => clearInterval(id)
  }, [])

  return (
    <section id="top" className="hero wrap">
      <div className="hero-grid-bg" aria-hidden="true" />
      <div className="hero-top">
        <div className="col-meta">
          <span className="availability">
            <span className="status-dot" /> Open for select 2026 collaborations
          </span>
          <p className="intro-line">
            <b>{C.shortName} Roy</b> — Senior Software Engineer building
            enterprise security UI at SentinelOne. Remote-first,
            distributed-team friendly, 6 countries last year.
          </p>
        </div>
        <div className="col-meta col-meta-end">
          <span className="eyebrow">{C.location}</span>
          <a href="#hire" className="hero-cta" data-cursor="hover">
            <span>Hire me</span>
            <span className="hero-cta-arr" aria-hidden="true">
              →
            </span>
          </a>
          <span className="hero-cta-sub">
            15-min intro · usually within 48h
          </span>
        </div>
      </div>

      <h1 className="display hero-name" aria-label={C.name.join(" ")}>
        <span className="word">
          <span>{C.name[0]}</span>
        </span>
        <span className="word">
          <span>
            {C.name[1]}
            <i className="accent-dot" />
          </span>
        </span>
      </h1>

      <div className="hero-bottom">
        <div className="role-rotator">
          <span className="static">currently a</span>
          <span className="rot-track" style={{ minWidth: "11ch" }}>
            {C.roles.map((r, i) => {
              let cls = "slot is-next"
              if (i === roleIdx) cls = "slot is-in"
              else if (i === (roleIdx - 1 + C.roles.length) % C.roles.length)
                cls = "slot is-out"
              return (
                <span key={r} className={cls}>
                  {r}
                </span>
              )
            })}
          </span>
        </div>
        <div className="hero-stat">
          <span className="label">Countries / year</span>
          <span className="value">
            {String(C.countriesLast).padStart(2, "0")}
            <small>+ since 2023</small>
          </span>
        </div>
        <div className="hero-stat">
          <span className="label">Years shipping</span>
          <span className="value">
            {String(C.yearsExp).padStart(2, "0")}
            <small>frontend & full-stack-ish</small>
          </span>
        </div>
      </div>
    </section>
  )
}

export default Hero
