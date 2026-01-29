export function CreditsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-white">クレジット / ライセンス</h1>
      <div className="space-y-4 text-sm leading-7 text-zinc-300">
        <p>本サイトで使用している素材やライブラリの出典です。</p>
        <ul className="list-inside list-disc text-zinc-400">
          <li>アイコン: Heroicons / MIT</li>
          <li>UI: Tailwind CSS / MIT</li>
          <li>画像: Lorem Picsum（デモ用途）</li>
        </ul>
        <p className="text-zinc-400">各ライセンスはそれぞれの公式リポジトリをご確認ください。</p>
      </div>
    </div>
  )
}

