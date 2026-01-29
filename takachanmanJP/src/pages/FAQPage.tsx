export function FAQPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-white">FAQ</h1>
      <div className="space-y-4 text-sm leading-7 text-zinc-300">
        <div>
          <p className="font-semibold text-white">Q. 依頼の進め方は？</p>
          <p className="text-zinc-400">A. 目的・要件のヒアリング後、見積り・提案書をご提示します。</p>
        </div>
        <div>
          <p className="font-semibold text-white">Q. 得意領域は？</p>
          <p className="text-zinc-400">A. React/TypeScript、Next.js、API 設計、パフォーマンス最適化などです。</p>
        </div>
      </div>
    </div>
  )
}

