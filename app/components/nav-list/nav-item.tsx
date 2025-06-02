import { MainNavItem } from "@/types"
import NavLink from "./nav-link"

export function NavItem({ item }: { item: MainNavItem }) {
  return (
    <li className="list-none">
      <NavLink href={item.href}>{item.title}</NavLink>
    </li>
  )
}
