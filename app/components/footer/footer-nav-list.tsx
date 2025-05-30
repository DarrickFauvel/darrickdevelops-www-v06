import { NavItem } from "../nav-list/nav-item"
import { siteMainNavItems } from "@/config/site"

export function FooterNavList() {
  const navListContent = siteMainNavItems.map((item) => {
    return <NavItem item={item} key={item.title} />
  })

  return (
    <>
      <ul className="flex gap-4">{navListContent}</ul>
    </>
  )
}
