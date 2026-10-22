// Pull quotes must be exact passages from the approved article text.
// They are configured in each article's frontmatter under `pullQuotes: [...]`.
// Do not insert pull quote text that does not appear verbatim in the article body.

export default function PullQuote({
  text,
  side = 'center',
}: {
  text: string
  side?: 'left' | 'right' | 'center'
}) {
  const cls =
    side === 'left'  ? 'fn-pull-quote fn-pull--left'  :
    side === 'right' ? 'fn-pull-quote fn-pull--right' :
    'fn-pull-quote'

  return (
    <aside className={cls} aria-label="Pull quote">
      <blockquote>{text}</blockquote>
    </aside>
  )
}
