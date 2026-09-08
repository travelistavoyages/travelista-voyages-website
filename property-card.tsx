import Image from 'next/image'
import { MapPin, ArrowUpRight } from 'lucide-react'
import { whatsappLink } from '@/lib/site'

export type Property = {
  title: string
  location: string
  description: string
  price?: string
  priceUnit?: string
  tags?: string[]
  image: string
}

export function PropertyCard({ item }: { item: Property }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-colors hover:border-primary/50">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={item.image || '/placeholder.svg'}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {item.price && (
          <div className="absolute bottom-3 left-3 rounded-full bg-navy-deep/85 px-3 py-1.5 text-sm backdrop-blur-sm">
            <span className="font-semibold text-primary">{item.price}</span>
            {item.priceUnit && (
              <span className="text-xs text-muted-foreground"> / {item.priceUnit}</span>
            )}
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-1.5 text-xs uppercase tracking-wider text-primary">
          <MapPin className="h-3.5 w-3.5" />
          {item.location}
        </div>
        <h3 className="mt-2 font-serif text-xl text-foreground">{item.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {item.description}
        </p>

        {item.tags && item.tags.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-2">
            {item.tags.map((t) => (
              <li
                key={t}
                className="rounded-full border border-border px-2.5 py-1 text-xs text-foreground/70"
              >
                {t}
              </li>
            ))}
          </ul>
        )}

        <a
          href={whatsappLink(`Hi Travelista Voyages, I'm interested in "${item.title}" (${item.location}). Please share details.`)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center justify-center gap-2 rounded-full border border-primary/50 px-4 py-2.5 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          Enquire Now
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </article>
  )
}
