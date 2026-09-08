import {
  Globe,
  Map,
  PlaneTakeoff,
  Hotel,
  Building2,
  Dices,
  UtensilsCrossed,
  Sailboat,
  Bike,
  Ship,
} from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const services = [
  { icon: Globe, title: 'Foreign Travel', desc: 'Curated international holidays with visas, stays and experiences handled end to end.' },
  { icon: Map, title: 'Domestic Travel', desc: 'Explore India’s finest destinations with thoughtfully designed tour packages.' },
  { icon: PlaneTakeoff, title: 'Flight Tickets', desc: 'Best fares on domestic and international flights, booked in minutes.' },
  { icon: Hotel, title: 'Hotels', desc: 'Handpicked five-star and boutique hotels at exclusive negotiated rates.' },
  { icon: Building2, title: 'Luxury Villas', desc: 'Private villas with pools, chefs and butlers across Goa’s best locales.' },
  { icon: Dices, title: 'Casino Booking', desc: 'Priority entry and packages to Goa’s premier offshore and onshore casinos.' },
  { icon: UtensilsCrossed, title: 'Restaurant Booking', desc: 'Reservations at the most sought-after fine-dining tables in Goa.' },
  { icon: Sailboat, title: 'Yacht Booking', desc: 'Private yacht charters for sunset cruises, parties and celebrations.' },
  { icon: Bike, title: 'Cycling Experiences', desc: 'Guided coastal and heritage cycling trails through hidden Goa.' },
  { icon: Ship, title: 'Family Dinner Cruises', desc: 'Elegant dinner cruises with live music and river-lit views.' },
]

export function ServicesSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          eyebrow="What We Offer"
          title="A Full-Service Luxury Travel Concierge"
          description="Everything you need for the perfect escape, managed by a single dedicated team in Goa."
        />

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {services.map((s) => (
            <div
              key={s.title}
              className="group rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/50"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <s.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-4 font-serif text-lg text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
