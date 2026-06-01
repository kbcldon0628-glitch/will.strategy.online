import type { Metadata, Viewport } from 'next'
import { Noto_Sans_JP } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-sans",
  display: "swap",
  fallback: ["Hiragino Sans", "Yu Gothic", "Meiryo", "sans-serif"],
});

export const metadata: Metadata = {
  title: {
    default: '浪人生専用オンライン予備校【受験戦略予備校】',
    template: '%s | 浪人生専用オンライン予備校【受験戦略予備校】',
  },
  description: '国公立大学合格を目指す浪人生専門のオンライン予備校。20年の指導経験に基づいた、あなただけの合格ロードマップをマンツーマンで構築します。授業を増やすな、自習を極めろ。',
  robots: 'index, follow',
}

export const viewport: Viewport = {
  themeColor: '#1a2744',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" className="bg-background">
      <body className={`${notoSansJP.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
