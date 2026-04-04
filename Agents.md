# Project Guidelines

## Project Overview

This is a SaaS platform for school administration in Indonesia, designed for Islamic foundations managing 2-10 educational units (MI, MTs, MA, SD, SMP, SMA, Pesantren). It replaces Excel-based workflows with a structured, role-based platform covering:

- Student lifecycle management
- Teacher records
- SPP billing with flexible subsidy schemes
- Cash flow tracking
- Activity calendar

The platform is multi-tenant, supporting multiple educational units under one foundation.

## Code Style

- TypeScript with strict mode enabled
- Prettier: double quotes, 80 chars, no semicolons, auto-sort Tailwind classes
- ESLint with @tanstack/eslint-config preset
- Import paths use `@/*` aliases should be formatted with Prettier and pass ESLint checks before commits. Use `pnpm format` and `pnpm lint` to ensure compliance.

See `README.md` for setup and `design-system.jsonc` for design tokens.

## Architecture

- React 19 + TypeScript + TanStack Router (file-based routing)
- Vite + Nitro for SSR
- shadcn/ui components with Tailwind CSS v4
- Full dark mode support with OKLCH color palette
- Component composition using CVA variants

Key directories:
- `src/routes/`: File-based routing (auto-generated routeTree.gen.ts)
- `src/components/ui/`: shadcn/ui primitives
- `src/components/`: Custom composed components
- `src/lib/`: Utilities and theme provider
- `src/hooks/`: Custom React hooks

Never edit `routeTree.gen.ts` manually.

## Build and Test

```bash
pnpm dev          # Development server (port 3000)
pnpm build        # Production build
pnpm test         # Run tests with Vitest
pnpm lint         # ESLint check
pnpm format       # Prettier formatting
pnpm typecheck    # TypeScript check
```

## Conventions

- Use `cn()` function for class merging
- Component variants via CVA with default variants
- Theme management with `useTheme()` hook
- Responsive design with `useIsMobile()` hook (breakpoint: 768px)
- Add new shadcn components: `npx shadcn@latest add <component>`

Always run `pnpm typecheck` before commits. Test dark mode changes thoroughly.