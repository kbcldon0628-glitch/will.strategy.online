import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "特定商取引法に基づく表記 | 受験戦略予備校WILL",
  robots: "noindex, nofollow",
}

export default function LegalPage() {
  return (
    <main className="min-h-screen bg-background py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h1 className="text-xl sm:text-2xl font-bold text-foreground text-center mb-8">
          特定商取引法に基づく表記
        </h1>

        {/* 後日画像を載せる場合は public/images/ に配置して Image を追加 */}
        <div
          className="bg-card rounded-lg border border-border min-h-[480px]"
          data-nosnippet="true"
        />

        <p className="text-xs text-muted-foreground text-center mt-6">
          ※ 本表記の内容についてのお問い合わせは公式LINEよりお願いいたします。
        </p>

        <div className="mt-8 text-center">
          <Link
            href="/"
            className="text-sm text-primary hover:underline"
          >
            トップページに戻る
          </Link>
        </div>
      </div>
    </main>
  )
}
