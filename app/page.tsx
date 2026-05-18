import type * as React from "react"

import Cursor from "@/components/portfolio/Cursor"
import Events from "@/components/portfolio/Events"
import Experience from "@/components/portfolio/Experience"
import Hero from "@/components/portfolio/Hero"
import HireMe from "@/components/portfolio/HireMe"
import Nav from "@/components/portfolio/Nav"
import Quotes from "@/components/portfolio/Quotes"
import Work from "@/components/portfolio/Work"
import Writing from "@/components/portfolio/Writing"
import { getMetadata } from "@/utils/metadata"

import "./portfolio.css"

export const metadata = getMetadata({
  path: "/",
  title: "Biboswan Roy — Senior Software Engineer",
  description:
    "Biboswan Roy — Senior Software Engineer building enterprise security UI at SentinelOne. Frontend & fullstack-ish, open-source contributor, digital nomad.",
})

const Home: React.FC = () => (
  <div className="portfolio" data-theme="light">
    <Cursor />
    <Nav />
    <Hero />
    <Experience />
    <Events />
    <Quotes />
    <Work />
    <Writing />
    <HireMe />
    <footer className="footer">
      <span className="footer-copy">© Biboswan Roy · 2026</span>
      <div className="footer-links">
        <a
          href="https://twitter.com/Biboswan98"
          target="_blank"
          rel="noreferrer"
          data-cursor="hover"
        >
          Twitter
        </a>
        <a
          href="https://github.com/Biboswan"
          target="_blank"
          rel="noreferrer"
          data-cursor="hover"
        >
          Github
        </a>
        <a
          href="https://www.linkedin.com/in/biboswanroy/"
          target="_blank"
          rel="noreferrer"
          data-cursor="hover"
        >
          Linkedin
        </a>
        <a
          href="https://medium.com/@Biboswan98"
          target="_blank"
          rel="noreferrer"
          data-cursor="hover"
        >
          Medium
        </a>
      </div>
      <span className="footer-tag">Built with intention · not a template</span>
    </footer>
  </div>
)

export default Home
