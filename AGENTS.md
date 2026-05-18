# AGENTS.md

Guidelines and commands for agentic coding agents working in this Next.js TypeScript personal portfolio repository.

## Development Commands

### Core Commands

- `bun run dev` - Start development server (http://localhost:3000)
- `bun run build` - Build for production
- `bun run start` - Start production server
- `bun run lint` - Run oxlint
- `bun run lint:fix` - Run oxlint with automatic fixes
- `bun run format` - Format with oxfmt
- `bun run format:check` - Check if files are formatted correctly
- `bun run type-check` - Run TypeScript type checking

### Testing Commands

**Note**: No testing framework configured. To add Vitest:

```bash
bun add -D vitest @testing-library/react @testing-library/jest-dom jsdom
```

Once configured, use:

- `bun run test` - Run all tests
- `bun run test:watch` - Run tests in watch mode
- `bun run test:coverage` - Run tests with coverage
- `bun run test -- path/to/test.spec.ts` - Run single test file

## Code Style Guidelines

### File Structure

```
app/                    # Next.js App Router (pages, layouts)
├── blog/               # Blog routes
├── work/               # Work / project case-study routes
├── main.css            # Global CSS with Tailwind v4 and custom animations
└── layout.tsx          # Root layout with font loading and theme setup
components/             # React components
├── atoms/              # Atomic UI components using CVA for variants
└── portfolio/          # Portfolio sections (Hero, About, Experience, Work, etc.)
hooks/                  # Custom React hooks (useModal, useClickOutside, useDynamicHeight, useTheme)
utils/                  # Metadata generation, schema.org, classNames helper, animation presets
blogs/                  # Blog content (.mdx)
projects/               # Project case-study content (.mdx)
@types/                 # TypeScript type definitions
config.ts               # Site-wide SEO/metadata configuration
public/                 # Static assets
```

Server components by default; use `"use client"` directive only when needed.

### Import Patterns

```typescript
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import classNames from "@/utils/classNames"
import * as motion from "motion/react-client"
```

- Use `import * as React from "react"` (namespace imports)
- Use absolute imports with `@/` prefix for internal files
- Group imports: React → external libraries → internal modules
- Use type-only imports (`import type { Viewport } from "next"`)

### Component Patterns

```typescript
export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button: React.FC<Props> = ({ children, className, variant, size, ...props }) => (
  <button className={classNames(buttonVariants({ variant, size }), className)} {...props}>
    {children}
  </button>
)

export default Button
```

- Use functional components with `React.FC<Props>`
- Props extend HTML attributes and VariantProps from CVA
- Export interface as `Props`, component as default export
- Use `classNames` utility for conditional styling

### Naming Conventions

- **Components**: PascalCase (`Button`, `UserCard`)
- **Hooks**: camelCase with `use` prefix (`useTheme`)
- **Variables**: camelCase (`buttonVariants`)
- **Constants**: UPPER_SNAKE_CASE (`BASE_URL`)
- **Types**: PascalCase (`Props`, `ApiResponse<T>`)
- **Files**: PascalCase for components, camelCase for utilities

### TypeScript Guidelines

- Strict mode enabled (`strict: true`, `strictNullChecks: true`)
- Use `interface` for object shapes and component props
- Use `type` for unions and complex type expressions
- Use path mapping with `@/*` for absolute imports
- Include return type annotations for hook functions

### Error Handling

- Use `console.error` for logging, never expose sensitive data
- Surface user-facing errors via Sonner toasts where appropriate
- Fail gracefully — render fallback UI rather than crashing the page

### Formatting Rules

oxlint handles linting and oxfmt handles formatting (no ESLint/Prettier/Biome). Key rules:

- No semicolons, double quotes, ES5 trailing commas, 2-space indent, 80-char line width
- Tailwind classes sorted automatically by oxfmt (`sortTailwindcss` — recognizes `className`, `classNames(...)`, `cva(...)`, `cx(...)`, `clsx(...)`, `twMerge(...)`)
- Pre-commit hook runs `oxlint --fix` and `oxfmt` via lint-staged

### Styling Guidelines

- Tailwind CSS v4 with `@theme` directives in `app/main.css`
- Custom animations using `@keyframes` and `--animate-*` variables
- Use CSS custom properties (`--sans-font`, `--mono-font`)
- Use `dark:` prefix for dark mode variants
- Include `antialiased` for text quality
- Animations: Framer Motion (`motion` package) with `BASE_TRANSITION` preset from `utils/animation.ts`

## Quality Assurance

Always run before completing work:

- `bun run lint` - No oxlint errors
- `bun run type-check` - TypeScript passes
- `bun run build` - Production build succeeds

## Architecture Details

**Content**: MDX support via `@next/mdx`. Custom components in `mdx-components.tsx` with Shiki syntax highlighting. Blog posts as `.mdx` files under `blogs/`, project case studies under `projects/`.

## Project Features

- Next.js 16 with App Router, React 19, React Compiler
- MDX support with Shiki syntax highlighting, View Transitions
- Tailwind CSS v4 with custom animations
- Framer Motion (`motion` package) for animations
- oxlint for linting and oxfmt for formatting (no ESLint/Prettier/Biome)
- Bun package manager
- Husky pre-commit hooks with lint-staged
- make every feature mobile responsive and mobile first
