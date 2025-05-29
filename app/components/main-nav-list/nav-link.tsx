import { MainNavItem } from "@/types"

export default function NavLink({ item }: { item: MainNavItem }) {
  return (
    <a href={item.href} className="text-slate-400">
      {item.title}
    </a>
  )
}
