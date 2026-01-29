export interface PyPackage {
  name: string
  url: string
  description: string
}

export const pyPackages: PyPackage[] = [
  {
    name: 'MRBS',
    url: 'https://pypi.org/project/mrbs',
    description:
      '部分的なデータをXGBoostで補完し、勾配上昇法とクラスタリングで最適点を探索するPythonライブラリです。',
  },
  {
    name: 'md2pdf-advanced',
    url: 'https://pypi.org/project/md2pdf-advanced',
    description:
      'Markdown ファイルを美しくカスタマイズされた PDF に変換できる Python パッケージです。',
  },
  {
    name: 'SessionSmith',
    url: 'https://pypi.org/project/SessionSmith/',
    description:
      'Jupyter/Python実行時のセッション（変数・オブジェクト）を簡単に保存・復元できる軽量ライブラリです。',
  },
  {
    name: 'DOM Inspector AI',
    url: 'https://pypi.org/project/dom-inspector-ai/',
    description:
      'Extract id/class attributes with DOM paths and a base64 screenshot from a web page.',
  },
]

