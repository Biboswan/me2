import type * as React from "react"

import About from "@/components/portfolio/About"
import Contact from "@/components/portfolio/Contact"
import Cursor from "@/components/portfolio/Cursor"
import Events from "@/components/portfolio/Events"
import Experience from "@/components/portfolio/Experience"
import Hero from "@/components/portfolio/Hero"
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
    <About />
    <Work />
    <Experience />
    <Events />
    <Writing />
    <Quotes />
    <Contact />
    <footer className="footer">
      <span>© Biboswan Roy · 2026</span>
      <span className="br-mark">BR.</span>
      <span>Built with intention · not a template</span>
    </footer>
  </div>
)

export default Home
