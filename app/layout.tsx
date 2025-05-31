import "./globals.css"

import { Geist, Geist_Mono } from "next/font/google"

import { Footer } from "./components/footer"
import { Header } from "./components/header"
import { MainContentSkipLink } from "./components/main-content-skip-link"
import type { Metadata } from "next"
import { ThemeProvider } from "./components/theme-provider"
import { siteConfig } from "@/config/site"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          <MainContentSkipLink />
          <div className="grid grid-rows-[20px_1fr_20px] min-h-screen px-2 pt-4 pb-8 gap-16 sm:px-4 sm:pt-8 md:px-8 font-[family-name:var(--font-geist-sans)]">
            <Header />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
