import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { pageContainerClass } from './page-classes'

export function PageContainer({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return <div className={cn(pageContainerClass, className)}>{children}</div>
}

export function SectionBadge({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        'inline-block rounded-full bg-brand-accent-soft px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-accent-dark',
        className,
      )}
    >
      {children}
    </span>
  )
}

export function PageHeading<T extends ElementType = 'h1'>({
  as,
  children,
  className,
  ...props
}: {
  as?: T
  children: ReactNode
  className?: string
} & Omit<ComponentPropsWithoutRef<T>, 'as' | 'children' | 'className'>) {
  const Comp = as ?? 'h1'
  return (
    <Comp
      className={cn('font-heading font-extrabold tracking-tight text-brand-ink', className)}
      {...props}
    >
      {children}
    </Comp>
  )
}
