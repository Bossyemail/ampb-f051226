import Link from "next/link";

export default function ArticleAuthorBox() {
  return (
    <aside className="fn-author-box" aria-label="About the author">
      <div className="fn-author-box-meta">
        <p className="fn-author-name">Aylen Montenegro</p>
        <p className="fn-author-bio">
          Aylen Montenegro is a licensed Florida real estate professional, South Florida contract
          manager, and software builder. With experience dating to 2004 and more than 3,000 closings
          supported, she works with agents and brokerages across Miami-Dade, Broward, and Palm Beach
          County. She writes Field Notes on real estate operations, professional judgment, and the
          systems behind successful transactions.{" "}
          <Link href="/about" style={{ color: "inherit", textDecoration: "underline" }}>
            About Aylen
          </Link>
        </p>
      </div>
    </aside>
  );
}
