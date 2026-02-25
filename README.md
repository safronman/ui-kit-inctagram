# @your-scope/ui-kit-inctagram

Reusable React UI components with ready-to-use styles.

## Installation

```bash
npm install @your-scope/ui-kit-inctagram
```

or

```bash
pnpm add @your-scope/ui-kit-inctagram
```

## Usage

Import styles once in your app entry:

```ts
import '@your-scope/ui-kit-inctagram/styles.css'
```

Import components:

```tsx
import { Button, Typography } from '@your-scope/ui-kit-inctagram'

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

1. Replace placeholder metadata in `package.json`:
   - `name`
   - `homepage`
   - `repository`
   - `bugs`
2. Build and lint:

```bash
pnpm build
pnpm lint
```

3. Publish:

```bash
npm publish --access public
```
