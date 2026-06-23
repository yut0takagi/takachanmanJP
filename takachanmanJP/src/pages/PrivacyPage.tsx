export function PrivacyPage() {
  return (
    <div className="space-y-10">
      <div>
        <p className="ui-eyebrow mb-3">Legal</p>
        <h1 className="mb-3 text-3xl font-bold tracking-tight text-foreground">プライバシーポリシー</h1>
        <p className="ui-lead max-w-2xl">
          当サイトは、ユーザーの個人情報を適切に取り扱い、プライバシーの保護に努めます。
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="ui-h2">取得する情報</h2>
        <p className="text-muted-foreground leading-relaxed">
          アクセス解析のためにクッキー等を使用する場合があります。
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="ui-h2">利用目的</h2>
        <p className="text-muted-foreground leading-relaxed">
          サイトの改善、問い合わせ対応のために利用します。
        </p>
      </section>
    </div>
  )
}
