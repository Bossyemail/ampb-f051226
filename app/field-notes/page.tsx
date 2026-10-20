import CinemaNav from "@/components/CinemaNav";
import Footer from "@/components/Footer";
import ArchiveClient from "@/components/field-notes/ArchiveClient";
import { getAllArticles } from "@/lib/field-notes";

// Revalidate every 5 minutes so newly published scheduled articles
// become visible without redeployment.
export const revalidate = 300;

export default function FieldNotesPage() {
  const articles = getAllArticles().filter(a => !a.draft);

  return (
    <div className="fn-page">
      <CinemaNav />
      <ArchiveClient articles={articles} />
      <Footer />
    </div>
  );
}
