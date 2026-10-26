import { permanentRedirect } from 'next/navigation'

/** Legacy newsletter URL. The Snarkletter now lives at /snarkletter. */
export default function SpillRedirectPage() {
  permanentRedirect('/snarkletter')
}
