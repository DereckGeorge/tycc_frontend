import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Tanzania Youth Chamber of Commerce (TYCC) - Empowering Young Entrepreneurs",
  description: "TYCC is Tanzania's premier organization supporting young entrepreneurs with business training, mentorship, funding opportunities, and networking events. Join our programs to transform your business ideas into successful ventures.",
  keywords: [
    "Tanzania Youth Chamber of Commerce",
    "TYCC",
    "young entrepreneurs",
    "business training",
    "startup incubator",
    "youth entrepreneurship",
    "business mentorship",
    "funding opportunities",
    "networking events",
    "Dar es Salaam",
    "Tanzania business",
    "entrepreneurship programs",
    "digital skills",
    "women in business",
    "AfCFTA",
    "trade opportunities",
    "business development",
    "pitch competitions",
    "investor connections"
  ],
  authors: [{ name: "Tanzania Youth Chamber of Commerce" }],
  creator: "TYCC",
  publisher: "Tanzania Youth Chamber of Commerce",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://tycc.e-saloon.online'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Tanzania Youth Chamber of Commerce (TYCC) - Empowering Young Entrepreneurs",
    description: "TYCC is Tanzania's premier organization supporting young entrepreneurs with business training, mentorship, funding opportunities, and networking events.",
    url: 'https://tycc.e-saloon.online',
    siteName: 'Tanzania Youth Chamber of Commerce',
    images: [
      {
        url: '/logo.png',
        width: 300,
        height: 300,
        alt: 'TYCC Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Tanzania Youth Chamber of Commerce (TYCC) - Empowering Young Entrepreneurs",
    description: "TYCC is Tanzania's premier organization supporting young entrepreneurs with business training, mentorship, funding opportunities, and networking events.",
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1e40af" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <link rel="canonical" href="https://tycc.e-saloon.online" />
        <link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml" />
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
