"use client"

import Cal, { getCalApi } from "@calcom/embed-react"
import * as React from "react"

const CAL_LINK = "biboswan-roy-mfgllb/15min"
const CAL_NAMESPACE = "hire-me"

const HireMeCal: React.FC = () => {
  React.useEffect(() => {
    ;(async () => {
      const cal = await getCalApi({ namespace: CAL_NAMESPACE })
      cal("ui", {
        theme: "light",
        hideEventTypeDetails: false,
        layout: "month_view",
        cssVarsPerTheme: {
          light: {
            "cal-brand": "oklch(0.18 0.01 80)",
            "cal-text": "oklch(0.18 0.01 80)",
            "cal-text-emphasis": "oklch(0.18 0.01 80)",
            "cal-text-muted": "oklch(0.42 0.012 80)",
            "cal-bg": "oklch(0.99 0.003 80)",
            "cal-bg-emphasis": "oklch(0.94 0.006 80)",
            "cal-bg-muted": "oklch(0.97 0.005 80)",
            "cal-bg-subtle": "oklch(0.94 0.006 80)",
            "cal-border": "oklch(0.84 0.008 80)",
            "cal-border-emphasis": "oklch(0.7 0.008 80)",
            "cal-border-subtle": "oklch(0.84 0.008 80)",
            "cal-bg-success": "transparent",
            "cal-text-success": "transparent",
            "cal-border-success": "transparent",
            "cal-bg-info": "oklch(0.18 0.01 80)",
            "cal-text-info": "oklch(0.18 0.01 80)",
            "cal-border-info": "oklch(0.18 0.01 80)",
          },
          dark: {
            "cal-brand": "oklch(0.96 0.01 80)",
            "cal-text": "oklch(0.96 0.01 80)",
            "cal-text-emphasis": "oklch(0.96 0.01 80)",
            "cal-text-muted": "oklch(0.66 0.012 80)",
            "cal-bg": "oklch(0.2 0.007 80)",
            "cal-bg-emphasis": "oklch(0.19 0.006 80)",
            "cal-bg-muted": "oklch(0.16 0.005 80)",
            "cal-bg-subtle": "oklch(0.19 0.006 80)",
            "cal-border": "oklch(0.28 0.008 80)",
            "cal-border-emphasis": "oklch(0.38 0.008 80)",
            "cal-border-subtle": "oklch(0.28 0.008 80)",
            "cal-bg-success": "transparent",
            "cal-text-success": "transparent",
            "cal-border-success": "transparent",
            "cal-bg-info": "oklch(0.96 0.01 80)",
            "cal-text-info": "oklch(0.96 0.01 80)",
            "cal-border-info": "oklch(0.96 0.01 80)",
          },
        },
      })
    })()
  }, [])

  return (
    <div className="hire-cal">
      <Cal
        namespace={CAL_NAMESPACE}
        calLink={CAL_LINK}
        style={{ width: "100%", height: "100%", overflow: "scroll" }}
        config={{ layout: "month_view", theme: "light" }}
      />
    </div>
  )
}

export default HireMeCal
