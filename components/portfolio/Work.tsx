"use client"

import { Link } from "next-view-transitions"
import * as React from "react"

import { content as C } from "./content"
import type { Project } from "./content"
import Reveal from "./Reveal"

const INITIAL_COUNT = 5

const renderRow = (p: Project) => {
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
        {p.action && <span style={{ opacity: 0.7 }}> · {p.action}</span>}
        <span className="arrow" aria-hidden="true">
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
}

const Work: React.FC = () => {
  const [expanded, setExpanded] = React.useState(false)
  const visible = expanded ? C.projects : C.projects.slice(0, INITIAL_COUNT)
  const hidden = C.projects.length - INITIAL_COUNT

  return (
    <section id="work">
      <div className="wrap">
        <Reveal className="section-head">
          <h2>What I&apos;ve shipped recently</h2>
        </Reveal>
        <Reveal className="work-list">{visible.map(renderRow)}</Reveal>
        {!expanded && hidden > 0 && (
          <div className="work-more-wrap">
            <button
              type="button"
              className="work-more"
              data-cursor="hover"
              onClick={() => setExpanded(true)}
            >
              <span>View {hidden} more</span>
              <span className="work-more-arr" aria-hidden="true">
                ↓
              </span>
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default Work
