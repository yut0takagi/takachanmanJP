import { Link } from 'react-router-dom'

export function SitemapPage() {
  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: { pathname: '/', hash: '#articles' }, label: '記事' },
    { to: { pathname: '/', hash: '#contact' }, label: 'お問い合わせ' },
    { to: '/terms', label: '利用規約 (Terms)' },
    { to: '/privacy', label: 'プライバシー (Privacy)' },
  ]

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-white">サイトマップ</h1>
      <ul className="grid grid-cols-1 gap-2 text-sm text-zinc-300 md:grid-cols-2">
        {links.map((l) => (
          <li key={l.label}>
            <Link className="transition-colors hover:text-white" to={l.to}>
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

