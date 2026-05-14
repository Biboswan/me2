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
          <div
            className="contact-side"
            style={{ marginTop: 48, maxWidth: 480 }}
          >
            {C.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                data-cursor="hover"
              >
                <span>
                  {s.label.toUpperCase()} · {s.value}
                </span>
                <span className="arr">↗</span>
              </a>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  </section>
)

export default Contact
