import React from 'react';
import { projects } from '@/data';
import { notFound } from 'next/navigation'; //404

const ProjectPage = ({ params }: { params: { id: string } }) => {
  const projectId = params.id;
  const project = projects.find((proj) => proj.id === projectId);

  if (!project) {
    notFound();
  }

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold">{project.title}</h1>
      <p className="mt-4">{project.description}</p>
      <p className="mt-4">{project.keyFeatures}</p>

    </div>
  );
};

export default ProjectPage;
