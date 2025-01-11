import type { Metadata } from 'next'
import { Quicksand, Montserrat } from 'next/font/google'
import './globals.css'
import Navbar from '@/app/components/NavBar'
import Footer from '@/app/components/Footer'

const quickSand = Quicksand({
  variable: '--font-quicksand',
  subsets: ['latin'],
  display: 'swap',
})

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Zeef Oria: A Renaissance of Art and Resilience After 30 Years',
  description:
    'Discover the inspiring journey of Zeef Oria, a contemporary artist who transforms three decades of silence into a vibrant artistic renaissance. Explore his evocative works that delve into memory, resilience, and the profound beauty of rediscovery.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${quickSand.variable} ${montserrat.variable} antialiased`}
      >
        <Navbar />
        <div className="min-h-full pt-[64px] pb-[128px]">{children}</div>
        <Footer />
      </body>
    </html>
  )
}
