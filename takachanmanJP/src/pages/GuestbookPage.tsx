export function GuestbookPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-white">ゲストブック</h1>
      <p className="text-sm leading-7 text-zinc-300">ひとことメッセージをどうぞ（デモ）。</p>
      <form className="space-y-3 max-w-md">
        <input
          type="text"
          placeholder="お名前（任意）"
          className="w-full rounded-md border border-white/10 bg-zinc-900/50 px-3 py-2 text-sm text-white placeholder-zinc-500 focus:border-blue-500 focus:outline-none"
        />
        <textarea
          placeholder="メッセージ"
          className="h-28 w-full rounded-md border border-white/10 bg-zinc-900/50 px-3 py-2 text-sm text-white placeholder-zinc-500 focus:border-blue-500 focus:outline-none"
        />
        <button type="submit" className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">
          投稿
        </button>
        <p className="text-xs text-zinc-500">デモのため送信は行いません。</p>
      </form>
    </div>
  )
}

