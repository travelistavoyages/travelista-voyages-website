import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin } from 'lucide-react'
import { nav, site } from '@/lib/site'

const services = [
  'Foreign Travel',
  'Domestic Travel',
  'Flight Tickets',
  'Hotels',
  'Luxury Villas',
  'Casino Booking',
  'Restaurant Booking',
  'Yacht Booking',
  'Cycling Experiences',
  'Family Dinner Cruises',
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-navy-deep">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-2 md:px-6 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/travelista-logo.png"
              alt="Travelista Voyages logo"
              width={52}
              height={52}
              className="h-12 w-12 rounded-sm object-cover"
            />
            <span className="font-serif text-lg font-semibold text-gold-gradient">
              Travelista Voyages
            </span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            A premium travel agency in Goa crafting bespoke villa stays, curated tours and
            unforgettable luxury experiences across India and the world.
          </p>
        </div>

        <div>
          <h3 className="font-serif text-lg text-primary">Explore</h3>
          <ul className="mt-4 space-y-2.5">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-foreground/80 transition-colors hover:text-primary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-serif text-lg text-primary">Services</h3>
          <ul className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-1">
            {services.map((s) => (
              <li key={s} className="text-sm text-foreground/80">
                {s}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-serif text-lg text-primary">Get in Touch</h3>
          <ul className="mt-4 space-y-3.5 text-sm">
            <li>
              <a
                href={site.phoneHref}
                className="flex items-center gap-3 text-foreground/80 transition-colors hover:text-primary"
              >
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                {site.phone}
              </a>
            </li>
            <li>
              <a
                href={site.emailHref}
                className="flex items-center gap-3 break-all text-foreground/80 transition-colors hover:text-primary"
              >
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                {site.email}
              </a>
            </li>
            <li className="flex items-center gap-3 text-foreground/80">
              <MapPin className="h-4 w-4 shrink-0 text-primary" />
              {site.location}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-muted-foreground md:flex-row md:px-6">
          <p>
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>Luxury Travel Agency in Goa</p>
        </div>
      </div>
    </footer>
  )
}
