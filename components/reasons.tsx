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
    <section id="reasons" className="scroll-mt-20 py-20 sm:py-28 bg-secondary">
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

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 md:[grid-auto-rows:1fr]">
          {reasons.map((reason) => (
            <Card
              key={reason.number}
              className="h-full border-border bg-card py-0 gap-0 shadow-sm"
            >
              <CardContent className="flex h-full flex-col p-7 sm:p-8">
                <div className="mb-6 flex min-h-[7.5rem] flex-col gap-4">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    {reason.number}
                  </span>
                  <h3 className="text-base font-bold leading-snug text-foreground sm:text-lg">
                    {reason.title}
                  </h3>
                </div>
                <p className="flex-1 text-sm leading-[1.85] text-foreground/80">
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
