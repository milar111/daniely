"use client";

import React, { useState, useEffect } from 'react';
import { projects, icons } from '@/data';
import { useRouter, notFound } from 'next/navigation';
import { motion } from 'framer-motion';

const ProjectPage = ({ params }: { params: { id: string } }) => {
  const projectId = params.id;
  const router = useRouter();

  const project = projects.find((proj) => proj.id === projectId);

  if (!project) {
    notFound();
  }

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
    <div className='py-20 relative min-h-screen flex flex-col justify-center items-center space-y-10 w-full'>
      <div className='flex w-full max-w-5xl space-x-4'>
        {/* Left Side: Image and Controls */}
        <div className='relative'>
          <button 
            onClick={goBackToProjects} 
            className='absolute -top-9 left-0 flex items-center text-sm bg-lightGray rounded-xl px-2 py-1 hover:bg-grayISH justify-center shadow-sm border-2 border-lightGray hover:border-grayISH'
          >
            <img src="/icons/left.svg" alt="Go Back" className="w-4 h-4" />
            Go Back
          </button>

          <div className='relative w-[470px] h-[440px] rounded-xl overflow-hidden shadow-lg border-lightGray border-2'>
            <div className='relative w-full h-full'>
              {project.image.map((imgSrc, imgIndex) => (
                <motion.img
                  key={imgIndex}
                  src={imgSrc}
                  alt={project.title}
                  className={`absolute w-full h-full object-cover rounded-xl`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: imgIndex === currentImageIndex ? 1 : 0 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                />
              ))}
            </div>

            <div className="absolute bottom-4 right-4 flex space-x-2">
              <button
                onClick={prevImage}
                className='border border-border bg-lightGray rounded-full w-8 h-8 flex justify-center items-center'
              >
                <img src="/icons/left.svg" alt="Previous" className="w-6 h-6" />
              </button>
              <button
                onClick={nextImage}
                className='border border-border bg-lightGray rounded-full w-8 h-8 flex justify-center items-center'
              >
                <img src="/icons/right.svg" alt="Next" className="w-6 h-6" />
              </button>
            </div>

            {/* Render technology icons */}
            <div className='absolute bottom-16 left-3'>
              {project.technologies.map((techId, techIndex) => {
                const techIcon = icons.find(icon => icon.id === techId);
                const translationX = windowWidth > 380 ? 35 * techIndex + 5 : 26 * techIndex + 5;

                return (
                  <div
                    key={techIndex}
                    style={{
                      transform: `translateX(${translationX}px)`,
                      zIndex: `${project.technologies.length - techIndex}`,
                      position: 'absolute',
                    }}
                    className='border border-border bg-lightGray rounded-full w-11 h-11 flex justify-center items-center filter grayscale 
                    xxsm:w-9 xxsm:h-9'
                  >
                    {techIcon && (
                      <img src={techIcon.icon} alt={techIcon.name} className="w-6 h-6 xxsm:w-5 xxsm:h-5" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Side: Title, Brief Description, and Links */}
        <div className='flex-1 flex flex-col justify-center items-start pl-2 space-y-6 relative'>
          <h1 className='text-3xl font-bold'><span>{project.title}</span></h1>
          <div className='p-6 bg-grayISH bg-opacity-30 rounded-lg w-full flex justify-center items-center shadow-md h-full relative'>
            <p className='text-sm text-center'><span>{project.briefDescription}</span></p>

            {/* Links to GitHub and YouTube in the bottom right */}
            <div className="absolute bottom-3 right-3 flex space-x-2">
              {project.GitHubLink && (
                <a 
                  href={project.GitHubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <img src="/icons/github.svg" alt="GitHub" className="w-8 h-8 xxsm:w-6 xxsm:h-6" />
                </a>
              )}
              {project.YouTubeLink && (
                <a 
                  href={project.YouTubeLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <img src="/icons/youtube.svg" alt="YouTube" className="w-8 h-8 xxsm:w-6 xxsm:h-6" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Objectives and Goals Section */}
      <div className='mt-8 w-full max-w-5xl pb-8'>
        <h1 className='text-3xl font-bold flex justify-center items-center pb-1'><span>Objectives and Goals</span></h1>
        <div className='p-6 bg-grayISH bg-opacity-30 rounded-lg flex justify-center items-center shadow-md h-full '>
          <p className='text-sm text-center'><span>{project.problemStatement}</span></p>
        </div>
      </div>

      {/* Features and Highlights */}
      <div className='mt-8 w-full max-w-5xl'>
        <h1 className='text-3xl font-bold flex justify-center items-center pb-1'><span>Features and Highlights</span></h1>
        <div className='p-6 bg-grayISH bg-opacity-30 rounded-lg flex justify-center items-center shadow-md h-full '>
          <p className='text-sm text-center'><span>{project.keyFeatures}</span></p>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
