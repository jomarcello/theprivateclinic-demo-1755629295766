import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { getCurrentPractice } from '@/lib/practice-config'

const inter = Inter({ subsets: ['latin'] })
const practice = getCurrentPractice()

export const metadata: Metadata = {
  title: `${practice.name} - AI Voice Agent Demo | ${practice.doctor}`,
  description: `Professional ${practice.type} services with ${practice.doctor} at ${practice.name}. Experience our AI voice assistant Robin for 24/7 appointment scheduling.`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <body className={inter.className}>{children}</body>
    </html>
  )
}