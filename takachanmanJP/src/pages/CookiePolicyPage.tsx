export function CookiePolicyPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-white">クッキーポリシー</h1>
      <p className="text-sm leading-7 text-zinc-300">
        本サイトでは、利用状況の把握・利便性向上のために Cookie を使用する場合があります。Cookie はブラウザの設定で無効化できます。
      </p>
      <h2 className="text-xl font-semibold text-white">主な利用目的</h2>
      <ul className="list-inside list-disc text-sm text-zinc-400">
        <li>アクセス解析（ページ閲覧状況の把握）</li>
        <li>表示や入力補助の利便性向上</li>
      </ul>
      <p className="text-sm text-zinc-400">詳細はお問い合わせください。Cookie の同意はいつでも撤回できます。</p>
    </div>
  )
}

