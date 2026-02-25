import preview from '#.storybook/preview'

import { Typography } from './typography'

const meta = preview.meta({
  title: 'UI/Typography',
  component: Typography,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Typography provides text styles through the `variant` prop. Use heading variants for hierarchy, body variants for readable content, and link variants when rendering anchors with `href`.',
      },
    },
  },
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
  parameters: {
    docs: {
      description: {
        story: 'Default body text style for most paragraphs and descriptive copy.',
      },
    },
  },
})

export const HeadingH1 = meta.story({
  args: {
    variant: 'h1',
    children: 'Heading H1',
  },
  parameters: {
    docs: {
      description: {
        story: 'Top-level heading style used for major section or page titles.',
      },
    },
  },
})

export const Large = meta.story({
  args: {
    variant: 'large',
    children: 'Large text',
  },
  parameters: {
    docs: {
      description: {
        story: 'Prominent large text variant for short highlights and emphasis blocks.',
      },
    },
  },
})

export const RegularLink = meta.story({
  render: () => (
    <Typography variant="regularLink" href="#">
      Regular link
    </Typography>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Regular-sized link typography rendered as an anchor via `href`.',
      },
    },
  },
})

export const SmallLink = meta.story({
  render: () => (
    <Typography variant="smallLink" href="#">
      Small link
    </Typography>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Compact link style for dense layouts such as footnotes or meta actions.',
      },
    },
  },
})
