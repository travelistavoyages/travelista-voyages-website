import type { Property } from '@/components/property-card'

export const villas: Property[] = [
  {
    title: 'Azure Cliff Villa',
    location: 'Vagator, North Goa',
    description:
      'A four-bedroom clifftop retreat with a private infinity pool, sea views and a personal chef on call.',
    price: '₹45,000',
    priceUnit: 'night',
    tags: ['4 BHK', 'Private Pool', 'Sea View', 'Chef'],
    image: '/images/villa-1.png',
  },
  {
    title: 'Casa Dourada',
    location: 'Assagao, North Goa',
    description:
      'Restored Portuguese mansion blending heritage charm with modern luxury, set amid lush tropical gardens.',
    price: '₹38,000',
    priceUnit: 'night',
    tags: ['3 BHK', 'Heritage', 'Garden', 'Butler'],
    image: '/images/villa-2.png',
  },
  {
    title: 'Serene Beach House',
    location: 'Morjim, North Goa',
    description:
      'A beachfront villa steps from the sand with a private deck, plunge pool and unobstructed sunset views.',
    price: '₹52,000',
    priceUnit: 'night',
    tags: ['5 BHK', 'Beachfront', 'Plunge Pool', 'Deck'],
    image: '/images/villa-3.png',
  },
]

export const hotels: Property[] = [
  {
    title: 'The Grand Palms Resort',
    location: 'Candolim, North Goa',
    description:
      'A five-star beach resort with palm-lined pools, a signature spa and award-winning coastal dining.',
    price: '₹18,000',
    priceUnit: 'night',
    tags: ['5 Star', 'Spa', 'Beach Access', 'Breakfast'],
    image: '/images/hotel-1.png',
  },
  {
    title: 'Ocean Suite Boutique Hotel',
    location: 'Colva, South Goa',
    description:
      'Intimate boutique suites with private sea-view balconies, marble baths and personalised service.',
    price: '₹14,500',
    priceUnit: 'night',
    tags: ['Boutique', 'Sea View', 'Suites', 'Pool'],
    image: '/images/hotel-2.png',
  },
]

export const domesticTours: Property[] = [
  {
    title: 'Kerala Backwaters Escape',
    location: 'Kerala',
    description:
      'Five days of houseboat cruising, Munnar tea hills and Ayurvedic spa retreats through God’s Own Country.',
    price: '₹32,000',
    priceUnit: 'person',
    tags: ['5 Days', 'Houseboat', 'Hill Station'],
    image: '/images/domestic-kerala.png',
  },
  {
    title: 'Royal Rajasthan Heritage',
    location: 'Rajasthan',
    description:
      'Palaces, forts and desert nights across Udaipur, Jaipur and Jaisalmer with heritage hotel stays.',
    price: '₹48,000',
    priceUnit: 'person',
    tags: ['7 Days', 'Palaces', 'Luxury Stay'],
    image: '/images/domestic-rajasthan.png',
  },
  {
    title: 'Kashmir Valley Retreat',
    location: 'Kashmir',
    description:
      'Shikara rides on Dal Lake, Gulmarg gondolas and houseboat stays amid the snow-capped Himalayas.',
    price: '₹41,000',
    priceUnit: 'person',
    tags: ['6 Days', 'Houseboat', 'Mountains'],
    image: '/images/domestic-kashmir.png',
  },
]

export const internationalTours: Property[] = [
  {
    title: 'Dubai Luxury Getaway',
    location: 'United Arab Emirates',
    description:
      'Desert safaris, Burj Khalifa suites and yacht brunches across the dazzling city of gold.',
    price: '₹85,000',
    priceUnit: 'person',
    tags: ['5 Days', 'Luxury', 'Desert Safari'],
    image: '/images/intl-dubai.png',
  },
  {
    title: 'Bali Island Indulgence',
    location: 'Indonesia',
    description:
      'Clifftop villas, Ubud rice terraces and private beach clubs on the island of the gods.',
    price: '₹72,000',
    priceUnit: 'person',
    tags: ['6 Days', 'Villas', 'Beach Clubs'],
    image: '/images/intl-bali.png',
  },
  {
    title: 'Maldives Overwater Bliss',
    location: 'Maldives',
    description:
      'Overwater villas, private lagoons and world-class diving in an all-inclusive tropical paradise.',
    price: '₹1,25,000',
    priceUnit: 'person',
    tags: ['5 Days', 'Overwater Villa', 'All-Inclusive'],
    image: '/images/intl-maldives.png',
  },
]
