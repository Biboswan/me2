"use client"

import * as React from "react"

const Cursor: React.FC = () => {
  const ref = React.useRef<HTMLDivElement>(null)
  const [hov, setHov] = React.useState(false)

  React.useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    if (window.matchMedia("(pointer: coarse)").matches) return

    let raf = 0
    let x = window.innerWidth / 2
    let y = window.innerHeight / 2
    let tx = x
    let ty = y

    const move = (e: MouseEvent) => {
      tx = e.clientX
      ty = e.clientY
    }
    const tick = () => {
      x += (tx - x) * 0.22
      y += (ty - y) * 0.22
      el.style.left = x + "px"
      el.style.top = y + "px"
      raf = requestAnimationFrame(tick)
    }
    const over = (e: MouseEvent) => {
      const t = (e.target as Element).closest(
        "[data-cursor='hover'], a, button"
      )
      setHov(!!t)
    }
    window.addEventListener("mousemove", move)
    window.addEventListener("mouseover", over)
    raf = requestAnimationFrame(tick)
    return () => {
      window.removeEventListener("mousemove", move)
      window.removeEventListener("mouseover", over)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div ref={ref} className={"portfolio-cursor" + (hov ? " is-hover" : "")} />
  )
}

export default Cursor
