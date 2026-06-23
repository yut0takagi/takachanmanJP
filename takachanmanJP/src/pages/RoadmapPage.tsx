const horizons = [
  {
    phase: 'Now',
    title: '進行中',
    description: '直近で手を動かしている取り組み。',
    items: [
      'ブログ機能の拡張（タグ・検索・RSS）',
      'OSS への継続的なコントリビュート',
      '登壇資料の公開・アーカイブ',
    ],
  },
  {
    phase: 'Next',
    title: '次にやること',
    description: '優先度を上げて着手予定のテーマ。',
    items: [
      'ポートフォリオのコンテンツ拡充と多言語化',
      '個人プロジェクトのドキュメント整備',
      '計測・パフォーマンス改善の継続',
    ],
  },
  {
    phase: 'Later',
    title: '構想中',
    description: '中長期で検討しているアイデア。',
    items: [
      '新しい技術スタックでの実験的プロダクト',
      '知見をまとめた技術記事の連載',
      'コミュニティ活動・勉強会への参加',
    ],
  },
]

const collaboration = [
  {
    title: '共同開発',
    description: 'プロダクト開発・OSS で一緒に手を動かせる方を歓迎します。',
  },
  {
    title: '技術相談',
    description: '設計・実装の壁打ちや、小さな改善のレビューにも対応します。',
  },
  {
    title: '登壇・執筆',
    description: 'LT・記事・ハンズオンなど、アウトプットの機会も募集中です。',
  },
]

export function RoadmapPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <p className="ui-eyebrow">Roadmap</p>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">ロードマップ / 募集</h1>
        <p className="ui-lead max-w-2xl">
          今後の予定とコラボ・共同開発の募集です。状況に応じて随時アップデートしています。
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="ui-h2">これからの予定</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {horizons.map((h) => (
            <div key={h.phase} className="ui-card ui-card-hover space-y-3">
              <div className="flex items-center justify-between">
                <span className="ui-badge">{h.phase}</span>
                <h3 className="text-base font-semibold text-foreground">{h.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground">{h.description}</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {h.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-foreground">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="ui-h2">コラボ・募集</h2>
        <p className="ui-lead max-w-2xl">
          こんなことでご一緒できます。気になるものがあればお気軽にどうぞ。
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {collaboration.map((c) => (
            <div key={c.title} className="ui-card space-y-1.5">
              <h3 className="text-base font-semibold text-foreground">{c.title}</h3>
              <p className="text-sm text-muted-foreground">{c.description}</p>
            </div>
          ))}
        </div>
      </section>

      <p className="text-sm text-muted-foreground">
        ご一緒できる方はお問い合わせからご連絡ください。
      </p>
    </div>
  )
}
