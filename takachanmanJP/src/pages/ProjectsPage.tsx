import { projects } from '../data/projects'
import { pyPackages } from '../data/packages'
import { obsidianPlugins, tools, type Tool } from '../data/tooling'
import { ProjectCard } from '../components/ProjectCard'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { socialLinks } from '../data/siteLinks'

function ToolCard({ t }: { t: Tool }) {
  const Wrapper = t.url ? 'a' : 'div'
  const wrapperProps = t.url
    ? { href: t.url, target: '_blank', rel: 'noopener noreferrer' }
    : {}
  return (
    <Wrapper {...wrapperProps} className="ui-card ui-card-hover block">
      <div className="mb-2 flex items-start justify-between gap-2">
        <h3 className="prose-mono text-sm font-semibold text-foreground">{t.name}</h3>
      </div>
      <p className="mb-3 text-sm leading-relaxed text-muted-foreground">{t.description}</p>
      {t.features && t.features.length > 0 && (
        <ul className="mb-3 space-y-1">
          {t.features.slice(0, 3).map((f) => (
            <li key={f} className="flex gap-2 text-[13px] text-muted-foreground">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-muted-foreground/60" />
              <span>{f}</span>
            </li>
          ))}
        </ul>
      )}
      <div className="flex flex-wrap gap-1.5">
        {t.tags.map((tag) => (
          <span key={tag} className="ui-badge prose-mono text-[10px]">
            {tag}
          </span>
        ))}
      </div>
    </Wrapper>
  )
}

export function ProjectsPage() {
  const headerAnim = useScrollAnimation()
  return (
    <div className="space-y-14">
      <div
        ref={headerAnim.ref}
        className={headerAnim.isVisible ? 'animate-fade-in-up' : 'opacity-0'}
      >
        <p className="ui-eyebrow mb-3">Projects</p>
        <h1 className="mb-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          プロジェクト一覧
        </h1>
        <p className="ui-lead max-w-2xl">これまでに携わった主なプロジェクト</p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <ProjectCard
            key={p.slug}
            title={p.title}
            description={p.description}
            tags={p.tags}
            image={p.image}
            to={`/projects/${p.slug}`}
            delay={i % 3 === 1 ? 'animation-delay-200' : i % 3 === 2 ? 'animation-delay-400' : ''}
          />
        ))}
      </div>

      <section className="space-y-5">
        <div className="flex items-end justify-between gap-4">
          <div className="space-y-1">
            <p className="ui-eyebrow">Obsidian</p>
            <h2 className="ui-h2">Obsidian Plugins</h2>
            <p className="ui-lead">ナレッジ管理を強化する自作プラグイン。</p>
          </div>
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="ui-btn ui-btn-ghost ui-btn-sm hidden shrink-0 sm:inline-flex"
          >
            GitHub →
          </a>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {obsidianPlugins.map((t) => (
            <ToolCard key={t.slug} t={t} />
          ))}
        </div>
      </section>

      <section className="space-y-5">
        <div className="space-y-1">
          <p className="ui-eyebrow">Tools / OSS</p>
          <h2 className="ui-h2">開発ツール</h2>
          <p className="ui-lead">開発・自動化のための自作 CLI / ライブラリ。</p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {tools.map((t) => (
            <ToolCard key={t.slug} t={t} />
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <div className="space-y-1">
          <p className="ui-eyebrow">PyPI</p>
          <h2 className="ui-h2">Python Packages</h2>
          <p className="ui-lead">公開している Python パッケージ。クリックで PyPI のページに移動します。</p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {pyPackages.map((pkg) => (
            <a
              key={pkg.name}
              href={pkg.url}
              target="_blank"
              rel="noopener noreferrer"
              className="ui-card ui-card-hover group block"
            >
              <div className="mb-1 flex items-center justify-between">
                <h3 className="prose-mono text-base font-semibold text-foreground">
                  {pkg.name}
                </h3>
                <span className="ui-badge">PyPI</span>
              </div>
              <p className="text-sm text-muted-foreground">{pkg.description}</p>
            </a>
          ))}
        </div>
      </section>
    </div>
  )
}
