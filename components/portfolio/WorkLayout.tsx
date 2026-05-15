import { Link } from "next-view-transitions"
import * as React from "react"

import type { ProjectEntry } from "@/projects"

interface Props {
  project: ProjectEntry
  children: React.ReactNode
}

const WorkLayout: React.FC<Props> = ({ project, children }) => (
  <article className="work-detail">
    <div className="wrap">
      <Link href="/#work" className="work-back" data-cursor="hover">
        ← Back to selected work
      </Link>

      <header className="work-detail-head">
        <span className="section-num">
          / Selected work · {project.year} · {project.client}
        </span>
        <h1 className="work-detail-title">{project.title}</h1>
        <p className="work-detail-lede">{project.description}</p>
      </header>

      <dl className="work-meta">
        <div>
          <dt>Role</dt>
          <dd>{project.role}</dd>
        </div>
        <div>
          <dt>Client</dt>
          <dd>{project.client}</dd>
        </div>
        <div>
          <dt>Year</dt>
          <dd>{project.year}</dd>
        </div>
        <div>
          <dt>Stack</dt>
          <dd className="work-meta-stack">
            {project.stack.map((s) => (
              <span key={s} className="tag">
                {s}
              </span>
            ))}
          </dd>
        </div>
      </dl>

      {project.links && project.links.length > 0 && (
        <ul className="work-links">
          {project.links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                target="_blank"
                rel="noreferrer"
                data-cursor="hover"
              >
                {l.label} ↗
              </a>
            </li>
          ))}
        </ul>
      )}

      <div className="work-body">{children}</div>

      <Link href="/#work" className="work-back" data-cursor="hover">
        ← Back to selected work
      </Link>
    </div>
  </article>
)

export default WorkLayout
