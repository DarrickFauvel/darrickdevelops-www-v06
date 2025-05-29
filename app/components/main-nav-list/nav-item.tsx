import NavLink from "./nav-link"

export default function NavItem({ item }) {
  return (
    <li>
      <NavLink item={item} />
    </li>
  )
}
