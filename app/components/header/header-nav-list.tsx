import { MobileMenu } from "./mobile-menu"
import { NavItem } from "../nav-list/nav-item"
import { siteMainNavItems } from "@/config/site"

export function HeaderNavList() {
  const navListContent = siteMainNavItems.map((item) => {
    return <NavItem item={item} key={item.title} />
  })

  return (
    <>
      <MobileMenu navListContent={navListContent} />

      <ul className="sm:flex gap-4 hidden">{navListContent}</ul>
    </>
  )
}
