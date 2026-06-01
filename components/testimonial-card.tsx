"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Quote, ChevronDown, ChevronUp } from "lucide-react"
import type { Testimonial } from "@/lib/testimonials-data"

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Card className="border-border">
      <CardContent className="p-6">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full text-left"
          aria-expanded={isOpen}
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-start gap-3 min-w-0">
              <Quote className="w-6 h-6 text-accent/50 shrink-0 mt-0.5" />
              <div className="min-w-0">
                <p className="font-bold text-foreground leading-snug">
                  {testimonial.title}
                </p>
                <p className="mt-2 text-sm text-foreground/80 italic">
                  {testimonial.quote}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  {testimonial.author}
                </p>
              </div>
            </div>
            {isOpen ? (
              <ChevronUp className="w-5 h-5 text-muted-foreground shrink-0" />
            ) : (
              <ChevronDown className="w-5 h-5 text-muted-foreground shrink-0" />
            )}
          </div>
        </button>
        {isOpen && (
          <div className="mt-4 pt-4 border-t border-border">
            <p className="text-foreground/80 leading-relaxed whitespace-pre-line">
              {testimonial.content}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
