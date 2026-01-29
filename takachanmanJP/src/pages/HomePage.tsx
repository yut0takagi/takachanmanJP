import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { ProjectCard } from '../components/ProjectCard'
import { projects } from '../data/projects'
import { ArticleCard } from '../components/ArticleCard'
import { articles } from '../data/articles'

export function HomePage() {
  const heroAnimation = useScrollAnimation()
  const skillsAnimation = useScrollAnimation()
  const articlesAnimation = useScrollAnimation()
  const projectsAnimation = useScrollAnimation()
  const contactAnimation = useScrollAnimation()

  return (
    <div className="relative space-y-32">

      {/* Hero Section */}
      <section className="relative flex min-h-[85vh] flex-col justify-center">
        <div
          ref={heroAnimation.ref}
          className={heroAnimation.isVisible ? 'animate-fade-in-up' : 'opacity-0'}
        >
          <h1 className="mb-6 text-5xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl">
            髙木悠人
          </h1>
          <p className="mb-4 text-xl text-zinc-400 md:text-2xl">
            YutoTAKAGI @takachanmanJP
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://github.com/yut0takagi"
              className="rounded-md bg-blue-600 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="space-y-8">
        <div
          ref={skillsAnimation.ref}
          className={skillsAnimation.isVisible ? 'animate-fade-in-up' : 'opacity-0'}
        >
          <h2 className="mb-3 text-3xl font-bold tracking-tight text-white md:text-4xl">
            スキル
          </h2>
          <p className="max-w-2xl text-zinc-400">
            主な使用技術
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {[
            'React',
            'TypeScript',
            'Next.js',
            'Node.js',
            'Python',
            'PostgreSQL',
            'Docker',
            'AWS',
          ].map((skill, index) => (
            <div
              key={skill}
              className={`rounded-lg border border-zinc-800 bg-zinc-900/50 p-4 transition-colors hover:border-zinc-700 ${
                skillsAnimation.isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <p className="text-sm font-medium text-zinc-300">{skill}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Articles Section */}
      <section id="articles" className="space-y-8">
        <div
          ref={articlesAnimation.ref}
          className={articlesAnimation.isVisible ? 'animate-fade-in-up' : 'opacity-0'}
        >
          <h2 className="mb-3 text-3xl font-bold tracking-tight text-white md:text-4xl">
            記事
          </h2>
          <p className="max-w-2xl text-zinc-400">
            技術ブログの最新記事
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {articles.slice(0, 6).map((article, index) => (
            <ArticleCard
              key={article.url}
              {...article}
              delay={index % 3 === 1 ? 'animation-delay-200' : index % 3 === 2 ? 'animation-delay-400' : ''}
            />
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="space-y-8">
        <div
          ref={projectsAnimation.ref}
          className={projectsAnimation.isVisible ? 'animate-fade-in-up' : 'opacity-0'}
        >
          <h2 className="mb-3 text-3xl font-bold tracking-tight text-white md:text-4xl">
            プロジェクト
          </h2>
          <p className="max-w-2xl text-zinc-400">
            これまでに携わった主なプロジェクト
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 3).map((p, idx) => (
            <ProjectCard
              key={p.slug}
              title={p.title}
              description={p.description}
              tags={p.tags}
              image={p.image}
              to={`/projects/${p.slug}`}
              delay={idx === 1 ? 'animation-delay-200' : idx === 2 ? 'animation-delay-400' : ''}
            />
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="pb-20">
        <div
          ref={contactAnimation.ref}
          className={`rounded-lg border border-zinc-800 bg-zinc-900/50 p-8 md:p-12 ${
            contactAnimation.isVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          <h2 className="mb-3 text-3xl font-bold tracking-tight text-white md:text-4xl">
            お問い合わせ
          </h2>
          <p className="mb-8 text-zinc-400">
            仕事のご依頼やご相談はこちらからお気軽にどうぞ
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:yutotakagi.for.business@gmail.com"
              className="inline-flex items-center gap-2 rounded-md border border-zinc-700 px-4 py-2 text-sm font-medium text-zinc-300 transition-colors hover:border-zinc-600 hover:bg-zinc-800"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Email
            </a>
            <a
              href="https://github.com/yut0takagi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-zinc-700 px-4 py-2 text-sm font-medium text-zinc-300 transition-colors hover:border-zinc-600 hover:bg-zinc-800"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
              GitHub
            </a>
            <a
              href="https://x.com/0yasumi_m0de"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-zinc-700 px-4 py-2 text-sm font-medium text-zinc-300 transition-colors hover:border-zinc-600 hover:bg-zinc-800"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
              Twitter
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
