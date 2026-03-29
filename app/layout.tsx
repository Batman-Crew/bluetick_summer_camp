import type { Metadata } from 'next'
import { Geist, Geist_Mono, Crimson_Text, Sofia_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import ConditionalFooter from '@/components/ConditionalFooter'
import { Toaster } from 'sonner'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
export const crimsonText = Crimson_Text({ subsets: ["latin"], weight: ["400", "600", "700"], variable: "--font-crimson" });
export const sofiaSans = Sofia_Sans({ subsets: ["latin"], weight: ["400", "600", "700"], variable: "--font-sofia-sans" });

export const metadata: Metadata = {
  title: 'BlueTick',
  description: 'Created with BlueTick',
  generator: 'BlueTick',
  icons: {
    icon: [
      {
        url: '/icon.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.png',
        type: 'image/svg+xml',
      },
    ],
    apple: '/icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased ${crimsonText.variable} ${sofiaSans.variable}`}>
        {children}
        <ConditionalFooter />
        <Analytics />
        <Toaster position="top-center" richColors />
      </body>
    </html>
  )
}
