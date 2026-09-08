import { EnquiryForm } from '@/components/enquiry-form'
import { SectionHeading } from '@/components/section-heading'

export function EnquirySection({ defaultInterest }: { defaultInterest?: string }) {
  return (
    <section id="enquiry" className="border-t border-border bg-navy-deep py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col justify-center">
          <SectionHeading
            align="left"
            eyebrow="Plan Your Journey"
            title="Request a Free Travel Consultation"
            description="Share your travel plans and our Goa-based concierge team will craft a personalised itinerary with the best villas, hotels and experiences — tailored to your taste and budget."
          />
          <ul className="mt-8 space-y-4">
            {[
              'Handpicked luxury villas & 5-star hotels',
              'Custom domestic & international tour packages',
              'Yacht, casino, dining & cruise reservations',
              'Dedicated 24x7 travel concierge on WhatsApp',
            ].map((point) => (
              <li key={point} className="flex items-start gap-3 text-sm text-foreground/85">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-[11px] font-bold text-primary">
                  ✓
                </span>
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border border-border bg-card p-6 md:p-8">
          <EnquiryForm defaultInterest={defaultInterest} />
        </div>
      </div>
    </section>
  )
}
