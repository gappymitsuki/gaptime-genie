import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: '株式会社Gappy - 旅ナカの「いま・ここでできること」を、AIで可視化する',
  description: 'Gappyは、インバウンド旅行者の滞在中の意思決定を支援するタビナカ特化AIプラットフォームです。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
