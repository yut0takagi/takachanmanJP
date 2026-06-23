import { Link } from 'react-router-dom'

export function ContactThanksPage() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center space-y-6 text-center">
      <span className="ui-eyebrow">Thank you</span>
      <h1 className="text-3xl font-bold tracking-tight text-foreground">送信ありがとうございました</h1>
      <p className="max-w-xl text-sm leading-7 text-muted-foreground">
        お問い合わせを受け付けました。内容を確認のうえ、折り返しご連絡いたします。
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Link to="/" className="ui-btn ui-btn-primary">
          トップへ戻る
        </Link>
        <Link to="/about" className="ui-btn ui-btn-outline">
          About を見る
        </Link>
      </div>
    </div>
  )
}

