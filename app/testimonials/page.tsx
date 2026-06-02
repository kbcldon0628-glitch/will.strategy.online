import Link from "next/link"
import type { Metadata } from "next"
import { allTestimonials } from "@/lib/testimonials-data"
import { TestimonialCard } from "@/components/testimonial-card"
import { SITE_DESCRIPTION } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "合格体験記",
  description: `合格を勝ち取った先輩の体験記を掲載。${SITE_DESCRIPTION}`,
  alternates: {
    canonical: "/testimonials",
  },
}

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-secondary py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-accent uppercase tracking-wider">Voices</span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mt-2">
            合格体験記
          </h1>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            実際に合格を勝ち取った先輩たちの声をご紹介します
          </p>
        </div>

        <div className="space-y-4">
          {allTestimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/"
            className="text-sm text-primary hover:underline"
          >
            トップページに戻る
          </Link>
        </div>
      </div>
    </main>
  )
}
