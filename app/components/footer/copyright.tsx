import currentYear from "@/utils/currentYear"
import { siteConfig } from "@/config/site"

export function Copyright() {
  return (
    <div className="text-xs">
      <span className="hidden sm:inline">Copyright </span>
      <span>
        &copy; {currentYear()} {siteConfig.name}. All rights reserved.
      </span>
    </div>
  )
}
