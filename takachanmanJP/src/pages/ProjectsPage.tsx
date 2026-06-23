import { projects } from '../data/projects'
import { pyPackages } from '../data/packages'
import { ProjectCard } from '../components/ProjectCard'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export function ProjectsPage() {
  const headerAnim = useScrollAnimation()
  return (
    <div className="space-y-12">
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
