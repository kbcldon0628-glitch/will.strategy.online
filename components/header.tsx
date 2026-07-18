"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { InstagramLink } from "@/components/instagram-link"

const navItems = [
  { href: "#reasons", label: "選ばれる理由" },
  { href: "#greeting", label: "塾長あいさつ" },
  { href: "#courses", label: "コース・料金" },
  { href: "#results", label: "合格実績" },
  { href: "#testimonials", label: "合格体験記" },
  { href: "#contact", label: "お問い合わせ" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex flex-col leading-tight">
            <span className="text-lg sm:text-xl font-bold text-primary">受験戦略予備校WILL</span>
            <span className="text-[10px] sm:text-xs text-muted-foreground">浪人生専門 定員制オンライン予備校</span>
          </a>

          <div className="flex items-center gap-4">
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-foreground/80 hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <InstagramLink showLabel={false} iconClassName="w-5 h-5" />
            </nav>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "メニューを閉じる" : "メニューを開く"}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>

            <InstagramLink
              showLabel={false}
              iconClassName="w-5 h-5"
              className="lg:hidden"
            />
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-foreground/80 hover:text-primary transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <InstagramLink
                className="py-2"
                onClick={() => setIsMenuOpen(false)}
              />
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
