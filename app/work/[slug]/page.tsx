import type { Metadata } from "next"
import { notFound } from "next/navigation"
import type * as React from "react"

import Cursor from "@/components/portfolio/Cursor"
import Nav from "@/components/portfolio/Nav"
import WorkLayout from "@/components/portfolio/WorkLayout"
import { projects, projectSlugs } from "@/projects"
import { getMetadata } from "@/utils/metadata"

import "../../portfolio.css"

interface Props {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return projectSlugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = projects[slug]
  if (!project) return {}
  return getMetadata({
    path: `/work/${slug}/`,
    title: `${project.title} — Biboswan Roy`,
    description: project.description,
  })
}

const WorkPage: React.FC<Props> = async ({ params }) => {
  const { slug } = await params
  const project = projects[slug]
  if (!project) notFound()
  const Content = project.Content
  return (
    <div className="portfolio" data-theme="light">
      <Cursor />
      <Nav />
      <WorkLayout project={project}>
        <Content />
      </WorkLayout>
      <footer className="footer">
        <span>© Biboswan Roy · 2026</span>
        <span className="br-mark">BR.</span>
        <span>Built with intention · not a template</span>
      </footer>
    </div>
  )
}

export default WorkPage
