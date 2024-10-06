import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';
import { ABOUT_TEXT } from '../constants';

const splitAboutText = ABOUT_TEXT.split("");

const About = () => {
  // Create a reference to the section
  const ref = useRef(null);

  // Check if the section is in view
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className='border-b border-neutral-900 pb-4'>
      <motion.h1 
      whileInView={{opacity:1,y:0}}
      initial={{opacity:0,y:-100}}
      transition={{duration:1.5}}
      className='my-20 text-center text-4xl'>
        About 
        <span className='text-neutral-500 pl-2'>Me</span>
      </motion.h1>
      <div className='flex justify-center'>
        <div className='max-w-xl text-center'>
          <p className='my-2 py-6 font-light tracking-tighter'>
            {splitAboutText.map((character, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: isInView ? 1 : 0 }} 
                transition={{
                  duration: 0.05,
                  delay: index * 0.005,  /* Adjust delay here for smoother typing effect */
                }}
              >
                {character}
              </motion.span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
