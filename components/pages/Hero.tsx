import React from 'react';
import { socialmedia, icons } from '@/data';
import Image from 'next/image';
import TechWheel from '../ui/TechWheel';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className='flex justify-center items-center h-screen px-4 mx-4'>
      <div className='lg:grid lg:grid-cols-2 lg:items-center lg:gap-1 flex flex-col items-center justify-center text-center'>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className='col-span-1 flex flex-col lg:mr-10 text-center lg:text-left'
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className='font-inconsolata text-3xl lg:text-4xl font-normal leading-tight'
          >
            <span>Hi, I&apos;m Daniel Yordanov</span>
          </motion.h1>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className='font-inconsolata lg:text-fontLG2 text-[20px] font-light leading-tight xsm:text-lg'
          >
            <span>Computer Science student,</span><br />
            <span>eager to turn ideas into reality.</span>
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            id='social_media_links' 
            className='flex justify-center lg:justify-start flex-row gap-2 mt-3'
          >
            {socialmedia.map((social) => {
              const icon = icons.find((icon) => icon.id === social.iconId);
              return (
                <motion.a 
                  key={social.id}
                  href={social.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='bg-grayISH rounded-xl sm:w-10 sm:h-10 w-9 h-9 shadow-bottom-left flex justify-center items-center'
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {icon && (
                    <Image
                      src={icon.icon}
                      alt={social.name}
                      width={Number(social.width)}
                      height={Number(social.height)}
                      loading="eager"
                      priority={true}
                      quality={90}
                      className="object-contain"
                    />
                  )}
                </motion.a>
              );
            })}
          </motion.div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className='col-span-1 flex justify-center mt-8 lg:mt-0'
        >
          <TechWheel size={{ sm: 270, lg: 370 }} />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
