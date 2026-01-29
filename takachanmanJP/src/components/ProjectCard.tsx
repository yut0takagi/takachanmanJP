import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { Link } from 'react-router-dom'

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  image?: string
  link?: string
  to?: string
  delay?: string
}

export function ProjectCard({
  title,
  description,
  tags,
  image,
  link,
  to,
  delay = '',
}: ProjectCardProps) {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <div
      ref={ref}
      className={isVisible ? `animate-fade-in-up ${delay}` : 'opacity-0'}
    >
      {to ? (
        <Link
          to={to}
          className="group flex h-full flex-col rounded-lg border border-zinc-800 bg-zinc-900/50 p-6 transition-colors hover:border-zinc-700"
        >
          {image && (
            <div className="mb-4 aspect-video w-full overflow-hidden rounded-md bg-zinc-800">
              <img
                src={image}
                alt={title}
                className="h-full w-full object-cover"
              />
            </div>
          )}
          <h3 className="mb-2 line-clamp-2 text-lg font-semibold text-white">{title}</h3>
          <p className="mb-4 line-clamp-3 text-sm text-zinc-400">{description}</p>
          <div className="mt-auto">
            <div className="mb-3 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md bg-blue-500/10 px-2 py-1 text-xs font-medium text-blue-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Link>
      ) : (
        <div className="group flex h-full flex-col rounded-lg border border-zinc-800 bg-zinc-900/50 p-6 transition-colors hover:border-zinc-700">
          {image && (
            <div className="mb-4 aspect-video w-full overflow-hidden rounded-md bg-zinc-800">
              <img
                src={image}
                alt={title}
                className="h-full w-full object-cover"
              />
            </div>
          )}
          <h3 className="mb-2 line-clamp-2 text-lg font-semibold text-white">{title}</h3>
          <p className="mb-4 line-clamp-3 text-sm text-zinc-400">{description}</p>
          <div className="mt-auto">
            <div className="mb-3 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md bg-blue-500/10 px-2 py-1 text-xs font-medium text-blue-400"
                >
                  {tag}
                </span>
              ))}
            </div>
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-medium text-blue-400 transition-colors hover:text-blue-300"
              >
                View Project
                <svg
                  className="ml-1 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
