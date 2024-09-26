"use client";

import React, { useState } from 'react';
import { projects } from '@/data';
import { useRouter, notFound } from 'next/navigation';

const ProjectPage = ({ params }: { params: { id: string } }) => {
  const projectId = params.id;
  const router = useRouter();

  const project = projects.find((proj) => proj.id === projectId);

  if (!project) {
    notFound();
  }

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % project.image.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + project.image.length) % project.image.length);
  };

  const goBackToProjects = () => {
    router.push('/#projects');
  };

  return (
    <div className='flex justify-center items-center h-screen px-4 mx-4'>
      <div className='relative'>
        <button 
          onClick={goBackToProjects} 
          className='absolute -top-8 left-0 flex items-center text-sm bg-grayISH rounded-xl px-2 py-1 hover:bg-darkGray justify-center'
        >
          <img src="/icons/left.svg" alt="Go Back" className="w-4 h-4" />
          Go Back
        </button>

        <div className='w-[400px] h-[470px] rounded-xl overflow-hidden'>
          <img 
            src={project.image[currentImageIndex]} 
            alt={project.title} 
            className='w-full h-full object-cover'
          />

          <div className="absolute bottom-4 right-4 flex space-x-2">
            <button
              onClick={prevImage}
              className='border border-border bg-darkGray rounded-full w-8 h-8 flex justify-center items-center'
            >
              <img src="/icons/left.svg" alt="Previous" className="w-6 h-6" />
            </button>
            <button
              onClick={nextImage}
              className='border border-border bg-darkGray rounded-full w-8 h-8 flex justify-center items-center'
            >
              <img src="/icons/right.svg" alt="Next" className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
