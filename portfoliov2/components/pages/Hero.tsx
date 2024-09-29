import React from 'react';
import { socialmedia, icons } from '@/data';
import TechWheel from '../ui/TechWheel';

const Hero = () => {
  return (
    <div className='flex justify-center items-center h-screen px-4 mx-4'>
      <div className='lg:grid lg:grid-cols-2 lg:items-center lg:gap-1 flex flex-col items-center justify-center text-center'>
        <div className='col-span-1 flex flex-col lg:mr-10 text-center lg:text-left'>
          <h1 className='font-inconsolata text-3xl lg:text-4xl font-normal leading-tight'>
            <span>Hi, I’m Daniel Yordanov</span>
          </h1>
          <h1 className='font-inconsolata lg:text-fontLG2 text-[20px] font-light leading-tight xsm:text-lg'>
            <span>Computer Science student,</span><br />
            <span>eager to turn ideas into reality.</span>
          </h1>
          <div id='social_media_links' className='flex justify-center lg:justify-start flex-row gap-2 mt-3'>
            {socialmedia.map((social) => {
              const icon = icons.find((icon) => icon.id === social.iconId);
              return (
                <div
                  key={social.id}
                  className='bg-grayISH rounded-xl sm:w-10 sm:h-10 w-9 h-9 shadow-bottom-left flex justify-center items-center'
                >
                  <a href={social.link} target='_blank' rel='noopener noreferrer'>
                    <img
                      src={icon?.icon}
                      alt={social.name}
                      style={{ width: `${social.width}px`, height: `${social.height}px` }}
                    />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
        <div className='col-span-1 flex justify-center mt-8 lg:mt-0'>
          <TechWheel size={{ sm: 300, lg: 370 }} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
