'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone } from 'lucide-react'
import { nav, site } from '@/lib/site'
import { cn } from '@/lib/utils'

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-colors duration-300',
        scrolled || open
          ? 'bg-navy-deep/95 backdrop-blur-md border-b border-border'
          : 'bg-transparent',
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <Link href="/" className="flex items-center gap-3" aria-label={site.name}>
          <Image
            src="/images/travelista-logo.png"
            alt="Travelista Voyages logo"
            width={48}
            height={48}
            className="h-11 w-11 rounded-sm object-cover"
            priority
          />
          <span className="flex flex-col leading-none">
            <span className="font-serif text-lg font-semibold tracking-wide text-gold-gradient">
              Travelista Voyages
            </span>
            <span className="text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
              Luxury Travel · Goa
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'text-sm tracking-wide transition-colors hover:text-primary',
                pathname === item.href ? 'text-primary' : 'text-foreground/80',
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.phoneHref}
            className="hidden items-center gap-2 rounded-full border border-primary/40 px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground md:inline-flex"
          >
            <Phone className="h-4 w-4" />
            {site.phone}
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-border text-foreground lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-navy-deep/98 lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-2" aria-label="Mobile">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'border-b border-border/60 py-3 text-base tracking-wide last:border-0',
                  pathname === item.href ? 'text-primary' : 'text-foreground/90',
                )}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={site.phoneHref}
              className="mt-3 mb-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground"
            >
              <Phone className="h-4 w-4" />
              Call {site.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
