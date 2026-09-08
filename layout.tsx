import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { WhatsAppButton } from '@/components/whatsapp-button'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const siteUrl = 'https://travelistavoyages.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Travelista Voyages | Luxury Travel Agency in Goa',
    template: '%s | Travelista Voyages',
  },
  description:
    'Travelista Voyages is a premium travel agency in Goa offering luxury Goa villas, Goa hotels, domestic and international tour packages, flights, yacht, casino and restaurant bookings.',
  keywords: [
    'Travel Agency Goa',
    'Goa Villas',
    'Goa Hotels',
    'Goa Tour Packages',
    'International Tour Packages',
    'Luxury villas Goa',
    'Domestic tour packages',
    'Yacht booking Goa',
  ],
  authors: [{ name: 'Travelista Voyages' }],
  generator: 'v0.app',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteUrl,
    siteName: 'Travelista Voyages',
    title: 'Travelista Voyages | Luxury Travel Agency in Goa',
    description:
      'Luxury Goa villas, hotels, and curated domestic & international tour packages by Travelista Voyages.',
    images: [{ url: '/images/hero-goa.png', width: 1200, height: 630, alt: 'Travelista Voyages' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Travelista Voyages | Luxury Travel Agency in Goa',
    description:
      'Luxury Goa villas, hotels, and curated domestic & international tour packages.',
    images: ['/images/hero-goa.png'],
  },
  alternates: { canonical: siteUrl },
}

export const viewport: Viewport = {
  themeColor: '#0a1428',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} bg-background`}>
      <body className="font-sans antialiased">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <WhatsAppButton />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
