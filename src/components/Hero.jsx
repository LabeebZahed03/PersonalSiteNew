import React from 'react';
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/Labeeb.jpeg";
import { motion } from 'framer-motion';

const Hero = () => {

  // Helper function to split the content into letters
  const splitText = HERO_CONTENT.split('');

  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
      <div className='flex flex-col items-center lg:items-center'>
        {/* Profile Picture */}
        <div className='w-1/3 lg:w-1/4'>
          <img src={profilePic} alt='Labeeb Profile Picture' className='rounded-xl'/>
        </div>

        {/* Name and Title */}
        <div className='text-center lg:text-center'>
          {/* Labeeb Zahed (Slide from the left) */}
          <motion.h1 
            className='pt-8 text-5xl font-thin tracking-tight lg:mt-8 lg:text-6xl'
            // whileInView={{opacity:1,y:0}}
            // initial={{opacity:0,y:-100}}
            // transition={{duration:1.5}}
          >
            Labeeb Zahed
          </motion.h1>

          {/* AI Engineer (Slide from the right) */}
          <motion.span
            className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl lg:text-3xl tracking-tight text-transparent'
            whileInView={{opacity:1,y:0}}
            initial={{opacity:0,y:-100}}
            transition={{duration:1.5}}
          >
            AI Engineer
          </motion.span>
        </div>

        {/* Hero Content */}
        <div className='max-w-xl text-center lg:text-center py-6'>
          <p className='font-light tracking-tighter'>
            {splitText.map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ 
                  duration: 0.05, 
                  delay: index * 0.005
                }}
              >
                {char}
              </motion.span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
