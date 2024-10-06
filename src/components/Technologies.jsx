import React from 'react';
import { RiReactjsLine } from 'react-icons/ri';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiMongodb, SiTensorflow, SiTailwindcss } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';
import { BiLogoPostgresql } from 'react-icons/bi';
import { motion } from 'framer-motion';
import { GiArtificialIntelligence } from 'react-icons/gi'; // Placeholder for Langchain
import { FaDatabase } from 'react-icons/fa'; // Placeholder for Pinecone

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: 'linear',
      repeat: Infinity,
      repeatType: 'reverse',
    },
  },
});

const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className='my-20 text-center text-4xl'
      >
        Technologies
      </motion.h2>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className='flex flex-wrap items-center justify-center gap-4'
      >
        {/* React */}
        <motion.div
          variants={iconVariants(2.5)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-800 p-4'
        >
          <RiReactjsLine className='text-7xl text-cyan-400' />
        </motion.div>

        {/* Next.js */}
        <motion.div
          variants={iconVariants(3)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-800 p-4'
        >
          <TbBrandNextjs className='text-7xl' />
        </motion.div>

        {/* MongoDB */}
        <motion.div
          variants={iconVariants(4)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-800 p-4'
        >
          <SiMongodb className='text-7xl text-green-500' />
        </motion.div>

        {/* TensorFlow */}
        <motion.div
          variants={iconVariants(2)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-800 p-4'
        >
          <SiTensorflow className='text-7xl text-orange-600' />
        </motion.div>

        {/* Node.js */}
        <motion.div
          variants={iconVariants(4)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-800 p-4'
        >
          <FaNodeJs className='text-7xl text-green-500' />
        </motion.div>

        {/* PostgreSQL */}
        <motion.div
          variants={iconVariants(3)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-800 p-4'
        >
          <BiLogoPostgresql className='text-7xl text-sky-700' />
        </motion.div>

        {/* Tailwind CSS */}
        <motion.div
          variants={iconVariants(2.5)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-800 p-4'
        >
          <SiTailwindcss className='text-7xl text-sky-400' />
        </motion.div>

        {/* Langchain (AI) */}
        {/* <motion.div
          variants={iconVariants(5)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-800 p-4'
        >
          <GiArtificialIntelligence className='text-7xl text-purple-600' />
        </motion.div> */}

        {/* Pinecone (Vector DB) */}
        {/* <motion.div
          variants={iconVariants(6)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-800 p-4'
        >
          <FaDatabase className='text-7xl text-blue-600' />
        </motion.div> */}
      </motion.div>
    </div>
  );
};

export default Technologies;
