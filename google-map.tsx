export function GoogleMap({
  query = 'Goa, India',
  title = 'Travelista Voyages location on Google Maps',
  className = 'h-[360px]',
}: {
  query?: string
  title?: string
  className?: string
}) {
  const src = `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`
  return (
    <div className={`w-full overflow-hidden rounded-lg border border-border ${className}`}>
      <iframe
        title={title}
        src={src}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-full w-full"
        style={{ border: 0, filter: 'grayscale(0.2) contrast(1.05)' }}
      />
    </div>
  )
}
