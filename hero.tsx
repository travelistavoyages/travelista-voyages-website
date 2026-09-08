import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'
import { site } from '@/lib/site'

export function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden">
      <Image
        src="/images/hero-goa.png"
        alt="Luxury villa overlooking a Goa beach at golden hour"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/80 to-navy-deep/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-transparent to-navy-deep/40" />

      <div className="relative mx-auto w-full max-w-7xl px-4 pt-24 md:px-6">
        <div className="max-w-2xl">
          <span className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.35em] text-primary">
            <span className="h-px w-10 bg-primary/60" />
            Luxury Travel Agency · Goa
          </span>
          <h1 className="mt-6 font-serif text-4xl leading-[1.05] text-balance text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Journeys Crafted in <span className="text-gold-gradient">Gold</span>
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-foreground/85 md:text-lg">
            From private Goa villas and five-star stays to curated tours across India and the
            world — Travelista Voyages designs seamless, indulgent escapes tailored entirely
            to you.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#enquiry"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
            >
              Plan My Trip
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={site.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/40 px-7 py-3.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
            >
              <Phone className="h-4 w-4" />
              {site.phone}
            </a>
          </div>

          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-border/60 pt-8">
            {[
              { value: '10+', label: 'Years of Expertise' },
              { value: '5,000+', label: 'Happy Travellers' },
              { value: '50+', label: 'Global Destinations' },
            ].map((stat) => (
              <div key={stat.label}>
                <dt className="font-serif text-2xl text-primary md:text-3xl">{stat.value}</dt>
                <dd className="mt-1 text-xs leading-snug text-muted-foreground">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
