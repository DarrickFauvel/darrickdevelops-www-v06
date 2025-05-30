import { IconMenu } from "../icons/icon-menu"
import { NavItem } from "../nav-list/nav-item"
import { siteMainNavItems } from "@/config/site"

export function HeaderNavList() {
  const navListContent = siteMainNavItems.map((item) => {
    return <NavItem item={item} key={item.title} />
  })

  return (
    <>
      <IconMenu />
      <ul className="flex gap-4">{navListContent}</ul>
    </>
  )
}
