import * as React from "react"

import Reveal from "./Reveal"

const STORIES_API =
  "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@Biboswan98"

interface Rss2JsonItem {
  title: string
  link: string
  pubDate: string
  content: string
  categories: string[]
}

interface MediumStory {
  title: string
  link: string
  year: string
  readTime: string
  blurb: string
}

const stripTags = (html: string) => html.replace(/<[^>]+>/g, "")

const getReadTime = (content: string) => {
  const words = stripTags(content).trim().split(/\s+/).length
  const r1 = words / 200
  return Math.max(1, Math.round(Math.round(r1) + (r1 - Math.round(r1)) * 0.6))
}

const getBlurb = (content: string) => {
  const match = content.match(/<p[^>]*>([\s\S]*?)<\/p>/)
  const text = stripTags(match?.[1] ?? content)
    .replace(/\s+/g, " ")
    .trim()
  return text.length > 180 ? `${text.slice(0, 180).trimEnd()}…` : text
}

const fetchStories = async (): Promise<MediumStory[]> => {
  try {
    const res = await fetch(STORIES_API, { next: { revalidate: 3600 } })
    if (!res.ok) return []
    const data = (await res.json()) as { items?: Rss2JsonItem[] }
    const items = data.items ?? []
    return items
      .filter((i) => i.categories && i.categories.length > 0)
      .map((i) => ({
        title: i.title,
        link: i.link,
        year: i.pubDate?.slice(0, 4) ?? "",
        readTime: `${getReadTime(i.content)} min`,
        blurb: getBlurb(i.content),
      }))
  } catch {
    return []
  }
}

const Writing: React.FC = async () => {
  const stories = await fetchStories()

  return (
    <section id="writing">
      <div className="wrap">
        <Reveal className="section-head">
          <h2>Writings</h2>
        </Reveal>
        <Reveal className="list-tight">
          {stories.map((s) => (
            <a
              key={s.link}
              href={s.link}
              target="_blank"
              rel="noopener noreferrer"
              className="list-row"
              data-cursor="hover"
            >
              <span className="list-date">{s.year}</span>
              <span className="list-kind">{s.readTime}</span>
              <span className="list-title">{s.title}</span>
              <span className="list-venue">{s.blurb}</span>
              <span className="list-arr">→</span>
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  )
}

export default Writing
