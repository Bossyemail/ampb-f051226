// Pull quotes must be exact passages from the approved article text.
// They are configured in each article's frontmatter under `pullQuotes: [...]`.
// Do not insert pull quote text that does not appear verbatim in the article body.

export default function PullQuote({ text }: { text: string }) {
  return (
    <aside className="fn-pull-quote" aria-label="Pull quote">
      <blockquote>{text}</blockquote>
    </aside>
  )
}
