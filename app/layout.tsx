import type { Viewport } from "next"
import {
  Geist,
  Instrument_Serif,
  Inter,
  JetBrains_Mono,
} from "next/font/google"
import localFont from "next/font/local"
import { ViewTransitions } from "next-view-transitions"
import type * as React from "react"

import classNames from "@/utils/classNames"
import { renderSchemaTags } from "@/utils/schema"

import "./main.css"

const sansFont = Inter({
  variable: "--sans-font",
  subsets: ["latin"],
  display: "swap",
})

const monoFont = localFont({
  variable: "--mono-font",
  src: [
    {
      path: "../fonts/JetBrainsMono-Regular.ttf",
      weight: "regular",
      style: "normal",
    },
  ],
})

const geist = Geist({
  variable: "--portfolio-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
})

const instrumentSerif = Instrument_Serif({
  variable: "--portfolio-display",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  variable: "--portfolio-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
})

export const viewport: Viewport = {
  themeColor: "#000000",
}

interface Props {
  children: React.ReactNode
}

const RootLayout: React.FC<Props> = ({ children }) => {
  return (
    <ViewTransitions>
      <html
        lang="en"
        className={classNames(
          sansFont.variable,
          monoFont.variable,
          geist.variable,
          instrumentSerif.variable,
          jetbrainsMono.variable
        )}
      >
        <head>{renderSchemaTags()}</head>

        <body
          className={`overflow-x-hidden bg-zinc-50 font-sans dark:bg-zinc-900`}
        >
          {children}
        </body>
      </html>
    </ViewTransitions>
  )
}

export default RootLayout
