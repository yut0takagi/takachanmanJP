export function Error500Page() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <span className="ui-eyebrow">Error 500</span>
      <h1 className="mb-2 mt-3 text-7xl font-extrabold tracking-tight text-muted-foreground/30 md:text-8xl">500</h1>
      <p className="mb-4 text-xl font-semibold text-foreground">Internal Server Error</p>
      <p className="max-w-xl text-sm text-muted-foreground">サーバーで問題が発生しました。時間を置いて再度アクセスしてください。</p>
    </div>
  )
}

