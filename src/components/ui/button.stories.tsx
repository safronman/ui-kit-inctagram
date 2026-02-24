import preview from '#.storybook/preview'

import { Button } from './button'

const meta = preview.meta({
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
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
})

export const Secondary = meta.story({
  args: {
    variant: 'secondary',
  },
})

export const Outline = meta.story({
  args: {
    variant: 'outline',
  },
})

export const Text = meta.story({
  args: {
    variant: 'text',
  },
})

export const Icon = meta.story({
  args: {
    size: 'icon',
    'aria-label': 'Favorite',
    children: '❤',
  },
})

export const Disabled = meta.story({
  args: {
    disabled: true,
  },
})
