import React from 'react'
import {HERO_CONTENT} from "../constants";
import profilePic from "../assets/Labeeb.jpeg";
const Hero = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
      <div className='flex flex-col items-center lg:items-center'>
        {/* Profile Picture */}
        <div className='w-1/3 lg:w-1/4'>
          <img src={profilePic} alt='Labeeb Profile Picture' className='rounded-xl'/>
        </div>
        {/* Name and Title */}
        <div className='text-center lg:text-center'>
          <h1 className='pt-8 text-5xl font-thin tracking-tight lg:mt-8 lg:text-6xl'>
            Labeeb Zahed
          </h1>
          <span className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl lg:text-3xl tracking-tight text-transparent'>
            AI Engineer
          </span>
        </div>
        {/* Hero Content */}
        <div className='max-w-xl text-center lg:text-center py-6'>
          <p className='font-light tracking-tighter'>{HERO_CONTENT}</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;

