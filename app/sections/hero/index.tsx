import { Meteors } from "@/components/ui/meteors"
import PageSection from "@/app/components/page-section"

export function Hero() {
  return (
    <PageSection sectionId="hero">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl">Hi, I&apos;m Darrick. 👋</h1>
        <p>
          I build accessible, responsive web applications from the ground up.
        </p>
        <p>
          Experienced in web standards and full-stack development, I specialize
          in crafting user-first experiences using modern tools and frameworks.
          I&apos;m detail-oriented, continuously learning, and committed to
          writing clean, inclusive code that works for everyone.
        </p>
      </div>

      <Meteors number={20} />
    </PageSection>
  )
}
