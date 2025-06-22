import AboutSection from "./sections/about"
import ContactSection from "./sections/contact"
import { Hero } from "./sections/hero"
import PortfolioSection from "./sections/portfolio"

export default function Home() {
  return (
    <>
      <main
        className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start"
        id="main-content">
        <Hero />

        <AboutSection />
        
        <PortfolioSection />
        
        <ContactSection />
      </main>
    </>
  )
}
