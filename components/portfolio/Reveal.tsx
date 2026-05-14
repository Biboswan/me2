"use client"

import * as React from "react"

const Reveal: React.FC<{
  children: React.ReactNode
  as?: React.ElementType
  className?: string
}> = ({ children, as: Tag = "div", className }) => {
  const ref = React.useRef<HTMLElement>(null)

  React.useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in")
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Tag ref={ref} className={["reveal", className].filter(Boolean).join(" ")}>
      {children}
    </Tag>
  )
}

export default Reveal
