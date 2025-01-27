import type { Metadata } from 'next'
import { Quicksand, Montserrat } from 'next/font/google'
import '@/app/globals.css'

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
  title: 'Portfolio | Zeef Oria – Explore his Creative Journey',
  description: 'Discover the work of Zeef Oria',
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
        <div className="min-h-full">{children}</div>
      </body>
    </html>
  )
}
