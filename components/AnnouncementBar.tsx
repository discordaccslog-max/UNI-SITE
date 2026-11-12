'use client'
import { useState, useEffect } from 'react'

const MESSAGES = ['Based In California', 'Over 35,000+ Customers']

export default function AnnouncementBar() {
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const id = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setIndex((i) => (i + 1) % MESSAGES.length)
        setVisible(true)
      }, 300)
    }, 3000)
    return () => clearInterval(id)
  }, [])

  return (
    <div
      className="w-full border-b border-white/10 bg-bg-primary"
      style={{ minHeight: '2.6rem' }}
    >
      <div className="page-width flex items-center justify-center py-2">
        <p
          className="text-xs font-heading tracking-wider uppercase text-muted transition-opacity duration-300"
          style={{ opacity: visible ? 1 : 0 }}
        >
          {MESSAGES[index]}
        </p>
      </div>
    </div>
  )
}
