'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const SESSION_KEY = 'hv_notice_seen'
const SHOW_DELAY_MS = 3000
const AUTO_DISMISS_MS = 10000

export default function HighVolumeNotice() {
  const [visible, setVisible] = useState(false)
  const [progress, setProgress] = useState(100)

  useEffect(() => {
    if (typeof sessionStorage !== 'undefined' && sessionStorage.getItem(SESSION_KEY)) return

    const showTimer = setTimeout(() => {
      setVisible(true)
      // Start shrinking progress bar
      setProgress(0)
    }, SHOW_DELAY_MS)

    return () => clearTimeout(showTimer)
  }, [])

  useEffect(() => {
    if (!visible) return
    const dismissTimer = setTimeout(close, AUTO_DISMISS_MS)
    return () => clearTimeout(dismissTimer)
  }, [visible])

  const close = () => {
    setVisible(false)
    try { sessionStorage.setItem(SESSION_KEY, '1') } catch {}
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed bottom-6 right-6 z-[9999] overflow-hidden rounded-[8px]"
          style={{
            width: 'min(430px, calc(100vw - 32px))',
            background: 'linear-gradient(180deg,#121212 0%,#090909 100%)',
            border: '1px solid rgba(201,162,39,0.32)',
            boxShadow: '0 18px 40px rgba(0,0,0,0.42)',
          }}
          initial={{ opacity: 0, y: 24, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.985 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Top progress bar */}
          <motion.div
            className="absolute top-0 left-0 h-[3px]"
            style={{
              right: 0,
              background: 'linear-gradient(90deg,#8f6a16 0%,#d7b24d 50%,#8f6a16 100%)',
              transformOrigin: 'left',
            }}
            initial={{ scaleX: 1 }}
            animate={{ scaleX: 0 }}
            transition={{ duration: AUTO_DISMISS_MS / 1000, ease: 'linear' }}
          />

          <div className="px-5 pb-5 pt-4 relative">
            {/* Close button */}
            <button
              onClick={close}
              className="absolute top-3 right-3 text-[#c9a84c] text-lg leading-none hover:text-white transition-colors"
              aria-label="Close"
            >
              ✕
            </button>

            {/* Header */}
            <div className="flex items-center gap-2 mb-3.5">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
              <span
                className="text-[10px] font-heading font-bold uppercase tracking-[2.5px]"
                style={{ color: '#c9a84c' }}
              >
                Site Notice
              </span>
            </div>

            {/* Message */}
            <p className="text-sm leading-[1.65] max-w-[92%]" style={{ color: '#ddd' }}>
              We are currently experiencing a{' '}
              <span style={{ color: '#c9a84c', fontWeight: 600 }}>high volume of orders</span> and
              increased traffic. You may notice slight delays while browsing the website; shipping
              times are the same as usual{' '}
              <strong className="text-white">(1–3 business days)</strong>. Thank you for your
              patience and cooperation.
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
