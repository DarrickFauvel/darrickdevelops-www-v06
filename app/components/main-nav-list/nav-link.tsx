import { MainNavItem } from "@/types"

export default function NavLink({ item }: { item: MainNavItem }) {
  return (
    <a href={item.href} className="">
      {item.title}
    </a>
  )
}
