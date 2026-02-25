import preview from '#.storybook/preview'

import { Button } from './button'

const meta = preview.meta({
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Button is used for primary and secondary user actions. Use `variant` for visual hierarchy and `size` for layout density. Icon-only buttons should include an accessible label.',
      },
    },
  },
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'default',
    disabled: false,
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'text'],
    },
    size: {
      control: 'select',
      options: ['default', 'xs', 'sm', 'lg', 'icon', 'icon-xs', 'icon-sm', 'icon-lg'],
    },
  },
})

export const Primary = meta.story({
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Default action button for the main call to action in a view.',
      },
    },
  },
})

export const Secondary = meta.story({
  args: {
    variant: 'secondary',
  },
  parameters: {
    docs: {
      description: {
        story: 'Secondary emphasis button for supporting actions next to the primary one.',
      },
    },
  },
})

export const Outline = meta.story({
  args: {
    variant: 'outline',
  },
  parameters: {
    docs: {
      description: {
        story: 'Low-emphasis outlined button suitable for neutral actions.',
      },
    },
  },
})

export const Text = meta.story({
  args: {
    variant: 'text',
  },
  parameters: {
    docs: {
      description: {
        story: 'Text-style button for inline actions where minimal chrome is preferred.',
      },
    },
  },
})

export const Icon = meta.story({
  args: {
    size: 'icon',
    'aria-label': 'Favorite',
    children: '\u2665',
  },
  parameters: {
    docs: {
      description: {
        story: 'Icon-only action button. Keep `aria-label` set so screen readers announce the action.',
      },
    },
  },
})

export const Disabled = meta.story({
  args: {
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Disabled state that prevents interaction when an action is temporarily unavailable.',
      },
    },
  },
})
