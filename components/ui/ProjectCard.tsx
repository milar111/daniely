import React, { useState, useMemo } from 'react';
import { useInView } from 'react-intersection-observer';
import { icons } from '@/data';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

const iconMap = new Map(icons.map(icon => [icon.id, icon]));

interface ProjectCardProps {
  project: {
    id: string;
    title: string;
    description: string;
    image: string[];
    technologies: (string | { id: string; size?: number })[];
    GitHubLink?: string;
    YouTubeLink?: string;
  };
  index: number;
  windowWidth: number;
  isLastOddCard?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, windowWidth, isLastOddCard }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const router = useRouter();
  
  const { ref } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % project.image.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + project.image.length) % project.image.length);
  };

  const handleProjectClick = () => {
    router.push(`/${project.id}`);
  };

  return (
    <motion.div
      ref={ref}
      onClick={handleProjectClick}
      className="bg-lightGray border-[2px] shadow-bottom-left border-borderProject rounded-2xl p-5 flex flex-col relative 
      filter grayscale hover:grayscale-0 transition-all duration-300 w-full max-w-[400px] h-[470px] cursor-custom-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div
        className="bg-grayISH w-full h-[224px] rounded-2xl border-black flex justify-center items-center mb-4 relative overflow-hidden"
        onClick={handleProjectClick}
      >
        <div className="relative w-full h-full">
          {project.image.map((imgSrc, imgIndex) => (
            <motion.div
              key={imgIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: imgIndex === currentImageIndex ? 1 : 0 }}
              transition={{ duration: 0.5 }}
              className="absolute w-full h-full"
            >
              <Image
                src={imgSrc}
                alt={project.title}
                fill
                sizes="(max-width: 450px) 100vw, 400px"
                priority={index < 2 && imgIndex === 0}
                className="object-cover rounded-2xl"
              />
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="absolute bottom-4 right-4 flex space-x-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div
            className="border border-border bg-darkGray rounded-full w-7 h-7 flex justify-center items-center xxsm:w-6 xxsm:h-6"
            onClick={prevImage}
          >
            <Image src="./icons/left.svg" alt="Left Arrow" width={24} height={24} />
          </div>
          <div
            className="border border-border bg-darkGray rounded-full w-7 h-7 flex justify-center items-center xxsm:w-6 xxsm:h-6"
            onClick={nextImage}
          >
            <Image src="./icons/right.svg" alt="Right Arrow" width={24} height={24} />
          </div>
        </motion.div>
      </div>

      <motion.h1
        className="text-2xl font-normal font-inconsolata xxsm:text-xl"
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <span>{project.title}</span>
      </motion.h1>

      <motion.h1
        className="text-xl font-inconsolata text-fontLG2 xxsm:text-base font-light"
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <span>{project.description}</span>
      </motion.h1>

      <div className="absolute bottom-16 xxsm:bottom-[3.5rem] left-3">
        {project.technologies.map((techItem, techIndex) => {
          const techId = typeof techItem === 'string' ? techItem : techItem.id;
          
          const techIcon = iconMap.get(techId);
          
          const techRadius = typeof techItem === 'object' && techItem.size ? techItem.size : 12;
          const techDiameter = techRadius * 2;

          const translationX = windowWidth > 380 ? 35 * techIndex + 5 : 26 * techIndex + 5;

          return (
            <motion.div
              key={techIndex}
              style={{
                x: translationX,
                zIndex: project.technologies.length - techIndex,
                position: 'absolute',
              }}
              className="border border-border bg-darkGray rounded-full w-11 h-11 flex justify-center items-center filter grayscale 
              xxsm:w-9 xxsm:h-9"
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
                  className="object-contain" 
                />
              )}
            </motion.div>
          );
        })}
      </div>

      <div className="absolute bottom-6 right-6 flex space-x-1">
        {project.GitHubLink && (
          <motion.a
            href={project.GitHubLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Image src="./icons/github.svg" alt="GitHub" width={32} height={32} />
          </motion.a>
        )}
        {project.YouTubeLink && (
          <motion.a
            href={project.YouTubeLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Image src="./icons/youtube.svg" alt="YouTube" width={32} height={32} />
          </motion.a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;