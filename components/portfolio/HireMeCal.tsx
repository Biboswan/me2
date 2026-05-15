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
          light: { "cal-brand": "#1a1a1a" },
          dark: { "cal-brand": "#f5f5f5" },
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
