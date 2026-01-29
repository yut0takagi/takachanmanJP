import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { quickLinks, socialLinks } from '../../data/siteLinks'
import { CookieBanner } from '../CookieBanner'

const linkBase =
  'relative rounded-md px-3 py-2 text-sm font-medium transition-all duration-300 hover:text-white'
const linkActive = 'text-white after:absolute after:bottom-1 after:left-1/2 after:h-0.5 after:w-4 after:-translate-x-1/2 after:bg-gradient-to-r after:from-blue-500 after:to-purple-500'
const linkInactive = 'text-white/70'

export function AppLayout() {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div className="min-h-dvh bg-zinc-950 text-zinc-50">
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'border-b border-white/10 bg-zinc-950/95 backdrop-blur-md shadow-lg shadow-black/50'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-8">
          <NavLink
            to="/"
            className="text-base font-semibold text-white transition-colors hover:text-zinc-300"
          >
            Yuto Takagi
          </NavLink>
          <nav className="flex items-center gap-2">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                [linkBase, isActive ? linkActive : linkInactive].join(' ')
              }
            >
              Home
            </NavLink>
            <a
              href="/#articles"
              className={`${linkBase} ${linkInactive}`}
            >
              記事
            </a>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                [linkBase, isActive ? linkActive : linkInactive].join(' ')
              }
            >
              About
            </NavLink>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 pb-24 pt-20 md:px-8">
        <Outlet />
      </main>

      <footer className="border-t border-white/10 bg-zinc-950/50 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 py-8 md:px-8">
          <div className="mb-6 grid gap-8 md:grid-cols-3">
            <div className="space-y-3">
              <p className="text-base font-semibold text-white">Yuto Takagi</p>
              <p className="text-sm text-zinc-400">Creative Developer</p>
              <p className="text-xs text-zinc-500">© 2026 Yuto Takagi. All rights reserved.</p>
            </div>
            <div>
              <h3 className="mb-3 text-sm font-semibold text-zinc-300">Quick Links</h3>
              <nav className="grid grid-cols-2 gap-2 text-sm text-zinc-400">
                {quickLinks.map((l) => (
                  <a key={l.label} href={l.href} className="transition-colors hover:text-white">
                    {l.label}
                  </a>
                ))}
              </nav>
            </div>
            <div>
              <h3 className="mb-3 text-sm font-semibold text-zinc-300">Social</h3>
              <div className="flex flex-wrap items-center gap-4 text-zinc-400">
                <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white" aria-label="GitHub" title="GitHub">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white" aria-label="Twitter" title="Twitter/X">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 0 006.29 1.84" />
                  </svg>
                </a>
                <a href={socialLinks.qiita} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white" aria-label="Qiita" title="Qiita">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M3 3h18v18H3z" opacity=".1"/>
                    <path d="M12 4a8 8 0 100 16 8 8 0 000-16Zm-1 5h2v6h-2V9Zm0-3h2v2h-2V6Z"/>
                  </svg>
                </a>
                <a href={socialLinks.zenn} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white" aria-label="Zenn" title="Zenn">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M3 5h18v4H3zM3 11h12v4H3zM3 17h18v2H3z"/>
                  </svg>
                </a>
                <a href={socialLinks.note} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white" aria-label="Note" title="Note">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M5 4h10l4 4v12H5z" opacity=".2"/>
                    <path d="M5 2a2 2 0 00-2 2v16a2 2 0 002 2h14V8l-6-6H5zm7 1.5L18.5 10H12V3.5z"/>
                  </svg>
                </a>
                <a href={socialLinks.email} className="transition-colors hover:text-white" aria-label="Email" title="Email">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
                <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white" aria-label="LinkedIn" title="LinkedIn">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7 0h3.8v2.2h.1c.5-1 1.8-2.2 3.7-2.2 4 0 4.7 2.6 4.7 6V24h-4v-7.1c0-1.7 0-3.9-2.4-3.9s-2.8 1.9-2.8 3.8V24h-4V8z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <CookieBanner />
    </div>
  )
}
