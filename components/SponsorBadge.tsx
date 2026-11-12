'use client'
import { motion } from 'framer-motion'
import ScrollReveal from './ScrollReveal'

export default function SponsorBadge() {
  return (
    <ScrollReveal variant="fade-in" className="page-width py-6 flex justify-center">
      <div
        className="relative text-center rounded-[20px] px-8 py-10 w-full max-w-[640px] overflow-hidden"
        style={{
          background: 'radial-gradient(circle at center, rgba(255,215,0,0.08), rgba(0,0,0,0.4))',
          border: '1px solid rgba(212,175,55,0.25)',
          boxShadow: '0 0 24px rgba(255,215,0,0.05)',
        }}
      >
        {/* Animated glow ring */}
        <motion.div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: 300,
            height: 300,
            background: 'radial-gradient(circle, rgba(212,175,55,0.15) 0%, transparent 70%)',
            top: -100,
            left: 'calc(50% - 150px)',
          }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.25, 0.4, 0.25] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        />

        <h2
          className="font-heading font-black uppercase relative z-10"
          style={{
            fontSize: 28,
            color: '#FFD976',
            letterSpacing: '1px',
          }}
        >
          Official Sponsor of Raw Garden
        </h2>
        <p className="text-sm relative z-10 mt-2.5" style={{ color: '#aaa', letterSpacing: '0.5px' }}>
          Based in California
        </p>
      </div>
    </ScrollReveal>
  )
}
