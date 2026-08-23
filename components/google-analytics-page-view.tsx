"use client"

import { usePathname } from "next/navigation"
import { useEffect } from "react"

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

type GoogleAnalyticsPageViewProps = {
  measurementId: string
}

export function GoogleAnalyticsPageView({
  measurementId,
}: GoogleAnalyticsPageViewProps) {
  const pathname = usePathname()

  useEffect(() => {
    if (!window.gtag) {
      return
    }

    window.gtag("config", measurementId, {
      page_path: pathname,
    })
  }, [pathname, measurementId])

  return null
}
