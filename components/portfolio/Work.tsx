import { Link } from "next-view-transitions"
import * as React from "react"

import { content as C } from "./content"
import Reveal from "./Reveal"

const Work: React.FC = () => (
  <section id="work">
    <div className="wrap">
      <Reveal className="section-head">
        <span className="section-num">/02 — Selected work</span>
        <h2>
          Recent
          <br />
          <i style={{ color: "var(--fg-muted)" }}>shipping</i>
        </h2>
      </Reveal>
      <Reveal className="work-list">
        {C.projects.map((p) => {
          const hasLink = p.href && p.href !== "#"
          const commonProps = {
            className: "work-row",
            "data-cursor": "hover",
          } as const
          const content = (
            <>
              <span className="num">{p.num}</span>
              <span className="title-wrap">
                <span className="title">{p.title}</span>
                <span className="blurb">{p.blurb}</span>
              </span>
              <span className="client">{p.client}</span>
              <span className="tags">
                {p.tags.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </span>
              <span className="year">
                {p.year}
                {p.action && (
                  <span style={{ marginLeft: 10, opacity: 0.6 }}>
                    · {p.action}
                  </span>
                )}
                <span className="arrow">
                  {" "}
                  {p.action === "Read" ? "→" : "↗"}
                </span>
              </span>
            </>
          )
          if (!hasLink) {
            return (
              <div key={p.num} {...commonProps}>
                {content}
              </div>
            )
          }
          const isInternal = p.href.startsWith("/")
          return isInternal ? (
            <Link key={p.num} href={p.href} {...commonProps}>
              {content}
            </Link>
          ) : (
            <a
              key={p.num}
              href={p.href}
              target="_blank"
              rel="noreferrer"
              {...commonProps}
            >
              {content}
            </a>
          )
        })}
      </Reveal>
    </div>
  </section>
)

export default Work
