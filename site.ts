export const site = {
  name: 'Travelista Voyages',
  tagline: 'Luxury Travel, Curated in Goa',
  phone: '+91 7387662502',
  phoneHref: 'tel:+917387662502',
  whatsapp: '917387662502',
  email: 'travelistavoyages@gmail.com',
  emailHref: 'mailto:travelistavoyages@gmail.com',
  location: 'Goa, India',
  // Google Maps embed centered on Goa
  mapEmbed:
    'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d246588.0!2d73.87!3d15.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1700000000000',
} as const

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'Goa Villas', href: '/goa-villas' },
  { label: 'Goa Hotels', href: '/goa-hotels' },
  { label: 'Domestic Tours', href: '/domestic-tours' },
  { label: 'International Tours', href: '/international-tours' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact Us', href: '/contact' },
] as const

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${site.whatsapp}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}
