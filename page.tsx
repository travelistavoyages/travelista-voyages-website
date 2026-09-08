import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { PropertyCard } from '@/components/property-card'
import { EnquirySection } from '@/components/enquiry-section'
import { SectionHeading } from '@/components/section-heading'
import { internationalTours } from '@/lib/data'

export const metadata: Metadata = {
  title: 'International Tours | International Tour Packages',
  description:
    'Luxury international tour packages to Dubai, Bali, Maldives and beyond. Visas, flights, stays and experiences handled end to end by Travelista Voyages.',
  alternates: { canonical: '/international-tours' },
}

export default function InternationalToursPage() {
  return (
    <>
      <PageHero
        eyebrow="International Tours"
        title="The World, Beautifully Arranged"
        description="From desert cities to overwater villas — international holidays with every detail taken care of."
        image="/images/intl-maldives.png"
        imageAlt="Maldives overwater villas above a turquoise lagoon"
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeading
            align="left"
            eyebrow="International Tour Packages"
            title="Coveted Destinations"
            description="Flights, visas, transfers and stays — bundled into one effortless, indulgent package."
          />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {internationalTours.map((item) => (
              <PropertyCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      <EnquirySection defaultInterest="International Tour Package" />
    </>
  )
}
