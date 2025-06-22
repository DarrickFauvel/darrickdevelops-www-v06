export default function ProjectPage({params}: {params: {slug: string}}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <h1 className="text-4xl font-bold mb-4">Project Page</h1>
      <p className="text-lg">This is a placeholder for the project [{params.slug}]details.</p>
    </div>
  );
}