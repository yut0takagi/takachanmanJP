export interface Article {
  title: string
  url: string
  publishedAt: string
  platform: 'Zenn' | 'Qiita' | 'Note'
  excerpt?: string
}
