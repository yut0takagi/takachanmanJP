export function TermsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-white">利用規約</h1>
      <div className="space-y-4 text-sm leading-7 text-zinc-300">
        <p>
          本サイトのご利用にあたっての条件を定めます。ユーザーは本サイトを利用することで、これらの条件に同意したものとみなされます。
        </p>
        <h2 className="mt-6 text-xl font-semibold text-white">禁止事項</h2>
        <ul className="list-inside list-disc text-zinc-400">
          <li>法令または公序良俗に違反する行為</li>
          <li>本サイトの運営を妨害する行為</li>
          <li>無断転載・複製等の著作権侵害行為</li>
        </ul>
        <h2 className="mt-6 text-xl font-semibold text-white">免責事項</h2>
        <p className="text-zinc-400">
          本サイトの内容について、正確性・有用性・最新性等いかなる保証も行いません。利用によって生じたいかなる損害についても責任を負いません。
        </p>
      </div>
    </div>
  )
}

