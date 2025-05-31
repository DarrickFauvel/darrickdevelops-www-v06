import Link from "next/link"
import { siteConfig } from "@/config/site"

export function Logo() {
  return (
    <Link
      className="font-bold flex gap-1.5 text-xl"
      href="/"
      aria-label="Go to homepage - Darrick Develops">
      <span className="text-blue-600">{siteConfig.brackets}</span>
      <span>{siteConfig.name}</span>
    </Link>
  )
}
