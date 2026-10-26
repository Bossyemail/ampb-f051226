import { permanentRedirect } from "next/navigation";

/** Legacy URL — BossyEmail marketing page now lives at /closeadmin. */
export default function UpgradeRedirectPage() {
  permanentRedirect("/closeadmin");
}
