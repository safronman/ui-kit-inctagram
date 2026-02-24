import type { Meta, StoryObj } from '@storybook/react-vite'

import { Typography } from './typography'

const meta = {
  title: 'UI/Typography',
  component: Typography,
  tags: ['autodocs'],
  args: {
    variant: 'regularText16',
    children: 'Typography sample',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'large',
        'h1',
        'h2',
        'h3',
        'regularText16',
        'boldText16',
        'regularText14',
        'mediumText14',
        'boldText14',
        'smallText',
        'smallTextSemibold',
        'regularLink',
        'smallLink',
      ],
    },
  },
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

export const RegularText: Story = {}

export const HeadingH1: Story = {
  args: {
    variant: 'h1',
    children: 'Heading H1',
  },
}

export const Large: Story = {
  args: {
    variant: 'large',
    children: 'Large text',
  },
}

export const RegularLink: Story = {
  render: () => (
    <Typography variant="regularLink" href="#">
      Regular link
    </Typography>
  ),
}

export const SmallLink: Story = {
  render: () => (
    <Typography variant="smallLink" href="#">
      Small link
    </Typography>
  ),
}
