import { redirect } from "next/navigation";

/** Legacy URL — redirects to home while product is being relaunched. */
export default async function ClauseVaultRedirectPage() {
  redirect("/");
}
