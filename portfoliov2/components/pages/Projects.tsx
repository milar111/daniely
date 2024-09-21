import React, { useState } from 'react';
import { projects, icons } from '@/data';

const Projects = () => {
  return (
    <div className='h-screen flex flex-col justify-center items-center'>
      <div>
        <h1 className='font-inconsolata text-fontLG1 font-normal flex justify-center items-center leading-tight'>
          <span>What I've Been Working On</span>
        </h1>
        <h1 className='text-center font-inconsolata text-fontLG2 font-light leading-tight pb-10'>
          <span>Certain projects aren’t listed</span><br />
          <span>due to confidentiality.</span>
        </h1>
      </div>

      <div className="grid grid-cols-2 gap-4 p-5">
        {projects.map((project, index) => {
          const [currentImageIndex, setCurrentImageIndex] = useState(0);

          const nextImage = () => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % project.image.length);
          };

          const prevImage = () => {
            setCurrentImageIndex((prevIndex) => (prevIndex - 1 + project.image.length) % project.image.length);
          };

          return (
            <div
              id='project-card'
              key={index}
              className="bg-lightGray border-[2px] shadow-bottom-left border-borderProject rounded-2xl p-5 h-[470px] w-[400px] flex flex-col relative 
              filter grayscale hover:grayscale-0 transition duration-500"
            >
              {/* Project Image */}
              <div className='bg-grayISH h-[224px] w-[364px] rounded-2xl border-black border-none flex justify-center items-center mb-4 relative overflow-hidden'>
                <div className='relative w-full h-full'>
                  {project.image.map((imgSrc, imgIndex) => (
                    <img
                      key={imgIndex}
                      src={imgSrc}
                      alt={project.title}
                      className={`absolute h-full w-full object-cover rounded-2xl transition-opacity duration-500 
                        ${imgIndex === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
                    />
                  ))}
                </div>

                {/* Circles with icons */}
                <div className="absolute bottom-4 right-4 flex space-x-1">
                  <div
                    className='border border-border bg-darkGray rounded-full w-7 h-7 flex justify-center items-center'
                    onClick={prevImage} 
                  >
                    <img src="./icons/left.svg" alt="Left Arrow" className="w-6 h-6 flex items-center justify-center" />
                  </div>
                  <div
                    className='border border-border bg-darkGray rounded-full w-7 h-7 flex justify-center items-center'
                    onClick={nextImage}
                  >
                    <img src="./icons/right.svg" alt="Right Arrow" className="w-6 h-6 flex items-center justify-center" />
                  </div>
                </div>
              </div>

              {/* Project Title */}
              <h1 className='text-2xl font-bold font-inconsolata'>
                {project.title}
              </h1>

              {/* Project Description */}
              <h1 className='text-xl font-inconsolata text-fontLG2 font-normal'>
                {project.description}
              </h1>

              {/* Technologies used */}
              <div className='absolute bottom-16 left-3'>
                {project.technologies.map((techId, techIndex) => {
                  const techIcon = icons.find(icon => icon.id === techId);
                  return (
                    <div
                      key={techIndex}
                      style={{
                        transform: `translateX(${35 * techIndex + 5}px)`,
                        zIndex: `${project.technologies.length - techIndex}`,
                        position: 'absolute'
                      }}
                      className='border border-border bg-darkGray rounded-full lg:w-11 lg:h-11 flex justify-center items-center filter grayscale'
                    >
                      {techIcon && (
                        <img src={techIcon.icon} alt={techIcon.name} className="w-6 h-6" />
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Conditional display of GitHub and YouTube icons */}
              <div className="absolute bottom-6 right-6 flex space-x-1">
                {project.GitHubLink && (
                  <a href={project.GitHubLink} target="_blank" rel="noopener noreferrer">
                    <img src="./icons/github.svg" alt="GitHub" className="w-8 h-8" />
                  </a>
                )}
                {project.YouTubeLink && (
                  <a href={project.YouTubeLink} target="_blank" rel="noopener noreferrer">
                    <img src="./icons/youtube.svg" alt="YouTube" className="w-8 h-8" />
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
