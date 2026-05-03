import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MedScan — Scan Pill Bottles for Dangerous Drug Interactions',
  description: 'Use your phone camera to identify medications and check for dangerous interactions and dosage conflicts. Built for elderly patients and caregivers managing multiple medications.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="6e275a82-9453-4aaa-8851-f8fe28d71108"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">
        {children}
      </body>
    </html>
  )
}
