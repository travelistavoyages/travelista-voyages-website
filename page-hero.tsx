import Image from 'next/image'
import Link from 'next/link'

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
}: {
  eyebrow: string
  title: string
  description: string
  image: string
  imageAlt: string
}) {
  return (
    <section className="relative flex min-h-[52vh] items-end overflow-hidden md:min-h-[60vh]">
      <Image
        src={image || '/placeholder.svg'}
        alt={imageAlt}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/70 to-navy-deep/30" />
      <div className="relative mx-auto w-full max-w-7xl px-4 pb-12 pt-28 md:px-6 md:pb-16">
        <nav aria-label="Breadcrumb" className="mb-4 text-xs uppercase tracking-[0.25em] text-primary">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <span className="mx-2 text-muted-foreground">/</span>
          <span className="text-muted-foreground">{eyebrow}</span>
        </nav>
        <h1 className="max-w-3xl font-serif text-4xl leading-tight text-balance text-foreground md:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-foreground/80 md:text-lg">
          {description}
        </p>
      </div>
    </section>
  )
}
