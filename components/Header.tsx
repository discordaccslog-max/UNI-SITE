'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const NAV_LINKS = [
  { label: 'All Products', href: '/#products' },
  { label: 'Bulk Orders', href: '/#bulk-orders' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [visible, setVisible] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 10)
      setVisible(y < lastScrollY || y < 80)
      setLastScrollY(y)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [lastScrollY])

  return (
    <header
      className={`sticky top-0 z-40 transition-transform duration-300 ${
        visible ? 'translate-y-0' : '-translate-y-full'
      } ${scrolled ? 'bg-bg-primary/95 backdrop-blur-sm shadow-[0_1px_0_rgba(255,255,255,0.05)]' : 'bg-bg-primary'}`}
    >
      <div className="page-width flex items-center justify-between py-4">
        {/* Mobile menu toggle */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-6 bg-ink transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block h-0.5 w-6 bg-ink transition-opacity duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 w-6 bg-ink transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>

        {/* Logo */}
        <Link
          href="/"
          className="font-heading text-2xl font-bold tracking-widest text-gold-light uppercase"
          style={{ letterSpacing: '0.15em' }}
        >
          UNI
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-heading text-sm uppercase tracking-wider text-muted hover:text-ink transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right slot (spacer on mobile to balance logo) */}
        <div className="w-8 lg:hidden" />
      </div>

      {/* Mobile nav drawer */}
      {menuOpen && (
        <div className="lg:hidden border-t border-white/10 bg-bg-card">
          <nav className="page-width flex flex-col py-4 gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-heading text-sm uppercase tracking-wider text-muted hover:text-ink transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
