import Copyright from "./copyright"
import Nav from "../main-nav-list"
import NavLinks from "../main-nav-list"

export default function Footer() {
  return (
    <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center md:justify-between">
      <nav>
        <NavLinks />
      </nav>
      <Copyright />
    </footer>
  )
}
