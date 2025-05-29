import Link from "next/link"
import { siteConfig } from "@/config/site"

export default function Logo() {
  return (
    <Link
      className="font-bold text-slate-50 flex gap-1.5"
      href="/"
      aria-label="Go to homepage - Darrick Develops">
      <span className="text-blue-600">{siteConfig.brackets}</span>
      <span>{siteConfig.name}</span>
    </Link>
  )
}
