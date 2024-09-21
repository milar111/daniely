import React from 'react';
import { socialmedia, icons } from '@/data';
import TechWheel from '../ui/TechWheel';

const Hero = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='grid grid-cols-2 items-center gap-4'>
        <div className='col-span-1 flex flex-col mr-4'>
          <h1 className='font-inconsolata text-fontLG1 font-normal leading-tight'>
            <span>Hi, I’m Daniel Yordanov</span>
          </h1>
          <h1 className='font-inconsolata text-fontLG2 font-light leading-tight'>
            <span>Computer Science student,</span><br />
            <span>eager to turn ideas into reality.</span>
          </h1>
          <div id='social_media_links' className='flex flex-row gap-2 mt-3'>
            {socialmedia.map((social) => {
              const icon = icons.find((icon) => icon.id === social.iconId);
              return (
                <div
                  key={social.id}
                  className='bg-grayISH rounded-xl w-10 h-10 shadow-bottom-left flex justify-center items-center'
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
        <div className='col-span-1 flex justify-center'>
          <TechWheel />
        </div>
      </div>
    </div>
  );
};

export default Hero;
