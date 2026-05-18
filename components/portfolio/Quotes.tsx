import * as React from "react"

import { content as C } from "./content"
import Reveal from "./Reveal"

const Quotes: React.FC = () => (
  <section id="quotes">
    <div className="wrap">
      <Reveal className="section-head">
        <h2>What people say about me</h2>
      </Reveal>
      <Reveal className="quotes">
        {C.testimonials.map((q) => (
          <article key={q.name} className="quote-card">
            <div className="quote-mark">&ldquo;</div>
            <div className="quote-body">{q.body}</div>
            <div className="quote-author">
              <span className="name">{q.name}</span>
              <span className="role">{q.role}</span>
            </div>
          </article>
        ))}
      </Reveal>
    </div>
  </section>
)

export default Quotes
