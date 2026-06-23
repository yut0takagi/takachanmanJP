export function TermsPage() {
  return (
    <div className="space-y-10">
      <div>
        <p className="ui-eyebrow mb-3">Legal</p>
        <h1 className="mb-3 text-3xl font-bold tracking-tight text-foreground">利用規約</h1>
        <p className="ui-lead max-w-2xl">
          本サイトのご利用にあたっての条件を定めます。ユーザーは本サイトを利用することで、これらの条件に同意したものとみなされます。
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="ui-h2">禁止事項</h2>
        <ul className="list-inside list-disc space-y-1 text-muted-foreground leading-relaxed">
          <li>法令または公序良俗に違反する行為</li>
          <li>本サイトの運営を妨害する行為</li>
          <li>無断転載・複製等の著作権侵害行為</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="ui-h2">免責事項</h2>
        <p className="text-muted-foreground leading-relaxed">
          本サイトの内容について、正確性・有用性・最新性等いかなる保証も行いません。利用によって生じたいかなる損害についても責任を負いません。
        </p>
      </section>
    </div>
  )
}
