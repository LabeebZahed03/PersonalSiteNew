import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';
import { ABOUT_TEXT } from '../constants';

const paragraphs = ABOUT_TEXT.split('\n\n');

const About = () => {
  // Create a reference to the section
  const ref = useRef(null);

  // Check if the section is in view
  const isInView = useInView(ref, { once: true });

  // Cumulative character index for delay calculation
  let cumulativeCharIndex = 0;

  return (
    <div ref={ref} className='border-b border-neutral-900 pb-4'>
      <motion.h1 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        viewport={{once:true}}
        className='my-20 text-center text-4xl'
      >
        About 
        <span className='text-neutral-500 pl-2'>Me</span>
      </motion.h1>
      <div className='flex justify-center'>
        <div className='max-w-xl text-center'>
          {paragraphs.map((paragraph, pIndex) => {
            const characters = paragraph.split('');
            return (
              <p key={pIndex} className='my-4 font-light tracking-tighter'>
                {characters.map((character, cIndex) => {
                  const charIndex = cumulativeCharIndex + cIndex;
                  return (
                    <motion.span
                      key={cIndex}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: isInView ? 1 : 0 }}
                      transition={{
                        duration: 0.05,
                        delay: charIndex * 0.005,  
                      }}
                      viewport={{once:true}}
                    >
                      {character}
                    </motion.span>
                  );
                })}
                {/* Update the cumulative character index */}
                {(() => { cumulativeCharIndex += characters.length; return null; })()}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default About;
