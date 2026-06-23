// 自動生成: 自作プロダクト（公開可能な範囲のみ）。機密情報は含まない。
export interface Tool {
  slug: string
  name: string
  description: string
  descriptionEn?: string
  features?: string[]
  tags: string[]
  url?: string
}

export const obsidianPlugins: Tool[] = [
  {
    slug: 'deck-dashboard',
    name: 'Deck Dashboard',
    description: 'タスク・Dataview・Bases・ノート・カレンダー・メールなどのウィジェットを、ドラッグ&リサイズ可能なグリッド上に自由配置できるObsidian向けコンポーザブルダッシュボード。カレンダー/メール連携、スプレッドシートとのタスク双方向同期、AIによるVault横断検索・メール下書き支援を備える。',
    descriptionEn: 'A composable Obsidian dashboard that arranges tasks, Dataview, Bases, notes, calendar, and mail as widgets on a draggable grid, with calendar/mail integration, two-way spreadsheet task sync, and AI vault search.',
    features: ['ドラッグ&リサイズ対応グリッドに多彩なウィジェット(Kanban/ガント/チャート/カレンダー/メール/AI検索/ノート埋め込み)を配置', 'カレンダー・メール連携とスプレッドシートとのタスク双方向同期(列オーナーシップ+競合解決)', 'AIによるVault横断検索とメール下書き支援', 'ホームダッシュボードのテンプレート化と自動同期ウォッチャー'],
    tags: ['Obsidian', 'TypeScript', 'Google Calendar API', 'Gmail API', 'Google Sheets API', 'Anthropic API'],
  },
  {
    slug: 'spread-sync',
    name: 'Spread Sync',
    description: 'スプレッドシートのセルや範囲をMarkdownに埋め込み、ファイルを開いたタイミングで自動同期するObsidianプラグイン。明示的なPush操作でMarkdown側からの書き戻しもでき、双方向同期を実現する。',
    descriptionEn: 'An Obsidian plugin that embeds spreadsheet cells and ranges into Markdown with on-open auto-sync and explicit write-back for two-way sync.',
    features: ['インライン記法・コードブロックでセル/範囲をMarkdownに埋め込み表示', 'ファイルオープン時の自動同期とstale-while-revalidateキャッシュ(TTL・オフライン対応)', 'Pushコマンドによる書き戻しで双方向同期', 'OAuth認証(リフレッシュトークンをElectron safeStorageで暗号化保存)'],
    tags: ['Obsidian', 'TypeScript', 'Google Sheets API', 'OAuth 2.0', 'esbuild', 'Vitest'],
  },
  {
    slug: 'org-share',
    name: 'Org Share',
    description: 'Obsidianのノートを、組織ドメイン認証・許可リスト・公開リンクの3モードで安全に共有できるプラグイン。アクセスゲートで保護された公開先URLにノートを発行する。',
    descriptionEn: 'An Obsidian plugin that publishes individual notes to an access-gated URL with three audience modes: org-domain, allowlist, and public link.',
    features: ['ノート単位のワンクリック共有(共有/URLコピー/共有停止コマンド)', '3つの公開モード(組織ドメイン認証・指定メンバー許可リスト・公開リンク)と有効期限設定', 'Markdown→HTML変換(Wikilink・コールアウト・脚注・タスクリスト対応)', 'コンテンツハッシュによる画像アセットの自動アップロードとURL書き換え'],
    tags: ['Obsidian', 'TypeScript', 'Cloudflare', 'Cloudflare Workers', 'markdown-it', 'esbuild'],
  },
  {
    slug: 'share-hosted',
    name: 'Share Hosted',
    description: 'Obsidianのノートをホスト型Webページとして公開できるプラグイン。メールのマジックリンクでサインインし、組織ドメイン全体・許可リスト・リンクを知る全員の3段階の公開範囲と有効期限を選んで共有できる。',
    descriptionEn: 'An Obsidian plugin that publishes notes as hosted web pages with email magic-link sign-in and three sharing audiences: org-domain, an email allowlist, or anyone with the link.',
    features: ['メールのマジックリンク認証でサインイン', '公開範囲を3段階(組織ドメイン/許可リスト/リンク公開)で制御', 'MarkdownをHTMLにレンダリングし画像アセットもアップロード', '有効期限設定と共有URLのコピー・共有停止コマンド'],
    tags: ['Obsidian', 'TypeScript', 'markdown-it', 'esbuild', 'Vitest', 'REST API'],
  },
  {
    slug: 'system-recording',
    name: 'System Recording',
    description: 'Web会議のシステム音声とマイクをミックスしてWAVでVaultに保存するObsidianプラグイン。カレンダー連携で予定の開始/終了に合わせた録音開始通知や会議URLの自動オープンも行える。',
    descriptionEn: 'An Obsidian plugin that records system audio plus microphone into a WAV file, with calendar integration for meeting-aware auto-recording.',
    features: ['システム音声+マイクをミックスしてWAVで保存し、ノートに自動リンク挿入', 'macOS arm64ネイティブ録音ヘルパーをGitHub Releasesから自動DL+SHA256検証', 'カレンダー(OAuth PKCE)連携で予定開始/終了に録音開始・停止を通知', '除外キーワード・会議URL自動オープン・ファイル名テンプレートを設定可能'],
    tags: ['Obsidian', 'TypeScript', 'macOS', 'Google Calendar API', 'OAuth 2.0', 'Swift'],
  },
  {
    slug: 'vault-knowledge-map-sync',
    name: 'Knowledge Map Sync',
    description: 'Vault内のファイル変更(作成・削除・リネーム)を検知し、知識マップのCanvasファイルを自動同期するObsidianプラグイン。フォルダ階層をカテゴリ別ノードへマッピングし、手動メンテナンス不要で全体像を最新に保つ。',
    descriptionEn: 'An Obsidian plugin that auto-syncs a knowledge-map canvas with vault file changes (create, delete, rename) by mapping folder hierarchy to category nodes.',
    features: ['Vaultのcreate/delete/renameイベントを監視しCanvasのカテゴリノードへ即時反映', 'フォルダパス→Canvasノードへのマッピングをカテゴリ解決で自動分類', 'Canvas書き込みをキューで直列化し一括変更時の競合を防止', 'Canvas全体を再構築するフル再同期コマンドと未マップ検出'],
    tags: ['Obsidian', 'TypeScript', 'esbuild', 'Vitest', 'JSON Canvas'],
  },
]

