import { Link } from 'react-router-dom'
import { useMemo, useRef } from 'react'

export function NotFoundPage() {
  const imgRef = useRef<HTMLImageElement | null>(null)
  const picsumUrl = useMemo(() => {
    // Use Lorem Picsum random image with fixed size
    return `https://picsum.photos/1600/900`
  }, [])
  const base = import.meta.env.BASE_URL || '/'
  const handleImageError = () => {
    if (imgRef.current) {
      imgRef.current.src = `${base}404-placeholder.svg`
    }
  }

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center text-center">
      <div className="relative w-full max-w-5xl">
        <div className="relative mb-8 overflow-hidden rounded-xl border border-border">
          <img
            ref={imgRef}
            src={picsumUrl}
            alt="Random from Picsum"
            className="h-64 w-full object-cover opacity-60 grayscale md:h-80 lg:h-96"
            referrerPolicy="no-referrer"
            onError={handleImageError}
            loading="eager"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        </div>

        <div className="animate-fade-in-up">
          <span className="ui-eyebrow">Error 404</span>
          <h1 className="mb-4 mt-3 text-8xl font-extrabold tracking-tight text-muted-foreground/30 md:text-9xl">
            404
          </h1>
          <h2 className="mb-4 text-3xl font-bold text-foreground animate-fade-in-up animation-delay-200">
            Page Not Found
          </h2>
          <p className="mb-8 text-muted-foreground animate-fade-in-up animation-delay-400">
            お探しのページは見つかりませんでした。
            <br />
            URLが間違っているか、ページが移動した可能性があります。
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 animate-fade-in-up animation-delay-600">
            <Link to="/" className="ui-btn ui-btn-primary group">
              <svg
                className="h-4 w-4 transition-transform group-hover:-translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to Home
            </Link>
            <Link to="/about" className="ui-btn ui-btn-outline">
              About
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
