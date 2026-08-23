/** 本番サイトのURL（カスタムドメイン利用時は Netlify の環境変数で上書き） */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://chimerical-gnome-6cfff1.netlify.app"

export const SITE_NAME = "浪人生専用オンライン予備校【受験戦略予備校】"

export const SITE_DESCRIPTION =
  "国公立大学合格を目指す浪人生専門のオンライン予備校。20年の指導経験に基づいた、あなただけの合格ロードマップをマンツーマンで構築します。授業を増やすな、自習を極めろ。"

export const LINE_FRIEND_URL = "https://lin.ee/RzU9d0l"

export const INSTAGRAM_URL = "https://www.instagram.com/will.strategy.online/"

/** Google Analytics 4 測定ID（例: G-0DP9MDDTYX） */
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
