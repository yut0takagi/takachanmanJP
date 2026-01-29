export interface Project {
  slug: string
  title: string
  description: string
  tags: string[]
  image?: string
  repoUrl?: string
  websiteUrl?: string
  content?: string[]
}

export const projects: Project[] = [
  {
    slug: 'obserme',
    title: 'ObserMe',
    description:
      'Multi-repo / microservices ecosystem for personal analytics',
    tags: ['Flask', 'React', 'AWS', 'Microservices'],
    image: 'https://picsum.photos/seed/obserme/800/450',
    content: [
      '個人向けアナリティクスのためのマイクロサービス基盤。収集・蓄積・可視化を分離し、サービス単位で独立展開可能。',
      'インフラはAWSを想定し、API層はFlask、フロントはReactで構成。',
    ],
  },
  {
    slug: 'ai-pipeline',
    title: 'AI Pipeline',
    description:
      'Whisper → LLM → Structured Notes with local inference (LM Studio)',
    tags: ['Whisper', 'LLM', 'LM Studio', 'Structured Notes'],
    image: 'https://picsum.photos/seed/aipipeline/800/450',
    content: [
      '音声からノート化までを自動化。Whisperで文字起こしし、LLMで構造化、ローカル推論でプライバシを確保。',
    ],
  },
  {
    slug: 'dom-inspector-ai',
    title: 'DOM Inspector AI',
    description:
      'Web DOM → JSON structural mapping for RAG & autonomous agents',
    tags: ['RAG', 'Agents', 'DOM', 'JSON'],
    image: 'https://picsum.photos/seed/dominspector/800/450',
    content: [
      'WebページのDOMから構造化JSONを抽出し、RAGや自律エージェントの入力に最適化。',
    ],
  },
  {
    slug: 'ml-sandbox',
    title: 'ML Sandbox',
    description: 'EDA / modeling / simulations for DS research',
    tags: ['EDA', 'Modeling', 'Simulation', 'ML'],
    image: 'https://picsum.photos/seed/mlsandbox/800/450',
    content: [
      'データ探索からモデリング、シミュレーションまでを試行する実験用サンドボックス。',
    ],
  },
  {
    slug: 'scikit-for-learn',
    title: 'scikit for learn',
    description: 'Documents for Using Scikit-learn',
    tags: ['Scikit-learn', 'Docs'],
    image: 'https://picsum.photos/seed/scikit/800/450',
    content: [
      'Scikit-learnの利用ノートや実践ドキュメントの整理。',
    ],
  },
]
