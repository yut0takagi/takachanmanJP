export function MaintenancePage() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <span className="ui-eyebrow">Maintenance</span>
      <h1 className="mb-3 mt-3 text-3xl font-bold tracking-tight text-foreground">メンテナンス中</h1>
      <p className="max-w-xl text-sm leading-7 text-muted-foreground">
        現在、サイトのメンテナンスを実施中です。ご不便をおかけしますが、しばらくしてから再度アクセスしてください。
      </p>
    </div>
  )
}

