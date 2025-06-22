import { HeaderNavList } from "./header-nav-list"
import { Logo } from "./logo"
import { ModeToggle } from "./mode-toggle"

export function Header() {
  return (
    <header className="row-start-1 fixed top-0 left-0 z-50 w-full bg-background/2 backdrop-blur-md px-4 py-2">
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
