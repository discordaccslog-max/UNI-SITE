import ScrollReveal from './ScrollReveal'

export default function RichTextCTA() {
  return (
    <section className="w-full py-10 md:py-16" style={{ background: '#0e0e10' }}>
      <div className="page-width text-center">
        <ScrollReveal variant="slide-in">
          <h2 className="font-heading text-2xl md:text-4xl font-black italic text-ink mb-6">
            Presented / Managed By UNI.{' '}
            <span className="text-lime">35,000+ Customers Nationwide</span>
          </h2>
        </ScrollReveal>
        <ScrollReveal variant="fade-in" delay={0.1}>
          <a href="#products" className="btn-lime text-base">
            Shop Now!
          </a>
        </ScrollReveal>
      </div>
    </section>
  )
}
