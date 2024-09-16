import React from 'react';

const Projects = () => {
  // Sample technology data, replace this with your actual data
  const technologies = ['Tech1', 'Tech2', 'Tech3', 'Tech4']; 

  return (
    <div className='h-screen'>
      <h1 className='font-inconsolata text-fontLG1 font-normal flex justify-center items-center leading-tight'>
        What I've Been Working On
      </h1>
      <h1 className='font-inconsolata text-fontLG2 font-light flex justify-center items-center text-center pb-10 leading-tight'>
        Certain projects aren’t listed<br/>
        due to confidentiality.
      </h1>
      <div className="grid grid-cols-2 gap-4 p-5">
        <div className="bg-white border-[2px] shadow-bottom-left border-black rounded-3xl p-5 h-[470px] w-[400px] flex flex-col">
          <div className='bg-grayISH h-[220px] w-[360px] rounded-2xl border-black border-[2px] flex justify-center items-center mb-4'>
            <p className='text-2xl'>
              Image
            </p>
          </div>
          <h1 className='text-2xl font-bold font-inconsolata font-fontLG1'>
            Header
          </h1>
          <h1 className='text-xl font-inconsolata text-fontLG2 font-normal'>
            description
          </h1>
          <div className='flex items-center justify-center mt-[6rem] -ml-[6rem]'>
            <div className='flex items-center relative'>
              {technologies.map((tech, techIndex) => (
                <div
                  key={techIndex}
                  style={{
                    transform: `translateX(-${40 * techIndex + 4}px)`,
                    zIndex: `${technologies.length - techIndex}`,
                    position: 'absolute'
                  }}
                  className='border border-border bg-darkGray rounded-full lg:w-[3.2rem] lg:h-[3.2rem] w-8 h-8'
                >
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
