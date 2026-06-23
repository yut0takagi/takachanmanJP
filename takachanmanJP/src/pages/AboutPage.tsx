import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { pyPackages } from '../data/packages'
import { socialLinks } from '../data/siteLinks'
import meImg from '../assets/me.jpg'

const facts = [
  { label: 'Base', value: '神奈川県 川崎市' },
  { label: 'Focus', value: 'AI × Data × Biz' },
  { label: 'Coding', value: '10年+（中学〜）' },
  { label: 'Education', value: '中央大学 BDS 4年' },
]

const skillGroups: { title: string; items: string[] }[] = [
  { title: 'Frontend', items: ['React', 'TypeScript', 'Next.js', 'Vite', 'Tailwind CSS'] },
  { title: 'Backend', items: ['Node.js', 'Python', 'Flask', 'REST API'] },
  { title: 'Data / ML', items: ['Python', 'scikit-learn', 'XGBoost', 'Pandas', 'BigQuery', 'SQL'] },
  { title: 'AI / LLM', items: ['Claude Code', 'LLM / RAG', 'Agents', 'Whisper', 'Prompt設計'] },
  { title: 'Infra', items: ['AWS', 'GCP', 'Docker', 'Terraform', 'GitHub Actions'] },
  { title: 'Tooling', items: ['Git', 'Obsidian', 'Markwhen', 'Figma'] },
]

const timeline: { period: string; title: string; place: string; body: string }[] = [
  {
    period: '2025 – 現在',
    title: 'AI Engineer / Data（内定者）',
    place: 'サイバーエージェント',
    body: '広告・リテールメディア領域で、データ分析と AI 自動化の内製ツール開発に従事。Claude Code・BigQuery・GCP を用いて分析〜資料生成〜運用のワークフローを自動化。',
  },
  {
    period: '2025 – 現在',
    title: '機械学習研究室（統計系）',
    place: '中央大学 理工学部',
    body: 'ID-POS データを用いた顧客生涯価値（LTV）予測をテーマに、統計・機械学習の両面から研究。',
  },
  {
    period: '2023 – 現在',
    title: 'ビジネスデータサイエンス学科',
    place: '中央大学 理工学部',
    body: 'データサイエンスとサプライチェーンを軸に、理論とプログラミングの両輪で学習。',
  },
  {
    period: '2020 – 2023',
    title: '中央大学附属高等学校',
    place: '高校',
    body: '「摩擦力の待機時間依存性・接触面積依存性の検証と実験器具の開発」を研究。',
  },
]

export function AboutPage() {
  const headerAnimation = useScrollAnimation()
  const bioAnimation = useScrollAnimation()
  const skillsAnimation = useScrollAnimation()
  const experienceAnimation = useScrollAnimation()
  const ossAnimation = useScrollAnimation()

  return (
    <div className="space-y-20">
      {/* Header */}
      <section
        ref={headerAnimation.ref}
        className={headerAnimation.isVisible ? 'animate-fade-in-up' : 'opacity-0'}
      >
        <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center">
          <img
            src={meImg}
            alt="髙木悠人 / Yuto Takagi"
            className="h-24 w-24 shrink-0 rounded-2xl border border-border object-cover sm:h-28 sm:w-28"
          />
          <div>
            <p className="ui-eyebrow mb-2">About</p>
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
              髙木悠人 / Yuto Takagi
            </h1>
            <p className="prose-mono mt-3 text-sm text-muted-foreground">
              Creative Developer · AI Engineer · @takachanmanJP
            </p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-4">
          {facts.map((f) => (
            <div key={f.label} className="bg-card px-5 py-4">
              <div className="ui-eyebrow">{f.label}</div>
              <div className="mt-1 text-sm font-semibold text-foreground">{f.value}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Bio */}
      <section
        ref={bioAnimation.ref}
        className={`max-w-3xl ${bioAnimation.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
      >
        <h2 className="ui-h2 mb-4">Bio</h2>
        <div className="space-y-4 leading-relaxed text-muted-foreground">
          <p>
            中学からプログラミングを始め、約 10 年。
            現在は中央大学 理工学部 ビジネスデータサイエンス学科の 4 年生として、
            機械学習研究室（統計系）に所属しています。
          </p>
          <p>
            React / Next.js を用いたモダンな Web アプリ開発と、Python での機械学習・データ分析を軸に、
            最近は<span className="text-foreground">「分析 → 自動化 → プロダクト」</span>を
            Claude Code などの AI エージェントで一気通貫にすることに注力しています。
          </p>
          <p>
            モットーは <span className="text-foreground">「技術を自分の武器として、会社の武器にもしていく」</span>。
            技術 × ビジネスの接点に価値を出すことを目指しています。
          </p>
        </div>
      </section>

      {/* Skills */}
      <section
        ref={skillsAnimation.ref}
        className={skillsAnimation.isVisible ? 'animate-fade-in-up' : 'opacity-0'}
      >
        <h2 className="ui-h2 mb-6">Skills</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((g) => (
            <div key={g.title} className="ui-card">
              <h3 className="mb-3 text-sm font-bold text-foreground">{g.title}</h3>
              <div className="flex flex-wrap gap-1.5">
                {g.items.map((s) => (
                  <span key={s} className="ui-badge prose-mono text-[11px]">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience / Timeline */}
      <section
        ref={experienceAnimation.ref}
        className={experienceAnimation.isVisible ? 'animate-fade-in-up' : 'opacity-0'}
      >
        <h2 className="ui-h2 mb-6">経歴</h2>
        <div className="relative space-y-4 border-l border-border pl-6">
          {timeline.map((t) => (
            <div key={t.title} className="relative">
              <span className="absolute -left-[27px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-background bg-foreground" />
              <div className="ui-card ui-card-hover">
                <div className="mb-2 flex flex-col gap-1 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-base font-semibold text-foreground">{t.title}</h3>
                    <p className="text-sm text-muted-foreground">{t.place}</p>
                  </div>
                  <span className="prose-mono shrink-0 text-xs text-muted-foreground">{t.period}</span>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">{t.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* OSS / Packages */}
      <section
        ref={ossAnimation.ref}
        className={`pb-10 ${ossAnimation.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
      >
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="ui-eyebrow mb-2">Open Source</p>
            <h2 className="ui-h2">公開パッケージ</h2>
            <p className="ui-lead mt-2">PyPI で公開している自作ライブラリ。</p>
          </div>
          <Link to="/projects" className="ui-btn ui-btn-ghost ui-btn-sm hidden sm:inline-flex">
            Projects →
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {pyPackages.map((p) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="ui-card ui-card-hover block"
            >
              <div className="mb-1 flex items-center gap-2">
                <span className="prose-mono text-sm font-semibold text-foreground">{p.name}</span>
                <span className="ui-badge text-[10px]">PyPI</span>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">{p.description}</p>
            </a>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="ui-btn ui-btn-primary">
            GitHub で見る
          </a>
          <a href={socialLinks.email} className="ui-btn ui-btn-outline">
            お問い合わせ
          </a>
        </div>
      </section>
    </div>
  )
}
