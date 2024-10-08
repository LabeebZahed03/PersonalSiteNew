import React from 'react';
import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h2 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }} 
        className='my-20 text-center text-4xl'>
          Projects
      </motion.h2>

      <div>
        {PROJECTS.map((project, index) => (
          <div 
            key={index} 
            className='mb-8 flex flex-col lg:flex-row lg:justify-center lg:items-start gap-4'
          >
            {/* Date Section */}
            <motion.div 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }} 
              className='w-full lg:w-1/4'
            >
              <p className='mb-2 text-sm text-neutral-400'>{project.date}</p>
            </motion.div>

            {/* Project Title, Description, and Technologies */}
            <motion.div 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }} // Add this line
              className='w-full lg:w-3/4 max-w-2xl'
            >
              {/* Project Title */}
              <h6 className='mb-2 text-xl font-semibold'>{project.title}</h6>

              {/* Description as bullet points */}
              <ul className='mb-4 list-disc pl-5 text-neutral-400'>
                {project.description.map((desc, idx) => (
                  <li key={idx} className='mb-2'>
                    {desc}
                  </li>
                ))}
              </ul>

              {/* Technologies */}
              <div className='flex flex-wrap gap-2'>
                {project.technologies.map((tech, idx) => (
                  <span 
                    key={idx} 
                    className='rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-700'
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
