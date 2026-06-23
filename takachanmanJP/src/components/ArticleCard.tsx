import { useScrollAnimation } from '../hooks/useScrollAnimation'
import type { Article } from '../types/article'

interface ArticleCardProps extends Article {
  delay?: string
}

export function ArticleCard({
  title,
  url,
  publishedAt,
  platform,
  excerpt,
  delay = '',
}: ArticleCardProps) {
  const { ref, isVisible } = useScrollAnimation()

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat('ja-JP', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    }).format(date)
  }

  return (
    <div ref={ref} className={isVisible ? `animate-fade-in-up ${delay}` : 'opacity-0'}>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex h-full flex-col ui-card ui-card-hover"
      >
        <div className="mb-3 flex items-center justify-between">
          <span className="ui-badge prose-mono text-[11px]">{platform}</span>
          <time className="prose-mono text-xs text-muted-foreground">{formatDate(publishedAt)}</time>
        </div>

        <h3 className="mb-2 line-clamp-2 text-base font-semibold text-foreground transition-colors group-hover:text-muted-foreground">
          {title}
        </h3>

        {excerpt && <p className="line-clamp-2 text-sm text-muted-foreground">{excerpt}</p>}

        <div className="mt-auto" />
      </a>
    </div>
  )
}
