import { NavItem } from "../nav-list/nav-item"
import { siteMainNavItems } from "@/config/site"

export function FooterNavList() {
  const navListItems = siteMainNavItems.map((item) => {
    return <NavItem item={item} key={item.title} />
  })

  return (
    <nav>
      <ul className="flex text-xs">{navListItems}</ul>
    </nav>
  )
}
