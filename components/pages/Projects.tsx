import React, { useState, useEffect } from 'react';
import { projects } from '@/data';
import ProjectCard from '../ui/ProjectCard';

const Projects = () => {
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isOdd = projects.length % 2 !== 0;

  return (
    <div className="py-20 relative min-h-screen flex flex-col justify-center items-center space-y-10 w-full">
      <div className="w-full flex flex-col items-center text-center mx-auto">
        <h1 className="font-inconsolata lg:text-4xl font-normal leading-tight text-3xl">
          <span>What I've Been Working On</span>
        </h1>
        <h1 className="font-inconsolata lg:text-fontLG2 font-light leading-tight pb-8 xsm:pb-2 text-[20px]">
          <span>Certain projects aren't listed</span>
          <br />
          <span>due to confidentiality.</span>
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-5 xsm:p-1">
        {projects.map((project, index) => {
          const isLastOddCard = isOdd && index === projects.length - 1;

          if (isOdd && index === projects.length - 1) {
            // Render the last project in the center with fade-in animation from top to bottom
            return (
              <div
                key={index}
                className="lg:col-span-2 flex justify-center"
              >
                <ProjectCard project={project} index={index} windowWidth={windowWidth} isLastOddCard={isLastOddCard} />
              </div>
            );
          }
          // Render all other projects normally
          return <ProjectCard key={index} project={project} index={index} windowWidth={windowWidth} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
