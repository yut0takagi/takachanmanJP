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
        <h1 className="mb-3 text-3xl font-bold tracking-tight text-white md:text-4xl">
          プロジェクト一覧
        </h1>
        <p className="max-w-2xl text-zinc-400">これまでに携わった主なプロジェクト</p>
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
        <h2 className="text-2xl font-bold tracking-tight text-white">Python Packages</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {pyPackages.map((pkg) => (
            <a
              key={pkg.name}
              href={pkg.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-lg border border-zinc-800 bg-zinc-900/50 p-5 transition-colors hover:border-zinc-700"
            >
              <div className="mb-1 flex items-center justify-between">
                <h3 className="text-base font-semibold text-white group-hover:text-blue-400">
                  {pkg.name}
                </h3>
                <span className="text-xs text-zinc-500">PyPI</span>
              </div>
              <p className="text-sm text-zinc-400">{pkg.description}</p>
            </a>
          ))}
        </div>
      </section>
    </div>
  )
}
