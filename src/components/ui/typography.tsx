import type { ComponentPropsWithoutRef, ElementType } from 'react'
import { clsx } from 'clsx'

type TypographyVariant =
  | 'large'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'regularText16'
  | 'boldText16'
  | 'regularText14'
  | 'mediumText14'
  | 'boldText14'
  | 'smallText'
  | 'smallTextSemibold'
  | 'regularLink'
  | 'smallLink'

type LinkVariant = 'regularLink' | 'smallLink'
type NonLinkVariant = Exclude<TypographyVariant, LinkVariant>

const variantStyles: Record<TypographyVariant, string> = {
  large: 'text-large font-semibold text-foreground',
  h1: 'text-h1 font-bold text-foreground',
  h2: 'text-h2 font-bold text-foreground',
  h3: 'text-h3 font-semibold text-foreground',
  regularText16: 'text-regular-16 text-foreground',
  boldText16: 'text-bold-16 text-foreground',
  regularText14: 'text-regular-14 text-foreground',
  mediumText14: 'text-medium-14 text-foreground',
  boldText14: 'text-bold-14 text-foreground',
  smallText: 'text-small text-foreground',
  smallTextSemibold: 'text-small-semibold text-foreground',
  regularLink: 'text-link-regular text-primary underline-offset-4 hover:underline',
  smallLink: 'text-link-small text-primary underline-offset-4 hover:underline',
}

const defaultElements: Record<TypographyVariant, ElementType> = {
  large: 'p',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  regularText16: 'p',
  boldText16: 'p',
  regularText14: 'p',
  mediumText14: 'p',
  boldText14: 'p',
  smallText: 'small',
  smallTextSemibold: 'small',
  regularLink: 'a',
  smallLink: 'a',
}

type TypographyProps<T extends ElementType> = {
  as?: T
  variant: NonLinkVariant
  className?: string
} & Omit<ComponentPropsWithoutRef<T>, 'as' | 'className'>

type TypographyLinkProps = {
  as?: 'a'
  variant: LinkVariant
  className?: string
} & Omit<ComponentPropsWithoutRef<'a'>, 'as' | 'className'>

export function Typography(props: TypographyLinkProps): React.JSX.Element
export function Typography<T extends ElementType = 'p'>(props: TypographyProps<T>): React.JSX.Element
export function Typography<T extends ElementType = 'p'>(props: TypographyLinkProps | TypographyProps<T>) {
  const { as, variant, className, ...restProps } = props
  const Component = (as ?? defaultElements[variant]) as ElementType

  return <Component className={clsx(variantStyles[variant], className)} {...restProps} />
}

export type { TypographyVariant }
