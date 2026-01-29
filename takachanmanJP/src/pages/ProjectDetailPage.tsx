import { useParams, Link } from 'react-router-dom'
import { projects } from '../data/projects'

export function ProjectDetailPage() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return (
      <div className="space-y-6 text-center">
        <h1 className="text-3xl font-bold text-white">プロジェクトが見つかりません</h1>
        <Link to="/projects" className="text-blue-400 hover:text-blue-300">
          一覧に戻る
        </Link>
      </div>
    )
  }

  return (
    <article className="space-y-6">
      <div className="space-y-3">
        <Link to="/projects" className="text-sm text-zinc-400 hover:text-zinc-200">← プロジェクト一覧へ</Link>
        <h1 className="text-3xl font-bold text-white">{project.title}</h1>
        <p className="text-zinc-300">{project.description}</p>
      </div>

      {project.image && (
        <div className="overflow-hidden rounded-lg border border-white/10">
          <img src={project.image} alt={project.title} className="w-full object-cover" />
        </div>
      )}

      <div className="flex flex-wrap gap-2">
        {project.tags.map((t) => (
          <span key={t} className="rounded-md bg-blue-500/10 px-2 py-1 text-xs font-medium text-blue-400">
            {t}
          </span>
        ))}
      </div>

      {project.content && (
        <div className="space-y-4 text-sm leading-7 text-zinc-300">
          {project.content.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>
      )}

      <div className="flex flex-wrap gap-3 pt-2">
        {project.websiteUrl && (
          <a
            href={project.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-white/10 px-4 py-2 text-sm text-white hover:bg-white/10"
          >
            Website
          </a>
        )}
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
          >
            Repository
          </a>
        )}
      </div>
    </article>
  )
}

