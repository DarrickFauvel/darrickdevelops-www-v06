type NavLinkProps = {
  href: string
  children: React.ReactNode
}

export default function NavLink({ href, children }: NavLinkProps) {
  return (
    <a
      href={href}
      className="px-3 py-2 underline-offset-4 hover:underline focus:underline">
      {children}
    </a>
  )
}
