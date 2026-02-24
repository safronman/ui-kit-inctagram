import type { HTMLAttributes } from 'react'

import { cn } from '@/lib/utils'

type TypographyProps = HTMLAttributes<HTMLElement>

export function H1({ className, ...props }: TypographyProps) {
  return <h1 className={cn('scroll-m-20 text-h1 font-bold tracking-tight text-balance', className)} {...props} />
}

export function H2({ className, ...props }: TypographyProps) {
  return (
    <h2 className={cn('scroll-m-20 border-b pb-2 text-h2 font-bold tracking-tight first:mt-0', className)} {...props} />
  )
}

export function H3({ className, ...props }: TypographyProps) {
  return <h3 className={cn('scroll-m-20 text-h3 font-semibold tracking-tight', className)} {...props} />
}

export function P({ className, ...props }: TypographyProps) {
  return <p className={cn('text-regular-16 [&:not(:first-child)]:mt-6', className)} {...props} />
}

export function Lead({ className, ...props }: TypographyProps) {
  return <p className={cn('text-regular-16 text-muted-foreground', className)} {...props} />
}

export function Large({ className, ...props }: TypographyProps) {
  return <div className={cn('text-large font-semibold', className)} {...props} />
}

export function Small({ className, ...props }: TypographyProps) {
  return <small className={cn('text-small font-medium leading-none', className)} {...props} />
}

export function Muted({ className, ...props }: TypographyProps) {
  return <p className={cn('text-small text-muted-foreground', className)} {...props} />
}

export function InlineCode({ className, ...props }: TypographyProps) {
  return (
    <code
      className={cn('bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold', className)}
      {...props}
    />
  )
}

export function Blockquote({ className, ...props }: TypographyProps) {
  return <blockquote className={cn('mt-6 border-l-2 pl-6 italic', className)} {...props} />
}

type ListProps = HTMLAttributes<HTMLUListElement>

export function List({ className, ...props }: ListProps) {
  return <ul className={cn('my-6 ml-6 list-disc [&>li]:mt-2', className)} {...props} />
}
