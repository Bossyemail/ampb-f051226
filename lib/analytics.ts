declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

function analyticsConsented(): boolean {
  if (typeof window === 'undefined') return false
  try {
    const raw = window.localStorage.getItem('cookie-preferences')
    if (!raw) return false
    return JSON.parse(raw)?.analytics === true
  } catch {
    return false
  }
}

export function trackEvent(
  name: string,
  params?: Record<string, string | number | boolean>
): void {
  if (typeof window === 'undefined') return
  if (!window.gtag) return
  if (!analyticsConsented()) return
  window.gtag('event', name, params ?? {})
}
