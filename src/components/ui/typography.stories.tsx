import preview from '#.storybook/preview'

import { Typography } from './typography'

const meta = preview.meta({
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
})

export const RegularText = meta.story({
  args: {
    variant: 'regularText16',
    children: 'Typography sample',
  },
})

export const HeadingH1 = meta.story({
  args: {
    variant: 'h1',
    children: 'Heading H1',
  },
})

export const Large = meta.story({
  args: {
    variant: 'large',
    children: 'Large text',
  },
})

export const RegularLink = meta.story({
  render: () => (
    <Typography variant="regularLink" href="#">
      Regular link
    </Typography>
  ),
})

export const SmallLink = meta.story({
  render: () => (
    <Typography variant="smallLink" href="#">
      Small link
    </Typography>
  ),
})
