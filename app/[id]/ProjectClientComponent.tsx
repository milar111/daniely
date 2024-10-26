"use client"

import React, { useState, useEffect } from 'react';
import { icons } from '@/data';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface Project {
  id: string;
  title: string;
  image: string[];
  technologies: string[];
  briefDescription: string;
  problemStatement: string;
  keyFeatures: string;
  GitHubLink?: string;
  YouTubeLink?: string;
}

interface Icon {
  id: string;
  icon: string;
  name: string;
}

const ProjectClientComponent = ({ project }: { project: Project }) => {
  const router = useRouter();
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
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
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + project.image.length) % project.image.length
    );
  };

  const goBackToProjects = () => {
    router.push('/#projects');
  };

  return (
    <div className='py-20 relative min-h-screen flex flex-col justify-center items-center space-y-10 w-full px-20 smlg:px-11 xxsm:px-5'>
      <div className='flex flex-col lg:flex-row w-full max-w-5xl space-x-0 lg:space-x-4 space-y-4 lg:space-y-0'>
        {/* Left Side: Image and Controls */}
        <div className='relative flex flex-col items-center'>
          <button
            onClick={goBackToProjects}
            className='absolute -top-9 left-0 flex items-center text-sm bg-lightGray rounded-xl px-2 py-1 hover:bg-grayISH justify-center shadow-sm border-2 border-lightGray hover:border-grayISH cursor-custom-default'
          >
            <Image src='./icons/left.svg' alt='Go Back' width={16} height={16} />
            Go Back
          </button>

          <div className='relative w-full lg:w-[470px] h-[440px] rounded-xl overflow-hidden shadow-lg border-lightGray border-2'>
            <div className='relative w-full h-full'>
              {project.image.map((imgSrc: string, imgIndex: number) => (
                <motion.div
                  key={imgIndex}
                  className='absolute w-full h-full rounded-xl'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: imgIndex === currentImageIndex ? 1 : 0 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                >
                  <Image
                    src={imgSrc}
                    alt={project.title}
                    layout="fill" 
                    objectFit="cover" 
                    className='rounded-xl'
                  />
                </motion.div>
              ))}
            </div>

            <div className='absolute bottom-4 right-4 flex space-x-1'>
              <button
                onClick={prevImage}
                className='border border-border bg-darkGray rounded-full w-7 h-7 flex justify-center items-center xxsm:w-6 xxsm:h-6 cursor-custom-default'
              >
                <Image
                  src='./icons/left.svg'
                  alt='Previous'
                  width={24}
                  height={24} 
                />
              </button>
              <button
                onClick={nextImage}
                className='border border-border bg-darkGray rounded-full w-7 h-7 flex justify-center items-center xxsm:w-6 xxsm:h-6 cursor-custom-default'
              >
                <Image
                  src='./icons/right.svg'
                  alt='Next'
                  width={24}
                  height={24} 
                />
              </button>
            </div>

            {/* Render technology icons */}
            <div className='absolute bottom-16 xxsm:bottom-[3.5rem] left-3'>
              {project.technologies.map((techId: string, techIndex: number) => {
                const techIcon = icons.find((icon: Icon) => icon.id === techId);
                const translationX =
                  windowWidth > 380 ? 35 * techIndex + 5 : 26 * techIndex + 5;

                return (
                  <div
                    key={techIndex}
                    style={{
                      transform: `translateX(${translationX}px)`,
                      zIndex: `${project.technologies.length - techIndex}`,
                      position: 'absolute',
                    }}
                    className='border border-border bg-darkGray rounded-full w-11 h-11 flex justify-center items-center filter grayscale xxsm:w-9 xxsm:h-9'
                  >
                    {techIcon && (
                      <Image
                        src={techIcon.icon}
                        alt={techIcon.name}
                        width={24}
                        height={24} 
                        className='w-6 h-6 xxsm:w-5 xxsm:h-5'
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Side: Title, Brief Description, and Links */}
        <div className='flex-1 flex flex-col justify-center items-center lg:items-start lg:text-left pl-2 space-y-3 relative'>
          <h1 className='font-inconsolata text-3xl text-center lg:text-left font-normal leading-tight'>
            <span>{project.title}</span>
          </h1>
          <div className='p-6 bg-grayISH bg-opacity-30 rounded-lg w-full flex justify-center items-center shadow-md h-full relative'>
            <p className='font-inconsolata font-light leading-tight text-md text-center px-12'>
              <span>{project.briefDescription}</span>
            </p>
            <div className='absolute bottom-3 right-3 flex space-x-2'>
              {project.GitHubLink && (
                <a
                  href={project.GitHubLink}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Image
                    src='./icons/github.svg'
                    alt='GitHub'
                    width={32}
                    height={32} 
                    className='w-8 h-8 xxsm:w-6 xxsm:h-6'
                  />
                </a>
              )}
              {project.YouTubeLink && (
                <a
                  href={project.YouTubeLink}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Image
                    src='./icons/youtube.svg'
                    alt='YouTube'
                    width={32}
                    height={32}
                    className='w-8 h-8 xxsm:w-6 xxsm:h-6'
                  />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Objectives and Goals Section */}
      <div className='mt-8 w-full max-w-5xl pb-8'>
        <h1 className='text-3xl font-inconsolata justify-center items-center text-center pb-3 font-normal leading-tight'>
          <span>Objectives and Goals</span>
        </h1>
        <div className='p-6 bg-grayISH bg-opacity-30 rounded-lg flex justify-center items-center shadow-md h-full px-36'>
          <p className='font-inconsolata font-light leading-tight text-md text-center'>
            <span>{project.problemStatement}</span>
          </p>
        </div>
      </div>

      {/* Features and Highlights */}
      <div className='mt-8 w-full max-w-5xl'>
        <h1 className='font-inconsolata text-3xl justify-center items-center text-center pb-3 font-normal leading-tight'>
          <span>Features and Highlights</span>
        </h1>
        <div className='p-6 bg-grayISH bg-opacity-30 rounded-lg flex justify-center items-center shadow-md h-full px-36'>
          <p className='font-inconsolata font-light leading-tight text-md text-center'>
            <span>{project.keyFeatures}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectClientComponent;