export const tools: Tool[] = [
  {
    slug: 'claude-sync',
    name: 'claude-sync',
    description: 'Claude Codeの.claude設定一式(skills/agents/commands/rules/scripts)を、zipスナップショット+クラウドオブジェクトストレージ+差分比較でチーム共有・バックアップする軽量同期ツール。git の push/pull/diff の概念だけを踏襲し、コミット履歴やマージは使わずスナップショット単位で安全に同期する。',
    descriptionEn: 'A lightweight tool that shares and backs up the Claude Code .claude config set (skills, agents, commands, rules, scripts) across a team via zip snapshots on cloud object storage with file-level diffing.',
    features: ['up/down/diffの3コマンドで同期(zipスナップショットをクラウドストレージに積み、最新を取得して差分反映)', 'アップロード前にリモート最新と自動比較し、差分を遅れ/内容違い/新規で色分け表示して承認(--force)制でガード', 'ダウンロードは承認制・削除は安全側(明示時のみ)で、行マージなしの衝突を未然に防ぐ', 'doctorによるCLI導入・ログイン・バケット到達性のプリフライト診断と、秘匿情報の同期除外(.claudesyncignore)'],
    tags: ['Claude Code Plugin', 'Bash', 'Google Cloud Storage', 'gsutil', 'rsync', 'Backup & Sync'],
  },
  {
    slug: 'claude-session-pool',
    name: 'Claude Session Pool',
    description: '対話型のClaude Codeセッションをウォームに保ち、自作ツールから並列にプロンプトを投げて構造化結果を読み取れるプログラマティックなセッションプール。pty(入力)とtranscript JSONL(出力)のチャネル分離で、トークン使用量・コスト・ターン完了を取得する。Obsidianプラグインのコンシューマも同梱。',
    descriptionEn: 'A programmatic warm-session pool that keeps interactive Claude Code sessions alive so your own tools can send prompts in parallel and read back structured results, usage, and cost.',
    features: ['pty経由でプロンプト送信・transcript JSONLから結果/トークン使用量/コスト/ターン完了を読み取るチャネル分離アーキテクチャ', 'lanes指定による並列実行と、使い捨て(ephemeral)/名前付き再利用(persistent)のセッション戦略', 'settings.jsonのallowlistで未対応プロンプトを保留するフェイルセーフなパーミッション制御', 'CLI(csp)とObsidianプラグイン(Skill Launcher)から呼び出せるコンシューマ同梱'],
    tags: ['TypeScript', 'Node.js', 'node-pty', 'Obsidian', 'CLI', 'monorepo'],
  },
  {
    slug: 'okf-validate',
    name: 'okf-validate',
    description: 'MarkdownナレッジベースをOpen Knowledge Format (OKF v0.1) 適合バンドルとして検査・整備するPython CLIツール群。frontmatterの検証・自動補完、目次(index.md)と更新履歴(log.md)の自動生成を1コマンドで同期する。',
    descriptionEn: 'A Python CLI toolset that validates and maintains a Markdown knowledge base as an Open Knowledge Format (OKF v0.1) compliant bundle, backfilling frontmatter and auto-generating a table of contents and change log.',
    features: ['OKF v0.1適合チェッカー: frontmatterの存在・必須type・予約ファイル構造を検証しexit codeで成否を返す(CI/pre-commit/hook組込み可)', 'frontmatter自動補完: type/description/tagsをフォルダ階層や本文から決定的に導出して非破壊・冪等に付与', '目次(index.md)と更新履歴(log.md)を自動生成。log.mdはgitの作成履歴(--follow)から再構築', 'sync.shで補完→生成→検証を1コマンド実行。差分のみ表示するdry-runモード対応'],
    tags: ['Python', 'CLI', 'Markdown', 'YAML', 'Git', 'Open Knowledge Format'],
  },
  {
    slug: 'gantt-clean',
    name: 'gantt-clean',
    description: 'Markwhen形式のガントチャートから完了タスクを検出し、専用のアーカイブセクションへ自動退避させるNode.js製CLIツール。未完了タスクだけがメインビューに残るよう整理する。',
    descriptionEn: 'A Node.js CLI that detects completed tasks in a Markwhen (.mw) Gantt chart and auto-archives them into a dedicated section, keeping only active tasks in the main view.',
    features: ['タスク詳細ファイルのfrontmatter(status)を走査して完了タスクを判定', 'ガント.mw内の該当ブロックをアーカイブセクションへ移動しタグを#doneに書き換え', '実行ごとにタイムスタンプ付きバックアップを生成し直近世代を自動ローテーション', '--dry-run / --json による安全確認とスキル連携向け機械可読出力'],
    tags: ['Node.js', 'JavaScript', 'ES Modules', 'CLI', 'Markwhen', 'Obsidian'],
  },
]
