import Link from "next/link"
import { InstagramLink } from "@/components/instagram-link"

export function Legal() {
  return (
    <section id="legal" className="py-12 bg-muted">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center gap-4">
        <InstagramLink className="text-muted-foreground hover:text-foreground" />
        <Link
          href="/legal"
          className="text-xs text-muted-foreground hover:text-foreground hover:underline transition-colors"
        >
          特定商取引法に基づく表記
        </Link>
      </div>
    </section>
  )
}
