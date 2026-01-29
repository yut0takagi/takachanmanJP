import { Link } from 'react-router-dom'

export function ContactThanksPage() {
  return (
    <div className="space-y-6 text-center">
      <h1 className="text-3xl font-bold text-white">送信ありがとうございました</h1>
      <p className="text-sm leading-7 text-zinc-300">
        お問い合わせを受け付けました。内容を確認のうえ、折り返しご連絡いたします。
      </p>
      <div className="flex items-center justify-center gap-3">
        <Link to="/" className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">
          トップへ戻る
        </Link>
        <Link to="/about" className="rounded-md border border-white/20 px-4 py-2 text-sm font-semibold text-white/90 hover:bg-white/10">
          About を見る
        </Link>
      </div>
    </div>
  )
}

