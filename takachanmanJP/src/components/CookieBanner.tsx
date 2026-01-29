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
      <div className="rounded-lg border border-white/10 bg-zinc-900/90 p-4 text-sm text-zinc-300 backdrop-blur">
        <p className="mb-3">
          本サイトでは利便性向上と解析のために Cookie を使用します。詳細は Cookies ページをご覧ください。
        </p>
        <div className="flex items-center gap-3">
          <Link
            to="/cookies"
            className="rounded-md border border-white/10 px-3 py-1.5 text-white hover:bg-white/10"
          >
            詳細を見る
          </Link>
          <button
            className="rounded-md bg-blue-600 px-3 py-1.5 font-semibold text-white hover:bg-blue-700"
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

