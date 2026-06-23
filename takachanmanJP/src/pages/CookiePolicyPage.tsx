export function CookiePolicyPage() {
  return (
    <div className="space-y-10">
      <div>
        <p className="ui-eyebrow mb-3">Legal</p>
        <h1 className="mb-3 text-3xl font-bold tracking-tight text-foreground">クッキーポリシー</h1>
        <p className="ui-lead max-w-2xl">
          本サイトでは、利用状況の把握・利便性向上のために Cookie を使用する場合があります。Cookie はブラウザの設定で無効化できます。
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="ui-h2">主な利用目的</h2>
        <ul className="list-inside list-disc space-y-1 text-muted-foreground leading-relaxed">
          <li>アクセス解析（ページ閲覧状況の把握）</li>
          <li>表示や入力補助の利便性向上</li>
        </ul>
        <p className="text-muted-foreground leading-relaxed">
          詳細はお問い合わせください。Cookie の同意はいつでも撤回できます。
        </p>
      </section>
    </div>
  )
}
