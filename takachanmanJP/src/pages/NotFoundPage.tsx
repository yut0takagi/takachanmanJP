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
        <div className="relative mb-8 overflow-hidden rounded-xl border border-zinc-800">
          <img
            ref={imgRef}
            src={picsumUrl}
            alt="Random from Picsum"
            className="h-64 w-full object-cover opacity-80 md:h-80 lg:h-96"
            referrerPolicy="no-referrer"
            onError={handleImageError}
            loading="eager"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-transparent to-transparent" />
        </div>
        <div className="absolute inset-0 -z-10 animate-float">
          <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl" />
        </div>

        <div className="animate-fade-in-up">
          <h1 className="mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-9xl font-bold text-transparent">
            404
          </h1>
          <h2 className="mb-4 text-3xl font-bold text-white animate-fade-in-up animation-delay-200">
            Page Not Found
          </h2>
          <p className="mb-8 text-zinc-400 animate-fade-in-up animation-delay-400">
            お探しのページは見つかりませんでした。
            <br />
            URLが間違っているか、ページが移動した可能性があります。
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-in-up animation-delay-600">
            <Link
              to="/"
              className="group flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 font-semibold text-white transition-all hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50"
            >
              <svg
                className="h-5 w-5 transition-transform group-hover:-translate-x-1"
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
            <Link
              to="/about"
              className="rounded-lg border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white backdrop-blur transition-all hover:scale-105 hover:bg-white/10"
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
