export function GuestbookPage() {
  return (
    <div className="space-y-6">
      <p className="ui-eyebrow">Say hello</p>
      <h1 className="text-3xl font-bold tracking-tight text-foreground">ゲストブック</h1>
      <p className="ui-lead max-w-2xl">
        ひとことメッセージをどうぞ（デモ）。感想・ご要望・フィードバックなど、お気軽に残してください。
      </p>

      <form className="ui-card max-w-md space-y-3">
        <label htmlFor="guestbook-name" className="block text-sm font-medium text-foreground">
          お名前（任意）
        </label>
        <input
          id="guestbook-name"
          type="text"
          placeholder="お名前"
          className="w-full rounded-md border border-border bg-card px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none"
        />
        <label htmlFor="guestbook-message" className="block text-sm font-medium text-foreground">
          メッセージ
        </label>
        <textarea
          id="guestbook-message"
          placeholder="メッセージを入力…"
          className="h-28 w-full rounded-md border border-border bg-card px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none"
        />
        <button type="submit" className="ui-btn ui-btn-primary w-full">
          投稿
        </button>
        <p className="text-xs text-muted-foreground">デモのため送信は行いません。</p>
      </form>

      <div className="ui-card max-w-md">
        <p className="ui-eyebrow">最近のメッセージ</p>
        <ul className="mt-3 space-y-3 text-sm leading-7 text-muted-foreground">
          <li>
            <span className="font-semibold text-foreground">ゲスト</span> — シンプルで読みやすいデザインですね。
          </li>
          <li>
            <span className="font-semibold text-foreground">ゲスト</span> — 記事の更新を楽しみにしています。
          </li>
        </ul>
        <p className="mt-3 text-xs text-muted-foreground">※ 表示はデモ用のサンプルです。</p>
      </div>
    </div>
  )
}
