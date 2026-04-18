import { redirect } from "next/navigation";

/** Legacy URL — product landing now lives at `/dealdesk`. Query string preserved for Stripe success, etc. */
export default async function ClauseVaultRedirectPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  const q = new URLSearchParams();
  for (const [key, value] of Object.entries(params)) {
    if (value === undefined) continue;
    q.set(key, Array.isArray(value) ? value[0] : value);
  }
  const suffix = q.toString();
  redirect(suffix ? `/dealdesk?${suffix}` : "/dealdesk");
}
