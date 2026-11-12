'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

type Variant = 'fade-in' | 'slide-in'

interface Props {
  children: React.ReactNode
  variant?: Variant
  delay?: number
  className?: string
}

export default function ScrollReveal({
  children,
  variant = 'fade-in',
  delay = 0,
  className,
}: Props) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-8% 0px' })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: variant === 'slide-in' ? 28 : 0 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: variant === 'slide-in' ? 28 : 0 }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  )
}
