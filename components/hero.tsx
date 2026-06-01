import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-primary overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-background rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-background rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center py-32">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-primary-foreground leading-tight tracking-tight mb-8">
          <span className="block text-balance">授業を増やすな、</span>
          <span className="block text-balance">自習を極めろ。</span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-primary-foreground/85 leading-relaxed max-w-2xl mx-auto mb-12 text-pretty">
          国公立大学合格のためのアウトプット特化予備校。
          <br className="hidden sm:block" />
          20年の指導経験に基づいた、君だけの合格ロードマップを
          <br className="hidden sm:block" />
          マンツーマンで構築します。
        </p>

        <Button
          asChild
          size="lg"
          className="bg-background text-primary hover:bg-background/90 text-base sm:text-lg px-8 py-6 h-auto font-bold shadow-lg"
        >
          <a href="#contact">
            <MessageCircle className="mr-2 h-5 w-5" />
            公式LINEでお問い合わせ
          </a>
        </Button>

        <div className="mt-16 flex flex-wrap justify-center gap-8 text-primary-foreground/70 text-sm">
          <div className="flex flex-col items-center">
            <span className="text-3xl sm:text-4xl font-bold text-primary-foreground">20</span>
            <span>年の指導実績</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl sm:text-4xl font-bold text-primary-foreground">1:1</span>
            <span>マンツーマン指導</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl sm:text-3xl font-bold text-primary-foreground">定員制</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full mt-2" />
        </div>
      </div>
    </section>
  )
}
