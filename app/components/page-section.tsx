type PageSectionProps = {
  sectionId: string;
  children: React.ReactNode;
};

export default function PageSection({sectionId, children}: PageSectionProps) {
  return (
    <section className="min-h-screen pt-20" id={sectionId}>
      {children}
    </section>
  );
}