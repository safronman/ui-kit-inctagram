# @safronman/ui-kit-inctagram

Reusable React UI components with ready-to-use styles.

## Installation

```bash
npm install @safronman/ui-kit-inctagram
```

or

```bash
pnpm add @safronman/ui-kit-inctagram
```

## Usage

Import styles once in your app entry:

```ts
import '@safronman/ui-kit-inctagram/styles.css'
```

Import components:

```tsx
import { Button, Typography } from '@safronman/ui-kit-inctagram'

export function Example() {
  return (
    <div>
      <Typography variant="h1">UI Kit</Typography>
      <Button>Click me</Button>
    </div>
  )
}
```

## Peer dependencies

- `react >= 18`
- `react-dom >= 18`

## Development scripts

- `pnpm dev` - run local dev app.
- `pnpm build` - build library JS and declaration files to `dist/`.
- `pnpm lint` - run ESLint.
- `pnpm storybook` - run Storybook.
- `pnpm build-storybook` - build static Storybook.

## Publishing

1. Create an npm automation token and add it to repository secrets as `NPM_TOKEN`.
2. Create a GitHub release with tag `vX.Y.Z` that matches `package.json` version.
3. Workflow will install dependencies, run `pnpm build`, `pnpm lint`, and publish to npm automatically.
4. Manual publish fallback:

```bash
pnpm build
pnpm lint
npm publish --access public
```
