export default function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="w-full text-center px-5 py-10 text-sm"
      style={{
        background: '#0f0f10',
        borderTop: '1px solid rgba(212,175,55,0.15)',
      }}
    >
      <div className="font-heading text-xl font-black tracking-widest uppercase mb-3" style={{ color: '#FFD976' }}>
        UNI
      </div>

      <nav className="flex flex-wrap justify-center gap-4 mb-5">
        {[
          { label: 'All Products', href: '#products' },
          { label: 'Bulk Orders', href: '#bulk-orders' },
        ].map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-muted hover:text-gold-light transition-colors duration-200 font-semibold"
          >
            {link.label}
          </a>
        ))}
      </nav>

      <p className="text-xs leading-relaxed" style={{ color: '#777' }}>
        © {year} UNI Dispo. All rights reserved.
        <br />
        Licensed vendor. Based in California.
      </p>
    </footer>
  )
}
