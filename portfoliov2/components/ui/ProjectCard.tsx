import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { icons } from '@/data';
import { useRouter } from 'next/navigation';

interface ProjectCardProps {
  project: {
    id: string;
    title: string;
    description: string;
    image: string[];
    technologies: string[];
    GitHubLink?: string;
    YouTubeLink?: string;
  };
  index: number;
  windowWidth: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, windowWidth }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const router = useRouter();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const isLeftCard = index % 2 === 0;
  const initialX = isLeftCard ? '-15%' : '15%';

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % project.image.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + project.image.length) % project.image.length);
  };

  const cardAnimation = windowWidth > 1024 ? {
    initial: { opacity: 0, x: initialX },
    animate: { opacity: inView ? [0, 0.5, 1] : 0, x: inView ? 0 : initialX },
    transition: { x: { duration: 0.5, ease: 'easeOut' }, opacity: { duration: 0.5, ease: 'easeOut', delay: 0.25 } }
  } : {
    initial: { opacity: 0 },
    animate: { opacity: inView ? 1 : 0 },
    transition: { opacity: { duration: 0.5, ease: 'easeOut' } }
  };

  const handleProjectClick = () => {
    router.push(`/${project.id}`);
  };

  return (
    <motion.div
      ref={ref}
      initial={cardAnimation.initial}
      animate={cardAnimation.animate}
      transition={cardAnimation.transition}
      onClick={handleProjectClick}
      className="bg-lightGray border-[2px] shadow-bottom-left border-borderProject rounded-2xl p-5 flex flex-col relative 
      filter grayscale hover:grayscale-0 transition duration-500 w-full max-w-[400px] h-[470px] cursor-custom-card"
    >
      <div
        className='bg-grayISH w-full h-[224px] rounded-2xl border-black flex justify-center items-center mb-4 relative overflow-hidden'
        onClick={handleProjectClick}
      >
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

        <div className="absolute bottom-4 right-4 flex space-x-1">
          <div
            className='border border-border bg-darkGray rounded-full w-7 h-7 flex justify-center items-center xxsm:w-6 xxsm:h-6'
            onClick={prevImage} 
          >
            <img src="./icons/left.svg" alt="Left Arrow" className="w-6 h-6 flex items-center justify-center xxsm:w-5 xxsm:h-5" />
          </div>
          <div
            className='border border-border bg-darkGray rounded-full w-7 h-7 flex justify-center items-center xxsm:w-6 xxsm:h-6'
            onClick={nextImage} 
          >
            <img src="./icons/right.svg" alt="Right Arrow" className="w-6 h-6 flex items-center justify-center xxsm:w-5 xxsm:h-5" />
          </div>
        </div>
      </div>

      {/* Title and Description that won't trigger navigation on click */}
      <h1
        className='text-2xl font-normal font-inconsolata xxsm:text-xl'
        onClick={(e) => e.stopPropagation()} // Prevents click from opening the project page
      >
        <span>{project.title}</span>
      </h1>

      <h1
        className='text-xl font-inconsolata text-fontLG2 xxsm:text-base font-light'
        onClick={(e) => e.stopPropagation()} // Prevents click from opening the project page
      >
        <span>{project.description}</span>
      </h1>

      <div className='absolute bottom-16 xxsm:bottom-[3.5rem] left-3'>
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
              className='border border-border bg-darkGray rounded-full w-11 h-11 flex justify-center items-center filter grayscale 
              xxsm:w-9 xxsm:h-9'
            >
              {techIcon && (
                <img src={techIcon.icon} alt={techIcon.name} className="w-6 h-6 xxsm:w-5 xxsm:h-5" />
              )}
            </div>
          );
        })}
      </div>

      <div className="absolute bottom-6 right-6 flex space-x-1">
        {project.GitHubLink && (
          <a 
            href={project.GitHubLink} 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()} // Prevents opening the project page when clicking on GitHub link
          >
            <img src="./icons/github.svg" alt="GitHub" className="w-8 h-8 xxsm:w-6 xxsm:h-6" />
          </a>
        )}
        {project.YouTubeLink && (
          <a 
            href={project.YouTubeLink} 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()} // Prevents opening the project page when clicking on YouTube link
          >
            <img src="./icons/youtube.svg" alt="YouTube" className="w-8 h-8 xxsm:w-6 xxsm:h-6" />
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
