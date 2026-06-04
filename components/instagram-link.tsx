import { Instagram } from "lucide-react"
import { INSTAGRAM_URL } from "@/lib/site-config"
import { cn } from "@/lib/utils"

type InstagramLinkProps = {
  className?: string
  showLabel?: boolean
  iconClassName?: string
  onClick?: () => void
}

export function InstagramLink({
  className,
  showLabel = true,
  iconClassName = "w-5 h-5",
  onClick,
}: InstagramLinkProps) {
  return (
    <a
      href={INSTAGRAM_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className={cn(
        "inline-flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors",
        className
      )}
      aria-label="Instagram公式アカウント（新しいタブで開く）"
    >
      <Instagram className={iconClassName} aria-hidden />
      {showLabel && <span className="text-sm">Instagram</span>}
    </a>
  )
}
