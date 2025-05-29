import NavItem from "./nav-item"
import { siteMainNavItems } from "@/config/site"

export default function MainNavList() {
  const navListContent = siteMainNavItems.map((item) => {
    return <NavItem item={item} key={item.title} />
  })

  return <ul className="flex gap-4">{navListContent}</ul>
}
