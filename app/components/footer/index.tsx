import { Copyright } from "./copyright"
import { FooterNavList } from "../footer/footer-nav-list"

export function Footer() {
  return (
    <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center md:justify-between">
      <nav>
        <FooterNavList />
      </nav>
      <Copyright />
    </footer>
  )
}
