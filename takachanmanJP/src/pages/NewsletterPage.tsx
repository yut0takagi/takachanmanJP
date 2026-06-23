export function NewsletterPage() {
  return (
    <div className="space-y-6">
      <p className="ui-eyebrow">Stay in the loop</p>
      <h1 className="text-3xl font-bold tracking-tight text-foreground">ニュースレター</h1>
      <p className="ui-lead max-w-2xl">
        更新情報や記事のまとめを不定期で配信します。技術メモ・制作の裏側・新しいプロジェクトの告知などをお届けします。
      </p>

      <form className="ui-card max-w-md space-y-3">
        <label htmlFor="newsletter-email" className="block text-sm font-medium text-foreground">
          メールアドレス
        </label>
        <input
          id="newsletter-email"
          type="email"
          required
          placeholder="you@example.com"
          className="w-full rounded-md border border-border bg-card px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none"
        />
        <button type="submit" className="ui-btn ui-btn-primary w-full">
          購読する（デモ）
        </button>
        <p className="text-xs text-muted-foreground">デモのため送信は行いません。</p>
      </form>

      <div className="grid gap-3 sm:grid-cols-3">
        {[
          { title: '配信頻度', body: '不定期（月1〜2回程度を目安）' },
          { title: '内容', body: '技術記事・制作ログ・お知らせ' },
          { title: '解除', body: 'いつでもワンクリックで配信停止' },
        ].map((item) => (
          <div key={item.title} className="ui-card">
            <p className="ui-eyebrow">{item.title}</p>
            <p className="mt-2 text-sm leading-7 text-muted-foreground">{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
