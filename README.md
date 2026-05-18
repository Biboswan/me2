<h1 align="center">
  Jitendra Nirnejak — Portfolio
</h1>

<p align="center">
  Personal portfolio site built with Next.js, TypeScript, and Tailwind CSS
</p>

---

## Features

- ⚡️ Next.js 16 with App Router, React 19 & React Compiler
- 🎨 Tailwind CSS v4 with Typography plugin
- 📝 MDX support for blog posts and project case studies
- 🎭 Framer Motion for animations
- 🔔 Sonner for toast notifications
- 🎵 use-sound for sound effects
- 🎨 Akar Icons for icons
- 🔍 SEO optimized (with metadata and schema.org)
- 🎯 TypeScript for type safety
- 🧹 oxlint + oxfmt for code quality
- 🐶 Husky for git pre-commit hooks
- 🚀 View transitions for smooth page navigation

## Project Structure

```
├── app/                 # Next.js app directory (pages, layouts)
├── components/          # React components
│   ├── atoms/           # Basic UI components
│   └── portfolio/       # Portfolio sections
├── hooks/               # Custom React hooks
├── utils/               # Utility functions
├── blogs/               # Blog content (.mdx)
├── projects/            # Project case-study content (.mdx)
├── public/              # Static assets
└── config.ts            # Site SEO / metadata configuration
```

## Getting Started

1. Clone and install:

   ```bash
   git clone <repo-url> && cd me2 && bun install
   ```

2. Start dev server: `bun run dev`

No environment variables are required.

## Available Scripts

- `bun install` - Install dependencies
- `bun run prepare` - Setup pre-commit hooks
- `bun run dev` - Start development server
- `bun run lint` - Run oxlint
- `bun run format` - Format with oxfmt
- `bun run type-check` - Run TypeScript type checking
- `bun run build` - Build for production
- `bun run start` - Start production server

## Configuration

Update the `config.ts` file with your site's information:

```typescript
const config = {
  baseUrl: "https://your-site.com",
  appName: "Your Name",
  appDescription: "Your portfolio description",
  creator: "Your Name",
  authorName: "Your Name",
  authorUrl: "Your URL or Email",
  keywords: ["your", "keywords"],
  twitterSite: "@your-site",
  twitterCreator: "@your-username",
}
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Made with ❤️ by [Jitendra Nirnejak](https://github.com/nirnejak)
