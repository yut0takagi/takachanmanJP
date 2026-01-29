export function AccessibilityPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-white">アクセシビリティ声明</h1>
      <p className="text-sm leading-7 text-zinc-300">
        本サイトは WCAG 2.1 AA 準拠を目標とし、キーボード操作対応、コントラスト比の確保、代替テキスト付与、見出し構造の最適化などに取り組んでいます。
      </p>
      <ul className="list-inside list-disc text-sm text-zinc-400">
        <li>キーボード操作で全機能にアクセス可能</li>
        <li>色だけに依存しない情報提供</li>
        <li>フォーカスインジケータの明確化</li>
      </ul>
      <p className="text-sm text-zinc-400">改善のご提案はお問い合わせよりご連絡ください。</p>
    </div>
  )
}

