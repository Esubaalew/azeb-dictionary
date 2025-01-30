import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/ThemeProvider'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Azeb's Dictionary",
  description: "A tribute to Azeb Mehrete - Explore the world of words with our comprehensive dictionary",
  keywords: "dictionary, words, definitions, language, Azeb Mehrete",
  authors: [{ name: "Esubalew Chekol" }],
  openGraph: {
    title: "Azeb's Dictionary",
    description: "Explore the world of words with our comprehensive dictionary",
    url: "https://azeb.esube.com.et",
    siteName: "Azeb's Dictionary",
    images: [
      {
        url: "https://azeb.esube.com.et/new-og-image.png",
        width: 1200,
        height: 630,
        alt: "Azeb's Dictionary - Explore the world of words",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Azeb's Dictionary",
    description: "Explore the world of words with our comprehensive dictionary",
    images: ["https://azeb.esube.com.et/new-og-image.png"],
  },
  other: {
    "og:image": "https://azeb.esube.com.et/new-og-image.png",
    "og:image:width": "1200",
    "og:image:height": "630",
    "og:image:alt": "Azeb's Dictionary - Explore the world of words",
    "facebook:image": "https://azeb.esube.com.et/facebook-image.png",
    "telegram:image": "https://azeb.esube.com.et/telegram-image.png",
    "slack:image": "https://azeb.esube.com.et/slack-image.png",
    "linkedin:image": "https://azeb.esube.com.et/linkedin-image.png",
    "discord:image": "https://azeb.esube.com.et/discord-image.png",
  },
  manifest: "/manifest.json",
  themeColor: "#4a148c",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://azeb.esube.com.et" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <script 
          async 
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8765857492346495"
          crossOrigin="anonymous"
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

