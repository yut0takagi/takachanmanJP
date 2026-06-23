export function CreditsPage() {
  return (
    <div className="space-y-10">
      <div>
        <p className="ui-eyebrow mb-3">Credits</p>
        <h1 className="mb-3 text-3xl font-bold tracking-tight text-foreground">クレジット / ライセンス</h1>
        <p className="ui-lead max-w-2xl">
          本サイトで使用している素材やライブラリの出典です。
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="ui-h2">出典一覧</h2>
        <ul className="list-inside list-disc space-y-1 text-muted-foreground leading-relaxed">
          <li>アイコン: Heroicons / MIT</li>
          <li>UI: Tailwind CSS / MIT</li>
          <li>画像: Lorem Picsum（デモ用途）</li>
        </ul>
        <p className="text-muted-foreground leading-relaxed">
          各ライセンスはそれぞれの公式リポジトリをご確認ください。
        </p>
      </section>
    </div>
  )
}
