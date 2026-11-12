'use client'
import { useState, useEffect } from 'react'

const COOKIE_KEY = 'age_verified_21'
const COOKIE_DAYS = 30

function setCookie(name: string, value: string, days: number) {
  const expires = new Date()
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000)
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`
}

function getCookie(name: string): string {
  const match = document.cookie.match(`(^|;)\\s*${name}\\s*=\\s*([^;]+)`)
  return match ? match.pop()! : ''
}

export default function AgeGate() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (!getCookie(COOKIE_KEY)) setShow(true)
  }, [])

  if (!show) return null

  const confirm = () => {
    setCookie(COOKIE_KEY, 'yes', COOKIE_DAYS)
    setShow(false)
  }

  const deny = () => {
    window.location.href = 'https://www.google.com'
  }

  return (
    <div
      className="fixed inset-0 z-[99999] flex items-start justify-center pt-[10vh] px-4"
      style={{ background: 'rgba(0,0,0,0.85)' }}
    >
      <div
        className="w-full max-w-[560px] rounded-2xl p-7 text-center"
        style={{
          background: '#0F0F10',
          border: '1px solid rgba(212,175,55,0.35)',
        }}
      >
        <span
          className="inline-block text-xs font-heading font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4"
          style={{
            color: '#FFD976',
            background: 'rgba(212,175,55,0.08)',
            border: '1px solid rgba(212,175,55,0.28)',
            letterSpacing: '0.16em',
          }}
        >
          Adults Only
        </span>

        <h2 className="font-heading text-2xl md:text-3xl font-bold mb-2 text-ink">
          You must be 21+ to enter
        </h2>
        <p className="text-muted text-sm mb-6">
          This site sells vape products intended for adults only.
        </p>

        <div className="flex gap-3 justify-center">
          <button onClick={confirm} className="btn-lime text-sm px-6 py-3">
            I am 21+
          </button>
          <button
            onClick={deny}
            className="text-sm px-6 py-3 rounded-none border border-white/20 text-muted hover:text-ink transition-colors"
          >
            I am under 21
          </button>
        </div>

        <p className="mt-5 text-xs text-muted leading-relaxed">
          <strong className="text-ink">WARNING:</strong> Products on this website contain nicotine.
          Nicotine is an addictive chemical.
        </p>
      </div>
    </div>
  )
}
