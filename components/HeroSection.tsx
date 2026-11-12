import ScrollReveal from './ScrollReveal'

const VALUE_PROPS = [
  {
    icon: '🏷️',
    title: 'Dispensary Direct',
    body: 'We only partner with licensed dispensaries so products remain compliant, traceable, and fresh.',
  },
  {
    icon: '✅',
    title: 'Authenticated & Verified',
    body: 'Each item is sealed, batch-checked, and verified for authenticity before it ships to you.',
  },
  {
    icon: '🚚',
    title: 'Fast, Discreet Delivery',
    body: 'Plain packaging, real-time updates, and quick fulfillment — your privacy comes first.',
  },
]

const HOW_IT_WORKS = [
  { num: '1', title: 'Browse', body: 'Choose verified products curated from trusted dispensaries.' },
  { num: '2', title: 'Verify', body: 'We confirm authenticity, seal integrity, and batch details on every item.' },
  { num: '3', title: 'Deliver', body: 'Your order ships quickly in discreet, protective packaging with tracking.' },
  { num: '4', title: 'Enjoy', body: 'Open-box confidence: what you ordered is exactly what arrives — verified.' },
]

const TRUST_PILLS = [
  'Licensed sourcing',
  'Tamper-evident seals',
  'Batch / lot checks',
  'Discreet packaging',
]

const FAQS = [
  {
    q: 'Where do you source products?',
    a: 'Exclusively from licensed dispensaries and authorized suppliers. We do not purchase from grey-market sources.',
  },
  {
    q: 'How do you verify authenticity?',
    a: "We inspect tamper-evident seals, confirm batch/lot info, and cross-check with supplier data. If an item doesn't pass, it doesn't ship.",
  },
  {
    q: 'What does delivery look like?',
    a: 'Your order ships quickly in plain packaging with full tracking. Delivery timelines are shown at checkout based on your address.',
  },
]

export default function HeroSection() {
  return (
    <section className="page-width py-8 md:py-10">
      <div
        className="rounded-[18px] p-6 md:p-7"
        style={{
          background: '#0F0F10',
          border: '1px solid rgba(255,255,255,0.05)',
        }}
      >
        {/* Kicker */}
        <ScrollReveal variant="fade-in">
          <span
            className="inline-block text-xs font-heading tracking-[0.16em] uppercase px-3 py-1.5 rounded-full mb-3"
            style={{
              color: '#FFD976',
              background: 'rgba(212,175,55,0.08)',
              border: '1px solid rgba(212,175,55,0.28)',
            }}
          >
            Premium • Fast • Verified
          </span>
        </ScrollReveal>

        {/* Headline */}
        <ScrollReveal variant="slide-in" delay={0.05}>
          <h1
            className="font-heading font-extrabold text-ink mb-2"
            style={{ fontSize: 'clamp(28px, 4vw, 44px)', lineHeight: 1.1 }}
          >
            Dispensary-Sourced Vapes.{' '}
            <span className="text-lime">Delivered To Your Door.</span>
          </h1>
        </ScrollReveal>

        {/* Sub */}
        <ScrollReveal variant="fade-in" delay={0.1}>
          <p className="text-muted mb-5" style={{ fontSize: 'clamp(14px, 2.2vw, 16px)' }}>
            We source directly from licensed dispensaries and deliver to you quickly and
            discreetly. Every product is authenticated and quality-checked so you always know
            exactly what you&apos;re getting.
          </p>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal variant="fade-in" delay={0.15}>
          <div className="flex gap-3 flex-wrap mb-7">
            <a href="#products" className="btn-gold text-sm">
              Explore Products →
            </a>
          </div>
        </ScrollReveal>

        {/* Value props */}
        <ScrollReveal variant="slide-in" delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-7">
            {VALUE_PROPS.map((v) => (
              <div
                key={v.title}
                className="rounded-[14px] p-4"
                style={{
                  background: '#161718',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                <div
                  className="w-9 h-9 rounded-[10px] grid place-items-center mb-2 text-sm font-black"
                  style={{
                    background: 'rgba(212,175,55,0.12)',
                    border: '1px solid rgba(212,175,55,0.28)',
                    color: '#FFD976',
                  }}
                >
                  {v.icon}
                </div>
                <h3 className="font-heading font-black text-lg text-ink mb-1">{v.title}</h3>
                <p className="text-muted text-sm">{v.body}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* How it works */}
        <ScrollReveal variant="slide-in" delay={0.05}>
          <span
            className="inline-block text-xs font-heading tracking-[0.16em] uppercase px-3 py-1.5 rounded-full mb-3"
            style={{
              color: '#FFD976',
              background: 'rgba(212,175,55,0.08)',
              border: '1px solid rgba(212,175,55,0.28)',
            }}
          >
            How it works
          </span>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-7">
            {HOW_IT_WORKS.map((step) => (
              <div
                key={step.num}
                className="rounded-[14px] p-4 flex gap-3 items-start"
                style={{
                  background: '#161718',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                <div
                  className="min-w-[34px] h-[34px] rounded-full grid place-items-center font-black shrink-0"
                  style={{
                    background: 'rgba(212,175,55,0.14)',
                    border: '1px solid rgba(212,175,55,0.28)',
                    color: '#FFD976',
                  }}
                >
                  {step.num}
                </div>
                <div>
                  <h3 className="font-heading font-black text-base text-ink mb-1">{step.title}</h3>
                  <p className="text-muted text-sm">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Trust strip */}
        <ScrollReveal variant="fade-in">
          <div
            className="flex flex-wrap gap-2 items-center justify-center rounded-[14px] px-4 py-3 mb-7"
            style={{
              background: 'linear-gradient(180deg,#171719,#141416)',
              border: '1px solid rgba(212,175,55,0.28)',
            }}
          >
            {TRUST_PILLS.map((pill) => (
              <span
                key={pill}
                className="text-xs rounded-full px-3 py-1.5"
                style={{
                  color: '#FFD976',
                  background: 'rgba(212,175,55,0.08)',
                  border: '1px solid rgba(212,175,55,0.28)',
                }}
              >
                {pill}
              </span>
            ))}
          </div>
        </ScrollReveal>

        {/* FAQs */}
        <ScrollReveal variant="slide-in">
          <span
            className="inline-block text-xs font-heading tracking-[0.16em] uppercase px-3 py-1.5 rounded-full mb-3"
            style={{
              color: '#FFD976',
              background: 'rgba(212,175,55,0.08)',
              border: '1px solid rgba(212,175,55,0.28)',
            }}
          >
            FAQs
          </span>
          <div
            className="rounded-[14px] overflow-hidden"
            style={{ border: '1px solid rgba(255,255,255,0.06)' }}
          >
            {FAQS.map((faq, i) => (
              <details
                key={faq.q}
                className="group"
                style={{
                  borderTop: i > 0 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                }}
              >
                <summary
                  className="cursor-pointer px-4 py-3.5 font-heading font-bold text-sm text-ink list-none select-none flex justify-between items-center"
                  style={{ background: '#161718' }}
                >
                  {faq.q}
                  <span className="text-muted transition-transform duration-200 group-open:rotate-180 text-xs">
                    ▼
                  </span>
                </summary>
                <div
                  className="px-4 pb-4 pt-2 text-muted text-sm leading-relaxed"
                  style={{ background: '#121314' }}
                >
                  {faq.a}
                </div>
              </details>
            ))}
          </div>

          <p className="text-xs text-muted mt-4 leading-relaxed">
            <strong className="text-gold-light">Important:</strong> By ordering you confirm you are
            21+ and agree to abide by all local regulations. Availability may vary by region.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
