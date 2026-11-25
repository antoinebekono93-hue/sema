import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import Script from 'next/script'
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
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
      {
        url: '/icon-light-32x32.png',
        type: 'image/png',
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
      <head>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-N8WC3P6W');`}
        </Script>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18455243181"
          strategy="afterInteractive"
        />
        <Script id="google-ads-gtag" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'AW-18455243181');`}
        </Script>
      </head>
      <body className="font-sans antialiased">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N8WC3P6W"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
      </body>
    </html>
  )
}
