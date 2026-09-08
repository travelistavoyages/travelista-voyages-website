'use client'

import { useState } from 'react'
import { Send, Check } from 'lucide-react'
import { whatsappLink } from '@/lib/site'

const interests = [
  'Goa Villas',
  'Goa Hotels',
  'Domestic Tour Package',
  'International Tour Package',
  'Flight Tickets',
  'Yacht Booking',
  'Casino Booking',
  'Restaurant Booking',
  'Family Dinner Cruise',
  'Cycling Experience',
  'Other',
]

export function EnquiryForm({ defaultInterest }: { defaultInterest?: string }) {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') ?? '')
    const phone = String(data.get('phone') ?? '')
    const email = String(data.get('email') ?? '')
    const interest = String(data.get('interest') ?? '')
    const dates = String(data.get('dates') ?? '')
    const message = String(data.get('message') ?? '')

    const text = [
      `New enquiry for Travelista Voyages`,
      `Name: ${name}`,
      `Phone: ${phone}`,
      email && `Email: ${email}`,
      `Interested in: ${interest}`,
      dates && `Travel dates: ${dates}`,
      message && `Message: ${message}`,
    ]
      .filter(Boolean)
      .join('\n')

    window.open(whatsappLink(text), '_blank', 'noopener,noreferrer')
    setSent(true)
  }

  const fieldClass =
    'w-full rounded-md border border-input bg-navy-deep/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary'

  if (sent) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-lg border border-primary/40 bg-card p-8 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/15 text-primary">
          <Check className="h-7 w-7" />
        </span>
        <h3 className="font-serif text-2xl text-foreground">Thank you!</h3>
        <p className="max-w-sm text-sm text-muted-foreground">
          Your enquiry has been prepared in WhatsApp. Send the message and our travel
          concierge will get back to you shortly.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="text-sm font-medium text-primary underline-offset-4 hover:underline"
        >
          Submit another enquiry
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-xs uppercase tracking-wider text-muted-foreground">
            Full Name
          </label>
          <input id="name" name="name" required placeholder="Your name" className={fieldClass} />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-xs uppercase tracking-wider text-muted-foreground">
            Phone
          </label>
          <input id="phone" name="phone" required type="tel" placeholder="+91 ..." className={fieldClass} />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-1.5 block text-xs uppercase tracking-wider text-muted-foreground">
            Email
          </label>
          <input id="email" name="email" type="email" placeholder="you@email.com" className={fieldClass} />
        </div>
        <div>
          <label htmlFor="interest" className="mb-1.5 block text-xs uppercase tracking-wider text-muted-foreground">
            Interested In
          </label>
          <select id="interest" name="interest" defaultValue={defaultInterest ?? interests[0]} className={fieldClass}>
            {interests.map((i) => (
              <option key={i} value={i} className="bg-navy-deep">
                {i}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="dates" className="mb-1.5 block text-xs uppercase tracking-wider text-muted-foreground">
          Travel Dates / Guests
        </label>
        <input id="dates" name="dates" placeholder="e.g. 12–16 Dec, 2 adults" className={fieldClass} />
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-xs uppercase tracking-wider text-muted-foreground">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Tell us about your dream trip..."
          className={fieldClass}
        />
      </div>

      <button
        type="submit"
        className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.01] active:scale-100"
      >
        <Send className="h-4 w-4" />
        Send Enquiry
      </button>
      <p className="text-center text-xs text-muted-foreground">
        We respond within a few hours, 7 days a week.
      </p>
    </form>
  )
}
