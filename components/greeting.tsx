export function Greeting() {
  return (
    <section id="greeting" className="py-20 sm:py-28 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-accent uppercase tracking-wider">Message</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mt-2">
            塾長あいさつ
          </h2>
        </div>

        <div className="space-y-6">
            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p>
                はじめまして。
              </p>
              <p>
                私は20年間、国公立大学を目指す浪人生を専門に指導してきました。
                その中で確信したことがあります。
              </p>
              <p className="text-lg font-bold text-primary">
                「合格する浪人生は、授業を受ける時間より、自分で問題を解く時間の方が圧倒的に長い」
              </p>
              <p>
                多くの予備校は「授業を増やせば成績が上がる」と考えています。
                しかし、本当に必要なのは「正しい方向での自習」です。
              </p>
              <p>
                当塾では、あなたの現在の学力と志望校を徹底分析し、
                合格までの最短ルートを一緒に設計します。
                そして、月3回のマンツーマン面談で進捗を確認し、
                常に最適な学習計画を更新し続けます。
              </p>
              <p className="font-medium text-foreground">
                一年後、志望校の合格発表で笑顔になれるよう、
                全力でサポートします。
              </p>
            </div>
          </div>
        </div>
      </section>
  )
}
