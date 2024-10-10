import { projects } from '@/data';
import ProjectClientComponent from './ProjectClientComponent';

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

const ProjectPage = ({ params }: { params: { id: string } }) => {
  const project = projects.find((proj) => proj.id === params.id);

  if (!project) {
    return <h1>Project not found</h1>; 
  }

  // Pass the project data to the client component
  return <ProjectClientComponent project={project} />;
};

export default ProjectPage;
