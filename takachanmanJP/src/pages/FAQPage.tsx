const faqs: { q: string; a: string }[] = [
  {
    q: '依頼の進め方は？',
    a: '目的・要件のヒアリング後、見積り・提案書をご提示します。合意後に着手し、進捗は定期的に共有します。',
  },
  {
    q: '得意領域は？',
    a: 'React / TypeScript、Next.js、API 設計、パフォーマンス最適化などのフロントエンド・周辺領域です。',
  },
  {
    q: '使用している主な技術スタックは？',
    a: 'React・TypeScript・Tailwind CSS を中心に、状態管理・テスト・CI/CD を組み合わせて開発します。',
  },
  {
    q: '連絡方法は？',
    a: 'トップページのお問い合わせフォーム、または各 SNS（GitHub・X など）からご連絡ください。',
  },
  {
    q: '返信までの目安は？',
    a: '内容を確認のうえ、通常は数営業日以内にお返事します。お急ぎの場合はその旨をお伝えください。',
  },
  {
    q: 'このサイトについて',
    a: 'ポートフォリオ兼実験場として個人で制作・運用しています。デザインは shadcn/ui ベースのダークテーマです。',
  },
]

export function FAQPage() {
  return (
    <div className="space-y-6">
      <p className="ui-eyebrow">Support</p>
      <h1 className="text-3xl font-bold tracking-tight text-foreground">FAQ</h1>
      <p className="ui-lead max-w-2xl">
        よくあるご質問をまとめました。ここに無い内容はお問い合わせよりお気軽にご連絡ください。
      </p>

      <div className="space-y-3">
        {faqs.map((item) => (
          <div key={item.q} className="ui-card ui-card-hover">
            <p className="flex items-start gap-2 font-semibold text-foreground">
              <span className="prose-mono text-muted-foreground">Q.</span>
              {item.q}
            </p>
            <p className="mt-2 flex items-start gap-2 text-sm leading-7 text-muted-foreground">
              <span className="prose-mono text-foreground">A.</span>
              {item.a}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
