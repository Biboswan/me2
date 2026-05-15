"use client"

import { Link } from "next-view-transitions"
import * as React from "react"

import { content as C } from "./content"

const Nav: React.FC = () => {
  const [scrolled, setScrolled] = React.useState(false)
  const [time, setTime] = React.useState("")

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })

    const tick = () => {
      const h = new Date().toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        timeZone: "Asia/Kolkata",
      })
      setTime(`IST · ${h}`)
    }
    tick()
    const t = setInterval(tick, 30000)
    return () => {
      window.removeEventListener("scroll", onScroll)
      clearInterval(t)
    }
  }, [])

  return (
    <nav className={"nav" + (scrolled ? " is-scrolled" : "")}>
      <Link href="/" className="brand" data-cursor="hover">
        <span className="brand-mark">{C.monogram}</span>
        <span>{C.shortName.toLowerCase()}.roy</span>
      </Link>
      <div className="links">
        <Link href="/#work" data-cursor="hover">
          Work
        </Link>
        <Link href="/#about" data-cursor="hover">
          About
        </Link>
        <Link href="/#experience" data-cursor="hover">
          Experience
        </Link>
        <Link href="/#events" data-cursor="hover">
          Events
        </Link>
        <Link href="/#writing" data-cursor="hover">
          Writing
        </Link>
        <Link href="/#contact" data-cursor="hover">
          Contact
        </Link>
      </div>
      <div className="meta">
        <span className="status-dot" />
        <span>Available · Q3</span>
        <span style={{ opacity: 0.5 }}>·</span>
        <span>{time}</span>
      </div>
    </nav>
  )
}

export default Nav
