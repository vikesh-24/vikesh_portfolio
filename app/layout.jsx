import './globals.css'
import { Playfair_Display, IBM_Plex_Sans } from 'next/font/google'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

const plexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['300', '400', '500', '600'],
  display: 'swap',
})

export const metadata = {
  title: 'Vikesh  - project manager',
  description: 'Personal portfolio of Vikesh , a passionate project manager specializing in MERN stack, Next.js, and mobile development.',
  keywords: 'project manager, MERN Stack, Next.js, React, Node.js, Mobile Development',
  authors: [{ name: 'Vikesh ' }],
  creator: 'Vikesh ',
  openGraph: {
    title: 'Vikesh  - project manager',
    description: 'Personal portfolio of Vikesh , a passionate project manager.',
    url: 'https://Vikesh-portfolio.vercel.app',
    siteName: 'Vikesh Portfolio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vikesh  - project manager',
    description: 'Personal portfolio of Vikesh , a passionate project manager.',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${plexSans.variable} ${playfair.variable} font-sans bg-white text-black antialiased`}>
        {children}
      </body>
    </html>
  )
}
