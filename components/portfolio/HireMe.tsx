"use client"

import dynamic from "next/dynamic"
import * as React from "react"

import Reveal from "./Reveal"

const HireMeCal = dynamic(() => import("./HireMeCal"), {
  ssr: false,
  loading: () => (
    <div className="hire-cal hire-cal-skeleton" aria-hidden="true" />
  ),
})

const HireMe: React.FC = () => {
  const slotRef = React.useRef<HTMLDivElement>(null)
  const [shouldLoad, setShouldLoad] = React.useState(false)

  React.useEffect(() => {
    if (shouldLoad) return

    const trigger = () => setShouldLoad(true)
    const cleanups: Array<() => void> = []

    const el = slotRef.current
    if (el) {
      const io = new IntersectionObserver(
        (entries) => {
          if (entries.some((e) => e.isIntersecting)) {
            trigger()
            io.disconnect()
          }
        },
        { rootMargin: "600px 0px" }
      )
      io.observe(el)
      cleanups.push(() => io.disconnect())
    }

    let idleHandle: number | undefined
    let timeoutHandle: ReturnType<typeof setTimeout> | undefined

    const scheduleIdle = () => {
      const ric = (
        window as Window &
          typeof globalThis & {
            requestIdleCallback?: (
              cb: () => void,
              opts?: { timeout: number }
            ) => number
            cancelIdleCallback?: (handle: number) => void
          }
      ).requestIdleCallback

      if (ric) {
        idleHandle = ric(trigger, { timeout: 4000 })
      } else {
        timeoutHandle = setTimeout(trigger, 2500)
      }
    }

    if (document.readyState === "complete") {
      scheduleIdle()
    } else {
      window.addEventListener("load", scheduleIdle, { once: true })
      cleanups.push(() => window.removeEventListener("load", scheduleIdle))
    }

    cleanups.push(() => {
      const cic = (
        window as Window &
          typeof globalThis & {
            cancelIdleCallback?: (handle: number) => void
          }
      ).cancelIdleCallback
      if (idleHandle !== undefined && cic) cic(idleHandle)
      if (timeoutHandle !== undefined) clearTimeout(timeoutHandle)
    })

    return () => cleanups.forEach((fn) => fn())
  }, [shouldLoad])

  return (
    <section id="hire">
      <div className="wrap">
        <Reveal className="contact">
          <h2 className="contact-headline">
            Got a project, a role, or a half-baked idea?
          </h2>
          <div className="contact-email">
            <span className="label">EMAIL</span>
            <span className="sep">·</span>
            <a href="mailto:bibo@biboswanroy.com" data-cursor="hover">
              bibo@biboswanroy.com
            </a>
          </div>
        </Reveal>
        <Reveal className="hire">
          <div ref={slotRef} className="hire-slot">
            {shouldLoad ? (
              <HireMeCal />
            ) : (
              <div className="hire-cal hire-cal-skeleton" aria-hidden="true">
                <span className="hire-cal-skeleton-label">
                  Calendar loading…
                </span>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default HireMe
