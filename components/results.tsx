export function Results() {
  const nationalUniversities = [
    "東京大学",
    "大阪大学",
    "名古屋大学",
    "横浜国立大学",
    "神戸大学",
    "地方国公立大学",
  ]

  const privateUniversities = [
    "慶應義塾大学",
    "早稲田大学",
    "明治大学",
    "青山学院大学",
    "中央大学",
    "法政大学",
    "同志社大学",
    "立命館大学",
    "その他多数",
  ]

  return (
    <section id="results" className="py-16 sm:py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <span className="text-sm font-medium text-accent uppercase tracking-wider">Results</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mt-2">
            合格実績
          </h2>
        </div>

        <div className="bg-card rounded-lg border border-border p-6 sm:p-8">
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-3">国公立大学</h3>
              <p className="text-foreground leading-relaxed">
                {nationalUniversities.join(" / ")}
              </p>
            </div>
            <div className="border-t border-border pt-6">
              <h3 className="text-sm font-medium text-muted-foreground mb-3">私立大学</h3>
              <p className="text-foreground leading-relaxed">
                {privateUniversities.join(" / ")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
