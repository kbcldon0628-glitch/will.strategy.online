import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { allTestimonials } from "@/lib/testimonials-data"
import { TestimonialCard } from "@/components/testimonial-card"

export function Testimonials() {
  const previewTestimonials = allTestimonials.slice(0, 4)

  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-secondary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-accent uppercase tracking-wider">Voices</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mt-2">
            合格体験記
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            実際に合格を勝ち取った先輩たちの声をご紹介します
          </p>
        </div>

        <div className="space-y-4">
          {previewTestimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        <div className="mt-8 text-center">
          <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            <a href="/testimonials">
              もっと見る
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
