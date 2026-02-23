# Repository Guidelines

## Project Structure & Module Organization
This repository is a Vite + React + TypeScript UI kit starter.
- `src/`: application source code (`main.tsx`, `App.tsx`, styles, and assets).
- `public/`: static files served as-is (for example `public/vite.svg`).
- `index.html`: Vite entry HTML.
- `eslint.config.js`: lint configuration for TypeScript and React hooks.
- `tsconfig*.json`: TypeScript project configs (`app` and `node` targets).

Keep reusable UI code under `src/` in feature-focused folders (for example, `src/components/Button/`).

## Build, Test, and Development Commands
Use `pnpm` (lockfile is `pnpm-lock.yaml`).
- `pnpm install`: install dependencies.
- `pnpm dev`: start local dev server with HMR.
- `pnpm build`: run TypeScript project build (`tsc -b`) and produce production bundle.
- `pnpm preview`: preview the built app locally.
- `pnpm lint`: run ESLint across the repository.

## Coding Style & Naming Conventions
- Language: TypeScript (`.ts`, `.tsx`) with React function components.
- Indentation: 2 spaces; keep lines readable and avoid deeply nested JSX.
- Naming: `PascalCase` for components/files (`UserCard.tsx`), `camelCase` for variables/functions, `UPPER_SNAKE_CASE` for constants.
- Prefer small, composable components and co-locate styles with components when practical.
- Follow ESLint rules in `eslint.config.js`; run `pnpm lint` before opening a PR.

## Testing Guidelines
No test framework is configured yet in `package.json`.
When adding tests, prefer Vitest + React Testing Library:
- Place tests near source as `*.test.ts` / `*.test.tsx`.
- Cover rendering, user interactions, and key edge cases.
- Add a `test` script to `package.json` and document usage in `README.md`.

## Commit & Pull Request Guidelines
Use Conventional Commits for all commit messages (for example, `feat: add button variants` or `fix: handle empty avatar`).

PRs should include:
- Clear summary of changes and rationale.
- Linked issue/task (if applicable).
- Screenshots or short recordings for UI changes.
- Confirmation that `pnpm lint` and `pnpm build` pass locally.

## Agent Tool Routing Rules
1. If a prompt mentions Shadcn, use `mcp_servers.shadcn`.
2. If a prompt mentions Figma, use `mcp_servers.Framelink_Figma_MCP`.
3. Create commits according to Conventional Commits.
4. After completing any task, always run `pnpm run build`.
5. If `pnpm run build` fails, fix the errors and rerun the build until it completes successfully.
