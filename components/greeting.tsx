export function Greeting() {
  return (
    <section id="greeting" className="scroll-mt-20 py-20 sm:py-28 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-accent uppercase tracking-wider">Message</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mt-2">
            塾長あいさつ
          </h2>
        </div>

        <div className="space-y-4 text-foreground/80 leading-relaxed">
          <p>はじめまして。</p>
          <p>
            私は20年間、国公立大学を目指す浪人生を中心に、5,000人以上の受験生を指導してきました。その中で、一つの確信に至ったことがあります。
          </p>
          <p className="text-lg font-bold text-primary">
            「合格する浪人生は、授業を受ける時間より、自分で問題を解く時間の方が圧倒的に長い」
          </p>
          <p>
            多くの予備校は「授業を増やせば成績が上がる」と考えがちですが、本当に必要なのは「正しい方向での自習」です。
          </p>
          <p>
            しかし、全国の受験生を取り巻く環境には大きな格差があります。
            地方ではそもそも予備校の選択肢が少なかったり、片道1時間、往復で毎日1〜2時間もの貴重な時間を通学に奪われてしまったりするケースが少なくありません。また、経済的な負担から、十分な指導を諦めざるを得ないご家庭も目にしてきました。
          </p>
          <p>
            「どこに住んでいても、どんな状況からでも、質の高い受験指導を受けられる環境を作りたい」
            その想いから立ち上げたのが、このオンライン予備校です。
          </p>
          <p>
            当塾は実店舗の教室を持たないことで、家賃や光熱費などの固定費を徹底的に削減しています。その分を授業料に還元し、高品質な指導を無理のない価格で提供しています。
          </p>
          <p>
            当塾では、あなたの現在の学力と志望校を徹底分析し、合格までの最短ルートを一緒に設計します。そして、月3回のマンツーマン面談で進捗を確認し、常に最適な学習計画を更新し続けます。
          </p>
          <p>
            一人ひとりと徹底的に向き合い、質の高い指導を維持するため、当塾は完全定員制としております。毎年、共通テスト終了後から募集を開始し、定員に達し次第締め切ります。ご興味のある方は、お早めにご相談ください。
          </p>
          <p className="font-medium text-foreground">
            一年後、志望校の合格発表で笑顔になれるよう、全力でサポートします。あなたと一緒にスタートできる日を楽しみにしています。
          </p>
        </div>
      </div>
    </section>
  )
}
