import Script from "next/script"
import { GA_MEASUREMENT_ID } from "@/lib/site-config"
import { GoogleAnalyticsPageView } from "@/components/google-analytics-page-view"

export function GoogleAnalytics() {
  if (!GA_MEASUREMENT_ID) {
    return null
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics-gtag" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
      <GoogleAnalyticsPageView measurementId={GA_MEASUREMENT_ID} />
    </>
  )
}
