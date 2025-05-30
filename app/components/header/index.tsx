import Logo from "./logo"
import MainNavList from "../main-nav-list"
import { ModeToggle } from "../mode-toggle"

export default function Header() {
  return (
    <header className="row-start-1">
      <nav className="flex justify-between" aria-label="Main navigation">
        <Logo />
        <ModeToggle />
        <MainNavList />
      </nav>
    </header>
  )
}
