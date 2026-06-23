import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { ProjectCard } from '../components/ProjectCard'
import { projects } from '../data/projects'
import { ArticleCard } from '../components/ArticleCard'
import { articles } from '../data/articles'
import { socialLinks } from '../data/siteLinks'
import { obsidianPlugins } from '../data/tooling'
import { pyPackages } from '../data/packages'

const skills = [
  'React',
  'TypeScript',
  'Next.js',
  'Node.js',
  'Python',
  'PostgreSQL',
  'BigQuery',
  'Docker',
  'AWS',
  'Claude Code',
]

const stats = [
  { num: `${projects.length + obsidianPlugins.length}+`, label: 'Projects' },
  { num: `${obsidianPlugins.length}`, label: 'Obsidian plugins' },
  { num: `${pyPackages.length}`, label: 'OSS packages' },
  { num: `${articles.length}+`, label: 'Articles' },
]

function SectionHead({
  eyebrow,
  title,
  lead,
  href,
  hrefLabel,
}: {
  eyebrow: string
  title: string
  lead?: string
  href?: string
  hrefLabel?: string
}) {
  return (
    <div className="mb-8 flex items-end justify-between gap-4">
      <div>
        <p className="ui-eyebrow mb-2">{eyebrow}</p>
        <h2 className="ui-h2">{title}</h2>
        {lead && <p className="ui-lead mt-2 max-w-2xl">{lead}</p>}
      </div>
      {href && (
        <Link
          to={href}
          className="ui-btn ui-btn-ghost ui-btn-sm hidden shrink-0 sm:inline-flex"
        >
          {hrefLabel} →
        </Link>
      )}
    </div>
  )
}

export function HomePage() {
  const heroAnimation = useScrollAnimation()
  const skillsAnimation = useScrollAnimation()
  const articlesAnimation = useScrollAnimation()
  const projectsAnimation = useScrollAnimation()
  const contactAnimation = useScrollAnimation()

  return (
    <div className="space-y-28">
      {/* Hero */}
      <section className="relative flex min-h-[78vh] flex-col justify-center">
        {/* subtle backdrop */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 -top-24 -z-10 h-[420px] opacity-60"
          style={{
            background:
              'radial-gradient(60% 60% at 50% 0%, hsl(var(--muted)/0.7) 0%, transparent 70%)',
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)',
            backgroundSize: '56px 56px',
            maskImage: 'radial-gradient(70% 55% at 50% 30%, black, transparent)',
          }}
        />

        <div
          ref={heroAnimation.ref}
          className={heroAnimation.isVisible ? 'animate-fade-in-up' : 'opacity-0'}
        >
          <span className="ui-badge mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Available for work
          </span>

          <h1 className="max-w-3xl text-5xl font-extrabold leading-[1.05] tracking-tight text-foreground md:text-7xl">
            髙木悠人
          </h1>
          <p className="prose-mono mt-4 text-sm text-muted-foreground md:text-base">
            Yuto Takagi · @takachanmanJP
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Creative Developer / AI Engineer。プロダクト開発から
            リテールメディアのデータ分析・AI 自動化まで、
            <span className="text-foreground">「作って動かす」</span>
            を一気通貫で。
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link to="/projects" className="ui-btn ui-btn-primary">
              Projects を見る →
            </Link>
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="ui-btn ui-btn-outline"
            >
              GitHub
            </a>
            <Link to="/about" className="ui-btn ui-btn-ghost">
              About
            </Link>
          </div>

          {/* stats */}
          <div className="mt-14 grid max-w-xl grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-card px-5 py-4">
                <div className="text-2xl font-bold tracking-tight text-foreground">{s.num}</div>
                <div className="mt-0.5 text-xs text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills">
        <div
          ref={skillsAnimation.ref}
          className={skillsAnimation.isVisible ? 'animate-fade-in-up' : 'opacity-0'}
        >
          <SectionHead eyebrow="Skills" title="主な使用技術" lead="日常的に使っている言語・基盤・ツール。" />
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span key={skill} className="ui-badge prose-mono text-[13px]">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Articles */}
      <section id="articles">
        <div
          ref={articlesAnimation.ref}
          className={articlesAnimation.isVisible ? 'animate-fade-in-up' : 'opacity-0'}
        >
          <SectionHead
            eyebrow="Writing"
            title="記事"
            lead="技術ブログの最新記事。"
          />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {articles.slice(0, 6).map((article) => (
              <ArticleCard key={article.url} {...article} />
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects">
        <div
          ref={projectsAnimation.ref}
          className={projectsAnimation.isVisible ? 'animate-fade-in-up' : 'opacity-0'}
        >
          <SectionHead
            eyebrow="Work"
            title="プロジェクト"
            lead="これまでに携わった主なプロジェクト。"
            href="/projects"
            hrefLabel="すべて見る"
          />
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 3).map((p) => (
              <ProjectCard
                key={p.slug}
                title={p.title}
                description={p.description}
                tags={p.tags}
                image={p.image}
                to={`/projects/${p.slug}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="pb-16">
        <div
          ref={contactAnimation.ref}
          className={`relative overflow-hidden rounded-xl border border-border bg-card p-8 md:p-12 ${
            contactAnimation.isVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-50"
            style={{
              background:
                'radial-gradient(50% 80% at 100% 0%, hsl(var(--muted)/0.8) 0%, transparent 60%)',
            }}
          />
          <div className="relative">
            <p className="ui-eyebrow mb-2">Contact</p>
            <h2 className="ui-h2">お問い合わせ</h2>
            <p className="ui-lead mt-2 max-w-xl">
              仕事のご依頼・ご相談はお気軽にどうぞ。
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={socialLinks.email} className="ui-btn ui-btn-primary">
                Email を送る
              </a>
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="ui-btn ui-btn-outline"
              >
                GitHub
              </a>
              <a
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="ui-btn ui-btn-outline"
              >
                X / Twitter
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
