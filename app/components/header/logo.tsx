import Link from "next/link"
import { siteConfig } from "@/config/site"

export default function Logo() {
  return (
    <Link href="/" aria-label="Go to homepage - Darrick Develops">
      {siteConfig.wordmark}
    </Link>
  )
}
