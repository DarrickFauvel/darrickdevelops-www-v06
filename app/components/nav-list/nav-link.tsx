type NavLinkProps = {
  href: string
  children: React.ReactNode
}

export default function NavLink({ item }: { item: MainNavItem }) {
  return (
    <a href={item.href} className="">
      {item.title}
    </a>
  )
}
