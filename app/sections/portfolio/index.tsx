import PageSection from "@/app/components/page-section"

export default function PortfolioSection() {
  return (
    <PageSection sectionId="portfolio">
      <h2>Portfolio</h2>
      <p>
        Welcome to my portfolio section. Here you can find my projects and
        works.
      </p>

      <ul>
        <li>
          <a href="/portfolio/project1">Project 1</a> - A brief description of
          project 1.
        </li>
        <li>
          <a href="/portfolio/project2">Project 2</a> - A brief description of
          project 2.
        </li>
        <li>
          <a href="/portfolio/project3">Project 3</a> - A brief description of
          project 3.
        </li>
        <li>
          <a href="/portfolio/project4">Project 4</a> - A brief description of
          project 4.
        </li>
      </ul>
    </PageSection>
  )
}
