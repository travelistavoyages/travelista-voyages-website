import { cn } from '@/lib/utils'

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
}: {
  eyebrow?: string
  title: string
  description?: string
  align?: 'center' | 'left'
  className?: string
}) {
  return (
    <div
      className={cn(
        'flex flex-col gap-3',
        align === 'center' ? 'items-center text-center' : 'items-start text-left',
        className,
      )}
    >
      {eyebrow && (
        <span className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.3em] text-primary">
          <span className="h-px w-8 bg-primary/50" />
          {eyebrow}
        </span>
      )}
      <h2 className="font-serif text-3xl leading-tight text-balance text-foreground md:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'max-w-2xl text-pretty leading-relaxed text-muted-foreground',
            align === 'center' ? 'mx-auto' : '',
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}
