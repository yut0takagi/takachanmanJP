import { useParams, Link } from 'react-router-dom'
import { projects } from '../data/projects'

export function ProjectDetailPage() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return (
      <div className="space-y-6 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          プロジェクトが見つかりません
        </h1>
        <Link to="/projects" className="text-sm text-muted-foreground hover:text-foreground">
          一覧に戻る
        </Link>
      </div>
    )
  }

  return (
    <article className="space-y-6">
      <div className="space-y-3">
        <Link to="/projects" className="text-sm text-muted-foreground hover:text-foreground">
          ← プロジェクト一覧へ
        </Link>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">{project.title}</h1>
        <p className="ui-lead">{project.description}</p>
      </div>

      {project.image && (
        <div className="overflow-hidden rounded-lg border border-border bg-card">
          <img src={project.image} alt={project.title} className="w-full object-cover" />
        </div>
      )}

      <div className="flex flex-wrap gap-2">
        {project.tags.map((t) => (
          <span key={t} className="ui-badge">
            {t}
          </span>
        ))}
      </div>

      {project.content && (
        <div className="space-y-4 text-sm leading-7 text-muted-foreground">
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
            className="ui-btn ui-btn-outline"
          >
            Website
          </a>
        )}
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ui-btn ui-btn-primary"
          >
            Repository
          </a>
        )}
      </div>
    </article>
  )
}
