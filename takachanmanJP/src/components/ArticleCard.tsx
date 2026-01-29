import { useScrollAnimation } from '../hooks/useScrollAnimation'
import type { Article } from '../types/article'

interface ArticleCardProps extends Article {
  delay?: string
}

const platformColors = {
  Zenn: 'text-blue-400 border-blue-400/20 bg-blue-400/5',
  Qiita: 'text-green-400 border-green-400/20 bg-green-400/5',
  Note: 'text-emerald-400 border-emerald-400/20 bg-emerald-400/5',
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
    <div
      ref={ref}
      className={isVisible ? `animate-fade-in-up ${delay}` : 'opacity-0'}
    >
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex h-full flex-col rounded-lg border border-zinc-800 bg-zinc-900/50 p-5 transition-all hover:border-zinc-700 hover:bg-zinc-900"
      >
        <div className="mb-3 flex items-center justify-between">
          <span
            className={`rounded-md border px-2 py-0.5 text-xs font-medium ${platformColors[platform]}`}
          >
            {platform}
          </span>
          <time className="text-xs text-zinc-500">{formatDate(publishedAt)}</time>
        </div>

        <h3 className="mb-2 line-clamp-2 text-base font-semibold text-white transition-colors group-hover:text-blue-400">
          {title}
        </h3>

        {excerpt && (
          <p className="mb-3 line-clamp-2 text-sm text-zinc-400">{excerpt}</p>
        )}

        <div className="mt-auto" />
      </a>
    </div>
  )
}
