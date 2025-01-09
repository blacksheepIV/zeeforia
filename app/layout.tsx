import type { Metadata } from 'next'
import { Quicksand } from 'next/font/google'
import './globals.css'
import Navbar from '@/app/components/NavBar'

const quickSand = Quicksand({
  variable: '--font-quick-sand',
  subsets: ['latin'],
  display: 'swap',
})

// const geistMono = Geist_Mono({
//   variable: '--font-geist-mono',
//   subsets: ['latin'],
// })

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
      <body className={`${quickSand.className} antialiased`}>
        <Navbar />
        <div className="px-3 pt-24">{children}</div>
      </body>
    </html>
  )
}
