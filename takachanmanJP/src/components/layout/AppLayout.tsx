import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { socialLinks } from '../../data/siteLinks'
import { CookieBanner } from '../CookieBanner'

/** docs(サイドバー)型で表示するルート。これ以外は通常のマーケ型 */
const DOCS_PREFIXES = [
  '/projects',
  '/roadmap',
  '/faq',
  '/sitemap',
  '/terms',
  '/privacy',
  '/accessibility',
  '/cookies',
  '/credits',
  '/newsletter',
  '/guestbook',
]

const docsNav = [
  {
    title: 'メイン',
    links: [
      { to: '/', label: 'Home', end: true },
      { to: '/about', label: 'About' },
      { to: '/projects', label: 'Projects' },
      { to: '/roadmap', label: 'Roadmap' },
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
      { to: '/terms', label: 'Terms' },
      { to: '/privacy', label: 'Privacy' },
      { to: '/cookies', label: 'Cookies' },
      { to: '/accessibility', label: 'Accessibility' },
      { to: '/credits', label: 'Credits' },
    ],
  },
]

const headerLinkBase =
  'rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-foreground'

function Brand() {
  return (
    <NavLink to="/" className="flex items-center gap-2.5">
      <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-sm font-extrabold text-primary-foreground">
        Y
      </span>
      <span className="flex flex-col leading-none">
        <span className="text-sm font-bold tracking-tight text-foreground">Yuto Takagi</span>
        <span className="prose-mono text-[11px] text-muted-foreground">@takachanmanJP</span>
      </span>
    </NavLink>
  )
}

function Header() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 h-14 transition-colors duration-200 ${
        scrolled
          ? 'border-b border-border bg-background/85 backdrop-blur'
          : 'border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center gap-4 px-4 md:px-8">
        <Brand />
        <div className="flex-1" />
        <nav className="flex items-center gap-1">
          {[
            { to: '/', label: 'Home', end: true },
            { to: '/projects', label: 'Projects' },
            { to: '/about', label: 'About' },
          ].map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className={({ isActive }) =>
                `${headerLinkBase} ${isActive ? 'text-foreground' : 'text-muted-foreground'}`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Link
            to={{ pathname: '/', hash: '#articles' }}
            className={`${headerLinkBase} text-muted-foreground`}
          >
            記事
          </Link>
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="ui-btn ui-btn-outline ui-btn-sm ml-2"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              />
            </svg>
            <span className="hidden sm:inline">GitHub</span>
          </a>
        </nav>
      </div>
    </header>
  )
}

function DocsSidebar() {
  return (
    <aside className="sticky top-14 hidden h-[calc(100dvh-3.5rem)] overflow-y-auto border-r border-border py-7 pr-3 lg:block">
      {docsNav.map((group) => (
        <div key={group.title} className="mb-6">
          <p className="docs-navtitle">{group.title}</p>
          {group.links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className={({ isActive }) =>
                `docs-link ${isActive ? 'docs-link-active' : ''}`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>
      ))}
    </aside>
  )
}

function Footer() {
  const social: { href: string; label: string }[] = [
    { href: socialLinks.github, label: 'GitHub' },
    { href: socialLinks.twitter, label: 'X' },
    { href: socialLinks.qiita, label: 'Qiita' },
    { href: socialLinks.zenn, label: 'Zenn' },
    { href: socialLinks.note, label: 'note' },
    { href: socialLinks.linkedin, label: 'LinkedIn' },
  ]
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 md:flex-row md:items-center md:justify-between md:px-8">
        <div>
          <p className="text-sm font-semibold text-foreground">Yuto Takagi</p>
          <p className="text-xs text-muted-foreground">© 2026 Yuto Takagi · Creative Developer</p>
        </div>
        <nav className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
          {social.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
            >
              {s.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}

export function AppLayout() {
  const location = useLocation()
  const isDocs = DOCS_PREFIXES.some(
    (p) => location.pathname === p || location.pathname.startsWith(p + '/'),
  )

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div className="min-h-dvh bg-background text-foreground">
      <Header />

      {isDocs ? (
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-0 px-4 pt-14 md:px-8 lg:grid-cols-[220px_minmax(0,1fr)]">
          <DocsSidebar />
          <main className="min-w-0 py-10 lg:pl-10">
            <Outlet />
          </main>
        </div>
      ) : (
        <main className="mx-auto max-w-6xl px-4 pb-24 pt-14 md:px-8">
          <Outlet />
        </main>
      )}

      <Footer />
      <CookieBanner />
    </div>
  )
}
