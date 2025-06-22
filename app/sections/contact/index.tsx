import PageSection from "@/app/components/page-section";

export default function ContactSection() {
  return (
    <PageSection sectionId="contact">
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl">Contact Me</h2>
        <p>
          I&apos;d love to hear from you! Whether you have a question, want to
          collaborate, or just want to say hi, feel free to reach out.
        </p>
        <p>
          You can contact me via email at{" "}
          <a href="mailto:info@darrickdevelops.com" className="text-blue-500">
            info@darrickdevelops.com
          </a>{" "}
          or connect with me on
          <a
            href="https://twitter.com/darrickdevelops"
            className="text-blue-500"
          >
            {" "}
            Twitter
          </a>
          .
        </p>
        <p>
          I&apos;m always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision.
        </p>
        <p>
          Thank you for visiting my portfolio, and I look forward to connecting
          with you!
        </p>
      </div>
      <div className="mt-8">
        <h3 className="text-2xl">Follow Me</h3>
        <ul className="list-disc pl-5">
          <li>
            <a
              href="https://twitter.com/darrickdevelops"
              className="text-blue-500"
            >
              Twitter
            </a>
          </li>
        </ul>
      </div>
    </PageSection>
  );
}
