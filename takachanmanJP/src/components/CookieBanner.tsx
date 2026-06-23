import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const v = localStorage.getItem('cookieConsent')
    setVisible(v !== 'accepted')
  }, [])

  if (!visible) return null

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 mx-auto max-w-6xl px-4 pb-4">
      <div className="rounded-lg border border-border bg-card p-4 text-sm text-muted-foreground">
        <p className="mb-3">
          本サイトでは利便性向上と解析のために Cookie を使用します。詳細は Cookies ページをご覧ください。
        </p>
        <div className="flex items-center gap-3">
          <Link to="/cookies" className="ui-btn ui-btn-outline ui-btn-sm">
            詳細を見る
          </Link>
          <button
            className="ui-btn ui-btn-primary ui-btn-sm"
            onClick={() => {
              localStorage.setItem('cookieConsent', 'accepted')
              setVisible(false)
            }}
          >
            同意する
          </button>
        </div>
      </div>
    </div>
  )
}

