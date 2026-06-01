import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MessageCircle, ExternalLink } from "lucide-react"
import { LINE_FRIEND_URL } from "@/lib/site-config"

export function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <span className="text-sm font-medium text-primary-foreground/70 uppercase tracking-wider">Contact</span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground mt-2">
          お問い合わせ・無料相談
        </h2>
        <p className="mt-4 text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
          まずは公式LINEからお気軽にご相談ください。
          <br />
          学習相談・コースのご質問など、何でもお答えします。
        </p>

        <div className="mt-12 bg-background rounded-xl p-8 sm:p-12 max-w-lg mx-auto shadow-lg">
          <div className="w-48 h-48 mx-auto mb-6 relative">
            <Image
              src="/images/line-qr.png"
              alt="公式LINE友だち追加用QRコード"
              width={192}
              height={192}
              className="rounded-lg border border-border"
              priority
            />
          </div>

          <p className="text-foreground font-medium mb-6">
            LINEでスキャンして友だち追加
          </p>

          <Button
            asChild
            size="lg"
            className="w-full bg-[#06C755] hover:bg-[#05B04A] text-white text-base py-6 h-auto font-bold"
          >
            <a
              href={LINE_FRIEND_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              LINEで友だち追加
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
