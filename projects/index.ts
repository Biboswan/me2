import type * as React from "react"

import ssContent from "./singularity-shell/content.mdx"

export interface ProjectEntry {
  title: string
  eyebrow: string
  description: string
  client: string
  role: string
  year: string
  stack: string[]
  links?: { label: string; href: string }[]
  Content: React.ComponentType
}

export const projects: Record<string, ProjectEntry> = {
  "singularity-shell": {
    title: "Singularity Shell",
    eyebrow: "Shell / Iframe Architecture",
    description:
      "Unifying three product consoles built on different frontend frameworks into one experience.",
    client: "SentinelOne",
    role: "Shell / Iframe Architecture",
    year: "2023",
    stack: ["React", "Angular", "TypeScript", "iframe", "Routing", "Auth"],
    links: [
      {
        label: "Singularity Operations Center",
        href: "https://www.sentinelone.com/blog/singularity-operations-center/",
      },
    ],
    Content: ssContent,
  },
}

export const projectSlugs = Object.keys(projects)
