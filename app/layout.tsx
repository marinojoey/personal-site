import React from 'react'
import './globals.css'
import type { Metadata } from 'next'
import { Inter, Hanuman } from 'next/font/google'
import NavBar from './components/Navbar'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })
const hanuman = Hanuman({ subsets: ['latin'], style: 'normal', weight: '300' })

export const metadata: Metadata = {
  title: 'Personal Site',
  description: 'Personal site of Joey Marino',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <NavBar />
        <main className={`${hanuman.className} flex-grow pl-0 mt-0 test-homeText`}>{children}</main>
        <Footer className="flex items-center justify-center" />
      </body>
    </html>
  )
}
