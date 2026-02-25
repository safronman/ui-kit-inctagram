import addonDocs from '@storybook/addon-docs'
import addonA11y from '@storybook/addon-a11y'
import { definePreview } from '@storybook/react-vite'
import '@fontsource-variable/inter/index.css'
import '../src/index.css'

export default definePreview({
  parameters: {
    darkMode: {
      current: 'light',
      darkClass: 'dark',
      lightClass: 'light',
      classTarget: 'html',
      stylePreview: true,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
    },
  },

  addons: [addonA11y(), addonDocs()],
})
