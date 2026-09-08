import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { PropertyCard, type Property } from '@/components/property-card'
import { SectionHeading } from '@/components/section-heading'
import { cn } from '@/lib/utils'

export function ShowcaseSection({
  eyebrow,
  title,
  description,
  items,
  viewAllHref,
  viewAllLabel,
  className,
}: {
  eyebrow?: string
  title: string
  description?: string
  items: Property[]
  viewAllHref?: string
  viewAllLabel?: string
  className?: string
}) {
  return (
    <section className={cn('py-16 md:py-24', className)}>
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading align="left" eyebrow={eyebrow} title={title} description={description} />
          {viewAllHref && (
            <Link
              href={viewAllHref}
              className="inline-flex shrink-0 items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-foreground"
            >
              {viewAllLabel ?? 'View All'}
              <ArrowRight className="h-4 w-4" />
            </Link>
          )}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <PropertyCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
