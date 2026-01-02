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
  technologies: (string | { id: string; size?: number })[]; 
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
    <motion.div 
      id="project-detail-container"
      className='py-20 relative min-h-screen flex flex-col justify-center items-center space-y-10 w-full px-20 smlg:px-11 xxsm:px-5'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className='flex flex-col lg:flex-row w-full max-w-5xl space-x-0 lg:space-x-4 space-y-4 lg:space-y-0'>
        <motion.div 
          className='relative flex flex-col items-center w-full lg:w-[470px]'
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.button
            onClick={goBackToProjects}
            className='absolute -top-9 left-0 flex items-center text-sm bg-lightGray rounded-xl px-2 py-1 hover:bg-grayISH justify-center shadow-sm border-2 border-lightGray hover:border-grayISH cursor-custom-default'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image src='./icons/left.svg' alt='Go Back' width={16} height={16} />
            Go Back
          </motion.button>

          <div className='relative w-full h-[440px] rounded-xl overflow-hidden shadow-lg border-lightGray border-2'>
            {project.image.map((imgSrc: string, imgIndex: number) => (
              <motion.div
                key={imgIndex}
                className='absolute w-full h-full'
                initial={{ opacity: 0 }}
                animate={{ opacity: imgIndex === currentImageIndex ? 1 : 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              >
                <Image
                  src={imgSrc}
                  alt={project.title}
                  fill
                  className='object-cover'
                />
              </motion.div>
            ))}

            <motion.div 
              className='absolute bottom-4 right-4 flex space-x-1'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <motion.button
                onClick={prevImage}
                className='border border-border bg-darkGray rounded-full w-7 h-7 flex justify-center items-center xxsm:w-6 xxsm:h-6 cursor-custom-default'
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Image
                  src='./icons/left.svg'
                  alt='Previous'
                  width={24}
                  height={24} 
                />
              </motion.button>
              <motion.button
                onClick={nextImage}
                className='border border-border bg-darkGray rounded-full w-7 h-7 flex justify-center items-center xxsm:w-6 xxsm:h-6 cursor-custom-default'
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Image
                  src='./icons/right.svg'
                  alt='Next'
                  width={24}
                  height={24} 
                />
              </motion.button>
            </motion.div>
          </div>

          <div className='absolute bottom-16 xxsm:bottom-[3.5rem] left-3'>
            {project.technologies.map((techItem, techIndex) => {
              const techId = typeof techItem === 'string' ? techItem : techItem.id;
              
              const techRadius = typeof techItem === 'object' && techItem.size ? techItem.size : 12;
              const techDiameter = techRadius * 2;

              const techIcon = icons.find((icon: Icon) => icon.id === techId);
              const translationX =
                windowWidth > 380 ? 35 * techIndex + 5 : 26 * techIndex + 5;

              return (
                <motion.div
                  key={techIndex}
                  style={{
                    x: translationX, 
                    zIndex: `${project.technologies.length - techIndex}`,
                    position: 'absolute',
                  }}
                  className='border border-border bg-darkGray rounded-full w-11 h-11 flex justify-center items-center filter grayscale xxsm:w-9 xxsm:h-9'
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + techIndex * 0.1 }}
                >
                  {techIcon && (
                    <Image
                      src={techIcon.icon}
                      alt={techIcon.name}
                      width={techDiameter}
                      height={techDiameter} 
                      className='object-contain'
                    />
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div 
          className='flex-1 flex flex-col justify-center items-center lg:items-start lg:text-left pl-2 space-y-3'
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.h1 
            className='font-inconsolata text-3xl text-center lg:text-left font-normal leading-tight'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <span>{project.title}</span>
          </motion.h1>
          <motion.div 
            className='p-6 bg-grayISH bg-opacity-30 rounded-lg w-full flex justify-center items-center shadow-md h-full relative'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <p className='font-inconsolata font-light leading-tight text-md text-center px-4 sm:px-12'>
              <span>{project.briefDescription}</span>
            </p>
            <motion.div 
              className='absolute bottom-3 right-3 flex space-x-2'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {project.GitHubLink && (
                <motion.a
                  href={project.GitHubLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Image
                    src='./icons/github.svg'
                    alt='GitHub'
                    width={32}
                    height={32} 
                    className='w-8 h-8 xxsm:w-6 xxsm:h-6'
                  />
                </motion.a>
              )}
              {project.YouTubeLink && (
                <motion.a
                  href={project.YouTubeLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Image
                    src='./icons/youtube.svg'
                    alt='YouTube'
                    width={32}
                    height={32}
                    className='w-8 h-8 xxsm:w-6 xxsm:h-6'
                  />
                </motion.a>
              )}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        className='mt-8 w-full max-w-5xl'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <motion.h1 
          className='text-3xl font-inconsolata justify-center items-center text-center pb-3 font-normal leading-tight'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <span>Objectives and Goals</span>
        </motion.h1>
        <motion.div 
          className='p-6 bg-grayISH bg-opacity-30 rounded-lg flex justify-center items-center shadow-md h-full px-6 sm:px-10 lg:px-36'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <p className='font-inconsolata font-light leading-tight text-md text-center'>
            <span>{project.problemStatement}</span>
          </p>
        </motion.div>
      </motion.div>

      <motion.div 
        className='mt-8 w-full max-w-5xl'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
      >
        <motion.h1 
          className='font-inconsolata text-3xl justify-center items-center text-center pb-3 font-normal leading-tight'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <span>Features and Highlights</span>
        </motion.h1>
        <motion.div 
          className='p-6 bg-grayISH bg-opacity-30 rounded-lg flex justify-center items-center shadow-md h-full px-6 sm:px-10 lg:px-36'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
        >
          <p className='font-inconsolata font-light leading-tight text-md text-center'>
            <span>{project.keyFeatures}</span>
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectClientComponent;