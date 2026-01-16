import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Script from 'next/script';
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import ConversaTreeWidget from "@/components/components/ConversaTreeWidget";

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "TravelKaro - Your Trusted Partner for Umrah Journey",
  description:
    "TravelKaro provides seamless Umrah travel experiences, ensuring every journey is memorable and spiritually fulfilling.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
                    <ConversaTreeWidget />

        
    </html>
  )
}
