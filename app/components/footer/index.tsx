import { Copyright } from "./copyright"
import { FooterNavList } from "../footer/footer-nav-list"

export function Footer() {
  return (
    <footer className="row-start-3 flex flex-wrap-reverse gap-[24px] items-center justify-center sm:justify-between">
      <Copyright />
      <FooterNavList />
    </footer>
  )
}
