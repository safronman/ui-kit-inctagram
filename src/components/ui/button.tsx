import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { Slot } from 'radix-ui'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-[2px] border border-transparent text-h3 font-semibold transition-colors disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 outline-none",
  {
    variants: {
      variant: {
        primary:
          'bg-[var(--accent-500)] text-[var(--neutral-100)] hover:bg-[var(--accent-100)] active:bg-[var(--accent-700)] active:text-[var(--neutral-500)] focus-visible:border-2 focus-visible:border-[var(--accent-700)] disabled:bg-[var(--accent-900)] disabled:text-[var(--neutral-900)]',
        secondary:
          'bg-[var(--ink-300)] text-[var(--neutral-100)] hover:bg-[var(--ink-100)] active:bg-[var(--ink-400)] focus-visible:border focus-visible:border-[var(--accent-300)] disabled:bg-[var(--ink-500)] disabled:text-[var(--neutral-900)]',
        outline:
          'border-[var(--accent-500)] text-[var(--accent-500)] hover:border-[var(--accent-100)] hover:text-[var(--accent-100)] active:border-[var(--accent-700)] active:text-[var(--accent-700)] focus-visible:border-2 focus-visible:border-[var(--accent-700)] focus-visible:text-[var(--accent-700)] disabled:border-[var(--accent-900)] disabled:text-[var(--accent-900)]',
        text: 'text-[var(--accent-500)] hover:text-[var(--accent-100)] active:text-[var(--accent-700)] focus-visible:border-2 focus-visible:border-[var(--accent-700)] disabled:text-[var(--accent-900)]',
      },
      size: {
        default: 'h-9 px-6 py-1.5 has-[>svg]:px-4',
        xs: "h-6 gap-1 rounded-[2px] px-2 text-xs has-[>svg]:px-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: 'h-8 gap-1.5 rounded-[2px] px-3 has-[>svg]:px-2.5',
        lg: 'h-10 rounded-[2px] px-6 has-[>svg]:px-4',
        icon: 'size-9',
        'icon-xs': "size-6 rounded-[2px] [&_svg:not([class*='size-'])]:size-3",
        'icon-sm': 'size-8',
        'icon-lg': 'size-10',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  },
)

function Button({
  className,
  variant = 'primary',
  size = 'default',
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : 'button'

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
