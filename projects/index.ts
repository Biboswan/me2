import type * as React from "react"

import mozillaContent from "./mozilla/content.mdx"
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
  mozilla: {
    title: "Open Source Saga at Mozilla",
    eyebrow: "Open Source Contributor",
    description:
      "Shipping to Taskcluster, Firefox DevTools' Inspector, and the Firefox Profiler — Mozilla's open-source platform, in production.",
    client: "Mozilla",
    role: "Open Source Contributor",
    year: "2018–19",
    stack: [
      "React",
      "Node",
      "GraphQL",
      "Go",
      "Python",
      "Testing",
      "Documentation",
    ],
    links: [
      {
        label: "taskcluster-lib-pulse on GitHub",
        href: "https://github.com/taskcluster/taskcluster-lib-pulse",
      },
      {
        label: "Inactive CSS in Firefox DevTools",
        href: "https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#inactive-css",
      },
    ],
    Content: mozillaContent,
  },
}

export const projectSlugs = Object.keys(projects)
