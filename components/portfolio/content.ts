export interface Project {
  num: string
  title: string
  client: string
  year: string
  tags: string[]
  blurb: string
  action: string
  href: string
  role?: string
}

export interface ExperienceItem {
  company: string
  role: string
  period: string
  logo?: string
  logoAlt?: string
}

export interface ListItem {
  date: string
  title: string
  venue: string
  kind?: string
  read?: string
}

export interface Testimonial {
  body: string
  name: string
  role: string
}

export interface Social {
  label: string
  value: string
  href: string
}

export const content = {
  name: ["Biboswan", "Roy"] as const,
  shortName: "Biboswan",
  monogram: "BR",
  tagline: "Senior Software Engineer & digital nomad",
  intro:
    "Frontend & fullstack-ish engineer building enterprise security UI. Open-source contributor, public speaker, occasional dancer.",
  location: "Currently · India (this month)",
  countriesLast: 6,
  yearsExp: 7,

  roles: [
    "Senior Software Engineer.",
    "Frontend Architect.",
    "Open-source contributor.",
    "Digital nomad.",
    "Mozillian.",
  ],

  marquee: [
    "React",
    "Typescript",
    "GraphQL",
    "Next.js",
    "Open Source",
    "Web3",
    "Distributed Teams",
    "6 Countries / Year",
    "Mozillian",
    "Google Udacity Scholar",
  ],

  about: {
    paragraphs: [
      "Hi, I'm **Biboswan**.",
      "I build **frontend architectures** for enterprise security products — **React, GraphQL, TypeScript**.",
      "Currently exploring **web3**. Previously a **Google Udacity Scholar** and a **Mozillian**.",
      "Working from **6 countries** last year. Powered by ice lattes.",
    ],
    facts: {
      based: ["India · always moving"],
      stack: [
        "React · TS · GraphQL",
        "Next.js · Node · Go",
        "Recoil · Apollo · Playwright",
        "MongoDB · PostgreSQL · Dgraph",
        "Kubernetes · Kafka · RabbitMQ",
        "Playwright",
      ],
      open: [
        "Mozillian",
        "Google Udacity Scholar 2k18",
        "Techstars New York Round1",
      ],
      mode: ["Remote-first since day one", "Async across time zones"],
    },
  },

  projects: [
    {
      num: "01",
      title: "Experts Connect",
      client: "IIT Alumni Centre Bangalore",
      year: "2024",
      tags: ["Supabase", "LLMs"],
      blurb:
        "AI-powered matchmaking between industry R&D problems and IIT researchers. Design and build, end to end.",
      action: "Read",
      href: "#",
      role: "Design & Engineering Lead",
    },
    {
      num: "02",
      title: "Tattvam AI",
      client: "Launch site · Tattvam Labs",
      year: "2024",
      tags: ["UI/UX", "Launch site"],
      blurb:
        "The first public face of an AI-for-chip-design startup, shipped with their $1.7M funding announcement.",
      action: "Visit",
      href: "https://www.tattvamlabs.ai/",
      role: "Design & Engineering",
    },
    {
      num: "03",
      title: "Unified Actions Platform",
      client: "SentinelOne",
      year: "2024",
      tags: ["API Design", "Angular interop"],
      blurb:
        "One dropdown to act on 100k+ assets across endpoints, cloud, and identity — bridging React with legacy Angular modals.",
      action: "Visit",
      href: "https://www.sentinelone.com/platform/how-singularity-xdr-works/",
      role: "Independent Architect",
    },
    {
      num: "04",
      title: "Cloud Scanner Policies",
      client: "SentinelOne",
      year: "2023",
      tags: ["Recoil", "GraphQL", "Schema-driven forms"],
      blurb:
        "A schema-driven form wizard configuring vulnerability scans for 2B VM images a day across AWS, GCP, Azure, OCI, and Alibaba.",
      action: "Visit",
      href: "https://www.sentinelone.com/platform/cloud-security",
      role: "Frontend Lead",
    },
    {
      num: "05",
      title: "Unified Tagging Platform",
      client: "SentinelOne",
      year: "2023",
      tags: ["Library", "GraphQL", "Playwright"],
      blurb:
        "A tagging modal library used across 16+ product lines, with multi-tenant permissions and i18n.",
      action: "Read",
      href: "#",
      role: "Library Author & Maintainer",
    },
    {
      num: "06",
      title: "Singularity Shell",
      client: "SentinelOne",
      year: "2023",
      tags: ["Microfrontends", "Angular", "Iframes"],
      blurb:
        "Unified three product consoles built on different frontend frameworks into one experience.",
      action: "Read",
      href: "/work/singularity-shell/",
      role: "Shell / Iframe Architecture",
    },
    {
      num: "07",
      title: "A11y Gradient",
      client: "Chrome Extension",
      year: "2022",
      tags: ["Extension", "A11y", "DevTools"],
      blurb:
        "Contrast-ratio checking for text on gradients and image backgrounds — the case DevTools doesn't handle.",
      action: "Install",
      href: "https://chromewebstore.google.com/detail/a11y-gradient/kokihagjmdkofdmahbcofpnkccigjmnm",
      role: "Solo · Design & Build",
    },
    {
      num: "08",
      title: "StudioYou Webstore",
      client: "Kenko AI",
      year: "2020",
      tags: ["E-commerce", "Styled Components", "Iframes"],
      blurb: "Built the e-commerce storefront from zero on React.",
      action: "Read",
      href: "#",
      role: "Frontend Intern",
    },
    {
      num: "09",
      title: "Mozilla",
      client: "Open source contributor",
      year: "2018–19",
      tags: ["Node", "Go", "Python"],
      blurb:
        "Authored taskcluster-lib-pulse v2. Shipped inactive CSS in Firefox DevTools' Inspector.",
      action: "Read",
      href: "/work/mozilla/",
      role: "Open Source Contributor",
    },
  ] as Project[],

  events: [
    {
      date: "2025",
      title: "Token2049",
      venue: "Dubai · Conference",
      kind: "Conference",
    },
    {
      date: "2022",
      title: "Migrating from Apollo to Urql in a Next.js app",
      venue: "GeekyAnts Meetup · Bangalore",
      kind: "Talk",
    },
    {
      date: "2019",
      title: "GraphQL Asia 2019",
      venue: "Bangalore · Full scholarship recipient",
      kind: "Scholarship",
    },
    {
      date: "2019",
      title: "Getting $0 mentors via open source",
      venue: "NSEC · Kolkata",
      kind: "Talk",
    },
    {
      date: "2018",
      title: "Mozilla All-Hands 2018",
      venue: "Orlando · Invited as top OSS contributor",
      kind: "Invited",
    },
  ] as ListItem[],

  experience: [
    {
      company: "SentinelOne",
      role: "Senior Software Engineer · Cloud Security · Singularity Platform",
      period: "Present",
      logo: "/logos/sentinelone_logo.jpeg",
    },
    {
      company: "Feats Aps",
      role: "Fullstack Engineer · Copenhagen-based startup, professional network from project history",
      period: "Prior",
      logo: "/logos/featsofficial_logo.jpeg",
    },
    {
      company: "Creatella",
      role: "Frontend Developer",
      period: "Earlier",
      logo: "/logos/creatella.jpeg",
    },
    {
      company: "Kenko AI",
      role: "Intern — built the webstore from scratch",
      period: "Earlier",
      logo: "/logos/kenkoai.png",
    },
    {
      company: "Mozilla",
      role: "Open Source Contributor · Taskcluster / Firefox Profiler / Inspector",
      period: "Earlier",
      logo: "/logos/mozilla.jpeg",
    },
    // {
    //   company: "IIM Lucknow",
    //   role: "Data Science & Analytics Intern",
    //   period: "Earlier",
    // },
  ] as ExperienceItem[],

  testimonials: [
    {
      body: "Successfully completed a remote internship in Data Science & Analytics under my guidance — R programming, basic statistics, Harvard Business School case studies and a capstone project.",
      name: "Prof. Sameer Mathur",
      role: "Assoc. Professor, IIM Lucknow · Ph.D. (Carnegie Mellon)",
    },
    {
      body: "broy27 has been contributing to taskcluster and involved in discussions around the upcoming taskcluster-events refactoring.",
      name: "Jonas Finnemann Jensen",
      role: "Ex-Mozilla · Software Engineer, Google",
    },
    {
      body: "Biboswan was the formal representative of IMAD to educational institutes. With her contribution, IMAD became the largest MOOC in India with 127,000+ registrations.",
      name: "Dr. Gaurav Raina",
      role: "Dept. of Electrical Engineering · IIT Madras",
    },
  ] as Testimonial[],

  socials: [
    {
      label: "Email",
      value: "bibo@biboswanroy.com",
      href: "mailto:bibo@biboswanroy.com",
    },
    {
      label: "Twitter",
      value: "@Biboswan98",
      href: "https://twitter.com/Biboswan98",
    },
    { label: "GitHub", value: "Biboswan", href: "https://github.com/Biboswan" },
    {
      label: "LinkedIn",
      value: "biboswanroy",
      href: "https://www.linkedin.com/in/biboswanroy/",
    },
    {
      label: "Medium",
      value: "@Biboswan98",
      href: "https://medium.com/@Biboswan98",
    },
    {
      label: "Stack Overflow",
      value: "biboswan",
      href: "https://stackoverflow.com/users/7146337/biboswan",
    },
  ] as Social[],
}
