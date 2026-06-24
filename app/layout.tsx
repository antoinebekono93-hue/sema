import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://fourstatesrepair-placeholder.com'),
  title: 'Appliance Repair Joplin MO | Four States Appliance Repair',
  description:
    'Expert appliance repair in Joplin, MO and Southwest Missouri. Same-day service for refrigerators, washers, dryers, and ovens. No service fee with repair.',
  keywords: ['Appliance repair Joplin MO', 'Refrigerator repair Missouri', 'Washer repair Carthage MO', 'Dryer repair Webb City MO', 'Appliance service Neosho', 'Southwest Missouri appliance repair'],
  authors: [{ name: 'Four States Appliance Repair' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://fourstatesrepair-placeholder.com',
    title: 'Appliance Repair Joplin MO | Four States Appliance Repair',
    description: 'Expert, Master Certified appliance repair in Joplin and Southwest Missouri. Same-day service, flat-rate pricing, 2-year warranty.',
    siteName: 'Four States Appliance Repair',
  },
  alternates: {
    canonical: 'https://fourstatesrepair-placeholder.com',
  },
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
        <SpeedInsights />
      </body>
    </html>
  )
}
