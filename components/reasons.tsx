import { Card, CardContent } from "@/components/ui/card"

const reasons = [
  {
    number: "01",
    title: "徹底された「戦略的自習」",
    description:
      "ただ授業を受けるだけの受け身の学習は終わりです。20年の指導経験に基づき、あなたの現在の学力と志望校を徹底分析。合格までの「あなただけのロードマップ」を構築し、最も効率的な自習内容を設計します。",
  },
  {
    number: "02",
    title: "プロ講師による「徹底伴走」",
    description:
      "「計画して終わり」にはさせません。月3回のマンツーマン面談で進捗を細かく確認し、その都度、最適な学習計画に軌道修正。プロの視点で「今のあなたの自習の質」を常に高く維持し続け、独学特有の「空回り」を防ぎます。",
  },
  {
    number: "03",
    title: "場所を選ばない「オンライン指導」",
    description:
      "地方在住というハンデを、学習時間に変える。物理的な通学時間をゼロにし、その分をすべて学習に充ててください。全国どこにいても、合格に必要なプロの指導と戦略的サポートが受けられる、現代の理想的な受験環境を提供します。",
  },
]

export function Reasons() {
  return (
    <section id="reasons" className="py-20 sm:py-28 bg-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14 sm:mb-16">
          <span className="text-sm font-medium text-accent uppercase tracking-wider">
            Why WILL
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground mt-3 tracking-tight text-balance">
            WILLが選ばれる
            <span className="block sm:inline sm:ml-2 text-primary">「3つの理由」</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {reasons.map((reason) => (
            <Card
              key={reason.number}
              className="border-border bg-card flex flex-col h-full"
            >
              <CardContent className="p-6 sm:p-8 flex flex-col flex-1 h-full">
                <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-primary text-primary-foreground text-sm font-bold mb-5 shrink-0">
                  {reason.number}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-foreground leading-snug mb-4 min-h-[3.25rem] sm:min-h-[3.5rem]">
                  {reason.title}
                </h3>
                <p className="text-sm text-foreground/80 leading-relaxed mt-auto">
                  {reason.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
