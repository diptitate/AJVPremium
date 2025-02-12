import React from 'react';


const Hero = (props) => {
  return (
    <div className='w-full'>
      <img
        className='top-0 left-0 w-full h-full object-cover'
        src={props.banner}
        alt='/'
      />
      <div className='bg-black/30 absolute top-0 left-0 w-full' />
      <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white'>
        <div className='lg: left-[8%] sm: top-[20%] md:left-[10%] max-w-[1100px] m-auto absolute p-4'>
          <h1 className='font-bold text-4xl md:text-4xl drop-shadow-2xl'>
            {props.title}
          </h1>
 
        </div>
      </div>
    </div>
  );
};

export default Hero;
