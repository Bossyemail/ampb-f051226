export default function MarginNote({ text }: { text: string }) {
  return (
    <aside className="fn-margin-note">
      <span className="fn-margin-note-label">Field Note</span>
      <p>{text}</p>
    </aside>
  )
}
