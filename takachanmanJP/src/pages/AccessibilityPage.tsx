export function AccessibilityPage() {
  return (
    <div className="space-y-10">
      <div>
        <p className="ui-eyebrow mb-3">Statement</p>
        <h1 className="mb-3 text-3xl font-bold tracking-tight text-foreground">アクセシビリティ声明</h1>
        <p className="ui-lead max-w-2xl">
          本サイトは WCAG 2.1 AA 準拠を目標とし、キーボード操作対応、コントラスト比の確保、代替テキスト付与、見出し構造の最適化などに取り組んでいます。
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="ui-h2">取り組み</h2>
        <ul className="list-inside list-disc space-y-1 text-muted-foreground leading-relaxed">
          <li>キーボード操作で全機能にアクセス可能</li>
          <li>色だけに依存しない情報提供</li>
          <li>フォーカスインジケータの明確化</li>
        </ul>
        <p className="text-muted-foreground leading-relaxed">
          改善のご提案はお問い合わせよりご連絡ください。
        </p>
      </section>
    </div>
  )
}
