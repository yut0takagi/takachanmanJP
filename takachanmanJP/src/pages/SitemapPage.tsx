import { Link, type LinkProps } from 'react-router-dom'

type SiteLink = { to: LinkProps['to']; label: string }
type SiteGroup = { title: string; links: SiteLink[] }

const groups: SiteGroup[] = [
  {
    title: 'メイン',
    links: [
      { to: '/', label: 'Home' },
      { to: '/about', label: 'About' },
      { to: '/projects', label: 'Projects' },
      { to: '/roadmap', label: 'Roadmap' },
    ],
  },
  {
    title: 'ホーム内セクション',
    links: [
      { to: { pathname: '/', hash: '#articles' }, label: '記事' },
      { to: { pathname: '/', hash: '#contact' }, label: 'お問い合わせ' },
    ],
  },
  {
    title: '情報',
    links: [
      { to: '/faq', label: 'FAQ' },
      { to: '/newsletter', label: 'Newsletter' },
      { to: '/guestbook', label: 'Guestbook' },
      { to: '/sitemap', label: 'Sitemap' },
    ],
  },
  {
    title: 'ポリシー',
    links: [
      { to: '/terms', label: '利用規約 (Terms)' },
      { to: '/privacy', label: 'プライバシー (Privacy)' },
      { to: '/cookies', label: 'Cookies' },
      { to: '/accessibility', label: 'Accessibility' },
      { to: '/credits', label: 'Credits' },
    ],
  },
]

export function SitemapPage() {
  return (
    <div className="space-y-6">
      <p className="ui-eyebrow">Navigation</p>
      <h1 className="text-3xl font-bold tracking-tight text-foreground">サイトマップ</h1>
      <p className="ui-lead max-w-2xl">
        サイト内の全ページを一覧にまとめました。お探しのページへ各リンクから移動できます。
      </p>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {groups.map((group) => (
          <div key={group.title} className="ui-card">
            <p className="ui-eyebrow">{group.title}</p>
            <ul className="mt-3 space-y-1 text-sm">
              {group.links.map((l) => (
                <li key={l.label}>
                  <Link className="docs-link" to={l.to}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
