import { useScrollAnimation } from '../hooks/useScrollAnimation'

export function AboutPage() {
  const headerAnimation = useScrollAnimation()
  const bioAnimation = useScrollAnimation()
  const experienceAnimation = useScrollAnimation()

  return (
    <div className="space-y-16">

      {/* Header */}
      <section>
        <div
          ref={headerAnimation.ref}
          className={headerAnimation.isVisible ? 'animate-fade-in-up' : 'opacity-0'}
        >
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
            About
          </h1>
          <p className="max-w-2xl text-lg text-zinc-400">
            経歴と制作実績について
          </p>
        </div>
      </section>

      {/* Bio Section */}
      <section
        ref={bioAnimation.ref}
        className={`max-w-3xl ${
          bioAnimation.isVisible ? 'animate-fade-in-up' : 'opacity-0'
        }`}
      >
        <div className="space-y-4 text-zinc-300">
          <p>
            2020年に中央大学附属高等学校に入学し、そのまま中央大学理工学部ビジネスデータサイエンス学科に入学しました。現在は、機械学習研究室に所属しています。
          </p>
          <p>
            ReactやNext.jsを使用したモダンなWebアプリケーション開発や、Pythonでの機械学習タスクを進めています。現在は広告分野でのAI活用、開発運用に興味があります。
          </p>
          <p>
            今後は、ビジネス職としての経験を積み、ビジネスと技術の両方の視点から、より良いサービスを提供するために尽力します。
          </p>
        </div>
      </section>

      {/* Experience Section */}
      <section
        ref={experienceAnimation.ref}
        className={`space-y-6 pb-20 ${
          experienceAnimation.isVisible ? 'animate-fade-in-up' : 'opacity-0'
        }`}
      >
        <h2 className="text-2xl font-bold text-white">
          経歴
        </h2>

        <div className="space-y-4">
          <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-6 transition-colors hover:border-zinc-700">
            <div className="mb-4 flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
              <div>
                <h3 className="text-lg font-semibold text-white">機械学習研究室 所属決定</h3>
                <p className="text-sm text-zinc-400">in 中央大学理工学部ビジネスデータサイエンス学科</p>
              </div>
              <span className="text-sm text-zinc-500">2025 - 現在</span>
            </div>
            <p className="text-sm text-zinc-400">
              研究内容は未定です。
            </p>
          </div>

          <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-6 transition-colors hover:border-zinc-700">
            <div className="mb-4 flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
              <div>
                <h3 className="text-lg font-semibold text-white">中央大学理工学部ビジネスデータサイエンス学科入学</h3>
                <p className="text-sm text-zinc-400">大学</p>
              </div>
              <span className="text-sm text-zinc-500">2023 - 現在</span>
            </div>
            <p className="text-sm text-zinc-400">
              データサイエンス、サプライチェーンを中心に理論とプログラミングの両輪で学習しています。
            </p>
          </div>

          <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-6 transition-colors hover:border-zinc-700">
            <div className="mb-4 flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
              <div>
                <h3 className="text-lg font-semibold text-white">中央大学附属高等学校入学</h3>
                <p className="text-sm text-zinc-400">高校</p>
              </div>
              <span className="text-sm text-zinc-500">2020 - 2023</span>
            </div>
            <p className="text-sm text-zinc-400">
              研究内容は、「摩擦力の待機時間依存性・接触面積依存性に関する検証と実験器具の開発」です。
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

