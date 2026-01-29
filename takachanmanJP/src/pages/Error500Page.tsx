export function Error500Page() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <h1 className="mb-2 text-6xl font-extrabold text-white">500</h1>
      <p className="mb-4 text-xl text-zinc-300">Internal Server Error</p>
      <p className="max-w-xl text-sm text-zinc-400">サーバーで問題が発生しました。時間を置いて再度アクセスしてください。</p>
    </div>
  )
}

