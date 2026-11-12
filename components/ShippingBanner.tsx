import ScrollReveal from './ScrollReveal'

export default function ShippingBanner() {
  return (
    <ScrollReveal variant="fade-in" className="page-width my-3">
      <div className="flex justify-center px-3 py-2.5">
        <div
          className="inline-flex items-center gap-3 px-4 py-3 rounded-[14px] w-full max-w-[980px]"
          style={{
            background: 'rgba(0,0,0,0.45)',
            border: '1px solid rgba(212,175,55,0.35)',
            boxShadow: '0 10px 30px rgba(0,0,0,0.35)',
            backdropFilter: 'blur(6px)',
            WebkitBackdropFilter: 'blur(6px)',
          }}
        >
          <span
            className="w-2.5 h-2.5 rounded-full shrink-0"
            style={{
              background: '#d4af37',
              boxShadow: '0 0 0 4px rgba(212,175,55,0.16)',
            }}
          />
          <span className="text-sm text-ink/90 leading-snug">
            Current Shipping ETA:{' '}
            <strong style={{ color: '#d4af37' }}>
              2–4 Business Days (Standard USPS Shipping)
            </strong>
          </span>
        </div>
      </div>
    </ScrollReveal>
  )
}
