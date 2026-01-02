import React, { useState, useEffect } from 'react';
import { projects } from '@/data';
import ProjectCard from '../ui/ProjectCard';
import { motion } from 'framer-motion';

const Projects = () => {
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isOdd = projects.length % 2 !== 0;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="py-20 relative min-h-screen flex flex-col justify-center items-center space-y-10 w-full">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full flex flex-col items-center text-center mx-auto"
      >
        <h1 className="font-inconsolata lg:text-4xl font-normal leading-tight text-3xl">
          <span>What I&#39;ve benn working on</span>
        </h1>
        <h1 className="font-inconsolata lg:text-fontLG2 font-light leading-tight pb-8 xsm:pb-2 text-[20px]">
          <span>A selection of projects.</span>
          <br />
          <span>The rest were learning experiments.</span>
        </h1>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-5 xsm:p-1"
      >
        {projects.map((project, index) => {
          const isLastOddCard = isOdd && index === projects.length - 1;

          if (isLastOddCard) {
            return (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className="lg:col-span-2 flex justify-center"
              >
                <ProjectCard project={project} index={index} windowWidth={windowWidth} isLastOddCard={isLastOddCard} />
              </motion.div>
            );
          }

          return (
            <motion.div key={index} variants={itemVariants}>
              <ProjectCard project={project} index={index} windowWidth={windowWidth} />
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Projects;
