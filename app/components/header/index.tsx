import { HeaderNavList } from "./header-nav-list"
import { Logo } from "./logo"
import { ModeToggle } from "./mode-toggle"

export function Header() {
  return (
    <header className="row-start-1">
      <nav
        className="flex justify-between items-center"
        aria-label="Main navigation">
        <Logo />
        <span className="flex gap-4 items-center">
          <ModeToggle />
          <HeaderNavList />
        </span>
      </nav>
    </header>
  )
}
