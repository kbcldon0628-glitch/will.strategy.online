import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, MessageCircle } from "lucide-react"

const courses = [
  {
    name: "ベーシックコース",
    yearlyPrice: "220,000",
    monthlyPrice: "55,000",
    features: [
      "月3回の学習計画の作成",
    ],
    recommended: false,
  },
  {
    name: "スタンダードコース",
    yearlyPrice: "275,000",
    monthlyPrice: "66,000",
    features: [
      "月3回の学習計画の作成",
      "質問対応（24時間）",
    ],
    recommended: true,
  },
  {
    name: "プレミアムコース",
    yearlyPrice: "385,000",
    monthlyPrice: "99,000",
    features: [
      "月3回の学習計画の作成",
      "質問対応（24時間）",
      "総合型選抜・推薦入試対応",
      "志望理由書・小論文の添削",
      "面接サポート",
    ],
    recommended: false,
  },
]

export function Courses() {
  return (
    <section id="courses" className="py-20 sm:py-28 bg-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-accent uppercase tracking-wider">Courses</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mt-2">
            コース・料金
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {courses.map((course) => (
            <Card
              key={course.name}
              className={`relative flex flex-col ${
                course.recommended
                  ? "border-primary border-2 shadow-lg"
                  : "border-border"
              }`}
            >
              {course.recommended && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full">
                    おすすめ
                  </span>
                </div>
              )}

              <CardHeader className="text-center pb-2">
                <CardTitle className="text-xl font-bold text-foreground">
                  {course.name}
                </CardTitle>
              </CardHeader>

              <CardContent className="flex-1 flex flex-col">
                <div className="text-center py-6 border-b border-border">
                  <div className="mb-4">
                    <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">年間一括コース</span>
                    <div className="flex items-baseline justify-center gap-1 mt-2">
                      <span className="text-3xl font-bold text-foreground">
                        ¥{course.yearlyPrice}
                      </span>
                      <span className="text-muted-foreground text-sm">（税込）</span>
                    </div>
                  </div>
                  <div className="pt-3 border-t border-dashed border-border">
                    <span className="text-xs text-muted-foreground">月額コース</span>
                    <div className="flex items-baseline justify-center gap-1 mt-1">
                      <span className="text-lg font-medium text-foreground/70">
                        ¥{course.monthlyPrice}
                      </span>
                      <span className="text-muted-foreground text-xs">（税込）/月</span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-3 py-6 flex-1">
                  {course.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  className={`w-full ${
                    course.recommended
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "bg-secondary-foreground text-secondary hover:bg-secondary-foreground/90"
                  }`}
                >
                  <a href="#contact">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    詳しく相談する
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 bg-card rounded-lg border border-border p-6">
          <h3 className="font-bold text-foreground mb-4 text-center">料金に関する注意事項</h3>
          <ul className="space-y-2 text-sm text-muted-foreground max-w-2xl mx-auto">
            <li>※ 月額コースをご希望の場合、別途入会金・登録料・年間戦略費がかかります。</li>
            <li>※ 教材は各自でご用意いただきます。</li>
            <li>※ 志望校に合わせて、模試の受験をお願いする場合がございます。</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
