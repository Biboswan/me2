import * as React from "react"

import { content as C } from "./content"
import Reveal from "./Reveal"

const Contact: React.FC = () => (
  <section id="contact">
    <div className="wrap">
      <Reveal className="contact">
        <div>
          <span className="section-num">/07 — Say hello</span>
        </div>
        <div>
          <div className="contact-big">
            Let&apos;s build
            <br />
            <span style={{ fontStyle: "italic", color: "var(--fg-muted)" }}>
              something
            </span>
            <br />
            <a href="mailto:bibo@biboswanroy.com" data-cursor="hover">
              together.
            </a>
          </div>
          <p className="contact-sub">
            Always up for distributed-team work, interesting frontend
            architectures, or a slow coffee in whichever city I&apos;m in this
            month.
          </p>
          <div className="contact-side">
            {C.socials.map((s) => {
              const isExternal = s.href.startsWith("http")
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noreferrer" : undefined}
                  data-cursor="hover"
                >
                  <span className="contact-side-label">
                    {s.label.toUpperCase()} · {s.value}
                  </span>
                  <span className="contact-side-arr" aria-hidden="true">
                    ↗
                  </span>
                </a>
              )
            })}
          </div>
        </div>
      </Reveal>
    </div>
  </section>
)

export default Contact
