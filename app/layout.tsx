import type { Metadata } from 'next'
import { Oswald, Nunito } from 'next/font/google'
import './globals.css'
import AnnouncementBar from '@/components/AnnouncementBar'
import Header from '@/components/Header'
import AgeGate from '@/components/AgeGate'

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-oswald',
  display: 'swap',
})

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-nunito',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'UNI Dispo — Premium Vapes, Delivered',
  description:
    'Dispensary-sourced, authenticated, and delivered. 35,000+ customers nationwide. Fast, discreet shipping.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${oswald.variable} ${nunito.variable}`}>
      <body className="bg-bg-primary text-ink font-body">
        <AgeGate />
        <AnnouncementBar />
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}
